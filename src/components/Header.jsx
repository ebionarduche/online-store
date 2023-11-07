import React from 'react';
import { useHistory, Link } from 'react-router-dom'; // Importe o useHistory

import './style/Header.css';
import profileIcon from '../data/icons/profile-icon.png';
import cartIcon from '../data/icons/shopping-cart-icon.png';
import FavIcon from '../data/icons/icons-heart-on.png';

function Header() {
  const history = useHistory(); // Inicialize o useHistory

  const navigateToShoppingCart = () => {
    history.push('/shopping-cart'); // Use history.push para navegar para a página de carrinho
  };

  return (
    <div className="header-container">
      <Link to="/">
        <h1>Online Store🛒</h1>
      </Link>
      <input type="text" placeholder="Search..." />
      <div className="header-icon-container">
        <img src={ profileIcon } alt="icon profile" width="50px" />
        <img src={ FavIcon } alt="" width="50px" />
        <button onClick={ navigateToShoppingCart }>
          <img src={ cartIcon } alt="icon cartshopping" width="50px" />
        </button>
      </div>
    </div>
  );
}

export default Header;
