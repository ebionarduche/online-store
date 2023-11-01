import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsDetails from '../pages/ProductsDetails';

function Router() {
  return (
    <Switch>
      <Route path="/products" component={ ProductsDetails } />
    </Switch>
  );
}

export default Router;
