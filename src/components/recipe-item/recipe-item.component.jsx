import React from 'react'

const RecipeItem = ({ recipe }) => {
  const { id, title } = recipe
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

export default RecipeItem
