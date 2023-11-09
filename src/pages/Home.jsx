import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Navgation from '../components/Navgation';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Navgation />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
