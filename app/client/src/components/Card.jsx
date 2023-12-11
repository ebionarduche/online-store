import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { ReactComponent as CartIcon } from 'feather-icons/dist/icons/shopping-cart.svg';
import { ReactComponent as HeartIcon } from 'feather-icons/dist/icons/heart.svg';
import ProductsContext from '../context/ProductsContext';
// import products from '../data/products';
import './style/Card.css';

function Main() {
  const { products } = useContext(ProductsContext);

  const history = useHistory();

  const handleClick = (productId) => {
    history.push(`/products/${productId}`);
  };

  return (

    <div className="card-container">
      {
        products.map((product) => (
          <button
            key={ product.id }
            className="card"
            onClick={ () => handleClick(product.id) }
          >
            <div className="card-icons">
              <CartIcon className="iconSGV" />
              <HeartIcon className="iconSGV" />

            </div>
            <div className="card-image">
              <img src={ product.primaryImage } alt="" />
            </div>

            <h1>{product.name}</h1>
            <h2>{product.categories}</h2>
            <span>
              R$
              {' '}
              {product.price}
            </span>
            <button type="button" onClick={ () => handleClick(product.id) }>
              Comprar
            </button>
          </button>
        ))
      }
    </div>
  );
}

export default Main;
