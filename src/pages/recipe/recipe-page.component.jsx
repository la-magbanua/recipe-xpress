import React, { useState, useEffect } from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import {
  StyledRecipePage,
  RecipeHeader,
  ItemImage,
  Title,
  Minutes,
  Instructions,
  Instruction,
} from './recipe-page.styles'

import dummyRecipe from '../../dummyRecipe2.json'

const RecipePage = ({ match }) => {
  const { currentRecipe, setCurrentRecipe } = useRecipes()
  const [state, setState] = useState(null)

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${match.params.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await res.json()
    console.log(data)
    setCurrentRecipe(data)
  }

  useEffect(() => {
    // fetchRecipe()
    setState(dummyRecipe)
  }, [match])

  return (
    state && (
      <StyledRecipePage>
        <RecipeHeader>
          <ItemImage bgImg={state.image} />
          <Title>{state.title}</Title>
          <Minutes>Ready in {state.readyInMinutes} minutes</Minutes>
        </RecipeHeader>
        <Instructions>
          {state.analyzedInstructions.length ? (
            state.analyzedInstructions[0].steps.map(({ number, step }) => (
              <Instruction key={number}>
                <div>
                  <h3>{number}</h3>
                </div>
                <div>
                  <p>{step}</p>
                </div>
              </Instruction>
            ))
          ) : (
            <p>
              Instructions not found. Go{' '}
              <a
                href={state.sourceUrl}
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
  )
}

export default RecipePage
