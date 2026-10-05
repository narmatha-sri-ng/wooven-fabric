import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowRight, FiCheck, FiCalendar, FiUser, FiPhone, FiMail, 
  FiMessageSquare, FiStar, FiInstagram, FiExternalLink 
} from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { 
  heroSlides, featuredCollections, newArrivals, whyChooseUs, 
  trendingEditorial, fashionProcessSteps, statisticsData, 
  testimonialsList, galleryItems, contactInfo 
} from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { ProductCard } from '../../components/cards/ProductCard';

// Animated Counter Component
const Counter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    // calculate increment time
    const totalMiliseconds = duration * 1000;
    const increment = Math.ceil(end / (totalMiliseconds / 16)); // ~60fps
    
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Consultation Form Setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onFormSubmit = (data) => {
    console.log('Consultation Data:', data);
    alert(`Thank you, ${data.name}! Your consultation request for ${data.collection} has been received.`);
    reset();
  };

  // State for Modal/Quick View
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="overflow-hidden">
      
      {/* SECTION 1: Luxury Hero */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden bg-primary text-bg-base">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {heroSlides.map((slide, idx) => (
              <SwiperSlide key={idx} className="relative h-full w-full">
                {/* Image overlay to darken slightly */}
                <div className="absolute inset-0 bg-primary/40 z-10" />
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-7xl mx-auto px-6 w-full pt-16">
                    <div className="max-w-2xl">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent block mb-4">
                        {slide.tagline}
                      </span>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm md:text-lg text-gray-300 mb-8 font-light leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          to="/collections" 
                          className="bg-accent text-primary px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-bg-base hover:text-primary transition-all duration-300"
                        >
                          Explore Collection
                        </Link>
                        <a 
                          href="#consultation" 
                          className="border border-bg-base text-bg-base px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-bg-base hover:text-primary transition-all duration-300"
                        >
                          Book Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Decorative Floating Fashion elements */}
        <div className="absolute bottom-10 left-10 z-20 hidden md:block">
          <div className="text-[10px] tracking-[0.4em] uppercase text-accent/60 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-accent/40 block"></span>
            SLOW LUXURY ATELIER
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Collections */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">Our Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Featured Collections</h2>
            <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((col, idx) => (
              <AnimatedSection key={col.id} delay={idx * 0.1} className="group relative overflow-hidden aspect-[4/5] bg-bg-alt border border-border-theme">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-8 text-bg-base">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                    {col.tag}
                  </span>
                  <h3 className="text-2xl font-serif mb-2">{col.title}</h3>
                  <p className="text-xs text-gray-300 font-light mb-4 line-clamp-2">{col.desc}</p>
                  <Link 
                    to={`/collections?cat=${col.title}`} 
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-bg-base transition-colors"
                  >
                    View Collection <FiArrowRight />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: About Brand */}
      <section className="py-24 bg-bg-alt border-y border-border-theme relative">
        <div className="bg-pattern absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 overflow-hidden aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] border border-border-theme">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" 
              alt="Brand Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">THE ATELIER STORY</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Crafting Unique Fashion Experiences
            </h2>
            <p className="text-lg text-primary/80 leading-relaxed font-light">
              Blending modern trends with timeless elegance through thoughtfully curated collections. We focus on bespoke silhouettes designed to elevate the individuality of each client.
            </p>
            <div className="h-[1.5px] w-20 bg-accent my-2"></div>
            <p className="text-sm text-primary/60 leading-relaxed">
              Every detail is meticulously planned at our design studio, sourcing global textiles of unmatched grade and weaving them into contemporary narratives.
            </p>
            <div className="pt-4">
              <Link 
                to="/about" 
                className="bg-primary text-bg-base px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: New Arrivals */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">Fresh Off Runway</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif">New Arrivals</h2>
            </div>
            <Link 
              to="/collections" 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors border-b border-accent pb-1 mt-4 md:mt-0"
            >
              See All Products <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Choose Us */}
      <section className="py-24 bg-primary text-bg-base border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">WHY CUSTOM WEAR</span>
            <h2 className="text-3xl md:text-4xl font-serif">The Atelier Promise</h2>
            <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUs.map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="flex flex-col gap-4 border border-accent/10 p-8 hover:border-accent/50 transition-colors bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 border border-accent flex items-center justify-center text-accent font-serif text-lg">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-serif text-accent mt-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Trending Collections - Editorial Style */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text details */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:pr-12">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">{trendingEditorial.subtitle}</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">{trendingEditorial.title}</h2>
              <p className="text-primary/70 font-light leading-relaxed">{trendingEditorial.desc}</p>
              <div className="bg-bg-alt border-l-2 border-accent p-6 my-2 italic text-sm text-primary/80">
                "{trendingEditorial.quote}"
              </div>
              <div>
                <Link 
                  to="/lookbook" 
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border border-primary px-8 py-4 hover:bg-primary hover:text-bg-base transition-all"
                >
                  Explore Lookbook <FiArrowRight />
                </Link>
              </div>
            </div>
            {/* Visual stack */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] overflow-hidden border border-border-theme mt-12">
                <img src={trendingEditorial.imageLeft} alt="Trending Look A" className="w-full h-full object-cover object-center" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-border-theme">
                <img src={trendingEditorial.imageRight} alt="Trending Look B" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Fashion Process */}
      <section className="py-24 bg-bg-alt border-y border-border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">HOW WE WORK</span>
            <h2 className="text-3xl md:text-4xl font-serif">The Crafting Journey</h2>
            <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {fashionProcessSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="relative flex flex-col gap-4 bg-bg-base p-8 border border-border-theme shadow-sm">
                <div className="text-4xl font-serif text-accent/30 font-bold leading-none">{step.step}</div>
                <h3 className="text-lg font-serif font-bold text-primary mt-2">{step.title}</h3>
                <p className="text-xs text-primary/60 leading-relaxed font-light">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Statistics */}
      <section className="py-20 bg-primary text-bg-base border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {statisticsData.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-serif font-bold text-accent">
                  <Counter value={stat.count} />{stat.suffix}
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Testimonials */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">REVIEWS</span>
            <h2 className="text-3xl md:text-4xl font-serif">Client Reflections</h2>
            <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {testimonialsList.map((test) => (
              <SwiperSlide key={test.id}>
                <div className="bg-bg-alt border border-border-theme p-8 h-full flex flex-col justify-between gap-6 shadow-sm">
                  <div>
                    <div className="flex gap-1 mb-4 text-accent">
                      {[...Array(test.rating)].map((_, i) => (
                        <FiStar key={i} className="fill-current w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-primary/80 font-light italic text-sm leading-relaxed mb-6">
                      "{test.comment}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border-theme">
                    <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-primary">{test.name}</h4>
                      <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{test.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SECTION 10: Instagram Inspired Gallery */}
      <section className="py-24 bg-bg-alt border-y border-border-theme">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">SOCIAL STREAM</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif">Aesthetic Showcase</h2>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors mt-4 md:mt-0"
            >
              Follow @StudioHauteCouture <FiInstagram />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.slice(0, 4).map((item, idx) => (
              <div key={item.id} className="relative group aspect-square overflow-hidden border border-border-theme">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FiInstagram className="text-bg-base text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Book Consultation */}
      <section id="consultation" className="py-24 bg-bg-base">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">PRIVATE RESERVATIONS</span>
            <h2 className="text-3xl md:text-4xl font-serif">Book a Consultation</h2>
            <p className="text-sm text-primary/60 max-w-md mx-auto mt-4">
              Schedule a private session with our styling consultants to sketch, drape, and realize your custom garment.
            </p>
          </div>

          <form onSubmit={handleSubmit(onFormSubmit)} className="bg-bg-alt border border-border-theme p-8 md:p-12 shadow-md flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiUser className="text-accent" /> Full Name
                </label>
                <input 
                  type="text" 
                  {...register("name", { required: "Name is required" })}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                  placeholder="Enter name"
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiPhone className="text-accent" /> Phone Number
                </label>
                <input 
                  type="tel" 
                  {...register("phone", { required: "Phone is required" })}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                  placeholder="Enter phone"
                />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiMail className="text-accent" /> Email Address
                </label>
                <input 
                  type="email" 
                  {...register("email", { required: "Email is required" })}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                  placeholder="Enter email"
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              {/* Preferred Collection */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiCalendar className="text-accent" /> Preferred Collection
                </label>
                <select 
                  {...register("collection")}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                >
                  <option value="Bridal Collection">Bridal Collection</option>
                  <option value="Festive Wear">Festive Wear</option>
                  <option value="Designer Sarees">Designer Sarees</option>
                  <option value="Casual Wear">Casual Wear</option>
                  <option value="Kids Collection">Kids Collection</option>
                  <option value="Exclusive Arrivals">Exclusive Arrivals</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                <FiCalendar className="text-accent" /> Consultation Date
              </label>
              <input 
                type="date" 
                {...register("date", { required: "Preferred date is required" })}
                className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
              />
              {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                <FiMessageSquare className="text-accent" /> Design Notes & Custom requests
              </label>
              <textarea 
                rows="4"
                {...register("message")}
                className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full resize-none"
                placeholder="Share fabric choices, event details, or styling goals..."
              />
            </div>

            <button 
              type="submit"
              className="bg-primary text-bg-base font-bold text-xs uppercase tracking-widest py-4 border border-primary hover:bg-accent hover:text-primary transition-all mt-4"
            >
              Submit Consultation Reservation
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 12: Call To Action */}
      <section className="py-24 bg-primary text-bg-base border-t border-accent/20 text-center relative overflow-hidden">
        <div className="bg-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">TAILORED AESTHETIC</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">Discover Your Signature Style</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed font-light mb-4">
            Step into one-on-one custom draping sessions and construct a wardrobe that reflects you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/collections" 
              className="bg-accent text-primary px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-bg-base hover:text-primary transition-all duration-300"
            >
              Explore Collection
            </Link>
            <a 
              href="#consultation" 
              className="border border-bg-base text-bg-base px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-bg-base hover:text-primary transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Quick View Dialog / Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-bg-base border border-border-theme max-w-xl w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-4 right-4 text-primary hover:text-accent font-bold text-lg"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="aspect-[3/4] overflow-hidden border border-border-theme">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{selectedProduct.category}</span>
                  <h3 className="font-serif text-2xl text-primary mt-2 leading-tight">{selectedProduct.title}</h3>
                  <p className="text-xl font-bold mt-4 text-accent">{selectedProduct.price}</p>
                  <p className="text-xs text-primary/60 mt-4 leading-relaxed font-light">
                    Every piece is crafted by our master tailors with finest textiles, finished meticulously to drape beautifully on your silhouette.
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6">
                  <Link 
                    to="/appointment" 
                    className="bg-primary text-bg-base text-center text-xs font-bold uppercase tracking-widest py-3 hover:bg-accent hover:text-primary transition-colors"
                  >
                    Custom Fit Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
