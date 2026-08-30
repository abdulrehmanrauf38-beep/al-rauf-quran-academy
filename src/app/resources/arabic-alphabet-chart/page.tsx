"use client";

import Link from "next/link";

interface ArabicLetter {
  id: number;
  arabic: string;
  name: string;
  transliteration: string;
  sound: string;
  makhraj: string;
  heavy?: boolean;
}

const ARABIC_ALPHABET: ArabicLetter[] = [
  { id: 1, arabic: "ا", name: "Alif", transliteration: "ā / a", sound: "Like 'a' in apple / long 'aa'", makhraj: "Chest / Throat" },
  { id: 2, arabic: "ب", name: "Bā’", transliteration: "b", sound: "Like 'b' in boat", makhraj: "Both Lips" },
  { id: 3, arabic: "ت", name: "Tā’", transliteration: "t", sound: "Like 't' in table", makhraj: "Tip of Tongue & Upper Teeth" },
  { id: 4, arabic: "ث", name: "Thā’", transliteration: "th", sound: "Like 'th' in think (soft)", makhraj: "Tip of Tongue & Upper Incisors" },
  { id: 5, arabic: "ج", name: "Jeem", transliteration: "j", sound: "Like 'j' in jump", makhraj: "Middle of Tongue & Palate" },
  { id: 6, arabic: "ح", name: "Ḥā’", transliteration: "ḥ", sound: "Clear breathy 'h' from throat", makhraj: "Middle of Throat" },
  { id: 7, arabic: "خ", name: "Khā’", transliteration: "kh", sound: "Raspy 'kh' like Scottish loch", makhraj: "Upper Throat", heavy: true },
  { id: 8, arabic: "د", name: "Dāl", transliteration: "d", sound: "Like 'd' in door", makhraj: "Tip of Tongue & Upper Teeth" },
  { id: 9, arabic: "ذ", name: "Dhāl", transliteration: "dh", sound: "Like 'th' in this / feather", makhraj: "Tip of Tongue & Upper Incisors" },
  { id: 10, arabic: "ر", name: "Rā’", transliteration: "r", sound: "Rolled / tapped 'r' as in Spanish", makhraj: "Tip of Tongue & Palate" },
  { id: 11, arabic: "ز", name: "Zāy", transliteration: "z", sound: "Like 'z' in zebra", makhraj: "Tip of Tongue & Lower Teeth" },
  { id: 12, arabic: "س", name: "Seen", transliteration: "s", sound: "Sharp 's' like in sun", makhraj: "Tip of Tongue & Lower Teeth" },
  { id: 13, arabic: "ش", name: "Sheen", transliteration: "sh", sound: "Like 'sh' in shine", makhraj: "Middle of Tongue & Palate" },
  { id: 14, arabic: "ص", name: "Ṣād", transliteration: "ṣ", sound: "Deep, heavy 's' with rounded lips", makhraj: "Tip of Tongue (Full-mouth)", heavy: true },
  { id: 15, arabic: "ض", name: "Ḍād", transliteration: "ḍ", sound: "Heavy 'd' unique to Arabic", makhraj: "Sides of Tongue & Molars", heavy: true },
  { id: 16, arabic: "ط", name: "Ṭā’", transliteration: "ṭ", sound: "Deep, heavy, emphatic 't'", makhraj: "Tip of Tongue (Full-mouth)", heavy: true },
  { id: 17, arabic: "ظ", name: "Ẓā’", transliteration: "ẓ", sound: "Heavy, emphatic 'th' sound", makhraj: "Tip of Tongue (Full-mouth)", heavy: true },
  { id: 18, arabic: "ع", name: "‘Ayn", transliteration: "‘", sound: "Deep voiced guttural throat sound", makhraj: "Middle of Throat" },
  { id: 19, arabic: "غ", name: "Ghayn", transliteration: "gh", sound: "Gargling 'gh' like French 'r'", makhraj: "Upper Throat", heavy: true },
  { id: 20, arabic: "ف", name: "Fā’", transliteration: "f", sound: "Like 'f' in fish", makhraj: "Upper Teeth & Bottom Lip" },
  { id: 21, arabic: "ق", name: "Qāf", transliteration: "q", sound: "Deep heavy 'k' from uvula", makhraj: "Deep Back of Tongue", heavy: true },
  { id: 22, arabic: "ك", name: "Kāf", transliteration: "k", sound: "Like 'k' in kite", makhraj: "Back of Tongue & Soft Palate" },
  { id: 23, arabic: "ل", name: "Lām", transliteration: "l", sound: "Like 'l' in light", makhraj: "Edges of Tongue to Palate" },
  { id: 24, arabic: "م", name: "Meem", transliteration: "m", sound: "Like 'm' in moon", makhraj: "Both Lips Closed" },
  { id: 25, arabic: "ن", name: "Noon", transliteration: "n", sound: "Like 'n' in noon (with nasal ghunnah)", makhraj: "Tip of Tongue & Upper Palate" },
  { id: 26, arabic: "هـ", name: "Hā’", transliteration: "h", sound: "Soft 'h' like in house", makhraj: "Deep Bottom of Throat" },
  { id: 27, arabic: "و", name: "Wāw", transliteration: "w / ū", sound: "Like 'w' in water / long 'oo'", makhraj: "Rounding Both Lips" },
  { id: 28, arabic: "ي", name: "Yā’", transliteration: "y / ī", sound: "Like 'y' in yellow / long 'ee'", makhraj: "Middle of Tongue & Palate" },
];

