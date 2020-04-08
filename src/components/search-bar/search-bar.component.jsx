import React, { useState } from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import IngredientList from '../ingredient-list/ingredient-list.component'
import Button from '../button/button.component'

import { StyledInput, StyledSearchBar, StyledForm } from './search-bar.styles'
import SuggestionsList from '../suggestions-list/suggestions-list.component'

const SearchBar = () => {
  const {
    recipes,
    ingredients,
    addIngredient,
    clearIngredients,
    setRecipes,
    clearRecipes,
    error,
    setError,
    loading,
    setLoading,
    suggestions,
    setSuggestions,
  } = useRecipes()
  const [inputVal, setInputVal] = useState('')

  async function fetchRecipes() {
    if (ingredients.length) {
      setLoading(true)
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&ranking=1&ignorePantry=false&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      setLoading(false)
      if (!data.length) {
        setError('No recipes found. Try again.')
      }
      setRecipes(data)
    }
  }

  function handleClearRecipes() {
    clearIngredients()
    clearRecipes()
  }

  async function handleInputChange(e) {
    setInputVal(e.target.value)
    const res = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?query=${inputVal}&number=5&metaInformation=true&apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await res.json()
    setSuggestions(data)
  }

  return (
    <StyledSearchBar>
      <StyledForm>
        <StyledInput
          name="food"
          type="text"
          value={inputVal}
          placeholder="Enter ingredients here"
          onChange={handleInputChange}
          autoFocus
        />
        {suggestions.length ? (
          <SuggestionsList setInputVal={setInputVal} />
        ) : null}
      </StyledForm>

      {ingredients.length ? <IngredientList /> : null}

      {ingredients.length >= 2 && !error && (
        <Button
          onClick={!recipes.length ? fetchRecipes : handleClearRecipes}
          disabled={loading}
          block
        >
          {!recipes.length ? 'Get Recipes' : 'Clear Recipes'}
        </Button>
      )}
    </StyledSearchBar>
  )
}

export default SearchBar
