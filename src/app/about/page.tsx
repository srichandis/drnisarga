"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  CheckCircle,
  Award,
  Users,
  Activity,
  HeartPulse,
  Cpu,
  Microscope,
  BookOpen,
  Globe,
  Shield,
  Camera,
  Feather,
  TreePine,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  Quote,
  Building2,
  Phone,
  MapPin,
  Stethoscope,
  Ambulance,
} from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";

const principles = [
  "Listening carefully to every patient and family.",
  "Explaining all treatment options clearly and honestly.",
  "Recommending only what is clinically appropriate and in the patient's best interest.",
  "Providing compassionate care with dignity and respect.",
  "Delivering the highest standard of surgical care with patient safety as the foremost priority.",
];

const professionalJourney = [
  { stat: "6,000+", label: "Cardiac Surgical Procedures" },
  { stat: "17+", label: "Years of Dedicated Experience" },
  { stat: "99%", label: "Off-Pump CABG in Suitable Patients" },
  { stat: "300+", label: "Charitable Heart Surgeries" },
];

const innovationAreas = [
  { icon: Cpu, name: "Robotic Cardiac Surgery" },
  { icon: HeartPulse, name: "Minimally Invasive Cardiac Surgery (MICS)" },
  { icon: Activity, name: "Advanced Valve Repair Techniques" },
  { icon: Shield, name: "Enhanced Recovery After Surgery (ERAS)" },
  { icon: Microscope, name: "Precision Surgical Planning" },
  { icon: Cpu, name: "Artificial Intelligence in Healthcare" },
  { icon: Globe, name: "Digital Health & Clinical Workflow Optimisation" },
];

const academicContributions = [
  "Scientific presentations at national and international conferences",
  "Faculty at Continuing Medical Education (CME) programmes",
  "Live operative workshops",
  "Demonstration of advanced cardiac surgical techniques",
  "Mentoring young cardiac surgeons",
  "Participation in professional cardiovascular societies",
  "Adoption and dissemination of evolving surgical practices",
];

const journeyHighlights = [
  "Performing more than 6,000 cardiac surgical procedures",
  "Leading the Robotic Heart Surgery and MICS programme at KIMS Hospitals",
  "Introducing robotic cardiac surgery within the KIMS Hospitals group",
  "Establishing and developing high-volume cardiac surgery programmes",
  "Performing nearly 99% of coronary bypass surgeries using the Off-Pump (Beating Heart) technique, wherever clinically appropriate",
  "Extensive experience in complex valve repair and reconstruction",
  "Management of rare congenital and acquired cardiac disorders",
  "Performing technically demanding redo cardiac surgeries",
  "Providing ECMO support for critically ill patients",
  "Adopting advanced surgical techniques that improve patient safety and recovery",
  "Performing awake cardiac surgery on a patient with the rare Bombay Blood Group",
];

const education = [
  { degree: "MCh – Cardiothoracic & Vascular Surgery", institution: "Sri Jayadeva Institute of Cardiology, Bengaluru", note: "First Rank in the All India Entrance Examination" },
  { degree: "MS – General Surgery", institution: "Kasturba Medical College, Mangalore, Manipal Academy" },
  { degree: "MBBS", institution: "Sri Siddhartha Medical College, Tumkur" },
];

const memberships = [
  "Indian Medical Association (IMA)",
  "Life Member – Indian Association of Cardiovascular & Thoracic Surgeons (IACTS)",
  "Asian Society for Cardiovascular & Thoracic Surgery (ASCVTS)",
];

