import React from "react";

const Template = (props) => {

   let item = props.d.map((item) => {


      return (
         <div className="item" key={item.id}>
            <img src={item.productImage}></img>
            <h3>{item.productName}</h3>
            <p>{item.productDesctiption}</p>
            <button className={item.id}>ADD TO CART</button>

         </div>)
   })

   return item

}

export default Template

