import React from 'react';
import { motion } from 'framer-motion';

interface QuoteProps {
  text: string;
  className?: string;
}

const Quote = ({ text, className = '' }: QuoteProps) => {
  return (
    <motion.div 
      className={`w-full bg-soft-purple/10 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-xl md:text-2xl text-terracota font-playfair text-center italic">
          "{text}"
        </p>
      </div>
    </motion.div>
  );
};

export default Quote;