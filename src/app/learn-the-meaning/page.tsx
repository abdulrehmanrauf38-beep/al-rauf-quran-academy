"use client";

import { useState } from "react";
import Link from "next/link";
import { WORD_MEANINGS, WordMeaning } from "@/data/word-meanings";

const CATEGORIES = [
  "All",
  "Daily Remembrance",
  "Praise & Gratitude",
  "Core Verses",
  "Short Surahs",
] as const;

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function LearnTheMeaningPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeanings = WORD_MEANINGS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.englishMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.arabicText.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      
      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-[#0f3d2e]/95 backdrop-blur-md border-b border-[#1a5c43]/50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-[#0f3d2e] font-bold text-sm">R</span>
              </div>
              <div className="leading-tight text-left">
                <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
                <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/book-trial"
                className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5"
              >
                Book Free Trial
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-stone-300 hover:text-white p-1"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-[#1a5c43]/50 py-3 pb-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-stone-300 hover:text-amber-400 px-2 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/book-trial"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
                >
                  Book Free Trial
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white py-16 sm:py-24 text-center">
        {/* Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              📖 Meaning &amp; Reflection
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Understand What You <span className="text-amber-400">Recite</span>
          </h1>

          <p className="text-stone-200 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            Reciting the Quran with proper Tajweed is a noble duty. Understanding its sacred meanings transforms memorization into a lifelong, heartfelt connection with Allah.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phrases (e.g. Bismillah, Guidance, Dua)..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-black/30 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER PILLS ── */}
      <section className="bg-white border-b border-stone-200 sticky top-16 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#0f3d2e] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MEANINGS GRID ── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <p className="text-stone-500 text-xs sm:text-sm font-semibold">
            Showing <strong className="text-stone-900">{filteredMeanings.length}</strong> commonly recited phrases
          </p>
          <span className="text-xs text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full font-bold">
            🌱 Beginner to Intermediate Friendly
          </span>
        </div>

        {filteredMeanings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-4xl mb-3">🔍</p>
            <h3 className="text-lg font-bold text-stone-900 mb-1">No matches found</h3>
            <p className="text-stone-500 text-sm mb-4">Try searching for another keyword or clear your filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="bg-[#0f3d2e] text-white text-xs font-bold px-5 py-2 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-7">
            {filteredMeanings.map((item: WordMeaning) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Title & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
                    <span className="text-xs font-bold text-[#0f3d2e] uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Prominent Arabic Script */}
                  <div className="bg-[#faf8f5] rounded-2xl p-5 mb-4 border border-amber-200/50 text-center">
                    <p
                      dir="rtl"
                      lang="ar"
                      className="text-2xl sm:text-3xl font-bold text-[#0f3d2e] leading-loose font-serif"
                      style={{ fontFamily: "'Amiri', 'Scheherazade New', 'Traditional Arabic', serif" }}
                    >
                      {item.arabicText}
                    </p>
                  </div>

                  {/* Transliteration */}
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
                      Pronunciation / Transliteration
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-stone-600 italic">
                      {item.transliteration}
                    </p>
                  </div>

                  {/* English Meaning */}
                  <div className="mb-5">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-0.5">
                      Meaning in English
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                      &ldquo;{item.englishMeaning}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Why It Matters Box */}
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 mt-2">
                  <span className="text-lg flex-shrink-0">💡</span>
                  <div>
                    <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-0.5">
                      Why It Matters
                    </p>
                    <p className="text-xs text-amber-950 leading-relaxed font-normal">
                      {item.whyItMatters}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* ── CALL TO ACTION SECTION ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f3d2e] to-[#0a2d20] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Live 1-on-1 Classes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Want Your Child to Understand Every Word They Recite?
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
            Our personalized classes integrate word-by-word understanding and basic Arabic vocabulary alongside sound Tajweed rules. Experience the difference with 3 free trial classes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              Book 3 Free Trial Classes →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
            >
              View Full Course Fees
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#071f17] text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-stone-700/60 pb-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-[#0f3d2e] font-bold text-sm">R</span>
              </div>
              <div className="leading-tight text-left">
                <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
                <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
              <Link href="/teachers" className="hover:text-amber-400 transition-colors">Teachers</Link>
              <Link href="/learn-the-meaning" className="text-amber-400 font-medium transition-colors">Learn the Meaning</Link>
              <Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/book-trial" className="hover:text-amber-400 transition-colors">Book Free Trial</Link>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p>&copy; {new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.</p>
            <div className="flex items-center gap-4 text-stone-400">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
