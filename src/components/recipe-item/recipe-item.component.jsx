import React from 'react'
import {
  StyledRecipeItem,
  ItemImage,
  ItemDetails,
  ItemTitle,
} from './recipe-item.styles'
import { truncateText } from '../../utils'

const RecipeItem = ({ recipe }) => {
  const { id, title, image } = recipe

  return (
    <StyledRecipeItem onClick={() => console.log(id)}>
      <ItemImage image={image} />
      <ItemDetails>
        <ItemTitle>{truncateText(title, 45)}</ItemTitle>
      </ItemDetails>
    </StyledRecipeItem>
  )
}

export default RecipeItem
