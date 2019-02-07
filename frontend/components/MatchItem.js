import React, { Component } from 'react'
import styled from 'styled-components'
import timeAgo from '../utils/timeAgo'

const CHAMPION_IMG_URL =
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'

const Card = styled.section`
  margin: 1rem;
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: ${props => props.theme.bs};
  -moz-box-shadow: ${props => props.theme.bs};
  box-shadow: ${props => props.theme.bs};
`

const Icon = styled.img`
  margin-left: 40px;
  border-radius: 50%;
  transform: scale(0.7);
`

const InfoSection = styled.div`
  margin-left: 40px;
  padding: 10px;
`

const Champion = styled.span`
  font-style: italic;
  font-size: 20pt;
`

const GameResult = styled.span`
  font-size: 15pt;
`

const Blue = styled.span`
  color: ${props => props.theme.blue};
  font-weight: bold;
`

const Red = styled.span`
  color: ${props => props.theme.red};
  font-weight: bold;
`

const MatchesItem = props => {
  const { match } = props
  const gameRelativeDate = timeAgo.format(new Date(match.gameCreation))
  return (
    <Card>
      <InfoSection>
        <p>{gameRelativeDate}</p>
      </InfoSection>
      <Icon src={CHAMPION_IMG_URL + match.championImage} alt="Champion Icon" />
      <InfoSection>
        <Champion>{match.championName}</Champion>
        <br />
        <GameResult>
          {match.didWin ? <Blue>{'Victory'}</Blue> : <Red>{'Defeat'}</Red>}
        </GameResult>
      </InfoSection>
      <InfoSection>
        <p>
          K {match.kda.kills} / <Red>D {match.kda.deaths}</Red> / A{' '}
          {match.kda.assists}
        </p>
      </InfoSection>
    </Card>
  )
}

export default MatchesItem
