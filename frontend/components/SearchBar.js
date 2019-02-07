import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const StyledInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 6px;
  -webkit-box-shadow: 0px 9px 69px -17px rgba(0, 0, 0, 0.9);
  -moz-box-shadow: 0px 9px 69px -17px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 9px 69px -17px rgba(0, 0, 0, 0.9);
  border: none;
  font-size: 15pt;
  padding-left: 10px;
`

const Button = styled.button`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.darkgreen};
  margin: 1rem;
  cursor: pointer;
  font-weight: bold;
  height: 50px;
  width: 80px;
  font-size: 11pt;
  border-radius: 6px;
  border: none;
  -webkit-box-shadow: 0px 9px 69px -17px rgba(0, 0, 0, 0.9);
  -moz-box-shadow: 0px 9px 69px -17px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 12px 69px -13px rgba(0, 0, 0, 0.9);
`

export default class Input extends Component {
  state = {
    summonerName: ''
  }

  handleChange = event => {
    this.setState({
      summonerName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state.summonerName)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
        <Container>
          <StyledInput
            placeholder="Summoner name"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <Button type="submit">Search</Button>
        </Container>
      </form>
    )
  }
}
