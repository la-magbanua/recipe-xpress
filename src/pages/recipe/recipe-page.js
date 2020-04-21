import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRecipes } from '../../contexts/recipes/recipes-context'
import { Skel } from '../../components/skeleton-list/skeleton-list'

import {
  StyledRecipePage,
  RecipeHeader,
  ItemDetails,
  ItemImage,
  Title,
  Minutes,
  Instructions,
  InstructionsHeading,
  Instruction,
  RecipeSkeleton,
  SkelImg,
  SkelDetails,
} from './recipe-page-styles'

const RecipePage = ({ match }) => {
  const { currentRecipe, setCurrentRecipe, setLoading } = useRecipes()
  const isMobile = useMediaQuery({ maxWidth: 500 })

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
      <SkelImg>
        <Skel sWidth="100%" sHeight={isMobile ? '150px' : '300px'} />
      </SkelImg>
      <SkelDetails>
        <Skel sWidth="70%" sHeight="18px" />
        <div
          style={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Skel sWidth="170px" sHeight="15px" mBot="1.5rem" />
          <Skel sWidth="170px" sHeight="15px" mBot="1.5rem" />
          <Skel sWidth="170px" sHeight="15px" mBot="1.5rem" />
        </div>
      </SkelDetails>
    </RecipeSkeleton>
  ) : (
    <StyledRecipePage>
      <RecipeHeader>
        <ItemImage bgImg={currentRecipe.image} />
        <ItemDetails>
          <Title>{currentRecipe.title}</Title>
          <Minutes>{currentRecipe.readyInMinutes} mins</Minutes>
          <Instructions>
            <InstructionsHeading>Instructions</InstructionsHeading>
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
        </ItemDetails>
      </RecipeHeader>
    </StyledRecipePage>
  )
}

export default RecipePage
