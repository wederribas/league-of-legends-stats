const api = require('./api')
const XRegExp = require('xregexp')

// Custom error handling

function InvalidSummonerName(message) {
  this.message = message
}

InvalidSummonerName.prototype = new Error()
InvalidSummonerName.prototype.constructor = Error

// Riot LOL API wrapping function

const getSummonerByName = async summonerName => {
  const validNamePattern = new XRegExp('^[0-9\\p{L} _\\.]+$')

  if (!validNamePattern.test(summonerName)) {
    throw new InvalidSummonerName('Invalid summoner name')
  }

  return await api.Summoner.by.name(summonerName)
}

const getRecentMatchesByAccountId = async accountId => {
  return await api.Matchlist.Recent.by.accountID(accountId)
}

module.exports = {
  getSummonerByName,
  getRecentMatchesByAccountId,
  InvalidSummonerName
}
