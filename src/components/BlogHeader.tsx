"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function BlogHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f3d2e]/95 backdrop-blur-md border-b border-[#1a5c43]/50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-[#0f3d2e] font-bold text-sm">R</span>
            </div>
            <div className="leading-tight text-left">
              <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
              <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all shadow hover:shadow-md"
            >
              Book Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-300 hover:text-white p-2"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1a5c43]/40 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-stone-200 hover:bg-emerald-900/50 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/book-trial"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm py-2.5 rounded-full transition-colors"
              >
                Book Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
