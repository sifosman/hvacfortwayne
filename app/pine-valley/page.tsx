import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Repair Pine Valley, Fort Wayne | AC & Furnace Service in Northeast Fort Wayne",
  description:
    "HVAC repair and installation in Pine Valley, Fort Wayne. Specializing in 1970s-1990s homes, pine needle maintenance, and aging system replacement. Same-day service. Call (260) 786-9284.",
  keywords:
    "hvac repair pine valley fort wayne, ac repair pine valley, furnace repair northeast fort wayne, pine valley hvac service",
  alternates: { canonical: "https://hvacrepairfortwayne.com/pine-valley/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Pine Valley", item: "https://hvacrepairfortwayne.com/pine-valley/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my AC struggle in Pine Valley compared to other Fort Wayne neighborhoods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pine Valley's mature pine trees drop needles year-round, which clog outdoor condenser fins and reduce airflow by 20-30%. Additionally, many 1970s homes here have inadequate attic ventilation and original ductwork with only one or two return air ducts, restricting airflow. Combined with Fort Wayne's humid summers, these factors make AC systems work significantly harder."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to replace a furnace in Pine Valley, Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Pine Valley's typical 1,500-2,000 sq ft homes built in the 1970s-1980s, furnace replacement ranges from $3,800 to $6,200 for a standard 80% AFUE unit, or $4,800 to $8,200 for a high-efficiency 96% AFUE model. Additional costs may include ductwork modifications ($800-$2,500) if the original galvanized ducts are deteriorating."
      }
    },
    {
      "@type": "Question",
      "name": "Are there rebates for HVAC replacement in Pine Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fort Wayne homeowners in Pine Valley can access federal tax credits up to $3,200 through the Inflation Reduction Act for high-efficiency heat pumps and furnaces. Indiana Michigan Power (I&M) also offers rebates for qualifying energy-efficient upgrades. We help homeowners navigate and apply for all available rebates."
      }
    },
    {
      "@type": "Question",
      "name": "How often should Pine Valley homeowners clean their outdoor AC condenser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Pine Valley, we recommend quarterly condenser cleaning — especially in spring (May) and fall (September) when pine needles, cottonwood fluff, and leaf debris are at their peak. Monthly visual inspections are also advisable. A clogged condenser reduces efficiency by 15-25% and can cause compressor failure."
      }
    }
  ]
};

