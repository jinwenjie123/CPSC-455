import React from 'react';
import { useSelector } from 'react-redux';
import { RecipiesCard } from './RecipesCard';

const RecipiesList = () => {
    const recipes_list = useSelector(state => state.recipes_list.list);

    return recipes_list.map((user) => <RecipiesCard key={user.id} name={user.name} gredient={user.gredient} />);
}

export default RecipiesList;