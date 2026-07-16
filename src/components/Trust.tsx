"use client";

import Image from "next/image";
import { Settings, HeartHandshake, ShieldCheck, Heart } from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/AnimatedSection";

export default function Trust() {
  const pillars = [
    { icon: Settings, title: "Advanced Technology" },
    { icon: HeartHandshake, title: "Patient-Centered Care" },
    { icon: ShieldCheck, title: "Ethical & Evidence-Based" },
    { icon: Heart, title: "Compassion & Empathy" },
  ];

  return (
    <section id="patients" className="bg-[#f8fafc] pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center pb-16 md:pb-24">
          {/* Left: Text Content */}
          <StaggerContainer className="lg:col-span-6 flex flex-col items-start text-left" staggerDelay={0.12}>
            <AnimatedItem>
              <h3 className="text-4xl font-extrabold tracking-tight text-[#0b3b80] sm:text-5xl">
                Why Patients Trust<br />Dr. Nisarga.
              </h3>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                Dr. Nisarga believes that every patient deserves honest medical advice,
                compassionate care, and a treatment plan designed around their individual condition.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                His approach combines clinical expertise with empathy, ensuring that patients
                and their families remain informed, involved, and supported throughout every stage of treatment.
              </p>
            </AnimatedItem>
          </StaggerContainer>

          {/* Right: Graphic */}
          <AnimatedSection className="lg:col-span-6 flex justify-center" direction="right" delay={0.2}>
            <div className="relative w-full max-w-[500px] aspect-[3/2] overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
              <Image
                src="/patients_trust_heart.jpg"
                alt="Compassionate Cardiac Care Graphic"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 500px"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Lower Pillars Panel */}
        <AnimatedSection className="-mx-6 lg:-mx-8" direction="up">
          <div className="bg-[#0b3b80] text-white py-8 px-6 md:px-12 lg:px-16">
            <StaggerContainer className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.12}>
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <AnimatedItem key={index}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                      <div className="rounded-xl bg-white/10 p-3 text-blue-200">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold tracking-wide mt-2 sm:mt-0">
                          {pillar.title}
                        </h4>
                      </div>
                    </div>
                  </AnimatedItem>
                );
              })}
            </StaggerContainer>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
