import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import products from '../data/products';
import './style/Carousel.css';
import arrowRight from '../data/images/arrow-right.png';
import arrowLeft from '../data/images/arrow-left.png';

function Carousel() {
  const carousel = useRef(null);
  const history = useHistory();

  const handleClickLeft = () => {
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleClickRight = () => {
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    // Pra passar 1 em um precisamos de pegar o offsetWidth do card e ai sim vamos conseguir passar o tamanho exato
  };

  const handleClick = (productId) => {
    history.push(`/products/${productId}`);
  };

  return (
    <div className="carousel">
      <button
        onClick={ () => handleClickLeft() }
        type="button"
        className="carousel-button"
      >
        <img src={ arrowLeft } alt="arrow-left" />
      </button>
      <div className="carousel-container" ref={ carousel }>
        {products.map((product) => (
          <div key={ product.id } className="carousel-item">
            <div className="carousel-image">
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
        ))}
      </div>
      <button
        onClick={ () => handleClickRight() }
        type="button"
        className="carousel-button"
      >
        <img src={ arrowRight } alt="arrow-right" />
      </button>
    </div>
  );
}

export default Carousel;
