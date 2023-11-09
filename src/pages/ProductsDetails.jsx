import './styles/ProductsDetails.css';

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import ProductReviews from '../components/ProductsDetails/ProductReviews';
import Navgation from '../components/Navgation';
import Footer from '../components/Footer';

import cartIcon from '../data/icons/shopping-cart-icon.png';
import favIcon from '../data/icons/icons-heart-off.png';
import shareIcon from '../data/icons/share-icon.png';

import products from '../data/products';
import generateStarRating from '../utils/genereteStarRating';
import calculateAverageRating from '../utils/calculateAverageRating';

function ProductsDetails() {
  const { InsertProductCart } = useContext(CartContext);
  const { id } = useParams();
  const productToShow = products[id - 1];
  return (
    <div className="products-details">
      <Header />
      <Navgation />
      <h1>{productToShow.name}</h1>

      <div className="products-details-container">
        <div className="products-details-illustrator">

          <div className="products-details-icons">
            {
              generateStarRating(calculateAverageRating(productToShow.ratting))
            }
            <div>{generateStarRating(calculateAverageRating(productToShow.ratting))}</div>
            <img src={ favIcon } alt="" width="30px" />
            <img src={ shareIcon } alt="" width="30px" />
          </div>

          <img src={ productToShow.primaryImage } alt="" />
          <h2>{productToShow.characteristics.brand}</h2>
          <h2>{`Cores disponiveis: ${productToShow.characteristics.cor.join(', ')}`}</h2>
        </div>

        <div className="products-details-buy">
          <span>{`R$ ${productToShow.price}`}</span>
          <p>{productToShow.description}</p>

          <button type="button"> Comprar </button>

          <button
            type="button"
            onClick={ () => InsertProductCart(productToShow) }
          >
            <img src={ cartIcon } alt="" />
          </button>
        </div>

      </div>
      <ProductReviews product={ productToShow } />
      <Footer />
    </div>
  );
}

export default ProductsDetails;
