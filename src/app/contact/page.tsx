"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Clock, Heart, Send, CheckCircle, Hospital } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | Dr. Nisarga - Chief Cardiac Surgeon";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 40 4488 5000",
      description: "Call to schedule an appointment or inquiry",
      href: "tel:+914044885000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@drnisarga.com",
      description: "Send us an email and we'll respond promptly",
      href: "mailto:contact@drnisarga.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "KIMS Hospitals, Kondapur & Gachibowli",
      description: "Hyderabad, Telangana, India",
      href: "https://maps.google.com/?q=KIMS+Hospitals+Kondapur+Hyderabad",
    },
    {
      icon: Clock,
      label: "Clinic Hours",
      value: "Mon – Sat: 9:00 AM – 5:00 PM",
      description: "Sunday: Emergencies only",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* ==================== HERO BANNER ==================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b3b80] via-[#0f4a9e] to-[#1a5fc7] py-20 md:py-28">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-blue-200/80 mb-6">
                Get in Touch
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                We&apos;re Here
                <span className="block text-blue-200">to Help You</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="mt-4 max-w-xl mx-auto text-lg text-blue-100/90 leading-relaxed">
                Take the first step towards advanced cardiac care. Reach out to schedule a consultation
                or learn more about our services.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== CONTACT DETAILS ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left: Contact Info Cards */}
              <StaggerContainer className="lg:col-span-5 space-y-5" staggerDelay={0.08}>
                <AnimatedItem>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80] mb-2">Contact Information</h2>
                  <p className="text-gray-500 text-sm">
                    Reach out through any of the channels below
                  </p>
                </AnimatedItem>

                {contactDetails.map((detail, idx) => {
                  const IconComponent = detail.icon;
                  return (
                    <AnimatedItem key={idx}>
                      {detail.href ? (
                        <Link
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                        >
                          <div className="mt-0.5 shrink-0 rounded-lg bg-blue-100 p-2.5 text-[#0b3b80] group-hover:bg-[#0b3b80] group-hover:text-white transition-all duration-300">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{detail.label}</p>
                            <p className="text-sm md:text-base font-semibold text-gray-800 mt-0.5">{detail.value}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{detail.description}</p>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5">
                          <div className="mt-0.5 shrink-0 rounded-lg bg-blue-100 p-2.5 text-[#0b3b80]">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{detail.label}</p>
                            <p className="text-sm md:text-base font-semibold text-gray-800 mt-0.5">{detail.value}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{detail.description}</p>
                          </div>
                        </div>
                      )}
                    </AnimatedItem>
                  );
                })}

                <AnimatedItem>
                  <div className="bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7] rounded-xl p-6 text-white mt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="h-5 w-5 fill-white/80" />
                      <h3 className="font-bold text-lg">Emergency Care</h3>
                    </div>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      For cardiac emergencies, please visit the nearest emergency department or call the hospital directly. KIMS Hospitals provide 24/7 emergency cardiac services.
                    </p>
                  </div>
                </AnimatedItem>
              </StaggerContainer>

              {/* Right: Contact Form & Hospitals */}
              <AnimatedSection className="lg:col-span-7" direction="right" delay={0.15}>
                {/* Contact Form */}
                <div className="bg-[#f4f8fd] rounded-2xl border border-gray-100 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-[#0b3b80] mb-2">Send a Message</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-bold text-green-800">Message Sent Successfully!</h4>
                      <p className="text-sm text-gray-500 mt-2">
                        Thank you for reaching out. We will respond to your inquiry shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Your full name"
                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#0b3b80] focus:outline-none focus:ring-2 focus:ring-[#0b3b80]/10 transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="your@email.com"
                            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#0b3b80] focus:outline-none focus:ring-2 focus:ring-[#0b3b80]/10 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+91 98765 43210"
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#0b3b80] focus:outline-none focus:ring-2 focus:ring-[#0b3b80]/10 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="subject"
                          required
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-[#0b3b80] focus:outline-none focus:ring-2 focus:ring-[#0b3b80]/10 transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">Book an Appointment</option>
                          <option value="consultation">Second Opinion / Consultation</option>
                          <option value="inquiry">General Inquiry</option>
                          <option value="referral">Physician Referral</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          placeholder="Please describe your condition or inquiry..."
                          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#0b3b80] focus:outline-none focus:ring-2 focus:ring-[#0b3b80]/10 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#0b3b80] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-800 hover:-translate-y-0.5"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

                {/* Hospital Locations */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["KIMS Hospitals, Kondapur", "KIMS Hospitals, Gachibowli"].map((hospital, idx) => (
                    <ScaleIn key={idx} delay={idx * 0.08}>
                      <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                        <div className="rounded-full bg-blue-50 p-2.5 text-[#0b3b80] w-fit mb-3">
                          <Hospital className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-[#0b3b80] text-sm">{hospital}</h4>
                        <p className="text-xs text-gray-500 mt-1">Hyderabad, Telangana, India</p>
                        <Link
                          href={`https://maps.google.com/?q=${encodeURIComponent(hospital)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0b3b80] hover:text-blue-700 transition-colors"
                        >
                          <MapPin className="h-3 w-3" />
                          Get Directions
                        </Link>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-[#f4f8fd] border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                Ready to Begin Your Journey?
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Schedule a consultation with Dr. Nisarga and take the first step towards advanced cardiac care.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/#book"
                  className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:-translate-y-0.5"
                >
                  <Calendar className="h-5 w-5" />
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-lg border-2 border-[#0b3b80] px-6 py-3.5 text-base font-semibold text-[#0b3b80] transition-all hover:bg-blue-50/50 hover:-translate-y-0.5"
                >
                  Explore Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
