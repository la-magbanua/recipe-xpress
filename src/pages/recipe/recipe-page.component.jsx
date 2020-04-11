import React, { useState, useEffect } from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'
import { Skel } from '../../components/skeleton-list/skeleton-list.component'

import {
  StyledRecipePage,
  RecipeHeader,
  ItemImage,
  Title,
  Minutes,
  Instructions,
  Instruction,
  RecipeSkeleton,
} from './recipe-page.styles'

const RecipePage = ({ match }) => {
  const { currentRecipe, setCurrentRecipe, setLoading } = useRecipes()

  const fetchRecipe = async () => {
    setLoading(true)
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await res.json()
    setCurrentRecipe(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchRecipe()

    return () => {
      setCurrentRecipe(null)
    }
  }, [])

  return !currentRecipe ? (
    <RecipeSkeleton>
      <Skel sWidth="100%" sHeight="160px" />
      <Skel sWidth="50%" sHeight="18px" />
      <div
        style={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Skel sWidth="150px" sHeight="15px" mBot="1.5rem" />
        <Skel sWidth="150px" sHeight="15px" mBot="1.5rem" />
        <Skel sWidth="150px" sHeight="15px" mBot="1.5rem" />
        <Skel sWidth="150px" sHeight="15px" mBot="1.5rem" />
      </div>
    </RecipeSkeleton>
  ) : (
    <StyledRecipePage>
      <RecipeHeader>
        <ItemImage bgImg={currentRecipe.image} />
        <Title>{currentRecipe.title}</Title>
        <Minutes>Ready in {currentRecipe.readyInMinutes} minutes</Minutes>
      </RecipeHeader>
      <Instructions>
        {currentRecipe.analyzedInstructions.length ? (
          currentRecipe.analyzedInstructions[0].steps.map(
            ({ number, step }) => (
              <Instruction key={number}>
                <div>
                  <h3>{number}</h3>
                </div>
                <div>
                  <p>{step}</p>
                </div>
              </Instruction>
            )
          )
        ) : (
          <p>
            Instructions not found. Go{' '}
            <a
              href={currentRecipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{' '}
            instead
          </p>
        )}
      </Instructions>
    </StyledRecipePage>
  )
}

export default RecipePage
