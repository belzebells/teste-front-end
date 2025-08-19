import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        {/* Coluna 1 — logo + texto + redes sociais */}
        <div className="footer-first">
          <div className="footer-logo">
            <img src="/images/Group-35.png" alt="Econverse" />
          </div>

          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>

          <div className="footer-social">
            <a className="social icon-ig" aria-label="Instagram" href="#"></a>
            <a className="social icon-fb" aria-label="Facebook" href="#"></a>
            <a className="social icon-ln" aria-label="LinkedIn" href="#"></a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Movimento</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="footer-col">
          <h4>Ajuda</h4>
          <ul>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Perguntas Frequentes</a></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className="footer-col">
          <h4>Termos</h4>
          <ul>
            <li><a href="#">Termos e Condições</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Troca e Devolução</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Econverse. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
