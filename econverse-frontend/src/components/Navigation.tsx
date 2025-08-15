import React from 'react';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#" className="nav-item nav-item--all">TODAS CATEGORIAS</a>
        <a href="#" className="nav-item">SUPERMERCADO</a>
        <a href="#" className="nav-item">LIVROS</a>
        <a href="#" className="nav-item">MODA</a>
        <a href="#" className="nav-item">LANÇAMENTOS</a>
        <a href="#" className="nav-item nav-item--highlight">OFERTAS DO DIA</a>
        <a href="#" className="nav-item nav-item--subscription">
          ⭐ ASSINATURA
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
