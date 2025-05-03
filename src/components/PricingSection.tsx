import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Clock, Check, X } from 'lucide-react';

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const includeItems = [
    "Curso completo com mais de 20 aulas",
    "12 receitas lucrativas e testadas",
    "Planilha de custos e precificação",
    "Guia de vendas pelo WhatsApp",
    "Templates de divulgação para Instagram",
    "Lista de fornecedores exclusivos",
    "Suporte por 30 dias"
  ];

  const excludeItems = [
    "Não há mensalidades recorrentes",
    "Não precisa de equipamentos caros"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
            Investimento Único
          </h2>
          <div className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            <p>Bônus e preço promocional por tempo limitado</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <Clock className="h-6 w-6 text-red-600" />
            <div className="flex gap-2 text-lg">
              <div className="bg-red-600 text-white py-1 px-3 rounded-md">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="text-red-600 font-bold">:</span>
              <div className="bg-red-600 text-white py-1 px-3 rounded-md">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-red-600 font-bold">:</span>
              <div className="bg-red-600 text-white py-1 px-3 rounded-md">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-1 px-6 rounded-full font-bold text-sm z-10">
            OFERTA ESPECIAL
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-purple-200">
            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-gray-500 line-through text-2xl mr-3">R$ 297,00</span>
                    <span className="bg-red-100 text-red-600 py-1 px-3 rounded-lg text-sm font-bold">
                      78% OFF
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-purple-800 mb-2">
                    R$ 65,00
                  </div>
                  <div className="text-gray-500">Pagamento único</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-purple-600 text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-8">
                QUERO COMEÇAR AGORA
              </button>
              
              <div className="space-y-3 mb-8">
                {includeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                {excludeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-red-100 p-1 rounded-full mt-1">
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 text-center">
              <p className="text-gray-700">
                Formas de pagamento: Cartão, Pix e Boleto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;