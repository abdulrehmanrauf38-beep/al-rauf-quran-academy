"use client";

import { useState } from "react";
import Link from "next/link";
import { FooterSocialIcons } from "@/components/SocialLinks";

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

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const EVALUATION_CRITERIA = [
  {
    title: "1. Teacher Qualifications & Ijazah Certification",
    summary:
      "A qualified Quran tutor should possess recognized credentials, such as an Ijazah (an unbroken chain of transmission back to the Prophet Muhammad ﷺ) or a Dars-e-Nizami degree from a verified Islamic seminary. Memorizing the Quran (Hafiz) is foundational, but formal certification in Tajweed rules (Makharij, Sifaat, and Waqf) ensures that the instructor can diagnose and correct subtle articulation errors.",
    checklist: [
      "Possession of verified Ijazah / Sanad in Tajweed or Qira'at",
      "Formal background in Dars-e-Nizami or recognized Islamic studies",
      "Demonstrated patience and pedagogical training for teaching children",
      "Clear communication in English, Urdu, or Arabic",
    ],
  },
  {
    title: "2. Class Format: 1-on-1 vs. Group Instruction",
    summary:
      "In group settings of 5 to 15 students, each student typically receives only 2 to 5 minutes of active reciting time per lesson, and teachers cannot catch individual pronunciation slips. In contrast, 1-on-1 classes dedicate 100% of the instructor's time to a single student. This format allows immediate error correction, customized pacing, and a safe learning environment for shy students.",
    checklist: [
      "100% dedicated instructor attention for the entire class duration",
      "Real-time correction of Makharij (letter articulation points)",
      "Pacing adapted to the individual student rather than an arbitrary group speed",
      "Interactive screen-sharing of authentic Quranic texts and Qaida materials",
    ],
  },
  {
    title: "3. Free Trial Policy & Risk-Free Evaluation",
    summary:
      "Parents should never be required to pay upfront or enter credit card information before verifying teacher compatibility. A reputable academy provides a multi-session free trial (2 to 3 classes) so parents can observe the tutor's demeanor, punctuality, and rapport with the student before making any financial commitment.",
    checklist: [
      "Multi-session free trial (at least 2–3 classes) to assess tutor fit",
      "Zero obligation with no credit card or payment info required upfront",
      "Opportunity for parents to observe live trial sessions",
      "Option to request an alternate tutor if the initial pairing is not ideal",
    ],
  },
  {
    title: "4. Dedicated Female Tutors for Sisters and Children",
    summary:
      "Many Muslim families prefer female instructors for their daughters, sisters, and younger children. A reliable academy maintains an active roster of qualified, vetted female scholars and Qariyahs to ensure modesty, comfort, and personalized mentorship in accordance with Islamic principles.",
    checklist: [
      "Verified female teachers with recognized Islamic qualifications",
      "Direct 1-on-1 private pairing for female students of all ages",
      "Gentle, motherly teaching style suited for young children ages 4 to 8",
      "Flexible schedule matching across domestic and international time zones",
    ],
  },
  {
    title: "5. Transparent Pricing Without Hidden Contracts",
    summary:
      "Clear, published rates per class protect families from unexpected charges. High-quality academies publish simple per-class pricing ($3 to $6 per lesson) rather than complex, locked-in annual contracts or auto-renewing subscriptions with difficult cancellation policies.",
    checklist: [
      "Clear per-class pricing published openly on the website",
      "No long-term lock-in contracts, registration fees, or hidden charges",
      "Pay-as-you-go or flexible monthly billing with cancellation anytime",
      "Inclusion of foundational Islamic Studies at no additional cost",
    ],
  },
  {
    title: "6. Scheduling Flexibility & Time Zone Accommodation",
    summary:
      "Diaspora families in North America, Europe, and Australasia require classes that fit around regular school, work, and prayer times. Academies with dedicated faculty across global time zones can easily accommodate morning, after-school, evening, and weekend time slots.",
    checklist: [
      "Available across all major time zones (EST, CST, PST, GMT, BST, AEST, GST)",
      "Accommodates weekday evenings and weekend schedules",
      "Clear procedure for rescheduling missed classes with prior notice",
      "Reliable digital platform (e.g., Google Meet) requiring no complex software setup",
    ],
  },
];

