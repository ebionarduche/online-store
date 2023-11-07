import React from 'react';
import { useHistory, Link } from 'react-router-dom'; // Importe o useHistory

import './style/Header.css';
import profileIcon from '../data/icons/profile-icon.png';
import cartIcon from '../data/icons/shopping-cart-icon.png';
import FavIcon from '../data/icons/icons-heart-on.png';
import logo from '../data/images/logo.png';

function Header() {
  const history = useHistory(); // Inicialize o useHistory

  const navigateToShoppingCart = () => {
    history.push('/shopping-cart'); // Use history.push para navegar para a página de carrinho
  };

  const navigateToFavorites = () => {
    history.push('/favorites'); // Use history.push para navegar para a página de carrinho
  };

  return (
    <div className="header-container">
      <Link to="/">
        <img src={ logo } alt="icons kabuy" width="220px" />
      </Link>
      <input type="text" placeholder="Search..." />
      <div className="header-icon-container">
        <img src={ profileIcon } alt="icon profile" width="50px" />
        <button onClick={ navigateToFavorites }>
          <img src={ FavIcon } alt="" width="50px" />
        </button>
        <button onClick={ navigateToShoppingCart }>
          <img src={ cartIcon } alt="icon cartshopping" width="50px" />
        </button>
      </div>
    </div>
  );
}

export default Header;
