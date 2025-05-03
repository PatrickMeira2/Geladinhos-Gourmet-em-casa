import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500">
            Geladinho Gourmet
          </span>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-green-500 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          Quero Começar Agora
        </button>
      </div>
    </header>
  );
};

export default Header;