import React from 'react'
import { useRecipes } from '../../contexts/recipes-context.component'

import RecipeItem from '../recipe-item/recipe-item.component'

const RecipeList = () => {
  const { recipes, error, setRecipes, setIngredients } = useRecipes()

  const handleClick = () => {
    setIngredients([])
    setRecipes([])
  }

  return recipes.length > 0 ? (
    <>
      <button onClick={handleClick}>Clear Recipes</button>
      <div>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  ) : (
    <p>{error}</p>
  )
}

export default RecipeList
