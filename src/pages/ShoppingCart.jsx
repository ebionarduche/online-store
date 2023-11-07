import React from 'react';
import cartIcon from '../data/icons/shopping-cart-icon.png';
import Header from '../components/Header';
import '../components/ShoppingCart/ShoppingCart.css';

function ShoppingCart() {
  return (
    <div>
      <Header />
      <div className="shopping-cart-container">
        <h1>Seu carrinho está vazio</h1>
        <span>Deseja olhar outros produtos similares</span>
        <button type="button">
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
