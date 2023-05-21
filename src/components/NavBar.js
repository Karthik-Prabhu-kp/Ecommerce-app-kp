import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {

  return (
    <div>
        <NavLink to="/">Home Name</NavLink>
        <input className='search-container' type='search' name='search'/>
        <ul>
            <li className='icon'>
                <div>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </li>
            <li className='icon'>
                <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </li>
            <li className='icon'>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default NavBar