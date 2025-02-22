import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({Category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>In this single tutorial you will learn to build a food ordering website / app step by step using React JS. In this React JS project we will create the Home page to display the menu and food items, then cart page and order page. Then we will make the Sign In / Sign Up popup. </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
            <div onClick={()=> setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='explore-menu=list-item'>
                        <img className={Category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>   
                )
            })}
        </div>
        <hr/>

    </div>
  )

}

export default ExploreMenu;
