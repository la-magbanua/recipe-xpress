import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { useRecipesDispatch } from '../../contexts/recipes/recipes-context'

import { StyledIngredientItem, ItemTitle } from './ingredient-item-styles'

const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
  tap: {
    scale: 0.8,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
}

const IngredientItem = ({ ingredient }) => {
  const { removeIngredient } = useRecipesDispatch()

  return (
    <StyledIngredientItem
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
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
