import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home/home-page'
import RecipePage from './pages/recipe/recipe-page'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import { GlobalStyle } from './styles/global'
import { Wrap } from './components/wrap/wrap'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Wrap>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipe/:id" component={RecipePage} />
          </Switch>
        </Wrap>
      </main>
      <Footer />
    </>
  )
}

export default App
