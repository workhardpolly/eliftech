import React from "react";
import { ReactDOM } from "react";

import { useState } from "react";

import { UserCredentials, credentials1 } from "./UserCredentials/UserCredentials";
import CheckOut from "./CheckOut/CheckOut";
import Summary from './Summary/Summary';
import './Cart.css';



const Cart = () => {

   const credentials = UserCredentials.credentials1;

   console.log(credentials)


   const handleSubmit = (e) => {
      e.preventDefault();

      console.log(credentials)

   }


   return (
      <div className="cart">
         <form onSubmit={handleSubmit}
            method="get" className="inputForm">

            <UserCredentials />
            <Summary />
            <CheckOut />

         </form>

      </div>
   )
}

export default Cart