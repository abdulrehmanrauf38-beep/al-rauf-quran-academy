"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category?: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "legitimacy",
    question: "Is Al Rauf International Quran Academy legitimate / not a scam?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Yes, absolutely. <strong>Al Rauf International Quran Academy</strong> is a verified, dedicated online academy operating with complete transparency and integrity.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
          <li><strong>No upfront payments:</strong> You get 3 completely free trial classes before paying a single cent or entering any payment information.</li>
          <li><strong>Qualified, vetted teachers:</strong> Our instructors hold verified Ijazahs (certifications) and Dars-e-Nizami degrees from reputable institutions.</li>
          <li><strong>Transparent, pay-as-you-go pricing:</strong> No contracts, no cancellation fees, and transparent rates starting at just $3/class.</li>
          <li><strong>Active direct support:</strong> Our coordinators are accessible via WhatsApp and email to assist you 7 days a week.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "how-classes-work",
    question: "How do the online classes work?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Classes are conducted <strong>1-on-1 in real time via Google Meet</strong>. This provides an interactive, distraction-free environment where the teacher gives 100% of their attention to one student.
        </p>
        <p>
          You don&apos;t need to download any complicated proprietary software — Google Meet works smoothly on any standard web browser (Chrome, Safari, Edge) on a computer, laptop, tablet, or smartphone.
        </p>
      </div>
    ),
  },
  {
    id: "progress-tracking",
    question: "How do I know my child is actually making progress?",
    answer: (
      <div className="space-y-2.5">
        <p>
          We believe in complete transparency and keeping parents actively involved. <strong>After every class, parents receive a structured progress report</strong> directly in their email.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
          <li><strong>What was covered:</strong> Exact Ayahs, letters, or Qaida rules practiced during the session.</li>
          <li><strong>Strengths:</strong> Positive feedback on where your child excelled (pronunciation, focus, memorization).</li>
          <li><strong>Areas to practice:</strong> Specific Tajweed rules or tricky letters to polish before next class.</li>
          <li><strong>Homework &amp; next steps:</strong> Clear guidance on what to revise between lessons.</li>
        </ul>
        <p className="text-stone-600 text-sm">
          No wondering, no guessing — just clear, honest updates on your child&apos;s Quran journey.
        </p>
      </div>
    ),
  },
  {
    id: "teacher-change",
    question: "What if I don't like my assigned teacher?",
    answer: (
      <p>
        Your comfort and learning connection are our highest priorities. If for any reason you or your child feel the teaching style isn&apos;t the perfect fit, you can <strong>request a teacher change at any time, no questions asked</strong>. We will promptly introduce you to an alternative tutor.
      </p>
    ),
  },
  {
    id: "female-teachers",
    question: "Do you have female teachers for girls/women?",
    answer: (
      <p>
        <strong>Yes, absolutely.</strong> We have dedicated, certified female tutors available for female students (sisters of all ages) and young children. You can specifically select or request a female teacher during your free trial booking or registration.
      </p>
    ),
  },
  {
    id: "time-zones",
    question: "What time zones do you support?",
    answer: (
      <p>
        We support students across <strong>all global time zones</strong>, including the USA (EST, CST, MST, PST), Canada, the United Kingdom (GMT/BST), Europe, Australia, and the Middle East. With teachers available around the clock, you can schedule classes during morning, afternoon, evening, or weekend slots.
      </p>
    ),
  },
  {
    id: "pricing",
    question: "How much do classes cost?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Our rates start at just <strong>$3 per class (USD)</strong> for Noorani Qaida, $4/class for Quran Reading, $5/class for Hifz, and $6/class for advanced Tajweed.
        </p>
        <p>
          Plus, <strong>Islamic Studies is included completely FREE</strong> with any enrolled course.
        </p>
        <div className="pt-1">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 font-bold text-[#145c42] hover:text-amber-600 underline text-sm transition-colors"
          >
            View Our Full Course Pricing &amp; Monthly Plans →
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "payment-methods",
    question: "How do I pay?",
    answer: (
      <p>
        After you complete your 3 free trial classes and decide to enroll, our coordinator will reach out to you via email and WhatsApp with straightforward payment instructions. Payment is currently arranged directly via bank transfer, Wise, or PayPal. Automated instant online checkout is coming to the website very soon!
      </p>
    ),
  },
  {
    id: "trial-guarantee",
    question: "Is the free trial really free, no card required?",
    answer: (
      <p>
        <strong>Yes, 100% free with zero obligation.</strong> We never ask for your credit card or bank details to book a trial. You receive 3 full live lessons so you can evaluate the teacher, platform, and curriculum before deciding whether to continue.
      </p>
    ),
  },
  {
    id: "age-groups",
    question: "What age groups do you teach?",
    answer: (
      <p>
        We teach learners of <strong>all ages — from children as young as 4 to adults and seniors</strong>. Our tutors adapt their teaching pace and pedagogical methodology to match each student&apos;s age, background, and previous Quranic knowledge.
      </p>
    ),
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer: (
      <div className="space-y-3">
        <p>
          Getting started takes less than 60 seconds! Simply submit our Free Trial booking form, and our team will contact you within 24 hours to schedule your first session at a time convenient for you.
        </p>
        <div>
          <Link
            href="/book-trial"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-amber-400/40 transition-all"
          >
            Book Your 3 Free Trial Classes Now →
          </Link>
        </div>
      </div>
    ),
  },
];

function IconChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-[#145c42] transition-transform duration-300 ${
        open ? "rotate-180 text-amber-500" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>(["legitimacy", "how-classes-work"]);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleItem(id: string) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

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
                    link.name === "FAQ"
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

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white py-14 md:py-20 text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Have Questions? We&apos;ve Got Answers
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about our 1-on-1 online classes, certified teachers, pricing, and 3-class free trial.
          </p>
        </div>
      </section>

      {/* ── ACCORDION SECTION ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#145c42]/50 shadow-md ring-1 ring-[#145c42]/20"
                      : "border-stone-200 shadow-sm hover:border-stone-300"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 text-[#145c42] font-bold text-xs flex items-center justify-center border border-emerald-200">
                        {index + 1}
                      </span>
                      <h2 className="font-bold text-stone-900 text-base sm:text-lg">
                        {faq.question}
                      </h2>
                    </div>
                    <IconChevronDown open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── BOTTOM CONTACT CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-8 sm:p-10 border-2 border-amber-300/80 shadow-md text-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-[#0f3d2e] flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
              💬
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f3d2e] mb-2">
              Still have questions?
            </h3>
            <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Our support team is here to help guide you. Feel free to message us on WhatsApp or email anytime!
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <a
                href="https://wa.me/923712215078?text=Assalamu%20Alaikum%2C%20I'm%20interested%20in%20learning%20more%20about%20Al%20Rauf%20International%20Quran%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#145c42] hover:bg-[#0f3d2e] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow hover:shadow-md"
              >
                <span>💬 Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:info@al-rauf-quran-academy.vercel.app"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                <span>✉️ Email Us</span>
              </a>
              <Link
                href="/book-trial"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-amber-400/40"
              >
                <span>Book 3 Free Trials →</span>
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
              <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/faq" className="text-amber-400 font-medium transition-colors">FAQ</Link>
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
