import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import About from './components/About';
import Services from './components/Services';
import Yutori from './components/Yutori';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Quote 
            text="El verdadero crecimiento radica en enseñar lo que aprendo y aprender de lo que enseño. Para mí, ese es el significado de servicio."
            className="py-12"
          />
          <About />
          <Quote 
            text="Aprender es el propósito de la vida, un viaje constante donde cada experiencia nos permite crecer, errar y transformarnos en un proceso pedagógico continuo."
            className="py-12"
          />
          <Services />
          <Yutori />
          <Testimonials />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;