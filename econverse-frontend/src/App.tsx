import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import ProductSection from "./components/ProductSection";
import PartnershipBanner from "./components/PartnershipBanner";
import Newsletter from "./components/Newsletter";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  installments: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => {
        console.error('API error:', err);
        setProducts([
          {
            id: 1,
            name: 'iPhone 13 Pro Max 256GB Azul Sierra',
            price: 28.90,
            originalPrice: 35.90,
            image: '/images/iphone-13-pro-max-blue.png',
            installments: 'ou 2x de R$ 14,45 sem juros'
          },
          {
            id: 2,
            name: 'iPhone 13 Pro Max 256GB Dourado',
            price: 28.90,
            originalPrice: 35.90,
            image: '/images/iphone-13-pro-max-graphite.png',
            installments: 'ou 2x de R$ 14,45 sem juros'
          },
          {
            id: 3,
            name: 'iPhone 13 Pro Max 256GB Grafite',
            price: 28.90,
            originalPrice: 35.90,
            image: '/images/iphone-13-pro-max-silver.png',
            installments: 'ou 2x de R$ 14,45 sem juros'
          },
          {
            id: 4,
            name: 'iPhone 13 Pro Max 256GB Prateado',
            price: 28.90,
            originalPrice: 35.90,
            image: '/images/iphone-13-pro-max-silver.png',
            installments: 'ou 2x de R$ 14,45 sem juros'
          }
        ]);
      });
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryGrid />
      
      <ProductSection title="Produtos relacionados" products={products} />
      
      <div className="partnership-banners-container">
        <PartnershipBanner 
          title="Parceiros"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
          backgroundImage="/images/banner-1.png"
        />
        <PartnershipBanner 
          title="Parceiros"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
          backgroundImage="/images/banner-2.png"
        />
      </div>
      
      <ProductSection title="Produtos relacionados" products={products} />
      
      <div className="partnership-banners-container">
        <PartnershipBanner 
          title="Parceiros"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
          backgroundImage="/images/banner-1.png"
        />
        <PartnershipBanner 
          title="Parceiros"
          subtitle="Lorem ipsum dolor sit amet, consectetur"
          buttonText="CONFIRA"
          backgroundImage="/images/banner-2.png"
        />
      </div>

      <section className="brand-section">
        <h2>Navegue por marcas</h2>
        <div className="brand-logos">
          <div className="brand-logo-circle">
            <img src="/images/Group-35.png" alt="Econverse" />
          </div>
          <div className="brand-logo-circle">
            <img src="/images/Group-35.png" alt="Econverse" />
          </div>
          <div className="brand-logo-circle">
            <img src="/images/Group-35.png" alt="Econverse" />
          </div>
          <div className="brand-logo-circle">
            <img src="/images/Group-35.png" alt="Econverse" />
          </div>
          <div className="brand-logo-circle">
            <img src="/images/Group-35.png" alt="Econverse" />
          </div>
        </div>
      </section>

      <ProductSection title="Produtos relacionados" products={products} />
      
      <Newsletter />
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/images/Group 35.png" alt="Econverse" className="footer-logo" />
            <p>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat</p>
          </div>
          <div className="footer-section">
            <h3>Institucional</h3>
            <ul>
              <li>Sobre nós</li>
              <li>Lojas</li>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Ajuda</h3>
            <ul>
              <li>FAQ</li>
              <li>Dúvidas</li>
              <li>Prazos de entrega</li>
              <li>Formas de pagamento</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Termos</h3>
            <ul>
              <li>Termos e condições</li>
              <li>Política de privacidade</li>
              <li>Política de cookies</li>
              <li>Termos de entrega</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;