import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  imageReveal: {
    hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
    visible: { clipPath: 'inset(0% 0% 0% 0%)' }
  }
};

export const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  duration = 0.8,
  delay = 0,
  className = '',
  threshold = 0.1,
  once = true,
  tag = 'div'
}) => {
  const Tag = motion[tag] || motion.div;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom luxury ease
      }}
      variants={variants[animation] || variants.fadeUp}
    >
      {children}
    </Tag>
  );
};
