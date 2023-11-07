import React from 'react';
import { useHistory } from 'react-router-dom'; // Importe o useHistory
import cartIcon from '../data/icons/shopping-cart-icon.png';
import Header from '../components/Header';
import './styles/ShoppingCart.css';

function ShoppingCart() {
  const history = useHistory(); // Inicialize o useHistory

  const handleContinueShopping = () => {
    history.push('/'); // Use history.push para navegar de volta para a página inicial
  };

  return (
    <div>
      <Header />
      <div className="shopping-cart-container">
        <h1>Seu carrinho está vazio</h1>
        <span>Deseja olhar outros produtos similares</span>
        <button type="button" onClick={ handleContinueShopping }>
          <div className="cart-button-container">
            <img src={ cartIcon } alt="" />
            Continuar Comprando
          </div>
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
