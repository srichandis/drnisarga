"use client";

import Link from "next/link";
import { Calendar, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Chief Cardiac Surgeon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about"
              className="text-sm font-semibold text-[#0b3b80] hover:text-blue-700 transition-colors"
            >
              About
            </Link>
            <Link href="/services" className="text-sm font-semibold text-[#0b3b80] hover:text-blue-700 transition-colors">
              Services
            </Link>
            <Link href="/achievements" className="text-sm font-medium text-gray-600 hover:text-[#0b3b80] transition-colors">
              Achievements
            </Link>
            <Link href="/media" className="text-sm font-medium text-gray-600 hover:text-[#0b3b80] transition-colors">
              Media
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-[#0b3b80] transition-colors">
              Contact
            </Link>
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
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#0b3b80]"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-[#0b3b80]"
            >
              Services
            </Link>
            <Link
              href="/achievements"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-600"
            >
              Achievements
            </Link>
            <Link
              href="/media"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-600"
            >
              Media
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-600"
            >
              Contact
            </Link>
            <Link
              href="#book"
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
