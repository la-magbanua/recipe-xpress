import React from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import IngredientItem from '../ingredient-item/ingredient-item.component'

import { StyledIngredientList } from './ingredient-list.styles'

const IngredientList = () => {
  const { ingredients } = useRecipes()

  console.log('ingredient list component')

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
