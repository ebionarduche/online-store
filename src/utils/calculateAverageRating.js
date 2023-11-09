function calculateAverageRating(ratting) {
  const sum = ratting.reduce((total, rating) => total + rating.stars, 0);
  return (sum / ratting.length).toFixed(2); // Limitando a duas casas decimais
}

export default calculateAverageRating;