export default function ArabicAlphabetChartPage() {
  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans antialiased print:bg-white print:text-black">
      
      {/* ── TOP NAV / ACTION BAR (Hidden in print) ── */}
      <header className="sticky top-0 z-40 bg-[#0f3d2e] border-b border-[#1a5c43] shadow-md print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow flex-shrink-0">
              <span className="text-[#0f3d2e] font-bold text-xs">R</span>
            </div>
            <div className="leading-tight text-left">
              <p className="text-white font-bold text-sm tracking-tight">Al Rauf</p>
              <p className="text-amber-400 font-medium text-[11px] tracking-tight">International Quran Academy</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all shadow hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24-1.048-.36-2.12-.36-3.21 0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.09-.12 2.162-.36 3.21M6.72 13.829a8.966 8.966 0 01-2.92-2.329m2.92 2.329l1.79-1.79M17.28 13.829l-1.79-1.79m1.79 1.79a8.966 8.966 0 002.92-2.329M6.75 19.5h10.5M9 16.5h6m-3-6v9" />
              </svg>
              <span>Print / Save PDF</span>
            </button>
            <Link
              href="/book-trial"
              className="hidden sm:inline-flex items-center bg-[#145c42] hover:bg-[#1a5c43] text-white border border-white/20 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Book 3 Free Trials
            </Link>
          </div>
        </div>
      </header>

      {/* ── MAIN CHART CONTAINER ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 print:p-0 print:max-w-none">
        
        {/* Printable Card Container */}
        <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-xl overflow-hidden print:border-none print:shadow-none print:rounded-none">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-br from-[#0f3d2e] via-[#145c42] to-[#0a2d20] text-white p-6 sm:p-8 text-center relative overflow-hidden print:bg-[#0f3d2e] print:text-white">
            {/* Gold Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 rounded-full px-3.5 py-1 mb-3 print:hidden">
              <span className="text-amber-300 text-[11px] font-bold uppercase tracking-widest">Free Educational Resource</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
              The Arabic Alphabet Chart
            </h1>
            <p className="text-stone-200 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Complete Beginner&apos;s Pronunciation &amp; Makhārij Guide • 28 Fundamental Letters of the Holy Quran
            </p>
            <p className="text-amber-400 text-xs font-semibold mt-2">
              Al Rauf International Quran Academy • www.globalquraninstitute.com
            </p>
          </div>

          {/* Quick Legend / Guide */}
          <div className="bg-amber-50/60 border-b border-amber-200/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700">
            <div className="flex items-center gap-4">
              <span className="font-bold text-[#0f3d2e]">Legend:</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-medium">Heavy / Emphatic Letters (Tafkheem)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="font-medium">Standard Letters (Tarqeeq)</span>
              </span>
            </div>
            <span className="italic text-stone-500 hidden md:inline">
              Read from Right to Left →
            </span>
          </div>

          {/* 28 Letters Grid */}
          <div className="p-4 sm:p-8 bg-stone-50/40 print:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
              {ARABIC_ALPHABET.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-3 sm:p-4 border transition-all duration-200 flex flex-col items-center text-center relative overflow-hidden ${
                    item.heavy
                      ? "border-amber-300 shadow-sm ring-1 ring-amber-400/30"
                      : "border-stone-200/90 shadow-sm hover:border-[#145c42]/50"
                  }`}
                >
                  {/* Number Badge */}
                  <span className="absolute top-2 left-2 text-[10px] font-bold text-stone-400">
                    #{item.id}
                  </span>

                  {item.heavy && (
                    <span className="absolute top-2 right-2 text-[9px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded">
                      Heavy
                    </span>
                  )}

                  {/* Big Arabic Letter */}
                  <div className="mt-2 mb-1.5 h-14 sm:h-16 flex items-center justify-center">
                    <span
                      dir="rtl"
                      lang="ar"
                      className={`text-4xl sm:text-5xl font-bold font-serif leading-none ${
                        item.heavy ? "text-amber-700" : "text-[#0f3d2e]"
                      }`}
                    >
                      {item.arabic}
                    </span>
                  </div>

                  {/* Letter Name */}
                  <h2 className="font-extrabold text-stone-900 text-sm sm:text-base leading-tight">
                    {item.name}
                  </h2>
                  <p className="text-amber-700 font-mono text-xs font-semibold mb-1">
                    /{item.transliteration}/
                  </p>

                  {/* Pronunciation Sound Key */}
                  <p className="text-[11px] text-stone-600 leading-tight flex-1 mb-2 font-normal">
                    {item.sound}
                  </p>

                  {/* Makhraj Point */}
                  <div className="w-full pt-1.5 border-t border-stone-100">
                    <span className="text-[10px] text-stone-500 font-medium block truncate" title={item.makhraj}>
                      📍 {item.makhraj}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Callout */}
          <div className="bg-[#0f3d2e] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-400/40">
            <div>
              <p className="text-amber-400 font-bold text-sm sm:text-base">
                Ready to learn Quran recitation with a live certified teacher?
              </p>
              <p className="text-stone-300 text-xs sm:text-sm mt-0.5">
                Join Al Rauf International Quran Academy today with 3 free trial classes. No credit card required.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="print:hidden bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow"
              >
                🖨️ Print Reference Sheet
              </button>
              <Link
                href="/book-trial"
                className="print:hidden bg-white hover:bg-stone-100 text-[#0f3d2e] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all"
              >
                Book Free Trial →
              </Link>
            </div>
          </div>

        </div>

        {/* Print-only footer branding */}
        <div className="hidden print:block text-center mt-4 text-xs text-stone-500">
          © {new Date().getFullYear()} Al Rauf International Quran Academy • Online 1-on-1 Quran Lessons • www.globalquraninstitute.com
        </div>
      </main>
    </div>
  );
}
