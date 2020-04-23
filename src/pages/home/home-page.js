import React from 'react'
import SearchBar from '../../components/search-bar/search-bar'
import RecipeList from '../../components/recipe-list/recipe-list'

import { StyledHomePage } from './home-page-styles'
import { ClearSection } from '../../components/clear-section/clear-section'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
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
      <ClearSection />
    </StyledHomePage>
  )
}

export default HomePage
