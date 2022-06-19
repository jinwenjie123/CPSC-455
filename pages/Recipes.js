import React from 'react';
import RecipiesList from "../components/RecipesList";
import Grab from './Grab';
import { useDispatch } from 'react-redux';
import { removeRecipe } from '../redux/recipes/reducer';


const Recipes = () => {

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(removeRecipe());
  };

  return (
    <div className='home_body'>
      <h1>Recipes List</h1>
      <RecipiesList />
      <Grab />
      <button onClick={handleSubmit}>DUMP</button>
    </div>
  )
}

export default Recipes;