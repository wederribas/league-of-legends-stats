const router = require('express').Router()
const {
  getSummonerByName,
  getRecentMatchesByAccountId,
  InvalidSummonerName
} = require('../../lib/utils')

router.get('/:summonerName', async function(req, res, next) {
  try {
    const summoner = await getSummonerByName(req.params.summonerName)
    return res.json(summoner)
  } catch (err) {
    if (err instanceof InvalidSummonerName) {
      return res.status(422).json({ message: err.message })
    }

    return res.status(404).json({ message: 'Summoner name not found' })
  }
})

router.get('/:accountId/matches', async function(req, res, next) {
  try {
    const summoner = await getRecentMatchesByAccountId(req.params.accountId)
    return res.json(summoner)
  } catch (err) {
    if (err instanceof InvalidSummonerName) {
      return res.status(422).json({ message: err.message })
    }

    return res
      .status(404)
      .json({ message: 'No matches found for the given account ID' })
  }
})

module.exports = router
