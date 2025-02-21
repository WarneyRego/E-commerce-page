import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useStore } from './store/useStore';
import Banner from './components/Banner';

function App() {
  const isDarkMode = useStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-200 
      ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}>
      <Navbar />
      
      
      <main className="container mx-auto px-4 py-8">
        <HeroSlider />
        <ProductGrid />
      </main>
      <AnimatePresence>
        <Cart />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;