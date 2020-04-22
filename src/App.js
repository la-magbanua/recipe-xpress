import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import HomePage from './pages/home/home-page'
import RecipePage from './pages/recipe/recipe-page'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import { GlobalStyle } from './styles/global'
import { Wrap } from './components/wrap/wrap'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Wrap>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/recipe/:id" component={RecipePage} />
            </Switch>
          </AnimatePresence>
        </Wrap>
      </main>
      <Footer />
    </>
  )
}

export default App
