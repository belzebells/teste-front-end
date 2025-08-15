import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import PartnershipBanner from './components/PartnershipBanner';
import './App.css';

function App() {
  // Mock iPhone data matching the original design
  const iPhoneProducts = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 28.90,
      originalPrice: 35.90,
      image: '/placeholder.svg?height=150&width=120',
      installments: 'ou 2x de R$ 14,45 sem juros'
    },
    {
      id: 2,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 28.90,
      originalPrice: 35.90,
      image: '/placeholder.svg?height=150&width=120',
      installments: 'ou 2x de R$ 14,45 sem juros'
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 28.90,
      originalPrice: 35.90,
      image: '/placeholder.svg?height=150&width=120',
      installments: 'ou 2x de R$ 14,45 sem juros'
    },
    {
      id: 4,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 28.90,
      originalPrice: 35.90,
      image: '/placeholder.svg?height=150&width=120',
      installments: 'ou 2x de R$ 14,45 sem juros'
    }
  ];

  return (
    <div className="App">
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryGrid />
      <ProductSection title="Produtos relacionados" products={iPhoneProducts} />
      
      <PartnershipBanner 
        title="Parceiros"
        subtitle="Lorem ipsum dolor sit amet, consectetur"
        buttonText="CONFIRA"
        backgroundImage="/placeholder.svg?height=300&width=800"
      />
      
      <ProductSection title="Produtos relacionados" products={iPhoneProducts} />
      
      <PartnershipBanner 
        title="Parceiros"
        subtitle="Lorem ipsum dolor sit amet, consectetur"
        buttonText="CONFIRA"
        backgroundImage="/placeholder.svg?height=300&width=800"
      />
    </div>
  );
}

export default App;