import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks, contactInfo } from '../../data/siteData';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-bg-base/95 backdrop-blur-md py-4 border-border-theme shadow-sm'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between w-full">
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 select-none shrink-0"
          >
            <img
              src="/logo.png"
              alt="Barani Clothings Private Limited Logo"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain bg-white px-2 py-1 rounded"
            />
            <div className="flex flex-col text-primary font-serif">
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-widest leading-none">
                BARANI CLOTHINGS
              </span>
              <span className="text-[8px] tracking-[0.25em] uppercase text-accent font-sans font-medium mt-1">
                PRIVATE LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs xl:text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors relative py-2 ${
                    isActive ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-primary hover:text-accent transition-colors p-2"
              title="Call Us"
            >
              <FiPhone className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="bg-primary text-bg-base text-xs font-bold tracking-widest uppercase px-4 xl:px-6 py-3 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent p-2"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-bg-base z-30 pt-24 px-6 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-serif text-primary hover:text-accent tracking-widest uppercase border-b border-border-theme pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mb-12 flex flex-col gap-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center justify-center gap-3 border border-border-theme py-4 text-primary text-sm font-semibold uppercase tracking-widest"
              >
                <FiPhone /> Call Office
              </a>
              <Link
                to="/contact"
                className="bg-primary text-bg-base text-center text-sm font-bold tracking-widest uppercase py-4 border border-primary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
