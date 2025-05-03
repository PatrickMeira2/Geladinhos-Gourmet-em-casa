import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Este curso é para iniciantes?",
    answer: "Sim! O curso foi desenvolvido pensando em pessoas que estão começando do zero. Todo o processo é explicado passo a passo, desde a escolha dos ingredientes até as estratégias de venda."
  },
  {
    question: "Preciso de equipamentos caros?",
    answer: "Não. Você precisa apenas de utensílios básicos de cozinha que provavelmente já tem em casa. Para começar, o investimento em equipamentos é mínimo, e você pode escalar conforme seu negócio cresce."
  },
  {
    question: "Quanto tempo leva para começar a vender?",
    answer: "Com nossa metodologia, você pode começar a vender em até 7 dias após iniciar o curso. Fornecemos estratégias de venda rápida que podem ser implementadas imediatamente."
  },
  {
    question: "Funciona sem seguidores nas redes sociais?",
    answer: "Absolutamente! Ensinamos diversas técnicas de venda que não dependem de você ter uma base de seguidores. Mostramos como utilizar o WhatsApp e outras estratégias locais para conseguir seus primeiros clientes."
  },
  {
    question: "Como recebo acesso ao curso?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com login e senha para acessar nossa plataforma de ensino. Todo o conteúdo estará disponível imediatamente."
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "O acesso é vitalício! Você poderá acessar o conteúdo quando e quantas vezes quiser, além de receber todas as atualizações futuras sem custo adicional."
  }
];

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todas as respostas de que você precisa antes de começar
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-purple-800">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 pb-6 text-gray-700 transition-all duration-300 ${
                    openFaq === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;