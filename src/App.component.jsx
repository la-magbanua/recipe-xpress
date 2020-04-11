import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home/home-page.component'
import RecipePage from './pages/recipe/recipe-page.component'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import { GlobalStyle } from './styles/global.styles'
import { Wrap } from './styles/wrap.styles'

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
