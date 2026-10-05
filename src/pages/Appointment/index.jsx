import React from 'react';
import { useForm } from 'react-hook-form';
import { faqItems, contactInfo } from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { FiCalendar, FiClock, FiShield, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

export default function Appointment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log('Booking Data:', data);
    alert(`Thank you, ${data.name}! Your consultation request for ${data.date} is successfully requested.`);
    reset();
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">RESERVATIONS</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Book A Consultation</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form container */}
          <div className="lg:col-span-7 bg-bg-alt border border-border-theme p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-serif mb-6 text-primary">Request Private Fitting</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
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
                    placeholder="Alexandra Smith"
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
                    placeholder="+1 (555) 123-4567"
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
                    placeholder="alex@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>

                {/* Preferred Category */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiCalendar className="text-accent" /> Desired Category
                  </label>
                  <select
                    {...register("collection")}
                    className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                  >
                    <option value="Bridal Wear">Bridal Wear</option>
                    <option value="Festive Wear">Festive Wear</option>
                    <option value="Designer Saree">Designer Saree</option>
                    <option value="Casual Luxe">Casual Luxe</option>
                    <option value="Exclusive Micro-run">Exclusive Micro-run</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiCalendar className="text-accent" /> Date Preference
                </label>
                <input
                  type="date"
                  {...register("date", { required: "Date selection is required" })}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                />
                {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiMessageSquare className="text-accent" /> Specifications & Styling Details
                </label>
                <textarea
                  rows="4"
                  {...register("message")}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full resize-none"
                  placeholder="Share details about fabrics, drapes, heights, or event deadlines..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-bg-base font-bold text-xs uppercase tracking-widest py-4 border border-primary hover:bg-accent hover:text-primary transition-all mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Schedule Guideline / FAQ Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Guide Info */}
            <div className="border border-border-theme p-8 bg-bg-alt flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-primary">Consultation Guide</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex gap-4">
                  <FiClock className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold font-serif text-sm">Bespoke Fit Experience</h4>
                    <p className="text-xs text-primary/70 mt-1">
                      Each fitting requires roughly 45 to 60 minutes of measurement drafting and fabric swatch reviews.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FiShield className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold font-serif text-sm">Strict Discretion</h4>
                    <p className="text-xs text-primary/70 mt-1">
                      Private sessions are strictly scheduled, ensuring zero crowding or overlapping appointments in our showroom.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="border border-border-theme p-8 bg-bg-alt flex flex-col gap-4">
              <h3 className="font-serif text-xl font-bold text-primary">Business Hours</h3>
              <div className="flex flex-col gap-2">
                {contactInfo.businessHours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs py-2 border-b border-border-theme last:border-none">
                    <span className="font-bold uppercase tracking-wider text-primary/70">{h.days}</span>
                    <span className="text-accent font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-serif">Frequently Asked Questions</h2>
            <div className="h-[1px] w-20 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {faqItems.map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05} className="border border-border-theme p-6 bg-bg-alt">
                <h3 className="font-serif text-lg font-bold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
