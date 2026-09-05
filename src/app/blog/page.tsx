import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "Blog & Quran Learning Guides | Al Rauf Quran Academy",
  description:
    "Explore practical guides on Noorani Qaida, Tajweed rules, online Quran classes for kids and sisters, and Quranic Arabic from Al Rauf Quran Academy scholars.",
  alternates: {
    canonical: "https://al-rauf-quran-academy.vercel.app/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased flex flex-col">
      <BlogHeader />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#145c42] font-semibold text-xs uppercase tracking-widest bg-emerald-100/60 px-3 py-1 rounded-full">
              Articles &amp; Guides
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 mt-4 mb-4">
              Quran Learning Insights &amp; Guides
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              Practical guides on Tajweed, Noorani Qaida, memorization tips, and Islamic parenting from certified scholars.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 hover:border-[#145c42]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#145c42] bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-stone-400">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#145c42] transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#0f3d2e] flex items-center justify-center font-bold text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-800">{post.author}</p>
                      <p className="text-[11px] text-stone-400">{post.date}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#145c42] group-hover:text-amber-600 transition-colors"
                  >
                    Read More <span className="ms-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-br from-[#0f3d2e] to-[#145c42] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Start Learning with a Certified Quran Tutor
            </h2>
            <p className="text-stone-200 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Experience our 1-on-1 personalized teaching methodology with 3 free trial classes. No credit card required.
            </p>
            <Link
              href="/book-trial"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book 3 Free Trial Classes Today
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b271d] text-stone-300 py-10 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Al Rauf Quran Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
            <Link href="/teachers" className="hover:text-amber-400 transition-colors">Teachers</Link>
            <Link href="/blog" className="text-amber-400 font-semibold">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
