import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-family: ${({ theme }) => theme.fontFace};
  }

  body {
    height: 100%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  main {
    flex: 1;
    max-width: 500px;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.offWhite2};

    @media screen and (max-width: 480px) {
      max-width: none;
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSub};
  }
`
