import React from "react";
import ShopsList from './ShopsList/ShopsList'
import ShopMenu from './ShopMenu/ShopMenu'
import './Shop.css'

console.log('shopslist')

const Shop = () => {
   return (
      <div className="shop">
         <ShopsList />
         <ShopMenu />
      </div>



   )
}

export default Shop