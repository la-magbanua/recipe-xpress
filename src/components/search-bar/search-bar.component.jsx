import React, { useState } from 'react'
import { useRecipes } from '../../contexts/recipes-context.component'
import RecipeList from '../recipe-list/recipe-list.component'

const SearchBar = () => {
  const {
    ingredients,
    setIngredients,
    setRecipes,
    error,
    setError,
  } = useRecipes()
  const [inputVal, setInputVal] = useState('')

  async function fetchRecipes() {
    if (ingredients.length) {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&ranking=1&ignorePantry=false&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      if (!data.length) {
        setError('No recipes found. Try again.')
      }
      setRecipes(data)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (inputVal) {
      setIngredients([...ingredients, inputVal])
      setInputVal('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="food"
          type="text"
          value={inputVal}
          placeholder="input food here"
          onChange={(e) => setInputVal(e.target.value)}
        />
      </form>
      {ingredients.length >= 2 && !error && (
        <button onClick={fetchRecipes}>Get Recipes</button>
      )}
    </div>
  )
}

export default SearchBar
