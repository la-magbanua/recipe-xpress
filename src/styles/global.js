import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

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
  }

  main {
    flex: 1;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
