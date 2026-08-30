import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased flex flex-col justify-between">
      {/* ── HEADER ── */}
      <header className="bg-[#0f3d2e] border-b border-[#1a5c43]/50 shadow-md">
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
          <Link
            href="/"
            className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors"
          >
            ← Return Home
          </Link>
        </div>
      </header>

      {/* ── MAIN 404 CONTENT ── */}
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl relative overflow-hidden">
          
          {/* Subtle Decorative Glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Compass / Book SVG Illustration */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#0f3d2e] to-[#145c42] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0f3d2e]/20 border-2 border-amber-400/40 relative">
            <svg
              className="w-12 h-12 sm:w-14 sm:h-14 text-amber-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              {/* Compass / Star of guidance */}
              <circle cx="12" cy="12" r="9" stroke="#f59e0b" strokeWidth="1.5" />
              <path
                d="M12 3v3m0 12v3M3 12h3m12 0h3M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z"
                fill="#f59e0b"
                fillOpacity="0.2"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="1.5" fill="#f59e0b" />
            </svg>
            <div className="absolute -bottom-2 bg-amber-500 text-[#0f3d2e] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
              404
            </div>
          </div>

          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest block mb-2">
            Lost Your Way?
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e] mb-3 leading-tight">
            Page Not Found
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            Looks like this page wandered off the path! The link you followed may be broken, moved, or doesn&apos;t exist. Let us guide you back to your Quran learning journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#0f3d2e] hover:bg-[#145c42] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow hover:shadow-md hover:-translate-y-0.5"
            >
              ← Back to Home
            </Link>
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5"
            >
              Book a Free Trial →
            </Link>
          </div>

          {/* Quick Helpful Links */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap justify-center gap-4 text-xs text-stone-500">
            <Link href="/#courses" className="hover:text-[#145c42] hover:underline">
              Explore Courses
            </Link>
            <span>•</span>
            <Link href="/pricing" className="hover:text-[#145c42] hover:underline">
              Pricing Plans
            </Link>
            <span>•</span>
            <Link href="/teachers" className="hover:text-[#145c42] hover:underline">
              Our Teachers
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-[#145c42] hover:underline">
              FAQs
            </Link>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#071f17] text-stone-400 py-6 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Al Rauf International Quran Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
