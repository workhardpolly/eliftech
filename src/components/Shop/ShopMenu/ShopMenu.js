import React from "react";
import { useState } from "react";
import './ShopMenu.css'
import data from './Item/items.json'



const ShopMenu = () => {



   const items = Object.keys(data.mcd);



   const template = items.map((item) => {

      return (
         <div className="item" key={data.mcd[item].id}>
            <img src={data.mcd[item].productImage}></img>
            <h3>{data.mcd[item].productName}</h3>
            <p>{data.mcd[item].productDesctiption}</p>
            <button className={data.mcd[item].id}>ADD TO CART</button>

         </div>)
   });


   return (
      <div className="list">
         {template}
      </div>
   )
}

export default ShopMenu