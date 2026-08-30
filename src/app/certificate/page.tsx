"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const COURSES = [
  "Noorani Qaida",
  "Quran Reading (Nazra)",
  "Tajweed Mastery",
  "Hifz (Quran Memorization)",
  "Islamic Studies",
];

export default function CertificatePage() {
  const [studentName, setStudentName] = useState("Sarah Ahmed");
  const [courseName, setCourseName] = useState("Noorani Qaida");
  const [completionDate, setCompletionDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [certId, setCertId] = useState("AIQA-2026-8941");
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const certRef = useRef<HTMLDivElement>(null);

  function generateRandomId() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const year = new Date().getFullYear();
    setCertId(`AIQA-${year}-${randomNum}`);
  }

  // Format date nicely (e.g. "October 24, 2026")
  function formatDisplayDate(dateStr: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  async function handleDownloadPdf() {
    if (!certRef.current) return;
    setIsGeneratingPdf(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(certRef.current, {
        scale: 2, // High resolution
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");

      // Landscape A4 dimensions in mm: 297 x 210
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = 297;
      const pdfHeight = 210;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
      const cleanName = (studentName || "Student").replace(/\s+/g, "_");
      const cleanCourse = courseName.replace(/[^a-zA-Z0-9]/g, "_");
      pdf.save(`Certificate_${cleanName}_${cleanCourse}.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      alert("Could not generate PDF automatically. You can use the Print button as an alternative.");
    } finally {
      setIsGeneratingPdf(false);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans antialiased py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      
      {/* ── HEADER / ADMIN TOOLBAR (Hidden when printing) ── */}
      <header className="max-w-6xl mx-auto mb-8 print:hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f3d2e] text-white p-5 rounded-2xl shadow-lg border border-[#1a5c43]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow flex-shrink-0">
              <span className="text-[#0f3d2e] font-bold text-sm">R</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Al Rauf International Quran Academy</p>
              <p className="text-amber-400 font-medium text-xs">Certificate Generator Portal</p>
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
              onClick={handlePrint}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-full transition-colors border border-white/20"
            >
              🖨️ Print Direct
            </button>
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="bg-amber-500 hover:bg-amber-400 disabled:opacity-75 text-[#0f3d2e] font-bold text-xs px-5 py-2 rounded-full transition-all shadow hover:shadow-md flex items-center gap-1.5"
            >
              {isGeneratingPdf ? (
                <span>Generating PDF...</span>
              ) : (
                <>
                  <span>Download PDF</span>
                  <span>📥</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── FORM CONTROLS (Hidden when printing) ── */}
      <section className="max-w-6xl mx-auto mb-10 print:hidden">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md">
          {/* Informational Banner Note */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 mb-6 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
            <span className="text-lg flex-shrink-0">ℹ️</span>
            <div>
              <p className="font-bold">Staff &amp; Academy Administration Tool</p>
              <p className="text-stone-600 mt-0.5">
                This certificate can be generated by our team once a student completes a course level. Customize the student details below to update the live preview.
              </p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Student Name */}
            <div>
              <label htmlFor="cert-name" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Student Full Name *
              </label>
              <input
                id="cert-name"
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Sarah Ahmed"
                className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
              />
            </div>

            {/* Course Name */}
            <div>
              <label htmlFor="cert-course" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Course Completed *
              </label>
              <select
                id="cert-course"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
              >
                {COURSES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Completion Date */}
            <div>
              <label htmlFor="cert-date" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Completion Date *
              </label>
              <input
                id="cert-date"
                type="date"
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
              />
            </div>

            {/* Certificate ID */}
            <div>
              <label htmlFor="cert-id" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Certificate ID
              </label>
              <div className="flex gap-2">
                <input
                  id="cert-id"
                  type="text"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-sm font-mono text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#145c42]"
                />
                <button
                  type="button"
                  onClick={generateRandomId}
                  title="Generate new ID"
                  className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl transition-colors text-sm"
                >
                  🔄
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ── CERTIFICATE PREVIEW CONTAINER ── */}
      <section className="max-w-6xl mx-auto flex flex-col items-center">
        
        <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-3 print:hidden">
          Official Certificate Live Preview (A4 Landscape)
        </p>

        {/* The Printable Certificate Box (Fixed 4:3 / A4 Ratio Landscape) */}
        <div className="w-full overflow-x-auto pb-6 print:p-0 print:overflow-visible flex justify-center">
          <div
            ref={certRef}
            id="certificate-print-area"
            className="w-[950px] min-h-[670px] bg-[#fffdfa] p-10 relative text-stone-900 shadow-2xl border-4 border-amber-500/80 rounded-2xl flex flex-col justify-between select-none overflow-hidden print:shadow-none print:w-full print:min-h-0 print:rounded-none print:border-4 print:border-amber-600"
            style={{
              boxShadow: "0 25px 50px -12px rgba(15, 61, 46, 0.25)",
            }}
          >
            {/* ── OUTER ORNATE GEOMETRIC FRAME ── */}
            <div className="absolute inset-3 border-2 border-[#145c42] rounded-xl pointer-events-none" />
            <div className="absolute inset-5 border border-amber-400/80 rounded-lg pointer-events-none" />

            {/* Corner Khatam 8-Point Star Ornaments */}
            {/* Top Left */}
            <div className="absolute top-4 left-4 w-10 h-10 text-amber-500 pointer-events-none">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="3" fill="#145c42" />
              </svg>
            </div>
            {/* Top Right */}
            <div className="absolute top-4 right-4 w-10 h-10 text-amber-500 pointer-events-none">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="3" fill="#145c42" />
              </svg>
            </div>
            {/* Bottom Left */}
            <div className="absolute bottom-4 left-4 w-10 h-10 text-amber-500 pointer-events-none">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="3" fill="#145c42" />
              </svg>
            </div>
            {/* Bottom Right */}
            <div className="absolute bottom-4 right-4 w-10 h-10 text-amber-500 pointer-events-none">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <rect x="8" y="8" width="24" height="24" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#f59e0b" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="3" fill="#145c42" />
              </svg>
            </div>

            {/* Subtle Watermark Medallion in Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <svg width="420" height="420" viewBox="0 0 100 100" fill="none">
                <rect x="20" y="20" width="60" height="60" stroke="#0f3d2e" strokeWidth="2" />
                <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" stroke="#0f3d2e" strokeWidth="2" />
                <circle cx="50" cy="50" r="28" stroke="#0f3d2e" strokeWidth="1.5" />
              </svg>
            </div>

            {/* ── TOP SECTION: Calligraphy & Header ── */}
            <div className="relative text-center pt-2">
              {/* Arabic Bismillah */}
              <p
                dir="rtl"
                lang="ar"
                className="text-amber-800 text-xl font-bold font-serif tracking-widest mb-1.5"
                style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
              >
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>

              {/* Academy Logo Emblem */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-sm">
                  <span className="text-[#0f3d2e] font-extrabold text-xs">R</span>
                </div>
                <span className="text-[#0f3d2e] font-extrabold text-sm uppercase tracking-widest">
                  Al Rauf International Quran Academy
                </span>
              </div>

              {/* Certificate Main Title */}
              <div className="mt-4 mb-2">
                <h1
                  className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-[#0f3d2e]"
                  style={{ fontFamily: "Georgia, Cambria, serif", letterSpacing: "0.15em" }}
                >
                  Certificate of Completion
                </h1>
                <div className="flex items-center justify-center gap-3 mt-1.5">
                  <div className="h-[1.5px] w-20 bg-amber-400" />
                  <span className="text-amber-600 text-xs">✦ ✦ ✦</span>
                  <div className="h-[1.5px] w-20 bg-amber-400" />
                </div>
              </div>
            </div>

            {/* ── MIDDLE SECTION: Recipient & Description ── */}
            <div className="relative text-center my-4 space-y-3 max-w-2xl mx-auto">
              <p className="text-stone-500 font-serif italic text-sm tracking-wide">
                This is proudly presented to
              </p>

              {/* Student Name */}
              <div className="py-1">
                <p
                  className="text-3xl sm:text-4xl font-bold text-[#0f3d2e] capitalize tracking-wide font-serif border-b-2 border-amber-400/80 inline-block px-8 pb-1.5"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {studentName || "Student Name"}
                </p>
              </div>

              {/* Achievement Text */}
              <p className="text-stone-700 text-sm leading-relaxed max-w-xl mx-auto pt-2">
                in recognition of successful completion of the prescribed curriculum for
              </p>

              {/* Course Completed Title */}
              <p
                className="text-xl sm:text-2xl font-extrabold text-amber-700 tracking-wide font-serif uppercase"
                style={{ fontFamily: "Georgia, Cambria, serif" }}
              >
                {courseName}
              </p>

              <p className="text-stone-600 text-xs leading-relaxed max-w-lg mx-auto">
                demonstrating sound recitation principles, diligence, and commendable dedication to the study of the Holy Quran under qualified academic supervision.
              </p>
            </div>

            {/* ── BOTTOM SECTION: Date, Gold Seal, Signature ── */}
            <div className="relative grid grid-cols-3 items-end pt-4 pb-2 border-t border-stone-200/80 px-4">
              
              {/* Left Column: Date & ID */}
              <div className="text-left space-y-1">
                <p className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">
                  Date of Completion
                </p>
                <p className="text-xs sm:text-sm font-bold text-stone-800 font-serif">
                  {formatDisplayDate(completionDate) || "Date"}
                </p>
                <p className="text-[10px] text-stone-400 font-mono">
                  Cert ID: {certId}
                </p>
              </div>

              {/* Center Column: Official Gold Seal Emblem */}
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 p-1 shadow-lg border-2 border-amber-200 flex items-center justify-center text-center">
                  <div className="w-full h-full rounded-full border border-dashed border-amber-900/40 bg-amber-400/90 flex flex-col items-center justify-center p-1 text-[#0f3d2e]">
                    <span className="text-[8px] font-extrabold uppercase tracking-widest leading-none">
                      OFFICIAL
                    </span>
                    <span className="text-base my-0.5">🌟</span>
                    <span className="text-[7.5px] font-bold uppercase tracking-tight text-center leading-none">
                      CERTIFIED ACADEMY
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Authorized Signature */}
              <div className="text-right space-y-1">
                {/* Script Signature Representation */}
                <div className="h-9 flex items-center justify-end">
                  <span
                    className="text-xl sm:text-2xl text-[#0f3d2e] font-serif italic tracking-wide"
                    style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive, serif" }}
                  >
                    Hafiz Abdul Rauf
                  </span>
                </div>
                <div className="h-[1px] w-40 ml-auto bg-stone-400" />
                <p className="text-xs font-bold text-[#0f3d2e]">
                  Hafiz Abdul Rauf
                </p>
                <p className="text-[10px] text-stone-500 font-medium">
                  Founder &amp; Director, Al Rauf International Quran Academy
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Export / Print Buttons under preview */}
        <div className="mt-4 flex gap-3 print:hidden">
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="bg-[#0f3d2e] hover:bg-[#145c42] disabled:opacity-75 text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            {isGeneratingPdf ? "Generating PDF..." : "📥 Download Certificate PDF"}
          </button>
          <button
            onClick={handlePrint}
            className="bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-6 py-3 rounded-full transition-all shadow"
          >
            🖨️ Print Certificate
          </button>
        </div>
      </section>

    </div>
  );
}
