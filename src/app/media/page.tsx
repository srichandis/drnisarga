"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Newspaper, Globe, Star, Eye, Calendar, BookOpen, Languages, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";

const englishMedia = [
  {
    src: "/English Media/IMG_2209.JPG",
    alt: "English news coverage - Dr. Nisarga",
    title: "Pioneering Robotic Heart Surgery",
    outlet: "Leading English Daily",
    description:
      "Dr. Nisarga featured for pioneering robotic-assisted cardiac surgery in Telangana, highlighting advanced minimally invasive techniques.",
  },
  {
    src: "/English Media/IMG_2212.JPG",
    alt: "English news coverage - Robotic Cardiac Surgery",
    title: "Robotic Cardiac Surgery Advances",
    outlet: "National Health News",
    description:
      "In-depth coverage of robotic heart surgery programme at KIMS Hospitals and the benefits of minimally invasive cardiac procedures.",
  },
  {
    src: "/English Media/IMG_2213.JPG",
    alt: "English news coverage - Interview",
    title: "Excellence in Cardiac Care",
    outlet: "Medical Chronicle",
    description:
      "Dr. Nisarga shares insights on the evolution of cardiac surgery, patient safety, and the future of robotic-assisted procedures.",
  },
  {
    src: "/English Media/IMG_2215.JPG",
    alt: "English news coverage - Heart Surgery",
    title: "Cardiac Surgery Milestone",
    outlet: "The Times of India Group",
    description:
      "Coverage of Dr. Nisarga&apos;s landmark achievement in performing complex cardiac surgeries using cutting-edge robotic technology.",
  },
  {
    src: "/English Media/IMG_2215_copy.JPG",
    alt: "English news coverage - Patient Story",
    title: "Patient Success Story",
    outlet: "Healthcare Today",
    description:
      "A remarkable patient recovery story following minimally invasive cardiac surgery, showcasing the impact of advanced surgical care.",
  },
  {
    src: "/English Media/IMG_2217.JPG",
    alt: "English news coverage - MICS Programme",
    title: "MICS Programme Recognition",
    outlet: "City Express",
    description:
      "Feature on the Minimally Invasive Cardiac Surgery (MICS) programme that has transformed recovery outcomes for hundreds of patients.",
  },
  {
    src: "/English Media/IMG_2218.JPG",
    alt: "English news coverage - Robotic Surgery",
    title: "Robotic Surgery Revolution",
    outlet: "Health & Wellness Magazine",
    description:
      "How robotic technology is revolutionising cardiac surgery, with expert commentary from Dr. Nisarga on clinical applications and patient benefits.",
  },
  {
    src: "/English Media/IMG_2220.JPG",
    alt: "English news coverage - Expert Opinion",
    title: "Expert Opinion on Cardiac Care",
    outlet: "Deccan Chronicle",
    description:
      "Dr. Nisarga provides expert perspective on the importance of early detection and advanced treatment options for heart disease.",
  },
  {
    src: "/English Media/IMG_2228.jpeg",
    alt: "English news coverage - Workshop",
    title: "Live Surgical Workshop",
    outlet: "Medical Education Forum",
    description:
      "Coverage of a live operative workshop where Dr. Nisarga demonstrated advanced robotic cardiac surgical techniques to fellow surgeons.",
  },
  {
    src: "/English Media/IMG_2229.jpeg",
    alt: "English news coverage - Conference",
    title: "International Conference Presentation",
    outlet: "Global Cardiac Summit",
    description:
      "Dr. Nisarga presenting clinical outcomes and surgical innovations at a prestigious international cardiac surgery conference.",
  },
  {
    src: "/English Media/IMG_5757.JPG",
    alt: "English news coverage - Charitable Initiative",
    title: "Top 10 Best Cardiac urgeons in India",
    outlet: "The Hindu",
    description:
      "Feature on Dr. Nisarga&apos;s commitment to accessible healthcare, highlighting 300+ free heart surgeries for economically disadvantaged patients.",
  },
  {
    src: "/English Media/IMG_5768.JPG",
    alt: "English news coverage - Award",
    title: "Surgical Excellence Recognition",
    outlet: "Healthcare Awards",
    description:
      "Dr. Nisarga recognised for outstanding contributions to cardiac surgery, particularly in robotic and minimally invasive techniques.",
  },
];

