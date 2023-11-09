import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const InsertProductCart = (product) => {
    const newProduct = {
      id: product.id,
      productName: product.name,
      image: product.primaryImage,
      price: product.price,
      brand: product.characteristics.brand,
    };
    setShoppingCart((prevCart) => [...prevCart, newProduct]);
    console.log(shoppingCart);
  };

  const initialState = useMemo(
    () => ({
      InsertProductCart,
      shoppingCart,
    }),
    [shoppingCart],
  );

  return (
    <CartContext.Provider value={ initialState }>
      <div>{children}</div>
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
