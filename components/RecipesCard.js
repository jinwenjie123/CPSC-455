import React from 'react';

export const RecipiesCard = ({ name, gredient }) =>{
    return (
        <div className='RecipiesCard'>
            <ul>
                <li>{name}</li>
                <li>{gredient}</li>
            </ul>
        </div>
    )
};