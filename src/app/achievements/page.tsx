"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Heart,
  Mic,
  BookOpen,
  Globe,
  Trophy,
  Star,
  Cpu,
  Activity,
  TrendingUp,
  CheckCircle,
  BadgeCheck,
  Newspaper,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";

const milestones = [
  { year: "6,000+", description: "Adult and paediatric cardiac surgeries performed over a distinguished career" },
  { year: "300+", description: "Charitable heart surgeries performed free of cost for economically disadvantaged patients" },
  { year: "99%", description: "Of coronary bypass surgeries performed using the Off-Pump (Beating Heart) technique, wherever clinically appropriate" },
  { year: "17+", description: "Years of dedicated experience in cardiac surgery" },
  { year: "First", description: "Introduced robotic cardiac surgery within the KIMS Hospitals group" },
  { year: "Chief", description: "Appointed Chief Cardiac Surgeon & Head of Robotic Heart Surgery and MICS at KIMS Hospitals" },
  { year: "Rare", description: "Performed awake cardiac surgery on a patient with the rare Bombay Blood Group" },
  { year: "Leader", description: "Established and developed high-volume cardiac surgery programmes at leading institutions" },
];

const mediaCoverage = [
  { outlet: "Print Media", description: "Featured in leading national and regional publications for pioneering robotic cardiac surgery and charitable initiatives", icon: Newspaper },
  { outlet: "Digital Media", description: "Recognised across healthcare digital platforms for expertise in minimally invasive and robotic cardiac procedures", icon: Globe },
  { outlet: "Medical News", description: "Covered in medical news outlets for landmark surgeries and clinical innovations in cardiac care", icon: Mic },
];

const conferencePresentations = [
  { title: "International Conferences", description: "Scientific presentations at prestigious international cardiovascular surgery conferences" },
  { title: "National Conferences", description: "Regular faculty and speaker at major national cardiac surgery conferences across India" },
  { title: "CME Programmes", description: "Active participation as faculty in Continuing Medical Education programmes for fellow surgeons" },
  { title: "Live Workshops", description: "Conducted live operative workshops demonstrating advanced cardiac surgical techniques" },
  { title: "Surgical Demonstrations", description: "Demonstration of robotic and minimally invasive cardiac surgery techniques to peers" },
];

const academicPublications = [
  { title: "Research & Studies", description: "Contributions to peer-reviewed medical literature in cardiothoracic surgery" },
  { title: "Case Reports", description: "Published rare and instructive cardiac surgical case reports" },
  { title: "Surgical Techniques", description: "Shared innovative surgical approaches and techniques with the medical community" },
  { title: "Collaborative Research", description: "Participation in multi-centre studies and clinical research initiatives" },
];

const awards = [
  { title: "First Rank", description: "All India Entrance Examination for MCh – Cardiothoracic & Vascular Surgery", icon: Trophy },
  { title: "Academic Excellence", description: "Consistent recognition for academic achievement throughout medical training", icon: Star },
  { title: "Surgical Excellence", description: "Recognised for contributions to advancing cardiac surgical care", icon: Award },
  { title: "Professional Recognition", description: "Invited faculty and speaker at numerous national and international forums", icon: BadgeCheck },
];

const charitableInitiatives = [
  { title: "300+ Free Surgeries", description: "Performed more than 300 life-saving cardiac surgeries completely free of cost for patients who could not afford treatment" },
  { title: "Accessible Healthcare", description: "Committed to ensuring that quality cardiac care is accessible to all, regardless of economic status" },
  { title: "Community Outreach", description: "Active involvement in community health programmes and cardiac awareness initiatives" },
  { title: "Humanitarian Mission", description: "Believes that every patient deserves the same standard of care, irrespective of their financial means" },
];

const clinicalInnovations = [
  { icon: Cpu, title: "Robotic Cardiac Surgery", description: "Pioneering robotic-assisted cardiac surgery within the KIMS Hospitals group" },
  { icon: Heart, title: "Minimally Invasive Techniques", description: "Advanced MICS programme offering less invasive alternatives for complex cardiac procedures" },
  { icon: Activity, title: "Off-Pump Bypass Surgery", description: "Nearly 99% of coronary bypass surgeries performed without the heart-lung machine" },
  { icon: TrendingUp, title: "Enhanced Recovery (ERAS)", description: "Implementation of Enhanced Recovery After Surgery protocols to improve patient outcomes" },
  { icon: Cpu, title: "AI in Healthcare", description: "Ongoing interest in integrating Artificial Intelligence for precision surgical planning" },
  { icon: Globe, title: "Digital Health", description: "Adoption of digital health tools for clinical workflow optimisation and patient care" },
];

