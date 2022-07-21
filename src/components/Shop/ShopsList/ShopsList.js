import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";


import { ShopButtons } from "./ShopButtons";
import './ShopsList.css';



const ShopList = (props) => {

   // const [currentShop, setCurrentShop] = useState('mcd')

   // let currentShop = "mcd";

   // const setCurrentShop = (id) => { currentShop = id }

   // useEffect(() => {
   //    console.log("usedEf")
   // }, [])




   // console.log(currentShop)

   // const setShop = () => {
   //    setCurrentShop()
   // }
   let currentShop = props.currentShop;
   console.log(currentShop)




   return (
      <div className="shopsList">
         <p>Shops:</p>

         <ShopButtons shopId={'mcd'} >McDuck</ShopButtons>
         <ShopButtons shopId={'cfk'} >CFK</ShopButtons>
         <ShopButtons shopId={'bk'}>BugrerKnight</ShopButtons>
         <ShopButtons shopId={'cc'}>CreepyCheeken</ShopButtons>

      </div>

   )
}

export default ShopList