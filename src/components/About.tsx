import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, BookOpen, Heart } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="sobre-mí" className="py-8 md:py-12 bg-warm-gradient">
      <div ref={ref} className="section-container">
        <motion.h2
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mt-12">
          <motion.div
            className="lg:col-span-3"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="text-lg font-medium text-neutral-grey">
                "Conóceme: habito la psicología desde la experiencia encarnada,
                no desde respuestas únicas. Acompaño desde lo que he vivido,
                sentido y resignificado; sin juicios, con empatía y profundo
                respeto por cada camino."
              </p>
            </div>

            <p className="mb-4">
              Soy Sarah Ospina Cano, psicóloga y Magíster en Salud Pública. Me
              formé académicamente en la investigación científica, enseñando y
              publicando sobre psicología organizacional positiva. Mi camino
              profesional comenzó en el mundo universitario, asesorando
              investigaciones y enseñando metodología científica.
            </p>

            <p className="mb-4">
              Sin embargo, un llamado más profundo me invitó a transformar mi
              propósito: integrar lo psicológico, biológico y espiritual en el
              acompañamiento humano. Hoy, acompaño procesos terapéuticos,
              asesoro investigaciones académicas y facilito formaciones con un
              enfoque integrador.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Sparkles className="text-soft-blue mb-2" size={32} />
                <h3 className="text-neutral-grey font-medium">
                  Psicología Positiva
                </h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <BookOpen className="text-soft-blue mb-2" size={32} />
                <h3 className="text-neutral-grey font-medium">Salutogénesis</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Heart className="text-soft-blue mb-2" size={32} />
                <h3 className="text-neutral-grey font-medium">Neurociencia</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <img
                src="/Sobre mi.jpg"
                alt="Sarah Ospina Cano - Psicóloga"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                style={{ aspectRatio: "4/5", objectPosition: "center" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
