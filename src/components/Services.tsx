import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  BookOpen,
  Users,
  Sparkles,
  Heart,
  MessageCircle,
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("terapia");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tabs = [
    { id: "terapia", label: "Alquimia Emocional", icon: <Brain /> },
    { id: "academico", label: "Asesorías Académicas", icon: <BookOpen /> },
    {
      id: "organizacional",
      label: "Consultoría Organizacional",
      icon: <Users />,
    },
  ];

  return (
    <section id="acompañamiento" className="py-8 md:py-12">
      <div ref={ref} className="section-container">
        <motion.h2
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Acompañamiento
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8 mb-12"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-5 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-terracota text-white shadow-md"
                  : "bg-white text-neutral-grey hover:bg-soft-blue/10"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {activeTab === "terapia" && (
            <div className="space-y-8">
              <h3 className="text-2xl text-terracota font-playfair">
                Alquimia Emocional – Terapia Integrativa
              </h3>

              <p>
                Mi metodología terapéutica no se centra únicamente en aliviar
                síntomas o resolver problemas específicos. Desde la
                salutogénesis, la psicología positiva y la neurociencia
                aplicada, te acompaño en el proceso de descubrir, fortalecer y
                expandir tus propios recursos internos para vivir una vida más
                plena, resiliente y con sentido.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-warm-white p-5 rounded-lg">
                  <h4 className="flex items-center text-lg font-medium mb-3 text-terracota">
                    <Brain className="mr-2" size={20} />
                    Perspectiva Salutogénica
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-grey">
                    <li>La salud como proceso, no como estado</li>
                    <li>
                      El sentido de coherencia: comprendiendo, manejando y dando
                      sentido a la vida
                    </li>
                  </ul>
                </div>

                <div className="bg-warm-white p-5 rounded-lg">
                  <h4 className="flex items-center text-lg font-medium mb-3 text-terracota">
                    <Sparkles className="mr-2" size={20} />
                    Psicología Positiva Aplicada
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-grey">
                    <li>Enfoque en fortalezas personales</li>
                    <li>Emociones positivas y bienestar sostenible</li>
                  </ul>
                </div>

                <div className="bg-warm-white p-5 rounded-lg">
                  <h4 className="flex items-center text-lg font-medium mb-3 text-terracota">
                    <Heart className="mr-2" size={20} />
                    Cerebro y Gestión Emocional
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-grey">
                    <li>Reprogramación de creencias limitantes</li>
                    <li>Regulación emocional y prácticas de autocompasión</li>
                    <li>Comunicación consciente y afectiva</li>
                  </ul>
                </div>

                <div className="bg-warm-white p-5 rounded-lg">
                  <h4 className="flex items-center text-lg font-medium mb-3 text-terracota">
                    <Sparkles className="mr-2" size={20} />
                    Propósito de Vida y Coherencia
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-neutral-grey">
                    <li>Decisiones alineadas con tus valores</li>
                    <li>Integración de pensamiento, emoción y acción</li>
                    <li>Una vida con dirección y sentido</li>
                  </ul>
                </div>
              </div>

              <div className="bg-soft-blue/10 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-medium mb-4 text-terracota">
                  Esta terapia es para ti si quieres trabajar en:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                      <Sparkles size={16} />
                    </span>
                    <span>
                      <strong>Paz Interior y Coherencia:</strong> integración de
                      pensamiento, emoción y acción; calma y vida alineada con
                      propósito.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                      <Sparkles size={16} />
                    </span>
                    <span>
                      <strong>Economía y Abundancia Personal:</strong>{" "}
                      transformación de creencias limitantes sobre la
                      abundancia; apertura a nuevas oportunidades.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                      <Sparkles size={16} />
                    </span>
                    <span>
                      <strong>Salud Integral:</strong> conexión con el cuerpo y
                      mente desde el autocuidado; regulación del estrés.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                      <Sparkles size={16} />
                    </span>
                    <span>
                      <strong>Adaptación y Resiliencia:</strong> desarrollo de
                      recursos internos ante el cambio.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-terracota text-white rounded-full p-1 mr-3 mt-1">
                      <Sparkles size={16} />
                    </span>
                    <span>
                      <strong>Relaciones Interpersonales:</strong> comunicación
                      consciente, vínculos auténticos y recíprocos.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="italic text-center text-lg border-t border-b border-terracota/30 py-6 mt-8">
                "Este proceso no es sobre resolver, sino sobre comprender,
                integrar y florecer desde lo que ya habita en ti."
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                <p className="text-[22px] md:text-[24px] font-playfair text-terracota text-center">
                  Sesiones presenciales y virtuales
                </p>
                <a
                  href="https://wa.me/573148783438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#22c55e] transition-colors duration-300"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Agenda tu sesión
                </a>
              </div>
            </div>
          )}

          {activeTab === "academico" && (
            <div className="space-y-8">
              <h3 className="text-2xl text-terracota font-playfair">
                Asesorías Académicas 1:1
              </h3>

              <div className="bg-soft-purple/10 p-8 rounded-lg my-8">
                <h4 className="text-2xl md:text-3xl text-terracota font-playfair mb-4">
                  ¿Te has sentido abrumado por el proceso de investigar o
                  escribir un artículo académico?
                </h4>
                <p className="text-xl">
                  No estás solo. Muchas veces, la investigación puede parecer un
                  camino confuso y estresante. Pero cuando cuentas con las
                  herramientas adecuadas y un acompañamiento claro, este camino
                  puede volverse fascinante, transformador e incluso
                  disfrutable.
                </p>
              </div>

              <p>
                Estas asesorías están pensadas para mostrarte que la
                investigación no tiene por qué ser una tortura: puede ser un
                proceso de exploración, descubrimiento y aprendizaje profundo.
                Porque cuando comprendes el propósito de lo que haces y te
                sientes acompañado, el conocimiento cobra vida y el proceso se
                vuelve significativo.
              </p>

              <p>
                Desde mi experiencia como docente e investigadora, ofrezco un
                acompañamiento personalizado para personas que estén inmersas en
                procesos académicos rigurosos y deseen desarrollar habilidades
                sólidas en investigación científica. Estas asesorías están
                diseñadas para estudiantes de pregrado, maestría, doctorado o
                profesionales que buscan publicar, comprender el método
                científico o mejorar su escritura académica.
              </p>

              <div className="bg-warm-white p-6 rounded-lg mt-8">
                <h4 className="text-lg font-medium mb-4 text-terracota">
                  ¿Qué aprenderás en estas asesorías?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-1 mr-3 mt-1">
                      <BookOpen size={16} />
                    </span>
                    <span>
                      Cómo formular preguntas de investigación pertinentes y
                      relevantes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-1 mr-3 mt-1">
                      <BookOpen size={16} />
                    </span>
                    <span>
                      Diseño de marcos teóricos coherentes y con fundamento
                      científico.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-1 mr-3 mt-1">
                      <BookOpen size={16} />
                    </span>
                    <span>
                      Técnicas de revisión bibliográfica y uso de gestores como
                      Mendeley.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-1 mr-3 mt-1">
                      <BookOpen size={16} />
                    </span>
                    <span>
                      Metodologías de investigación cualitativa y cuantitativa.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-1 mr-3 mt-1">
                      <BookOpen size={16} />
                    </span>
                    <span>
                      Elaboración de protocolos, análisis de datos y redacción
                      académica estructurada.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-1 mr-3 mt-1">
                      <BookOpen size={16} />
                    </span>
                    <span>
                      Estrategias para escribir artículos publicables, responder
                      a revisores y elegir revistas científicas adecuadas.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-2 text-terracota">
                  Trayectoria destacada:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-neutral-grey">
                  <li>
                    Psicóloga con énfasis en Psicología Organizacional Positiva.
                  </li>
                  <li>Maestría en Salud Pública.</li>
                  <li>Docente universitaria y asesora metodológica.</li>
                  <li>Autora de artículos científicos indexados.</li>
                </ul>
                <p className="mt-4">
                  Ingresa a mi{" "}
                  <a
                    href="https://scholar.google.com/citations?hl=es&user=xeYcz7sAAAAJ&view_op=list_works&sortby=pubdate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracota hover:underline"
                  >
                    Google Scholar: Sarah Ospina Cano
                  </a>{" "}
                  para conocer mis publicaciones más recientes.
                </p>
              </div>

              <div className="italic text-center text-lg border-t border-b border-terracota/30 py-6 mt-8">
                "Investigar no es solo generar conocimiento, es sembrar
                comprensión en el mundo."
              </div>
            </div>
          )}

          {activeTab === "organizacional" && (
            <div className="space-y-8">
              <h3 className="text-2xl text-terracota font-playfair">
                Consultoría Organizacional
              </h3>

              <p>
                En un mundo laboral que exige cada vez más productividad y
                eficiencia, muchas organizaciones olvidan que su mayor fortaleza
                reside en el bienestar de su talento humano. La salud emocional,
                la motivación interna y el sentido de pertenencia no son lujos;
                son condiciones esenciales para lograr resultados sostenibles,
                entornos de trabajo saludables y equipos resilientes.
              </p>

              <p>
                Mi propuesta de consultoría parte del principio de que invertir
                en el bienestar de las personas no solo mejora el clima laboral,
                sino que potencia la innovación, el compromiso y la
                productividad. Desde un enfoque fundamentado en la psicología
                organizacional positiva y la salud pública, diseño experiencias
                formativas que fortalecen tanto el ser individual como el
                colectivo organizacional.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-warm-white p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-3">
                      <Sparkles size={24} />
                    </span>
                  </div>
                  <h4 className="text-lg font-medium mb-3 text-terracota text-center">
                    Psicología Organizacional Positiva
                  </h4>
                  <p className="text-neutral-grey">
                    Exploramos estrategias para identificar y potenciar las
                    fortalezas individuales y colectivas, promoviendo un
                    liderazgo centrado en el reconocimiento, la inspiración y el
                    sentido de propósito.
                  </p>
                </div>

                <div className="bg-warm-white p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-3">
                      <Heart size={24} />
                    </span>
                  </div>
                  <h4 className="text-lg font-medium mb-3 text-terracota text-center">
                    Salud pública y promoción del bienestar
                  </h4>
                  <p className="text-neutral-grey">
                    Brindamos herramientas prácticas para prevenir el burnout,
                    fortalecer la salud mental colectiva y fomentar una cultura
                    de cuidado integral en los equipos.
                  </p>
                </div>

                <div className="bg-warm-white p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <span className="inline-block bg-soft-blue text-white rounded-full p-3">
                      <Users size={24} />
                    </span>
                  </div>
                  <h4 className="text-lg font-medium mb-3 text-terracota text-center">
                    Liderazgo consciente y equipos resilientes
                  </h4>
                  <p className="text-neutral-grey">
                    Fortalecemos habilidades de comunicación asertiva, gestión
                    emocional y liderazgo empático para guiar procesos humanos
                    con claridad, coherencia y sentido.
                  </p>
                </div>
              </div>

              <div className="italic text-center text-lg border-t border-b border-terracota/30 py-6 mt-8">
                "Organizaciones sanas son construidas por personas que se
                sienten vistas, cuidadas y valoradas."
              </div>

              <p className="text-center">
                <strong>Objetivo:</strong> Construir organizaciones saludables,
                humanas y productivas, donde las personas se sientan vistas,
                cuidadas y valoradas, porque cuando el bienestar se convierte en
                cultura, la excelencia es una consecuencia natural.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
