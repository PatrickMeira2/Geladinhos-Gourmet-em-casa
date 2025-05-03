import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const btn = btnRef.current;

    if (headline) {
      headline.classList.add('animate-fadeInUp');
    }
    
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fadeInUp');
      }, 300);
    }
    
    if (btn) {
      setTimeout(() => {
        btn.classList.add('animate-fadeInUp');
      }, 600);
    }
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-green-500/10 via-purple-500/5 to-red-500/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-green-700/10 to-purple-700/10"></div>
      
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-red-600 to-green-600 opacity-0"
          >
            Fature até R$4.000 por Mês Vendendo Geladinhos Gourmet
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-700 mb-10 opacity-0"
          >
            Descubra receitas lucrativas e técnicas de venda rápidas para transformar geladinhos em renda extra — mesmo sem experiência e com pouco dinheiro
          </p>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <video 
              className="w-full max-w-3xl mx-auto"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/src/video/videoplayback (2).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <button 
            ref={btnRef}
            className="bg-gradient-to-r from-green-500 to-purple-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0"
          >
            QUERO COMEÇAR AGORA
          </button>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={scrollToNextSection}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronDown className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;