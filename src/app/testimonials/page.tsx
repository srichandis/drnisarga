"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Quote,
  Star,
  Heart,
  ExternalLink,
  Play,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";
import type { Testimonial } from "@/data/testimonials";
import { platformConfig } from "@/data/testimonials";

// Patient stories based on testimonials shared on KIMS Hospitals social media channels
const patientStories = [
  {
    quote: "Dr. Nisarga performed my complex heart valve replacement surgery. His expertise and compassion made all the difference in my recovery.",
    author: "Mrs. Meena",
    age: "25",
    condition: "Complex Heart Valve Replacement",
    rating: 5,
  },
  {
    quote: "I underwent a successful coronary bypass at the age of 72 under Dr. Nisarga's care. The entire team was exceptional.",
    author: "Patient",
    age: "72",
    condition: "Coronary Artery Bypass Grafting",
    rating: 5,
  },
  {
    quote: "My 15-year-old child received outstanding care for a mediastinal teratoma. Dr. Nisarga and his team were professional and reassuring throughout.",
    author: "Parent of Patient",
    condition: "Mediastinal Teratoma Surgery",
    rating: 5,
  },
  {
    quote: "After my critically ill family member underwent a high-risk procedure under Dr. Nisarga, we witnessed a remarkable recovery. Grateful beyond words.",
    author: "Family Member",
    condition: "Complex Cardiac Procedure",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Testimonials | Dr. Nisarga - Chief Cardiac Surgeon";
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/testimonials");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

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
                Patient Stories
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                What Our
                <span className="block text-blue-200">Patients Say</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100/90 leading-relaxed">
                Hear from patients whose lives have been transformed through advanced cardiac care
                at KIMS Hospitals under the expert care of Dr. Nisarga.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== STATS STRIP ==================== */}
        <section className="bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: "6,000+", label: "Surgeries Performed" },
                { stat: "17+", label: "Years of Experience" },
                { stat: "300+", label: "Charitable Surgeries" },
                { stat: "99%", label: "Patient Satisfaction" },
              ].map((item, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-[#0b3b80]">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-xs md:text-sm font-medium text-gray-600">
                      {item.label}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PATIENT QUOTES ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Quote className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                  Patient Stories
                </h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Stories inspired by patient experiences shared on KIMS Hospitals social media channels.
                <span className="block mt-1 text-sm text-gray-400 italic">
                  Based on testimonials featured by KIMS Hospitals.
                </span>
              </p>
            </AnimatedSection>

            <StaggerContainer
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              staggerDelay={0.1}
            >
              {patientStories.map((item, index) => (
                <AnimatedItem key={index}>
                  <div className="relative bg-[#f4f8fd] rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 text-blue-100 opacity-50 group-hover:opacity-80 transition-opacity">
                      <Quote className="h-12 w-12" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-base text-gray-700 leading-relaxed relative z-10">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gradient-to-r from-blue-100 to-transparent" />

                    {/* Author info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#0b3b80]">
                          {item.author}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {item.age && (
                            <span className="text-xs text-gray-400">{item.age} yrs</span>
                          )}
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500 font-medium">
                            {item.condition}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 rounded-full bg-blue-100 p-2 text-[#0b3b80] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4 fill-[#0b3b80]" />
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ==================== VIDEO TESTIMONIALS FROM KIMS ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Play className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                  Video Testimonials
                </h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Watch patient success stories shared on KIMS Hospitals social media channels.
              </p>
            </AnimatedSection>

            {/* Loading State */}
            {loading && (
              <div className="mt-12 flex flex-col items-center justify-center py-16">
                <Loader2 className="h-8 w-8 text-[#0b3b80] animate-spin" />
                <p className="mt-4 text-sm text-gray-500">
                  Loading testimonials from KIMS Hospitals...
                </p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="mt-12 flex flex-col items-center justify-center py-16">
                <AlertCircle className="h-8 w-8 text-amber-500" />
                <p className="mt-4 text-sm text-gray-600 max-w-md text-center">
                  Could not load testimonials from external sources. The videos are still available
                  directly on the KIMS Hospitals platform.
                </p>
                <button
                  onClick={fetchTestimonials}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-[#0b3b80] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Retry
                </button>
              </div>
            )}

            {/* Testimonials grid */}
            {!loading && !error && testimonials.length > 0 && (
              <StaggerContainer
                className="mt-12 space-y-6"
                staggerDelay={0.1}
              >
                {testimonials.map((testimonial) => {
                  const platform = platformConfig[testimonial.platform];
                  const PlatformIcon = platform.icon;

                  return (
                    <AnimatedItem key={testimonial.id}>
                      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="p-6 md:p-8">
                          {/* Platform badge */}
                          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-4 bg-gray-50 border border-gray-100">
                            <PlatformIcon
                              className={`h-3.5 w-3.5 ${platform.color}`}
                            />
                            <span className="text-gray-600">
                              {platform.label}
                            </span>
                          </div>

                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Video embed */}
                            {testimonial.platform === "youtube" &&
                              testimonial.embedUrl && (
                                <div className="w-full md:w-80 shrink-0">
                                  <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden group">
                                    {selectedVideo === testimonial.id ? (
                                      <iframe
                                        src={`${testimonial.embedUrl}?autoplay=1`}
                                        title={testimonial.title}
                                        className="absolute inset-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      />
                                    ) : (
                                      <>
                                        {testimonial.thumbnailUrl && (
                                          // eslint-disable-next-line @next/next/no-img-element
                                          <img
                                            src={testimonial.thumbnailUrl}
                                            alt={testimonial.title}
                                            className="w-full h-full object-cover"
                                          />
                                        )}
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                          <button
                                            onClick={() =>
                                              setSelectedVideo(testimonial.id)
                                            }
                                            className="rounded-full bg-white/90 p-3 hover:bg-white transition-colors"
                                          >
                                            <Play className="h-6 w-6 text-[#0b3b80] fill-[#0b3b80]" />
                                          </button>
                                        </div>
                                        <button
                                          onClick={() =>
                                            setSelectedVideo(testimonial.id)
                                          }
                                          className="absolute inset-0 flex items-center justify-center"
                                        >
                                          <div className="rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition-colors hover:scale-105">
                                            <Play className="h-6 w-6 text-[#0b3b80] fill-[#0b3b80]" />
                                          </div>
                                        </button>
                                      </>
                                    )}
                                  </div>
                                </div>
                              )}

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-[#0b3b80]">
                                {testimonial.title}
                              </h3>
                              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {testimonial.description}
                              </p>

                              {/* Source link */}
                              <a
                                href={testimonial.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                View on {platform.label}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedItem>
                  );
                })}
              </StaggerContainer>
            )}

            {/* Fallback when no dynamic data */}
            {!loading && !error && testimonials.length === 0 && (
              <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8 text-center">
                <p className="text-gray-500 text-sm">
                  Testimonials are loading from external sources.
                </p>
                <Link
                  href="https://www.kimshospitals.com/doctor-profile/dr-nisarga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Visit Dr. Nisarga&apos;s profile on KIMS Hospitals
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ==================== WHY PATIENTS TRUST ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                  Why Patients Trust Dr. Nisarga
                </h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Consistently delivering exceptional cardiac care with compassion and precision.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Unmatched Experience",
                  description:
                    "With over 6,000 cardiac surgical procedures and 17+ years of experience, Dr. Nisarga brings unparalleled expertise to every case.",
                },
                {
                  title: "Patient-Centred Approach",
                  description:
                    "Every treatment plan is tailored to the individual — listening, explaining, and recommending only what is clinically appropriate.",
                },
                {
                  title: "Advanced Technology",
                  description:
                    "As a pioneer in robotic and minimally invasive cardiac surgery at KIMS, patients benefit from the latest surgical innovations.",
                },
              ].map((item, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className="text-center p-8 rounded-2xl border border-gray-100 bg-[#f4f8fd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#0b3b80] mb-5">
                      {index === 0 ? (
                        <Star className="h-6 w-6 fill-[#0b3b80]" />
                      ) : index === 1 ? (
                        <Heart className="h-6 w-6 fill-[#0b3b80]" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#0b3b80] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7]">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Begin Your Journey?
              </h2>
              <p className="mt-4 text-blue-100/90 text-base md:text-lg">
                Schedule a consultation with Dr. Nisarga and experience advanced cardiac care
                with compassion and expertise.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact#book-form"
                  className="flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#0b3b80] shadow-lg transition-all hover:bg-blue-50 hover:-translate-y-0.5"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
                >
                  Explore Services
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