export default function PineValleyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Northeast Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Pine Valley</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Pine Valley's mix of 1970s-1990s homes and mature landscaping creates HVAC challenges no national chain understands.
              We have serviced this northeast Fort Wayne neighborhood for years and know the equipment, ductwork, and the specific
              failures that pine needles and aging systems cause.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Pine Valley Housing Stock and HVAC Systems</h2>
            <p>
              Pine Valley was developed heavily in the 1970s and 1980s, with many homes built during the energy crisis era.
              Unlike newer Fort Wayne subdivisions, these homes often have compromised insulation — builders in the 1970s
              prioritized cost over efficiency. Original HVAC systems are typically 80% AFUE furnaces with 10-12 SEER AC units,
              now 25-35 years old and well past their designed lifespans.
            </p>
            <p>
              The neighborhood's mature pine trees (hence the name) are beautiful but drop needles year-round. Pine needles are
              notorious for clogging outdoor condenser fins, gutter drainage systems, and even finding their way into attic
              vents. We have replaced more condenser fan motors in Pine Valley than any other Fort Wayne neighborhood — not
              because the motors are defective, but because needles jam the blades and burn out the motor.
            </p>
            <p>
              Pine Valley homes average 1,500-2,200 square feet, typically split-level or two-story designs built on generous lots.
              Many have unfinished basements with furnace/AC systems installed on the floor, and ductwork runs through soffits
              that were never designed for modern high-static-pressure equipment. When we replace an HVAC system in Pine Valley,
              we always evaluate whether the existing ductwork can handle the airflow requirements of a new high-efficiency unit.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common HVAC Issues in Pine Valley</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Original 1980s furnaces failing:</strong> Heat exchanger cracks, failed ignition modules, and worn blower
                motors are routine in Pine Valley's original systems. A furnace installed in 1985 is now 40+ years old — it has
                survived over 800 Fort Wayne winters. Components simply wear out.
              </li>
              <li>
                <strong>Pine needle accumulation:</strong> Outdoor AC units need quarterly cleaning in Pine Valley. Needles wedge
                between condenser fins and reduce airflow by 20-30%. Worse, needles that fall into the fan guard jam the blade
                and burn out the motor — a $450-$700 repair that is entirely preventable.
              </li>
              <li>
                <strong>Poor attic ventilation:</strong> Many 1970s homes here were built with inadequate soffit and ridge venting.
                Hot attics in summer (often reaching 140°F+) force AC systems to work 15-20% harder. In winter, trapped moisture
                causes ice dams that damage roofs and leak into attics.
              </li>
              <li>
                <strong>Original ductwork with minimal returns:</strong> Some Pine Valley homes were built with only one or two
                return air ducts for the entire house. This restricts airflow, causes pressure imbalances, and makes upstairs
                rooms significantly hotter in summer and colder in winter.
              </li>
              <li>
                <strong>Hard water scale in humidifiers:</strong> Allen County's moderately hard water means bypass humidifiers
                in Pine Valley homes accumulate scale on the water panel, reducing output by 50%+ within a season. Regular pad
                replacement is essential for winter comfort.
              </li>
              <li>
                <strong>Condensate drain issues in split-levels:</strong> Many Pine Valley split-levels have the indoor unit in
                a closet or crawl space with a long drain line run. A clogged drain in these configurations causes water damage
                to flooring before anyone notices the leak.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Why Pine Valley Homeowners Choose Us</h2>
            <p>
              Our technicians know Pine Valley's streets, its housing stock, and its specific HVAC challenges. We understand which
              builders used quality ductwork and which cut corners. We know which homes have crawl space furnaces versus basement
              installations. This local knowledge means faster diagnostics and more accurate quotes.
            </p>
            <p>
              Response time to Pine Valley from our dispatch center is typically <strong>30-50 minutes</strong> during business hours.
              Emergency after-hours service is available with premium rates. We carry parts for the Carrier, Bryant, and Lennox
              systems common in this neighborhood's 1980s-1990s builds.
            </p>
            <p>
              For full system replacements, we provide Manual J load calculations as standard practice. We also evaluate attic
              ventilation and ductwork capacity — critical in Pine Valley's older homes where undersized ducts and poor ventilation
              are common. We have seen too many contractors install a new high-efficiency system on old, leaky ductwork and wonder
              why the homeowner still has comfort complaints.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Pine Valley HVAC Replacement Considerations</h2>
            <p>
              If your Pine Valley home still has its original 1980s system, replacement is not a question of "if" but "when."
              Here is what to consider:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Ductwork condition:</strong> Original galvanized steel ducts from the 1970s may be rusted, disconnected,
                or leaking 20-30% of your conditioned air into the basement or walls. We test duct leakage before quoting replacement.
              </li>
              <li>
                <strong>Electrical panel capacity:</strong> Many Pine Valley homes still have 100-amp panels. Modern high-efficiency
                furnaces with ECM blowers and heat pumps may require a panel upgrade ($1,200-$2,500).
              </li>
              <li>
                <strong>Attic ventilation:</strong> If your attic hits 140°F in summer, your new AC will struggle regardless of SEER
                rating. We recommend ridge vents, soffit vents, or powered attic fans as part of a holistic replacement plan.
              </li>
              <li>
                <strong>Heat pump viability:</strong> Pine Valley's homes, with their moderate size and often updated windows,
                are excellent candidates for heat pumps — especially dual-fuel systems that switch to gas below 35°F. The federal
                tax credit can cover up to 30% of installation costs.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Rebates and Incentives for Pine Valley Homeowners</h2>
            <p>
              Pine Valley homeowners have access to significant rebates for HVAC upgrades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Federal Tax Credit (Inflation Reduction Act):</strong> Up to $3,200 total — $2,000 for heat pumps,
                $600 for high-efficiency furnaces/AC units. Available through 2032.
              </li>
              <li>
                <strong>Indiana Michigan Power (I&M) Rebates:</strong> Vary by equipment efficiency. High-efficiency heat pumps
                and AC units qualify for $200-$500 rebates.
              </li>
              <li>
                <strong>Financing:</strong> We offer 0% financing for 12-24 months on qualifying replacement projects.
              </li>
            </ul>
            <p>
              We handle the rebate paperwork as part of every replacement project. Most Pine Valley homeowners save $1,500-$3,500
              on a full system replacement when all incentives are combined.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Services We Provide in Pine Valley</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AC repair and replacement (including R-22 to R-410A/R-454B conversions)</li>
              <li>Furnace repair and replacement (80% and 96% AFUE options)</li>
              <li>Heat pump installation (dual-fuel and cold-climate options)</li>
              <li>Ductless mini-split installation for additions and hard-to-cool rooms</li>
              <li>Ductwork sealing, repair, and modification</li>
              <li>Attic ventilation assessment and installation</li>
              <li>Whole-home air purification and dehumidification</li>
              <li>Smart thermostat installation and programming</li>
              <li>Preventive maintenance agreements with priority scheduling</li>
            </ul>
          </div>

          {/* Tool CTA */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Wondering What Replacement Would Cost in Pine Valley?</h3>
            <p className="text-slate-600 mb-6">Get an instant Fort Wayne-specific price range based on your home size and system type. No email required.</p>
            <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Cost Estimator →
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">Pine Valley HVAC FAQ</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((q) => (
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

          {/* Symptom Checker CTA */}
          <div className="mt-12 bg-red-50 rounded-2xl border border-red-100 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">AC or Furnace Acting Up?</h3>
            <p className="text-slate-600 mb-6">Pick your symptom and get the likely cause, typical Pine Valley repair cost, and whether you need same-day service.</p>
            <Link href="/hvac-symptom-checker" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Use the Symptom Checker →
            </Link>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Pine Valley HVAC Service"
          subtitle="Fast, local AC and furnace repair in Pine Valley and all of northeast Fort Wayne. Call now for same-day service."
        />
      </main>
    </>
  );
}
