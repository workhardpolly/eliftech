import React from 'react'
import { ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import './Menubar.css'

const Menu = () => {
   return (
      <div className='menubar'>
         <Link to='/'>Shop</Link>
         <span> | </span>
         <Link to='/cart'>Shopping Cart</Link>
      </div>
   )
}


export default Menu