"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Stethoscope, Heart, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";
import type { ServiceContent } from "@/data/services";

interface ServicePageLayoutProps {
  service: ServiceContent;
  relatedServices?: { slug: string; title: string; shortName: string }[];
}

export default function ServicePageLayout({ service, relatedServices = [] }: ServicePageLayoutProps) {
  const IconComponent = service.icon;

  useEffect(() => {
    document.title = `${service.title} | Dr. Nisarga - Cardiac Surgeon`;
  }, [service.title]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* ==================== HERO BANNER ==================== */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${service.heroGradient} py-16 md:py-24`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection direction="up">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <AnimatedSection direction="up" delay={0.1}>
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-white/80 text-sm font-medium mb-6">
                    <IconComponent className="h-4 w-4" />
                    {service.shortName}
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.15}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                    {service.title}
                  </h1>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                  <p className="mt-4 text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                    {service.subtitle}
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection className="lg:col-span-4 hidden lg:flex justify-center" direction="right" delay={0.25}>
                <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 text-center">
                  <IconComponent className="h-16 w-16 mx-auto text-white/90" />
                  <p className="mt-3 text-white/70 text-sm font-medium">{service.shortName}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ==================== OVERVIEW ==================== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <AnimatedSection className="lg:col-span-8" direction="up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Overview</h2>
                </div>

                <StaggerContainer staggerDelay={0.08}>
                  {service.overview.map((paragraph, idx) => (
                    <AnimatedItem key={idx}>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">{paragraph}</p>
                    </AnimatedItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>

              {/* Stats sidebar */}
              {service.stats && (
                <AnimatedSection className="lg:col-span-4" direction="right" delay={0.2}>
                  <div className="sticky top-28 bg-[#f4f8fd] rounded-2xl border border-gray-100 p-6 md:p-8">
                    <h3 className="text-lg font-bold text-[#0b3b80] mb-6 text-center">Key Facts</h3>
                    <div className="space-y-5">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-2xl md:text-3xl font-extrabold text-[#0b3b80]">{stat.stat}</p>
                          <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>

        {/* ==================== CONDITIONS ==================== */}
        {service.conditions && (
          <section className="py-16 md:py-20 bg-[#f4f8fd] border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Conditions Treated</h2>
                <p className="mt-3 text-gray-600">
                  {service.title} is used to treat the following conditions
                </p>
              </AnimatedSection>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {service.conditions.map((condition, idx) => (
                  <ScaleIn key={idx} delay={idx * 0.05}>
                    <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                      <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0b3b80] text-sm md:text-base">{condition.name}</h4>
                        <p className="text-sm text-gray-500 mt-0.5">{condition.description}</p>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== SYMPTOMS ==================== */}
        {service.symptoms && (
          <section className="py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-28" direction="left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Symptoms</h2>
                  </div>
                  <p className="text-gray-600">
                    Patients with conditions requiring {service.shortName} may experience one or more of the following symptoms. It is important to note that some conditions may be asymptomatic in their early stages.
                  </p>
                </AnimatedSection>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 gap-3">
                    {service.symptoms.map((symptom, idx) => (
                      <ScaleIn key={idx} delay={idx * 0.04}>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50/50 transition-colors duration-200">
                          <div className="mt-0.5 shrink-0 rounded-full bg-amber-100 p-1 text-amber-600">
                            <Heart className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-sm md:text-base text-gray-700">{symptom}</span>
                        </div>
                      </ScaleIn>
                    ))}
                  </div>

                  <AnimatedSection delay={0.2} className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
                    <p className="text-sm text-amber-800">
                      <strong>Important:</strong> These symptoms can also be caused by other medical conditions. If you experience any of these symptoms, please consult a qualified healthcare professional for an accurate diagnosis.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== DIAGNOSIS ==================== */}
        {service.diagnosis && (
          <section className="py-16 md:py-20 bg-[#f4f8fd] border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Diagnosis</h2>
                <p className="mt-3 text-gray-600">
                  A thorough diagnostic evaluation is essential for accurate diagnosis and treatment planning
                </p>
              </AnimatedSection>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {service.diagnosis.map((item, idx) => (
                  <ScaleIn key={idx} delay={idx * 0.04}>
                    <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all duration-300">
                      <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1 text-[#0b3b80]">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== TREATMENT OPTIONS ==================== */}
        {service.treatmentOptions && (
          <section className="py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Treatment Options</h2>
                <p className="mt-3 text-gray-600">
                  The choice of treatment depends on the specific condition, its severity, and individual patient factors
                </p>
              </AnimatedSection>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {service.treatmentOptions.map((option, idx) => (
                  <ScaleIn key={idx} delay={idx * 0.08}>
                    <div className="bg-[#f4f8fd] rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-[#0b3b80] text-base md:text-lg">{option.name}</h4>
                      <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{option.description}</p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== SURGICAL APPROACH ==================== */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <h2 className="text-2xl md:text-3xl font-bold">Surgical Approach</h2>
              <p className="mt-3 text-blue-100/90">
                How the procedure is performed by Dr. Nisarga and his team
              </p>
            </AnimatedSection>

            <div className="mt-12 max-w-4xl mx-auto">
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {service.surgicalApproach.map((step, idx) => (
                  <AnimatedItem key={idx}>
                    <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors duration-200">
                      <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-base md:text-lg text-white/90 leading-relaxed">{step}</p>
                    </div>
                  </AnimatedItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ==================== BENEFITS ==================== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Benefits</h2>
              <p className="mt-3 text-gray-600">
                Why patients and physicians choose {service.shortName}
              </p>
            </AnimatedSection>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {service.benefits.map((benefit, idx) => (
                <ScaleIn key={idx} delay={idx * 0.04}>
                  <div className="flex items-start gap-3 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== RECOVERY ==================== */}
        <section className="py-16 md:py-20 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-28" direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Recovery & Rehabilitation</h2>
                </div>
                <p className="text-gray-600">
                  What to expect during the recovery period after {service.shortName}
                </p>
              </AnimatedSection>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  {service.recovery.map((item, idx) => (
                    <ScaleIn key={idx} delay={idx * 0.04}>
                      <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                        <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== WHY ROBOTIC/MICS ==================== */}
        {service.whyRoboticMics && (
          <section className="py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
              <AnimatedSection direction="up">
                <div className="rounded-2xl bg-gradient-to-br from-[#f4f8fd] to-white border border-gray-100 p-8 md:p-12">
                  <IconComponent className="h-10 w-10 mx-auto text-[#0b3b80] mb-4" />
                  <h2 className="text-xl md:text-2xl font-bold text-[#0b3b80] mb-4">
                    A Word from Dr. Nisarga
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {service.whyRoboticMics}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* ==================== RELATED SERVICES ==================== */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-[#f4f8fd] border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <AnimatedSection className="text-center" direction="up">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Related Services</h2>
                <p className="mt-3 text-gray-600">
                  Explore other procedures offered by Dr. Nisarga
                </p>
              </AnimatedSection>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {relatedServices.map((related, idx) => (
                  <ScaleIn key={related.slug} delay={idx * 0.05}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#0b3b80] hover:text-white hover:border-[#0b3b80] transition-all duration-200"
                    >
                      {related.shortName || related.title}
                    </Link>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Schedule a Consultation</h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Take the first step towards advanced cardiac care. Dr. Nisarga and his team are here to help.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/#book"
                  className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:-translate-y-0.5"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-lg border-2 border-[#0b3b80] px-6 py-3.5 text-base font-semibold text-[#0b3b80] transition-all hover:bg-blue-50/50 hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-5 w-5" />
                  All Services
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
