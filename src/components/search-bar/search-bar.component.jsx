import React, { useState } from 'react'
import { useRecipes } from '../../contexts/recipes-context.component'

import IngredientList from '../ingredient-list/ingredient-list.component'
import Button from '../button/button.component'

import { StyledInput, StyledSearchBar, StyledForm } from './search-bar.styles'

const SearchBar = () => {
  const {
    recipes,
    ingredients,
    setIngredients,
    setRecipes,
    error,
    setError,
  } = useRecipes()
  const [inputVal, setInputVal] = useState('')

  async function fetchRecipes() {
    if (ingredients.length) {
      console.log('fetching recipes!')
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&ranking=1&ignorePantry=false&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      if (!data.length) {
        setError('No recipes found. Try again.')
      }
      setRecipes(data)
    }
  }

  function clearRecipes() {
    setIngredients([])
    setRecipes([])
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (inputVal) {
      setIngredients([...ingredients, inputVal])
      setInputVal('')
    }
  }

  return (
    <StyledSearchBar>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="food"
          type="text"
          value={inputVal}
          placeholder="Enter ingredients here"
          onChange={(e) => setInputVal(e.target.value)}
          autoFocus
        />
      </StyledForm>
      {ingredients.length ? <IngredientList /> : null}
      {ingredients.length >= 2 && !error && (
        <Button onClick={!recipes.length ? fetchRecipes : clearRecipes} block>
          {!recipes.length ? 'Get Recipes' : 'Clear Recipes'}
        </Button>
      )}
    </StyledSearchBar>
  )
}

export default SearchBar
