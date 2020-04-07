import React, { useState, useContext, createContext } from 'react'

const RecipeContext = createContext()

const RecipeContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState('')

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, error, setError }}>
      {children}
    </RecipeContext.Provider>
  )
}

const useRecipes = () => useContext(RecipeContext)

export { RecipeContextProvider, useRecipes }
