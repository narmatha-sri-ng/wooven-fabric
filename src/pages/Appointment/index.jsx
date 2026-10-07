import React from 'react';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../../data/siteData';
import { AnimatedSection } from '../../components/common/AnimatedSection';
import { FiCalendar, FiClock, FiShield, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

export default function Appointment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log('Booking Data:', data);
    alert(`Thank you, ${data.name}! Your fabric inquiry for ${data.collection} has been received.`);
    reset();
  };

  return (
    <div className="py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">INQUIRY & CONSULTATION</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Request Fabric Consultation</h1>
          <div className="h-[1px] w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form container */}
          <div className="lg:col-span-7 bg-bg-alt border border-border-theme p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-serif mb-6 text-primary">Fabric Production Query</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiUser className="text-accent" /> Full Name / Company Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                    placeholder="Enter full name"
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
                    placeholder="+91 9042712569"
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
                    placeholder="bcpl@baranifabrics.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>

                {/* Preferred Category */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                    <FiCalendar className="text-accent" /> Fabric Category
                  </label>
                  <select
                    {...register("collection")}
                    className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full"
                  >
                    <option value="Cotton (BCI & Organic)">Cotton (BCI & Organic)</option>
                    <option value="Viscose / Rayon / Modal / Lyocell">Viscose / Rayon / Modal / Lyocell</option>
                    <option value="Melanges & Slubs">Melanges & Slubs</option>
                    <option value="Cotton / Flax Yarn-Dyed Fabrics">Cotton / Flax Yarn-Dyed Fabrics</option>
                    <option value="Printed & Crinkle Fabrics">Printed & Crinkle Fabrics</option>
                    <option value="Dobby & Speciality Weaves">Dobby & Speciality Weaves</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <FiCalendar className="text-accent" /> Preferred Inquiry Date
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
                  <FiMessageSquare className="text-accent" /> Specifications & Order Details
                </label>
                <textarea
                  rows="4"
                  {...register("message")}
                  className="bg-bg-base border border-border-theme p-3 text-sm focus:border-accent outline-none w-full resize-none"
                  placeholder="Specify fabric weave, required GSM (40 to 300 GSM), quantity in meters, or finishing instructions..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-bg-base font-bold text-xs uppercase tracking-widest py-4 border border-primary hover:bg-accent hover:text-primary transition-all mt-4"
              >
                Submit Specification Inquiry
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
                  <FiClock className="text-accent w-5 h-5 shrink-0 mt-0.5" />
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

