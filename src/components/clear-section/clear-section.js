import React from 'react'
import {
  useRecipesState,
  useRecipesDispatch,
} from '../../contexts/recipes/recipes-context'

import { StyledClearSection, ClearButton } from './clear-section-styles'
import { AnimatePresence } from 'framer-motion'

const clearVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.3,
    },
  },
  tap: {
    scale: 0.7,
    transition: {
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
}

export const ClearSection = () => {
  const { recipes } = useRecipesState()
  const { clearRecipes } = useRecipesDispatch()

  return (
    <AnimatePresence exitBeforeEnter>
      {recipes.length > 1 && (
        <StyledClearSection>
          <ClearButton
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            variants={clearVariants}
            onClick={clearRecipes}
          >
            CLEAR
          </ClearButton>
        </StyledClearSection>
      )}
    </AnimatePresence>
  )
}
