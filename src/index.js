import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecipeContextProvider } from './contexts/recipes/recipes-context.component'
import { ThemeProvider } from 'styled-components'
import App from './App.component'
import * as serviceWorker from './serviceWorker'

import { theme } from './styles/theme.styles'

ReactDOM.render(
  <React.StrictMode>
    <RecipeContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </RecipeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
