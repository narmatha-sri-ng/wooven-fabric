import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiEye } from 'react-icons/fi';

export const ProductCard = ({ product, onViewDetails }) => {
  const { title, category, price, image, tag } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden bg-bg-base border border-border-theme transition-luxury hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-bg-alt">
        {tag && (
          <span className="absolute top-4 left-4 z-10 bg-primary text-bg-base text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-accent">
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-3">
          <button
            onClick={() => onViewDetails && onViewDetails(product)}
            className="p-3 bg-bg-base text-primary hover:bg-accent hover:text-bg-base transition-colors rounded-full shadow-lg"
            title="View Details"
          >
            <FiEye className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          {category}
        </p>
        <h3 className="font-serif text-lg leading-tight mb-2 text-primary group-hover:text-accent transition-colors line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-theme">
          <span className="font-serif text-lg text-primary">{price}</span>
          <button
            onClick={() => onViewDetails && onViewDetails(product)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors"
          >
            Details <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
