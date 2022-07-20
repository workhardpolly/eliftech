import React from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";


import { ShopButtons } from "./ShopButtons";
import './ShopsList.css';



const ShopList = () => {



   return (
      <div className="shopsList">
         <p>Shops:</p>

         <ShopButtons shopId={1} shopName={'McDuck'} />
         <ShopButtons shopId={2} shopName={'CFK'} />
         <ShopButtons shopId={3} shopName={'BurgerKey'} />
         <ShopButtons shopId={4} shopName={'CreepyChiken'} />


      </div>

   )
}

export default ShopList