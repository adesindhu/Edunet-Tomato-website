import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = () => {
  // Access the food_list from StoreContext
  const { food_list } = useContext(StoreContext);
  
  // Log to check if food_list contains data
  console.log(food_list); // Ensure the food_list contains all food items

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.length > 0 ? (
            food_list.map((food, index) => (
              <div key={index} className="food-item">
                {/* Render food image */}
                <img src={food.image} alt={food.name} className="food-image" />
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p>Price: ${food.price}</p>
              </div>
            ))
          ) : (
            <p>No dishes available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;


