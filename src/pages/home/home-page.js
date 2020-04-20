import React from 'react'
import SearchBar from '../../components/search-bar/search-bar'
import RecipeList from '../../components/recipe-list/recipe-list'

import { StyledHomePage } from './home-page-styles'

const HomePage = () => {
  return (
    <StyledHomePage className="homepage">
      <SearchBar />
      <RecipeList />
    </StyledHomePage>
  )
}

export default HomePage