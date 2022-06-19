import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/recipes/reducer';


const Grab = () => {
  const [name, setName] = useState('');
  const [gredient, setGredient] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe({id: Math.round(Math.random() * 10000), name, gredient}));
    setName('');
    setGredient('');
  };

  return (
    <div className='grab_div'>
      <form id='recipes_form'>
        <input type="text" id='form_name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" id='form_gredient' value={gredient} onChange={(e) => setGredient(e.target.value)} required/>
        <button onClick={handleSubmit}>DARE U!</button>
      </form>
    </div>
  )
}

export default Grab