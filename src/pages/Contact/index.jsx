import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../../data/siteData';
import { FiMail, FiMapPin, FiPhone, FiSend, FiClock, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const onSubmit = async (data) => {
    const cleanData = {
      name: data.name.trim(),
      email: data.email.trim(),
      subject: data.subject.trim(),
      message: data.message.trim()
    };
    console.log('Contact Message:', cleanData);
    setSubmittedMessage('Your message has been submitted successfully.');
    reset();
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Contact Barani Clothings</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Contact Details Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="text-2xl font-serif text-primary">Registered Office</h2>
            <p className="text-sm text-primary/70 leading-relaxed font-light">
              Connect with our management team for fabric enquiries, bulk manufacturing, yarn-dyed requirements, or custom dobby fabric developments.
            </p>

            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Office Address</h4>
                  <a href={contactInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="text-primary/70 hover:text-accent transition-colors block mt-1 leading-relaxed">
                    {contactInfo.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Phone Number</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-primary/70 hover:text-accent transition-colors block mt-1">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMail className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Email Address</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary/70 hover:text-accent transition-colors block mt-1">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiClock className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Working Hours</h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs text-primary/70">
                    {contactInfo.businessHours.map((h, i) => (
                      <p key={i}>
                        <span className="font-bold">{h.days}:</span> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-8 bg-bg-alt border border-border-theme p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-serif mb-6 text-primary">Send a Message</h2>
            
            {submittedMessage && (
              <div className="mb-6 p-5 bg-accent/10 border border-accent text-primary text-sm flex items-center justify-between gap-4 rounded shadow-sm">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-accent text-2xl shrink-0" />
                  <span className="font-medium">{submittedMessage}</span>
                </div>
                <button 
                  onClick={() => setSubmittedMessage(null)}
                  className="text-xs uppercase tracking-widest font-bold text-accent hover:underline shrink-0"
                >
                  Dismiss
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-primary font-bold">Your Name / Company Name <span className="text-red-500">*</span></label>
                  <input
                    id="contact-name"
                    type="text"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    {...register("name", { 
                      required: "Your Name / Company Name is required",
                      validate: (val) => val.trim().length > 0 || "Whitespace-only values are not allowed",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters long"
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9\s.,&'-]+$/,
                        message: "Please enter a valid name or company name"
                      }
                    })}
                    className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full ${errors.name ? 'border-red-500' : 'border-border-theme'}`}
                    placeholder="Enter full name"
                  />
                  {errors.name && <span id="contact-name-error" className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-primary font-bold">Email Address <span className="text-red-500">*</span></label>
                  <input
                    id="contact-email"
                    type="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    {...register("email", { 
                      required: "Email Address is required",
                      validate: (val) => val.trim().length > 0 || "Whitespace-only values are not allowed",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address"
                      }
                    })}
                    className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full ${errors.email ? 'border-red-500' : 'border-border-theme'}`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <span id="contact-email-error" className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-subject" className="text-xs uppercase tracking-widest text-primary font-bold">Subject <span className="text-red-500">*</span></label>
                <input
                  id="contact-subject"
                  type="text"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  {...register("subject", { 
                    required: "Subject is required",
                    validate: (val) => val.trim().length > 0 || "Whitespace-only values are not allowed"
                  })}
                  className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full ${errors.subject ? 'border-red-500' : 'border-border-theme'}`}
                  placeholder="Fabric Enquiry / Bulk Order / Custom Development"
                />
                {errors.subject && <span id="contact-subject-error" className="text-red-500 text-xs mt-1">{errors.subject.message}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-primary font-bold">Specifications & Order Details <span className="text-red-500">*</span></label>
                <textarea
                  id="contact-message"
                  rows="5"
                  maxLength={1000}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  {...register("message", { 
                    required: "Specifications & Order Details are required",
                    validate: (val) => val.trim().length > 0 || "Whitespace-only values are not allowed",
                    maxLength: {
                      value: 1000,
                      message: "Message cannot exceed 1000 characters"
                    }
                  })}
                  className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full resize-none ${errors.message ? 'border-red-500' : 'border-border-theme'}`}
                  placeholder="Specify fabric type, required GSM (40-300 GSM), quantity, or timeline..."
                />
                {errors.message && <span id="contact-message-error" className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-bg-base font-bold text-xs uppercase tracking-widest py-4 border border-primary hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-border-theme bg-bg-alt flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-pattern absolute inset-0 opacity-10"></div>
          <div className="relative z-10 max-w-lg">
            <FiMapPin className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-primary font-bold">Facility Location</h3>
            <p className="text-xs text-primary/70 uppercase tracking-widest mt-2 leading-relaxed">
              Perundurai & Vijayamangalam, Erode, Tamil&nbsp;Nadu – 638053
            </p>
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors border-b border-accent pb-1 mt-6"
            >
              Open Google Maps Location <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

