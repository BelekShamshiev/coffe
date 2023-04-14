import React from 'react';
import "./Burger.css"
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import basket from "../../assets/basket.png";
const Burger = () => {
    return (
        <div className='container'>
  <section class="top-nav">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <a href='#'>HOME</a>
      <a href='#'>MENU</a>
      <a href='#'>SHOP</a>
      <a href='#'>PAGES</a>
      <a href='#'>BLOCK</a>
      <a href='#'> CONTACT</a>
    </ul>
    <div className='phone'>
      <img src={phone} alt="phone"/>
      <p>123-456-789</p>
    </div>
    <div className="basket">
      <img src={basket} alt="basket" />
      <p>0- $0.00</p>
    </div>
  </section>


        </div>
    );
};

export default Burger;