import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { newArrivals, featuredCollections } from '../../data/siteData';
import { ProductCard } from '../../components/cards/ProductCard';
import { FiSearch, FiSliders } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'All';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on category and search query
  const filteredProducts = newArrivals.filter((prod) => {
    const matchesCategory = activeCategory === 'All' || prod.category === activeCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
            CATALOG
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Collections</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-border-theme">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <button
              onClick={() => handleCategorySelect('All')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${
                activeCategory === 'All'
                  ? 'bg-primary text-bg-base border-primary'
                  : 'bg-transparent text-primary border-border-theme hover:border-accent'
              }`}
            >
              All
            </button>
            {featuredCollections.map((col) => (
              <button
                key={col.id}
                onClick={() => handleCategorySelect(col.title)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${
                  activeCategory === col.title
                    ? 'bg-primary text-bg-base border-primary'
                    : 'bg-transparent text-primary border-border-theme hover:border-accent'
              }`}
              >
                {col.title}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments..."
              className="w-full bg-bg-alt border border-border-theme pl-10 pr-4 py-2 text-xs uppercase tracking-widest outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border-theme">
            <p className="text-sm text-primary/60 uppercase tracking-widest">
              No creations found matching the criteria.
            </p>
          </div>
        )}
      </div>

      {/* Detailed Collection View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="bg-bg-base border border-border-theme max-w-2xl w-full p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-primary hover:text-accent font-bold text-lg"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="aspect-[3/4] overflow-hidden border border-border-theme">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-2xl text-primary mt-2 leading-tight">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-xl font-bold mt-4 text-accent">{selectedProduct.price}</p>
                    <p className="text-xs text-primary/60 mt-4 leading-relaxed font-light">
                      This signature garment represents slow fashion couture. Finished meticulously by our master artisans with highest-quality natural fabrics and exquisite detailing.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-6">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        // programmatically scroll or direct to appt
                        window.location.href = '#/appointment';
                      }}
                      className="bg-primary text-bg-base text-center text-xs font-bold uppercase tracking-widest py-3 hover:bg-accent hover:text-primary transition-colors"
                    >
                      Bespoke Fitting Reservation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
