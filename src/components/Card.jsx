import { useHistory } from 'react-router-dom';
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
          <div key={ product.id } className="card">
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
          </div>
        ))
      }
    </div>
  );
}

export default Main;
