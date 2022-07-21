import { useState } from "react";
import React from "react";


const ShopButtons = (props) => {



   const [currentShop, setCurrentShop] = useState(0)

   const chooseShop = () => {
      setCurrentShop(0)
      setCurrentShop(props.shopId)
   }

   console.log(currentShop)

   return (

      <button onClick={chooseShop}></button>

   )
}

export { ShopButtons }