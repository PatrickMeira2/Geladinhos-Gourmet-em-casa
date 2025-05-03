import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Silva",
    location: "São Paulo, SP",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    text: "Comecei do zero e em 15 dias já estava lucrando R$ 1.200 com os geladinhos. As receitas são incríveis e as técnicas de vendas funcionam mesmo!",
    stars: 5
  },
  {
    name: "Carlos Oliveira",
    location: "Rio de Janeiro, RJ",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    text: "Investimento que se pagou na primeira semana. Estou vendendo para estabelecimentos locais e já tenho clientes fixos graças às estratégias do curso.",
    stars: 5
  },
  {
    name: "Juliana Mendes",
    location: "Belo Horizonte, MG",
    image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150",
    text: "Como mãe solo, precisava de uma renda extra que me permitisse ficar em casa. Este curso mudou minha vida completamente! Agora ganho mais do que no meu antigo emprego.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
            Histórias de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos alunos estão falando sobre os resultados
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 ${
            isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-purple-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;