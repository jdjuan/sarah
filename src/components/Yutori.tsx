import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Heart, Circle } from 'lucide-react';

const Yutori = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="yutori" className="py-16 md:py-24 bg-soft-purple/10">
      <div ref={ref} className="section-container">
        <motion.h2 
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Yutori – Proyecto de Vida
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div 
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/Foto Sarah y Jhena.jpg"
              alt="Sarah y Jheniffer - Fundadoras de Yutori"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-lg shadow-lg max-w-xs -rotate-2">
              <p className="text-terracota italic font-playfair">
                "Yutori nació de un encuentro de almas que creen en el poder de transformar con calma, en comunidad, con ciencia y corazón."
              </p>
            </div>
            
            <div className="absolute -bottom-8 left-8 flex space-x-2">
              <div className="h-16 w-16 bg-terracota rounded-full flex items-center justify-center shadow-lg animate-float">
                <Heart className="text-white" size={32} />
              </div>
              <div className="h-16 w-16 bg-soft-blue rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Circle className="text-white" size={32} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <p className="mb-6">
                Yutori es el centro integrativo que cofundé junto a Jheniffer, y representa uno de los pilares más significativos 
                de mi camino profesional y espiritual. Este proyecto nació de una conexión humana profunda, de un encuentro donde 
                descubrimos un propósito compartido: acompañar procesos de transformación, comprensión y crecimiento desde una mirada integral.
              </p>
              
              <p className="mb-6">
                Yutori significa "caminar con calma" y refleja nuestra intención de construir un espacio donde la transformación no 
                se apresura, sino que se habita conscientemente. Es un centro que entrelaza la ciencia, la espiritualidad y el arte 
                del acompañamiento terapéutico.
              </p>
              
              <h3 className="text-xl text-terracota font-medium mb-4">¿Qué hacemos en Yutori?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                    <Circle size={16} />
                  </span>
                  <span>Facilitamos <strong>terapias integrativas</strong>, tanto presenciales como asincrónicas, diseñadas para conectar mente, cuerpo y espíritu.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                    <Circle size={16} />
                  </span>
                  <span>Creamos <strong>talleres, encuentros vivenciales y círculos terapéuticos</strong>, espacios de aprendizaje profundo y experiencia emocional colectiva.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                    <Circle size={16} />
                  </span>
                  <span>Lideramos programas como <strong>Sasayori</strong>, círculos de palabra, reflexión y transformación emocional, y <strong>Amae-Dori</strong>, un proyecto de acompañamiento para adultos mayores.</span>
                </li>
              </ul>
              
              <div className="italic text-center text-lg border-t border-b border-terracota/30 py-4 my-6">
                "Yutori es el puente entre la sabiduría interna y la transformación compartida. Es mi hogar espiritual hecho proyecto."
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <a 
                  href="https://www.centroyutori.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-soft-blue text-white rounded-md hover:bg-soft-blue/90 transition-colors duration-300"
                >
                  <span>Visita Yutori</span>
                  <ExternalLink className="ml-2" size={18} />
                </a>
                <a 
                  href="https://wa.me/573007496757" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 border border-soft-blue text-soft-blue rounded-md hover:bg-soft-blue/10 transition-colors duration-300"
                >
                  <span>WhatsApp Yutori</span>
                  <ExternalLink className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Yutori;