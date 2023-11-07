import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsDetails from '../pages/ProductsDetails';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/products/:id" component={ ProductsDetails } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </Switch>
  );
}

export default Router;
