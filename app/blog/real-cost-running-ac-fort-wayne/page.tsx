import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "The Real Cost of Running AC in Fort Wayne: Electric Bills Broken Down [2026]",
  description:
    "How much does air conditioning actually cost in Fort Wayne? We break down I&M electric rates, SEER efficiency, and real monthly bills for Allen County homeowners.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/real-cost-running-ac-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hvacrepairfortwayne.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Real Cost of Running AC in Fort Wayne", item: "https://hvacrepairfortwayne.com/blog/real-cost-running-ac-fort-wayne/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Real Cost of Running AC in Fort Wayne: Electric Bills Broken Down",
  description: "How much does air conditioning actually cost in Fort Wayne? We break down I&M electric rates, SEER efficiency, and real monthly bills.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function BlogRealCostAC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">2026 Cost Analysis</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">The Real Cost of Running AC in <span className="text-red-600 italic">Fort Wayne</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">I&M charges Fort Wayne residents 16.1 cents per kWh — above the Indiana average. Your AC is likely your biggest summer electricity user. Here is exactly what it costs, and what you can do about it.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">The I&M Rate Reality</h2>
            <p>Indiana Michigan Power (I&M), Fort Wayne's primary electric utility, charges residential customers approximately <strong>16.1 cents per kWh</strong>. That is 8% higher than the Indiana state average of 14.90 cents and 15% above the national average. For a typical Fort Wayne home using 900-1,100 kWh per month in summer, the base electric bill is $145-$177 before the AC even turns on.</p>
            <p>When the AC starts running 8-10 hours per day during peak summer, it adds 25-40 kWh per day. At 16.1 cents, that is $4.03-$6.44 per day — or <strong>$120-$193 per month</strong> just for air conditioning. A poorly maintained, older, or oversized system can easily double that.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How SEER Rating Affects Your Bill</h2>
            <p>SEER (Seasonal Energy Efficiency Ratio) measures how much cooling a unit delivers per watt-hour of electricity. The higher the SEER, the less you pay for the same cooling. Here is what different SEER levels cost to operate in Fort Wayne for a 2,000 sq ft home:</p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">SEER Rating</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Est. Monthly AC Cost (Peak Summer)</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Annual Savings vs 14 SEER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold">14 SEER (Minimum)</td><td className="px-4 py-3">$175 – $220</td><td className="px-4 py-3">Baseline</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold">16 SEER</td><td className="px-4 py-3">$145 – $185</td><td className="px-4 py-3">$180 – $280</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold">18 SEER</td><td className="px-4 py-3">$125 – $160</td><td className="px-4 py-3">$300 – $420</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold">20+ SEER (Variable)</td><td className="px-4 py-3">$105 – $140</td><td className="px-4 py-3">$420 – $600</td></tr>
                </tbody>
              </table>
            </div>
            <p>Over 15 years, the difference between a 14 SEER and an 18 SEER system is $4,500-$6,300 in electricity savings. In Fort Wayne's expensive electricity market, efficiency pays back faster.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Hidden Costs</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Poor maintenance:</strong> A dirty condenser coil or clogged filter reduces efficiency by 15-25%. On a $200/month bill, that is $30-$50 of wasted money.</li>
              <li><strong>Oversized AC:</strong> An oversized unit short-cycles, never reaching peak efficiency. You pay for a 4-ton system but get the effective efficiency of a 2.5-ton.</li>
              <li><strong>Leaky ductwork:</strong> Ducts in unconditioned attics and crawl spaces lose 20-30% of conditioned air. You are paying to cool your crawl space.</li>
              <li><strong>Thermostat settings:</strong> Every degree below 78°F increases energy use by 6-8%. A 72°F setting costs 30-40% more than 78°F with a fan.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Cut Your AC Bill in Fort Wayne</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Replace your filter monthly:</strong> The cheapest way to improve efficiency. A $10 filter saves $20-$30/month.</li>
              <li><strong>Use a programmable thermostat:</strong> Raise the temperature 7-10°F when you are away. A smart thermostat can save 10-15% on cooling costs.</li>
              <li><strong>Close blinds and curtains:</strong> South-facing windows add significant heat load. Blackout curtains reduce solar heat gain by 30-40%.</li>
              <li><strong>Seal air leaks:</strong> Caulk around windows, weatherstrip doors, and seal gaps around outlets and light switches. A blower door test identifies the worst leaks.</li>
              <li><strong>Get a professional tune-up:</strong> A $129 service call that restores 15% efficiency pays for itself in one month.</li>
              <li><strong>Consider upgrading if your system is 12+ years old:</strong> A new 18 SEER system can cut your AC bill by 25-30%. With rebates and tax credits, the payback period may be under 5 years.</li>
            </ol>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/blog/lake-effect-humidity-ac-compressors/" className="text-red-600 hover:underline font-semibold">Lake-Effect Humidity Kills AC Compressors</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Cost Guide 2026</Link>
              <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline font-semibold">Energy Rebates & Incentives</Link>
              <Link href="/ac-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Installation Fort Wayne</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Tired of High Electric Bills?" subtitle="We will analyze your system and show you exactly where you are losing money — and how to fix it." />
      </main>
    </>
  );
}
