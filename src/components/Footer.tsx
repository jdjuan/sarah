import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-terracota/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-terracota font-playfair text-xl mb-2">Sarah Ospina Cano</h3>
            <p className="text-neutral-grey text-sm">Psicóloga y Magíster en Salud Pública</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center justify-center mb-2">
              <span className="mr-2 text-terracota">Hecho con</span>
              <Heart className="text-terracota" size={16} />
            </div>
            <p className="text-neutral-grey text-sm">© {currentYear} Sarah Ospina Cano. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;