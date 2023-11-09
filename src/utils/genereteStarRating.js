import starFull from '../data/icons/icons-star-cheia.png';
import starEmpty from '../data/icons/icons-star-vazada.png';
import starHalf from '../data/icons/icons-star-half.png';

const FIVE = 5;

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = FIVE - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  // Adiciona estrelas inteiras
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={ i }>
        <img src={ starFull } alt="" width="25px" />
      </span>,
    );
  }

  // Adiciona meia estrela, se necessário
  if (halfStar) {
    stars.push(
      <span key="half">
        <img src={ starHalf } alt="" width="25px" />
      </span>,
    );
  }

  // Adiciona estrelas vazias, se necessário
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={ `empty-${i}` }>
        <img src={ starEmpty } alt="" width="25px" />
      </span>,
    );
  }

  return stars;
}

export default generateStarRating;
