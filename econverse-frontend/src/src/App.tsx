import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';
import PartnershipBanner from './components/PartnershipBanner';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
 const iPhoneProducts = [
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
];

  return (
    <div className="App">
      <Header />
      <Navigation />
      <HeroSection />
      <CategoryGrid />
      <ProductSection title="Produtos relacionados" products={iPhoneProducts} />
      
    <div className="partnership-banners-container">
      <PartnershipBanner 
    title="Parceiros"
    subtitle="Lorem ipsum dolor sit amet, consectetur - Parceiro 1"
    buttonText="CONFIRA"
    backgroundImage="/images/banner-1.png"
    />
      <PartnershipBanner 
    title="Parceiros"
    subtitle="Lorem ipsum dolor sit amet, consectetur - Parceiro 2"
    buttonText="CONFIRA"
    backgroundImage="/images/banner-2.png"
     />
    </div>

<ProductSection title="Produtos relacionados" products={iPhoneProducts} />
      
         
     <div className="partnership-banners-container">
      <PartnershipBanner 
    title="Parceiros"
    subtitle="Lorem ipsum dolor sit amet, consectetur - Parceiro 1"
    buttonText="CONFIRA"
    backgroundImage="/images/banner-1.png"
    />
      <PartnershipBanner 
    title="Parceiros"
    subtitle="Lorem ipsum dolor sit amet, consectetur - Parceiro 2"
    buttonText="CONFIRA"
    backgroundImage="/images/banner-2.png"
     />
    </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;