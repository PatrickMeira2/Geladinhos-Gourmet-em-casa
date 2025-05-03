import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-full shadow-md">
                <ShieldCheck className="h-24 w-24 text-green-600" />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
                Garantia Incondicional de 7 Dias
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Se você não ficar satisfeito com o conteúdo do curso por qualquer motivo, basta solicitar o reembolso em até 7 dias após a compra e devolveremos 100% do seu dinheiro, sem perguntas.
              </p>
              
              <p className="text-lg font-medium text-purple-700">
                Isso significa que você pode testar todo o conteúdo sem nenhum risco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;