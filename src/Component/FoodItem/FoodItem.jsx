import React, { useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
    const [itemCount,setItemCount] = useState(0)
  return (
    <div>
       <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt=" "></img>
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''></img>

            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
       </div>
    </div>
  )
}

export default FoodItem