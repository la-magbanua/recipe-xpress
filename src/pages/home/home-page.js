import React from 'react'
import SearchBar from '../../components/search-bar/search-bar'
import RecipeList from '../../components/recipe-list/recipe-list'

import { StyledHomePage } from './home-page-styles'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const HomePage = () => {
  return (
    <StyledHomePage
      className="homepage"
      initial={false}
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <SearchBar />
      <RecipeList />
    </StyledHomePage>
  )
}

export default HomePage
