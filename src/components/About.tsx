"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Image */}
          <AnimatedSection className="lg:col-span-5 flex justify-center" direction="left">
            <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image
                src="https://res.cloudinary.com/duhxyuebe/image/upload/v1784133572/Dr-Nisarga_yvaw5c.jpg"
                alt="Dr. Nisarga in consultation office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 420px"
              />
            </div>
          </AnimatedSection>

          {/* Right Column: Bio */}
          <StaggerContainer className="lg:col-span-7 flex flex-col items-start" staggerDelay={0.1}>
            <AnimatedItem>
              <span className="text-sm font-bold tracking-wider text-[#0b3b80] uppercase">
                ABOUT DR. NISARGA
              </span>
            </AnimatedItem>
            <AnimatedItem>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#0b3b80] sm:text-4xl">
                Every heart has a unique story, and every patient deserves care tailored to their individual needs.
              </h3>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
                With over 16 years of dedicated experience and more than 5,000 adult and
                paediatric cardiac surgeries performed, Dr. Nisarga is recognised for his
                expertise in treating a wide spectrum of complex cardiac conditions. As Chief
                Cardiac Surgeon & Head of Robotic Heart Surgery and Minimally Invasive
                Cardiac Surgery (MICS) at KIMS Hospitals, Kondapur and Gachibowli, Hyderabad,
                he is committed to delivering safe, ethical, and evidence-based cardiac care
                using advanced surgical techniques.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                Dr. Nisarga believes that while technology continues to transform cardiac
                surgery, every treatment decision should be guided by sound clinical
                judgement, patient safety, and the individual needs of each patient.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                href="#biography"
                className="mt-8 flex items-center gap-2 text-[#0b3b80] font-semibold hover:gap-3 transition-all group"
              >
                Read Full Biography
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
