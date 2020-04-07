import React from 'react'

import SearchBar from '../../components/search-bar/search-bar.component'
import RecipeList from '../../components/recipe-list/recipe-list.component'

const Home = () => {
  return (
    <div>
      <SearchBar />
      <RecipeList />
    </div>
  )
}

export default Home