const regionalMedia = [
  {
    src: "/Regional Media/media1.JPG",
    alt: "Regional media coverage - Kannada news",
    title: "ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಹೊಸ ಮೈಲಿಗಲ್ಲು",
    outlet: "Kannada News Daily",
    description:
      "ವರದಿ: ಕಿಮ್ಸ್ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಡಾ. ನಿಸರ್ಗ ಅವರ ರೋಬಾಟಿಕ್ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕಾರ್ಯಕ್ರಮದ ಯಶಸ್ಸಿನ ಕುರಿತು ವಿಸ್ತೃತ ವರದಿ.",
  },
  {
    src: "/Regional Media/media2.JPG",
    alt: "Regional media coverage - Telugu news",
    title: "రోబోటిక్ గుండె శస్త్రచికిత్స",
    outlet: "Telugu Health News",
    description:
      "కిమ్స్ ఆసుపత్రులలో డా. నిసర్గ నేతృత్వంలోని రోబోటిక్ హార్ట్ సర్జరీ కార్యక్రమం మరియు దాని ప్రయోజనాలపై ప్రత్యేక కథనం.",
  },
  {
    src: "/Regional Media/media3.JPG",
    alt: "Regional media coverage - Kannada",
    title: "ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
    outlet: "Kannada Health Magazine",
    description:
      "ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ (MICS) ತಂತ್ರಜ್ಞಾನದ ಪ್ರಗತಿ ಮತ್ತು ರೋಗಿಗಳಿಗೆ ಅದರ ಪ್ರಯೋಜನಗಳ ಕುರಿತು ವಿಸ್ತೃತ ಲೇಖನ.",
  },
  {
    src: "/Regional Media/media4.JPG",
    alt: "Regional media coverage - Telugu",
    title: "ఉచిత గుండె శస్త్రచికిత్సలు",
    outlet: "Telugu News Channel",
    description:
      "ఆర్థికంగా వెనుకబడిన రోగులకు డా. నిసర్గ 300+ ఉచిత గుండె శస్త్రచికిత్సలు నిర్వహించిన సేవా కార్యక్రమంపై ప్రత్యేక కవరేజ్.",
  },
  {
    src: "/Regional Media/media5.JPG",
    alt: "Regional media coverage - Kannada",
    title: "ರೋಗಿಯ ಯಶಸ್ಸಿನ ಕಥೆ",
    outlet: "Kannada News Network",
    description:
      "ಡಾ. ನಿಸರ್ಗ ಅವರ ರೋಬಾಟಿಕ್ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಮೂಲಕ ಗುಣಮುಖರಾದ ರೋಗಿಯ ಪ್ರೇರಣಾದಾಯಕ ಯಶಸ್ಸಿನ ಕಥೆ.",
  },
  {
    src: "/Regional Media/media6.JPG",
    alt: "Regional media coverage - Telugu",
    title: "హృదయ ఆరోగ్య అవగాహన",
    outlet: "Telugu Health Portal",
    description:
      "గుండె జబ్బుల నివారణ, ప్రారంభ గుర్తింపు మరియు అధునాతన చికిత్సా ఎంపికలపై డా. నిసర్గ అవగాహన కార్యక్రమం.",
  },
  {
    src: "/Regional Media/media7.JPG",
    alt: "Regional media coverage - Kannada",
    title: "ಸಮುದಾಯ ಆರೋಗ್ಯ ಶಿಬಿರ",
    outlet: "Kannada Public Health",
    description:
      "ಕಿಮ್ಸ್ ಆಸ್ಪತ್ರೆಯ ಸಹಯೋಗದೊಂದಿಗೆ ಆಯೋಜಿಸಿದ ಉಚಿತ ಹೃದಯ ಆರೋಗ್ಯ ತಪಾಸಣಾ ಶಿಬಿರದ ಕುರಿತು ವರದಿ.",
  },
  {
    src: "/Regional Media/media8.JPG",
    alt: "Regional media coverage - Telugu",
    title: "వైద్య శిక్షణా కార్యక్రమం",
    outlet: "Telugu Medical Journal",
    description:
      "యువ శస్త్రచికిత్స నిపుణులకు డా. నిసర్గ అందించిన రోబోటిక్ సర్జరీ శిక్షణా కార్యక్రమం కవరేజ్.",
  },
  {
    src: "/Regional Media/media9.JPG",
    alt: "Regional media coverage - Kannada",
    title: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಸಮ್ಮೇಳನದಲ್ಲಿ ಭಾಗಿ",
    outlet: "Kannada Health News",
    description:
      "ಅಂತರರಾಷ್ಟ್ರೀಯ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಸಮ್ಮೇಳನದಲ್ಲಿ ಡಾ. ನಿಸರ್ಗ ಅವರ ಸಂಶೋಧನಾ ಪ್ರಬಂಧ ಮತ್ತು ಪ್ರಸ್ತುತಿಯ ಕುರಿತು ವರದಿ.",
  },
  {
    src: "/Regional Media/media10.JPG",
    alt: "Regional media coverage - Telugu",
    title: "ప్రత్యక్ష శస్త్రచికిత్స ప్రదర్శన",
    outlet: "Telugu Medical News",
    description:
      "కనిష్ఠ ఆక్రమణ హృదయ శస్త్రచికిత్స యొక్క ప్రత్యక్ష ప్రదర్శనను నిర్వహించిన డా. నిసర్గ కవరేజ్.",
  },
  {
    src: "/Regional Media/media11.JPG",
    alt: "Regional media coverage - Kannada",
    title: "ಹೃದಯ ಆರೋಗ್ಯ ಜಾಗೃತಿ",
    outlet: "Kannada News Weekly",
    description:
      "ಹೃದಯದ ಆರೋಗ್ಯದ ಮಹತ್ವ, ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು ಮತ್ತು ಆಧುನಿಕ ಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳ ಕುರಿತು ಡಾ. ನಿಸರ್ಗ ಅವರ ಸಂದರ್ಶನ.",
  },
  {
    src: "/Regional Media/media12.JPG",
    alt: "Regional media coverage - Telugu",
    title: "అవార్డు & గుర్తింపు",
    outlet: "Telugu News Daily",
    description:
      "హృదయ శస్త్రచికిత్స రంగంలో డా. నిసర్గ అందుకున్న ప్రతిష్ఠాత్మక అవార్డు మరియు గుర్తింపుపై ప్రత్యేక కథనం.",
  },
  {
    src: "/Regional Media/IMG_2214.JPG",
    alt: "Regional media coverage - Kannada interview",
    title: "ಸಂದರ್ಶನ: ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಭವಿಷ್ಯ",
    outlet: "Kannada TV Channel",
    description:
      "ಡಾ. ನಿಸರ್ಗ ಅವರೊಂದಿಗೆ ವಿಶೇಷ ಸಂದರ್ಶನ: ರೋಬಾಟಿಕ್ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಭವಿಷ್ಯ ಮತ್ತು ರೋಗಿಗಳ ಆರೈಕೆಯಲ್ಲಿ ಹೊಸ ಆಯಾಮಗಳು.",
  },
  {
    src: "/Regional Media/IMG_2216.JPG",
    alt: "Regional media coverage - Telugu interview",
    title: "ప్రత్యేక ఇంటర్వ్యూ",
    outlet: "Telugu News Channel",
    description:
      "గుండె జబ్బుల నివారణ, రోబోటిక్ సర్జరీ ప్రయోజనాలు మరియు రోగి సంరక్షణపై డా. నిసర్గ ప్రత్యేక ఇంటర్వ్యూ.",
  },
  {
    src: "/Regional Media/IMG_2222.JPG",
    alt: "Regional media coverage - Kannada workshop",
    title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕಾರ್ಯಾಗಾರ",
    outlet: "Kannada Medical Association",
    description:
      "ನವೀನ ಹೃದಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತಂತ್ರಗಳ ಕುರಿತು ಡಾ. ನಿಸರ್ಗ ನಡೆಸಿದ ವೈದ್ಯಕೀಯ ಕಾರ್ಯಾಗಾರ ಮತ್ತು ಪ್ರಾತ್ಯಕ್ಷಿಕೆ.",
  },
  {
    src: "/Regional Media/IMG_2227.png",
    alt: "Regional media coverage - Telugu recognition",
    title: "సేవా గుర్తింపు",
    outlet: "Telugu Social Service",
    description:
      "ఉచిత గుండె శస్త్రచికಿತ్సల ద్వారా సమాజ సేవలో డా. నిసర్గ అందించిన కృషికి గుర్తింపు మరియు సన్మానం.",
  },
];

