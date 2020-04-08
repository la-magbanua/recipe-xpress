import React, { useContext, useReducer, createContext } from 'react'
import { recipesActionTypes } from './recipes.types'

const RecipeContext = createContext()

const INITIAL_STATE = {
  recipes: [],
  ingredients: [],
  suggestions: [],
  error: null,
  loading: false,
}

const recipesReducer = (state, action) => {
  switch (action.type) {
    case recipesActionTypes.SET_RECIPES:
      return { ...state, recipes: action.payload }
    case recipesActionTypes.CLEAR_RECIPES:
      return { ...state, recipes: [] }
    case recipesActionTypes.ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] }
    case recipesActionTypes.CLEAR_INGREDIENTS:
      return { ...state, ingredients: [] }
    case recipesActionTypes.SET_ERROR:
      return { ...state, error: action.payload }
    case recipesActionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    case recipesActionTypes.SET_SUGGESTIONS:
      return { ...state, suggestions: action.payload }
    default:
      return state
  }
}

const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, INITIAL_STATE)

  const setRecipes = (recipes) =>
    dispatch({ type: recipesActionTypes.SET_RECIPES, payload: recipes })

  const clearRecipes = () =>
    dispatch({ type: recipesActionTypes.CLEAR_RECIPES })

  const addIngredient = (ingredient) =>
    dispatch({ type: recipesActionTypes.ADD_INGREDIENT, payload: ingredient })

  const clearIngredients = () =>
    dispatch({ type: recipesActionTypes.CLEAR_INGREDIENTS })

  const setLoading = (payload) =>
    dispatch({ type: recipesActionTypes.SET_LOADING, payload })

  const setError = (payload) =>
    dispatch({ type: recipesActionTypes.SET_ERROR, payload })

  const setSuggestions = (payload) =>
    dispatch({ type: recipesActionTypes.SET_SUGGESTIONS, payload })

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        setRecipes,
        clearRecipes,
        addIngredient,
        clearIngredients,
        setLoading,
        setError,
        setSuggestions,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

const useRecipes = () => useContext(RecipeContext)

export { RecipeContextProvider, useRecipes }
