"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AnimatedSection, StaggerContainer, AnimatedItem, ScaleIn } from "@/components/AnimatedSection";

const galleryImages = [
  { src: "/At-Work/IMG_5758.JPG", alt: "Dr. Nisarga — leading a cardiac surgery procedure" },
  { src: "/At-Work/07136ef2-4425-4b6f-ad05-feecf0483717.JPG", alt: "Dr. Nisarga — surgical team in action" },
  { src: "/At-Work/IMG_5961.JPG", alt: "Dr. Nisarga — performing robotic and minimally invasive cardiac surgery" },
  { src: "/At-Work/9dcdd718-53c4-42b6-a145-3a5d7c0d6f03.JPG", alt: "Dr. Nisarga — performing a minimally invasive procedure" },
  { src: "/At-Work/a2d973d8-c862-4a01-b131-56644a74300d.JPG", alt: "Dr. Nisarga — at the robotic surgery console" },
  { src: "/At-Work/IMG_5965.jpg", alt: "Dr. Nisarga — cardiac care team collaboration" },
  { src: "/At-Work/IMG_5774.JPG", alt: "Dr. Nisarga — leading complex cardiac surgical procedures with precision and expertise" },
  { src: "/At-Work/IMG_5772.JPG", alt: "Dr. Nisarga — meticulous pre-operative planning and patient evaluation" },
  { src: "/At-Work/PHOTO-2026-07-17-11-49-36.jpg", alt: "Dr. Nisarga — engaging with colleagues and advancing cardiac surgical practices" },
];

function GalleryImageCard({
  image,
  index,
  onOpen,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <ScaleIn delay={0.06 * index}>
      <button
        onClick={() => onOpen(index)}
        className="group relative w-full overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-gray-50 cursor-pointer"
      >
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
            <span className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
              <Maximize2 className="h-3.5 w-3.5" />
              View
            </span>
          </div>

          {/* Subtle inset ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 group-hover:ring-[#d32537]/40 transition-all duration-300 pointer-events-none" />
        </div>
      </button>
    </ScaleIn>
  );
}

export default function AtWorkGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  // Auto-focus lightbox and reset body overflow on cleanup
  useEffect(() => {
    if (lightboxOpen && lightboxRef.current) {
      lightboxRef.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [closeLightbox, goPrev, goNext]
  );

  const current = galleryImages[currentIndex];

  return (
    <>
      <section className="py-16 md:py-24 bg-[#f4f8fd]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <StaggerContainer className="mb-12 text-center" staggerDelay={0.1}>
            <AnimatedItem>
              <span className="text-sm font-bold tracking-wider text-[#0b3b80] uppercase">
                IN THE OPERATING ROOM
              </span>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b3b80] sm:text-4xl">
                A Glimpse Into Cardiac Surgery
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                Every surgery is a story of precision, teamwork, and the relentless pursuit of saving lives.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <div className="mt-6 h-1 w-16 bg-[#d32537] rounded mx-auto" />
            </AnimatedItem>
          </StaggerContainer>

          {/* Photo Grid */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-auto">
              {galleryImages.map((image, index) => (
                <GalleryImageCard
                  key={image.src}
                  image={image}
                  index={index}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={onKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#d32537]/20 hover:bg-[#d32537]/40 text-white transition-all duration-200"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-[#d32537]/40 text-white transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-[#d32537]/40 text-white transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image container */}
          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 90vw, 1024px"
              priority
            />

            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
              <p className="text-white text-sm text-center font-medium">
                {current.alt}
              </p>
              <p className="text-white/60 text-xs text-center mt-1">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
