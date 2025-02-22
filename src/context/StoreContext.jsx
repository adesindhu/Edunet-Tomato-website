import React, { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";  // Assuming you have a list of food items

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [constItems, setConstItems] = useState([]); // State for cart items

  useEffect(() => {
    setFoods(food_list); // Setting food_list as initial state
  }, []);

  // Function to add item to the cart
  const addToCart = (foodId) => {
    const existingItem = constItems.find(item => item.foodId === foodId);
    if (existingItem) {
      setConstItems(
        constItems.map(item =>
          item.foodId === foodId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setConstItems([...constItems, { foodId, quantity: 1 }]);
    }
  };

  // Function to remove item from the cart
  const removeFromCart = (foodId) => {
    setConstItems(constItems.filter(item => item.foodId !== foodId));
  };

  return (
    <StoreContext.Provider value={{ food_list: foods, constItems, addToCart, removeFromCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

