import React from 'react';
import Header from '../components/Header';
import './styles/Favorites.css';
import Navgation from '../components/Navgation';

function Favorites() {
  return (
    <div className="favorite-container">
      <Header />
      <Navgation />
      <h1>🧡 Favoritos</h1>
      <div className="favorite-container-content">
        <h1>Você Não favoritou nenhum produto!</h1>
        <h1>🍃</h1>
      </div>
    </div>
  );
}

export default Favorites;
