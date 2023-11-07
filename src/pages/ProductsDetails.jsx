import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import products from '../data/products';
import ProductReviews from '../components/ProductsDetails/ProductReviews';
import './styles/ProductsDetails.css';
import cartIcon from '../data/icons/shopping-cart-icon.png';

function ProductsDetails() {
  const { id } = useParams();
  const productToShow = products[id - 1];
  return (
    <div className="products-details">
      <Header />
      <h1>{productToShow.name}</h1>
      <h2>{productToShow.characteristics.brand}</h2>

      <div className="products-details-container">
        <div className="products-details-illustrator">
          <img src={ productToShow.primaryImage } alt="" width="200px" />
          <h2>{`Cores disponiveis: ${productToShow.characteristics.cor.join(', ')}`}</h2>
        </div>

        <div className="products-details-buy">
          <span>{`R$ ${productToShow.price}`}</span>
          <p>{productToShow.description}</p>

          <button type="button"> Comprar </button>

          <button type="button">
            <img src={ cartIcon } alt="" />
          </button>
        </div>

      </div>
      <ProductReviews product={ productToShow } />
    </div>
  );
}

export default ProductsDetails;
