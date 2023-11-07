import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Navgation from '../components/Navgation';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Navgation />
      <Card />
    </div>
  );
}

export default Home;
