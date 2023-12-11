import React from 'react';
import Router from './components/Router';
import Header from './components/Header';
import Navgation from './components/Navgation';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navgation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
