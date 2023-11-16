import React from 'react';
import Header from '../components/Header';
import './styles/Favorites.css';
import Navgation from '../components/Navgation';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

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
      <Carousel />
      <Footer />
    </div>
  );
}

export default Favorites;
