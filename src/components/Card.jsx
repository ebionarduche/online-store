import products from '../data/products';
import './style/Card.css';

function Main() {
  return (
    <div className="card-container">
      {
        products.map((product) => (
          <div key={ product.name } className="card">
            <div className="card-image">
              <img src={ product.primaryImage } alt="" />
            </div>
            <h1>{product.name}</h1>
            <h2>{product.categories}</h2>
            <h3>{product.subcategories}</h3>
            <p>{product.description}</p>
            <span>
              R$
              {' '}
              {product.price}
            </span>
          </div>
        ))
      }
    </div>
  );
}

export default Main;
