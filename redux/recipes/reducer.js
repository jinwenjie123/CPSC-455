import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    list: [
      { id: 1, name: 'Magikarp', gredient: 'Fresh Magikarp and Wasabi'},
      { id: 2, name: 'Squirtle', gredient: 'Squirtle and Secret Herbs'}
    ]
  };

  const recipeSlice = createSlice({
      name: 'recipes_list',
      initialState: INITIAL_STATE,
      reducers :{
          addRecipe: (state, action) =>{
              state.list.push(action.payload)
          },
          removeRecipe: (state, action) =>{
            while(state.list.length != 0){
                state.list.pop();
            }
          }
      },
  });

  export const { addRecipe, removeRecipe } = recipeSlice.actions;

  export default recipeSlice.reducer;