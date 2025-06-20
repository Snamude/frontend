import React, { useState } from 'react';
import './Navbar.css'; 
import logo from '../Assets/logo.png'; 
import cart_icon from '../Assets/cart_icon.png'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" /> 
            <p>SHOPPER</p> 
        </div>
        <ul className="nav-menu">
             <li onClick={() => { setMenu("shop"); }}>
                <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
                {menu === "shop" ? <hr/> : <></>}
            </li>
            <li onClick={() => { setMenu("mens"); }}>
                <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
                {menu === "mens" ? <hr/> : <></>}
            </li>
            <li onClick={() => { setMenu("womens"); }}>
                <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
                {menu === "womens" ? <hr/> : <></>}
            </li>
            <li onClick={() => { setMenu("kids"); }}>
                <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
                {menu === "kids" ? <hr/> : <></>}
            </li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login">
                <button className="px-4 py-2 bg-blue-500 text-black font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200 shadow">Login</button>
            </Link>
            <Link to="/cart">
                <img src={cart_icon} alt="Cart Icon" /> 
            </Link>
            <div className='nav-cart-count'>0</div> 
        </div>
    </div>
  );
};

export default Navbar;
