import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Sparkles, 
  MessageCircle, 
  BadgeDollarSign, 
  Hourglass, 
  Smartphone 
} from 'lucide-react';

const benefits = [
  {
    icon: <Sparkles className="h-12 w-12 text-purple-600" />,
    title: "Receitas Purificadas",
    description: "Fórmulas testadas e otimizadas para máximo lucro e satisfação do cliente"
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-green-600" />,
    title: "Técnicas para WhatsApp e Instagram",
    description: "Aprenda a vender mesmo sem seguidores usando estratégias eficientes"
  },
  {
    icon: <BadgeDollarSign className="h-12 w-12 text-red-600" />,
    title: "Baixo Investimento",
    description: "Comece com pouco dinheiro e escale conforme seu negócio cresce"
  },
  {
    icon: <Hourglass className="h-12 w-12 text-purple-600" />,
    title: "Venda Rápida",
    description: "Estratégias para começar a vender em até 7 dias após iniciar o curso"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-green-600" />,
    title: "Sem Experiência Necessária",
    description: "Treinamento passo a passo mesmo para quem nunca empreendeu antes"
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
            Benefícios Exclusivos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Por que nosso método transforma geladinhos gourmet em uma fonte de renda confiável
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg border border-purple-100 transition-all duration-700 delay-${index * 100} ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-5 bg-purple-50 p-4 rounded-xl inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;