const router = require('express').Router()

router.get('/:summonerName', function(req, res, next) {
  return res.json(`It worked, within /summoners/${req.params.summonerName}`)
})

module.exports = router
