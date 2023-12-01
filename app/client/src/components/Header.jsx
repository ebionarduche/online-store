import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style/Header.css';

import { ReactComponent as CartIcon } from 'feather-icons/dist/icons/shopping-cart.svg';
import { ReactComponent as UserIcon } from 'feather-icons/dist/icons/user.svg';
import { ReactComponent as HeartIcon } from 'feather-icons/dist/icons/heart.svg';
import logo from '../data/images/logo.png';
import CartContext from '../context/CartContext';

function Header() {
  const history = useHistory(); // Inicialize o useHistory
  const { shoppingCart } = useContext(CartContext);

  const navigateHeader = (link) => {
    history.push(link);
  };
  return (
    <div className="header-container">
      <Link to="/">
        <img src={ logo } alt="icons kabuy" width="220px" />
      </Link>

      <input type="text" placeholder="Search..." />

      <div className="header-icon-container">
        <button onClick={ () => navigateHeader('/perfil') }>
          <UserIcon className="header-iconSGV" />
        </button>
        <button onClick={ () => navigateHeader('/favorites') }>
          <HeartIcon className="header-iconSGV" />
        </button>
        <button onClick={ () => navigateHeader('/shopping-cart') }>
          <CartIcon className="header-iconSGV" />
          <p className="header-cart-counter">
            {shoppingCart.length > 0
              ? Number(shoppingCart[shoppingCart.length - 1].cartLenght)
              : ''}
          </p>
        </button>

      </div>
    </div>
  );
}

export default Header;
