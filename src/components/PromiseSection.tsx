import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const PromiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-gradient-to-br from-purple-50 to-green-50 rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">
            Aprenda a faturar de <span className="text-green-600">R$ 1.000</span> a <span className="text-red-600">R$ 4.000</span> por mês com geladinhos feitos em casa
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-700 text-center font-medium">
            <p className="mb-6">
              Mesmo sem seguidores, experiência prévia e com pouco dinheiro para investir.
            </p>
            <p className="text-purple-700 font-semibold">
              Um negócio simples que você pode iniciar HOJE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;