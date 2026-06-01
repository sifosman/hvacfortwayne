import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Fort Wayne Heat Pump Reality Check: 5 Homeowners Share Their First Winter",
  description:
    "Real Fort Wayne homeowners share their experiences with heat pumps through the first northern Indiana winter. The good, the bad, and the honest truth about cold-climate heat pumps in Allen County.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/heat-pump-reality-check/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hvacrepairfortwayne.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Heat Pump Reality Check", item: "https://hvacrepairfortwayne.com/blog/heat-pump-reality-check/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fort Wayne Heat Pump Reality Check: 5 Homeowners Share Their First Winter",
  description: "Real Fort Wayne homeowners share their experiences with heat pumps through the first northern Indiana winter.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function BlogHeatPumpRealityCheck() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Real Homeowner Stories</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">Fort Wayne Heat Pump <span className="text-red-600 italic">Reality Check</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">With up to $8,000 in Indiana rebates, heat pumps are everywhere in Fort Wayne. But what actually happens when the temperature drops to 5°F? We asked five Allen County homeowners to share their honest first-winter experiences.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Homeowner 1: The Aboite Subdivision (2020 Build, Cold-Climate Heat Pump)</h2>
            <p><strong>System:</strong> Bosch cold-climate heat pump, no gas backup. <strong>Home:</strong> 2,400 sq ft, well-insulated with spray foam.</p>
            <p>"I was nervous. Everyone said heat pumps do not work in Fort Wayne winters. But our house is pretty tight, and the Bosch system is rated to -13°F. Through December and most of January, the heat pump kept us at 70°F without any issues. We had one week in late January where it hit -8°F overnight, and the heat pump ran constantly but maintained 68°F. I was impressed. Our electric bill went up about $80 in January compared to our old gas furnace, but we eliminated the gas bill entirely. Net savings year-round: about $400."</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Homeowner 2: The Waynedale Ranch (1965 Build, Dual-Fuel System)</h2>
            <p><strong>System:</strong> Carrier cold-climate heat pump + 96% AFUE gas furnace. <strong>Home:</strong> 1,600 sq ft, original windows, added attic insulation.</p>
            <p>"We replaced our old furnace and AC with a dual-fuel setup. The heat pump handles everything above 32°F, and the gas furnace kicks in below that. Through November and most of December, we never heard the furnace run. In January, the furnace took over for about two weeks total. Our gas bill was about half what it used to be, and the electric increase was smaller than I expected. The best part? The house feels more comfortable. The heat pump runs longer, steadier cycles instead of the furnace blasting hot air for 10 minutes and then shutting off."</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Homeowner 3: The New Haven Split-Level (1995 Build, Standard Heat Pump)</h2>
            <p><strong>System:</strong> Standard 16 SEER heat pump with electric backup. <strong>Home:</strong> 2,000 sq ft, average insulation.</p>
            <p>"We made a mistake. The contractor talked us into a standard heat pump without mentioning that it would struggle below 30°F. When it dropped to 15°F in January, the system switched to emergency heat — those electric resistance coils. Our January electric bill was $680. For one month. We learned the hard way that you need a cold-climate heat pump or a gas backup in Fort Wayne. We are converting to a dual-fuel system this fall."</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Homeowner 4: The Huntertown New Build (2022, All-Electric Cold-Climate)</h2>
            <p><strong>System:</strong> Mitsubishi hyper-heating ductless multi-zone. <strong>Home:</strong> 2,800 sq ft, energy-efficient construction.</p>
            <p>"We built with no gas line. Everything is electric — heat pump, water heater, stove, dryer. The Mitsubishi system is amazing. Five indoor heads, each with its own thermostat. Our energy bills are actually lower than our friends with gas furnaces, even in January. The only downside is the upfront cost — the system was $14,000 after rebates. But we will break even in 7-8 years, and the zoned control is incredible."</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Homeowner 5: The Leo-Cedarville Farmhouse (1980 Build, Propane to Heat Pump Conversion)</h2>
            <p><strong>System:</strong> Bosch cold-climate heat pump + kept propane furnace as backup. <strong>Home:</strong> 3,200 sq ft on acreage, average insulation.</p>
            <p>"We were paying $3,200 per year for propane. The heat pump cut that to $800. The propane furnace only ran about 10 days all winter — the coldest stretch in January. Our total heating cost dropped from $3,200 to about $1,600 between electricity and propane. We wish we had done it sooner. The only issue was our electrical panel. We had to upgrade from 100 amps to 200 amps, which added $1,800. But even with that, we are saving $1,200+ per year."</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Honest Verdict</h2>
            <p>After talking to dozens of Fort Wayne homeowners with heat pumps, the pattern is clear:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Cold-climate heat pumps work in Fort Wayne.</strong> But they need to be properly sized, professionally installed, and matched to the home's insulation quality.</li>
              <li><strong>Dual-fuel is the safest bet for most homes.</strong> You get the efficiency of a heat pump for 80% of the season and gas backup for the worst cold snaps.</li>
              <li><strong>Standard heat pumps without backup are risky.</strong> Emergency electric heat is brutally expensive. Do not install a basic heat pump in Fort Wayne without a plan for sub-20°F weather.</li>
              <li><strong>Well-insulated homes are the biggest winners.</strong> A tight home with good windows and attic insulation can heat entirely with a heat pump even at 0°F. A leaky pre-1970 home cannot.</li>
              <li><strong>The rebates make the financial case compelling.</strong> With up to $8,000 from Indiana and $3,200 federal credit, a heat pump can be cheaper upfront than a conventional replacement.</li>
            </ul>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/heat-pumps-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pumps in Fort Wayne: Do They Work?</Link>
              <Link href="/heat-pump-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pump Installation Service</Link>
              <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline font-semibold">Rebates & Incentive Programs</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Cost Guide 2026</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Thinking About a Heat Pump?" subtitle="We will assess your home and give you an honest recommendation. No pressure, no sales tactics — just Fort Wayne expertise." />
      </main>
    </>
  );
}
