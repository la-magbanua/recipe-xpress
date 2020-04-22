import React from 'react'
import { useRecipesState } from '../../contexts/recipes/recipes-context'

import IngredientItem from '../ingredient-item/ingredient-item'

import { StyledIngredientList } from './ingredient-list-styles'

const IngredientList = () => {
  const { ingredients } = useRecipesState()

  return (
    <StyledIngredientList>
      {ingredients.length
        ? ingredients.map((ingredient, i) => (
            <IngredientItem key={i} ingredient={ingredient} />
          ))
        : null}
    </StyledIngredientList>
  )
}

export default IngredientList
