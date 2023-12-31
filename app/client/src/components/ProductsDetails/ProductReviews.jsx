import React from 'react';
import PropTypes from 'prop-types';
import './ProductReviews.css';

import starFull from '../../data/icons/icons-star-cheia.png';
import starEmpty from '../../data/icons/icons-star-vazada.png';

import generateStarRating from '../../utils/genereteStarRating';
import calculateAverageRating from '../../utils/calculateAverageRating';

function ProductReviews({ product }) {
  const ONE = 1;
  const TWO = 2;
  const THREE = 3;
  const FOUR = 4;
  const FIVE = 5;

  return (
    <div className="products-reviews-container">

      <div className="products-reviews-title">
        <img src={ starFull } alt="" />
        <h3>Avaliações dos Usuários:</h3>
      </div>
      {
        product.ratting.length > 0 ? (
          <div>
            <p>{`Média de avaliações: ${calculateAverageRating(product.ratting)}`}</p>
            <div>{generateStarRating(calculateAverageRating(product.ratting))}</div>
          </div>
        ) : (
          <p>Ainda não há avaliações.</p>
        )
      }

      {
        product.ratting.map((review) => (
          <div key={ review.title }>
            <div>
              <h5>{review.client}</h5>
              <span>{review.data}</span>
              <div className="products-reviews-stars">
                <img src={ review.stars >= ONE ? starFull : starEmpty } alt="" />
                <img src={ review.stars >= TWO ? starFull : starEmpty } alt="" />
                <img src={ review.stars >= THREE ? starFull : starEmpty } alt="" />
                <img src={ review.stars >= FOUR ? starFull : starEmpty } alt="" />
                <img src={ review.stars >= FIVE ? starFull : starEmpty } alt="" />
              </div>
              <h4>{review.title}</h4>
              <p>{review.assessment}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

ProductReviews.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratting: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
        assessment: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default ProductReviews;
