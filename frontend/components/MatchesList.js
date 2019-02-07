import React, { Component } from 'react'
import styled from 'styled-components'
import MatchItem from './MatchItem'

const List = styled.section`
  display: flex;
`

const MatchesList = props => {
  return props.matches.map((match, index) => (
    <List key={index}>
      <MatchItem match={match} />
    </List>
  ))
}

export default MatchesList
