"use client";

import { useState } from "react";
import Link from "next/link";
import { TEACHERS, Teacher } from "@/data/teachers";

// ─── Minimalist Silhouette Avatar SVGs ────────────────────────────────────────

function MaleTeacherAvatar() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-20 h-20 text-amber-300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Male scholar avatar silhouette"
    >
      {/* Background circle accent */}
      <circle cx="50" cy="50" r="46" fill="#0f3d2e" stroke="#f59e0b" strokeWidth="2" />
      {/* Cap / Turban silhouette */}
      <path
        d="M32 36C32 24 40 18 50 18C60 18 68 24 68 36C68 37 32 37 32 36Z"
        fill="#f59e0b"
      />
      <path
        d="M30 36C30 34 35 32 50 32C65 32 70 34 70 36C70 39 65 41 50 41C35 41 30 39 30 36Z"
        fill="#d97706"
      />
      {/* Head silhouette */}
      <path
        d="M36 38C36 38 34 54 50 54C66 54 64 38 64 38"
        fill="#fef3c7"
      />
      {/* Beard outline / contour */}
      <path
        d="M36 44C36 57 41 64 50 64C59 64 64 57 64 44C58 48 42 48 36 44Z"
        fill="#042f22"
      />
      {/* Shoulders & robe */}
      <path
        d="M18 86C18 70 32 66 50 66C68 66 82 70 82 86V92H18V86Z"
        fill="#145c42"
      />
      <path
        d="M44 66L50 78L56 66H44Z"
        fill="#f59e0b"
      />
    </svg>
  );
}

function FemaleTeacherAvatar() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-20 h-20 text-amber-300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Female tutor avatar silhouette"
    >
      {/* Background circle accent */}
      <circle cx="50" cy="50" r="46" fill="#0f3d2e" stroke="#f59e0b" strokeWidth="2" />
      {/* Hijab drapery background */}
      <path
        d="M26 44C26 24 35 18 50 18C65 18 74 24 74 44C74 62 82 74 82 88H18C18 74 26 62 26 44Z"
        fill="#145c42"
      />
      {/* Face oval window */}
      <ellipse cx="50" cy="42" rx="14" ry="17" fill="#fef3c7" />
      {/* Inner hijab wrap frame */}
      <path
        d="M35 34C35 24 41 22 50 22C59 22 65 24 65 34C65 48 61 56 50 56C39 56 35 48 35 34Z"
        fill="none"
        stroke="#145c42"
        strokeWidth="3"
      />
      {/* Hijab front fold / chest drape */}
      <path
        d="M34 54C42 60 58 60 66 54C72 66 80 76 80 88H20C20 76 28 66 34 54Z"
        fill="#0d4a34"
      />
      <path
        d="M47 56L50 64L53 56H47Z"
        fill="#f59e0b"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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

function IconAward() {
  return (
    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007-6.75a3 3 0 10-6.007 0 3 3 0 006.007 0zM12 3v1.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function TeachersPage() {
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
                    link.name === "Teachers"
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
              <div className="pt-2 flex flex-col gap-2">
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

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white py-14 md:py-20 text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Certified Pakistani Scholars &amp; Hafiz Tutors
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Meet Our <span className="text-amber-400">Qualified Teachers</span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-5">
            Learn from Ijazah-certified scholars and experienced educators dedicated to nurturing your connection with the Holy Quran.
          </p>

          {/* Top Notice */}
          <p className="text-stone-300/80 text-xs sm:text-sm italic bg-black/20 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-white/10">
            📌 Meet a few of our dedicated tutors below - full team profiles with photos coming soon.
          </p>
        </div>
      </section>

      {/* ── TEACHER CARDS GRID ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {TEACHERS.map((teacher: Teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-lg hover:border-[#145c42]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Avatar + Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                    <div className="flex-shrink-0 rounded-2xl p-1 bg-gradient-to-br from-amber-400/20 to-emerald-800/10 shadow-inner">
                      {teacher.gender === "female" ? (
                        <FemaleTeacherAvatar />
                      ) : (
                        <MaleTeacherAvatar />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                          {teacher.name}
                        </h2>
                        {teacher.gender === "female" && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            Female Tutor
                          </span>
                        )}
                      </div>

                      <p className="text-[#145c42] font-semibold text-sm mb-2">
                        {teacher.title}
                      </p>

                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-stone-500 font-medium">
                        <IconAward />
                        <span>{teacher.yearsExperience}+ Years Teaching Experience</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialization Badges */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
                      Courses &amp; Specializations:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {teacher.specialization.map((spec) => (
                        <span
                          key={spec}
                          className="bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-[#145c42] text-xs font-semibold px-3 py-1 rounded-lg border border-stone-200/80 transition-colors"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    &ldquo;{teacher.bio}&rdquo;
                  </p>

                  {/* Qualifications Checklist */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2.5">
                      Key Qualifications &amp; Certifications:
                    </p>
                    <ul className="space-y-2">
                      {teacher.qualifications.map((qual) => (
                        <li key={qual} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                          <IconCheck />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/book-trial"
                    className="flex-1 inline-flex items-center justify-center bg-[#145c42] hover:bg-[#0f3d2e] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow"
                  >
                    Book Trial with {teacher.name.split(" ")[0]} →
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── FEMALE TUTORS HIGHLIGHT BOX ── */}
          <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-[#0f3d2e] via-[#145c42] to-[#0f3d2e] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-400/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-[#0f3d2e] flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                🧕
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">
                  Looking for a Dedicated Female Tutor?
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                  We have qualified, certified female teachers available across all time zones for sisters and young children in a comfortable, private environment.
                </p>
              </div>
            </div>
            <Link
              href="/book-trial"
              className="flex-shrink-0 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md hover:scale-105"
            >
              Request a Female Tutor →
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
              <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
              <Link href="/teachers" className="text-amber-400 font-medium transition-colors">Teachers</Link>
              <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
              <Link href="/book-trial" className="hover:text-amber-400 transition-colors">Book Free Trial</Link>
              <Link href="/register" className="hover:text-amber-400 transition-colors">Register</Link>
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
