import { useHistory } from 'react-router-dom';
import { ReactComponent as CircleIcon } from 'feather-icons/dist/icons/circle.svg';
import { ReactComponent as HeartIcon } from 'feather-icons/dist/icons/heart.svg';

import products from '../data/products';
import './style/Card.css';

function Main() {
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
            <div>

              <CircleIcon
                className="iconSGV"
              />
              <HeartIcon width={ 100 } />
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
