"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadMagnetForm from "@/components/LeadMagnetForm";

// ─── Icons (inline SVG helpers) ──────────────────────────────────────────────

function IconStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

function IconCertificate() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconGift() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 109.375 7.5H12m0 0H7.5m4.5 0h4.5m-9 3.75h9m-9 0H7.5m4.5 0v8.25M7.5 11.25H4.875a1.125 1.125 0 000 2.25H7.5M16.5 11.25h2.625a1.125 1.125 0 010 2.25H16.5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 9v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <div className="mb-12 pb-12 border-b border-stone-700/60">
      <div className="max-w-xl">
        <h3 className="text-white font-bold text-base mb-1">Get Quran Learning Tips &amp; Updates</h3>
        <p className="text-stone-400 text-sm mb-4">
          Occasional tips, teaching insights, and updates from Al Rauf International Quran Academy. No spam, ever.
        </p>
        {subscribed ? (
          <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-700/60 text-emerald-400 text-sm font-semibold px-4 py-2.5 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 min-w-0 rounded-full bg-stone-800 border border-stone-700 text-white placeholder:text-stone-500 text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-md hover:shadow-amber-500/30"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { name: "Courses", href: "#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

const COURSES = [
  {
    emoji: "📖",
    title: "Noorani Qaida",
    description:
      "The perfect starting point for absolute beginners. Learn Arabic letters, pronunciation, and basic rules with patient, one-on-one guidance.",
    badge: "Beginner",
    photo: "/images/courses/noorani-qaida.jpg",
    photoAlt: "A child learning Arabic letters from Noorani Qaida with a qualified teacher",
  },
  {
    emoji: "🌙",
    title: "Quran Reading",
    description:
      "Master fluent Quran recitation with correct letter forms and connecting rules. Suitable for children and adults at every level.",
    badge: "All Levels",
    photo: "/images/courses/quran-reading.jpg",
    photoAlt: "Student reading the Holy Quran during an online class session",
  },
  {
    emoji: "🎙️",
    title: "Tajweed",
    description:
      "Elevate your recitation with proper Tajweed rules — Makharij, Sifaat, and Waqf — as taught by traditionally trained scholars.",
    badge: "Intermediate",
    photo: "/images/courses/tajweed.jpg",
    photoAlt: "A scholar demonstrating Tajweed recitation rules and Makharij pronunciation",
  },
  {
    emoji: "🕌",
    title: "Hifz (Memorization)",
    description:
      "Embark on the noble journey of memorising the Quran. Structured lesson plans with regular revision sessions for lasting retention.",
    badge: "Dedicated",
    photo: "/images/courses/hifz.jpg",
    photoAlt: "A Hafiz student memorising the Holy Quran in a focused learning environment",
  },
  {
    emoji: "📚",
    title: "Islamic Studies",
    description:
      "Learn the fundamentals of Aqeedah, Fiqh, Seerah, and Du'as in age-appropriate, engaging online sessions.",
    badge: "All Ages",
    photo: "/images/courses/islamic-studies.jpg",
    photoAlt: "Students learning Islamic Studies including Aqeedah, Fiqh, and Seerah online",
  },
];

const BENEFITS = [
  {
    title: "Personalised 1-on-1 Classes",
    detail: "Every session is dedicated solely to you — no group distractions, just focused learning at your pace.",
  },
  {
    title: "Flexible Scheduling",
    detail: "Book classes that fit around school, work, and family. Morning, evening, or weekend slots available.",
  },
  {
    title: "Qualified Pakistani Teachers",
    detail: "Our tutors hold Ijazah certifications and are experienced in teaching students of all backgrounds worldwide.",
  },
  {
    title: "Dedicated Female Tutors",
    detail: "Female students can be paired exclusively with our certified female tutors for a comfortable environment.",
  },
  {
    title: "Affordable & Transparent Pricing",
    detail: "No hidden fees. Pay per class or choose a monthly package — all with a 3-class free trial to start.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "United Kingdom",
    text: "My daughter started with Noorani Qaida and within 3 months she was reading Surah Al-Fatiha beautifully. The teacher is incredibly patient and the classes are so convenient via Google Meet.",
    stars: 5,
    initials: "SM",
  },
  {
    name: "Ahmed K.",
    location: "United States",
    text: "I had tried other apps but nothing compared to a real 1-on-1 teacher. My Tajweed has improved dramatically. Scheduling around my work was effortless and the trial classes sealed the deal.",
    stars: 5,
    initials: "AK",
  },
  {
    name: "Fatima R.",
    location: "Canada",
    text: "Having a dedicated female tutor was so important for me. The teacher is knowledgeable, encouraging, and always follows up between classes. Highly recommend to any sister looking to learn.",
    stars: 5,
    initials: "FR",
  },
];

const FOOTER_LINKS: Record<string, string[]> = {
  Courses: ["Noorani Qaida", "Quran Reading", "Tajweed", "Hifz", "Islamic Studies"],
  Company: ["About Us", "Our Teachers", "Blog", "Contact Us"],
  Support: ["FAQ", "Pricing", "Book Free Trial", "Privacy Policy"],
};

import { translations, Language } from "@/data/translations";

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>("en");

  const t = translations[lang];

  const navLinks = [
    { name: t.nav.courses, href: "#courses" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.teachers, href: "/teachers" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contact, href: "/contact" },
    { name: t.nav.register, href: "/register" },
  ];

  return (
    <div
      dir={lang === "ur" ? "rtl" : "ltr"}
      className="min-h-screen bg-stone-50 text-stone-900 antialiased transition-all duration-200"
      style={lang === "ur" ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', Tahoma, sans-serif" } : undefined}
    >

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-[#0f3d2e]/95 backdrop-blur-md border-b border-[#1a5c43]/50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-[#0f3d2e] font-bold text-sm">R</span>
              </div>
              <div className="leading-tight text-left">
                <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
                <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language Switcher + CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Language Switcher Button (Desktop & Mobile) */}
              <div className="inline-flex items-center bg-black/30 border border-amber-400/50 rounded-full p-0.5 shadow-inner">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === "en"
                      ? "bg-amber-500 text-[#0f3d2e] shadow-sm"
                      : "text-stone-300 hover:text-white"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ur")}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === "ur"
                      ? "bg-amber-500 text-[#0f3d2e] shadow-sm"
                      : "text-stone-300 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif" }}
                  aria-label="اردو میں تبدیل کریں"
                >
                  اردو
                </button>
              </div>

              <Link
                href="/book-trial"
                className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5"
              >
                {t.nav.bookTrial}
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-stone-300 hover:text-amber-400 px-2 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/book-trial"
                className="mt-3 block w-full text-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
              >
                {t.nav.bookTrial}
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#071f17] text-white"
      >
        {/* Background Image: Full edge-to-edge coverage */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/quran-stand-hero.jpg"
            alt="Holy Quran on a traditional wooden rehal stand"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Uniform Dark Emerald Overlay (60-65% opacity across the entire photo for strong text contrast) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-[#071f17]/75 md:bg-[#092b20]/70 pointer-events-none"
        />

        {/* Islamic geometric pattern overlay - Traditional 8-point Khatam Star Tessellation */}
        <div aria-hidden="true" className="absolute inset-0 z-[2] opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamicHero" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="#f59e0b" strokeLinejoin="round" strokeLinecap="round">
                  {/* Central 8-Pointed Star (Overlapping rotated squares) */}
                  <rect x="20.71" y="20.71" width="58.58" height="58.58" strokeWidth="0.8" />
                  <rect x="20.71" y="20.71" width="58.58" height="58.58" transform="rotate(45 50 50)" strokeWidth="0.8" />

                  {/* Inner Concentric 8-Point Star */}
                  <rect x="32.5" y="32.5" width="35" height="35" stroke="#fbbf24" strokeWidth="0.5" />
                  <rect x="32.5" y="32.5" width="35" height="35" transform="rotate(45 50 50)" stroke="#fbbf24" strokeWidth="0.5" />

                  {/* Central Octagon Nucleus & Center Point */}
                  <polygon points="45,38 55,38 62,45 62,55 55,62 45,62 38,55 38,45" stroke="#fbbf24" strokeWidth="0.5" fill="#f59e0b" fillOpacity="0.12" />
                  <circle cx="50" cy="50" r="2.5" fill="#f59e0b" fillOpacity="0.4" strokeWidth="0.4" />

                  {/* Corner 8-Point Stars (Seamless Grid Repeats) */}
                  {/* Top-Left (0,0) */}
                  <rect x="-29.29" y="-29.29" width="58.58" height="58.58" strokeWidth="0.8" />
                  <rect x="-29.29" y="-29.29" width="58.58" height="58.58" transform="rotate(45 0 0)" strokeWidth="0.8" />
                  <rect x="-17.5" y="-17.5" width="35" height="35" stroke="#fbbf24" strokeWidth="0.5" />
                  <rect x="-17.5" y="-17.5" width="35" height="35" transform="rotate(45 0 0)" stroke="#fbbf24" strokeWidth="0.5" />

                  {/* Top-Right (100,0) */}
                  <rect x="70.71" y="-29.29" width="58.58" height="58.58" strokeWidth="0.8" />
                  <rect x="70.71" y="-29.29" width="58.58" height="58.58" transform="rotate(45 100 0)" strokeWidth="0.8" />
                  <rect x="82.5" y="-17.5" width="35" height="35" stroke="#fbbf24" strokeWidth="0.5" />
                  <rect x="82.5" y="-17.5" width="35" height="35" transform="rotate(45 100 0)" stroke="#fbbf24" strokeWidth="0.5" />

                  {/* Bottom-Left (0,100) */}
                  <rect x="-29.29" y="70.71" width="58.58" height="58.58" strokeWidth="0.8" />
                  <rect x="-29.29" y="70.71" width="58.58" height="58.58" transform="rotate(45 0 100)" strokeWidth="0.8" />
                  <rect x="-17.5" y="82.5" width="35" height="35" stroke="#fbbf24" strokeWidth="0.5" />
                  <rect x="-17.5" y="82.5" width="35" height="35" transform="rotate(45 0 100)" stroke="#fbbf24" strokeWidth="0.5" />

                  {/* Bottom-Right (100,100) */}
                  <rect x="70.71" y="70.71" width="58.58" height="58.58" strokeWidth="0.8" />
                  <rect x="70.71" y="70.71" width="58.58" height="58.58" transform="rotate(45 100 100)" strokeWidth="0.8" />
                  <rect x="82.5" y="82.5" width="35" height="35" stroke="#fbbf24" strokeWidth="0.5" />
                  <rect x="82.5" y="82.5" width="35" height="35" transform="rotate(45 100 100)" stroke="#fbbf24" strokeWidth="0.5" />

                  {/* Interlocking Edge Diamonds (Connecting Stars into Continuous Tessellation) */}
                  <polygon points="50,8.58 58.58,0 50,-8.58 41.42,0" strokeWidth="0.6" />
                  <polygon points="50,91.42 58.58,100 50,108.58 41.42,100" strokeWidth="0.6" />
                  <polygon points="8.58,50 0,58.58 -8.58,50 0,41.42" strokeWidth="0.6" />
                  <polygon points="91.42,50 100,58.58 108.58,50 100,41.42" strokeWidth="0.6" />

                  {/* Interconnecting Alignment Straps */}
                  <line x1="50" y1="8.58" x2="50" y2="20.71" strokeWidth="0.6" />
                  <line x1="50" y1="79.29" x2="50" y2="91.42" strokeWidth="0.6" />
                  <line x1="8.58" y1="50" x2="20.71" y2="50" strokeWidth="0.6" />
                  <line x1="79.29" y1="50" x2="91.42" y2="50" strokeWidth="0.6" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamicHero)"/>
          </svg>
        </div>

        {/* Decorative radial glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-[2] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 z-[2] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-36">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
                {t.hero.trialBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              {t.hero.headline}{" "}
              <span className="text-amber-400">{t.hero.headlineHighlight}</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed mb-4 max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                `✨ ${t.hero.bullet1}`,
                `👩‍🏫 ${t.hero.bullet2}`,
                `🎥 ${t.hero.bullet3}`,
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center bg-white/10 border border-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-trial"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
              >
                {t.hero.bookTrialBtn}
              </Link>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                {t.hero.exploreBtn}
              </a>
            </div>

            {/* Google Meet note */}
            <div className="flex items-center gap-2 mt-6 text-stone-400 text-sm">
              <IconVideo />
              <span>
                {lang === "ur" ? (
                  <>تمام کلاسز بغیر کسی ڈاؤنلوڈ کے لائیو <strong className="text-stone-300">گوگل میٹ</strong> پر ہوتی ہیں۔</>
                ) : (
                  <>All classes are conducted live via <strong className="text-stone-300">Google Meet</strong> — no downloads needed.</>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED-BY COUNTRY BAR ── */}
      <section aria-label="Trusted by Muslim families worldwide" className="bg-[#0f3d2e] border-b border-[#1a5c43]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5">
            {/* Heading */}
            <span className="text-stone-400 text-xs font-semibold uppercase tracking-widest whitespace-nowrap flex-shrink-0">
              {lang === "ur" ? "دنیا بھر کے مسلم خاندانوں کا اعتماد" : "Trusted by Muslim families in"}
            </span>

            {/* Divider (hidden on mobile when items wrap) */}
            <span className="hidden sm:block w-px h-4 bg-[#1a5c43]/80 flex-shrink-0" aria-hidden="true" />

            {/* Country pills */}
            {[
              { flag: "🇺🇸", name: lang === "ur" ? "امریکہ" : "United States" },
              { flag: "🇬🇧", name: lang === "ur" ? "برطانیہ" : "United Kingdom" },
              { flag: "🇨🇦", name: lang === "ur" ? "کینیڈا" : "Canada" },
              { flag: "🇦🇺", name: lang === "ur" ? "آسٹریلیا" : "Australia" },
              { flag: "🇵🇰", name: lang === "ur" ? "پاکستان" : "Pakistan" },
            ].map(({ flag, name }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 text-stone-300 hover:text-amber-300 text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 whitespace-nowrap select-none"
              >
                <span role="img" aria-label={name} className="text-sm leading-none">{flag}</span>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {[
              { icon: <IconCertificate />, label: t.stats.stat3Label, sub: t.stats.stat3Value },
              { icon: <IconUsers />, label: t.hero.bullet1, sub: t.stats.stat2Label },
              { icon: <IconGlobe />, label: t.stats.stat4Label, sub: t.stats.stat4Value },
              { icon: <IconGift />, label: t.stats.stat1Label, sub: t.stats.stat1Value },
            ].map(({ icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-emerald-50 transition-colors group"
              >
                <div className="text-[#145c42] group-hover:text-amber-600 transition-colors">{icon}</div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm md:text-base">{label}</p>
                  <p className="text-stone-500 text-xs md:text-sm mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#145c42] font-semibold text-sm uppercase tracking-widest mb-3">{t.courses.tag}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">{t.courses.title}</h2>
            <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg">
              {t.courses.subtitle}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, idx) => {
              const item = t.courses.items[idx] || {
                title: course.title,
                description: course.description,
                badge: course.badge,
              };

              return (
                <div
                  key={course.title}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:border-[#145c42]/40 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Course Photo */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={course.photo}
                      alt={course.photoAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge overlaid on photo */}
                    <span className="absolute top-3 end-3 text-xs font-semibold text-[#145c42] bg-white/90 backdrop-blur-sm border border-emerald-200 px-2.5 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card content below image */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl group-hover:bg-emerald-100 transition-colors flex-shrink-0">
                        {course.emoji}
                      </div>
                      <h3 className="text-base font-bold text-stone-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed flex-1">{item.description}</p>

                    {/* Certificate Badge & Link */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md">
                        🏆 {lang === "ur" ? "آفیشل سرٹیفکیٹ" : "Official Certificate"}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center text-[#145c42] hover:text-amber-600 font-semibold text-xs transition-colors group/link"
                      >
                        {t.courses.viewDetails}
                        <span className="ms-1 group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA card */}
            <div className="bg-gradient-to-br from-[#0f3d2e] to-[#145c42] rounded-2xl p-6 flex flex-col items-start justify-between text-white shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl mb-4">
                  🌟
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {lang === "ur" ? "کہاں سے شروع کریں، سمجھ نہیں آ رہا؟" : "Not Sure Where to Start?"}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-3">
                  {lang === "ur"
                    ? "مفت ٹرائل کلاس لیں تاکہ استاد بچے کی موجودہ سطح کا جائزہ لے کر مناسب کورس تجویز کر سکیں۔"
                    : "Book a free trial class and let our teacher assess your level and recommend the best course for you."}
                </p>
                <p className="text-amber-400 text-xs font-semibold">
                  {lang === "ur" ? "🏷️ فیس صرف $3 فی کلاس سے شروع • اسلامیات مفت!" : "🏷️ Rates from only $3/class • Islamic Studies FREE!"}
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full">
                <Link
                  href="/book-trial"
                  className="flex-1 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-colors text-center"
                >
                  {t.courses.bookTrial}
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold text-xs sm:text-sm px-3.5 py-2.5 rounded-full transition-colors text-center"
                >
                  {t.nav.pricing}
                </Link>
              </div>
            </div>
          </div>

          {/* View Pricing Banner below Courses Grid */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-stone-200/80 shadow-sm rounded-2xl px-6 py-4">
              <div className="text-start">
                <p className="font-bold text-stone-900 text-sm sm:text-base">
                  {t.pricingPreview.title}
                </p>
                <p className="text-stone-500 text-xs sm:text-sm">
                  {t.pricingPreview.startingFrom}
                </p>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-[#145c42] hover:bg-[#0f3d2e] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow hover:shadow-md"
              >
                {t.pricingPreview.viewPricingBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE OF COMPLETION SHOWCASE ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#faf7f0] via-[#f7f2e7] to-[#ede4d1] border-y border-amber-200/70 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Descriptive Content & Value Points */}
            <div className="lg:col-span-5 text-center lg:text-start space-y-5">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-3.5 py-1">
                <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">
                  {t.certificate.tag}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e] leading-tight">
                {t.certificate.title}
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
                {t.certificate.desc}
              </p>

              {/* Benefit highlights */}
              <div className="space-y-3.5 pt-2 text-start">
                {[
                  {
                    title: t.certificate.feature1,
                    desc: lang === "ur" ? "نورانی قاعدہ، ناظرہ، تجوید یا حفظ کی تکمیل پر باضابطہ سند۔" : "Awarded for completing Noorani Qaida, Quran Reading, Tajweed, or Hifz modules.",
                  },
                  {
                    title: t.certificate.feature2,
                    desc: lang === "ur" ? "ہر سند پر اکیڈمی کا تصدیقی ریکارڈ اور گولڈن مہر درج ہوتی ہے۔" : "Official signed certificate with verified registration ID.",
                  },
                  {
                    title: t.certificate.feature3,
                    desc: lang === "ur" ? "بچے کی حوصلہ افزائی کے لیے پرنٹ کے قابل ہائی کوالٹی سند۔" : "High-resolution printable document to frame and celebrate.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-3.5 border border-amber-200/80 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/book-trial"
                  className="inline-flex items-center justify-center bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {t.hero.bookTrialBtn}
                </Link>
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
                >
                  {t.hero.exploreBtn}
                </a>
              </div>
            </div>

            {/* Right Column: Visual Certificate Mockup Showcase */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[620px]">
                
                {/* Floating "Official Badge" */}
                <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-amber-500 text-[#0f3d2e] text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5">
                  <span>🏆 {lang === "ur" ? "آفیشل سند شامل ہے" : "Official Certificate Included"}</span>
                </div>

                {/* Certificate Showcase Card */}
                <div
                  className="bg-[#fffdfa] rounded-3xl p-6 sm:p-8 border-4 border-amber-400/80 shadow-2xl relative select-none overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
                  style={{
                    boxShadow: "0 20px 40px -10px rgba(15, 61, 46, 0.25)",
                  }}
                >
                  {/* Decorative Double Border */}
                  <div className="absolute inset-2 sm:inset-3 border-2 border-[#145c42]/80 rounded-2xl pointer-events-none" />
                  <div className="absolute inset-3.5 sm:inset-4.5 border border-amber-300/80 rounded-xl pointer-events-none" />

                  {/* Corner Khatam 8-Point Stars */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 w-6 h-6 text-amber-500 pointer-events-none">
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="2" />
                      <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="20" cy="20" r="3" fill="#145c42" />
                    </svg>
                  </div>
                  <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-6 h-6 text-amber-500 pointer-events-none">
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="2" />
                      <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="20" cy="20" r="3" fill="#145c42" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 w-6 h-6 text-amber-500 pointer-events-none">
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="2" />
                      <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="20" cy="20" r="3" fill="#145c42" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 w-6 h-6 text-amber-500 pointer-events-none">
                    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                      <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="2" />
                      <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="2" />
                      <circle cx="20" cy="20" r="3" fill="#145c42" />
                    </svg>
                  </div>

                  {/* Header: Bismillah & Academy Title */}
                  <div className="relative text-center pt-1">
                    <p
                      dir="rtl"
                      lang="ar"
                      className="text-amber-800 text-sm sm:text-base font-bold font-serif tracking-widest mb-1"
                      style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
                    >
                      بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                    </p>
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xs">
                        <span className="text-[#0f3d2e] font-extrabold text-[10px]">R</span>
                      </div>
                      <span className="text-[#0f3d2e] font-bold text-xs uppercase tracking-wider">
                        Al Rauf International Quran Academy
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-extrabold uppercase tracking-widest text-[#0f3d2e]"
                      style={{ fontFamily: "Georgia, Cambria, serif", letterSpacing: "0.12em" }}
                    >
                      Certificate of Completion
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <div className="h-[1px] w-14 bg-amber-400" />
                      <span className="text-amber-600 text-[10px]">✦ ✦ ✦</span>
                      <div className="h-[1px] w-14 bg-amber-400" />
                    </div>
                  </div>

                  {/* Body: Student Name & Course */}
                  <div className="relative text-center my-4 space-y-1.5">
                    <p className="text-stone-500 font-serif italic text-xs">
                      This is proudly presented to
                    </p>
                    <p
                      className="text-2xl sm:text-3xl font-bold text-[#0f3d2e] capitalize tracking-wide font-serif border-b border-amber-400/70 inline-block px-6 pb-1"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      Ahmed Khan
                    </p>
                    <p className="text-stone-600 text-xs pt-1">
                      in recognition of successful completion of the prescribed curriculum for
                    </p>
                    <p
                      className="text-base sm:text-lg font-bold text-amber-700 uppercase font-serif tracking-wide"
                      style={{ fontFamily: "Georgia, Cambria, serif" }}
                    >
                      Noorani Qaida (Level 1)
                    </p>
                  </div>

                  {/* Footer: Date, Seal, Signature */}
                  <div className="relative grid grid-cols-3 items-end pt-3 border-t border-stone-200/80 text-[10px]">
                    <div className="text-left space-y-0.5">
                      <p className="text-stone-400 uppercase font-semibold">Date of Issue</p>
                      <p className="font-bold text-stone-800 font-serif">August 2026</p>
                      <p className="text-stone-400 font-mono text-[9px]">ID: GQI-2026-8941</p>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 p-0.5 shadow-md flex items-center justify-center text-center">
                        <div className="w-full h-full rounded-full border border-dashed border-amber-900/40 bg-amber-400/90 flex flex-col items-center justify-center p-0.5 text-[#0f3d2e]">
                          <span className="text-[6px] font-extrabold uppercase leading-none">OFFICIAL</span>
                          <span className="text-xs">🌟</span>
                          <span className="text-[5.5px] font-bold uppercase leading-none">ACADEMY</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-0.5">
                      <span
                        className="text-base text-[#0f3d2e] font-serif italic block"
                        style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive, serif" }}
                      >
                        Hafiz Abdul Rauf
                      </span>
                      <div className="h-[1px] w-28 ml-auto bg-stone-400" />
                      <p className="font-bold text-[#0f3d2e]">Hafiz Abdul Rauf</p>
                      <p className="text-stone-400 text-[9px]">Founder &amp; Director</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <div>
              <p className="text-[#145c42] font-semibold text-sm uppercase tracking-widest mb-3">{t.whyChooseUs.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-6 leading-tight">
                {t.whyChooseUs.title}
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                {t.whyChooseUs.subtitle}
              </p>

              <ul className="space-y-5">
                {t.whyChooseUs.benefits.map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-[#145c42] flex items-center justify-center">
                      <IconCheck />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">{b.title}</p>
                      <p className="text-stone-500 text-sm mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: stats card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f3d2e] to-[#1a5c43] rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-[#0f3d2e]/30">
                {/* Arabic Bismillah */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-2xl px-6 py-4 mb-4">
                    <p className="text-amber-400 text-3xl font-bold tracking-wider" dir="rtl">
                      بِسْمِ اللَّهِ
                    </p>
                  </div>
                  <p className="text-stone-300 text-sm italic">{lang === "ur" ? "اللہ کے بابرکت نام سے" : "In the name of Allah"}</p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: lang === "ur" ? "ممالک" : "Countries Served", value: "30+" },
                    { label: lang === "ur" ? "زیرِ تعلیم طلبہ" : "Students Enrolled", value: "500+" },
                    { label: lang === "ur" ? "ہفتہ وار کلاسز" : "Classes per Week", value: "1,200+" },
                    { label: lang === "ur" ? "اطمینان کی شرح" : "Satisfaction Rate", value: "98%" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-stone-300 text-sm">{label}</span>
                      <span className="text-amber-400 font-bold text-xl">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative glows */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400 rounded-2xl rotate-12 opacity-20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-xl -rotate-6 opacity-20 blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL PROGRESS YOU CAN SEE ── */}
      <section className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#145c42] rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                {t.progressReport.tag}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
                {t.progressReport.title}
              </h2>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                {t.progressReport.desc}
              </p>

              {/* 4 Feature Points */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    icon: "📖",
                    title: lang === "ur" ? "پڑھا گیا سبق" : "What We Covered",
                    desc: lang === "ur" ? "کلاس میں پڑھی گئی آیات، حروف اور تجوید کے قواعد۔" : "Exact Ayahs, letters, or Qaida rules practiced during the session.",
                  },
                  {
                    icon: "🌟",
                    title: lang === "ur" ? "بچے کی خوبیاں" : "Strengths & Milestones",
                    desc: lang === "ur" ? "بچے کی محنت اور اچھے تلفظ پر مثبت حوصلہ افزائی۔" : "Positive encouragement on where your child excelled.",
                  },
                  {
                    icon: "🎯",
                    title: lang === "ur" ? "مشق کے نکات" : "Areas to Practice",
                    desc: lang === "ur" ? "تجوید اور درست ادائیگی کے لیے ضروری توجہ۔" : "Constructive focus areas on Tajweed & pronunciation.",
                  },
                  {
                    icon: "📝",
                    title: lang === "ur" ? "ہوم ورک و اگلا سبق" : "Homework & Next Steps",
                    desc: lang === "ur" ? "اگلی کلاس تک گھر پر دہرائی کی واضح ہدایات۔" : "Clear guidance on what to revise between classes.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm hover:border-[#145c42]/40 transition-colors"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-stone-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/book-trial"
                  className="inline-flex items-center gap-2 bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {t.hero.bookTrialBtn}
                </Link>
              </div>
            </div>

            {/* Right: Sample Progress Report Mockup Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-300/80 shadow-xl relative">
                
                {/* Floating Tag */}
                <div className="absolute -top-3.5 end-6 bg-amber-500 text-[#0f3d2e] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  ✨ {lang === "ur" ? "ہر کلاس کے بعد ارسال" : "Sent After Every Class"}
                </div>

                {/* Card Header */}
                <div className="bg-[#0f3d2e] text-white p-4 rounded-2xl text-center mb-4">
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-[#0f3d2e] font-extrabold text-xs flex items-center justify-center mx-auto mb-1.5 shadow">
                    R
                  </div>
                  <p className="font-bold text-sm">Al Rauf International Quran Academy</p>
                  <p className="text-amber-400 text-[10px] uppercase font-bold tracking-wider">
                    {lang === "ur" ? "طالب علم کی تعلیمی رپورٹ" : "Student Class Progress Report"}
                  </p>
                </div>

                {/* Meta details */}
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 mb-3 text-xs grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-stone-400 text-[10px] block">{lang === "ur" ? "طالب علم" : "Student"}</span>
                    <span className="font-bold text-stone-900">{lang === "ur" ? "زید علی" : "Zayd Ali"}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] block">{lang === "ur" ? "کورس" : "Course"}</span>
                    <span className="font-semibold text-emerald-800">{lang === "ur" ? "نورانی قاعدہ" : "Noorani Qaida"}</span>
                  </div>
                </div>

                {/* Report snippets */}
                <div className="space-y-2.5 text-xs">
                  <div className="bg-stone-50/80 p-3 rounded-xl border-s-4 border-[#145c42]">
                    <p className="font-bold text-[#0f3d2e] text-[11px]">
                      📖 {lang === "ur" ? "آج کا پڑھا گیا سبق:" : "Covered This Class:"}
                    </p>
                    <p className="text-stone-600 mt-0.5 leading-relaxed text-[11px]">
                      {lang === "ur"
                        ? "سبق نمبر ۶ (تنوین کے قواعد)۔ حروفی حلقی کی درست ادائیگی کے ساتھ مشق کروائی گئی۔"
                        : "Lesson 6 (Tanween rules). Practiced connecting throat letters accurately."}
                    </p>
                  </div>

                  <div className="bg-emerald-50/70 p-3 rounded-xl border-s-4 border-emerald-500">
                    <p className="font-bold text-emerald-900 text-[11px]">
                      🌟 {lang === "ur" ? "خوبیاں:" : "Strengths:"}
                    </p>
                    <p className="text-emerald-800 mt-0.5 leading-relaxed text-[11px]">
                      {lang === "ur"
                        ? "ع اور ح کے مخرج کی ادائیگی بہت عمدہ رہی۔ ماشاءاللہ!"
                        : "Great articulation of 'Ayn and Ha. Enthusiastic recitation!"}
                    </p>
                  </div>

                  <div className="bg-amber-50/70 p-3 rounded-xl border-s-4 border-amber-500">
                    <p className="font-bold text-amber-900 text-[11px]">
                      🎯 {lang === "ur" ? "مزید مشق:" : "Practice Focus:"}
                    </p>
                    <p className="text-amber-800 mt-0.5 leading-relaxed text-[11px]">
                      {lang === "ur"
                        ? "ق اور ک میں باریک اور موٹے حرف کا فرق واضح کرنا ہے۔"
                        : "Light vs heavy letters (Qaf vs Kaf). Brief pause on double vowels."}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border-s-4 border-slate-400">
                    <p className="font-bold text-slate-800 text-[11px]">
                      📝 {lang === "ur" ? "ہوم ورک:" : "Homework:"}
                    </p>
                    <p className="text-slate-600 mt-0.5 leading-relaxed text-[11px]">
                      {lang === "ur"
                        ? "اگلی کلاس سے قبل سبق نمبر ۶ کی لائن ۳ سے ۸ تک دہرائی کریں۔"
                        : "Revise Lesson 6, Lines 3-8 before next session."}
                    </p>
                  </div>
                </div>

                <p className="text-center text-[10px] text-stone-400 mt-4 pt-3 border-t border-stone-100">
                  📬 {lang === "ur" ? "براہِ راست والدین کی ای میل اور واٹس ایپ پر ارسال" : "Delivered straight to parent email & WhatsApp"}
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOUNDER'S MESSAGE ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#faf7f0] via-[#f5efe2] to-[#ede4d1] border-y border-amber-200/60 relative overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-xl shadow-amber-900/5 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Founder Photo */}
            <div className="flex-shrink-0 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-4 border-amber-400/60 shadow-lg shadow-amber-600/10 bg-amber-100">
                <Image
                  src="/images/founder.jpeg"
                  alt="Hafiz Abdul Rauf - Founder & Director"
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  {t.founder.name}
                </h3>
                <p className="text-amber-700 font-semibold text-xs sm:text-sm mt-0.5">
                  {t.founder.role}
                </p>
                <p className="text-stone-500 text-xs mt-0.5">
                  Al Rauf International Quran Academy
                </p>
              </div>
            </div>

            {/* Founder Message Content */}
            <div className="flex-1 space-y-4 text-start">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-3.5 py-1">
                <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">
                  {t.founder.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e] leading-tight">
                {t.founder.quote}
              </h2>

              <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                <p>{t.founder.p1}</p>
                <p>{t.founder.p2}</p>
                <p>{t.founder.p3}</p>
              </div>

              <div className="pt-3 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[#0f3d2e]">
                  <span className="font-bold font-serif text-base" dir="rtl">بارك الله فيكم</span>
                  <span className="text-stone-600 font-normal ms-2">({t.founder.dua})</span>
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#145c42] hover:text-amber-700 transition-colors group"
                >
                  {t.founder.readStory} <span className="ms-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

          </div>

          {/* ── STUDENT SUCCESS STORY CARD ── */}
          <div className="mt-8 bg-white/85 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-xl shadow-amber-900/5">
            <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-3.5 py-1">
                <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">
                  {t.studentStory.tag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e]">
                {t.studentStory.title}
              </h3>
              <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                {t.studentStory.desc}
              </p>
            </div>

            {/* Video Player Container */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-amber-400/60 shadow-2xl shadow-amber-950/15 bg-stone-900">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                >
                  <source src="/videos/student-recitation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-xs text-stone-500 mt-3 italic">
                {t.studentStory.videoHint}
              </p>
            </div>

            {/* Certificates Showcase */}
            <div className="max-w-4xl mx-auto pt-8 border-t border-amber-200/60">
              <div className="text-center mb-6">
                <p className="text-amber-800 font-bold text-xs uppercase tracking-widest">
                  {t.studentStory.certTag}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Certificate 1 */}
                <div className="flex flex-col items-center group">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-3 border-amber-400/80 shadow-md group-hover:shadow-xl transition-all duration-300 bg-stone-50">
                    <Image
                      src="/images/certificate-1.jpeg"
                      alt="International Quran Competition Certificate"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-stone-600 text-xs font-semibold mt-3 text-center">
                    {t.studentStory.certCaption}
                  </p>
                </div>

                {/* Certificate 2 */}
                <div className="flex flex-col items-center group">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-3 border-amber-400/80 shadow-md group-hover:shadow-xl transition-all duration-300 bg-stone-50">
                    <Image
                      src="/images/certificate-2.jpeg"
                      alt="International Quran Competition Certificate"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-stone-600 text-xs font-semibold mt-3 text-center">
                    {t.studentStory.certCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#145c42] font-semibold text-sm uppercase tracking-widest mb-3">{t.testimonials.tag}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, idx) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:border-[#145c42]/30 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} filled={true} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#145c42] to-[#0f3d2e] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {idx === 0 ? "FK" : idx === 1 ? "TM" : "ZA"}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{item.name}</p>
                    <p className="text-stone-500 text-xs">{item.location} • {item.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below testimonials */}
          <div className="text-center mt-12">
            <p className="text-stone-600 mb-4">
              {lang === "ur" ? "دنیا بھر کے سینکڑوں مطمئن طلبہ اور والدین کا حصہ بنیں۔" : "Join hundreds of satisfied students around the world."}
            </p>
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-[#145c42] hover:bg-[#0f3d2e] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#145c42]/30 hover:-translate-y-0.5"
            >
              {t.hero.bookTrialBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* ── WE TEACH MEANING, NOT JUST MEMORIZATION ── */}
      <section className="py-20 md:py-28 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-3.5 py-1 mb-4">
              <span className="text-amber-800 text-xs font-bold uppercase tracking-wider">
                {t.learnMeaning.tag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4 leading-tight">
              {t.learnMeaning.title}
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              {t.learnMeaning.desc}
            </p>
          </div>

          {/* Sample Cards Preview */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: lang === "ur" ? "تسمیہ (بسم اللہ)" : "Bismillah",
                arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
                meaning: lang === "ur" ? "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم فرمانے والا ہے۔" : "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
                insight: lang === "ur" ? "ہر کام سے پہلے اسے پڑھنے سے اللہ تعالیٰ کی رحمت اور حفاظت حاصل ہوتی ہے۔" : "Saying this before any action invites Allah's divine blessing and protection.",
              },
              {
                title: lang === "ur" ? "تحمید (الحمد للہ)" : "Alhamdulillah",
                arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                transliteration: "Al-ḥamdu lillāhi Rabbil-ʿālamīn",
                meaning: lang === "ur" ? "تمام تعریفیں اور شکر اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔" : "All praise and gratitude belong to Allah alone, the Lord of all the worlds.",
                insight: lang === "ur" ? "یہ کلمہ انسان کے دل میں رب کی نعمتوں پر حقیقی شکر گزاری پیدا کرتا ہے۔" : "Instills heartfelt gratitude in children for every blessing in their daily lives.",
              },
              {
                title: lang === "ur" ? "آیت الکرسی" : "Ayat-ul-Kursi (Opening)",
                arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
                transliteration: "Allāhu lā ilāha illā Huwal-Ḥayyul-Qayyūm",
                meaning: lang === "ur" ? "اللہ، اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ اور سب کو قائم رکھنے والا ہے۔" : "Allah — there is no deity except Him, the Ever-Living, the Sustainer of all existence.",
                insight: lang === "ur" ? "اس مبارک آیت سے دل کو دائمی سکون اور اللہ پر توکل نصیب ہوتا ہے۔" : "Brings true peace of mind knowing Allah is always watching over and protecting us.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-stone-50 rounded-3xl p-6 border border-stone-200 shadow-xs hover:border-amber-400/60 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-200/80">
                    <span className="text-xs font-bold text-[#0f3d2e] uppercase tracking-wider">
                      {card.title}
                    </span>
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md">
                      {lang === "ur" ? "نمونہ سبق" : "Sample Lesson"}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 mb-3 border border-amber-200/40 text-center">
                    <p
                      dir="rtl"
                      lang="ar"
                      className="text-xl sm:text-2xl font-bold text-[#0f3d2e] leading-loose font-serif"
                      style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
                    >
                      {card.arabic}
                    </p>
                  </div>

                  <p className="text-xs text-stone-500 italic mb-2">
                    {card.transliteration}
                  </p>

                  <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug mb-3">
                    &ldquo;{card.meaning}&rdquo;
                  </p>
                </div>

                <div className="bg-amber-50/90 rounded-xl p-3 border border-amber-200/70 text-[11px] text-amber-950 leading-relaxed">
                  <strong>💡 {lang === "ur" ? "سبق آموز نکتہ:" : "Why it matters:"}</strong> {card.insight}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/learn-the-meaning"
              className="inline-flex items-center gap-2 bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{t.learnMeaning.cta}</span>
            </Link>
            <Link
              href="/book-trial"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{t.hero.bookTrialBtn}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── FREE LEAD MAGNET PROMO SECTION ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white relative overflow-hidden border-t border-[#1a5c43]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-amber-400/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Column: Headline, Copy, and Form */}
            <div className="flex-1 text-center lg:text-start space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 rounded-full px-3.5 py-1">
                <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                  🎁 {lang === "ur" ? "مفت تعلیمی تحفہ" : "Free Downloadable Resource"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white">
                {lang === "ur" ? "مفت عربی حروفِ تہجی چارٹ" : "Free Arabic Alphabet Chart"}
              </h2>

              <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-xl">
                {lang === "ur"
                  ? "آج ہی ہمارا خوبصورت پرنٹ ایبل عربی حروف تہجی چارٹ ڈاؤنلوڈ کریں — تمام ۲۸ حروف، تلفظ اور درست مخارج کی رہنمائی کے ساتھ۔"
                  : "Get started today with our free printable Arabic Alphabet Chart — perfect for beginners and children. Covers all 28 letters, clear English transliterations, and Makhārij pronunciation points."}
              </p>

              <div className="pt-2">
                <LeadMagnetForm source="homepage-lead-magnet" />
              </div>
            </div>

            {/* Right Column: Visual Preview Card */}
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <Link
                href="/resources/arabic-alphabet-chart"
                className="group relative block bg-white text-stone-900 rounded-3xl p-6 sm:p-7 border-2 border-amber-400/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 max-w-xs text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-3xl mx-auto mb-3 shadow-inner">
                  📖
                </div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-2">
                  {lang === "ur" ? "فوری رسائی" : "Instant Access"}
                </span>
                <p className="font-extrabold text-stone-900 text-lg mb-1 group-hover:text-[#0f3d2e] transition-colors">
                  {lang === "ur" ? "عربی حروف تہجی چارٹ" : "The Arabic Alphabet Chart"}
                </p>
                <p className="text-stone-500 text-xs mb-4 leading-relaxed">
                  {lang === "ur" ? "تمام ۲۸ حروف • تلفظ کی کلید • A4 پرنٹ ایبل" : "All 28 Letters • Pronunciation Keys • High-Resolution Printable A4"}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-[#145c42] group-hover:text-amber-600 transition-colors">
                  {lang === "ur" ? "چارٹ دیکھیں" : "View Printable Chart"} <span className="ms-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT / BOOK TRIAL BANNER ── */}
      <section id="contact" className="relative py-16 md:py-20 bg-gradient-to-br from-[#0f3d2e] to-[#0a2d20] text-white overflow-hidden">
        {/* Islamic geometric pattern - Traditional 8-point Khatam Star Tessellation */}
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamicCta" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="#f59e0b" strokeLinejoin="round" strokeLinecap="round">
                  {/* Central 8-Pointed Star */}
                  <rect x="16.57" y="16.57" width="46.86" height="46.86" strokeWidth="0.75" />
                  <rect x="16.57" y="16.57" width="46.86" height="46.86" transform="rotate(45 40 40)" strokeWidth="0.75" />
                  <rect x="26" y="26" width="28" height="28" stroke="#fbbf24" strokeWidth="0.45" />
                  <rect x="26" y="26" width="28" height="28" transform="rotate(45 40 40)" stroke="#fbbf24" strokeWidth="0.45" />
                  <polygon points="36,30 44,30 50,36 50,44 44,50 36,50 30,44 30,36" stroke="#fbbf24" strokeWidth="0.45" fill="#f59e0b" fillOpacity="0.1" />

                  {/* Corner Repeats */}
                  <rect x="-23.43" y="-23.43" width="46.86" height="46.86" strokeWidth="0.75" />
                  <rect x="-23.43" y="-23.43" width="46.86" height="46.86" transform="rotate(45 0 0)" strokeWidth="0.75" />

                  <rect x="56.57" y="-23.43" width="46.86" height="46.86" strokeWidth="0.75" />
                  <rect x="56.57" y="-23.43" width="46.86" height="46.86" transform="rotate(45 80 0)" strokeWidth="0.75" />

                  <rect x="-23.43" y="56.57" width="46.86" height="46.86" strokeWidth="0.75" />
                  <rect x="-23.43" y="56.57" width="46.86" height="46.86" transform="rotate(45 0 80)" strokeWidth="0.75" />

                  <rect x="56.57" y="56.57" width="46.86" height="46.86" strokeWidth="0.75" />
                  <rect x="56.57" y="56.57" width="46.86" height="46.86" transform="rotate(45 80 80)" strokeWidth="0.75" />

                  {/* Connecting Rhombs */}
                  <polygon points="40,6.86 46.86,0 40,-6.86 33.14,0" strokeWidth="0.55" />
                  <polygon points="40,73.14 46.86,80 40,86.86 33.14,80" strokeWidth="0.55" />
                  <polygon points="6.86,40 0,46.86 -6.86,40 0,33.14" strokeWidth="0.55" />
                  <polygon points="73.14,40 80,46.86 86.86,40 80,33.14" strokeWidth="0.55" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamicCta)"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              {t.finalCta.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            {t.finalCta.title}
          </h2>
          <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
            {t.finalCta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              📋 {t.finalCta.button}
            </Link>
            <a
              href="https://wa.me/923712215078?text=Assalamu%20Alaikum%2C%20I'm%20interested%20in%20learning%20more%20about%20Al%20Rauf%20International%20Quran%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
            >
              💬 {t.finalCta.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#071f17] text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

          {/* Newsletter signup */}
          <NewsletterSignup />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="text-[#0f3d2e] font-bold text-sm">R</span>
                </div>
                <div className="leading-tight text-start">
                  <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
                  <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5 max-w-xs">
                {t.footer.desc}
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {["f", "in", "yt", "tw"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-8 h-8 rounded-full bg-stone-700 hover:bg-amber-500 hover:text-[#0f3d2e] text-stone-400 flex items-center justify-center text-xs font-bold transition-colors"
                    aria-label={`Al Rauf International Quran Academy on ${s}`}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t.footer.courses}</h4>
              <ul className="space-y-2.5">
                {["Noorani Qaida", "Quran Reading", "Tajweed", "Hifz", "Islamic Studies"].map((course) => (
                  <li key={course}>
                    <Link href="/pricing" className="text-sm hover:text-amber-400 transition-colors">
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t.footer.resources}</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/learn-the-meaning" className="text-sm text-amber-400 font-semibold hover:underline transition-colors flex items-center gap-1.5">
                    <span>📖 {t.learnMeaning.tag}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/refer" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span>🎁 {lang === "ur" ? "دوست کو ریفر کریں (10% رعایت)" : "Refer a Friend (10% Off)"}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/arabic-alphabet-chart" className="text-sm hover:text-amber-400 transition-colors">
                    {lang === "ur" ? "عربی حروف تہجی چارٹ" : "Arabic Alphabet Chart"}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm hover:text-amber-400 transition-colors">
                    {lang === "ur" ? "فیس اور پیکجز" : "Course Fee Structure"}
                  </Link>
                </li>
                <li>
                  <Link href="/teachers" className="text-sm hover:text-amber-400 transition-colors">
                    {t.nav.teachers}
                  </Link>
                </li>
                <li>
                  <Link href="/book-trial" className="text-sm hover:text-amber-400 transition-colors">
                    {t.nav.bookTrial}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t.footer.support}</h4>
              <ul className="space-y-2.5">
                <li><Link href="/faq" className="text-sm hover:text-amber-400 transition-colors">{t.nav.faq}</Link></li>
                <li><Link href="/about" className="text-sm hover:text-amber-400 transition-colors">{t.nav.about}</Link></li>
                <li><Link href="/register" className="text-sm hover:text-amber-400 transition-colors">{t.nav.register}</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-amber-400 transition-colors">{t.nav.contact}</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-stone-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <div className="flex items-center gap-4 text-stone-400">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                {lang === "ur" ? "پرائیویسی پالیسی" : "Privacy Policy"}
              </Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">
                {lang === "ur" ? "شرائط و ضوابط" : "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
