"use client";

import { useState } from "react";
import Link from "next/link";

interface LeadMagnetFormProps {
  className?: string;
  source?: string;
}

export default function LeadMagnetForm({ className = "", source = "homepage" }: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to process request.");

      setSuccess(true);
      setEmail("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`w-full max-w-lg ${className}`}>
      {success ? (
        <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center text-white shadow-xl backdrop-blur-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 text-xl">
            ✓
          </div>
          <p className="text-lg font-bold text-amber-400 mb-1">
            Your Free Chart is Ready! 🎉
          </p>
          <p className="text-stone-300 text-xs sm:text-sm mb-4 leading-relaxed">
            We&apos;ve sent a copy to your email. You can also view and print your high-resolution chart right now:
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link
              href="/resources/arabic-alphabet-chart"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow hover:shadow-md"
            >
              📖 View &amp; Print Chart Now →
            </Link>
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-full transition-colors"
            >
              Book 3 Free Trials
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email address..."
                className="w-full rounded-full bg-white/95 text-stone-900 placeholder:text-stone-400 px-5 py-3.5 text-sm sm:text-base border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all shadow-inner"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 disabled:opacity-70 text-[#0f3d2e] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-[#0f3d2e]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Get Free Chart</span>
                  <span>📥</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-300 text-xs mt-2 font-medium bg-red-950/40 px-3 py-1 rounded-lg">
              ⚠️ {error}
            </p>
          )}

          <p className="text-[11px] text-stone-300/80 mt-2.5 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            <span>🔒 100% Free • No spam • Instant printable PDF access</span>
          </p>
        </form>
      )}
    </div>
  );
}
