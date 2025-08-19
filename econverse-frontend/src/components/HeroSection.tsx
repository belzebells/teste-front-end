import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Venha conhecer nossas promoções
          </h1>
          <p className="hero__subtitle">
            <span className="hero__discount">50% Off</span> nos produtos
          </p>
          <button className="hero__button">
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
