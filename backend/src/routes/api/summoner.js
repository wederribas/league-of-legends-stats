const router = require('express').Router()
const { InvalidSummonerName } = require('../../lib/helpers')
const {
  getSummonerByName,
  getRecentMatchesByAccountId
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
    // Ensure the page param is a number and start as 0 if not provided
    let startIndex = 0
    if (req.query.start && Number.isInteger(parseInt(req.query.start))) {
      startIndex = req.query.start
    }

    const summoner = await getRecentMatchesByAccountId(
      req.params.accountId,
      startIndex
    )

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
