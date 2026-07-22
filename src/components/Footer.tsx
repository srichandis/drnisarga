"use client";

import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection direction="up" delay={0.1}>
      <footer id="contact" className="bg-[#082a5c] text-blue-100 border-t border-blue-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-blue-900">
            
            {/* Brand Col */}
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Heart className="h-6 w-6 fill-white" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-white leading-none">Dr. Nisarga</span>
                  <span className="text-xs text-blue-300 font-semibold tracking-wide uppercase">Senior Cardiac Surgeon</span>
                </div>
              </Link>
              <p className="text-sm text-blue-200/80 leading-relaxed max-w-xs">
                Providing top-tier cardiac care using robotic-assisted surgical methods and patient-centered clinical expertise.
              </p>
            </div>

            {/* Links Col */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white font-bold text-base tracking-wide uppercase">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                <Link href="#home" className="hover:text-white transition-colors">Home</Link>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
                <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                <Link href="/patient-first" className="hover:text-white transition-colors">Patient First</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact Col */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white font-bold text-base tracking-wide uppercase">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-300 shrink-0" />
                  <span>+91 40 6750 5050</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-300 shrink-0" />
                  <span>contact@drnisarga.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-blue-300 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    KIMS Hospitals, Kondapur & Gachibowli, Hyderabad, India
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright */}            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80">
            <p>© {new Date().getFullYear()} Dr. Nisarga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
}
