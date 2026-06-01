import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Should You Replace Your 15-Year-Old Furnace? A Fort Wayne Homeowner's Decision Guide",
  description:
    "Your furnace is 15 years old and making noises. Repair or replace? We break down the real costs, risks, and payback math for Fort Wayne homeowners facing this decision.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/replace-15-year-old-furnace/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hvacrepairfortwayne.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Replace Your 15-Year-Old Furnace", item: "https://hvacrepairfortwayne.com/blog/replace-15-year-old-furnace/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Should You Replace Your 15-Year-Old Furnace? A Fort Wayne Homeowner's Decision Guide",
  description: "Your furnace is 15 years old and making noises. Repair or replace? We break down the real costs, risks, and payback math.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function BlogReplaceFurnace() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Homeowner's Guide</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">Should You Replace Your <span className="text-red-600 italic">15-Year-Old Furnace?</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">It is the question every Fort Wayne homeowner faces eventually: the furnace is getting old, a repair estimate just came in, and winter is approaching. Do you fix it or replace it? Here is how to decide with real numbers.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">The $5,000 Rule</h2>
            <p>The HVAC industry uses a simple formula: multiply the furnace's age by the repair cost. If the result exceeds $5,000, replacement is usually the better financial decision.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>15-year-old furnace + $400 repair = $6,000 → <strong>Replace</strong></li>
              <li>15-year-old furnace + $200 repair = $3,000 → <strong>Repair</strong></li>
              <li>15-year-old furnace + $900 repair = $13,500 → <strong>Definitely replace</strong></li>
            </ul>
            <p>This is a rule of thumb, not a law. But it is a useful starting point. In Fort Wayne's climate, where furnaces endure 3+ months of continuous operation, the wear on a 15-year-old unit is significant.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Efficiency: The Hidden Cost of Keeping an Old Furnace</h2>
            <p>A 15-year-old furnace is likely rated at 80% AFUE or lower. That means 20% of every dollar you spend on gas goes straight up the flue. A modern 96% AFUE high-efficiency furnace wastes only 4%. The difference is 16 percentage points of efficiency.</p>
            <p>For a typical Fort Wayne home spending $1,200 per year on heating, that efficiency gap equals <strong>$192 per year</strong> in wasted fuel. Over 5 years, that is nearly $1,000. Over 15 years, it is $2,880. That savings alone does not pay for a new furnace, but it significantly offsets the replacement cost when combined with reliability and repair savings.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Safety: The Non-Negotiable Factor</h2>
            <p>There is one reason to replace a furnace that has nothing to do with money: safety. As furnaces age, heat exchangers develop micro-cracks from thermal expansion and contraction. A cracked heat exchanger can leak carbon monoxide into your home's air supply. CO is odorless, colorless, and lethal.</p>
            <p>If a technician finds a cracked heat exchanger, the furnace must be replaced. Period. No reputable technician will reinstall a furnace with a compromised heat exchanger. If a contractor offers to "patch" it, call someone else immediately.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fort Wayne-Specific Considerations</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Natural gas rates are favorable:</strong> Indiana gas prices are lower than the national average. A high-efficiency gas furnace in Fort Wayne pays back faster than in areas with expensive gas.</li>
              <li><strong>Rebates are available:</strong> The federal tax credit (30% up to $3,200 through Dec 31, 2025) and I&M utility rebates ($200-$400) reduce replacement costs. Indiana Energy Saver offers up to $8,000 for income-qualified households switching to heat pumps.</li>
              <li><strong>Winter reliability is critical:</strong> A failed furnace in Fort Wayne is not an inconvenience — it is an emergency. Pipes freeze. Families go to hotels. The cost of one emergency breakdown often exceeds the incremental cost of proactive replacement.</li>
              <li><strong>Home value:</strong> If you are planning to sell within 2-3 years, a new furnace is a selling point. Buyers notice old HVAC systems and factor replacement costs into their offers.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Decision Matrix</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">If this is true...</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Then...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white"><td className="px-4 py-3">Furnace is 15+ years and needs a repair over $500</td><td className="px-4 py-3 font-semibold text-red-600">Replace</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3">You have spent $1,000+ on repairs in the last 2 years</td><td className="px-4 py-3 font-semibold text-red-600">Replace</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Heat exchanger is cracked</td><td className="px-4 py-3 font-semibold text-red-600">Replace immediately</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3">AFUE is under 80% and you plan to stay 5+ years</td><td className="px-4 py-3 font-semibold text-red-600">Replace</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3">Furnace is 10-14 years and needs a minor repair ($150-$300)</td><td className="px-4 py-3 font-semibold text-green-600">Repair</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3">You are selling the home within 12 months</td><td className="px-4 py-3 font-semibold text-green-600">Repair (unless safety issue)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/blog/winter-furnace-survival-fort-wayne/" className="text-red-600 hover:underline font-semibold">Winter Furnace Survival Guide</Link>
              <Link href="/blog/heat-pump-reality-check/" className="text-red-600 hover:underline font-semibold">Heat Pump Reality Check</Link>
              <Link href="/furnace-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">Furnace Repair Fort Wayne</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Cost Guide 2026</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Need Honest Advice?" subtitle="We will inspect your furnace, give you the real numbers, and help you make the right decision for your budget and safety." />
      </main>
    </>
  );
}