const interests = [
  { icon: Camera, label: "International Award-Winning Bird Photography" },
  { icon: Feather, label: "Kannada Literature & Poetry" },
  { icon: BookOpen, label: "Medical Education" },
  { icon: Heart, label: "Preventive Cardiology Awareness" },
  { icon: Cpu, label: "Artificial Intelligence in Healthcare" },
  { icon: TreePine, label: "Nature & Wildlife Conservation" },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Dr. Nisarga | Senior Robotic Cardiac Surgeon";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* ==================== HERO BANNER ==================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b3b80] via-[#0f4a9e] to-[#1a5fc7] py-20 md:py-32">
          {/* Decorative elements */}
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
                About Dr. Nisarga
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Compassion.
                <span className="block text-blue-200">Precision. Innovation.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100/90 leading-relaxed">
                For over 17 years, dedicated to treating complex heart diseases through
                advanced surgical techniques, compassionate care, and evidence-based medicine.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== INTRODUCTION ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              {/* Image */}
              <AnimatedSection className="lg:col-span-5 flex justify-center" direction="left">
                <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/duhxyuebe/image/upload/v1784185107/IMG_5761_e6qcz5.jpg"
                    alt="Dr. Nisarga - Senior Robotic Cardiac Surgeon"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </AnimatedSection>

              {/* Bio */}
              <StaggerContainer className="lg:col-span-7 flex flex-col items-start" staggerDelay={0.1}>
                <AnimatedItem>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                      <Quote className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold tracking-wider text-[#0b3b80] uppercase">
                      About Dr. Nisarga
                    </span>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <p className="text-base md:text-lg leading-relaxed text-gray-600">
                    Having performed more than <strong className="text-[#0b3b80]">6,000 adult and paediatric cardiac surgeries</strong>,
                    his professional mission has remained consistent—to provide every patient with the safest
                    possible treatment while striving for an optimal clinical outcome.
                  </p>
                </AnimatedItem>

                <AnimatedItem>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                    He currently serves as <strong className="text-[#0b3b80]">Chief Cardiac Surgeon & Head of Robotic Heart Surgery
                    and Minimally Invasive Cardiac Surgery (MICS)</strong> at KIMS Hospitals, Hyderabad, where he
                    leads a highly advanced cardiac surgery programme. His clinical practice combines
                    conventional cardiac surgery with robotic and minimally invasive techniques, enabling many
                    patients to benefit from smaller incisions, reduced pain, shorter hospital stays, and faster
                    recovery whenever clinically appropriate.
                  </p>
                </AnimatedItem>

                <AnimatedItem>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                    Dr. Nisarga firmly believes that technology should enhance—not replace—clinical judgement.
                    Every treatment recommendation is based on what is safest, most appropriate, and most
                    beneficial for the individual patient.
                  </p>
                </AnimatedItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ==================== KIMS HOSPITALS ==================== */}
        <section className="bg-white">
          {/* Main Banner Section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left: Text Content */}
              <StaggerContainer className="flex flex-col items-start" staggerDelay={0.08}>
                <AnimatedItem>
                  <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#c0392b] mb-4">
                    Our Hospital
                  </span>
                </AnimatedItem>

                <AnimatedItem>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b3b80] leading-tight">
                    KIMS Hospitals, Kondapur
                    <span className="block text-lg md:text-xl font-medium text-[#c0392b] mt-2">
                      Advanced Care. Compassionate Healing.
                    </span>
                  </h2>
                </AnimatedItem>

                <AnimatedItem>
                  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
                    Under the leadership of <strong className="text-[#0b3b80]">Dr. Nisarga</strong>, KIMS Hospitals,
                    Kondapur stands as a state-of-the-art multi-specialty tertiary care center with
                    advanced cardiac infrastructure, offering comprehensive care across all major
                    medical and surgical specialties.
                  </p>
                </AnimatedItem>

                {/* 4 Feature Icons */}
                <AnimatedItem>
                  <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                    {[
                      { icon: Building2, label: "State-of-the-art Infrastructure" },
                      { icon: Cpu, label: "Robotic & Minimally Invasive Surgery" },
                      { icon: HeartPulse, label: "Advanced Cardiac Care Units" },
                      { icon: Users, label: "Expert Multidisciplinary Team" },
                    ].map((feature, idx) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0 rounded-lg bg-[#0b3b80]/10 p-2 text-[#0b3b80]">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 leading-snug">{feature.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </AnimatedItem>
              </StaggerContainer>

              {/* Right: Hospital Building Image */}
              <AnimatedSection direction="right">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                  <Image
                    src="/Kims/kims.png"
                    alt="KIMS Hospitals, Kondapur - Modern healthcare facility"
                    fill
                    className="object-cover object-[75%_center]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* World-Class Facilities Bar */}
          <div className="bg-[#f4f8fd] border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-12">
              <AnimatedSection direction="up" className="text-center mb-8">
                <h3 className="text-lg md:text-xl font-bold text-[#0b3b80]">World-Class Facilities</h3>
                <div className="mt-2 h-0.5 w-12 bg-[#c0392b] rounded mx-auto" />
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: Cpu, label: "Robotic Surgery" },
                  { icon: Stethoscope, label: "Hybrid Operating Theatres" },
                  { icon: Activity, label: "Advanced Cardiac ICU" },
                  { icon: Heart, label: "Comprehensive Cardiac Services" },
                  { icon: Users, label: "Multidisciplinary Approach" },
                  { icon: Ambulance, label: "24x7 Emergency Support" },
                ].map((facility, idx) => {
                  const IconComponent = facility.icon;
                  return (
                    <ScaleIn key={idx} delay={idx * 0.05}>
                      <div className="flex flex-col items-center text-center bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        <div className="rounded-full bg-[#0b3b80]/10 p-2.5 text-[#0b3b80] mb-3">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-gray-700 leading-snug">
                          {facility.label}
                        </span>
                      </div>
                    </ScaleIn>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="bg-[#0b3b80]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-200" />
                  <span>KIMS Hospitals, Kondapur, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-200" />
                  <span>040 7111 1111</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== STATS BANNER ==================== */}
        <section className="bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {professionalJourney.map((item, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-extrabold text-[#0b3b80]">{item.stat}</p>
                    <p className="mt-2 text-sm md:text-base font-medium text-gray-600">{item.label}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROFESSIONAL JOURNEY ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Professional Journey</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Throughout his career, Dr. Nisarga has contributed to the advancement of cardiac surgery
                through clinical excellence, innovation, education, and leadership.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {journeyHighlights.map((highlight, index) => (
                <ScaleIn key={index} delay={index * 0.04}>
                  <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50/50 transition-colors duration-200">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1 text-[#0b3b80]">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-sm md:text-base text-gray-700 leading-relaxed">{highlight}</span>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== INNOVATION WITH PURPOSE ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Cpu className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Innovation with Purpose</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Cardiac surgery continues to evolve rapidly, and Dr. Nisarga remains committed to integrating
                internationally accepted advances into everyday patient care.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {innovationAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <ScaleIn key={index} delay={index * 0.06}>
                    <div className="service-card flex flex-col items-center justify-center rounded-2xl border border-gray-100 p-6 text-center bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="rounded-full bg-blue-50/80 p-3 text-[#0b3b80] mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold text-[#0b3b80] leading-snug">
                        {area.name}
                      </span>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>

            <AnimatedSection className="mt-10 text-center max-w-2xl mx-auto" delay={0.2}>
              <p className="text-gray-500 italic text-sm md:text-base">
                &ldquo;Innovation is meaningful only when it results in safer procedures, improved recovery,
                and better long-term patient outcomes.&rdquo;
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== ACADEMIC CONTRIBUTIONS ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-28" direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Academic & Professional Contributions</h2>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                  Dr. Nisarga is actively involved in advancing cardiac surgery through education, research,
                  and professional collaboration.
                </p>
                <p className="mt-4 text-gray-500 text-sm">
                  He believes that sharing knowledge contributes to better patient care and strengthens the
                  future of cardiac surgery.
                </p>
              </AnimatedSection>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  {academicContributions.map((item, index) => (
                    <ScaleIn key={index} delay={index * 0.06}>
                      <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f4f8fd] border border-gray-100 hover:shadow-md transition-all duration-300">
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

        {/* ==================== EDUCATION & MEMBERSHIPS ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <AnimatedSection direction="left">
                <div className="flex items-center gap-3 mb-8">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Education</h2>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <ScaleIn key={index} delay={index * 0.1}>
                      <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                        <h3 className="text-base md:text-lg font-bold text-[#0b3b80]">{edu.degree}</h3>
                        <p className="mt-1 text-sm text-gray-600">{edu.institution}</p>
                        {edu.note && (
                          <p className="mt-2 inline-block text-xs font-semibold text-amber-700 bg-amber-50 rounded-full px-3 py-1">
                            {edu.note}
                          </p>
                        )}
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </AnimatedSection>

              {/* Memberships */}
              <AnimatedSection direction="right">
                <div className="flex items-center gap-3 mb-8">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Professional Memberships</h2>
                </div>

                <div className="space-y-4">
                  {memberships.map((membership, index) => (
                    <ScaleIn key={index} delay={index * 0.1}>
                      <div className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                        <div className="rounded-full bg-blue-50 p-2 text-[#0b3b80]">
                          <Users className="h-5 w-5" />
                        </div>
                        <span className="text-sm md:text-base font-medium text-gray-700">{membership}</span>
                      </div>
                    </ScaleIn>
                  ))}
                </div>

                {/* Community Service */}
                <AnimatedSection className="mt-12" delay={0.2}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Community Service</h2>
                  </div>

                  <ScaleIn>
                    <div className="bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7] rounded-xl p-6 md:p-8 text-white">
                      <p className="text-3xl md:text-4xl font-extrabold mb-3">300+</p>
                      <p className="text-base md:text-lg leading-relaxed text-blue-100">
                        Life-saving cardiac surgeries performed free of cost for economically disadvantaged
                        patients, reflecting a continued commitment to humanitarian service alongside
                        clinical excellence.
                      </p>
                      <p className="mt-4 text-sm text-blue-200 italic">
                        Dr. Nisarga believes that quality healthcare should be accessible to everyone.
                      </p>
                    </div>
                  </ScaleIn>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ==================== BEYOND THE OPERATING ROOM ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Feather className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Beyond the Operating Room</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Beyond his surgical practice, Dr. Nisarga pursues interests that reflect the same qualities
                essential to cardiac surgery—patience, precision, observation, and creativity.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {interests.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <ScaleIn key={index} delay={index * 0.08}>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="rounded-full bg-blue-50/80 p-3 text-[#0b3b80] mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 leading-snug">{interest.label}</span>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>

            <AnimatedSection className="mt-10 text-center max-w-xl mx-auto" delay={0.2}>
              <p className="text-gray-500 text-sm italic">
                These pursuits provide balance while continually reinforcing the attention to detail and
                lifelong learning that define his professional philosophy.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== GUIDING PRINCIPLES ==================== */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection className="text-center" direction="up">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-200/20 p-2 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  A Commitment to Every Patient
                </h2>
              </div>
              <p className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto">
                Dr. Nisarga considers it a privilege to care for every patient who places their trust in him.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-12 space-y-5" staggerDelay={0.1}>
              {principles.map((principle, index) => (
                <AnimatedItem key={index}>
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 hover:bg-white/15 transition-colors duration-200">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-200/20 p-1.5 text-white">
                      <Heart className="h-5 w-5 fill-white/80" />
                    </div>
                    <p className="text-base md:text-lg text-white/95 leading-relaxed">{principle}</p>
                  </div>
                </AnimatedItem>
              ))}
            </StaggerContainer>

            <AnimatedSection className="mt-12 text-center" delay={0.3}>
              <p className="text-blue-100/80 text-base italic">
                Every patient is treated with the same care and consideration that he would extend to his own family.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Schedule a Consultation</h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Take the first step towards advanced cardiac care. Dr. Nisarga and his team are here to help.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:-translate-y-0.5"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 rounded-lg border-2 border-[#0b3b80] px-6 py-3.5 text-base font-semibold text-[#0b3b80] transition-all hover:bg-blue-50/50 hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Home
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
