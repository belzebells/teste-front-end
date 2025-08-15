import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-item">
          <span>🛡️</span>
          <span>Compra <strong>100% segura</strong></span>
        </div>
        <div className="header__top-item">
          <span>🚚</span>
          <span><strong>Frete grátis</strong> acima de R$ 200</span>
        </div>
        <div className="header__top-item">
          <span>📦</span>
          <span><strong>Parcele</strong> suas compras</span>
        </div>
      </div>
      
      <div className="header__main">
        <div className="header__logo">
          <span className="logo">onverse</span>
        </div>
        
        <div className="header__search">
          <input 
            type="text" 
            placeholder="O que você está buscando?"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        
        <div className="header__icons">
          <button className="icon-button">📱</button>
          <button className="icon-button">❤️</button>
          <button className="icon-button">👤</button>
          <button className="icon-button">🛒</button>
        </div>
      </div>
    </header>
  );
};

export default Header;