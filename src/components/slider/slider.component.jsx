import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import { useSlider } from '../../contexts/slider/slider-context.component'
import {
  SkeletonFrame,
  SkeletonItem,
} from '../skeleton-list/skeleton-list.styles'

import {
  StyledSlider,
  InnerSlider,
  SliderCloseIcon,
  SliderDetails,
} from './slider.styles'

const Slider = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null)
  const { isOpen, setIsOpen, currentItem, setCurrentItem } = useSlider()

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${currentItem}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY_2}`
    )
    const data = await res.json()
    setCurrentRecipe(data)
  }

  const handleCloseSlider = () => {
    setIsOpen(false)
    setCurrentRecipe(null)
  }

  useEffect(() => {
    if (currentItem) {
      fetchRecipe(currentItem)
    }
  }, [currentItem, currentRecipe])

  return (
    <StyledSlider isOpen={isOpen}>
      {currentRecipe ? (
        <InnerSlider>
          <SliderCloseIcon>
            <IoIosCloseCircleOutline size="1.5em" onClick={handleCloseSlider} />
          </SliderCloseIcon>
          <SliderDetails>
            <h2>{currentRecipe.title}</h2>
            <p>Ready in {currentRecipe.readyInMinutes} minutes</p>
          </SliderDetails>
        </InnerSlider>
      ) : (
        <SkeletonFrame
          direction="column"
          aic="flex-start"
          style={{ margin: '30px 20px' }}
        >
          <SkeletonItem sWidth="75%" sHeight="18px" />
          <SkeletonItem sWidth="75%" sHeight="18px" />
          <SkeletonItem sWidth="45%" sHeight="10px" />
        </SkeletonFrame>
      )}
    </StyledSlider>
  )
}

export default Slider
