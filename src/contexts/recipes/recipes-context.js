import React, { useContext, useReducer, createContext } from 'react'
import { recipesActionTypes } from './recipes-types'

import dumRecipes from '../../dummyRecipes.json'

const RecipeContext = createContext()

const INITIAL_STATE = {
  recipes: dumRecipes,
  ingredients: [],
  suggestions: [],
  currentRecipe: null,
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
    case recipesActionTypes.SET_CURRENT_RECIPE:
      return { ...state, currentRecipe: action.payload }
    default:
      return state
  }
}

const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, INITIAL_STATE)

  const actions = {
    setRecipes(recipes) {
      dispatch({ type: recipesActionTypes.SET_RECIPES, payload: recipes })
    },

    clearRecipes() {
      dispatch({ type: recipesActionTypes.CLEAR_RECIPES })
    },

    addIngredient(ingredient) {
      dispatch({ type: recipesActionTypes.ADD_INGREDIENT, payload: ingredient })
    },

    clearIngredients() {
      dispatch({ type: recipesActionTypes.CLEAR_INGREDIENTS })
    },

    setLoading(payload) {
      dispatch({ type: recipesActionTypes.SET_LOADING, payload })
    },

    setError(payload) {
      dispatch({ type: recipesActionTypes.SET_ERROR, payload })
    },

    setSuggestions(payload) {
      dispatch({ type: recipesActionTypes.SET_SUGGESTIONS, payload })
    },

    setCurrentRecipe(payload) {
      dispatch({ type: recipesActionTypes.SET_CURRENT_RECIPE, payload })
    },
  }

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

const useRecipes = () => useContext(RecipeContext)

export { RecipeProvider, useRecipes }
