import React from 'react';
import './styles/Favorites.css';
import Carousel from '../components/Carousel';

function Favorites() {
  return (
    <div className="favorite-container">
      <h1>🧡 Favoritos</h1>
      <div className="favorite-container-content">
        <h1>Você Não favoritou nenhum produto!</h1>
        <h1>🍃</h1>
      </div>
      <Carousel />
    </div>
  );
}

export default Favorites;
