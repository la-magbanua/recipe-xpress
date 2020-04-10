import React from 'react'
import { useRecipes } from '../../contexts/recipes/recipes-context.component'

import RecipeItem from '../recipe-item/recipe-item.component'
import SkeletonList from '../skeleton-list/skeleton-list.component'

import { StyledRecipeList } from './recipe-list.styles'

import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
}

const RecipeList = () => {
  const { recipes, loading } = useRecipes()
  return loading ? (
    <SkeletonList />
  ) : (
    <StyledRecipeList>
      <SlickSlider {...settings}>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </SlickSlider>
    </StyledRecipeList>
  )
}

export default RecipeList
