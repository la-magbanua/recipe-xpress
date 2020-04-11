import React from 'react'
import { Link } from 'react-router-dom'

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
    <StyledRecipeItem>
      <Link to={`/recipe/${id}`}>
        <ItemImage image={image} />
        <ItemDetails>
          <ItemTitle>{truncateText(title, 25)}</ItemTitle>
        </ItemDetails>
      </Link>
    </StyledRecipeItem>
  )
}

export default RecipeItem
