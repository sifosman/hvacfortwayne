import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Allen County Energy Savings Guide: Rebates, Programs & Efficiency Upgrades [2026]",
  description:
    "Every rebate, tax credit, and incentive available to Fort Wayne homeowners for HVAC upgrades in 2026. Federal, Indiana state, I&M utility, and Allen County programs explained with real dollar amounts.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/allen-county-energy-savings/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Allen County Energy Savings", item: "https://hvacrepairfortwayne.com/allen-county-energy-savings/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Allen County Energy Savings Guide: Rebates, Programs, and Efficiency Upgrades",
  description:
    "Every rebate, tax credit, and incentive available to Fort Wayne homeowners for HVAC upgrades in 2026.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function AllenCountyEnergySavings() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">2026 Rebate Guide</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Allen County Energy Savings:
              <br />
              <span className="text-red-600 italic">Rebates & Programs</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Fort Wayne homeowners can access thousands of dollars in rebates and tax credits for HVAC upgrades — but
              most people do not even know the programs exist. Here is every federal, state, and local incentive available
              in Allen County, with the exact dollar amounts and how to claim them.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Why Fort Wayne Energy Costs Matter</h2>
            <p>
              Indiana Michigan Power (I&M), the primary electric utility for Fort Wayne, charges residential customers
              approximately <strong>16.1 cents per kWh</strong>. That is 8% higher than the Indiana state average (14.90 cents)
              and 15% above the national average. For a typical Fort Wayne home running a 3-ton AC system 8 hours per day
              during peak summer, that translates to roughly <strong>$145-$170 per month</strong> just for cooling. An older,
              inefficient system can easily double that.
            </p>
            <p>
              The good news? Every percentage point of efficiency improvement directly reduces your bill. A 14 SEER AC
              replaced with an 18 SEER unit uses approximately 22% less electricity for the same cooling output. In Fort Wayne's
              climate, that 22% savings equals roughly $300-$400 per year on cooling costs alone. Over 15 years, that is
              $4,500-$6,000 in savings — before any rebates or incentives.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Federal Incentives</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Energy Efficient Home Improvement Credit (Section 25C)</h3>
            <p>
              The federal government offers a tax credit equal to <strong>30% of the cost</strong> of qualifying energy-efficient
              home improvements, with an annual cap of <strong>$3,200</strong>. This credit is scheduled to expire for work
              completed after <strong>December 31, 2025</strong>. If you are planning HVAC upgrades, time is running out to
              claim this credit.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Heat pumps: up to <strong>$2,000</strong> per year</li>
              <li>Furnaces and AC units: up to <strong>$600</strong> per item</li>
              <li>Home energy audits: up to <strong>$150</strong></li>
              <li>Insulation, windows, and doors: up to <strong>$1,200</strong> total per year</li>
            </ul>
            <p>
              To qualify, equipment must meet Consortium for Energy Efficiency (CEE) highest efficiency tier requirements.
              Most reputable HVAC contractors in Fort Wayne will sell equipment that qualifies, but always verify before
              you buy. You will need IRS Form 5695 when filing your taxes.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Residential Clean Energy Credit (Section 25D)</h3>
            <p>
              This credit covers geothermal heat pumps, solar panels, and battery storage — also at 30%, but with no annual
              cap. It is also scheduled to expire December 31, 2025. If you are considering a geothermal system for your
              Fort Wayne home (and have the yard space for the ground loop), this credit can be worth $10,000+.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Indiana Energy Saver Program</h2>
            <p>
              On May 14, 2025, the Indiana Office of Energy Development launched the{" "}
              <a href="https://www.IndianaEnergySaver.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Indiana Energy Saver Program</a>,
              funded by $182 million from the federal Inflation Reduction Act. This is the largest state-level energy
              rebate program in Indiana history, and Fort Wayne homeowners are eligible.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Home Efficiency Rebates (HOMES)</h3>
            <p>
              Open to <strong>all homeowners</strong>, regardless of income. Rebates are calculated based on the percentage
              of modeled or measured energy savings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>20-35% energy savings:</strong> Up to $2,000 (retrofit) or $1,000 (new construction)</li>
              <li><strong>35%+ energy savings:</strong> Up to $4,000 (retrofit) or $2,000 (new construction)</li>
            </ul>
            <p>
              To claim HOMES rebates, you typically need a pre-installation energy assessment and a post-installation
              verification. Many contractors in Fort Wayne can coordinate this as part of the installation process. The
              rebate is paid to the contractor, who passes the savings to you.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">High-Efficiency Electric Home Rebates (HEEHRA)</h3>
            <p>
              This is the big one for income-qualified households. If your household income is below <strong>150% of the
              area median income</strong> for Allen County (approximately $95,000-$110,000 for a family of four), you
              can receive point-of-sale rebates that directly reduce your installation cost:
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Upgrade</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Maximum Rebate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold">Heat Pump (space heating/cooling)</td><td className="px-4 py-3">$8,000</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold">Heat Pump Water Heater</td><td className="px-4 py-3">$1,750</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold">Electric Stove / Cooktop</td><td className="px-4 py-3">$840</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold">Heat Pump Clothes Dryer</td><td className="px-4 py-3">$840</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold">Electric Wiring Upgrades</td><td className="px-4 py-3">$2,500</td></tr>
                  <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold">Weatherization (insulation, air sealing)</td><td className="px-4 py-3">$1,600</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-semibold">Electric Load Service Center</td><td className="px-4 py-3">$4,000</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              HEEHRA rebates are capped at <strong>$14,000 total per household</strong> and cannot be combined with HOMES
              rebates for the same upgrade. However, you can claim both programs for different upgrades (for example, HOMES
              for insulation and HEEHRA for a heat pump).
            </p>
            <p>
              <strong>How to apply:</strong> Visit{" "}
              <a href="https://www.IndianaEnergySaver.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">IndianaEnergySaver.com</a>{" "}
              to check eligibility and find participating contractors. You will need proof of income (tax returns or pay stubs)
              and your utility account information.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">I&M (Indiana Michigan Power) Utility Rebates</h2>
            <p>
              I&M offers its own rebate programs for customers in its Fort Wayne service territory. These programs change
              periodically, but typical offerings include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>High-efficiency AC rebates:</strong> $200-$500 for 16+ SEER systems</li>
              <li><strong>High-efficiency furnace rebates:</strong> $200-$400 for 95%+ AFUE units</li>
              <li><strong>Heat pump rebates:</strong> $300-$600 for qualifying systems</li>
              <li><strong>Smart thermostat rebates:</strong> $50-$100 for ENERGY STAR certified models</li>
              <li><strong>Home energy audit discounts:</strong> Reduced-cost or free audits for qualifying customers</li>
            </ul>
            <p>
              I&M rebates can often be <strong>stacked</strong> with federal and state incentives, meaning you can claim all
              three for the same project. A $12,000 dual-fuel heat pump system could receive $3,200 federal credit + $8,000
              HEEHRA rebate + $400 I&M rebate = $11,600 back, bringing your net cost to $400.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Weatherization Assistance Program (WAP)</h2>
            <p>
              For low-income Fort Wayne households (typically under 200% of federal poverty level), the federally funded
              Weatherization Assistance Program provides free energy efficiency improvements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attic and wall insulation</li>
              <li>Air sealing and weatherstripping</li>
              <li>Furnace repair or replacement (if unsafe)</li>
              <li>Window and door repair or replacement</li>
              <li>Refrigerator replacement (if inefficient)</li>
            </ul>
            <p>
              In Allen County, the Weatherization Assistance Program is administered through the Indiana Housing and
              Community Development Authority (IHCDA) and local community action agencies. Priority is given to elderly
              residents, families with young children, and people with disabilities. Income limits for a family of four
              are approximately <strong>$60,000-$65,000</strong> annually, though this changes with federal poverty guidelines.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fort Wayne City and Allen County Programs</h2>
            <p>
              While Fort Wayne city government and Allen County do not currently operate their own HVAC-specific rebate
              programs, they participate in state and federal initiatives. The City of Fort Wayne's Office of Community
              Development occasionally offers home repair grants for low-income homeowners, which can include HVAC
              replacement if the system is deemed a health or safety hazard.
            </p>
            <p>
              Additionally, the <strong>Allen County Department of Environmental Management</strong> runs programs related to
              air quality and energy efficiency education. They do not provide direct rebates, but their staff can connect
              you with available programs and certified contractors.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Stack Rebates Without Getting Disqualified</h2>
            <p>
              Stacking multiple rebates is legal and smart — but only if you follow each program's rules. Here is how to
              do it correctly:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Start with the state program.</strong> Indiana Energy Saver rebates are typically point-of-sale,
                meaning they reduce your upfront cost. Federal tax credits are claimed on your tax return. I&M rebates are
                usually mailed as checks after installation.
              </li>
              <li>
                <strong>Use different programs for different upgrades.</strong> You cannot claim HOMES and HEEHRA for the same
                heat pump, but you can claim HOMES for insulation and HEEHRA for the heat pump.
              </li>
              <li>
                <strong>Keep every receipt and certificate.</strong> Federal tax credits require proof that the equipment meets
                CEE efficiency standards. The contractor should provide a Manufacturer's Certification Statement. Keep it
                with your tax records.
              </li>
              <li>
                <strong>Do not let the contractor handle everything without verifying.</strong> A reputable Fort Wayne contractor
                will help you navigate rebates, but you should independently verify your eligibility and the final rebate amounts.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The ROI Calculation for Fort Wayne Homes</h2>
            <p>
              Let us run the numbers on a typical Fort Wayne scenario: replacing a 15-year-old 80% AFUE furnace and 14 SEER
              AC with a dual-fuel system (cold-climate heat pump + 96% AFUE furnace) in a 2,000 sq ft home.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>System cost:</strong> $12,000</li>
              <li><strong>Federal tax credit (30%):</strong> -$3,200 (capped)</li>
              <li><strong>Indiana HEEHRA rebate:</strong> -$8,000</li>
              <li><strong>I&M utility rebate:</strong> -$400</li>
              <li><strong>Net cost:</strong> $400</li>
              <li><strong>Annual energy savings:</strong> $350-$500</li>
              <li><strong>Payback period:</strong> Immediate (net cost is essentially zero)</li>
              <li><strong>10-year savings:</strong> $3,500-$5,000 in reduced utility bills</li>
            </ul>
            <p>
              Even without income qualification for HEEHRA, the federal credit and I&M rebates bring the net cost to
              approximately $8,400. With $350-$500 in annual savings, the payback period is 5-7 years — well within the
              system's expected lifespan.
            </p>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">More Fort Wayne HVAC Resources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/fort-wayne-hvac-guide/" className="text-red-600 hover:underline font-semibold">Fort Wayne HVAC Climate Guide</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Cost Guide 2026</Link>
              <Link href="/heat-pumps-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pumps in Fort Wayne</Link>
              <Link href="/heat-pump-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pump Installation Service</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Maximize Your Rebates"
          subtitle="We help Fort Wayne homeowners navigate every available rebate and tax credit. Call us for a free estimate with rebate optimization included."
        />
      </main>
    </>
  );
}
