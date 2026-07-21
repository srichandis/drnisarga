"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/achievements", label: "Achievements" },
    { href: "/patient-first", label: "Patient First" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b3b80]">
              <Heart className="h-6 w-6 fill-[#0b3b80]" />
            </div>
            <div>
              <span className="block text-xl font-bold text-[#0b3b80] leading-none">Dr. Nisarga</span>
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase hidden lg:block">Chief Cardiac Surgeon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "font-bold text-[#0b3b80]"
                    : "font-semibold text-[#0b3b80] hover:text-blue-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact" 
              className="flex items-center gap-2 rounded-lg bg-[#0b3b80] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-md"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  isActive(link.href)
                    ? "font-bold text-[#0b3b80]"
                    : "font-semibold text-[#0b3b80]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0b3b80] py-3 text-sm font-semibold text-white"
            >
              <Calendar className="h-4 w-4" />
              Book an Appointment
            </Link>
          </div>
        )}
    </header>
  );
}
