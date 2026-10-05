import React from 'react';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../../data/siteData';
import { FiMail, FiMapPin, FiPhone, FiSend, FiClock } from 'react-icons/fi';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Message:', data);
    alert(`Thank you, ${data.name}! Your message was successfully sent.`);
    reset();
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Contact The Studio</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Contact Details Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="text-2xl font-serif text-primary">Private Atelier</h2>
            <p className="text-sm text-primary/70 leading-relaxed font-light">
              Connect with our concierge team to query ongoing orders, schedule private viewings, or learn about collections.
            </p>

            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Location</h4>
                  <p className="text-primary/70 mt-1">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-primary/70 hover:text-accent transition-colors block mt-1">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMail className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-primary/70 hover:text-accent transition-colors block mt-1">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiClock className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-primary">Business Hours</h4>
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
            <h2 className="text-2xl font-serif mb-6 text-primary">Send A Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold">Your Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                    placeholder="Enter name"
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                    placeholder="Enter email"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">Subject</label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                  placeholder="How can we help you?"
                />
                {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">Message</label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message content is required" })}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full resize-none"
                  placeholder="Write message here..."
                />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="bg-primary text-bg-base font-bold text-xs uppercase tracking-widest py-4 border border-primary hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2 mt-4"
              >
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-border-theme bg-bg-alt flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-pattern absolute inset-0 opacity-10"></div>
          <div className="relative z-10 max-w-md">
            <FiMapPin className="text-accent text-4xl mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-primary font-bold">Showroom Directions</h3>
            <p className="text-xs text-primary/70 uppercase tracking-widest mt-2">
              402 Designer Avenue, Fashion District, New York
            </p>
            <p className="text-xs text-primary/50 mt-4 leading-relaxed max-w-sm mx-auto">
              Convenient private parking is available at the rear entrance of the atelier courtyard.
            </p>
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors border-b border-accent pb-1 mt-6"
            >
              Get Directions on Map ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
