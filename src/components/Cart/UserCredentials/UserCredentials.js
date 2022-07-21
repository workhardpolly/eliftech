import React, { useState } from "react";


import "./UserCredentials.css";


const credentials1 = { 1: 1, 2: 2, 3: 3 }

const UserCredentials = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [adress, setAdress] = useState('');


   const credentials = {
      name,
      email,
      phone,
      adress
   };
   console.log(credentials)

   return (


      <div className="userCredentialsBlock">


         <p>Name:</p>

         <input type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}></input>

         <p>Email:</p>
         <input type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         ></input>
         <p>Phone:</p>
         <input type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}></input>
         <p>Adress:</p>
         <input type="text"
            required
            value={adress}
            onChange={(e) => setAdress(e.target.value)}></input>
         <button type="submit" className="saveCred">Save</button>



      </div >
   )
}

export { UserCredentials, credentials1 }