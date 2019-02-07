import React, { Component } from 'react'
import styled from 'styled-components'

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
  border-radius: 50%;
  transform: scale(0.7);
`

const InfoSection = styled.div`
  margin-left: 40px;
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
  return (
    <Card>
      <Icon src={CHAMPION_IMG_URL + match.championImage} />
      <InfoSection>
        <Champion>{match.championName}</Champion>
        <br />
        <GameResult>
          {match.didWin ? <Blue>{'Victory'}</Blue> : <Red>{'Defeat'}</Red>}
        </GameResult>
      </InfoSection>
    </Card>
  )
}

export default MatchesItem
