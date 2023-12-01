import React from 'react';
import PropTypes from 'prop-types';
import './ProductCart.css';

import { ReactComponent as TrashIcon } from 'feather-icons/dist/icons/trash-2.svg';
import { ReactComponent as RightIcon } from 'feather-icons/dist/icons/chevron-right.svg';
import { ReactComponent as LeftIcon } from 'feather-icons/dist/icons/chevron-left.svg';

function ProductCart({ shoppingCart }) {
  return (
    <div className="product-cart-container">
      {shoppingCart.map((product) => (
        <div className="product-cart-card" key={ product.id }>
          <img src={ product.image } alt="" />
          <div>
            <h1>{product.productName}</h1>
            <h2>{product.brand}</h2>
          </div>
          <LeftIcon />
          <span>1</span>
          <RightIcon />
          <TrashIcon />
          <p>{`R$ ${product.price}`}</p>
        </div>
      ))}
    </div>
  );
}

ProductCart.propTypes = {
  shoppingCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductCart;
