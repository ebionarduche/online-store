import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductsContext from './ProductsContext';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Utilize useEffect para fazer chamadas assíncronas
    api.get('/products')
      .then((response) => {
        console.log(('esse carai mermo', response));
        setProducts(response.data);
      });
  }, []);

  const initialState = useMemo(
    () => ({
      products,
    }),
    [products],
  );

  return (
    <ProductsContext.Provider value={ initialState }>
      <div>{children}</div>
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
