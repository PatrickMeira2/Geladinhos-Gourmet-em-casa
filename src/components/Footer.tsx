import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <span className="font-bold text-lg">
              Geladinho Gourmet
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-purple-200 mb-2">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;