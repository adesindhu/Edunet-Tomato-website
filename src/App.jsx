import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';  
import { Route, Routes } from 'react-router-dom';
import Homes from './pages/Homes/homes';           
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/placeorder/placeorder';
import LoginPopup from './Component/LoginPopup/LoginPopup'; 
import FoodItem from './Component/FoodItem/FoodItem'; 

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
