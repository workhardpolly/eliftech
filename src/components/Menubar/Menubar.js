import React from 'react'
import { ReactDOM } from 'react'
import './Menubar.css'

const Menu = () => {
   return (
      <div className='menubar'>
         <a href='/shop'>Shop</a>
         <span> | </span>
         <a href='/cart'>Shopping Cart</a>
      </div>
   )
}


export default Menu