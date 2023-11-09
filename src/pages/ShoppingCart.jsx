import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Importe o useHistory
import cartIcon from '../data/icons/shopping-cart-icon.png';
import Header from '../components/Header';
import './styles/ShoppingCart.css';
import Footer from '../components/Footer';
import CartContext from '../context/CartContext';


function ShoppingCart() {
  const { shoppingCart } = useContext(CartContext);
  // const [toggle, setToggle] = useState(false)
  const history = useHistory(); // Inicialize o useHistory

  const handleContinueShopping = () => {
    history.push('/'); // Use history.push para navegar de volta para a página inicial
  };

  return (
    <div>
      <Header />
      <div className="shopping-cart-container">
        {
          shoppingCart.map((product) => (
            <div key={ product.id }>
              <h1>{product.productName}</h1>
              <h2>{product.brand}</h2>
              <p>{product.price}</p>
              <img src={ product.image } alt="" />
            </div>
          ))
        }
        <h1>Seu carrinho está vazio</h1>
        <span>Deseja olhar outros produtos similares</span>
        <button type="button" onClick={ handleContinueShopping }>
          <div className="cart-button-container">
            <img src={ cartIcon } alt="" />
            Continuar Comprando
          </div>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