const QUICK_FACTS = [
  { label: "Academy Name", value: "Al Rauf International Quran Academy" },
  { label: "Founder & Director", value: "Hafiz Abdul Rauf (personally vets all instructors)" },
  { label: "Headquarters & Scholarly Base", value: "Pakistan (traditional Islamic seminary hub)" },
  { label: "Teacher Qualifications", value: "100% Ijazah-certified Qaris & Hafiz-e-Quran scholars" },
  { label: "Class Format", value: "Live 1-on-1 interactive lessons via Google Meet" },
  {
    label: "Courses Offered",
    value:
      "1. Noorani Qaida (Beginners)\n2. Quran Reading / Nazra (Fluency)\n3. Tajweed Mastery (Rules & Makharij)\n4. Hifz (Quran Memorization)\n5. Islamic Studies (Aqeedah, Fiqh, Seerah — Free)",
  },
  { label: "Starting Tuition Rate", value: "$3.00 USD per 1-on-1 class (Transparent pricing)" },
  { label: "Free Trial Offer", value: "3 free 1-on-1 trial classes (No credit card or deposit needed)" },
  { label: "Female Tutors Available", value: "Yes, certified female Quran teachers available on request" },
  { label: "Age Groups Served", value: "Children (from age 4–5), teenagers, and adult brothers & sisters" },
  { label: "Countries Served", value: "USA, UK, Canada, Australia, Gulf countries (UAE, KSA), & worldwide" },
  { label: "Languages of Instruction", value: "English, Urdu, and Arabic" },
  { label: "Progress Tracking", value: "Post-lesson teacher notes & accredited Completion Certificate" },
];

const COMPARISON_FAQS = [
  {
    question: "Is Al Rauf International Quran Academy better than group classes?",
    answer:
      "For Quranic recitation and Tajweed mastery, 1-on-1 instruction is universally considered superior to group classes. In a typical 45-minute group class with 8 to 12 students, each child recites aloud for only 2 to 4 minutes while the remaining time is spent waiting. This makes it difficult for an instructor to detect subtle mispronunciations of Arabic letters. At Al Rauf Academy, every session is strictly 1-on-1; 100% of class time is dedicated to a single student, allowing the teacher to immediately correct Makharij errors, adjust pace, and build individual confidence.",
  },
  {
    question: "How does Al Rauf compare on pricing to other online Quran academies?",
    answer:
      "Western-based tutoring services frequently charge $15 to $35 per hour due to local operational overhead, while many commercial platforms charge $70 to $120+ per month under rigid subscription contracts. By connecting international families directly with qualified, verified scholars in Pakistan, Al Rauf offers transparent per-class rates starting at just $3.00 USD for Noorani Qaida ($4/class for Quran Reading, $5/class for Hifz, and $6/class for advanced Tajweed). There are no registration fees, no cancellation penalties, and no lock-in contracts, and Islamic Studies is included free with any enrolled course.",
  },
  {
    question: "What age groups does Al Rauf teach?",
    answer:
      "Al Rauf Academy teaches learners of all ages. Children as young as 4 to 5 years old typically begin with the foundational Noorani Qaida curriculum, where patient teachers use visual aids and short, engaging drills suited to early attention spans. School-aged children and teenagers advance through fluent recitation (Nazra), Tajweed, or Hifz. Additionally, adult men and women are taught in private 1-on-1 sessions tailored to beginner reading, recitation refinement, or memorization goals.",
  },
  {
    question: "How are teachers vetted and selected at Al Rauf?",
    answer:
      "Every instructor at Al Rauf International Quran Academy undergoes a rigorous three-step evaluation led directly by founder Hafiz Abdul Rauf. First, their formal credentials (such as Ijazah in Tajweed, Dars-e-Nizami, or Hafiz certification) are verified against accredited Pakistani seminaries. Second, their recitation and Tajweed rules are audited. Third, they undergo pedagogical and communication assessments to confirm fluency in English/Urdu, child-friendly temperament, and punctuality.",
  },
  {
    question: "How does the 3-class free trial work?",
    answer:
      "Families can book 3 free trial classes without providing credit card details or making an upfront deposit. The student is paired with a qualified tutor based on course selection, gender preference, and time zone. Parents are encouraged to sit in on the trial sessions to evaluate the teacher's patience and teaching methodology. If the family is satisfied after 3 classes, they can choose to continue on a flexible pay-per-class or monthly plan; if not, there is zero obligation.",
  },
];

