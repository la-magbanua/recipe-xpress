import React, { useEffect } from 'react'
import {
  useRecipesState,
  useRecipesDispatch,
} from '../../contexts/recipes/recipes-context'

import {
  StyledSuggestionsList,
  SuggestionItem,
  InnerSuggestionsList,
} from './suggestions-list-styles'

const SuggestionsList = ({ setInputVal, setSuggestionListIsVisible }) => {
  const { suggestions } = useRecipesState()
  const { addIngredient, setSuggestions } = useRecipesDispatch()

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
      <InnerSuggestionsList>
        {suggestions.map((suggestion, i) => (
          <SuggestionItem
            key={i}
            className="suggestion_item"
            onClick={() => handleAddIngredient(suggestion.name)}
          >
            {suggestion.name}
          </SuggestionItem>
        ))}
      </InnerSuggestionsList>
    </StyledSuggestionsList>
  )
}

export default SuggestionsList
