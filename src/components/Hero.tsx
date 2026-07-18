"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem } from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-[#0b3b80]/5 to-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Text Content */}
          <StaggerContainer className="lg:col-span-7 flex flex-col items-start text-left" staggerDelay={0.12}>
            <AnimatedItem>
              <h1 className="text-5xl font-extrabold tracking-tight text-[#0b3b80] sm:text-6xl md:text-7xl">
                Dr. Nisarga
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 text-xl font-semibold text-[#0b3b80] md:text-2xl">
                Senior Robotic & Minimally Invasive Cardiac Surgeon
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="mt-6 h-1.5 w-16 bg-[#0b3b80] rounded" />
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-8 text-2xl font-bold text-[#0b3b80] sm:text-3xl">
                Compassion. Precision. Innovation.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#0b3b80]">
                Delivering advanced cardiac care through robotic technology,
                minimally invasive surgery, and evidence-based clinical practice.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0a3270] hover:-translate-y-0.5"
                >
                  <Calendar className="h-5 w-5" />
                  Book an Appointment
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 rounded-lg border-2 border-[#0b3b80] px-6 py-3.5 text-base font-semibold text-[#0b3b80] transition-all hover:bg-[#0b3b80]/5 hover:-translate-y-0.5"
                >
                  <User className="h-5 w-5" />
                  Meet Dr. Nisarga
                </Link>
              </div>
            </AnimatedItem>
          </StaggerContainer>

          {/* Image Content */}
          <AnimatedSection className="lg:col-span-5 relative flex justify-center" direction="right" delay={0.3}>
            <div className="relative w-full max-w-[420px] aspect-square md:max-w-[480px] overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
              <Image
                src="https://res.cloudinary.com/duhxyuebe/image/upload/v1784133152/Dr._Nisarga_zg8ewj.png"
                alt="Dr. Nisarga - Cardiac Surgeon"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 480px"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
