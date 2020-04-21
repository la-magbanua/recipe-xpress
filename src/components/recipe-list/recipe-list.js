import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRecipes } from '../../contexts/recipes/recipes-context'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import RecipeItem from '../recipe-item/recipe-item'
import { SkeletonList } from '../skeleton-list/skeleton-list'

import { StyledRecipeList, Placeholder } from './recipe-list-styles'

const RecipeList = () => {
  const { recipes, loading } = useRecipes()
  const isMobile = useMediaQuery({ maxWidth: 500 })

  return loading ? (
    <SkeletonList />
  ) : (
    <StyledRecipeList>
      {recipes.length ? (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={recipes.length}
          visibleSlides={isMobile ? 2 : 4}
          step={isMobile ? 2 : 4}
        >
          <Slider className="slider">
            {recipes.map((recipe, index) => (
              <Slide key={recipe.id} index={index} innerClassName="slide">
                <RecipeItem recipe={recipe} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack>
            <IoIosArrowBack />
          </ButtonBack>
          <ButtonNext>
            <IoIosArrowForward />
          </ButtonNext>
        </CarouselProvider>
      ) : (
        <Placeholder>
          <p>No recipes to show</p>
          <p>Try entering some ingredients</p>
        </Placeholder>
      )}
    </StyledRecipeList>
  )
}

export default RecipeList