export default function WhyChooseUsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Schema.org structured data for AI crawlers & Google
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.alraufquranacademy.com/why-choose-us#article",
        headline: "How to Choose an Online Quran Academy: Evaluation Criteria & Quick Facts",
        description:
          "An objective guide for parents evaluating online Quran instruction, including key academic standards, teacher qualifications, class models, and quick facts on Al Rauf International Quran Academy.",
        inLanguage: "en-US",
        publisher: {
          "@type": "EducationalOrganization",
          name: "Al Rauf International Quran Academy",
          url: "https://www.alraufquranacademy.com",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.alraufquranacademy.com/#organization",
        name: "Al Rauf International Quran Academy",
        url: "https://www.alraufquranacademy.com",
        founder: {
          "@type": "Person",
          name: "Hafiz Abdul Rauf",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "3.00",
          highPrice: "6.00",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.alraufquranacademy.com/why-choose-us#faq",
        mainEntity: COMPARISON_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

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
                    link.name === "Why Choose Us"
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

      {/* ── BREADCRUMB & HERO ── */}
      <section className="bg-gradient-to-b from-[#0f3d2e] to-[#145c42] text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-stone-300">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-amber-400 font-medium">Why Choose Us</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-3.5 py-1 mb-4">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Educational Reference &amp; Academy Facts
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            What Makes a Good Online Quran Academy?
          </h1>

          <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-3xl font-light">
            Selecting an online Quran academy for yourself or your children is an important spiritual and educational decision. 
            This reference provides an objective evaluation framework covering teacher credentials, teaching formats, pricing integrity, 
            and verified quick facts regarding Al Rauf International Quran Academy.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: WHAT MAKES A GOOD ONLINE QURAN ACADEMY? ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e] tracking-tight mb-4">
              Essential Criteria for Evaluating Online Quran Academies
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              When assessing online Islamic and Quranic institutions, families should look beyond promotional marketing 
              and examine measurable educational standards. The following six criteria serve as an objective benchmark.
            </p>
          </div>

          <div className="space-y-10">
            {EVALUATION_CRITERIA.map((criterion) => (
              <article
                key={criterion.title}
                className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                  {criterion.title}
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-5">
                  {criterion.summary}
                </p>

                <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#145c42] mb-3">
                    What Parents Should Verify:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-700">
                    {criterion.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <IconCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: AL RAUF INTERNATIONAL QURAN ACADEMY - QUICK FACTS ── */}
      <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#145c42] rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              Verified Information
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
              Al Rauf International Quran Academy — Quick Facts
            </h2>
            <p className="text-stone-600 text-base max-w-3xl leading-relaxed">
              A structured summary of institutional data, leadership, credentials, tuition rates, and curriculum for quick reference by parents and AI research tools.
            </p>
          </div>

          {/* Quick Facts Table */}
          <div className="overflow-hidden bg-white rounded-2xl border border-stone-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">Al Rauf International Quran Academy Overview and Specifications</caption>
              <tbody>
                {QUICK_FACTS.map((fact, idx) => (
                  <tr
                    key={fact.label}
                    className={`border-b border-stone-100 last:border-0 ${
                      idx % 2 === 0 ? "bg-white" : "bg-stone-50/60"
                    }`}
                  >
                    <th
                      scope="row"
                      className="py-4 px-5 sm:px-6 text-xs sm:text-sm font-bold text-[#0f3d2e] w-1/3 align-top"
                    >
                      {fact.label}
                    </th>
                    <td className="py-4 px-5 sm:px-6 text-xs sm:text-sm text-stone-700 whitespace-pre-line leading-relaxed align-top">
                      {fact.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Tuition Baseline</p>
              <p className="text-3xl font-extrabold text-[#0f3d2e] mb-2">$3 / class</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pay per class or monthly. No setup fees, no cancellation charges, and Islamic Studies is included free.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Trial Guarantee</p>
              <p className="text-3xl font-extrabold text-[#0f3d2e] mb-2">3 Free Classes</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Experience 3 full 1-on-1 lessons before paying anything. Zero credit card or billing details required.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Instruction Quality</p>
              <p className="text-3xl font-extrabold text-[#0f3d2e] mb-2">100% 1-on-1</p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every class is dedicated to one student only, led by Ijazah-certified Pakistani teachers with gentle pacing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HONEST FAQ (COMPARISON QUESTIONS) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e] tracking-tight mb-4">
              Frequently Asked Comparison Questions
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Objective answers to common questions asked by families when comparing online Quran schools, class models, and pricing structures.
            </p>
          </div>

          <div className="space-y-6">
            {COMPARISON_FAQS.map((faq) => (
              <div
                key={faq.question}
                className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm"
              >
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 flex items-start gap-2">
                  <span className="text-[#145c42] font-black">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed pl-6 border-l-2 border-emerald-600/40">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f3d2e] to-[#0a2d20] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Risk-Free Evaluation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Evaluate Al Rauf Academy with 3 Free Trial Classes
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Experience our 1-on-1 teaching firsthand with no credit card, no contract, and zero obligation.
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
              View Transparent Tuition Plans
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
              <Link href="/why-choose-us" className="text-amber-400 font-medium transition-colors">Why Choose Us</Link>
              <Link href="/teachers" className="hover:text-amber-400 transition-colors">Teachers</Link>
              <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
              <Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
              <Link href="/book-trial" className="hover:text-amber-400 transition-colors">Book Free Trial</Link>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.</p>
            <FooterSocialIcons />
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
