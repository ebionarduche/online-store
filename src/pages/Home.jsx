import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>

      <div className="card-details">
        <Card />
      </div>

    </div>
  );
}

export default Home;
