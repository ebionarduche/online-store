import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Utilize useEffect para fazer chamadas assíncronas
    api.get('/categories')
      .then((response) => {
        setCategories(response.data);
      });
  }, []); // O array vazio como segundo argumento garante que useEffect seja chamado apenas uma vez após a montagem do componente

  return (
    <div className="home-container">
      {
        categories.map(({ category }) => (
          <h1 key={ category }>{category}</h1>
        ))
      }
      <Card />
    </div>
  );
}

export default Home;
