"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition"
            onClick={closeMenu}
          >
            <Image
              src="/Logo1.png"
              alt="Gulf Breeze Pool Service"
              width={120}
              height={72}
              className="h-10 w-auto"
              priority
            />
            <span className="text-2xl font-bold text-sky-700">
              Gulf Breeze Pool Service
            </span>
          </Link>
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-sky-700 transition font-medium"
              >
                Contact
              </Link>
            </div>
            {/* Desktop CTA Button */}
            <Link
              href="/#quote"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition text-sm"
            >
              Request a Free Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-slate-700 hover:text-sky-700 transition font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-slate-700 hover:text-sky-700 transition font-medium py-2"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                onClick={closeMenu}
                className="text-slate-700 hover:text-sky-700 transition font-medium py-2"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-slate-700 hover:text-sky-700 transition font-medium py-2"
              >
                Contact
              </Link>
              <Link
                href="/#quote"
                onClick={closeMenu}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-sky-700 text-white font-semibold hover:bg-sky-800 transition text-sm mt-2"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

