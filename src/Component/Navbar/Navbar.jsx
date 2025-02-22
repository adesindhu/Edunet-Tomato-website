import React, { useState } from 'react'
import './Navbar.css';
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const[menu,setMenu] = useState("Home");

  return (
    <div className='Navbar'>
        <img src= {assets.logo} alt="" className="logo" />
        <ul className="Navbar-menu">
          <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile-App")}className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
          <li onClick={()=>setMenu("Contact Us")}className={menu==="Contact Us"?"active":""}>Contact Us</li>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt=""></img>
          <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt=""></img></Link>
            <div className='dot'></div>
          </div>
          <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar;

