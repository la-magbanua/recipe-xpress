import React from 'react'
import { useSlider } from '../../contexts/slider/slider-context.component'

import {
  StyledRecipeItem,
  ItemImage,
  ItemDetails,
  ItemTitle,
} from './recipe-item.styles'

import { truncateText } from '../../utils'

// dummy data
import dummyRecipe from '../../dummyRecipe2.json'

const RecipeItem = ({ recipe }) => {
  const { id, title, image } = recipe
  const { setIsOpen, setCurrentItem } = useSlider()

  const handleClick = () => {
    setIsOpen(true)
    // setCurrentItem(id)
    setCurrentItem(dummyRecipe)
  }

  return (
    <StyledRecipeItem onClick={handleClick}>
      <ItemImage image={image} />
      <ItemDetails>
        <ItemTitle>{truncateText(title, 25)}</ItemTitle>
      </ItemDetails>
    </StyledRecipeItem>
  )
}

export default RecipeItem
