import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Maintenance & Tune-Up Costs in Fort Wayne [2026] | AC & Furnace",
  description:
    "Real 2026 HVAC maintenance costs in Fort Wayne, IN. AC tune-ups, furnace inspections, and annual maintenance plans. See what Allen County homeowners pay and how much maintenance saves on repairs.",
  keywords:
    "ac tune up cost, ac tune up cost near me, hvac maintenance cost, air conditioner maintenance, hvac annual maintenance near me, hvac maintenance cost fort wayne, furnace tune up cost",
  alternates: { canonical: "https://hvacrepairfortwayne.com/hvac-maintenance-cost-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "HVAC Maintenance Costs Fort Wayne", item: "https://hvacrepairfortwayne.com/hvac-maintenance-cost-fort-wayne/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HVAC Maintenance & Tune-Up Costs in Fort Wayne [2026]",
  description:
    "Real 2026 HVAC maintenance costs in Fort Wayne, IN. AC tune-ups, furnace inspections, and annual maintenance plans with Allen County pricing.",
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
      "name": "How much does an AC tune-up cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professional AC tune-up in Fort Wayne costs $89-$149 for a single system. This includes refrigerant pressure testing, condenser coil cleaning, evaporator coil inspection, condensate drain flush, electrical component testing, blower motor inspection, thermostat calibration, and a new filter. A full system tune-up (both AC and furnace) costs $149-$229."
      }
    },
    {
      "@type": "Question",
      "name": "What does a furnace tune-up cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A furnace inspection and tune-up in Fort Wayne costs $89-$149. The service includes heat exchanger inspection with a borescope camera, igniter and flame sensor testing, gas pressure and combustion analysis, safety switch verification, venting inspection, and a carbon monoxide test. Many homeowners bundle this with their AC tune-up for $149-$229 total."
      }
    },
    {
      "@type": "Question",
      "name": "Is an HVAC maintenance plan worth it in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. An annual maintenance agreement ($199-$279/year) includes two tune-ups, a 15% repair discount, and priority scheduling. The plan pays for itself with just one repair discount. More importantly, homeowners who get twice-yearly maintenance spend 40-60% less on repairs over a 10-year period compared to those who wait for breakdowns. In Fort Wayne's extreme climate, maintenance is not optional — it is survival."
      }
    },
    {
      "@type": "Question",
      "name": "When should I schedule HVAC maintenance in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schedule AC maintenance in April, before the first 80°F day. Schedule furnace maintenance in September-October, before the first freeze (typically mid-October in Fort Wayne). By mid-May and mid-October, appointment availability shrinks and emergency rates kick in for breakdowns. Priority scheduling for maintenance agreement holders means you get the first available slots."
      }
    },
    {
      "@type": "Question",
      "name": "How much does duct cleaning cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional duct cleaning in Fort Wayne costs $300-$600 for a typical single-family home. The price depends on the number of vents, ductwork accessibility, and whether mold remediation is needed. Older homes in Forest Park and Arlington Park with original galvanized ductwork often require more extensive cleaning than newer construction in Aboite."
      }
    },
    {
      "@type": "Question",
      "name": "Can I skip HVAC maintenance to save money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skipping maintenance to save $200/year is the most expensive decision you can make. A $129 tune-up catches a weakening capacitor before it fails on the hottest day of summer — saving you a $350 emergency call plus the inconvenience. Cleaning a condensate drain during maintenance prevents a $1,000+ water damage repair. Checking refrigerant levels prevents a $2,500 compressor burnout. Over 10 years, maintenance saves $1,200+ in avoidable repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a Fort Wayne AC tune-up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professional AC tune-up in Fort Wayne includes: refrigerant pressure and level check with superheat/subcooling measurement, condenser coil chemical cleaning, evaporator coil inspection for mold and restriction, condensate drain line flush and anti-algae treatment, electrical component testing (capacitors, contactors, wiring), blower motor amp draw and bearing check, thermostat calibration and programming, ductwork visual inspection for disconnected runs, and a new filter installation with MERV rating recommendation. The service takes 60-90 minutes."
      }
    }
  ]
};

