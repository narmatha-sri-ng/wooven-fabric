import React from 'react';
import { lookbookLooks } from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';

export default function Lookbook() {
  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">EDITORIAL</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">Seasonal Lookbook</h1>
          <div className="h-[1px] w-24 bg-accent mx-auto"></div>
          <p className="text-sm text-primary/60 max-w-md mx-auto mt-6 font-light">
            A visual curation of our signature silhouettes, demonstrating our stylistic evolution across the seasons.
          </p>
        </div>

        {/* Alternate Rows */}
        <div className="flex flex-col gap-28">
          {lookbookLooks.map((look, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual */}
                <AnimatedSection 
                  animation={isEven ? 'slideRight' : 'slideLeft'} 
                  className="w-full lg:w-1/2 aspect-[3/4] overflow-hidden border border-border-theme"
                >
                  <img 
                    src={look.image} 
                    alt={look.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105" 
                  />
                </AnimatedSection>

                {/* Text Content */}
                <AnimatedSection 
                  animation={isEven ? 'slideLeft' : 'slideRight'} 
                  className="w-full lg:w-1/2 flex flex-col gap-6 lg:px-8"
                >
                  <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                    {look.season}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl italic text-accent/60">{look.subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold">{look.title}</h2>
                  </div>
                  <p className="text-primary/70 font-light leading-relaxed text-base">
                    {look.desc}
                  </p>
                  <div className="h-[1px] w-16 bg-accent mt-2"></div>
                  <p className="text-xs text-primary/40 uppercase tracking-widest font-semibold">
                    Studio Atelier Exclusive Design
                  </p>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
