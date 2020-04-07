import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { RecipeContextProvider } from './contexts/recipe-context'
import { ThemeProvider } from 'styled-components'
import * as serviceWorker from './serviceWorker'

import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <RecipeContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecipeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
