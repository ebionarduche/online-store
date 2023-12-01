import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Importe o useHistory
import './styles/ShoppingCart.css';

import cartIcon from '../data/icons/shopping-cart-icon.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumeCart from '../components/ShoppingCart/ResumeCart';
import ProductCart from '../components/ShoppingCart/ProductCart';
import Carousel from '../components/Carousel';
import CartContext from '../context/CartContext';

function ShoppingCart() {
  const { shoppingCart } = useContext(CartContext);
  const history = useHistory();

  const handleContinueShopping = () => {
    history.push('/');
  };

  return (
    <div>
      <Header />

      {
        shoppingCart.length === 0 ? (
          <div>
            <h1>Seu carrinho está vazio</h1>
            <button type="button" onClick={ handleContinueShopping }>
              <div className="cart-button-container">
                <img src={ cartIcon } alt="" />
                Continuar Comprando
              </div>
            </button>
          </div>
        ) : (
          <div className="shopping-cart-container">
            <section className="shopping-cart-final-buy">
              <ProductCart shoppingCart={ shoppingCart } />
              <ResumeCart price={ shoppingCart.map(({ price }) => price) } />
            </section>

            <section className="shopping-cart-continue-tu-buy">
              <span>Deseja olhar outros produtos similares</span>
              <Carousel />
              <button type="button" onClick={ handleContinueShopping }>
                <div className="cart-button-container">
                  <img src={ cartIcon } alt="" />
                  Continuar Comprando
                </div>
              </button>
            </section>

          </div>
        )
      }

      <Footer />
    </div>
  );
}

export default ShoppingCart;
