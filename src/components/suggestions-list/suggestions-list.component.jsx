import React, { useEffect } from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import {
  StyledSuggestionsList,
  SuggestionItem,
} from './suggestions-list.styles'

const SuggestionsList = ({ setInputVal, setSuggestionListIsVisible }) => {
  const { suggestions, addIngredient, setSuggestions } = useRecipes()

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  function handleDocumentClick(e) {
    if (e.target.matches('input')) {
      return
    }

    if (!e.target.classList.contains('suggestion_item')) {
      setSuggestionListIsVisible(false)
      return
    }
  }

  function handleAddIngredient(suggestion) {
    addIngredient(suggestion)
    setSuggestions([])
    setInputVal('')
  }

  return (
    <StyledSuggestionsList>
      {suggestions.map((suggestion, i) => (
        <SuggestionItem
          key={i}
          className="suggestion_item"
          onClick={() => handleAddIngredient(suggestion.name)}
        >
          {suggestion.name}
        </SuggestionItem>
      ))}
    </StyledSuggestionsList>
  )
}

export default SuggestionsList
