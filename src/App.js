import React from 'react';
import { ReactDOM } from 'react';



import Menu from './components/Menubar/Menubar';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

import './App.css';


function App() {
  return (
    <div>
      <Menu />
      <Shop />
      <Cart />


    </div>

  );
}

export default App;
