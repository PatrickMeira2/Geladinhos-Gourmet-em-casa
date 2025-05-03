import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  Video, 
  FileText, 
  ShoppingBag, 
  Gift
} from 'lucide-react';

const steps = [
  {
    icon: <Video className="h-12 w-12 text-purple-600" />,
    title: "Curso em Vídeo",
    description: "Aulas passo a passo que você pode assistir no seu próprio ritmo"
  },
  {
    icon: <FileText className="h-12 w-12 text-green-600" />,
    title: "Modelos Prontos",
    description: "Templates de marketing e precificação para você começar imediatamente"
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-red-600" />,
    title: "Lista de Fornecedores",
    description: "Acesso direto aos melhores fornecedores de insumos com preços especiais"
  },
  {
    icon: <Gift className="h-12 w-12 text-purple-600" />,
    title: "Bônus Exclusivos",
    description: "Material adicional para maximizar seus resultados e acelerar suas vendas"
  }
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
            Como Funciona o Treinamento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um sistema completo para você começar a lucrar com geladinhos gourmet
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 items-center bg-gradient-to-r from-purple-50 to-green-50 p-6 rounded-2xl shadow-md border border-purple-100"
              >
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  {step.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 text-purple-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;