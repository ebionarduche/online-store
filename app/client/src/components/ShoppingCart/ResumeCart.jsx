import './ResumeCart.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function ResumeCart({ price }) {
  const divider = 10;
  const pix = 0.9;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = (price.reduce((acc, cur) => acc + cur)).toFixed(2);
    setTotal(totalPrice);
  }, [price]);

  return (
    <div className="resume-cart-container">
      <h1>RESUMO</h1>
      <p>{`Valor dos Produtos: R$${total} `}</p>
      <p>Frete R$ 0,00 </p>
      <p>{`em até 10x de R$ ${(total / divider).toFixed(2)} sem juros`}</p>
      <p>{`Valor a vista no Pix R$ ${(total * pix).toFixed(2)}`}</p>

    </div>
  );
}

export default ResumeCart;

ResumeCart.propTypes = {
  price: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
