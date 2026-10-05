import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { siteThemes, navigationLinks, contactInfo } from '../../data/siteData';
import { FiMenu, FiX, FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemePanel, setShowThemePanel] = useState(false);
  const { theme, setTheme, customColors, updateCustomColor } = useTheme();
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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Area */}
          <Link
            to="/"
            className="flex flex-col text-primary font-serif select-none"
          >
            <span className="text-xl md:text-2xl font-bold tracking-widest leading-none">
              STUDIO
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-accent font-sans font-medium mt-1">
              HAUTE COUTURE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors relative py-2 ${
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
          <div className="hidden lg:flex items-center gap-6">
            {/* Theme Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowThemePanel(!showThemePanel)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-border-theme px-4 py-2 hover:border-accent transition-all bg-bg-base"
                title="Change Theme"
              >
                <FiGrid className="w-4 h-4 text-accent" /> Customizer
              </button>

              <AnimatePresence>
                {showThemePanel && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-72 bg-bg-base border border-border-theme shadow-xl p-5 z-50 max-h-[85vh] overflow-y-auto"
                  >
                    <div className="mb-6">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">
                        Preset Themes
                      </p>
                      <div className="flex flex-col gap-2">
                        {siteThemes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => {
                              setTheme(t.id);
                            }}
                            className={`flex items-center justify-between p-2 hover:bg-bg-alt transition-colors w-full border ${
                              theme === t.id ? 'border-accent' : 'border-transparent'
                            }`}
                          >
                            <div className="text-left">
                              <p className="text-xs font-bold text-primary">{t.name}</p>
                              <p className="text-[9px] text-accent">{t.desc}</p>
                            </div>
                            <div className="flex gap-1">
                              {t.colors.map((c, i) => (
                                <span
                                  key={i}
                                  className="w-3 h-3 rounded-full border border-gray-400"
                                  style={{ backgroundColor: c }}
                                />
                              ))}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border-theme pt-4">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">
                        Custom Palette Colors
                      </p>
                      <div className="flex flex-col gap-3">
                        {/* Primary */}
                        <div className="flex items-center justify-between">
                          <label className="text-xs text-primary/80 font-medium">Primary (Text/Logo)</label>
                          <input
                            type="color"
                            value={customColors.primary}
                            onChange={(e) => updateCustomColor('primary', e.target.value)}
                            className="w-8 h-8 rounded cursor-pointer border border-border-theme"
                          />
                        </div>
                        {/* Accent */}
                        <div className="flex items-center justify-between">
                          <label className="text-xs text-primary/80 font-medium">Accent (Details/Buttons)</label>
                          <input
                            type="color"
                            value={customColors.accent}
                            onChange={(e) => updateCustomColor('accent', e.target.value)}
                            className="w-8 h-8 rounded cursor-pointer border border-border-theme"
                          />
                        </div>
                        {/* Background Base */}
                        <div className="flex items-center justify-between">
                          <label className="text-xs text-primary/80 font-medium">Background Base</label>
                          <input
                            type="color"
                            value={customColors.bgBase}
                            onChange={(e) => updateCustomColor('bgBase', e.target.value)}
                            className="w-8 h-8 rounded cursor-pointer border border-border-theme"
                          />
                        </div>
                        {/* Background Alt */}
                        <div className="flex items-center justify-between">
                          <label className="text-xs text-primary/80 font-medium">Background Alternate</label>
                          <input
                            type="color"
                            value={customColors.bgAlt}
                            onChange={(e) => updateCustomColor('bgAlt', e.target.value)}
                            className="w-8 h-8 rounded cursor-pointer border border-border-theme"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => setTheme(theme)}
                        className="w-full text-center text-[10px] font-bold tracking-widest uppercase border border-border-theme py-2 hover:bg-bg-alt mt-4 transition-colors text-primary"
                      >
                        Reset to Defaults
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={`tel:${contactInfo.phone}`}
              className="text-primary hover:text-accent transition-colors p-2"
              title="Call Concierge"
            >
              <FiPhone className="w-4 h-4" />
            </a>

            <Link
              to="/appointment"
              className="bg-primary text-bg-base text-xs font-bold tracking-widest uppercase px-6 py-3 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Quick theme cycle button for mobile */}
            <button
              onClick={() => {
                const currentIndex = siteThemes.findIndex((t) => t.id === theme);
                const nextIndex = (currentIndex + 1) % siteThemes.length;
                setTheme(siteThemes[nextIndex].id);
              }}
              className="p-2 border border-border-theme bg-bg-base"
              title="Cycle Theme"
            >
              <FiGrid className="w-4 h-4 text-accent" />
            </button>

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
                <FiPhone /> Call Boutique
              </a>
              <Link
                to="/appointment"
                className="bg-primary text-bg-base text-center text-sm font-bold tracking-widest uppercase py-4 border border-primary"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
