import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  @keyframes bouncing-loader {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.1;
      transform: translateY(-1rem);
    }
  }

  .bouncing-loader {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .bouncing-loader > div {
    width: 1rem;
    height: 1rem;
    margin: 0.7rem 0.2rem;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.1s;
  }

  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.2s;
  }
`

export default function BouncingLoader() {
  return (
    <Container className="bouncing-loader">
      <div />
      <div />
      <div />
    </Container>
  )
}
