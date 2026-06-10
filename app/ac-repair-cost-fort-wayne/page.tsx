import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "AC Repair Costs in Fort Wayne [2026 Pricing Guide] | HVAC Repair",
  description:
    "Real 2026 AC repair costs in Fort Wayne, IN. See what Allen County homeowners pay for capacitor replacement, compressor repair, refrigerant leaks, and more. Upfront pricing before any work begins.",
  keywords:
    "ac repair cost, ac repair cost fort wayne, air conditioner repair cost, ac capacitor replacement cost, home ac compressor replacement cost, ac compressor replacement cost, hvac repair cost fort wayne",
  alternates: { canonical: "https://hvacrepairfortwayne.com/ac-repair-cost-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "AC Repair Costs Fort Wayne", item: "https://hvacrepairfortwayne.com/ac-repair-cost-fort-wayne/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AC Repair Costs in Fort Wayne [2026 Pricing Guide]",
  description:
    "Real 2026 AC repair costs in Fort Wayne, IN. See what Allen County homeowners pay for capacitor replacement, compressor repair, refrigerant leaks, and more.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AC repair cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common AC repairs in Fort Wayne range from $150-$350 for capacitor replacement, $200-$400 for contactor replacement, $450-$900 for blower motor replacement, and $1,800-$3,200 for compressor replacement. Emergency after-hours service adds $150-$300 to the base cost."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my AC repair quote higher in summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summer demand spikes in Fort Wayne push both labor rates and parts availability. During July heatwaves, emergency rates apply after hours, and some contractors charge seasonal premiums. Scheduling non-urgent repairs in spring (April-May) often saves 10-20% compared to peak summer pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Does Fort Wayne humidity affect AC repair costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fort Wayne's sustained summer humidity (3.7 months of muggy conditions) causes more condensate drain clogs, evaporator coil corrosion, and electrical component failures than drier climates. Humidity-related repairs like drain line clearing ($150-$250) and coil cleaning ($200-$400) are more frequent here than in states with lower moisture levels."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to replace an AC compressor in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AC compressor replacement in Fort Wayne typically costs $1,800-$3,200 including parts and labor. The price depends on tonnage (1.5 to 5 tons), refrigerant type (R-410A vs phased-out R-22), and whether the indoor evaporator coil also needs replacement. For systems over 10 years old, full system replacement ($3,500-$7,500) is often more economical than compressor-only replacement."
      }
    },
    {
      "@type": "Question",
      "name": "Is it worth repairing a 15-year-old AC unit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually no. The industry rule: if repair exceeds 40% of replacement cost, replace. A 15-year-old unit in Fort Wayne has already exceeded its expected lifespan in our extreme climate. Even a $500 repair on an old 13 SEER unit is money you will not recover in efficiency or longevity. New 16+ SEER systems cut cooling costs by 20-30% and qualify for rebates."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an AC capacitor replacement cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capacitor replacement in Fort Wayne costs $150-$350 including parts and labor. Single-run capacitors are on the lower end ($150-$250), while dual-run capacitors that serve both compressor and fan motor cost $200-$350. This is one of the most common summer repairs and takes 15-30 minutes to complete."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest AC repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cheapest AC 'repair' is often no repair at all — just maintenance. A clogged filter or blocked condensate drain can mimic a broken system. If a repair is genuinely needed, the lowest-cost fixes are contactor replacement ($200-$400), capacitor replacement ($150-$350), and condensate pump replacement ($250-$500). Always get a diagnostic before approving any work."
      }
    }
  ]
};