export default function HVACMaintenanceCostFortWayne() {
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
              HVAC Maintenance Costs: <span className="text-red-600 italic">Fort Wayne Tune-Up Prices</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              How much does an AC tune-up or furnace inspection cost in Fort Wayne? Here are the real numbers — with the math
              on why maintenance is the highest-ROI investment you can make in your HVAC system.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
              HVAC Maintenance Pricing in Fort Wayne: 2026
            </h2>
            <p>
              These prices are for professional service by licensed, insured HVAC technicians in Allen County. Beware of
              "$29 tune-up" offers — they are usually sales pitches disguised as maintenance, designed to find problems that
              do not exist.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Service</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Fort Wayne Cost Range</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">What Is Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">AC Tune-Up (Single System)</td>
                    <td className="px-4 py-3">$89 – $149</td>
                    <td className="px-4 py-3">Coil cleaning, refrigerant check, filter, drain line, electrical test</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Furnace Tune-Up (Single System)</td>
                    <td className="px-4 py-3">$89 – $149</td>
                    <td className="px-4 py-3">Heat exchanger inspection, igniter test, combustion analysis, safety check</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Full System Tune-Up</td>
                    <td className="px-4 py-3">$149 – $229</td>
                    <td className="px-4 py-3">Both AC and furnace; filters included; priority scheduling</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Annual Maintenance Agreement</td>
                    <td className="px-4 py-3">$199 – $279/yr</td>
                    <td className="px-4 py-3">Two tune-ups; 15% repair discount; priority scheduling; no diagnostic fees</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Duct Cleaning</td>
                    <td className="px-4 py-3">$300 – $600</td>
                    <td className="px-4 py-3">Full system cleaning, camera inspection, vent count dependent</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Filter Replacement (Professional)</td>
                    <td className="px-4 py-3">$25 – $45</td>
                    <td className="px-4 py-3">High-quality filter installed; system airflow verified</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Filter Replacement (DIY)</td>
                    <td className="px-4 py-3">$15 – $40</td>
                    <td className="px-4 py-3">Retail filter cost; replace monthly during peak season</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Condensate Drain Treatment</td>
                    <td className="px-4 py-3">$50 – $100</td>
                    <td className="px-4 py-3">Anti-algae tablets or treatment; prevents summer clogs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 italic">
              Note: Prices reflect professional service by licensed Allen County HVAC contractors. "Budget" tune-ups under $50
              are typically bait-and-switch sales calls, not real maintenance.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              The Real Value: Maintenance vs. Breakdown Math
            </h2>
            <p>
              Here is what maintenance actually saves you in Fort Wayne's climate:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Maintenance Catch</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Tune-Up Cost</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Emergency Repair Cost</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Your Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Weak capacitor replaced during tune-up</td>
                    <td className="px-4 py-3">$129</td>
                    <td className="px-4 py-3">$350 (emergency call, after hours)</td>
                    <td className="px-4 py-3 font-bold text-green-700">$221</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Drain line cleared before clog</td>
                    <td className="px-4 py-3">$129</td>
                    <td className="px-4 py-3">$1,000-$5,000 (water damage repair)</td>
                    <td className="px-4 py-3 font-bold text-green-700">$871-$4,871</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Refrigerant leak caught early</td>
                    <td className="px-4 py-3">$129</td>
                    <td className="px-4 py-3">$2,500 (compressor burnout)</td>
                    <td className="px-4 py-3 font-bold text-green-700">$2,371</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Heat exchanger crack found in fall</td>
                    <td className="px-4 py-3">$129</td>
                    <td className="px-4 py-3">$5,000+ (CO exposure, water damage from frozen pipes)</td>
                    <td className="px-4 py-3 font-bold text-green-700">$4,871+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Over a 10-year period, Fort Wayne homeowners who get twice-yearly maintenance spend <strong>40-60% less</strong> on
              repairs than those who wait for breakdowns. The $200-$250 annual maintenance cost prevents $1,000+ in emergency
              repairs — and often avoids a total system replacement that comes at the worst possible time.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              When to Schedule Maintenance in Fort Wayne
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Spring AC Tune-Up: April</h3>
            <p>
              Fort Wayne's first 80°F day usually arrives in early May. By then, every HVAC company in Allen County is booked
              solid with emergency calls. Scheduling your AC tune-up in <strong>April</strong> ensures your system is ready before
              the humidity hits. You also get the technician's full attention — not a rushed 20-minute visit between emergency calls.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Fall Furnace Inspection: September-October</h3>
            <p>
              The first freeze in Fort Wayne typically arrives in mid-October. By late September, you want your furnace tested
              and verified. A fall inspection catches igniter weakness, flame sensor degradation, and heat exchanger issues
              <strong>before</strong> the first cold snap. Priority scheduling for maintenance agreement holders means you get
              the first available slots in September — before the October rush.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">What Happens If You Wait</h3>
            <p>
              If you skip spring maintenance, you are gambling that your AC will survive July's 11.7 oppressively humid days
              without a capacitor failure, refrigerant leak, or drain clog. If you skip fall maintenance, you are hoping your
              furnace igniter does not crack on the first sub-20°F night. In both cases, the failure will happen at the worst
              possible time — and you will pay emergency rates.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              Fort Wayne-Specific Maintenance Concerns
            </h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Agricultural Dust and Pollen</h3>
            <p>
              Surrounded by corn and soybean fields, Fort Wayne gets more airborne particulate than most Indiana cities. During
              planting and harvest (April-May and September-October), dust levels spike. Outdoor condenser units in rural-adjacent
              areas like <Link href="/grabill/" className="text-red-600 hover:underline">Grabill</Link>{" "}
              and <Link href="/leo-cedarville/" className="text-red-600 hover:underline">Leo-Cedarville</Link> can accumulate a
              visible layer of dust in two weeks. More frequent filter changes and coil cleanings are necessary.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Lake-Effect Humidity</h3>
            <p>
              Fort Wayne's proximity to the Great Lakes means sustained humidity for 3.7 months. Your AC's evaporator coil is
              constantly wet, creating ideal conditions for mold and algae growth. Without regular cleaning, microbial growth
              restricts airflow, reduces cooling capacity by 15-25%, and creates musty odors that circulate through your ductwork.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Rapid Temperature Swings</h3>
            <p>
              Fort Wayne's "bipolar" weather — 40°F drops in a single day — means your HVAC components go from cold to full-load
              operation repeatedly. Capacitors, igniters, and limit switches experience thermal shock that causes premature
              failure. A tune-up tests these components under load before the extreme weather arrives.
            </p>

            {/* Inline Cost Estimator CTA */}
            <div className="bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center my-8 not-prose">
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Get a Personalized Replacement Estimate</h3>
              <p className="text-slate-600 mb-6">Wondering what a new system would cost if maintenance is no longer enough? Use our interactive Cost Estimator to get a Fort Wayne-specific price range. No email required.</p>
              <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
                Try the Cost Estimator →
              </Link>
            </div>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">
              How to Choose a Maintenance Provider in Fort Wayne
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Ask for a written checklist.</strong> A real tune-up has 15-20 specific checks. If the technician cannot
                show you a checklist, they are winging it.
              </li>
              <li>
                <strong>Verify they test under load.</strong> Checking a capacitor with a multimeter is meaningless if they do
                not test it under operating conditions. A capacitor can read fine at rest and fail under load.
              </li>
              <li>
                <strong>Insist on combustion analysis for furnaces.</strong> Any furnace tune-up should include a digital
                combustion test. If the technician does not have a combustion analyzer, they are not doing a real inspection.
              </li>
              <li>
                <strong>Get photos of the heat exchanger.</strong> A borescope camera inspection is the only way to verify heat
                exchanger integrity. If they claim "it looks fine" without photos, demand proof or get a second opinion.
              </li>
              <li>
                <strong>Avoid the upsell.</strong> A tune-up should not turn into a $3,000 sales pitch. If the technician finds
                a legitimate issue, they should explain it, show you the evidence, and give you time to decide — not pressure
                you to sign before they leave.
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">HVAC Maintenance Cost FAQ</h2>
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
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance Fort Wayne</Link>
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">Full HVAC Cost Guide</Link>
              <Link href="/ac-repair-cost-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair Costs</Link>
              <Link href="/repair-or-replace-tool/" className="text-red-600 hover:underline font-semibold">Repair or Replace Tool</Link>
              <Link href="/blog/spring-hvac-checklist-fort-wayne/" className="text-red-600 hover:underline font-semibold">Spring HVAC Checklist</Link>
              <Link href="/blog/furnace-tune-up-before-freeze-fort-wayne/" className="text-red-600 hover:underline font-semibold">Fall Furnace Tune-Up Timeline</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Stay Ahead of Breakdowns"
          subtitle="Schedule your spring or fall HVAC tune-up today. Fort Wayne's climate does not give second chances."
        />
      </main>
    </>
  );
}
