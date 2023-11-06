import React from 'react';
import PropTypes from 'prop-types';

function ProductReviews({ product }) {
  return (
    <div>
      <h3>Avaliações:</h3>
      {
        product.ratting.map((review) => (
          <div key={ review.title }>
            <p>{review.stars}</p>
            <h4>{review.title}</h4>
            <p>{review.assessment}</p>
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