export default function ACRepairCostFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">2026 Allen County Pricing</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              AC Repair Costs: <span className="text-red-600 italic">What Fort Wayne Homeowners Pay</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Tired of vague "it depends" pricing? Here are the real numbers for AC repairs in Fort Wayne — based on actual
              Allen County invoices, not national averages pulled from a generic database.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
              Common AC Repairs in Fort Wayne: Real 2026 Prices
            </h2>
            <p>
              These prices include parts, labor, and diagnostics. They reflect what licensed HVAC contractors in Allen County
              actually charge — not what a blog from California guesses.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Repair Type</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Fort Wayne Cost Range</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Repair vs Replace?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Capacitor Replacement</td>
                    <td className="px-4 py-3">$150 – $350</td>
                    <td className="px-4 py-3">Always repair</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Contactor Replacement</td>
                    <td className="px-4 py-3">$200 – $400</td>
                    <td className="px-4 py-3">Always repair</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Condensate Drain Clearing</td>
                    <td className="px-4 py-3">$120 – $250</td>
                    <td className="px-4 py-3">Always repair</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Condensate Pump Replacement</td>
                    <td className="px-4 py-3">$250 – $500</td>
                    <td className="px-4 py-3">Always repair</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Blower Motor Replacement</td>
                    <td className="px-4 py-3">$450 – $900</td>
                    <td className="px-4 py-3">Repair if unit &lt; 10 years old</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Refrigerant Recharge (R-410A)</td>
                    <td className="px-4 py-3">$300 – $600</td>
                    <td className="px-4 py-3">Repair if leak is small and sealed</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Evaporator Coil Replacement</td>
                    <td className="px-4 py-3">$1,200 – $2,800</td>
                    <td className="px-4 py-3">Replace unit if 10+ years old</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Compressor Replacement</td>
                    <td className="px-4 py-3">$1,800 – $3,200</td>
                    <td className="px-4 py-3">Usually replace the whole unit</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Circuit Board Replacement</td>
                    <td className="px-4 py-3">$400 – $800</td>
                    <td className="px-4 py-3">Repair if unit &lt; 12 years old</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Fan Motor (Outdoor)</td>
                    <td className="px-4 py-3">$350 – $700</td>
                    <td className="px-4 py-3">Repair if unit &lt; 10 years old</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 italic">
              Note: Emergency after-hours service (6 PM – 7 AM, weekends, holidays) typically adds $150–$300 to the base repair cost.
              Weekend premiums are standard across Allen County.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              What Drives AC Repair Costs Up in Fort Wayne?
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">1. Humidity-Related Damage</h3>
            <p>
              Fort Wayne's 3.7-month muggy season means your AC runs harder and longer than in drier climates. Condensate drains
              clog with algae and mold. Evaporator coils corrode from constant moisture exposure. Electrical components in the
              outdoor unit degrade faster from humidity cycling. A repair that might cost $200 in Arizona often costs $300-$400 here
              because the underlying damage is more severe.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">2. R-22 Refrigerant Phase-Out</h3>
            <p>
              If your AC was installed before 2010, it likely uses R-22 (Freon), which was phased out in 2020. Reclaimed R-22
              now costs $100+ per pound, and a 3-ton system holds 6-10 pounds. A "simple" refrigerant recharge can cost $600-$900
              — and if the leak is in the evaporator coil, you are looking at $1,800+ total. In almost all cases, a leaking R-22
              system is a replacement candidate, not a repair candidate.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">3. Accessibility and Location</h3>
            <p>
              In older Fort Wayne neighborhoods like <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>{" "}
              and <Link href="/arlington-park/" className="text-red-600 hover:underline">Arlington Park</Link>, HVAC equipment is often in
              cramped basements, tight crawl spaces, or attics with limited headroom. If a technician needs two people to carry a
              compressor up a narrow staircase or work in a 4-foot crawl space, labor time increases — and so does the bill.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">4. After-Hours and Emergency Rates</h3>
            <p>
              A capacitor failure on a 95°F Saturday afternoon is an emergency. Emergency dispatch rates in Fort Wayne range from
              $250-$400 for the diagnostic visit alone, plus the repair cost. The same capacitor replacement that costs $200 on
              a Tuesday morning costs $400-$550 on a Sunday evening. This is not price gouging — it is the cost of keeping
              technicians on-call and paying overtime.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              How to Avoid Overpaying for AC Repair in Fort Wayne
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Get a written quote before any work begins.</strong> A reputable contractor will diagnose the problem,
                explain the failure, and give you a fixed price. If they say "we will tell you when we are done," get a second opinion.
              </li>
              <li>
                <strong>Ask for the part they replaced.</strong> Ethical technicians will show you the failed capacitor, contactor,
                or board. If they refuse, that is a red flag.
              </li>
              <li>
                <strong>Do not let anyone "top off" refrigerant without finding the leak.</strong> Refrigerant does not get
                "used up." If it is low, there is a leak. A contractor who adds refrigerant without leak detection is either
                incompetent or dishonest — and you will be calling them back in 6 months.
              </li>
              <li>
                <strong>Check if the repair makes financial sense.</strong> A $2,500 compressor replacement on a 12-year-old unit
                is almost never the right call. Use our <Link href="/repair-or-replace-tool/" className="text-red-600 hover:underline">Repair or Replace Tool</Link>{" "}
                for an honest recommendation.
              </li>
              <li>
                <strong>Schedule spring maintenance.</strong> A $129 tune-up in April catches problems before they become
                $800 emergencies in July. We clean condensate drains, test capacitors under load, and check refrigerant levels
                before the heat hits.
              </li>
            </ul>

            {/* Inline Cost Estimator CTA */}
            <div className="bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center my-8 not-prose">
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Get a Personalized AC Repair Estimate</h3>
              <p className="text-slate-600 mb-6">These are general ranges. Use our interactive Cost Estimator to get a Fort Wayne-specific price based on your exact home size, system type, and repair needs. No email required.</p>
              <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
                Try the Cost Estimator →
              </Link>
            </div>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              AC Repair Cost by Fort Wayne Neighborhood
            </h2>
            <p>
              While labor rates are consistent across Allen County, the age and condition of housing stock affects repair complexity
              and total cost:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Aboite & New Haven (newer construction):</strong> Equipment is usually accessible, ductwork is in good
                condition, and systems are younger. Repairs tend toward the lower end of the price range.
              </li>
              <li>
                <strong>Forest Park & Arlington Park (pre-1970 homes):</strong> Older electrical panels, galvanized ductwork,
                and tight mechanical rooms make repairs more labor-intensive. Expect mid-to-high range pricing.
              </li>
              <li>
                <strong>Waynedale & Pine Valley (mixed age):</strong> Varies by specific home. Many have had partial HVAC
                upgrades, which can create compatibility issues between old and new components.
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">AC Repair Cost FAQ</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((q: any) => (
                <details key={q.name} className="bg-white border border-gray-200 rounded-xl p-5 group cursor-pointer">
                  <summary className="font-semibold text-slate-900 list-none flex justify-between items-center">
                    {q.name}
                    <span className="text-red-600 ml-2 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Fort Wayne HVAC Resources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair Fort Wayne</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">Full HVAC Cost Guide</Link>
              <Link href="/repair-or-replace-tool/" className="text-red-600 hover:underline font-semibold">Repair or Replace Tool</Link>
              <Link href="/hvac-symptom-checker/" className="text-red-600 hover:underline font-semibold">HVAC Symptom Checker</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance</Link>
              <Link href="/emergency-hvac-fort-wayne/" className="text-red-600 hover:underline font-semibold">Emergency HVAC Service</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Need AC Repair?"
          subtitle="Same-day AC repair across Fort Wayne and Allen County. Upfront pricing — no surprises."
        />
      </main>
    </>
  );
}
