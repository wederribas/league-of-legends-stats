import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import SearchBar from './SearchBar'
import BouncingLoader from './BouncingLoader'
import Summoner from './Summoner'
import MatchesList from './MatchesList'

class Container extends Component {
  state = {
    isLoading: false,
    summoner: undefined,
    matches: undefined
  }

  getAndHandleSummoner = async summonerName => {
    const summonerResp = await fetch(
      `http://localhost:5000/api/v1/summoners/${summonerName}`
    )
    const summoner = await summonerResp.json()

    this.setState({ summoner: summoner })

    return summoner.accountId
  }

  loadSummonerMatches = async summonerName => {
    this.setState({ isLoading: true, summoner: undefined })

    const accountId = await this.getAndHandleSummoner(summonerName)

    const matchesResp = await fetch(
      `http://localhost:5000/api/v1/summoners/${accountId}/matches`
    )
    const matches = await matchesResp.json()

    this.setState({ isLoading: false, matches: matches })
  }

  render() {
    return (
      <Fragment>
        <SearchBar handleSubmit={this.loadSummonerMatches} />
        {this.state.summoner ? <Summoner data={this.state.summoner} /> : null}
        {this.state.matches ? (
          <MatchesList matches={this.state.matches} />
        ) : null}
        {this.state.isLoading ? <BouncingLoader /> : null}
      </Fragment>
    )
  }
}

export default Container
