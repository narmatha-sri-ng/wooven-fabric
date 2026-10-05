import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo, navigationLinks, featuredCollections } from '../../data/siteData';
import { FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our private mailing list.');
  };

  return (
    <footer className="bg-primary text-bg-base border-t border-accent/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex flex-col text-bg-base font-serif">
            <span className="text-2xl font-bold tracking-widest leading-none">STUDIO</span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-accent font-sans font-medium mt-1">
              HAUTE COUTURE
            </span>
          </Link>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Thoughtfully curated designs blending modern elements with heritage craftsmanship to celebrate your personal identity.
          </p>
          <div className="flex gap-4 mt-6">
            {contactInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition-colors text-lg"
                title={social.name}
              >
                {social.name === 'Instagram' && <FiInstagram />}
                {social.name !== 'Instagram' && <span className="text-xs uppercase font-bold tracking-wider">{social.name.substring(0, 2)}</span>}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h4 className="text-accent font-serif text-lg mb-6">Explore</h4>
          <ul className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-bg-base transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections Shortcut */}
        <div>
          <h4 className="text-accent font-serif text-lg mb-6">Collections</h4>
          <ul className="flex flex-col gap-3">
            {featuredCollections.slice(0, 4).map((col) => (
              <li key={col.id}>
                <Link
                  to={`/collections?cat=${col.title}`}
                  className="text-gray-400 hover:text-bg-base transition-colors text-sm"
                >
                  {col.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Hours */}
        <div className="flex flex-col gap-4 text-sm">
          <h4 className="text-accent font-serif text-lg mb-2">Private Studio</h4>
          <p className="flex items-start gap-3 text-gray-400">
            <FiMapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span>{contactInfo.address}</span>
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <FiPhone className="w-5 h-5 text-accent" />
            <a href={`tel:${contactInfo.phone}`} className="hover:text-bg-base transition-colors">
              {contactInfo.phone}
            </a>
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <FiMail className="w-5 h-5 text-accent" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-bg-base transition-colors">
              {contactInfo.email}
            </a>
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <label className="text-xs uppercase tracking-widest text-accent font-bold block mb-2">
              Join The Club
            </label>
            <div className="flex border-b border-gray-600 pb-1">
              <input
                type="email"
                required
                placeholder="Email address"
                className="bg-transparent border-none outline-none text-bg-base placeholder-gray-500 w-full text-sm py-1"
              />
              <button type="submit" className="text-accent hover:text-bg-base transition-colors px-2">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 Fashion Studio. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Premium Commercial Template</p>
      </div>
    </footer>
  );
};
