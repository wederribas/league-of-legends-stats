const { Kayn, REGIONS } = require('kayn')

const isDebugEnabled = process.env.NODE_ENV !== 'production'

const riotAPI = Kayn(process.env.RIOT_API_KEY)({
  region: REGIONS.NORTH_AMERICA,
  locale: 'en_US',
  debugOptions: {
    isEnabled: isDebugEnabled,
    showKey: false
  },
  requestOptions: {
    shouldRetry: true,
    numberOfRetriesBeforeAbort: 3,
    delayBeforeRetry: 1000,
    burst: false,
    shouldExitOn403: false
  }
})

module.exports = riotAPI
