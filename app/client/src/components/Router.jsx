import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsDetails from '../pages/ProductsDetails';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Favorites from '../pages/Favorites';
import Perfil from '../pages/Perfil';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/products/:id" component={ ProductsDetails } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/favorites" component={ Favorites } />
      <Route path="/perfil" component={ Perfil } />

    </Switch>
  );
}

export default Router;
