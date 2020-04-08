import React, { useState, useContext, createContext } from 'react'

const SliderContext = createContext()

const SliderContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  return (
    <SliderContext.Provider
      value={{ isOpen, setIsOpen, currentItem, setCurrentItem }}
    >
      {children}
    </SliderContext.Provider>
  )
}

const useSlider = () => useContext(SliderContext)

export { SliderContextProvider, useSlider }
