import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "AC Installation Fort Wayne | Air Conditioning Replacement in Allen County",
  description:
    "Expert AC installation in Fort Wayne, IN. We size systems for Allen County's humid climate, install high-SEER units, and handle permits. Serving all of Fort Wayne and surrounding areas. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/ac-installation-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "AC Installation Fort Wayne", item: "https://hvacrepairfortwayne.com/ac-installation-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Installation Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "Air Conditioning Installation",
  description: "Professional AC installation and replacement in Fort Wayne. Manual J load calculations and high-efficiency systems.",
};

export default function ACInstallationFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Professional Installation</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              AC Installation <span className="text-red-600 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              A new air conditioner is a major investment. The difference between a properly sized, correctly installed
              system and a rushed job is $200+ per year in energy costs and 5+ years in system lifespan. We do it right
              the first time — with Manual J calculations, sealed ductwork, and Fort Wayne-specific humidity considerations.
            </p>
            <div className="mt-8">
              <a href={`tel:+12607869284`} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-black uppercase shadow-xl hover:bg-slate-900 transition-all inline-block">
                Free Estimate {PHONE}
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Sizing for Fort Wayne's Humid Climate</h2>
            <p>
              The #1 mistake we see in Fort Wayne AC installations is oversized equipment. A contractor measures your square
              footage, multiplies by a rule-of-thumb number (often 600 BTU per square foot), and installs a system that is
              too large. The result? The AC cools the house quickly but runs in short bursts, never running long enough to
              dehumidify properly. Your house feels cold and clammy. Mold grows. Energy bills stay high.
            </p>
            <p>
              We perform a <strong>Manual J load calculation</strong> on every installation. This engineering-standard calculation
              accounts for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Home square footage and ceiling height</li>
              <li>Insulation levels in walls, attic, and basement</li>
              <li>Window type, size, and orientation (south-facing windows add significant heat load)</li>
              <li>Air leakage rate (blower door test when possible)</li>
              <li>Ductwork condition and sizing</li>
              <li>Number of occupants (each person adds ~400 BTU of heat)</li>
              <li>Appliance and lighting heat loads</li>
              <li>Local design temperatures: Fort Wayne's 1% summer design temperature is 90°F with a wet bulb of 75°F</li>
            </ul>
            <p>
              For a typical 1,800 sq ft Fort Wayne home with average insulation, the correct cooling load is usually 2.5-3.0
              tons — not the 3.5-4.0 tons that rule-of-thumb methods suggest. That half-ton difference saves $300-500 per
              year in electricity and provides better humidity control.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">SEER Ratings: What Fort Wayne Homeowners Need</h2>
            <p>
              SEER (Seasonal Energy Efficiency Ratio) measures cooling output per watt of electricity consumed. The minimum
              federal standard is now 14 SEER in the northern US. But in Fort Wayne's humid climate, the number that matters
              more is <strong>SEER2</strong> — the updated testing standard that better reflects real-world conditions.
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">SEER Range</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Best For</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Estimated Savings vs 14 SEER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">14-15 SEER (Entry)</td>
                    <td className="px-4 py-3">Budget-conscious; rental properties; short-term ownership</td>
                    <td className="px-4 py-3">Baseline</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">16-17 SEER (Mid-Range)</td>
                    <td className="px-4 py-3">Most Fort Wayne homeowners; best balance of cost and performance</td>
                    <td className="px-4 py-3">12-18% lower bills</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">18-20 SEER (High)</td>
                    <td className="px-4 py-3">Long-term homeowners; superior humidity control; rebate eligibility</td>
                    <td className="px-4 py-3">22-30% lower bills</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">21+ SEER (Premium)</td>
                    <td className="px-4 py-3">Maximum comfort and efficiency; well-insulated homes</td>
                    <td className="px-4 py-3">30-40% lower bills</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              In Fort Wayne, we generally recommend <strong>16-18 SEER two-stage or variable-speed systems</strong>. The two-stage
              compressor runs at low capacity (typically 70%) most of the time, which means longer run cycles and far better
              dehumidification. In a climate where humidity is the primary comfort complaint, this matters more than raw
              cooling capacity.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Installation Process</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Consultation and Manual J:</strong> We visit your home, measure, inspect, and calculate the exact
                cooling and heating load. We discuss your budget, comfort priorities, and any rebate opportunities.
              </li>
              <li>
                <strong>Written Quote:</strong> You receive a detailed, itemized quote with equipment model numbers, efficiency
                ratings, warranty terms, and total cost — including permits.
              </li>
              <li>
                <strong>Permit Application:</strong> We pull the necessary permits from the City of Fort Wayne. Proper permitting
                protects your warranty and ensures the installation meets code.
              </li>
              <li>
                <strong>Installation Day:</strong> A typical AC installation takes 4-6 hours. A full system (furnace + AC)
                takes 6-10 hours. We protect your floors, remove the old equipment, install the new system, and connect
                all electrical and refrigerant lines.
              </li>
              <li>
                <strong>Ductwork Testing and Sealing:</strong> We test static pressure and airflow at each vent. If ductwork
                is leaky or undersized, we seal and modify it before commissioning the system.
              </li>
              <li>
                <strong>Refrigerant Charge and Testing:</strong> We weigh in the exact refrigerant charge specified by the
                manufacturer — never "top it off and hope." We verify subcooling and superheat under operating conditions.
              </li>
              <li>
                <strong>Inspection and Walkthrough:</strong> We schedule the city inspection, then walk you through your new
                system: thermostat programming, filter changes, warranty registration, and maintenance scheduling.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Brands We Install in Fort Wayne</h2>
            <p>
              We are brand-agnostic — we install what works best for your home and budget. The brands we most commonly
              recommend for Fort Wayne's climate are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Carrier/Bryant:</strong> Excellent two-stage and variable-speed options. Strong warranty support. Higher price point but proven reliability in humid climates.</li>
              <li><strong>Trane/American Standard:</strong> Industry-leading compressor durability. The Spine Fin coil design resists corrosion better than traditional plate fins — important in Fort Wayne's humidity.</li>
              <li><strong>Lennox:</strong> Among the highest SEER ratings available. The Dave Lennox Signature series offers exceptional efficiency, though parts can be pricier.</li>
              <li><strong>Goodman/Amana:</strong> Best value for budget-conscious homeowners. Solid warranty terms and reliable mid-range performance. Ideal for rental properties or short-term ownership.</li>
              <li><strong>Rheem/Ruud:</strong> Good mid-tier option with solid two-stage systems and competitive pricing.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Rebates and Financing</h2>
            <p>
              A new AC system may qualify for federal tax credits (30% up to $3,200 through December 31, 2025), Indiana
              Energy Saver rebates (up to $8,000 for income-qualified households), and I&M utility rebates ($200-$500).
              See our full <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline">rebates guide</Link>{" "}
              for details.
            </p>
            <p>
              We also offer financing options for qualified buyers. Terms vary based on credit history, but typical arrangements
              include 0% interest for 12-24 months or low-interest extended terms up to 120 months.
            </p>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair</Link>
              <Link href="/furnace-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">Furnace Repair</Link>
              <Link href="/heat-pump-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pump Installation</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Ready for a New AC?"
          subtitle="Free in-home estimates with Manual J load calculations. Honest pricing, no pressure, Fort Wayne expertise."
        />
      </main>
    </>
  );
}
