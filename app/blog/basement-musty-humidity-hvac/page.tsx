import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Why Your Fort Wayne Basement Smells Musty (And What Your HVAC System Has to Do With It)",
  description:
    "Fort Wayne basements are prone to musty odors because of clay soil, high humidity, and poor ventilation. Your HVAC system is either helping or making it worse. Here's how to fix it.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/basement-musty-humidity-hvac/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hvacrepairfortwayne.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Basement Musty Humidity HVAC", item: "https://hvacrepairfortwayne.com/blog/basement-musty-humidity-hvac/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Your Fort Wayne Basement Smells Musty (And What Your HVAC System Has to Do With It)",
  description: "Fort Wayne basements are prone to musty odors because of clay soil, high humidity, and poor ventilation.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function BlogBasementMusty() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Indoor Air Quality</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">Why Your Fort Wayne Basement <span className="text-red-600 italic">Smells Musty</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">That damp, earthy smell in your basement is not just unpleasant — it is a sign that mold is growing, and your HVAC system is likely circulating those spores through every room in your house. Here is why it happens in Fort Wayne and how to fix it.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Why Fort Wayne Basements Get Musty</h2>
            <p>Three factors make Fort Wayne basements especially prone to moisture problems:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Clay-heavy soil:</strong> Allen County's soil has significant clay content, which holds moisture against foundation walls. Unlike sandy soil that drains quickly, clay wicks water toward your basement year-round.</li>
              <li><strong>High humidity:</strong> Fort Wayne's muggy season lasts 3.7 months with humidity regularly exceeding 75%. That moisture finds its way into basements through every crack, gap, and porous surface.</li>
              <li><strong>Poor ventilation:</strong> Many older Fort Wayne homes were built with basement windows that are never opened and no mechanical ventilation. Stagnant air allows humidity to accumulate.</li>
            </ol>
            <p>When relative humidity in a basement exceeds 60%, mold begins to grow on organic surfaces: drywall, wood framing, cardboard boxes, fabric, and even dust. The musty smell is actually microbial volatile organic compounds (MVOCs) — gases released by active mold colonies.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How Your HVAC System Makes It Worse (Or Better)</h2>
            <p>Your HVAC system interacts with basement moisture in two critical ways:</p>
            <h3 className="text-xl font-bold text-slate-900 mt-6">The Return Air Problem</h3>
            <p>In most Fort Wayne homes, the furnace or air handler sits in the basement and draws return air from a central return duct. If the basement is damp and moldy, that return air pulls spores directly into the system. The blower then distributes those spores through the supply ductwork to every room. Your basement mold becomes your whole-house mold problem.</p>
            <h3 className="text-xl font-bold text-slate-900 mt-6">The Dehumidification Opportunity</h3>
            <p>A properly configured HVAC system can actively reduce basement humidity. Central AC dehumidifies as it cools — but only when it runs long enough. An oversized AC that short-cycles will cool the basement without dehumidifying it, leaving the space cold and clammy. A correctly sized, two-stage or variable-speed system runs longer cycles and removes significantly more moisture.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Fix: A Layered Approach</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Fix the source of moisture:</strong> Grade soil away from the foundation. Clean gutters and extend downspouts 6+ feet from the house. Seal foundation cracks with hydraulic cement. If water is actively seeping through walls, consider exterior waterproofing or an interior drain tile system.</li>
              <li><strong>Install a whole-home dehumidifier:</strong> A portable dehumidifier handles one room. A whole-home unit integrates with your HVAC ductwork and maintains 45-50% humidity throughout the house, including the basement. Cost: $1,800-$3,500 installed.</li>
              <li><strong>Upgrade filtration:</strong> A MERV 13+ media air cleaner captures mold spores before they circulate. If you have a damp basement, this is not optional — it is essential for respiratory health.</li>
              <li><strong>Seal the ductwork:</strong> If your return duct has leaks in the basement, it is pulling damp basement air into the system. Duct sealing eliminates this path.</li>
              <li><strong>Consider a ventilating dehumidifier:</strong> For tightly sealed modern homes, an ERV or ventilating dehumidifier brings in fresh outdoor air while exhausting stale, humid basement air.</li>
            </ol>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">When to Call a Professional</h2>
            <p>If you see visible mold covering more than 10 square feet, smell persistent mustiness despite cleaning, or have family members with allergies or asthma that worsen indoors, call a professional. We can measure humidity levels, inspect ductwork for contamination, and recommend solutions tailored to your home's specific conditions.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/blog/lake-effect-humidity-ac-compressors/" className="text-red-600 hover:underline font-semibold">Lake-Effect Humidity Kills AC Compressors</Link>
              <Link href="/indoor-air-quality-fort-wayne/" className="text-red-600 hover:underline font-semibold">Indoor Air Quality Fort Wayne</Link>
              <Link href="/blog/real-cost-running-ac-fort-wayne/" className="text-red-600 hover:underline font-semibold">Real Cost of Running AC in Fort Wayne</Link>
              <Link href="/fort-wayne-hvac-guide/" className="text-red-600 hover:underline font-semibold">Fort Wayne HVAC Guide</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Basement Smell Won't Go Away?" subtitle="We identify the source, test humidity levels, and design a solution that actually works — not just covers up the smell." />
      </main>
    </>
  );
}
