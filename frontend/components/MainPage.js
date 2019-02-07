import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'

const theme = {
  red: '#FF0000',
  grey: '#9FB3C8',
  lightgrey: '#F0F4F8',
  darkgrey: '#334E68',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  height: '100%',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const StyledPage = styled.div`
  color: ${props => props.theme.darkgrey};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-style: normal;
  }
  html {
    height: ${props => props.theme.height};
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${props => props.theme.lightgrey};
    height: ${props => props.theme.height};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`

class MainPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <StyledPage>
            <Meta />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default MainPage
