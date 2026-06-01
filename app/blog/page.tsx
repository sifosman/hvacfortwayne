import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC Blog | Fort Wayne & Allen County Tips, Guides & Advice",
  description:
    "Expert HVAC tips, guides, and local advice for Fort Wayne and Allen County homeowners. Learn about heat pumps, energy rebates, maintenance, and more.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/" },
};

const posts = [
  {
    title: "Why Fort Wayne's Lake-Effect Humidity Kills AC Compressors",
    slug: "lake-effect-humidity-ac-compressors",
    excerpt: "Fort Wayne's lake-effect humidity is the hidden killer of AC compressors. Learn why Allen County's muggy summers cause more failures than heat alone.",
  },
  {
    title: "Fort Wayne Winter Furnace Survival Guide",
    slug: "winter-furnace-survival-fort-wayne",
    excerpt: "Fort Wayne's winters are brutal on furnaces. Here's a step-by-step survival guide for Allen County homeowners.",
  },
  {
    title: "The Real Cost of Running AC in Fort Wayne",
    slug: "real-cost-running-ac-fort-wayne",
    excerpt: "How much does air conditioning actually cost in Fort Wayne? We break down I&M electric rates, SEER efficiency, and real monthly bills.",
  },
  {
    title: "Should You Replace Your 15-Year-Old Furnace?",
    slug: "replace-15-year-old-furnace",
    excerpt: "Your furnace is 15 years old and making noises. Repair or replace? We break down the real costs, risks, and payback math.",
  },
  {
    title: "Why Your Fort Wayne Basement Smells Musty",
    slug: "basement-musty-humidity-hvac",
    excerpt: "Fort Wayne basements are prone to musty odors because of clay soil, high humidity, and poor ventilation. Here's how to fix it.",
  },
  {
    title: "Fort Wayne Heat Pump Reality Check: 5 Homeowners Share Their First Winter",
    slug: "heat-pump-reality-check",
    excerpt: "Real Fort Wayne homeowners share their experiences with heat pumps through the first northern Indiana winter.",
  },
  {
    title: "Allen County Energy Rebates 2026: How to Get Up to $3,000+ Back",
    slug: "allen-county-energy-rebates-2026",
    excerpt: "Every rebate and tax credit available to Fort Wayne homeowners for HVAC upgrades in 2026.",
  },
];

export default function BlogIndex() {
  return (
    <main className="bg-white">
      <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">HVAC Knowledge</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
            Fort Wayne <span className="text-red-600 italic">HVAC Blog</span>
          </h1>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Local tips, honest advice, and researched guides for Allen County homeowners. No generic "change your filter"
            content — just real Fort Wayne HVAC knowledge.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-slate-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}/`} className="block">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight hover:text-red-600 transition-colors">{post.title}</h2>
                <p className="text-slate-600 mt-3 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-red-600 font-bold text-sm uppercase tracking-wider">Read Article →</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
