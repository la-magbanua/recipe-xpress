import React from 'react'
import { useSlider } from '../../contexts/slider/slider-context.component'

import {
  StyledRecipeItem,
  ItemImage,
  ItemDetails,
  ItemTitle,
} from './recipe-item.styles'

import { truncateText } from '../../utils'

const RecipeItem = ({ recipe }) => {
  const { id, title, image } = recipe
  const { setIsOpen, setCurrentItem } = useSlider()

  const handleClick = () => {
    setIsOpen(true)
    setCurrentItem(recipe)
  }

  return (
    <StyledRecipeItem onClick={handleClick}>
      <ItemImage image={image} />
      <ItemDetails>
        <ItemTitle>{truncateText(title, 45)}</ItemTitle>
      </ItemDetails>
    </StyledRecipeItem>
  )
}

export default RecipeItem
