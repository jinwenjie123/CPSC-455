import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/reducer';

export const store = configureStore({
    reducer: {
        recipes_list: recipesReducer
    },
    devTools: true
  });

  