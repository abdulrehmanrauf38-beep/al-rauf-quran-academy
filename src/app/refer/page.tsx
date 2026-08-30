"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Courses", href: "/#courses" },
  { name: "About", href: "/about" },
  { name: "Teachers", href: "/teachers" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
];

export default function ReferPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    friendName: "",
    friendContact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit referral.");

      setSuccess(true);
      setFormData({
        referrerName: "",
        referrerEmail: "",
        friendName: "",
        friendContact: "",
        message: "",
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white py-16 md:py-24 text-center">
        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
              🎁 Student &amp; Family Referral Program
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Give the Gift of Quran Education, <br />
            <span className="text-amber-400">Get Rewarded</span>
          </h1>

          <p className="text-stone-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            Refer a friend or family member to Al Rauf International Quran Academy. When they enroll, you <strong>BOTH get 10% off</strong> your next month&apos;s fee.
          </p>

          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-w-xl mx-auto text-xs sm:text-sm text-stone-300 italic">
            &ldquo;Whoever guides someone to good will have a reward like one who did it.&rdquo; — Sahih Muslim
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS 3-STEP SECTION ── */}
      <section className="py-16 md:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#145c42] font-semibold text-sm uppercase tracking-widest mb-3">Simple &amp; Rewarding</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
              How the Referral Program Works
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-sm sm:text-base">
              Share the blessing of Quran learning in three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                emoji: "💬",
                title: "Share with a Friend",
                desc: "Tell a friend, relative, or neighbor who is interested in online 1-on-1 Quran classes for themselves or their children.",
              },
              {
                step: "2",
                emoji: "📝",
                title: "They Mention Your Name",
                desc: "Fill in their details below, or have them mention your name/email when booking their 3 free trial classes.",
              },
              {
                step: "3",
                emoji: "🎉",
                title: "You Both Save 10%",
                desc: "Once your friend enrolls, both of you automatically receive a 10% discount applied to your next monthly invoice.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm relative flex flex-col items-center text-center hover:border-amber-400/60 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-[#0f3d2e] font-extrabold text-xl flex items-center justify-center mb-6 shadow-sm">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERRAL FORM SECTION ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#faf7f0] via-[#f7f2e7] to-[#ede4d1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-xl">
            
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-3xl mx-auto mb-4">
                🎁
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e] mb-2">
                Submit Your Referral
              </h2>
              <p className="text-stone-600 text-sm">
                Enter your details and your friend&apos;s contact information. We&apos;ll reach out with a warm welcome and 3 free trial classes.
              </p>
            </div>

            {success ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center text-stone-800">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#145c42] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#0f3d2e] mb-2">
                  Referral Received! Jazak Allah Khayran 🎉
                </h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  We&apos;ve sent a confirmation email to your inbox. Our admissions team will reach out to your friend to offer them 3 free trial classes.
                </p>
                <p className="text-[#145c42] font-semibold text-xs sm:text-sm mb-6">
                  Your 10% discount will be credited to your account as soon as they enroll!
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="inline-flex items-center justify-center bg-[#0f3d2e] hover:bg-[#145c42] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors"
                >
                  Refer Another Friend
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Referrer Info */}
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-[#0f3d2e] mb-3">
                    1. Your Information (Current Student / Parent)
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="referrerName" className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="referrerName"
                        name="referrerName"
                        type="text"
                        required
                        value={formData.referrerName}
                        onChange={handleChange}
                        placeholder="e.g. Fatima Zahra"
                        className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerEmail" className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Registered Email *
                      </label>
                      <input
                        id="referrerEmail"
                        name="referrerEmail"
                        type="email"
                        required
                        value={formData.referrerEmail}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                      />
                    </div>
                  </div>
                </div>

                {/* Friend Info */}
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-[#0f3d2e] mb-3">
                    2. Friend / Family Member Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="friendName" className="block text-xs font-semibold text-stone-700 mb-1">
                        Friend&apos;s Name *
                      </label>
                      <input
                        id="friendName"
                        name="friendName"
                        type="text"
                        required
                        value={formData.friendName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Mahmood"
                        className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                      />
                    </div>
                    <div>
                      <label htmlFor="friendContact" className="block text-xs font-semibold text-stone-700 mb-1">
                        Friend&apos;s Email or WhatsApp *
                      </label>
                      <input
                        id="friendContact"
                        name="friendContact"
                        type="text"
                        required
                        value={formData.friendContact}
                        onChange={handleChange}
                        placeholder="email@domain.com or +1 555 0000"
                        className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className="block text-xs font-semibold text-stone-700 mb-1">
                      Optional Note for Our Admissions Team
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. My cousin has two kids aged 7 and 9 interested in Noorani Qaida..."
                      className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-700 text-xs bg-red-50 border border-red-200 p-3 rounded-xl">
                    ⚠️ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-70 text-[#0f3d2e] font-extrabold text-base py-3.5 px-6 rounded-full transition-all shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting Referral..." : "Submit Referral & Claim 10% Off →"}
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  🔒 No spam guarantee. We will only contact your friend regarding their requested free trial classes.
                </p>
              </form>
            )}

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
              <Link href="/refer" className="text-amber-400 font-medium transition-colors">Refer a Friend</Link>
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
