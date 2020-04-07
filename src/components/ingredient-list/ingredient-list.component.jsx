import React from 'react'
import { useRecipes } from '../../contexts/recipes-context.component'

import IngredientItem from '../ingredient-item/ingredient-item.component'

import { StyledIngredientList } from './ingredient-list.styles'

const IngredientList = () => {
  const { ingredients } = useRecipes()

  return (
    <StyledIngredientList>
      {ingredients.map((ingredient, i) => (
        <IngredientItem key={i} ingredient={ingredient} />
      ))}
    </StyledIngredientList>
  )
}

export default IngredientList
