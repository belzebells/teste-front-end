import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="hdr">
      {/* Top bar */}
      <div className="hdr__top">
        <div className="hdr__top-wrap">
          <div className="hdr__top-item">
            <i className="ic ic-shield" />
            <span>Compra <strong>100% segura</strong></span>
          </div>
          <div className="hdr__top-item">
            <i className="ic ic-truck" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>
          <div className="hdr__top-item">
            <i className="ic ic-card" />
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* Linha principal */}
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
              <i className="ic-search" />
            </button>
          </div>

          <div className="hdr__icons">
            {/* Sprite: uma imagem com 4 ícones 32x32 lado a lado */}
            <button className="hdr__icon sp sp-mobile" aria-label="Pedidos" />
            <button className="hdr__icon sp sp-heart" aria-label="Favoritos" />
            <button className="hdr__icon sp sp-user" aria-label="Minha conta" />
            <button className="hdr__icon sp sp-cart" aria-label="Carrinho" />
          </div>
        </div>
      </div>
      {/* A barra de categorias NÃO está aqui — renderize num componente separado */}
    </header>
  );
};

export default Header;
