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
          {/* Left Column: Images */}
          <AnimatedSection className="lg:col-span-5 flex flex-col items-center relative" direction="left">
            {/* Main Portrait */}
            <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-3xl border border-gray-100 shadow-xl z-10">
              <Image
                src="https://res.cloudinary.com/duhxyuebe/image/upload/v1784185797/IMG_5774_rnuw3v.jpg"
                alt="Dr. Nisarga - Senior Robotic Cardiac Surgeon"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 420px"
              />
            </div>

            {/* Top-left decorative image - overlapping on desktop, stacked on mobile */}
            <div className="relative md:absolute md:-top-4 md:-left-4 mt-4 md:mt-0 w-full max-w-[200px] md:w-36 lg:w-44 md:h-36 lg:h-44 aspect-square overflow-hidden rounded-2xl border border-gray-100 md:border-4 md:border-white shadow-lg md:z-20 md:-rotate-6 hover:rotate-0 transition-all duration-500 group">
              <Image
                src="https://res.cloudinary.com/duhxyuebe/image/upload/v1784185797/IMG_5772_qv4ozy.jpg"
                alt="Dr. Nisarga - Cardiac surgery expertise"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 200px, 176px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom-right decorative image - overlapping on desktop, stacked on mobile */}
            <div className="relative md:absolute md:-bottom-4 md:-right-4 mt-4 md:mt-0 w-full max-w-[200px] md:w-44 lg:w-52 md:h-44 lg:h-52 aspect-square overflow-hidden rounded-2xl border border-gray-100 md:border-4 md:border-white shadow-lg md:z-20 md:rotate-6 hover:rotate-0 transition-all duration-500 group">
              <Image
                src="https://res.cloudinary.com/duhxyuebe/image/upload/v1784184589/IMG_5758_jucdwm.jpg"
                alt="Dr. Nisarga - Surgical expertise"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 200px, 208px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                href="/about"
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
