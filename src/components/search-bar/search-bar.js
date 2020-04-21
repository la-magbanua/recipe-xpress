import React, { useState, useEffect } from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context'

import IngredientList from '../ingredient-list/ingredient-list'
import Button from '../button/button'

import {
  StyledInput,
  StyledSearchBar,
  StyledForm,
  SearchBarWrapper,
} from './search-bar-styles'
import SuggestionsList from '../suggestions-list/suggestions-list'

import topIngredients from '../../topIngredients.json'
import { useDebounce } from '../../hooks/useDebounce'

const SearchBar = () => {
  const {
    recipes,
    ingredients,
    clearIngredients,
    setRecipes,
    clearRecipes,
    setError,
    loading,
    setLoading,
    suggestions,
    setSuggestions,
  } = useRecipes()
  const [inputVal, setInputVal] = useState('')
  const [suggestionListIsVisible, setSuggestionListIsVisible] = useState(false)

  const debouncedInputVal = useDebounce(inputVal, 500)

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
  }

  function getSuggestions() {
    const newIngredients = topIngredients
      .filter(ingredient => ingredient.name.includes(inputVal))
      .slice(0, 8)
    setSuggestions(newIngredients)
  }

  useEffect(() => {
    if (debouncedInputVal) {
      getSuggestions()
    } else {
      setSuggestions([])
    }
  }, [debouncedInputVal])

  return (
    <StyledSearchBar>
      <SearchBarWrapper>
        <StyledForm>
          <StyledInput
            name="food"
            type="text"
            value={inputVal}
            placeholder="Enter ingredients here"
            onChange={handleInputChange}
            onFocus={() => setSuggestionListIsVisible(true)}
            autoFocus
          />
          {suggestions.length && suggestionListIsVisible ? (
            <SuggestionsList
              setInputVal={setInputVal}
              setSuggestionListIsVisible={setSuggestionListIsVisible}
            />
          ) : null}
        </StyledForm>

        <IngredientList />

        <Button
          onClick={!recipes.length ? fetchRecipes : handleClearRecipes}
          disabled={ingredients.length < 2 || loading}
          block
        >
          {!recipes.length ? 'Get Recipes' : 'Clear Recipes'}
        </Button>
      </SearchBarWrapper>
    </StyledSearchBar>
  )
}

export default SearchBar
