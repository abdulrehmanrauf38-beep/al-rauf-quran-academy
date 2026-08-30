"use client";

import { useState } from "react";
import Link from "next/link";

const COURSES = [
  "Noorani Qaida",
  "Quran Reading",
  "Tajweed",
  "Hifz (Memorization)",
  "Islamic Studies",
];

const CLASSES_PER_WEEK = ["2", "3", "5"];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  classesPerWeek: string;
  studentAge: string;
  notes: string;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  course: "",
  classesPerWeek: "",
  studentAge: "",
  notes: "",
};

const inputCls =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#145c42]/50 focus:border-[#145c42] transition-all duration-200";
const labelCls = "block text-sm font-semibold text-stone-700 mb-1.5";

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSuccess(true);
      setForm(INITIAL);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">

      {/* ── Minimal Navbar ── */}
      <header className="sticky top-0 z-50 bg-[#0f3d2e] border-b border-[#1a5c43]/50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-[#0f3d2e] font-bold text-sm">R</span>
            </div>
            <div className="leading-tight text-left">
              <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
              <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/"
              className="text-stone-300 hover:text-white text-sm font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero banner ── */}
      <div className="bg-gradient-to-br from-[#0f3d2e] to-[#145c42] text-white py-14 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-5">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Student Admission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Register at <span className="text-amber-400">Al Rauf International Quran Academy</span>
        </h1>
        <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto">
          Complete your registration below and our team will confirm your enrollment and payment details within 24 hours.
        </p>
      </div>

      {/* ── Trust badges ── */}
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              emoji: "🔒",
              label: "Secure & Private",
              sub: "Data never sold or shared",
            },
            {
              emoji: "✅",
              label: "Verified Qualified Teachers",
              sub: "Ijazah-certified scholars",
            },
            {
              emoji: "📅",
              label: "No Long-Term Contract",
              sub: "Pay as you go, cancel anytime",
            },
          ].map(({ emoji, label, sub }) => (
            <div key={label} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-stone-200 shadow-sm">
              <span className="text-xl flex-shrink-0">{emoji}</span>
              <div>
                <p className="font-semibold text-stone-800 text-xs leading-tight">{label}</p>
                <p className="text-stone-500 text-[11px] mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Form card ── */}
      <div className="max-w-2xl mx-auto px-4 py-12">

        {success ? (
          /* ── Success state ── */
          <div className="bg-white rounded-2xl shadow-md border border-stone-200 p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#145c42]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">Registration Received! 🎉</h2>
            <p className="text-stone-600 leading-relaxed mb-2">
              Thank you for registering. A confirmation email has been sent to your inbox.
            </p>
            <p className="text-[#145c42] font-semibold mb-8">
              We've received your registration and will contact you within 24 hours to confirm enrollment and payment details.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#145c42] hover:bg-[#0f3d2e] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          /* ── Form ── */
          <div className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-stone-100 bg-stone-50">
              <h2 className="text-lg font-bold text-stone-900">Admission Details</h2>
              <p className="text-stone-500 text-sm mt-0.5">All fields marked with <span className="text-red-500">*</span> are required.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="reg-fullName" className={labelCls}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="reg-email" className={labelCls}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="reg-phone" className={labelCls}>
                  WhatsApp / Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 555 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
                <p className="text-xs text-stone-400 mt-1">Include country code (e.g. +44, +1, +92)</p>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="reg-country" className={labelCls}>
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-country"
                  name="country"
                  type="text"
                  required
                  placeholder="e.g. United States"
                  value={form.country}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>

              {/* Course */}
              <div>
                <label htmlFor="reg-course" className={labelCls}>
                  Course Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="reg-course"
                  name="course"
                  required
                  value={form.course}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="" disabled>Select a course…</option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Classes per Week */}
              <div>
                <label htmlFor="reg-classesPerWeek" className={labelCls}>
                  Number of Classes per Week <span className="text-red-500">*</span>
                </label>
                <select
                  id="reg-classesPerWeek"
                  name="classesPerWeek"
                  required
                  value={form.classesPerWeek}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="" disabled>Select frequency…</option>
                  {CLASSES_PER_WEEK.map((n) => (
                    <option key={n} value={n}>{n} classes per week</option>
                  ))}
                </select>
              </div>

              {/* Student Age */}
              <div>
                <label htmlFor="reg-studentAge" className={labelCls}>
                  Student Age <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-studentAge"
                  name="studentAge"
                  type="text"
                  required
                  placeholder="e.g. 12 / Adult"
                  value={form.studentAge}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="reg-notes" className={labelCls}>
                  Additional Notes
                </label>
                <textarea
                  id="reg-notes"
                  name="notes"
                  rows={4}
                  placeholder="Any special requirements, prior experience, preferred teacher gender, etc."
                  value={form.notes}
                  onChange={handleChange}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
                  ⚠️ {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 disabled:cursor-not-allowed text-[#0f3d2e] font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  "Submit Registration →"
                )}
              </button>

              <p className="text-center text-xs text-stone-400 pt-1">
                Want to try first?{" "}
                <Link href="/book-trial" className="text-[#145c42] hover:underline font-medium">
                  Book 3 free trial classes →
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
