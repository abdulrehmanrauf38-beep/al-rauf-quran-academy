"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

const VALUES = [
  {
    icon: <IconBook />,
    title: "Authentic Teaching",
    description:
      "Our scholars hold recognized Ijazah certifications and Dars-e-Nizami credentials, transmitting proper Tajweed and Makharij through authentic Islamic traditions.",
  },
  {
    icon: <IconHeart />,
    title: "Patience & Love for Learning",
    description:
      "We believe students should look forward to their Quran lessons. Our teachers focus on gentle encouragement and patience so children and adults learn to love the Quran, not fear it.",
  },
  {
    icon: <IconShield />,
    title: "Trust & Transparency",
    description:
      "No hidden fees, no long contracts, and 3 full trial classes before making any payment. We operate with complete honesty, sincerity, and Islamic ethical standards.",
  },
  {
    icon: <IconGlobe />,
    title: "Global Accessibility",
    description:
      "Flexible 1-on-1 scheduling around your busy schedule — morning, afternoon, evening, or weekend slots across the US, UK, Canada, Australia, and worldwide.",
  },
];

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    link.name === "About"
                      ? "text-amber-400 font-semibold"
                      : "text-stone-300 hover:text-amber-400"
                  }`}
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
                {menuOpen ? <IconX /> : <IconMenu />}
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

      {/* ── HERO / OUR STORY ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white py-16 md:py-24 text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Our Story &amp; Purpose
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Why We Started <br />
            <span className="text-amber-400">Al Rauf International Quran Academy</span>
          </h1>

          <p className="text-stone-200 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-light">
            We founded Al Rauf International Quran Academy with a simple yet profound vision: to make authentic, high-quality Quranic education easily accessible to Muslim families across the world — taught by qualified Pakistani scholars with deep patience, care, and personalization.
          </p>

          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-5 max-w-2xl mx-auto text-sm sm:text-base text-stone-300 italic">
            &ldquo;Our mission is to help both children and adults develop a genuine love for reciting and understanding the Holy Quran, fostering a lifelong spiritual bond rather than a stressful obligation.&rdquo;
          </div>
        </div>
      </section>

      {/* ── MISSION & VALUES ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#145c42] font-semibold text-sm uppercase tracking-widest mb-3">Our Core Principles</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
              What Drives Everything We Do
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-base">
              Every lesson, tutor pairing, and curriculum decision is guided by four foundational values.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-stone-50 rounded-3xl p-7 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-[#145c42]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm border border-stone-100">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2.5">{val.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUR'ANIC AYAH QUOTE ── */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#0f3d2e]/5 via-amber-50/30 to-[#0f3d2e]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl border-2 border-amber-400/40 shadow-xl overflow-hidden">
            {/* Gold top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />

            {/* Decorative arabesque corner */}
            <div aria-hidden="true" className="absolute top-4 right-4 opacity-[0.07]">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <polygon points="45,2 55,22 78,22 62,36 68,58 45,44 22,58 28,36 12,22 35,22" fill="#f59e0b"/>
                <polygon points="45,14 52,28 66,28 56,36 60,50 45,42 30,50 34,36 24,28 38,28" fill="#d97706"/>
                <circle cx="45" cy="45" r="6" fill="#f59e0b"/>
              </svg>
            </div>
            <div aria-hidden="true" className="absolute bottom-4 left-4 opacity-[0.07] rotate-45">
              <svg width="70" height="70" viewBox="0 0 90 90" fill="none">
                <polygon points="45,2 55,22 78,22 62,36 68,58 45,44 22,58 28,36 12,22 35,22" fill="#f59e0b"/>
                <circle cx="45" cy="45" r="6" fill="#d97706"/>
              </svg>
            </div>

            <div className="relative p-8 sm:p-12 text-center">
              {/* Eyebrow label */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/40 rounded-full px-4 py-1.5 mb-8">
                <span className="text-amber-700 text-xs font-bold uppercase tracking-widest">The First Revelation</span>
              </div>

              {/* Arabic text */}
              <p
                dir="rtl"
                lang="ar"
                className="text-2xl sm:text-4xl font-bold text-[#0f3d2e] leading-loose mb-6 font-serif"
                style={{ fontFamily: "'Amiri', 'Scheherazade New', 'Traditional Arabic', Georgia, serif" }}
              >
                ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ ﴿١﴾ خَلَقَ ٱلۡإِنسَٰنَ مِنۡ عَلَقٍ ﴿٢﴾ ٱقۡرَأۡ وَرَبُّكَ ٱلۡأَكۡرَمُ ﴿٣﴾ ٱلَّذِي عَلَّمَ بِٱلۡقَلَمِ ﴿٤﴾ عَلَّمَ ٱلۡإِنسَٰنَ مَا لَمۡ يَعۡلَمۡ ﴿٥﴾
              </p>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber-300" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="h-px w-12 bg-amber-300" />
              </div>

              {/* English translation */}
              <blockquote className="text-stone-700 text-base sm:text-xl font-medium italic leading-relaxed max-w-2xl mx-auto mb-4">
                &ldquo;Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous — who taught by the pen — taught man that which he knew not.&rdquo;
              </blockquote>

              {/* Citation */}
              <cite className="not-italic text-amber-700 font-bold text-sm tracking-wide">
                Surah Al-&lsquo;Alaq (96:1–5) — The First Verses Revealed to the Prophet Muhammad ﷺ
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY LEARN FROM PAKISTAN ── */}
      <section className="py-16 md:py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0f3d2e] to-[#145c42] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#1a5c43]">
              <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-2xl px-5 py-3 mb-6">
                <p className="text-amber-400 text-2xl font-bold tracking-wider" dir="rtl">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
              </div>
              <p className="text-stone-300 text-sm italic mb-6">
                &ldquo;The best among you are those who learn the Quran and teach it.&rdquo; — Sahih al-Bukhari
              </p>
              <div className="space-y-3.5 text-xs sm:text-sm text-stone-200 pt-4 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Centuries of authentic traditional madrasah scholarship.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Strict Tajweed recitation standards &amp; sanad certification.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Accessible per-class rates for diaspora families abroad.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image + Detailed Narrative */}
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-5 gap-7 items-start">

                {/* Image */}
                <div className="xl:col-span-2">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-amber-400/60 shadow-lg shadow-amber-900/10">
                    <Image
                      src="/images/quran-library.jpg"
                      alt="A traditional Quran library of Islamic manuscripts and scholarly texts"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 320px"
                      className="object-cover"
                    />
                    {/* Subtle gold overlay shimmer at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-amber-950/30 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text */}
                <div className="xl:col-span-3 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#145c42] rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                    Tradition &amp; Expertise
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                    Why Learn from Qualified Pakistani Scholars?
                  </h2>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    Pakistan has one of the world&apos;s strongest, most rigorous traditions of Quranic preservation and scholarship. Institutions across the country produce thousands of deeply knowledgeable Hafiz-e-Quran and Ijazah-certified Qaris each year who undergo decades of intensive training in Arabic phonetics, Tajweed rules (Makharij &amp; Sifaat), and Islamic sciences (Dars-e-Nizami).
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Teaching online enables this immense depth of traditional scholarship to connect directly with Muslim families in the UK, USA, Canada, Australia, and beyond. This allows students to receive top-tier, authentic Quran instruction in comfortable 1-on-1 sessions at accessible rates without compromising educational excellence.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HONEST STATS / TRUST ROW ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2">
              A Dedicated, Growing Academy
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              Honest standards, qualified teachers, and personal care for every student.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "100% 1-on-1", sub: "Individual Attention per Student" },
              { label: "100% Certified", sub: "Vetted Scholars & Hafiz Tutors" },
              { label: "All Time Zones", sub: "USA, UK, Canada, Australia & more" },
              { label: "3 Free Trials", sub: "Zero Obligation to Start" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col items-center justify-center hover:border-amber-400/50 transition-colors"
              >
                <span className="text-xl sm:text-2xl font-extrabold text-[#0f3d2e] mb-1">
                  {stat.label}
                </span>
                <span className="text-stone-500 text-xs sm:text-sm font-medium">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-stone-400 italic">
            🌱 Growing every day • Welcoming new students &amp; families worldwide
          </p>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f3d2e] to-[#0a2d20] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Begin Your Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to start your Quran journey with us?
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Experience our caring, structured teaching firsthand with 3 free trial classes. No credit card or commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              Book 3 Free Trial Classes →
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
            >
              Direct Student Registration
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
              <Link href="/about" className="text-amber-400 font-medium transition-colors">About</Link>
              <Link href="/teachers" className="hover:text-amber-400 transition-colors">Teachers</Link>
              <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
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
