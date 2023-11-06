import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import products from '../data/products';
// import ProductReviews from '../components/ProductsDetails/ProductReviews';

function ProductsDetails() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>{products[id - 1].name}</h1>
      <h2>{products[id - 1].characteristics.brand}</h2>
      <img src={ products[id - 1].primaryImage } alt="" width="200px" />
      <h2>
        Cores disponiveis:
        {' '}
        {products[id - 1].characteristics.cor.join(', ')}
      </h2>

      <span>
        R$
        {' '}
        {products[id - 1].price}
      </span>
      <p>{products[id - 1].description}</p>

      {/* <ProductReviews product={ products[id - 1] } /> */}
    </div>
  );
}

export default ProductsDetails;
