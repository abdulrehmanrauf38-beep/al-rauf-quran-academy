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

export default function PrivacyPolicyPage() {
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
              Legal &amp; Privacy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Privacy Policy
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
              At <strong>Al Rauf International Quran Academy</strong>, we deeply respect your family&apos;s privacy. This Privacy Policy explains in plain language how we collect, use, and protect your personal information when you use our website, book free trials, or enroll in our online Quran classes.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">1.</span> Information We Collect
            </h2>
            <p>
              When you submit a Free Trial booking form, registration form, or contact inquiry on our website, we collect the following personal information:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-stone-600">
              <li><strong>Student &amp; Parent Name:</strong> To address you and maintain student records.</li>
              <li><strong>Email Address:</strong> To send class schedules, booking confirmations, and updates.</li>
              <li><strong>WhatsApp / Phone Number:</strong> To coordinate lesson timings, send class reminders, and communicate with instructors.</li>
              <li><strong>Country &amp; Time Zone:</strong> To pair you with a teacher available in your local time slot.</li>
              <li><strong>Student Age &amp; Course Preferences:</strong> To customize age-appropriate teaching curricula and assign an appropriate tutor.</li>
              <li><strong>Optional Notes / Comments:</strong> Any specific background knowledge or teacher gender preferences you provide.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">2.</span> How We Use Your Information
            </h2>
            <p>We use your information strictly for educational and service-related purposes, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-stone-600">
              <li>Scheduling and conducting live 1-on-1 trial and ongoing Quran lessons.</li>
              <li>Connecting you directly with your assigned qualified tutor.</li>
              <li>Providing customer support and answering questions via email or WhatsApp.</li>
              <li>Arranging tuition payment confirmations after your free trial period.</li>
              <li>Sending important academic updates or schedule adjustments.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">3.</span> We Do NOT Sell Your Data
            </h2>
            <p className="text-stone-800 font-medium">
              We uphold strict Islamic and ethical standards regarding privacy. We <strong>never sell, rent, trade, or monetize</strong> your personal information or your children&apos;s data to third-party advertisers or data brokers under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">4.</span> Virtual Classrooms via Google Meet
            </h2>
            <p>
              Our live video classes are conducted securely through <strong>Google Meet</strong>. When participating in a session:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-stone-600">
              <li>Sessions are strictly 1-on-1 private meetings between the student and the certified teacher.</li>
              <li>You may participate using a standard Google account or as a guest meeting link.</li>
              <li>Video and audio streams are processed in accordance with Google&apos;s privacy and security protocols. For more information, please review the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#145c42] underline font-semibold hover:text-amber-600"
                >
                  Google Privacy Policy
                </a>.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">5.</span> Cookies and Tracking
            </h2>
            <p>
              Our website uses only essential, minimal cookies necessary for website performance and Next.js routing functionality. We do not employ invasive cross-site tracking cookies or third-party behavioral advertising pixels.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">6.</span> Data Security &amp; Retention
            </h2>
            <p>
              We take reasonable administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, loss, or misuse. We retain your contact information only as long as necessary to provide academic services or comply with legitimate business records.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-stone-100 pt-6">
            <h2 className="text-xl font-bold text-[#0f3d2e] flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">7.</span> Contact Us About Privacy
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding your personal data (such as requesting data deletion or updating your details), please reach out to us at:
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 inline-block">
              <p className="text-sm font-semibold text-stone-900">Al Rauf International Quran Academy — Privacy Team</p>
              <p className="text-sm text-[#145c42]">
                Email: <a href="mailto:alraufquranacademy1@gmail.com" className="underline font-bold">alraufquranacademy1@gmail.com</a>
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
              <Link href="/privacy-policy" className="text-amber-400 font-medium hover:underline">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
