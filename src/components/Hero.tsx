import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-terracota mb-6">
              Sarah Ospina Cano
            </h1>
            <p className="text-lg md:text-xl italic text-neutral-grey mb-6">
              Psicóloga y Magíster en Salud Pública
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-lg md:text-xl text-neutral-grey leading-relaxed">
                "Te doy la bienvenida a un espacio que reconoce el cansancio de vivir con el alma en lucha constante. Aquí no creemos en soluciones mágicas ni en una sanación perfecta. Sanar no es un destino, es aprender a habitarte con amabilidad."
              </p>
            </div>
            <p className="text-neutral-grey mb-8">
              Este sitio es un reflejo de mi propósito: ofrecer un acompañamiento profundo, ético y sensible desde mis enfoques en salutogénesis, psicología positiva, neurociencia y espiritualidad práctica. Aquí inicia una experiencia que respeta tu historia, honra tu proceso y celebra tu evolución.
            </p>
            <motion.a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-terracota text-white rounded-md hover:bg-terracota/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="mr-2" size={20} />
              Agenda tu sesión
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative max-w-3xl mx-auto">
            <img
              src="/Foto bienvenida.jpg"
              alt="Sarah Ospina Cano - Psicóloga"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ aspectRatio: '16/9', objectPosition: 'center' }}
            />
            <div className="absolute inset-0 rounded-lg shadow-inner bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;