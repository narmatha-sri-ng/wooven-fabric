import React from 'react';
import { aboutContent } from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { FiTarget, FiEye, FiHeart, FiCheckCircle, FiShield } from 'react-icons/fi';

export default function About() {
  const { mission, vision, philosophy, story, dyeingUnit, sizingUnit, weavingUnit, qualityAssurance } = aboutContent;

  return (
    <div className="py-16 bg-bg-base">
      {/* 1. Company Introduction Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">BARANI CLOTHINGS PRIVATE LIMITED</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">About Barani Clothings</h1>
        <div className="h-[1px] w-24 bg-accent mx-auto"></div>
      </div>

      {/* Company Introduction Content */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">COMPANY INTRODUCTION</span>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">Pioneering Force in Woven Fabrics Since 1992</h2>
          <p className="text-primary/80 leading-relaxed font-light text-base">
            {story}
          </p>
          <div className="border-l-4 border-accent pl-6 italic text-sm text-primary/70 my-2">
            "Engineered for precision, consistency, and international quality standards."
          </div>
          <p className="text-xs text-primary/60 leading-relaxed">
            Specialized in solid-dyed and yarn-dyed woven fabric solutions ranging from 40 GSM to 300 GSM for premium apparel manufacturing.
          </p>
        </div>
        <div className="lg:col-span-6 aspect-[4/3] overflow-hidden border border-border-theme">
          <img 
            src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop" 
            alt="Barani Clothings Manufacturing Facility" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* 2. Our Mission, 3. Our Vision, 4. Quality Commitment */}
      <section className="bg-bg-alt border-y border-border-theme py-20 mb-24 relative">
        <div className="bg-pattern absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={0} className="bg-bg-base p-8 border border-border-theme flex flex-col gap-4 shadow-sm">
            <FiTarget className="text-accent text-3xl" />
            <h3 className="text-xl font-serif font-bold text-primary">Our Mission</h3>
            <p className="text-sm text-primary/70 leading-relaxed font-light">{mission}</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.15} className="bg-bg-base p-8 border border-border-theme flex flex-col gap-4 shadow-sm">
            <FiEye className="text-accent text-3xl" />
            <h3 className="text-xl font-serif font-bold text-primary">Our Vision</h3>
            <p className="text-sm text-primary/70 leading-relaxed font-light">{vision}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="bg-bg-base p-8 border border-border-theme flex flex-col gap-4 shadow-sm">
            <FiHeart className="text-accent text-3xl" />
            <h3 className="text-xl font-serif font-bold text-primary">Quality Commitment</h3>
            <p className="text-sm text-primary/70 leading-relaxed font-light">{philosophy}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Infrastructure / Manufacturing: 6. Dyeing Unit, 7. Sizing Unit, 8. Weaving Unit */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">INFRASTRUCTURE / MANUFACTURING</span>
          <h2 className="text-3xl md:text-4xl font-serif">In-House Manufacturing Divisions</h2>
          <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1} className="bg-bg-alt border border-border-theme p-8 flex flex-col gap-4">
            <FiCheckCircle className="text-accent text-2xl" />
            <h3 className="font-serif text-xl font-bold text-primary">Dyeing Unit</h3>
            <p className="text-xs text-primary/70 leading-relaxed font-light">
              {dyeingUnit}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-bg-alt border border-border-theme p-8 flex flex-col gap-4">
            <FiCheckCircle className="text-accent text-2xl" />
            <h3 className="font-serif text-xl font-bold text-primary">Sizing Unit</h3>
            <p className="text-xs text-primary/70 leading-relaxed font-light">
              {sizingUnit}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="bg-bg-alt border border-border-theme p-8 flex flex-col gap-4">
            <FiCheckCircle className="text-accent text-2xl" />
            <h3 className="font-serif text-xl font-bold text-primary">Weaving Unit</h3>
            <p className="text-xs text-primary/70 leading-relaxed font-light">
              {weavingUnit}
            </p>
          </AnimatedSection>
        </div>

        {/* 9. Quality Assurance */}
        <AnimatedSection delay={0.4} className="bg-primary text-bg-base border border-accent/20 p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="w-12 h-12 border border-accent flex items-center justify-center text-accent text-2xl shrink-0">
              <FiShield />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent block">TESTING BENCHMARKS</span>
              <h3 className="font-serif text-2xl md:text-3xl text-bg-base font-bold">Quality Assurance</h3>
            </div>
          </div>
          <div className="h-[1px] w-full bg-accent/20 mb-6"></div>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light whitespace-pre-line">
            {qualityAssurance}
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
}


