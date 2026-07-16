"use client";

import Link from "next/link";
import {
  Calendar,
  Users,
  Award,
  Activity,
  Heart,
  Mic,
  Hospital,
  ShieldAlert,
  Cpu,
  User,
  HeartPulse,
  GitBranch,
  RefreshCw,
  Baby,
  Spline,
  RotateCcw,
  Tv,
  ArrowRight
} from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";

export default function ExperienceServices() {
  const experiences = [
    { icon: Calendar, text: "7+ Years of Dedicated Cardiac Surgical Experience" },
    { icon: Users, text: "6,000+ Adult & Paediatric Cardiac Surgeries" },
    { icon: Award, text: "Chief, Robotic Heart Surgery & MICS programme in KIMS hospitals" },
    { icon: Activity, text: "99% Off-Pump CABG in suitable patients" },
    { icon: Heart, text: "300+ Charitable Heart Surgeries" },
    { icon: Mic, text: "Faculty & Speaker at National & International Conferences" },
    { icon: Hospital, text: "Experience across leading tertiary care hospitals in India" },
    { icon: ShieldAlert, text: "Expertise in Adult, Paediatric & High-Risk Cardiac Surgery" },
  ];

  const services = [
    { icon: Cpu, name: "Robotic Heart Surgery" },
    { icon: User, name: "Minimally Invasive Cardiac Surgery (MICS)" },
    { icon: HeartPulse, name: "Coronary Artery Bypass Surgery (CABG)" },
    { icon: Activity, name: "Beating Heart Surgery" },
    { icon: GitBranch, name: "Complex Bypass Surgery" },
    { icon: RefreshCw, name: "Valve Repair & Replacements" },
    { icon: Baby, name: "Congenital Heart Surgery" },
    { icon: Spline, name: "Aortic Surgery" },
    { icon: RotateCcw, name: "Redo Cardiac Surgery" },
    { icon: Tv, name: "ECMO" },
  ];

  return (
    <section id="services" className="border-y border-gray-100 bg-[#f4f8fd]">
      <div className="mx-auto max-w-7xl px-0 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Experience */}
          <AnimatedSection className="lg:col-span-5 bg-[#eef4fb] p-8 md:p-12 lg:py-20 flex flex-col justify-start" direction="left">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3b80]">Experience at a Glance</h3>
            </div>

            <StaggerContainer className="mt-10 space-y-6" staggerDelay={0.08}>
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <AnimatedItem key={index} className="flex items-start gap-4">
                    <div className="mt-1 rounded-md bg-white p-1.5 shadow-sm text-[#0b3b80]">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-base font-semibold text-gray-700 leading-tight">
                      {exp.text}
                    </span>
                  </AnimatedItem>
                );
              })}
            </StaggerContainer>
          </AnimatedSection>

          {/* Right Column: Services */}
          <AnimatedSection className="lg:col-span-7 bg-white p-8 md:p-12 lg:py-20 flex flex-col justify-start" direction="right">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-50 p-2 text-[#0b3b80]">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0b3b80]">Services Snapshot</h3>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ScaleIn key={index} delay={index * 0.06}>
                    <div className="service-card flex flex-col items-center justify-center rounded-2xl border border-gray-100 p-6 text-center bg-gray-50/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="rounded-full bg-blue-50/80 p-3 text-[#0b3b80] mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold text-[#0b3b80] leading-snug">
                        {service.name}
                      </span>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>

            <AnimatedSection className="mt-10 flex justify-center" delay={0.3}>
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-800"
              >
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
