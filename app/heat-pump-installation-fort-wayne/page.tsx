import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Heat Pump Installation Fort Wayne | Cold-Climate Heat Pumps in Allen County",
  description:
    "Expert heat pump installation in Fort Wayne, IN. Cold-climate heat pumps, dual-fuel systems, and ductless mini-splits. Maximize rebates up to $8,000. Call (260) 786-9284 for a free estimate.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/heat-pump-installation-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Heat Pump Installation Fort Wayne", item: "https://hvacrepairfortwayne.com/heat-pump-installation-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Heat Pump Installation Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "Heat Pump Installation",
  description: "Cold-climate heat pump, dual-fuel, and ductless mini-split installation in Fort Wayne. Maximize available rebates.",
};

export default function HeatPumpInstallationFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Up to $8,000 in Rebates</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Heat Pump Installation <span className="text-red-600 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Heat pumps are the future of home heating and cooling — and with Indiana's $182 million Energy Saver Program,
              the financial case has never been stronger. We install cold-climate heat pumps, dual-fuel systems, and ductless
              mini-splits sized specifically for Allen County homes.
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
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Why Install a Heat Pump in Fort Wayne?</h2>
            <p>
              Three reasons Fort Wayne homeowners are switching to heat pumps in record numbers:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Efficiency:</strong> A heat pump delivers 2.5-4 units of heat for every 1 unit of electricity consumed.
                A 96% AFUE gas furnace delivers 0.96 units of heat per unit of gas. In Fort Wayne's milder winter days (above
                30°F), a heat pump costs 50-70% less to operate than a gas furnace.
              </li>
              <li>
                <strong>One system, two jobs:</strong> A heat pump replaces both your AC and your heating system. In smaller
                homes or homes without ductwork, a ductless mini-split handles both functions with no invasive construction.
              </li>
              <li>
                <strong>Rebates:</strong> The Indiana Energy Saver Program offers up to $8,000 for qualifying heat pump
                installations. The federal tax credit offers 30% up to $2,000 (through December 31, 2025). I&M adds utility
                rebates of $300-$600. For income-qualified households, a $10,000 heat pump can cost $0 after rebates.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Types of Heat Pump Systems We Install</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Central Ducted Heat Pumps</h3>
            <p>
              These replace your existing central AC and connect to your ductwork. Best for homes with good ductwork that
              already has a central air system. We install cold-climate models rated for operation down to -13°F or lower.
              For most Fort Wayne homes, we recommend pairing the heat pump with a gas furnace in a dual-fuel configuration
              (see below).
            </p>
            <p><strong>Cost:</strong> $7,000-$12,000 installed (before rebates).</p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Dual-Fuel Systems (Heat Pump + Gas Furnace)</h3>
            <p>
              This is our most common recommendation for Fort Wayne. The heat pump handles cooling and heating above 30-35°F.
              When temperatures drop below the switchover point, the gas furnace takes over automatically. You get the
              efficiency of a heat pump for 80% of the heating season and the reliability of gas heat for the coldest 20%.
            </p>
            <p><strong>Cost:</strong> $9,000-$14,000 installed (before rebates).</p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Ductless Mini-Splits</h3>
            <p>
              No ductwork? No problem. Ductless mini-splits consist of an outdoor compressor and one or more indoor wall-mounted
              heads. Each head has its own thermostat, giving you true zoned control. We install hyper-heating models that
              maintain 80%+ capacity at 5°F.
            </p>
            <p>
              Mini-splits are ideal for: room additions, garage workshops, homes without existing ductwork, and rental
              properties in <Link href="/new-haven/" className="text-red-600 hover:underline">New Haven</Link> and
              <Link href="/huntertown/" className="text-red-600 hover:underline">Huntertown</Link>.
            </p>
            <p><strong>Cost:</strong> $3,500-$5,500 per zone (before rebates).</p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Installation Process</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Home assessment:</strong> We evaluate insulation, windows, ductwork, and existing equipment. We also
                verify your electrical panel can handle the heat pump's load.
              </li>
              <li>
                <strong>Manual J and Manual S:</strong> We calculate the exact heating and cooling load and select equipment
                with the correct capacity and efficiency ratings.
              </li>
              <li>
                <strong>Rebate pre-qualification:</strong> We help you determine which rebates you qualify for and what
                documentation you need.
              </li>
              <li>
                <strong>Written quote:</strong> Detailed, itemized pricing with equipment specs, warranty terms, and timeline.
              </li>
              <li>
                <strong>Permits:</strong> We pull all necessary permits from the City of Fort Wayne.
              </li>
              <li>
                <strong>Installation:</strong> 1-2 days for ducted systems; 1 day for most mini-splits.
              </li>
              <li>
                <strong>Commissioning and testing:</strong> We verify refrigerant charge, airflow, and defrost cycle operation.
                We test the system in both heating and cooling modes.
              </li>
              <li>
                <strong>Rebate submission:</strong> We provide the documentation you need to claim federal and state rebates.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Cold-Climate Heat Pump Brands We Trust</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mitsubishi Electric:</strong> The gold standard for ductless mini-splits. Hyper-heating models maintain full capacity at -13°F. Best-in-class warranty.</li>
              <li><strong>Bosch:</strong> Excellent inverter-driven ducted heat pumps. Quiet operation and strong cold-weather performance. Great value.</li>
              <li><strong>Carrier/Bryant:</strong> Strong cold-climate ducted options with good dual-fuel integration. Extensive dealer network for warranty support.</li>
              <li><strong>Lennox:</strong> High-efficiency options with advanced variable-capacity compressors. Premium pricing but top-tier performance.</li>
              <li><strong>Daikin:</strong> Strong mini-split and ducted options. Good cold-weather performance and competitive pricing.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Is a Heat Pump Right for Your Fort Wayne Home?</h2>
            <p>
              A heat pump is probably a good investment if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your home is reasonably well-insulated (not a drafty 1890s Victorian without upgrades)</li>
              <li>You currently heat with propane, fuel oil, or electric resistance (not natural gas)</li>
              <li>You qualify for Indiana Energy Saver rebates</li>
              <li>Your existing AC needs replacement anyway (you are paying for cooling equipment regardless)</li>
              <li>You want to reduce your carbon footprint without sacrificing comfort</li>
            </ul>
            <p>
              A heat pump is probably <em>not</em> the right choice if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your home has major insulation deficiencies that have not been addressed</li>
              <li>You have a relatively new, high-efficiency gas furnace and just need AC replacement</li>
              <li>You are planning to sell the home within 2-3 years (you will not recoup the investment)</li>
              <li>You cannot take advantage of any rebates and the payback period exceeds your expected ownership</li>
            </ul>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Resources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/heat-pumps-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pumps: Do They Work in Fort Wayne?</Link>
              <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline font-semibold">Rebates & Incentive Programs</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Cost Guide 2026</Link>
              <Link href="/ac-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Installation</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Ready for a Heat Pump?"
          subtitle="Free estimates with rebate pre-qualification. We will tell you honestly if a heat pump makes sense for your home."
        />
      </main>
    </>
  );
}
