const MATCHES_PER_PAGE = 5

/**
 * Generate the next values for matches pagination
 */
const getMatchesPagination = currentIndex => {
  return {
    startIndex: currentIndex,
    endIndex: parseInt(currentIndex) + parseInt(MATCHES_PER_PAGE)
  }
}

/**
 * Custom error handling
 */
function InvalidSummonerName(message) {
  this.message = message
}

InvalidSummonerName.prototype = new Error()
InvalidSummonerName.prototype.constructor = Error

module.exports = {
  getMatchesPagination,
  InvalidSummonerName
}
