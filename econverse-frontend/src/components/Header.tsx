import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="hdr">
      {/* Top bar */}
      <div className="hdr__top">
        <div className="hdr__top-wrap">
          <div className="hdr__top-item">
            🛡️ <span>Compra <strong>100% segura</strong></span>
          </div>
          <div className="hdr__top-item">
            🚚 <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>
          <div className="hdr__top-item">
            💳 <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="hdr__main">
        <div className="hdr__container">
          <a className="hdr__logo" href="#">
            <img src="/images/Group-35.png" alt="Econverse" />
          </a>

          <div className="hdr__search">
            <input
              className="hdr__input"
              type="text"
              placeholder="O que você está buscando?"
              aria-label="Buscar"
            />
            <button className="hdr__btn-search" aria-label="Buscar">
              🔍
            </button>
          </div>

          <div className="hdr__icons">
            <button className="hdr__icon" aria-label="Pedidos">📱</button>
            <button className="hdr__icon" aria-label="Favoritos">❤️</button>
            <button className="hdr__icon" aria-label="Minha conta">👤</button>
            <button className="hdr__icon" aria-label="Carrinho">🛒</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;