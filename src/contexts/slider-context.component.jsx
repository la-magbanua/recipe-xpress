import React, { useState, useContext, createContext } from 'react'

const SliderContext = createContext()

const SliderContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SliderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SliderContext.Provider>
  )
}

const useSlider = () => useContext(SliderContext)

export { SliderContextProvider, useSlider }
