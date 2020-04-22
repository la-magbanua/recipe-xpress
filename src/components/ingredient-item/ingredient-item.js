import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { useRecipesDispatch } from '../../contexts/recipes/recipes-context'

import { StyledIngredientItem, ItemTitle } from './ingredient-item-styles'

const IngredientItem = ({ ingredient }) => {
  const { removeIngredient } = useRecipesDispatch()

  return (
    <StyledIngredientItem>
      <ItemTitle>{ingredient}</ItemTitle>
      <TiDelete
        size="1.5rem"
        style={{ cursor: 'pointer' }}
        onClick={() => removeIngredient(ingredient)}
      />
    </StyledIngredientItem>
  )
}

export default IngredientItem
