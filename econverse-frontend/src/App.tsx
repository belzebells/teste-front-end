import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <HeroSection />
    </div>
  );
}

export default App;