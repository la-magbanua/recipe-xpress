import React from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import {
  StyledSuggestionsList,
  SuggestionItem,
} from './suggestions-list.styles'

const SuggestionsList = ({ setInputVal }) => {
  const { suggestions, addIngredient, setSuggestions } = useRecipes()

  function handleAddIngredient(suggestion) {
    addIngredient(suggestion)
    setSuggestions([])
    setInputVal('')
  }

  return (
    <StyledSuggestionsList>
      {suggestions.map((suggestion) => (
        <SuggestionItem
          key={suggestion.id}
          onClick={() => handleAddIngredient(suggestion.name)}
        >
          {suggestion.name}
        </SuggestionItem>
      ))}
    </StyledSuggestionsList>
  )
}

export default SuggestionsList
