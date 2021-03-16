import * as React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #D99000;
  background-color: maroon;
  background: rgb(17,0,0);
  background: linear-gradient(0deg, rgba(17,0,0,1) 0%, rgba(128,0,0,1) 100%);
  height: 100vh;
}

body:after {
  content: '';
  animation: grain 8s steps(10) infinite;
  background-image: url('../img/paper_1_grainy_texture_to_background.png');
  height: 300%;
  width: 300%;
  top: -100%;
  left: -50%;
  opacity: 0.15;
  position: fixed;
}

@keyframes grain {
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 30%) }
  90% { transform:translate(-10%, 10%) }
}
`

const StyledWrapper = styled.div`
  header {
    width: 15vh;
  }

  main,
  h1 h2 h3 {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    height: 40vh;
    margin: 0 10em 0 10em;
  }

  h1 {
    font-size: 3.5em;
    margin: 0;
  }

  h2 {
    font-size: 3em;
    margin: 0;
  }

  h3 {
    font-size: 2em;
    margin: 0;
  }

  .h3-footer {
    font-size: 1.6em;
    margin: 12em 6em 0 10em;
    display: flex;
    justify-content: flex-end;
    /* font-style: italic; */
    animation: glitch 1s linear infinite;
  }

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  .h3-footer::before,
  .h3-footer::after {
    content: attr(title);
    position: absolute;
  }

  .h3-footer::before {
    animation: glitchTop 1s linear infinite;
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  .h3-footer::after {
    animation: glitchBotom 1.5s linear infinite;
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-10px, 7px) skew(13deg);
    }
  }
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <div>
          <header></header>
          <main>
            <h3>and I am front-end developer.</h3>
            <h2>my name is Bartosz Leśniewski</h2>
            <h1>Hi,</h1>
          </main>
          <footer>
            <h3 className="h3-footer" title="site is under construction">
              site is under construction
            </h3>
          </footer>
        </div>
      </StyledWrapper>
    </>
  )
}

export default IndexPage
