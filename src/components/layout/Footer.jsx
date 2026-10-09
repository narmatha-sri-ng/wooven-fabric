import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactInfo, navigationLinks, featuredCollections } from '../../data/siteData';
import { FiInstagram, FiMail, FiMapPin, FiPhone, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

export const Footer = () => {
  const [emailValue, setEmailValue] = useState('');
  const [error, setError] = useState('');
  const [statusMsg, setStatusMsg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter a valid email address.';
    }
    // Syntactically valid RFC 5322 email regex allowing numeric usernames (e.g. 4657678@gmail.com)
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmailValue(val);
    if (error) {
      const err = validateEmail(val);
      if (!err) setError('');
    }
  };

  const handleBlur = () => {
    if (emailValue) {
      setError(validateEmail(emailValue));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErr = validateEmail(emailValue);
    if (validationErr) {
      setError(validationErr);
      setStatusMsg(null);
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate submission delay and display honest status message (no backend/mailing service configured)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMsg({
        type: 'info',
        text: 'Syntax check passed. Online subscription service is unconfigured. Please email bcpl@baranifabrics.com for direct enquiries.'
      });
    }, 600);
  };

  return (
    <footer className="bg-primary text-bg-base border-t border-accent/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3 select-none">
            <img
              src="/logo.png"
              alt="Barani Clothings Private Limited Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
            <div className="flex flex-col text-bg-base font-serif">
              <span className="text-lg font-bold tracking-widest leading-none">BARANI CLOTHINGS</span>
              <span className="text-[8px] tracking-[0.25em] uppercase text-accent font-sans font-medium mt-1">
                PRIVATE LIMITED
              </span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Pioneering force in the textile industry since 1992. Dedicated to delivering high-quality woven fabric solutions with modernized in-house Dyeing, Sizing, and Weaving facilities.
          </p>
          {contactInfo.socials.length > 0 && (
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
          )}
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
          <h4 className="text-accent font-serif text-lg mb-6">Fabric Categories</h4>
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
          <h4 className="text-accent font-serif text-lg mb-2">Registered Office</h4>
          <p className="flex items-start gap-3 text-gray-400">
            <FiMapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <a href={contactInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-bg-base transition-colors">
              {contactInfo.address}
            </a>
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

          <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col gap-1">
            <label htmlFor="footer-email" className="text-xs uppercase tracking-widest text-accent font-bold block mb-1">
              ENQUIRY WITH US
            </label>
            <div className={`flex border-b pb-1 transition-colors ${error ? 'border-red-500' : 'border-gray-600 focus-within:border-accent'}`}>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                value={emailValue}
                onChange={handleEmailChange}
                onBlur={handleBlur}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'footer-email-error' : undefined}
                placeholder="Business email address"
                className="bg-transparent border-none outline-none text-bg-base placeholder-gray-500 w-full text-sm py-1"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="text-accent hover:text-bg-base transition-colors px-2 font-bold text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {error && (
              <span id="footer-email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <FiAlertCircle className="shrink-0" /> {error}
              </span>
            )}
            {statusMsg && (
              <div className="mt-2 text-xs p-2 bg-gray-900 border border-gray-700 text-gray-300 rounded leading-relaxed">
                {statusMsg.text}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Barani Clothings Private Limited. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Woven Fabric Manufacturing Leader</p>
      </div>
    </footer>
  );
};
