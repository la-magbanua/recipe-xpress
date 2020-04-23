import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  useRecipesState,
  useRecipesDispatch,
} from '../../contexts/recipes/recipes-context'

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

const searchVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const SearchBar = () => {
  const { ingredients, loading, suggestions } = useRecipesState()
  const {
    setRecipes,
    setError,
    setLoading,
    setSuggestions,
  } = useRecipesDispatch()
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
    <StyledSearchBar
      initial="initial"
      animate="animate"
      variants={searchVariant}
    >
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

        <AnimatePresence>
          {ingredients.length < 2 ? null : (
            <Button onClick={fetchRecipes} disabled={loading} block>
              Get Recipes
            </Button>
          )}
        </AnimatePresence>
      </SearchBarWrapper>
    </StyledSearchBar>
  )
}

export default SearchBar
