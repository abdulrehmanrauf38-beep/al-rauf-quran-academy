import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import BlogHeader from "@/components/BlogHeader";
import SocialShareButtons from "@/components/SocialShareButtons";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const url = `https://al-rauf-quran-academy.vercel.app/blog/${post.slug}`;

  return {
    title: `${post.title} | Al Rauf Quran Academy`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Al Rauf Quran Academy",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentUrl = `https://al-rauf-quran-academy.vercel.app/blog/${post.slug}`;
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased flex flex-col">
      <BlogHeader />

      {/* Main Content Area */}
      <main className="flex-1 py-10 md:py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-stone-500">
              <li>
                <Link href="/" className="hover:text-[#145c42] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-[#145c42] transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-stone-800 font-medium truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8 pb-8 border-b border-stone-200">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#145c42] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-stone-500">•</span>
              <span className="text-xs text-stone-500">{post.readTime}</span>
              <span className="text-xs text-stone-500">•</span>
              <time className="text-xs text-stone-500">{post.date}</time>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Author info & Top Social Share buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0f3d2e] flex items-center justify-center font-bold text-sm shadow-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">{post.author}</p>
                  <p className="text-xs text-stone-500">{post.authorRole}</p>
                </div>
              </div>

              {/* Social Share Buttons (Top) */}
              <SocialShareButtons
                url={currentUrl}
                title={post.title}
                description={post.excerpt}
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-6">
            {post.content.intro.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed text-stone-800">
                {paragraph}
              </p>
            ))}

            {post.content.sections.map((section, idx) => (
              <section key={idx} className="my-8">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200/60">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mb-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2.5 my-4 ps-2">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2.5 text-stone-700 text-sm sm:text-base">
                        <span className="text-[#145c42] font-bold mt-1">✓</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Conclusion Callout */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 my-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0f3d2e] mb-1">
                {post.conclusionLabel}
              </p>
              <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-medium">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* Bottom Social Share Bar */}
          <div className="my-10 p-5 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-stone-900">Enjoyed this article?</p>
              <p className="text-xs text-stone-500">Share it with friends and family learning the Holy Quran.</p>
            </div>
            <SocialShareButtons
              url={currentUrl}
              title={post.title}
              description={post.excerpt}
            />
          </div>

          {/* Course CTA Banner */}
          <div className="my-10 bg-gradient-to-br from-[#0f3d2e] to-[#145c42] rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl">
            <span className="inline-block text-2xl mb-3">🌟</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Ready to Start Your Quran Journey?
            </h2>
            <p className="text-stone-200 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              Book 3 Free 1-on-1 Trial Classes today. Female tutors available for sisters and children, with flexible timings across USA, UK, Canada, and Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book-trial"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0f3d2e] font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Book 3 Free Trial Classes →
              </Link>
              <a
                href="https://wa.me/923712215078?text=Assalamu%20Alaikum%2C%20I'd%20like%20to%20know%20more%20about%20Al%20Rauf%20Quran%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-stone-200">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-5 bg-white rounded-2xl border border-stone-200 hover:border-[#145c42]/40 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                        <span className="font-semibold text-[#145c42]">{related.category}</span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="text-sm font-bold text-stone-900 group-hover:text-[#145c42] transition-colors leading-snug mb-2">
                        {related.title}
                      </h3>
                      <p className="text-stone-500 text-xs line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#145c42] mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {related.readMoreText} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b271d] text-stone-300 py-10 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Al Rauf Quran Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
            <Link href="/teachers" className="hover:text-amber-400 transition-colors">Teachers</Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
