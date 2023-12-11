/* eslint-disable react/jsx-max-depth */
import './styles/ProductsDetails.css';

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import products from '../data/products';

import ProductReviews from '../components/ProductsDetails/ProductReviews';
import Carousel from '../components/Carousel';

import cartIcon from '../data/icons/shopping-cart-icon.png';
import favIcon from '../data/icons/icons-heart-off.png';
import shareIcon from '../data/icons/share-icon.png';

import generateStarRating from '../utils/genereteStarRating';
import calculateAverageRating from '../utils/calculateAverageRating';

function ProductsDetails() {
  const { InsertProductCart } = useContext(CartContext);
  const { id } = useParams();
  const productToShow = products[id - 1];

  return (
    <div className="products-details">
      <h1>{productToShow.name}</h1>

      <div className="products-details-container">
        <div className="products-details-illustrator">
          <div className="products-details-icons">
            {generateStarRating(calculateAverageRating(productToShow.ratting))}
            <img src={ favIcon } alt="" width="30px" />
            <img src={ shareIcon } alt="" width="30px" />
          </div>

          <img src={ productToShow.primaryImage } alt="" />
          <h2>{productToShow.characteristics.brand}</h2>
          <div className="color-bullets">
            <span>Cores Disponíveis:</span>
            {productToShow.characteristics.cor.map((color, index) => (
              <div
                key={ index }
                className="color-bullet"
                style={ { backgroundColor: color } }
              />
            ))}
          </div>
          <br />
          <h3>Descrição</h3>
          <p>{productToShow.description}</p>
        </div>

        <div className="products-details-buy">
          <div className="product-details-buttons-container">
            <span>{`R$ ${productToShow.price}`}</span>

            <button className="product-details-buy-button" type="button">
              Comprar
            </button>

            <button
              className="product-details-cart-button"
              type="button"
              onClick={ () => InsertProductCart(productToShow) }
            >
              <img src={ cartIcon } alt="" width="50px" />
            </button>
          </div>
          <Carousel />
        </div>
      </div>

      <ProductReviews product={ productToShow } />
    </div>
  );
}

export default ProductsDetails;
