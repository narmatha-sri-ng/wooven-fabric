import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactInfo, featuredCollections } from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { FiCalendar, FiDroplet, FiShield, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

export default function Appointment() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [submittedMessage, setSubmittedMessage] = useState(null);
  
  // Calculate today's date in YYYY-MM-DD format to disable previous dates
  const todayDate = new Date().toISOString().split('T')[0];

  const onSubmit = async (data) => {
    // Trim whitespace
    const cleanData = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      collection: data.collection,
      date: data.date,
      message: data.message.trim()
    };
    console.log('Booking Data:', cleanData);
    setSubmittedMessage(`Your fabric production enquiry has been submitted successfully.`);
    reset();
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">ENQUIRY & CONSULTATION</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Request Fabric Consultation</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form container */}
          <div className="lg:col-span-7 bg-bg-alt border border-border-theme p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-serif mb-6 text-primary">Fabric Production Enquiry</h2>
            
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
                  <label htmlFor="appointment-name" className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiUser className="text-accent" /> Your Name / Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="appointment-name"
                    type="text"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
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
                  {errors.name && <span id="name-error" className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="appointment-phone" className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiPhone className="text-accent" /> Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="appointment-phone"
                    type="tel"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    {...register("phone", { 
                      required: "Phone Number is required",
                      validate: (val) => val.trim().length > 0 || "Whitespace-only values are not allowed",
                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
                        message: "Please enter a valid phone number"
                      }
                    })}
                    className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full ${errors.phone ? 'border-red-500' : 'border-border-theme'}`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <span id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="appointment-email" className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiMail className="text-accent" /> Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="appointment-email"
                    type="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
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
                  {errors.email && <span id="email-error" className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>

                {/* Preferred Category */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="appointment-category" className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiCalendar className="text-accent" /> Fabric Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="appointment-category"
                    aria-invalid={errors.collection ? "true" : "false"}
                    aria-describedby={errors.collection ? "category-error" : undefined}
                    {...register("collection", { required: "Please select a fabric category" })}
                    className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full ${errors.collection ? 'border-red-500' : 'border-border-theme'}`}
                  >
                    <option value="">Select Fabric Category</option>
                    {featuredCollections.map((col) => (
                      <option key={col.id} value={col.title}>{col.title}</option>
                    ))}
                  </select>
                  {errors.collection && <span id="category-error" className="text-red-500 text-xs mt-1">{errors.collection.message}</span>}
                </div>
              </div>

              {/* Date with Past Dates Disabled */}
              <div className="flex flex-col gap-1">
                <label htmlFor="appointment-date" className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiCalendar className="text-accent" /> Preferred Enquiry Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="appointment-date"
                  type="date"
                  min={todayDate}
                  aria-invalid={errors.date ? "true" : "false"}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  {...register("date", { required: "Please select a valid future or current enquiry date" })}
                  className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full ${errors.date ? 'border-red-500' : 'border-border-theme'}`}
                />
                {errors.date && <span id="date-error" className="text-red-500 text-xs mt-1">{errors.date.message}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="appointment-message" className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiMessageSquare className="text-accent" /> Specifications & Order Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="appointment-message"
                  rows="4"
                  maxLength={1000}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message", { 
                    required: "Specifications & Order Details are required",
                    validate: (val) => val.trim().length > 0 || "Whitespace-only values are not allowed",
                    maxLength: {
                      value: 1000,
                      message: "Message cannot exceed 1000 characters"
                    }
                  })}
                  className={`bg-bg-base border p-3 text-sm focus:border-accent outline-none w-full resize-none ${errors.message ? 'border-red-500' : 'border-border-theme'}`}
                  placeholder="Specify fabric weave, required GSM (40 to 300 GSM), quantity in meters, or finishing instructions..."
                />
                {errors.message && <span id="message-error" className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-bg-base font-bold text-xs uppercase tracking-widest py-4 border border-primary hover:bg-accent hover:text-primary transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Fabric Enquiry"}
              </button>
            </form>
          </div>

          {/* Schedule Guideline Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Guide Info */}
            <div className="border border-border-theme p-8 bg-bg-alt flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-primary">Manufacturing & Consultation</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex gap-4">
                  <FiDroplet className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold font-serif text-sm">Sample Development</h4>
                    <p className="text-xs text-primary/70 mt-1">
                      Our in-house sample and beaker dyeing machines allow rapid, high-precision sample development and lab-dip matching.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <FiShield className="text-accent w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold font-serif text-sm">Quality Compliance</h4>
                    <p className="text-xs text-primary/70 mt-1">
                      Mandatory 4-point quality fabric inspection after weaving and finishing, tested at SITRA, SGS, and ITS.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="border border-border-theme p-8 bg-bg-alt flex flex-col gap-4">
              <h3 className="font-serif text-xl font-bold text-primary">Working Hours</h3>
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
      </div>
    </div>
  );
}

