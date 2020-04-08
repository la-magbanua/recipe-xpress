import React from 'react'
import SearchBar from '../../components/search-bar/search-bar.component'
import RecipeList from '../../components/recipe-list/recipe-list.component'
import Slider from '../../components/slider/slider.component'

import { StyledHomePage } from './home.styles'

const Home = () => {
  return (
    <StyledHomePage>
      <SearchBar />
      <RecipeList />
      <Slider />
    </StyledHomePage>
  )
}

export default Home
