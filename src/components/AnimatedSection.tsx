"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  distance = 60,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...variants[direction] }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0 }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for children that animate in sequence
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  delay = 0,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={
        prefersReducedMotion ? "visible" : isInView ? "visible" : "hidden"
      }
      variants={{
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
            delayChildren: prefersReducedMotion ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
}

export function AnimatedItem({
  children,
  className = "",
  direction = "up",
  distance = 40,
}: AnimatedItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReducedMotion
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              ...(direction === "up" ? { y: distance } : {}),
              ...(direction === "left" ? { x: distance } : {}),
              ...(direction === "right" ? { x: -distance } : {}),
            },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Scale-in variant for cards
interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1, scale: 1 }
          : isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.9 }
      }
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
