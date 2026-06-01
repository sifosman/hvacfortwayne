import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Repair & Replacement Cost in Fort Wayne [2026 Pricing Guide]",
  description:
    "Real 2026 pricing for HVAC repair, AC replacement, and furnace installation in Fort Wayne, IN. See what Allen County homeowners actually pay, what drives costs up, and how to avoid overpaying.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/hvac-cost-guide-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "HVAC Cost Guide 2026", item: "https://hvacrepairfortwayne.com/hvac-cost-guide-fort-wayne/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does HVAC Repair & Replacement Cost in Fort Wayne? [2026 Pricing Guide]",
  description:
    "Real 2026 pricing for HVAC repair, AC replacement, and furnace installation in Fort Wayne, IN. See what Allen County homeowners actually pay.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function HVACCostGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">2026 Allen County Pricing</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              HVAC Cost Guide:
              <br />
              <span className="text-red-600 italic">What Fort Wayne Homeowners Pay</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Tired of vague "it depends" pricing? We break down exactly what HVAC repair and replacement costs in
              Fort Wayne — with real numbers based on actual Allen County jobs, not national averages.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">The Truth About HVAC Pricing in Fort Wayne</h2>
            <p>
              If you have called multiple HVAC companies in Fort Wayne for a quote, you have probably experienced the
              same frustration: one company quotes $4,500, another quotes $9,000, and both say they are giving you a
              "competitive price." The spread is not because one is honest and the other is gouging you. It is because
              HVAC pricing depends on variables that most homeowners are not aware of — and some Fort Wayne contractors
              use that information gap to their advantage.
            </p>
            <p>
              In this guide, we show you what Allen County homeowners are actually paying in 2026, what factors drive
              costs up or down, and how to make sure you are getting a fair deal — not a sales pitch disguised as a quote.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common HVAC Repairs in Fort Wayne: Real Costs</h2>
            <p>
              These are the most common repair calls we see in Fort Wayne, with the typical price range homeowners pay
              in Allen County. Prices include parts and labor.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Repair Type</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Typical Cost</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">What Affects Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Capacitor Replacement</td>
                    <td className="px-4 py-3">$150 – $350</td>
                    <td className="px-4 py-3">Single vs dual capacitor; emergency after-hours fee</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Contactor Replacement</td>
                    <td className="px-4 py-3">$200 – $400</td>
                    <td className="px-4 py-3">Brand; accessibility of outdoor unit</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Blower Motor Replacement</td>
                    <td className="px-4 py-3">$450 – $900</td>
                    <td className="px-4 py-3">PSC vs ECM motor; warranty status</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Compressor Replacement</td>
                    <td className="px-4 py-3">$1,800 – $3,200</td>
                    <td className="px-4 py-3">Tonnage; R-22 vs R-410A refrigerant</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Evaporator Coil Replacement</td>
                    <td className="px-4 py-3">$1,200 – $2,800</td>
                    <td className="px-4 py-3">Cased vs uncased; location (attic vs basement)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Condensate Pump Replacement</td>
                    <td className="px-4 py-3">$250 – $500</td>
                    <td className="px-4 py-3">Pump capacity; drainage line length</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Igniter Replacement (Furnace)</td>
                    <td className="px-4 py-3">$180 – $350</td>
                    <td className="px-4 py-3">Hot surface vs spark igniter</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Heat Exchanger Replacement</td>
                    <td className="px-4 py-3">$1,500 – $3,500</td>
                    <td className="px-4 py-3">Often more cost-effective to replace furnace entirely</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Circuit Board Replacement</td>
                    <td className="px-4 py-3">$400 – $800</td>
                    <td className="px-4 py-3">OEM vs universal board; reprogramming required</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Refrigerant Recharge (R-410A)</td>
                    <td className="px-4 py-3">$300 – $600</td>
                    <td className="px-4 py-3">Pounds needed; leak detection and repair separate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 italic">
              Note: Emergency after-hours service in Fort Wayne typically adds $150–$300 to the base repair cost.
              Weekend and holiday premiums are standard across Allen County.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Full System Replacement: Fort Wayne 2026 Prices</h2>
            <p>
              When a repair exceeds 40-50% of the replacement cost, most honest technicians will recommend replacement.
              Here is what full system replacements cost in Fort Wayne right now, based on actual quotes from Allen
              County contractors:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">System Type</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Typical Range</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">What You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Entry-Level AC (14-15 SEER)</td>
                    <td className="px-4 py-3">$3,500 – $5,500</td>
                    <td className="px-4 py-3">Single-stage; meets minimum code; 5-10 year parts warranty</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Mid-Range AC (16-17 SEER)</td>
                    <td className="px-4 py-3">$5,000 – $7,500</td>
                    <td className="px-4 py-3">Two-stage; better humidity control; 10-year parts warranty</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">High-Efficiency AC (18+ SEER)</td>
                    <td className="px-4 py-3">$7,500 – $11,000</td>
                    <td className="px-4 py-3">Variable-speed; superior dehumidification; premium warranties</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Entry Gas Furnace (80% AFUE)</td>
                    <td className="px-4 py-3">$2,800 – $4,500</td>
                    <td className="px-4 py-3">Single-stage; standard blower; 5-10 year warranty</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">High-Efficiency Furnace (95%+ AFUE)</td>
                    <td className="px-4 py-3">$4,500 – $7,500</td>
                    <td className="px-4 py-3">Two-stage or modulating; ECM blower; sealed combustion</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Heat Pump (14-16 SEER / 8-9 HSPF)</td>
                    <td className="px-4 py-3">$4,500 – $7,000</td>
                    <td className="px-4 py-3">Replaces AC + provides heating; works down to ~30°F efficiently</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Cold-Climate Heat Pump</td>
                    <td className="px-4 py-3">$7,000 – $12,000</td>
                    <td className="px-4 py-3">Operates efficiently to 5°F; often paired with backup furnace</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Full AC + Furnace Combo</td>
                    <td className="px-4 py-3">$7,000 – $14,000</td>
                    <td className="px-4 py-3">Complete system; pricing varies dramatically by efficiency tier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What Drives HVAC Costs Up in Fort Wayne?</h2>
            <p>
              Not all $8,000 furnace replacements are equal. Here are the Fort Wayne-specific factors that push pricing
              higher — and which ones are worth paying for:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">1. Home Age and Ductwork Condition</h3>
            <p>
              Remember that <strong>47.6%</strong> of Fort Wayne homes were built before 1970? In neighborhoods like
              <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>,
              <Link href="/waynedale/" className="text-red-600 hover:underline">Waynedale</Link>, and
              <Link href="/arlington-park/" className="text-red-600 hover:underline">Arlington Park</Link>, we regularly
              find ductwork that is original to the home — uninsulated, unsealed, and often rusted or disconnected in the
              crawl space. Replacing or sealing ductwork can add $1,500–$4,000 to a system replacement. It is expensive,
              but without it, your new high-efficiency unit will still deliver only 60-70% of its rated performance.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">2. Electrical Panel Upgrades</h3>
            <p>
              Many older Fort Wayne homes still have 100-amp electrical panels with fuse boxes. A modern high-efficiency
              furnace with an ECM blower and a two-stage AC may require a dedicated 240V circuit. If your panel is full
              or outdated, an electrician will need to upgrade it before the HVAC contractor can finish the installation.
              That adds $800–$2,500.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">3. Permits and Inspections</h3>
            <p>
              The City of Fort Wayne requires permits for HVAC replacements. Legitimate contractors include permit costs
              ($100–$300) in their quotes and handle the inspection scheduling. If a quote seems unusually low, ask
              specifically: "Does this include permits?" A contractor who says permits are "optional" or "not needed"
              is either uninformed or dishonest — and either way, you do not want them installing gas-fired equipment in
              your home.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">4. Refrigerant Type</h3>
            <p>
              If your existing system uses R-22 refrigerant (common in units installed before 2010), you cannot simply
              "top it off." R-22 was phased out in 2020 and is now prohibitively expensive — often $100+ per pound. A full
              recharge on a 3-ton system could cost $600–$900 just for refrigerant. In most cases, a leaking R-22 system is
              a replacement candidate, not a repair candidate.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Avoid Overpaying in Fort Wayne</h2>
            <p>
              Based on conversations with hundreds of Allen County homeowners, here is what separates a fair quote from
              a predatory one:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Get at least three quotes.</strong> Not two. Three. And make sure at least one is from a smaller,
                locally-owned company. National franchises have higher overhead and their pricing reflects it.
              </li>
              <li>
                <strong>Ask for a Manual J load calculation.</strong> Any contractor who sizes a new system by "square footage"
                or "what was there before" is guessing. Fort Wayne's humidity and your home's insulation levels mean the
                old rule-of-thumb methods are often wrong by half a ton or more.
              </li>
              <li>
                <strong>Read the warranty details.</strong> A "10-year warranty" sounds great, but is it parts only? Does it
                require annual maintenance by an authorized dealer? Are labor costs covered? The fine print matters.
              </li>
              <li>
                <strong>Do not finance through the contractor unless you compare rates.</strong> Many HVAC companies offer
                0% financing that is actually just rolled into a higher equipment price. A personal loan from your credit
                union at 8% may cost less than "0% contractor financing" that inflates the system price by 12%.
              </li>
              <li>
                <strong>Check for rebates before you buy.</strong> The <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline">Indiana Energy Saver Program</Link>{" "}
                offers up to $8,000 for qualifying heat pump installations. I&M offers utility rebates for high-efficiency
                equipment. These programs change, so verify current eligibility before signing a contract.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Maintenance Costs: The Best Money You Will Spend</h2>
            <p>
              A professional HVAC tune-up in Fort Wayne costs $89–$149 for a single system, or $149–$229 for both heating
              and cooling. That is not an upsell. It is the single highest-ROI investment you can make in your HVAC system.
            </p>
            <p>
              Here is why: A tune-up catches problems before they become emergencies. A $200 capacitor replacement during
              a maintenance visit prevents a $900 emergency call at 2 AM when the capacitor fails on the hottest night of
              the year. Cleaning a condensate drain line takes 5 minutes and prevents a $300–$500 water damage repair.
              Checking refrigerant levels identifies a small leak before it burns out a $2,500 compressor.
            </p>
            <p>
              In our experience servicing Fort Wayne, homeowners who get twice-yearly maintenance spend 40-60% less on
              repairs over a 10-year period compared to homeowners who wait for breakdowns. The math is simple: $200/year
              in maintenance saves $1,200+ in avoidable repairs.
            </p>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Fort Wayne HVAC Resources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/fort-wayne-hvac-guide/" className="text-red-600 hover:underline font-semibold">Fort Wayne HVAC Climate Guide</Link>
              <Link href="/heat-pumps-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pumps in Fort Wayne</Link>
              <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline font-semibold">Rebates & Incentive Programs</Link>
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair Fort Wayne</Link>
              <Link href="/furnace-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">Furnace Repair Fort Wayne</Link>
              <Link href="/emergency-hvac-fort-wayne/" className="text-red-600 hover:underline font-semibold">Emergency HVAC Service</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Need a Fair Quote?"
          subtitle="We provide transparent, written estimates with no hidden fees. Call us for same-day service anywhere in Allen County."
        />
      </main>
    </>
  );
}
