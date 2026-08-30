"use client";

import { useState } from "react";
import Link from "next/link";

const COURSES = [
  "Noorani Qaida",
  "Quran Reading (Nazra)",
  "Tajweed Mastery",
  "Hifz (Quran Memorization)",
  "Islamic Studies",
];

export default function ProgressReportPage() {
  const [formData, setFormData] = useState({
    studentName: "Zayd Ali",
    parentEmail: "",
    course: "Noorani Qaida",
    date: new Date().toISOString().split("T")[0],
    teacherName: "Hafiz Abdul Rauf",
    covered: "Completed Lesson 6 (Tanween - Double Fathah, Kasrah, Dammah). Practiced identifying dynamic Nunation sounds and connecting letters accurately across verses 1-12.",
    strengths: "Excellent articulation of throat letters (Makhraj of Ayn and Ha). Strong rhythm and enthusiastic participation throughout the class.",
    areasToPractice: "Needs light revision on distinguishing between heavy letter 'Qaf' (ق) vs light 'Kaf' (ك). Take a brief pause before pronouncing double vowels.",
    homework: "Practice reading Lesson 6, Lines 3 to 8, three times before our next session on Thursday. Audio sample was sent via WhatsApp.",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-progress-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to dispatch progress report.");

      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSuccess(false);
    setFormData((prev) => ({
      ...prev,
      studentName: "",
      parentEmail: "",
      covered: "",
      strengths: "",
      areasToPractice: "",
      homework: "",
    }));
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans antialiased py-8 px-4 sm:px-6 lg:px-8">
      
      {/* ── HEADER / ADMIN TOOLBAR ── */}
      <header className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f3d2e] text-white p-5 rounded-2xl shadow-lg border border-[#1a5c43]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow flex-shrink-0">
              <span className="text-[#0f3d2e] font-bold text-sm">R</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Al Rauf International Quran Academy</p>
              <p className="text-amber-400 font-medium text-xs">Instructor Progress Report Portal</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-stone-300 hover:text-white transition-colors"
            >
              ← Back to Site
            </Link>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-full transition-colors border border-white/20"
            >
              {showPreview ? "Hide Live Preview" : "👁️ Show Live Preview"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        
        {/* Info Banner */}
        <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-4 mb-6 flex items-start gap-3 text-amber-900 text-xs sm:text-sm shadow-sm">
          <span className="text-xl flex-shrink-0">📋</span>
          <div>
            <p className="font-bold">Staff &amp; Teacher Progress Dispatcher</p>
            <p className="text-stone-600 mt-0.5 leading-relaxed">
              Fill out this report after your session. It will be professionally styled and automatically delivered to the parent&apos;s email address with a CC copy to our academy administration.
            </p>
          </div>
        </div>

        {success ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-300 shadow-xl text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#145c42] flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-extrabold text-[#0f3d2e] mb-2">
              Progress Report Sent Successfully!
            </h2>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              The report for <strong>{formData.studentName}</strong> has been emailed to <strong>{formData.parentEmail}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleReset}
                className="bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow"
              >
                Send Another Progress Report
              </button>
              <Link
                href="/"
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Section */}
            <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md ${showPreview ? "lg:col-span-6" : "lg:col-span-12"}`}>
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Meta Inputs Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Student Full Name *
                    </label>
                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Zayd Ali"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                    />
                  </div>

                  <div>
                    <label htmlFor="parentEmail" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Parent Email Address *
                    </label>
                    <input
                      id="parentEmail"
                      name="parentEmail"
                      type="email"
                      required
                      value={formData.parentEmail}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="course" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Course Enrolled *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                    >
                      {COURSES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Session Date *
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                    />
                  </div>

                  <div>
                    <label htmlFor="teacherName" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Teacher Name
                    </label>
                    <input
                      id="teacherName"
                      name="teacherName"
                      type="text"
                      value={formData.teacherName}
                      onChange={handleChange}
                      placeholder="e.g. Hafiz Abdul Rauf"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                    />
                  </div>
                </div>

                {/* Section 1: Covered */}
                <div>
                  <label htmlFor="covered" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    📖 1. What We Covered This Session *
                  </label>
                  <textarea
                    id="covered"
                    name="covered"
                    rows={3}
                    required
                    value={formData.covered}
                    onChange={handleChange}
                    placeholder="Specific Surah, Ayahs, Qaida rules, or lesson numbers reviewed..."
                    className="w-full rounded-xl border border-stone-300 bg-stone-50/50 p-3.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                  />
                </div>

                {/* Section 2: Strengths */}
                <div>
                  <label htmlFor="strengths" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    🌟 2. Student Strengths &amp; Commendations
                  </label>
                  <textarea
                    id="strengths"
                    name="strengths"
                    rows={2}
                    value={formData.strengths}
                    onChange={handleChange}
                    placeholder="Where did the student excel today? (Pronunciation, focus, quick memorization)..."
                    className="w-full rounded-xl border border-stone-300 bg-stone-50/50 p-3.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                  />
                </div>

                {/* Section 3: Areas to Practice */}
                <div>
                  <label htmlFor="areasToPractice" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    🎯 3. Areas to Practice &amp; Polish
                  </label>
                  <textarea
                    id="areasToPractice"
                    name="areasToPractice"
                    rows={2}
                    value={formData.areasToPractice}
                    onChange={handleChange}
                    placeholder="Specific letters, Tajweed rules (e.g. Ikhfa, Ghunnah), or pausing to work on..."
                    className="w-full rounded-xl border border-stone-300 bg-stone-50/50 p-3.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                  />
                </div>

                {/* Section 4: Homework */}
                <div>
                  <label htmlFor="homework" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    📝 4. Homework &amp; Next Steps
                  </label>
                  <textarea
                    id="homework"
                    name="homework"
                    rows={2}
                    value={formData.homework}
                    onChange={handleChange}
                    placeholder="Clear guidance on what to revise before the next class..."
                    className="w-full rounded-xl border border-stone-300 bg-stone-50/50 p-3.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                  />
                </div>

                {error && (
                  <p className="text-red-700 text-xs bg-red-50 border border-red-200 p-3 rounded-xl">
                    ⚠️ {error}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-75 text-[#0f3d2e] font-bold text-sm py-3.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending Progress Report..." : "Send Report to Parent 📤"}
                  </button>
                  
                  {!showPreview && (
                    <button
                      type="button"
                      onClick={() => setShowPreview(true)}
                      className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
                    >
                      👁️ Preview First
                    </button>
                  )}
                </div>

              </form>
            </div>

            {/* Preview Section */}
            {showPreview && (
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md sticky top-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    Live Email Preview
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">
                    To: {formData.parentEmail || "parent@example.com"}
                  </span>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 text-xs sm:text-sm space-y-4">
                  {/* Email Header */}
                  <div className="bg-[#0f3d2e] text-white p-4 rounded-xl text-center">
                    <p className="font-bold text-sm">Al Rauf International Quran Academy</p>
                    <p className="text-amber-400 text-[11px] font-semibold uppercase tracking-wider">
                      Student Progress Report
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1 text-xs">
                    <p><strong>Student:</strong> <span className="text-[#0f3d2e] font-bold">{formData.studentName || "Student"}</span></p>
                    <p><strong>Course:</strong> {formData.course}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Teacher:</strong> {formData.teacherName || "Instructor"}</p>
                  </div>

                  {/* Covered */}
                  <div>
                    <p className="font-bold text-[#0f3d2e] mb-1">📖 1. What We Covered:</p>
                    <p className="bg-white p-3 rounded-xl border-l-4 border-[#145c42] text-stone-700 whitespace-pre-line text-xs">
                      {formData.covered || "Lesson summary..."}
                    </p>
                  </div>

                  {/* Strengths */}
                  {formData.strengths && (
                    <div>
                      <p className="font-bold text-emerald-800 mb-1">🌟 2. Strengths &amp; Milestones:</p>
                      <p className="bg-emerald-50/70 p-3 rounded-xl border-l-4 border-emerald-500 text-emerald-900 whitespace-pre-line text-xs">
                        {formData.strengths}
                      </p>
                    </div>
                  )}

                  {/* Practice */}
                  {formData.areasToPractice && (
                    <div>
                      <p className="font-bold text-amber-800 mb-1">🎯 3. Focus Areas to Practice:</p>
                      <p className="bg-amber-50/70 p-3 rounded-xl border-l-4 border-amber-500 text-amber-900 whitespace-pre-line text-xs">
                        {formData.areasToPractice}
                      </p>
                    </div>
                  )}

                  {/* Homework */}
                  {formData.homework && (
                    <div>
                      <p className="font-bold text-slate-800 mb-1">📝 4. Homework &amp; Next Steps:</p>
                      <p className="bg-slate-50 p-3 rounded-xl border-l-4 border-slate-500 text-slate-800 whitespace-pre-line text-xs">
                        {formData.homework}
                      </p>
                    </div>
                  )}

                  <p className="text-center text-[10px] text-stone-400 pt-2 border-t border-stone-200">
                    بارك الله فيكم (Barakallahu feekum) • Al Rauf International Quran Academy
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

      </main>

    </div>
  );
}
