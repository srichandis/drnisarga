"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Settings,
  HeartHandshake,
  ShieldCheck,
  Heart,
  BadgeCheck,
  Users,
  Activity,
  Award,
  TrendingUp,
  CheckCircle,
  Smile,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";

const patientFirstPillars = [
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every treatment recommendation is based on what is safest, most appropriate, and most beneficial for the individual patient. Dr. Nisarga believes in listening carefully to every patient and family, explaining all treatment options clearly and honestly, and involving patients in every decision about their care.",
    highlights: [
      "Personalised treatment plans for each patient's unique condition",
      "Clear, honest communication about all options and outcomes",
      "Informed consent and shared decision-making at every step",
      "Support for patients and families throughout the treatment journey",
    ],
  },
  {
    icon: Heart,
    title: "Compassion & Empathy",
    description:
      "Dr. Nisarga considers it a privilege to care for every patient who places their trust in him. Every patient is treated with the same care and consideration that he would extend to his own family. His approach combines clinical expertise with empathy, ensuring patients remain informed, involved, and supported.",
    highlights: [
      "Compassionate care delivered with dignity and respect",
      "300+ charitable heart surgeries for economically disadvantaged patients",
      "Humanitarian commitment to accessible healthcare for all",
      "Emotional support for patients and their families throughout recovery",
    ],
  },
  {
    icon: Settings,
    title: "Advanced Technology",
    description:
      "Dr. Nisarga leads the Robotic Heart Surgery and Minimally Invasive Cardiac Surgery (MICS) programme at KIMS Hospitals, Hyderabad. By integrating the da Vinci robotic surgical system and other cutting-edge technologies, he is able to perform complex cardiac procedures through tiny incisions — resulting in less pain, shorter hospital stays, and faster recovery for patients.",
    highlights: [
      "da Vinci robotic surgical system for precision cardiac surgery",
      "Minimally invasive techniques for complex heart procedures",
      "Enhanced Recovery After Surgery (ERAS) protocols",
      "Artificial Intelligence integration for surgical planning",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Ethical & Evidence-Based",
    description:
      "Dr. Nisarga recommends only what is clinically appropriate and in the patient's best interest. His practice is grounded in evidence-based medicine — integrating the latest internationally accepted advances into everyday patient care while never compromising on safety or ethical standards.",
    highlights: [
      "Evidence-based treatment recommendations always prioritised",
      "Sound clinical judgement guiding every decision",
      "International best practices integrated into patient care",
      "Patient safety as the foremost priority in all procedures",
    ],
  },
];

const withPatients = [
  {
    src: "/With-Patients/IMG_2204.JPG",
    alt: "Dr. Nisarga consulting with a patient",
    caption: "Taking time to listen and understand each patient's unique concerns and medical history.",
  },
  {
    src: "/With-Patients/IMG_2205.JPG",
    alt: "Dr. Nisarga with patient after surgery",
    caption: "A warm moment with a patient recovering well after a successful cardiac procedure.",
  },
  {
    src: "/With-Patients/IMG_2206.JPG",
    alt: "Dr. Nisarga examining a patient",
    caption: "Thorough clinical evaluation and compassionate communication at every visit.",
  },
  {
    src: "/With-Patients/IMG_2207.JPG",
    alt: "Dr. Nisarga with patient and family",
    caption: "Supporting both patients and their families through every stage of treatment.",
  },
];

const internationalPatients = [
  {
    src: "/With-Patients/IMG_2210.JPG",
    alt: "International patient consultation with Dr. Nisarga",
    caption: "Patients from around the world travel to KIMS Hospitals seeking Dr. Nisarga's expertise in advanced cardiac care.",
  },
  {
    src: "/With-Patients/IMG_2211.JPG",
    alt: "International patient recovery after cardiac surgery",
    caption: "International patients benefit from world-class cardiac surgery and compassionate post-operative care at KIMS Hospitals.",
  },
];

const stats = [
  { stat: "6,000+", label: "Cardiac Surgical Procedures", icon: Activity },
  { stat: "300+", label: "Charitable Heart Surgeries", icon: Heart },
  { stat: "99%", label: "Off-Pump CABG in Suitable Patients", icon: TrendingUp },
  { stat: "17+", label: "Years of Dedicated Experience", icon: Award },
];

const commitmentPrinciples = [
  "Listening carefully to every patient and family, understanding their concerns and expectations.",
  "Explaining all treatment options clearly and honestly — including risks, benefits, and alternatives.",
  "Recommending only what is clinically appropriate and in the patient's best interest.",
  "Providing compassionate care with dignity and respect at every stage of treatment.",
  "Delivering the highest standard of surgical care with patient safety as the foremost priority.",
  "Ensuring quality healthcare remains accessible to everyone, regardless of economic status.",
];

