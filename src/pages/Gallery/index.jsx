import React, { useState } from 'react';
import { galleryItems } from '../../data/siteData';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];

  // Filter items
  const filteredItems = galleryItems.filter(
    (item) => filter === 'All' || item.category === filter
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">GALLERY</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Visual Portfolio</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 pb-6 border-b border-border-theme">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${
                filter === cat
                  ? 'bg-primary text-bg-base border-primary'
                  : 'bg-transparent text-primary border-border-theme hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid relative overflow-hidden group border border-border-theme cursor-pointer bg-bg-alt aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-bg-base">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <FiMaximize2 className="text-accent text-lg mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-accent p-2 text-2xl"
              title="Close"
            >
              <FiX />
            </button>

            {/* Prev Trigger */}
            <button
              onClick={showPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-accent p-3 text-3xl hidden md:block"
              title="Previous"
            >
              <FiChevronLeft />
            </button>

            {/* Active Image Box */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-6 text-white">
                <p className="text-xs uppercase tracking-widest text-accent mb-1">
                  {filteredItems[lightboxIndex].category}
                </p>
                <h3 className="font-serif text-lg">{filteredItems[lightboxIndex].title}</h3>
              </div>
            </div>

            {/* Next Trigger */}
            <button
              onClick={showNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-accent p-3 text-3xl hidden md:block"
              title="Next"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
