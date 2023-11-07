import React from 'react';
import './style/Navgation.css';

import categories from '../data/categories';

function handleMouseEnter() {
  // Mostrar o submenu quando o mouse entra na categoria
  const submenu = document.querySelector('.submenu');
  submenu.style.display = 'block';
}

function handleMouseLeave() {
  // Ocultar o submenu quando o mouse sai da categoria
  const submenu = document.querySelector('.submenu');
  submenu.style.display = 'none';
}

function Navgation() {
  // const { id } = useParams();
  // const categorieToShow = categories[id - 1];
  return (
    <div className="container-navbar">
      <div
        className="category"
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
      >
        <button type="button">Categorias</button>
        <div className="submenu">
          {
            categories.map(({ category, id }) => (
              <p key={ id }>{ category }</p>
            ))
          }
        </div>
      </div>
      <p>Ofertas do dia</p>
      <p>Minhas compras</p>
      <p>Contato</p>
      <p>Ajuda</p>
      <p>Português - BR</p>
    </div>
  );
}

export default Navgation;
