import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, Instagram, Mail, BookOpen } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactItems = [
    {
      icon: <MessageSquare />,
      title: "WhatsApp",
      value: "+57 314 878 3438",
      link: "https://wa.me/573148783438",
    },
    {
      icon: <Instagram />,
      title: "Instagram",
      value: "@psicologa.sarahospina",
      link: "https://instagram.com/psicologa.sarahospina",
    },
    {
      icon: <Mail />,
      title: "Email",
      value: "sarahospinacano@gmail.com",
      link: "mailto:sarahospinacano@gmail.com",
    },
    {
      icon: <BookOpen />,
      title: "Google Scholar",
      value: "Sarah Ospina Cano",
      link: "https://scholar.google.com/citations?user=xeYcz7sAAAAJ&hl=es",
    },
  ];

  return (
    <section id="contacto" className="py-8 md:py-12 bg-soft-blue/10">
      <div ref={ref} className="section-container">
        <motion.h2
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>

        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl text-terracota font-playfair mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-warm-white rounded-lg hover:bg-terracota/10 transition-colors duration-300"
                  >
                    <span className="text-terracota mr-4">{item.icon}</span>
                    <div>
                      <p className="text-neutral-grey text-sm">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl text-terracota font-playfair mb-6">
                  Un mensaje para ti
                </h3>

                <p className="mb-4">
                  Cuidarte no es un lujo, es una práctica de coherencia contigo.
                  Este espacio está diseñado para acompañarte desde la
                  psicología integrativa, honrando tu historia, tus ritmos y la
                  posibilidad de construir sentido incluso en medio del caos.
                </p>

                <p className="mb-8">
                  Si sientes que es momento de iniciar un proceso de
                  acompañamiento, estaré feliz de conversar contigo y explorar
                  juntos el camino que mejor se adapte a tu momento vital.
                </p>
              </div>

              <motion.a
                href="https://wa.me/573148783438"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-4 bg-terracota text-white rounded-md hover:bg-terracota/90 transition-colors duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="mr-2" size={20} />
                Escríbeme por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
