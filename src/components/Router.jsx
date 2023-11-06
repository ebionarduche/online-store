import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsDetails from '../pages/ProductsDetails';
import Home from '../pages/Home';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/products/:id" component={ ProductsDetails } />
    </Switch>
  );
}

export default Router;
