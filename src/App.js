import React from 'react'

import Home from './pages/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import { GlobalStyle } from './styles/global'
import { Wrap } from './styles/wrap'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Wrap>
          <Home />
        </Wrap>
      </main>
      <Footer />
    </>
  )
}

export default App
