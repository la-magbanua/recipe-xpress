import React from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import RecipeItem from '../recipe-item/recipe-item.component'
import SkeletonList from '../skeleton-list/skeleton-list.component'

import { StyledRecipeList } from './recipe-list.styles'

const RecipeList = () => {
  const { recipes, loading, error } = useRecipes()

  if (error) {
    return <p>{error}</p>
  }

  return loading ? (
    <SkeletonList />
  ) : (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </StyledRecipeList>
  )
}

export default RecipeList
