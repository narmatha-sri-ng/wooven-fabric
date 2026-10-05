import React from 'react';
import { aboutContent } from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

export default function About() {
  const { mission, vision, philosophy, story, team, achievements } = aboutContent;

  return (
    <div className="py-16 bg-bg-base">
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">OUR HERITAGE</span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">About The Studio</h1>
        <div className="h-[1px] w-24 bg-accent mx-auto"></div>
      </div>

      {/* Story & Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">THE ATELIER BIOGRAPHY</span>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">Our Story & Design Essence</h2>
          <p className="text-primary/80 leading-relaxed font-light text-base">
            {story}
          </p>
          <div className="border-l-4 border-accent pl-6 italic text-sm text-primary/70 my-2">
            "We believe that fashion is not merely about dresses; it represents the silent dialogue between the garment and the individual."
          </div>
          <p className="text-xs text-primary/60 leading-relaxed">
            Every pattern draft begins with paper and ink, reflecting our devotion to slow fashion cycles and couture customization lines.
          </p>
        </div>
        <div className="lg:col-span-6 aspect-[4/3] overflow-hidden border border-border-theme">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
            alt="Atelier workspace" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>

      {/* Values Grid */}
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
            <h3 className="text-xl font-serif font-bold text-primary">Fashion Philosophy</h3>
            <p className="text-sm text-primary/70 leading-relaxed font-light">{philosophy}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">THE HANDS BEHIND CRAFT</span>
          <h2 className="text-3xl md:text-4xl font-serif">Meet Our Designers</h2>
          <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="group flex flex-col items-center text-center">
              <div className="w-full aspect-[3/4] overflow-hidden border border-border-theme mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-xs text-accent font-bold uppercase tracking-widest mt-1">{member.role}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Achievements / History Timeline */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">MILESTONES</span>
          <h2 className="text-3xl md:text-4xl font-serif">Studio Achievements</h2>
          <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="relative border-l-2 border-border-theme pl-8 ml-4 flex flex-col gap-12">
          {achievements.map((ach, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-bg-base border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="text-xs font-bold text-accent tracking-widest">{ach.year}</span>
              <h3 className="font-serif text-xl font-bold text-primary mt-1 mb-2">{ach.title}</h3>
              <p className="text-sm text-primary/70 leading-relaxed font-light">{ach.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