const tabs = [
  {
    id: "regional",
    label: "Regional Media",
    icon: Languages,
    description:
      "Coverage in Kannada, Telugu, and other regional language media outlets, bringing cardiac awareness and health education to local communities.",
    stats: [
      { stat: "16+", label: "Regional Media Features", icon: Globe },
      { stat: "3+", label: "Regional Languages", icon: Languages },
      { stat: "10+", label: "Regional Publications", icon: Newspaper },
      { stat: "4.8", label: "Media Rating", icon: Star },
    ],
  },
  {
    id: "english",
    label: "English Media",
    icon: FileText,
    description:
      "National and regional English-language news coverage featuring Dr. Nisarga's contributions to cardiac surgery and patient care.",
    stats: [
      { stat: "14+", label: "English Media Features", icon: Newspaper },
      { stat: "10+", label: "National Publications", icon: Globe },
      { stat: "5+", label: "Medical Journals", icon: BookOpen },
      { stat: "4.9", label: "Media Rating", icon: Star },
    ],
  },
];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("regional");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox when switching tabs
  useEffect(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, [activeTab]);

  useEffect(() => {
    document.title = "Media Coverage | Dr. Nisarga - Cardiac Surgeon";
  }, []);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < mediaData.length - 1 ? prev + 1 : prev
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  const mediaData = activeTab === "regional" ? regionalMedia : englishMedia;
  const currentTab = tabs.find((t) => t.id === activeTab)!;

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
                Media Coverage
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                In the
                <span className="block text-blue-200">News & Media</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="mt-4 max-w-xl mx-auto text-lg text-blue-100/90 leading-relaxed">
                Dr. Nisarga has been featured extensively in both English and regional language
                media for his pioneering work in robotic and minimally invasive cardiac surgery.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== TABBED MEDIA GALLERY ==================== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Tab Buttons */}
            <AnimatedSection direction="up">
              <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-[#eef4fb] rounded-2xl border-2 border-[#0b3b80]/10 ring-1 ring-[#0b3b80]/5 w-fit mx-auto mb-8 shadow-sm">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#0b3b80] text-white shadow-lg shadow-[#0b3b80]/25 ring-1 ring-[#0b3b80]/50"
                          : "bg-white/80 text-gray-600 border-2 border-gray-200 hover:border-[#0b3b80]/30 hover:text-[#0b3b80] hover:bg-white hover:shadow-md"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Tab Description */}
            <AnimatedSection className="text-center max-w-3xl mx-auto" direction="up" delay={0.05}>
              <p className="text-gray-600 text-base md:text-lg">{currentTab.description}</p>
            </AnimatedSection>

            {/* Media Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {mediaData.map((item, idx) => (
                <ScaleIn key={idx} delay={(idx % 8) * 0.04}>
                  <div className="group bg-[#f4f8fd] rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Image */}
                    <button
                      onClick={() => openLightbox(idx)}
                      className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 block focus:outline-none focus:ring-2 focus:ring-[#0b3b80]/50"
                      aria-label={`Open ${item.title} in lightbox`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-white text-xs font-medium bg-black/40 rounded-full px-2.5 py-1 backdrop-blur-sm flex items-center gap-1.5">
                          <Eye className="h-3 w-3" />
                          View Coverage
                        </span>
                      </div>
                    </button>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Newspaper className="h-3.5 w-3.5 text-[#0b3b80] shrink-0" />
                        <span className="text-xs font-semibold text-[#0b3b80] uppercase tracking-wider">
                          {item.outlet}
                        </span>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-800 leading-snug group-hover:text-[#0b3b80] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-3 flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-gray-400" />
                        <span className="text-[10px] text-gray-400 font-medium">
                          {activeTab === "regional" ? "Regional Media" : "Media"} Coverage
                        </span>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TAB STATS ==================== */}
        <section className="bg-[#f4f8fd] border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {currentTab.stats.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <ScaleIn key={idx} delay={idx * 0.1}>
                    <div className="text-center">
                      <div className="inline-flex rounded-full bg-blue-100 p-2.5 text-[#0b3b80] mb-3">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <p className="text-2xl md:text-3xl font-extrabold text-[#0b3b80]">{item.stat}</p>
                      <p className="mt-1 text-xs md:text-sm font-medium text-gray-600">{item.label}</p>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0b3b80]">
                Experience Excellence in Cardiac Care
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Schedule a consultation with Dr. Nisarga to learn how advanced cardiac surgery can help you.
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

      {/* ==================== LIGHTBOX ==================== */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors hover:scale-110"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image counter & title */}
          <div className="absolute top-4 left-4 z-10 text-white/80 text-sm font-medium">
            <span className="bg-black/30 rounded-full px-3 py-1.5 backdrop-blur-sm">
              {lightboxIndex + 1} / {mediaData.length}
            </span>
            <p className="mt-2 text-xs text-white/60 max-w-xs truncate px-3">
              {mediaData[lightboxIndex].title} — {mediaData[lightboxIndex].outlet}
            </p>
          </div>

          {/* Previous button */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Next button */}
          {lightboxIndex < mediaData.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={mediaData[lightboxIndex].src}
              alt={mediaData[lightboxIndex].alt}
              fill
              priority
              className="object-contain p-4 md:p-8"
              sizes="90vw"
            />
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-white font-bold text-base md:text-lg">
                {mediaData[lightboxIndex].title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {mediaData[lightboxIndex].outlet}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
