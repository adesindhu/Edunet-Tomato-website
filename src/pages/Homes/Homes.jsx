import React, { useState } from 'react'
import './Homes.css'
import Header from '../../Component/Header/Header';
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay';

const Homes = () => {

  const [Category,setCategory] =useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu Category={Category} setCategory={setCategory}/>
        <FoodDisplay Category={Category}/>
    </div>
  );
}

export default Homes;

