import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart, GraduationCap, Briefcase, User } from 'lucide-react';

const audiences = [
  {
    icon: <Heart className="h-10 w-10 text-red-500" />,
    title: "Mães",
    description: "Que buscam uma fonte de renda trabalhando de casa para cuidar da família"
  },
  {
    icon: <User className="h-10 w-10 text-purple-500" />,
    title: "Iniciantes",
    description: "Sem experiência prévia que querem começar um negócio com baixo investimento"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-green-500" />,
    title: "Desempregados",
    description: "Em busca de uma fonte de renda imediata enquanto procuram recolocação"
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-blue-500" />,
    title: "Estudantes",
    description: "Que precisam de uma renda extra com horários flexíveis"
  }
];

const AudienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Para Quem É Este Curso?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Se você se identifica com um destes perfis, este treinamento foi feito para você
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-700 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-purple-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-600/30 hover:bg-purple-700/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-5 bg-purple-700/50 p-4 rounded-xl inline-block">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {audience.title}
              </h3>
              <p className="text-purple-100">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;