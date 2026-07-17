"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";
import { services } from "@/data/services";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Cardiac Surgery Services | Dr. Nisarga";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* ==================== HERO ==================== */}
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
                Cardiac Surgery Services
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Comprehensive Cardiac Care
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100/90 leading-relaxed">
                From robotic and minimally invasive surgery to complex cardiac repairs —
                Dr. Nisarga offers a full spectrum of advanced cardiac surgical services.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== SERVICES GRID ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Our Services</h2>
              <p className="mt-3 text-gray-600">
                Explore each service in detail to learn about the conditions treated, surgical approaches, and recovery process
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ScaleIn key={service.slug} delay={idx * 0.04}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block rounded-2xl border border-gray-100 bg-white p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="rounded-full bg-blue-50/80 p-3.5 text-[#0b3b80] w-fit mb-5 group-hover:bg-[#0b3b80] group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-7 w-7" />
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-[#0b3b80] group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {service.subtitle}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0b3b80] group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE SECTION ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <AnimatedSection className="lg:col-span-5" direction="left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                  Why Choose Dr. Nisarga for Your Cardiac Care?
                </h2>
              </AnimatedSection>

              <StaggerContainer className="lg:col-span-7 space-y-4" staggerDelay={0.08}>
                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">6,000+ Surgeries Performed</h4>
                      <p className="text-sm text-gray-500 mt-0.5">Extensive experience across adult and paediatric cardiac surgery</p>
                    </div>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">Robotic & Minimally Invasive Expertise</h4>
                      <p className="text-sm text-gray-500 mt-0.5">Chief of Robotic Heart Surgery & MICS at KIMS Hospitals</p>
                    </div>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">Patient-Centred Approach</h4>
                      <p className="text-sm text-gray-500 mt-0.5">Every treatment recommendation is based on what is safest and most appropriate for each individual patient</p>
                    </div>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">Evidence-Based Practice</h4>
                      <p className="text-sm text-gray-500 mt-0.5">Integration of internationally accepted advances into everyday patient care</p>
                    </div>
                  </div>
                </AnimatedItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Dr. Nisarga offers comprehensive consultations to evaluate your condition and recommend the most appropriate treatment.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 rounded-lg border-2 border-[#0b3b80] px-6 py-3.5 text-base font-semibold text-[#0b3b80] transition-all hover:bg-blue-50/50 hover:-translate-y-0.5"
                >
                  About Dr. Nisarga
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
