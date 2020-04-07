import React, { useState, useContext, createContext } from 'react'

const RecipeContext = createContext()

const RecipeContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [error, setError] = useState(null)

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        ingredients,
        setIngredients,
        error,
        setError,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

const useRecipes = () => useContext(RecipeContext)

export { RecipeContextProvider, useRecipes }
