import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo">onverse</span>
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Institucional</h3>
            <ul className="footer-links">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Ajuda</h3>
            <ul className="footer-links">
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Como Comprar</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Frete e Entrega</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Atendimento</h3>
            <ul className="footer-links">
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Chat Online</a></li>
              <li><a href="#">Telefone: (11) 1234-5678</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Econverse. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;