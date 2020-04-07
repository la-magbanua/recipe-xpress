import React from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import RecipeItem from '../recipe-item/recipe-item.component'

import { StyledRecipeList } from './recipe-list.styles'

const RecipeList = () => {
  const { recipes, error } = useRecipes()

  return recipes.length > 0 ? (
    <>
      <StyledRecipeList>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </StyledRecipeList>
    </>
  ) : (
    <p>{error}</p>
  )
}

export default RecipeList
