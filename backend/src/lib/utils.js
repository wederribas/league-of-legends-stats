const api = require('./api')
const XRegExp = require('xregexp')

const { InvalidSummonerName, getMatchesPagination } = require('./helpers')

/**
 * Riot LOL API wrapping function
 */

const parseMatchData = (championIdMap, summonerId, match) => {
  const { participantId } = match.participantIdentities.find(
    identity => identity.player.summonerId === summonerId
  )

  const participant = match.participants.find(
    p => p.participantId === participantId
  )

  const champion = championIdMap.data[participant.championId]

  const kda = {
    kills: participant.stats.kills,
    deaths: participant.stats.deaths,
    assists: participant.stats.assists
  }

  return {
    gameCreation: match.gameCreation,
    gameDuration: match.gameDuration,
    seasonId: match.seasonId,
    didWin:
      participant.teamId ===
      match.teams.find(({ win }) => win === 'Win').teamId,
    championLevel: participant.stats.champLevel,
    championName: champion.name,
    championImage: champion.image.full,
    doubleKills: participant.stats.doubleKills,
    tripleKills: participant.stats.tripleKills,
    quadraKills: participant.stats.quadraKills,
    pentaKills: participant.stats.pentaKills,
    spells: [participant.spell1Id, participant.spell2Id],
    kda: kda
  }
}

const getSummonerByName = async summonerName => {
  const validNamePattern = new XRegExp('^[0-9\\p{L} _\\.]+$')

  if (!validNamePattern.test(summonerName)) {
    throw new InvalidSummonerName('Invalid summoner name')
  }

  return await api.Summoner.by.name(summonerName)
}

const getRecentMatchesByAccountId = async (accountId, currentIndex) => {
  // Get champion related data - it will be used to match the champion used
  // by a player during a game
  const championIdMap = await api.DDragon.Champion.listDataByIdWithParentAsId()

  // Get summoner ID as it's required to get player's stats
  const { id } = await api.Summoner.by.accountID(accountId)

  const { matches } = await api.Matchlist.by.accountID(accountId)

  const { startIndex, endIndex } = getMatchesPagination(currentIndex)

  const gameIds = matches
    .slice(startIndex, endIndex)
    .map(({ gameId }) => gameId)

  const matchDtos = await Promise.all(gameIds.map(api.Match.get))

  const processor = match => parseMatchData(championIdMap, id, match)

  return await Promise.all(matchDtos.map(processor))
}

module.exports = {
  getSummonerByName,
  getRecentMatchesByAccountId,
  InvalidSummonerName
}
