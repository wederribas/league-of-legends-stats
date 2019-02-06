const router = require('express').Router()
const summoner = require('./summoner')

router.use('/summoners', summoner)

module.exports = router
