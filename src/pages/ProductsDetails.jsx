import React from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';

function ProductsDetails() {
  // const { id } = useParams();
  // const [toggle, setTogle] = useState(false);;
  // const response = products.filter((product) => product.id === id);
  return (
    <div>
      <Header />
      <h1>ProductsDetails</h1>
      <div className="card-details">
        <Card />
      </div>
    </div>
  );
}

export default ProductsDetails;
