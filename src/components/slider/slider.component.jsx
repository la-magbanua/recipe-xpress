import React from 'react'

import { StyledSlider } from './slider.styles'
import { useSlider } from '../../contexts/slider/slider-context.component'

const Slider = () => {
  const { isOpen, setIsOpen, currentItem, setCurrentItem } = useSlider()

  return isOpen ? <StyledSlider>{currentItem.title}</StyledSlider> : null
}

export default Slider
