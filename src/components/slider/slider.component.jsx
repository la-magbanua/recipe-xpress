import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import { useSlider } from '../../contexts/slider/slider-context.component'
import {
  SkeletonFrame,
  SkeletonItem,
} from '../skeleton-list/skeleton-list.styles'

import SliderItem from '../slider-item/slider-item.component'

import { StyledSlider, InnerSlider, SliderCloseIcon } from './slider.styles'

const Slider = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null)
  const { isOpen, setIsOpen, currentItem, setCurrentItem } = useSlider()

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${currentItem}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const data = await res.json()
    console.log(data)
    setCurrentRecipe(data)
  }

  const handleCloseSlider = () => {
    setIsOpen(false)
    setCurrentRecipe(null)
  }

  useEffect(() => {
    if (currentItem) {
      // fetchRecipe(currentItem)
      setCurrentRecipe(currentItem)
    }
  }, [currentItem])

  return (
    <StyledSlider isOpen={isOpen}>
      <SliderCloseIcon onClick={handleCloseSlider}>
        <IoIosCloseCircleOutline size="1.5em" />
      </SliderCloseIcon>
      {currentRecipe ? (
        <InnerSlider>
          <SliderItem currentRecipe={currentRecipe} />
        </InnerSlider>
      ) : (
        <SkeletonFrame
          direction="column"
          aic="flex-start"
          style={{ margin: '50px 20px' }}
        >
          <SkeletonItem sWidth="100%" sHeight="120px" />
          <SkeletonItem sWidth="75%" sHeight="18px" />
          <SkeletonItem sWidth="75%" sHeight="18px" />
          <SkeletonItem sWidth="45%" sHeight="12px" />
        </SkeletonFrame>
      )}
    </StyledSlider>
  )
}

export default Slider
