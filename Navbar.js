import React from 'react'

const Navbar = () => {

  return (
    <nav className='navBar'>
        <a href="/" className='site-title'>Yummy~</a>
        <ul className='nav'>
            <li>
                <a href="/grab">Grab</a>
            </li>
            <li>
                <a href="/recipes">Recipes</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar