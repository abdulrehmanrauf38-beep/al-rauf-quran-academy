"use client";

import { useState } from "react";
import Link from "next/link";
import { COURSE_PRICING, PRICING_CONSTANTS } from "@/data/pricing";

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
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

function IconFamily() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function IconGift() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 109.375 7.5H12m0 0H7.5m4.5 0h4.5m-9 3.75h9m-9 0H7.5m4.5 0v8.25M7.5 11.25H4.875a1.125 1.125 0 000 2.25H7.5M16.5 11.25h2.625a1.125 1.125 0 010 2.25H16.5" />
    </svg>
  );
}

// ─── Currency Exchange Rates (Base: USD) ───────────────────────────────────
// Note: These approximate conversion rates should be updated periodically to reflect current benchmark rates.
// Current rates: 1 USD = 0.79 GBP, 1 USD = 1.38 CAD
type CurrencyCode = "USD" | "GBP" | "CAD";

interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number;
  label: string;
}

const CURRENCIES: CurrencyConfig[] = [
  { code: "USD", symbol: "$", rate: 1.0, label: "USD ($)" },
  { code: "GBP", symbol: "£", rate: 0.79, label: "GBP (£)" },
  { code: "CAD", symbol: "C$", rate: 1.38, label: "CAD (C$)" },
];

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function PricingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  const activeCurrency = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

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
                    link.name === "Pricing"
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
                <Link
                  href="/register"
                  className="block w-full text-center border border-amber-400/40 text-amber-400 font-semibold text-sm px-4 py-2.5 rounded-full transition-colors hover:bg-amber-400/10"
                >
                  Register Now
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white py-16 md:py-24">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <IconStar />
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Simple &amp; Transparent Pricing
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Affordable Online Quran Classes <br />
            <span className="text-amber-400">Tailored to Your Schedule</span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Pay as you learn with clear, affordable per-class rates. No hidden admission fees or contracts.
          </p>

          {/* Introductory Rate Banner Note */}
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-amber-400/40 rounded-2xl px-5 py-3 text-sm text-stone-200 shadow-sm max-w-xl">
            <span className="text-amber-400 font-bold">✨ Special Offer: </span>
            {PRICING_CONSTANTS.introductoryRateNote}
          </div>
        </div>
      </section>

      {/* ── ISLAMIC STUDIES FREE HIGHLIGHT BANNER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-2xl p-4 sm:p-5 shadow-xl text-[#0f3d2e] flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-300">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0f3d2e] text-amber-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
              🎁
            </div>
            <div>
              <p className="font-extrabold text-base sm:text-lg leading-tight">
                Special Bonus: Islamic Studies Included FREE!
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#0f3d2e]/85">
                {PRICING_CONSTANTS.freeIslamicStudiesNote} (Daily Duas, Seerah, &amp; Basic Fiqh).
              </p>
            </div>
          </div>
          <Link
            href="/book-trial"
            className="flex-shrink-0 bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow transition-all hover:scale-105"
          >
            Claim 3 Free Trials →
          </Link>
        </div>
      </div>

      {/* ── PRICING CARDS GRID ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-3">
              Course Pricing Plans
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm sm:text-base mb-6">
              Monthly plans calculated based on 4 weeks per month. Select the class frequency that best fits your routine.
            </p>

            {/* Currency Selector Toggle */}
            <div className="inline-flex flex-col items-center">
              <div className="inline-flex items-center p-1 bg-stone-200/80 border border-stone-300 rounded-full shadow-inner">
                {CURRENCIES.map((curr) => {
                  const active = currency === curr.code;
                  return (
                    <button
                      key={curr.code}
                      onClick={() => setCurrency(curr.code)}
                      className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                        active
                          ? "bg-[#0f3d2e] text-amber-400 shadow-md scale-105"
                          : "text-stone-700 hover:text-stone-900 hover:bg-stone-100/60"
                      }`}
                    >
                      {curr.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-stone-500 mt-2.5 italic">
                Prices are approximate and may vary slightly due to exchange rates. Final pricing confirmed at enrollment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {COURSE_PRICING.map((course) => {
              const isFree = course.isFree;
              const convertedPrice = Math.round(course.pricePerClass * activeCurrency.rate);
              const convertedMonthly4x = Math.round(course.monthly4x * activeCurrency.rate);
              const convertedMonthly5x = Math.round(course.monthly5x * activeCurrency.rate);

              return (
                <div
                  key={course.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 ${
                    course.popular
                      ? "bg-white border-2 border-[#145c42] shadow-xl ring-4 ring-[#145c42]/10"
                      : isFree
                      ? "bg-gradient-to-b from-amber-50 to-white border-2 border-amber-300/80 shadow-md"
                      : "bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#145c42]/40"
                  }`}
                >
                  {/* Top Badge */}
                  {course.badge && (
                    <div className="absolute -top-3.5 right-6">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full shadow-sm ${
                          course.popular
                            ? "bg-[#145c42] text-white"
                            : isFree
                            ? "bg-amber-500 text-[#0f3d2e]"
                            : "bg-stone-100 text-stone-700 border border-stone-200"
                        }`}
                      >
                        {course.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-extrabold text-stone-900 mb-1">
                        {course.courseName}
                      </h3>
                      <p className="text-stone-500 text-xs sm:text-sm min-h-[38px] leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Rate Display */}
                    <div className="bg-stone-50 rounded-2xl p-4 mb-6 border border-stone-100">
                      <div className="flex items-baseline gap-1 mb-2">
                        {isFree ? (
                          <div className="text-3xl font-extrabold text-emerald-700">
                            FREE
                          </div>
                        ) : (
                          <>
                            <span className="text-3xl sm:text-4xl font-extrabold text-[#0f3d2e]">
                              {activeCurrency.symbol}{convertedPrice}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-stone-500">
                              / class ({currency})
                            </span>
                          </>
                        )}
                      </div>

                      {/* Monthly Totals Breakdown */}
                      {isFree ? (
                        <div className="text-xs font-semibold text-amber-700 bg-amber-100/70 rounded-lg p-2 border border-amber-200">
                          {course.freeNote}
                        </div>
                      ) : (
                        <div className="space-y-1.5 pt-2 border-t border-stone-200/60 text-xs">
                          <div className="flex justify-between items-center text-stone-700">
                            <span>4 classes / week (16/mo):</span>
                            <span className="font-bold text-[#145c42] text-sm">
                              {activeCurrency.symbol}{convertedMonthly4x} <span className="text-stone-400 font-normal">/mo</span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-stone-700">
                            <span>5 classes / week (20/mo):</span>
                            <span className="font-bold text-[#145c42] text-sm">
                              {activeCurrency.symbol}{convertedMonthly5x} <span className="text-stone-400 font-normal">/mo</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-8">
                      {course.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                          <IconCheck />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <Link
                      href="/book-trial"
                      className={`w-full flex items-center justify-center text-center font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-sm ${
                        course.popular
                          ? "bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] shadow-amber-500/20 hover:shadow-md"
                          : "bg-[#145c42] hover:bg-[#0f3d2e] text-white"
                      }`}
                    >
                      Book Free Trial First →
                    </Link>
                    <Link
                      href="/register"
                      className="w-full flex items-center justify-center text-center font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 hover:border-stone-400 transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── SPECIAL DISCOUNTS CALLOUT ── */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 via-white to-emerald-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-md">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-6 pb-5 border-b border-amber-200/60 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#0f3d2e] flex items-center justify-center font-bold text-lg shadow-sm">
                    🏷️
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0f3d2e]">
                      Special Discounts &amp; Family Savings
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Take advantage of extra savings on top of our low per-class rates.
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full flex-shrink-0">
                  Save More
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* 1. Sibling Discount */}
                <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm flex items-start gap-4 hover:border-[#145c42]/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100/80 text-[#145c42] flex items-center justify-center flex-shrink-0">
                    <IconFamily />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                        Sibling Discount
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        10-15% OFF
                      </span>
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      Enroll 2 or more children from the same family and get <strong>10-15% off</strong> the second child's monthly fee.
                    </p>
                  </div>
                </div>

                {/* 2. Referral Bonus */}
                <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm flex items-start gap-4 hover:border-amber-400/60 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <IconGift />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                        Referral Bonus
                      </h4>
                      <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                        Both Get 10%
                      </span>
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-2">
                      Refer a friend or family member. When they enroll, you <strong>BOTH get 10% off</strong> your next month&apos;s fee.
                    </p>
                    <Link
                      href="/refer"
                      className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      Refer a Friend Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TRUST & SECURITY BADGES ── */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7 text-[#145c42]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  label: "Secure & Private",
                  sub: "Your data is never sold or shared",
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-[#145c42]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  ),
                  label: "Verified Qualified Teachers",
                  sub: "Ijazah-certified Pakistani scholars",
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-[#145c42]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  ),
                  label: "No Long-Term Contract",
                  sub: "Pay as you go, cancel any time",
                },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-stone-200 shadow-sm hover:border-[#145c42]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{label}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee & FAQs preview banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm text-center max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
              Why Start with 3 Free Trial Classes?
            </h3>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              We want you to be 100% confident in our teachers before paying a single penny. Try out 3 live one-on-one sessions via Google Meet with zero financial commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-trial"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5"
              >
                Book 3 Free Trial Classes →
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:-translate-y-0.5"
              >
                Direct Student Registration
              </Link>
            </div>
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
              <Link href="/teachers" className="hover:text-amber-400 transition-colors">Teachers</Link>
              <Link href="/pricing" className="text-amber-400 font-medium transition-colors">Pricing</Link>
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
