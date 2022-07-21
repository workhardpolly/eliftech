import React from 'react';
import { ReactDOM } from 'react';
import { Routes, Route, Link } from 'react-router-dom'


import Menu from './components/Menubar/Menubar';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart.js';

import './App.css';


function App() {
  return (
    <div className='wrapper'>
      <header>
        <Menu />
      </header>

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

    </div>

  );
}

export default App;
