const router = require('express').Router()
const api = require('./api')

// Encapsulates the main applications routes
router.use('/api/v1', api)

module.exports = router
