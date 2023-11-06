import React from 'react';
import './style/Header.css';
import profileIcon from '../data/icons/profile-icon.png';
import cartIcon from '../data/icons/shopping-cart-icon.png';
import FavIcon from '../data/icons/icons-heart-on.png';

function Header() {
  return (
    <div className="header-container">
      <h1>Online Store🛒</h1>
      <input type="text" placeholder="Search..." />
      <div className="header-icon-container">
        <img src={ profileIcon } alt="icon profile" width="50px" />
        <img src={ cartIcon } alt="icon cartshopping" width="50px" />
        <img src={ FavIcon } alt="" width="50px" />
      </div>
    </div>
  );
}

export default Header;
