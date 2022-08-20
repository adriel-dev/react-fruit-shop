import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import List from './pages/List';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './themes';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from './pages/Cart';
import { Fruit } from "./types/Fruit";

function App() {

  const [cartItems, setCartItems] = useState<Fruit[]>([]);

  const handleAddItem = (itemToAdd: Fruit) => {
    let items = cartItems;
    let index = items.findIndex((item) => {
      return item.id === itemToAdd.id;
    })
    if(index === -1){
      items.push(itemToAdd);
      setCartItems(items);
    }
  };

  const handleRemoveItem = (itemToRemove: Fruit) => {
    let items = cartItems;
    let index = items.findIndex((item) => {
      return item.id === itemToRemove.id
    })
    items.splice(index, 1);
    setCartItems(items);
  };

  useEffect(() => {
    
  }, [cartItems]);

  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/fruits' element={<List handleAddItem={handleAddItem} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem} />} />
          <Route path='*' element={<Navigate to='/fruits' replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;