export default function PatientFirstPage() {
  useEffect(() => {
    document.title = "Patient First | Dr. Nisarga - Chief Cardiac Surgeon";
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
                Patient First Philosophy
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Putting Patients
                <span className="block text-blue-200">First, Always.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100/90 leading-relaxed">
                Every decision, every procedure, every interaction is guided by one principle —
                what is best for the patient. Dr. Nisarga&apos;s practice is built on compassion,
                transparency, and a deep commitment to individualised care.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== PATIENT-FIRST PILLARS ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">The Patient-First Philosophy</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Four core principles guide every aspect of patient care, from the first consultation
                through to complete recovery and beyond.
              </p>
            </AnimatedSection>

            <div className="mt-12 space-y-16">
              {patientFirstPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isReversed = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Icon & Description Column */}
                    <AnimatedSection
                      className={`lg:col-span-5 ${
                        isReversed ? "lg:order-2" : ""
                      }`}
                      direction={isReversed ? "right" : "left"}
                    >
                      <div className="bg-[#f4f8fd] rounded-2xl border border-gray-100 p-8 md:p-10 text-center lg:text-left hover:shadow-lg transition-all duration-300">
                        <div                      className="inline-flex rounded-full bg-[#d32537]/10 p-4 text-[#d32537] mb-6">
                          <IconComponent className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">{pillar.title}</h3>
                        <p className="mt-4 text-base text-gray-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </AnimatedSection>

                    {/* Highlights Column */}
                    <StaggerContainer
                      className={`lg:col-span-7 space-y-4 ${
                        isReversed ? "lg:order-1" : ""
                      }`}
                      staggerDelay={0.08}
                    >
                      {pillar.highlights.map((highlight, hIdx) => (
                        <AnimatedItem key={hIdx}>
                          <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                            <div className="mt-0.5 shrink-0 rounded-full bg-[#d32537]/10 p-1.5 text-[#d32537] group-hover:bg-[#d32537] group-hover:text-white transition-all duration-300">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                            <span className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                              {highlight}
                            </span>
                          </div>
                        </AnimatedItem>
                      ))}
                    </StaggerContainer>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== STATS BANNER ==================== */}
        <section className="bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ScaleIn key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="inline-flex rounded-full bg-blue-100 p-2.5 text-[#0b3b80] mb-3">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <p className="text-3xl md:text-4xl font-extrabold text-[#0b3b80]">{item.stat}</p>
                      <p className="mt-2 text-sm md:text-base font-medium text-gray-600">{item.label}</p>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== WITH PATIENTS GALLERY ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Smile className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">With Our Patients</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Every patient is unique, and every interaction is an opportunity to provide
                compassionate, individualised care. These moments reflect the relationships
                built on trust, respect, and mutual understanding.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {withPatients.map((item, idx) => (
                <ScaleIn key={idx} delay={idx * 0.06}>
                  <div className="group bg-[#f4f8fd] rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.caption}
                      </p>
                      <div className="mt-3 flex items-center gap-1">
                        <Heart className="h-3.5 w-3.5 text-[#d32537]/70 fill-[#d32537]/30" />
                        <span className="text-xs text-gray-400 font-medium">Patient Care</span>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== INTERNATIONAL PATIENTS ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">International Patients</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                KIMS Hospitals in Hyderabad is a trusted destination for patients from across the globe
                seeking advanced cardiac surgical care. Dr. Nisarga&apos;s expertise in robotic and minimally
                invasive cardiac surgery attracts international patients who benefit from world-class
                treatment combined with compassionate, patient-centred care.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {internationalPatients.map((item, idx) => (
                <ScaleIn key={idx} delay={idx * 0.1}>
                  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.caption}
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5 text-blue-500" />
                        <span className="text-xs text-gray-400 font-medium">International Patient Care</span>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>

            <AnimatedSection className="mt-10 text-center" delay={0.2}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2.5 border border-blue-100">
                <Globe className="h-4 w-4 text-[#0b3b80]" />
                <span className="text-xs font-semibold text-[#0b3b80]">
                  Global patients welcome — KIMS Hospitals provides comprehensive international patient services including visa assistance, travel coordination, and accommodation support.
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== COMMITMENT PRINCIPLES ==================== */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection className="text-center" direction="up">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-200/20 p-2 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Our Commitment to Every Patient
                </h2>
              </div>
              <p className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto">
                These principles guide every interaction, every treatment decision, and every surgical
                procedure performed by Dr. Nisarga and his team.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-12 space-y-5" staggerDelay={0.1}>
              {commitmentPrinciples.map((principle, index) => (
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
                Every patient is treated with the same care and consideration that Dr. Nisarga
                would extend to his own family.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== WHY CHOOSE SECTION ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <AnimatedSection className="lg:col-span-5" direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                    Why Choose Dr. Nisarga?
                  </h2>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                  With over 17 years of dedicated experience and a commitment to integrating the
                  latest advances in cardiac surgery, Dr. Nisarga offers patients a unique combination
                  of clinical expertise, technological innovation, and compassionate care.
                </p>
                <p className="mt-4 text-gray-500 text-sm">
                  His patient-first approach ensures that every individual receives the safest, most
                  appropriate treatment for their condition.
                </p>
              </AnimatedSection>

              <StaggerContainer className="lg:col-span-7 space-y-4" staggerDelay={0.08}>
                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">6,000+ Surgeries Performed</h4>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Extensive experience across adult and paediatric cardiac surgery
                      </p>
                    </div>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <Settings className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">Robotic & Minimally Invasive Expertise</h4>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Chief of Robotic Heart Surgery & MICS at KIMS Hospitals
                      </p>
                    </div>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <HeartHandshake className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">Patient-First Approach</h4>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Every treatment recommendation is based on what is safest and most appropriate for each individual
                      </p>
                    </div>
                  </div>
                </AnimatedItem>

                <AnimatedItem>
                  <div className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                    <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b3b80] text-sm">Evidence-Based Practice</h4>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Integration of internationally accepted advances into everyday patient care
                      </p>
                    </div>
                  </div>
                </AnimatedItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-[#f4f8fd] border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                Experience the Patient-First Difference
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Take the first step towards advanced cardiac care. Schedule a consultation with
                Dr. Nisarga and experience care that truly puts you first.
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
                  <ArrowLeft className="h-5 w-5" />
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
