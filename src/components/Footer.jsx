import React from 'react';

function Footer() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const gabriel = 'https://www.linkedin.com/in/gabrielneves-dev/';
  const ebio = 'https://www.linkedin.com/in/ebio-narduche/';
  const taline = 'https://www.linkedin.com/in/talinechuman/';

  return (
    <div>
      <footer className="footer-container" data-testid="footer">
        <p>Desenvolvido por:</p>
        <div className="gabriel-infos">
          <p>
            <button onClick={ () => handleClick(ebio) }>Ebio Narduche</button>
          </p>
        </div>
        <div className="gabriel-infos">
          <p>
            <button onClick={ () => handleClick(gabriel) }>Gabriel Pereira</button>
          </p>
        </div>
        <div className="gabriel-infos">
          <p>
            <button onClick={ () => handleClick(taline) }>Taline Chuman</button>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