export default function AchievementsPage() {
  useEffect(() => {
    document.title = "Achievements | Dr. Nisarga - Cardiac Surgeon";
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
                Achievements & Milestones
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                A Legacy of
                <span className="block text-blue-200">Surgical Excellence</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100/90 leading-relaxed">
                Over 17 years of dedication to advancing cardiac surgery through clinical excellence,
                innovation, education, and compassionate service.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== LANDMARK MILESTONES ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Landmark Surgical Milestones</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Key achievements that define Dr. Nisarga&apos;s journey in cardiac surgery
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {milestones.map((milestone, idx) => (
                <ScaleIn key={idx} delay={idx * 0.05}>
                  <div className="group bg-[#f4f8fd] rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <p className="text-2xl md:text-3xl font-extrabold text-[#0b3b80] group-hover:text-blue-700 transition-colors">
                      {milestone.year}
                    </p>
                    <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== AWARDS & RECOGNITIONS ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Awards & Recognitions</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Honours and accolades earned through a career dedicated to cardiac surgery
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {awards.map((award, idx) => {
                const IconComponent = award.icon;
                return (
                  <ScaleIn key={idx} delay={idx * 0.08}>
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="inline-flex rounded-full bg-amber-50 p-3 text-amber-600 mb-4">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0b3b80]">{award.title}</h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{award.description}</p>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== MEDIA COVERAGE ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Media Coverage</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                National and international recognition for pioneering work in cardiac surgery
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaCoverage.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <ScaleIn key={idx} delay={idx * 0.1}>
                    <div className="bg-[#f4f8fd] rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="inline-flex rounded-full bg-blue-100 p-3 text-[#0b3b80] mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0b3b80]">{item.outlet}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== CONFERENCE PRESENTATIONS ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <AnimatedSection className="lg:col-span-5 lg:sticky lg:top-28" direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <Mic className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Conference Presentations</h2>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                  Dr. Nisarga is an active participant in academic forums, sharing knowledge and advancing the field of cardiac surgery through presentations and workshops.
                </p>
                <p className="mt-4 text-gray-500 text-sm">
                  He believes that sharing knowledge contributes to better patient care and strengthens the future of cardiac surgery.
                </p>
              </AnimatedSection>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  {conferencePresentations.map((item, idx) => (
                    <ScaleIn key={idx} delay={idx * 0.06}>
                      <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                        <div className="mt-0.5 shrink-0 rounded-full bg-blue-100 p-1.5 text-[#0b3b80]">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0b3b80] text-sm md:text-base">{item.title}</h4>
                          <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ACADEMIC PUBLICATIONS ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Academic Publications</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Contributions to medical literature and the advancement of cardiac surgical knowledge
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {academicPublications.map((pub, idx) => (
                <ScaleIn key={idx} delay={idx * 0.08}>
                  <div className="bg-[#f4f8fd] rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                    <div className="rounded-full bg-blue-100 p-2 text-[#0b3b80] w-fit mb-4">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-[#0b3b80] text-base md:text-lg">{pub.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{pub.description}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CLINICAL INNOVATIONS ==================== */}
        <section className="py-16 md:py-24 bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                  <Cpu className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Clinical Innovations</h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                Pioneering advances in cardiac surgical techniques and patient care
              </p>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {clinicalInnovations.map((innovation, idx) => {
                const IconComponent = innovation.icon;
                return (
                  <ScaleIn key={idx} delay={idx * 0.06}>
                    <div className="service-card bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="rounded-full bg-blue-50/80 p-3 text-[#0b3b80] w-fit mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-[#0b3b80]">{innovation.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{innovation.description}</p>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== CHARITABLE INITIATIVES ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <AnimatedSection className="lg:col-span-5" direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-blue-100 p-2 text-[#0b3b80]">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">Charitable Initiatives</h2>
                </div>
                <p className="text-gray-600 text-base md:text-lg">
                  Dr. Nisarga believes that quality healthcare should be accessible to everyone, regardless of their ability to pay.
                </p>
                <div className="mt-6 bg-gradient-to-br from-[#0b3b80] to-[#1a5fc7] rounded-xl p-6 md:p-8 text-white">
                  <p className="text-4xl md:text-5xl font-extrabold mb-2">300+</p>
                  <p className="text-base text-blue-100">
                    Life-saving cardiac surgeries performed free of cost
                  </p>
                </div>
              </AnimatedSection>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  {charitableInitiatives.map((initiative, idx) => (
                    <ScaleIn key={idx} delay={idx * 0.08}>
                      <div className="flex items-start gap-4 bg-[#f4f8fd] rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300">
                        <div className="mt-0.5 shrink-0 rounded-full bg-red-50 p-1.5 text-red-500">
                          <Heart className="h-4 w-4 fill-red-200" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0b3b80] text-sm md:text-base">{initiative.title}</h4>
                          <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{initiative.description}</p>
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-[#f4f8fd] border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                Experience Excellence in Cardiac Care
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Benefit from the expertise of one of India&apos;s leading robotic and minimally invasive cardiac surgeons.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/#book"
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
