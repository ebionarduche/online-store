import React from 'react';
import Header from '../components/Header';
import './styles/Favorites.css';

function Favorites() {
  return (
    <div className="favorite-container">
      <Header />
      <h1>🧡 Favoritos</h1>
      <div className="favorite-container-content">
        <h1>Não favoritou nenhum produto o ludimilo!</h1>
        <h1>🍃</h1>
      </div>
    </div>
  );
}

export default Favorites;
