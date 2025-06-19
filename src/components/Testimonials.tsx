import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Zuluaga",
    text: "Recibí un valioso apoyo por parte de Sarah durante el desarrollo de mi tesis de maestría. Su compromiso, organización y capacidad para ofrecer retroalimentación constructiva fueron clave para finalizar mi proyecto satisfactoriamente. I love you, Sarah 🫶🏻🫶🏻",
  },
  {
    name: "Cristian López",
    text: "Hola, mi nombre es Cristian. Quiero compartir por medio de este mensaje la evidencia de lo que viví el año pasado, un año de muchos desafíos, especialmente desde lo emocional. Llegó un momento en que, por situaciones de vida, me sentía lleno de dudas y sin herramientas para avanzar. Afortunadamente contacté a la doctora Sarah y, gracias a su acompañamiento profesional, logré encontrar respuestas y claridad. Me brindó herramientas útiles, guía en el proceso y una presencia comprometida. Estoy muy agradecido: una excelente profesional que entrega todo de sí en el acompañamiento de nuestros procesos.",
  },
  {
    name: "Diego Rendón Gómez",
    text: "En mi proceso Sarah hizo un excelente acompañamiento. A través de sus meditaciones grupales y asesorías personales me permitió realizar muchas observaciones e introspección, con resultados sobre mi crecimiento personal, potenciación de mis conocimientos y gestión de mis emociones. Razón por la cual la recomiendo al 100%, por su profesionalidad y la excelente persona que es.",
  },
  {
    name: "Daniela Gutiérrez",
    text: "Gracias al acompañamiento que he tenido, he podido encontrar la respuesta a muchas acciones o decisiones que tomaba en el transcurso de mi vida, así no me sintiera cómoda con ellas o no fueran acordes a lo que sentía. Me ha aportado mucha seguridad, confianza en mí, tranquilidad y estabilidad. Así mismo me ha enseñado a valorar lo que soy como persona y a poner límites y hablar de manera asertiva. He disfrutado mucho el proceso y aunque sé que falta aún mucho me siento segura y confiada gracias a Sarah!!",
  },
  {
    name: "Ana Rivera",
    text: "Hola, soy paciente de la doctora Sarah y puedo decir con toda sinceridad que ha sido un proceso profundamente transformador. Gracias al acompañamiento de mi terapeuta, hoy me siento más segura, más tranquila y con metas claras. Aunque aún hay momentos en los que surgen miedos, la paz que he encontrado en cada sesión me permite afrontarlos desde un lugar mucho más sereno. Cada encuentro con ella ha sido un espacio seguro en el que me siento escuchada, comprendida y respetada. En los momentos de mayor incertidumbre o ansiedad, ella ha sido un verdadero refugio, alguien que con su paciencia y su forma tan humana de acompañar, me ha ayudado a reconectar conmigo misma. Puedo decir con el corazón en la mano que ella es mi lugar seguro.",
  },
  {
    name: "Carolina González",
    text: "A lo largo de mi vida, he enfrentado diversas situaciones personales y emocionales que han generado momentos de inseguridad, conflictos internos, y una sensación de falta de propósito, tanto en mi entorno laboral como en mis relaciones personales y familiares. En este camino, el acompañamiento de Sarah Ospina ha sido un pilar fundamental para mi crecimiento emocional y espiritual. Durante los últimos cuatro años, Sarah me ha brindado un apoyo profesional invaluable, siempre desde una postura ética y respetuosa. Con sensibilidad, claridad y herramientas concretas, me ha guiado hacia el autocontrol, la autorreflexión y la solución consciente de cada situación difícil que he atravesado.",
  },
];

const Testimonial = ({ name, text }: { name: string; text: string }) => (
  <div className="px-4 py-2">
    <div className="bg-white rounded-lg shadow-md p-6 h-[400px] md:h-[350px] overflow-auto">
      <div className="flex items-start mb-4">
        <Quote
          className="text-terracota flex-shrink-0 mr-2 rotate-180"
          size={36}
        />
        <h4 className="text-xl font-playfair text-terracota">{name}</h4>
      </div>
      <p className="text-neutral-grey">{text}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonios" className="py-8 md:py-12">
      <div ref={ref} className="section-container">
        <motion.h2
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Voces que han caminado conmigo
        </motion.h2>

        <motion.div
          className="mt-12"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
