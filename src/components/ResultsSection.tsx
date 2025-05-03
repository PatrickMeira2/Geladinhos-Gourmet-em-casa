import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const ResultsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">
          Resultados Reais dos Nossos Alunos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/src/imgs/sg-11134201-7rcfa-lquymx912vvg0a.webp" 
              alt="Resultado de vendas de geladinho gourmet" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/src/imgs/sg-11134201-7rcd8-lquynast92ok02.webp" 
              alt="Sucesso nas vendas de geladinho gourmet" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;