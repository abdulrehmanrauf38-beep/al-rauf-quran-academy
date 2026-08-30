"use client";

import { useState } from "react";
import Link from "next/link";

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

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function TermsOfServicePage() {
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

      {/* ── HERO BANNER ── */}
      <section className="bg-gradient-to-br from-[#0f3d2e] to-[#145c42] text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1 mb-4">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Agreement &amp; Guidelines
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Terms of Service
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm">
            Last updated: August 30, 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT CONTAINER ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-3xl p-7 sm:p-12 border border-stone-200 shadow-sm space-y-8 text-stone-700 leading-relaxed">
          
          <div className="border-b border-stone-100 pb-6">
            <p className="text-base sm:text-lg text-stone-800">
              Welcome to <strong>Al Rauf International Quran Academy</strong>. By booking a free trial, registering for classes, or using our website, you agree to comply with and be bound by the following Terms of Service.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">1.</span> Description of Services
            </h2>
            <p>
              Al Rauf International Quran Academy provides online live 1-on-1 Islamic and Quranic tutoring services, including but not limited to Noorani Qaida, Quran Reading, Tajweed, Hifz (Memorization), and Islamic Studies. Lessons are delivered virtually via video conferencing platforms (such as Google Meet).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-amber-50/60 p-6 rounded-2xl border border-amber-200/80">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">2.</span> Free Trial Terms
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-stone-800">
              <li>Each new student is eligible for <strong>three (3) free trial classes</strong>.</li>
              <li>There is absolutely <strong>no obligation or payment required</strong> to participate in the trial.</li>
              <li>Free trial slots are subject to teacher scheduling availability.</li>
              <li>Trial classes cannot be redeemed for cash or transferred to existing enrolled students.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">3.</span> Enrollment &amp; Payment Terms
            </h2>
            <p>
              After completing the 3 free trial sessions, students wishing to continue must confirm enrollment and pay monthly tuition fees before the scheduled continuation date:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-stone-600">
              <li>Tuition is billed in advance on a monthly basis according to the selected class frequency (e.g., 4x or 5x classes per week).</li>
              <li>Payment details and invoices are currently coordinated directly via our support team through email or WhatsApp.</li>
              <li>Class slots are officially reserved upon receipt of monthly tuition confirmation.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">4.</span> Cancellation, Rescheduling &amp; Refunds
            </h2>
            <p>
              We operate a fair, flexible cancellation policy:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-stone-600">
              <li><strong>No Long-term Contracts:</strong> You may pause or cancel your enrollment at any time before the beginning of the next monthly billing cycle with no penalty.</li>
              <li><strong>Rescheduling &amp; Missed Classes:</strong> If a student needs to reschedule a lesson, please notify your teacher or administration at least 4 hours in advance to arrange a makeup session.</li>
              <li><strong>Teacher Absence:</strong> If an instructor misses a class due to illness or emergency, a full makeup class will be arranged or credited to your account.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">5.</span> Code of Conduct &amp; Classroom Etiquette
            </h2>
            <p>
              To maintain a spiritually rewarding, respectful environment for both learners and scholars:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-stone-600">
              <li>Students and tutors are expected to treat one another with utmost courtesy, Islamic adab (manners), and mutual respect.</li>
              <li>Parents of young children are encouraged to ensure a quiet, suitable learning space with a working camera and microphone.</li>
              <li>Inappropriate behavior, harassment, or verbal abuse will result in immediate termination of services without refund.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">6.</span> Teacher Vetting &amp; Limitation of Liability
            </h2>
            <p>
              While all tutors are rigorously vetted for Islamic knowledge, recitation proficiency, and criminal background clearances, Al Rauf International Quran Academy acts as an educational coordinator and facilitator.
            </p>
            <p className="text-stone-600 text-sm sm:text-base">
              Learning outcomes, memorization velocity, and recitation speed vary naturally depending on individual student dedication, practice, and retention. Al Rauf International Quran Academy cannot guarantee specific milestone dates or exam results.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-stone-100 pt-6">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">7.</span> Governing Law &amp; Updates
            </h2>
            <p>
              These Terms shall be interpreted in accordance with applicable general commercial laws and standard Islamic commercial principles of fairness (Adl and Ihsan). We reserve the right to update these terms as our services expand. Continued use of our academy constitutes acceptance of updated terms.
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 inline-block mt-2">
              <p className="text-sm font-semibold text-stone-900">Questions regarding these terms?</p>
              <p className="text-sm text-[#145c42]">
                Contact us at: <a href="mailto:alraufquranacademy1@gmail.com" className="underline font-bold">alraufquranacademy1@gmail.com</a>
              </p>
            </div>
          </section>

        </div>
      </main>

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
              <Link href="/terms-of-service" className="text-amber-400 font-medium hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
