import React from 'react'

import {
  RecipeHeader,
  Title,
  ItemImage,
  Minutes,
  Instructions,
  Instruction,
} from './slider-item.styles'

const SliderItem = ({ currentRecipe }) => {
  return (
    <>
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
    </>
  )
}

export default SliderItem
