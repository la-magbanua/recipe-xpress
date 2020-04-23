import React from 'react'
import { useRecipesState } from '../../contexts/recipes/recipes-context'

import IngredientItem from '../ingredient-item/ingredient-item'

import { StyledIngredientList } from './ingredient-list-styles'
import { AnimatePresence } from 'framer-motion'

const IngredientList = () => {
  const { ingredients } = useRecipesState()

  return (
    <StyledIngredientList>
      <AnimatePresence>
        {ingredients.length
          ? ingredients.map((ingredient, i) => (
              <IngredientItem key={i} ingredient={ingredient} />
            ))
          : null}
      </AnimatePresence>
    </StyledIngredientList>
  )
}

export default IngredientList
