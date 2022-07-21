import React from "react";
import { useState, useEffect } from "react";

import Template from "./Item/Template";
import ShopList from "../ShopsList/ShopsList";

import './ShopMenu.css'
// import data from './Item/items.json'



const ShopMenu = (props) => {

   // const [base, setBase] = useState('mcd');
   const base = ('mcd')
   console.log(props.currentShop)

   const [recievedData, setItemsArray] = useState('');



   useEffect(() => {
      fetch('http://localhost:5000/' + base)
         .then(res => {
            return res.json();
         })
         .then((data) => {

            setItemsArray(Object.values(data));

         });
   }, []);


   // console.log(recievedData);

   let status = recievedData.length > 0


   return (
      <div className="list">
         {status ? <Template s={status} d={recievedData} /> : console.log('not OK')}

      </div>
   )
}

export default ShopMenu







