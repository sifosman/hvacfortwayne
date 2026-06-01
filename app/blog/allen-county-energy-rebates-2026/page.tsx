import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Allen County Energy Rebates 2026: How to Get Up to $3,000+ Back on HVAC Upgrades",
  description:
    "Every rebate and tax credit available to Fort Wayne homeowners for HVAC upgrades in 2026. Federal, Indiana state, and I&M utility programs explained with dollar amounts and how to apply.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/allen-county-energy-rebates-2026/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hvacrepairfortwayne.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Allen County Energy Rebates 2026", item: "https://hvacrepairfortwayne.com/blog/allen-county-energy-rebates-2026/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Allen County Energy Rebates 2026: How to Get Up to $3,000+ Back on HVAC Upgrades",
  description: "Every rebate and tax credit available to Fort Wayne homeowners for HVAC upgrades in 2026.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function BlogEnergyRebates2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">2026 Rebate Guide</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">Allen County Energy Rebates <span className="text-red-600 italic">2026</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Fort Wayne homeowners can access thousands of dollars in rebates for HVAC upgrades — but the programs are confusing, deadlines are tight, and most people miss out. Here is exactly what is available, how much you can get, and how to claim it.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">The Programs: Federal, State, and Utility</h2>
            <p>Three layers of rebates are available to Fort Wayne homeowners in 2026. The trick is stacking them correctly without violating program rules.</p>
            <h3 className="text-xl font-bold text-slate-900 mt-6">1. Federal Tax Credits (Ending Soon)</h3>
            <p>The Energy Efficient Home Improvement Credit (Section 25C) offers 30% of the cost of qualifying upgrades, with these caps:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Heat pumps: up to $2,000 per year</li>
              <li>Furnaces and AC: up to $600 per item</li>
              <li>Home energy audits: up to $150</li>
              <li>Insulation, windows, doors: up to $1,200 total per year</li>
            </ul>
            <p><strong>Critical deadline:</strong> Work must be completed by December 31, 2025. If you are reading this in 2026, this credit has expired unless Congress extends it.</p>
            <h3 className="text-xl font-bold text-slate-900 mt-6">2. Indiana Energy Saver Program</h3>
            <p>Launched May 14, 2025, with $182 million in federal funding. Two tracks:</p>
            <p><strong>HEEHRA (Income-Qualified):</strong> Households under 150% of area median income (approximately $95,000-$110,000 for a family of four in Allen County) can receive:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Up to $8,000 for a heat pump</li>
              <li>Up to $1,750 for a heat pump water heater</li>
              <li>Up to $840 for an electric stove/cooktop</li>
              <li>Up to $1,600 for weatherization</li>
              <li>Up to $2,500 for electrical wiring upgrades</li>
            </ul>
            <p><strong>HOMES (All Households):</strong> Rebates based on energy savings achieved:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>20-35% energy reduction: up to $2,000</li>
              <li>35%+ energy reduction: up to $4,000</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 mt-6">3. I&M Utility Rebates</h3>
            <p>Indiana Michigan Power offers additional rebates for its Fort Wayne customers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>High-efficiency AC (16+ SEER): $200-$500</li>
              <li>High-efficiency furnace (95%+ AFUE): $200-$400</li>
              <li>Heat pump: $300-$600</li>
              <li>Smart thermostat: $50-$100</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Stack Rebates Without Getting Disqualified</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Use different programs for different upgrades.</strong> You cannot claim HEEHRA and HOMES for the same heat pump. But you can claim HOMES for insulation and HEEHRA for the heat pump.</li>
              <li><strong>Apply for state rebates first.</strong> These are typically point-of-sale and reduce your upfront cost.</li>
              <li><strong>Claim federal credits on your tax return.</strong> Use Form 5695. Keep all receipts and manufacturer certification statements.</li>
              <li><strong>Submit I&M rebates separately.</strong> These usually require proof of installation and equipment specs. Your contractor should provide the necessary documentation.</li>
            </ol>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Real-World Example: A $12,000 Dual-Fuel System</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>System cost: $12,000</li>
              <li>Federal tax credit (30%, capped): -$3,200</li>
              <li>Indiana HEEHRA rebate: -$8,000</li>
              <li>I&M utility rebate: -$400</li>
              <li><strong>Net cost: $400</strong></li>
            </ul>
            <p>For income-qualified households, a complete HVAC upgrade can cost less than a single emergency repair call. Even without HEEHRA income qualification, the federal credit and I&M rebates bring the net cost to approximately $8,400 — with annual energy savings of $350-$500, paying back in 5-7 years.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Apply</h2>
            <p>Start at <a href="https://www.IndianaEnergySaver.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">IndianaEnergySaver.com</a>. You will need:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proof of income (tax returns or pay stubs) for HEEHRA</li>
              <li>Utility account information</li>
              <li>Home address and property details</li>
            </ul>
            <p>For federal tax credits, file IRS Form 5695 with your tax return. For I&M rebates, visit <a href="https://www.indianamichiganpower.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">indianamichiganpower.com</a> or call their customer service line.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline font-semibold">Full Energy Savings Guide</Link>
              <Link href="/heat-pumps-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pumps in Fort Wayne</Link>
              <Link href="/heat-pump-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pump Installation</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Cost Guide 2026</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Maximize Your Rebates" subtitle="We help Fort Wayne homeowners navigate every available rebate. Free estimates with rebate optimization included." />
      </main>
    </>
  );
}
