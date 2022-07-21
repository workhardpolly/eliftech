import React, { useState } from "react";


import "./UserCredentials.css";


const UserCredentials = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [adress, setAdress] = useState('');


   const handleSubmit = (e) => {
      e.preventDefault();
      const credentials = {
         name,
         email,
         phone,
         adress
      };

      fetch('http://localhost:4000/orders', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(credentials)
      })

   }

   return (



      <form onSubmit={handleSubmit} >
         <div className="checkoutForm">
            <div className="credentialsInputForm">
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

            </div>
            <div className="summary">
               { }
            </div>
            <div className="submit">
               <div>{ }</div>
               <button type="submit" className="saveOrder">Save</button>
            </div>
         </div >




      </form>


   )
}

export default UserCredentials