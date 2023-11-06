import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import products from '../data/products';
import ProductReviews from '../components/ProductsDetails/ProductReviews';

function ProductsDetails() {
  const { id } = useParams();
  const productToShow = products[id - 1];
  return (
    <div className="products-details-container">
      <Header />
      <h1>{productToShow.name}</h1>
      <h2>{productToShow.characteristics.brand}</h2>
      <img src={ productToShow.primaryImage } alt="" width="200px" />
      <h2>
        Cores disponiveis:
        {' '}
        {productToShow.characteristics.cor.join(', ')}
      </h2>

      <span>
        R$
        {' '}
        {productToShow.price}
      </span>
      <p>{productToShow.description}</p>

      <ProductReviews product={ products[id - 1] } />
    </div>
  );
}

export default ProductsDetails;
