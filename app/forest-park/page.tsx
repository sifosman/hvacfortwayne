import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Repair Forest Park, Fort Wayne | Historic Home Heating & Cooling",
  description:
    "HVAC repair and installation in Forest Park, Fort Wayne. Specializing in 1920s-1950s historic homes, retrofit ductwork, boiler conversions, and preservation-friendly upgrades. Call (260) 786-9284.",
  keywords:
    "hvac repair forest park fort wayne, historic home hvac fort wayne, boiler conversion forest park, ductwork retrofit central fort wayne",
  alternates: { canonical: "https://hvacrepairfortwayne.com/forest-park/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Forest Park", item: "https://hvacrepairfortwayne.com/forest-park/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my Forest Park home have uneven heating and cooling between rooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Forest Park's historic homes were built before central HVAC existed. When ductwork was retrofitted in the 1970s-1980s, contractors often used undersized ducts, hallway returns instead of room returns, and supplies cut into original hardwood floors. These compromises create pressure imbalances and poor airflow. We measure static pressure at each vent and can redesign ductwork to deliver even comfort without damaging original plaster walls."
      }
    },
    {
      "@type": "Question",
      "name": "How much does HVAC replacement cost in a historic Forest Park home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Forest Park historic homes typically require $6,500-$12,000 for a full system replacement — higher than newer neighborhoods because of retrofit ductwork, asbestos abatement considerations, and the need to preserve architectural character. Boiler-to-forced-air conversions run $8,000-$15,000 depending on the size of the home and whether new ductwork must be run through finished spaces. We always provide detailed quotes that account for historic-home complexities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my boiler and add air conditioning in a Forest Park home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For Forest Park homeowners who want to preserve their boiler heat (which provides superior, even warmth), we recommend high-velocity mini-duct systems or ductless mini-splits for cooling. High-velocity systems use small flexible ducts that can be run through walls and ceilings with minimal disruption to original plaster. Ductless mini-splits require only a 3-inch hole for refrigerant lines and provide both heating and cooling. Both options avoid the major ductwork modifications that full conversions require."
      }
    },
    {
      "@type": "Question",
      "name": "Are there asbestos concerns when modifying HVAC in Forest Park homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and this is a major reason to hire a contractor who understands historic homes. Forest Park's pre-1950 homes often have asbestos in plaster joint compound, pipe insulation, and boiler insulation. Before any wall penetration or ductwork modification, we inspect for asbestos-containing materials. If present, we follow EPA abatement protocols or recommend a licensed abatement contractor. Never let an HVAC contractor disturb plaster or old insulation without testing first."
      }
    }
  ]
};

export default function ForestParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Central Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              HVAC Service <span className="text-red-600 italic">Forest Park</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Forest Park is one of Fort Wayne's most historic and architecturally significant neighborhoods. The Craftsman bungalows,
              Tudor revivals, and Colonial homes here date from the 1920s through the 1950s — and their HVAC systems tell the story
              of a century of heating technology. We specialize in working within the constraints of historic homes.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Forest Park's Historic Housing and HVAC Evolution</h2>
            <p>
              Many Forest Park homes were built before central air conditioning existed as a residential option. The original heating
              was coal-fired boilers or early gravity-fed gas furnaces that sent warm air through massive ducts designed for natural
              convection — not forced air. When AC was added — often in the 1970s or 1980s — contractors had to retrofit ductwork
              into homes never designed for it.
            </p>
            <p>
              The result? Forest Park has some of the most challenging ductwork configurations in Fort Wayne. We have seen flex duct
              squeezed through original plaster walls, supply vents cut into gorgeous hardwood floors, and returns that pull air
              from hallways instead of individual rooms. All of these compromises affect comfort, efficiency, and indoor air quality.
            </p>
            <p>
              The typical Forest Park home is 1,800-2,800 square feet, with thick plaster walls, minimal wall insulation by modern
              standards, and original windows that are beautiful but drafty. These factors mean HVAC systems work 25-40% harder here
              than in newer, tighter homes. A "standard" system size calculation does not work — we perform Manual J load
              calculations that account for the actual thermal characteristics of historic construction.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">HVAC Challenges Specific to Forest Park</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Retrofit ductwork:</strong> Ducts added decades after construction are often undersized, poorly sealed, and
                routed inefficiently through chases and soffits. We measure static pressure and airflow at each vent to identify
                problems. In one Forest Park home, we found a main trunk duct that was 50% smaller than code requires — the
                homeowner had been living with a permanently uncomfortable upstairs for 20 years.
              </li>
              <li>
                <strong>Plaster walls and asbestos:</strong> Forest Park's pre-1950 homes often have plaster walls with asbestos in
                the joint compound or pipe insulation. Any wall penetration for ductwork modification requires careful assessment.
                We test before we cut and follow EPA protocols if asbestos is present.
              </li>
              <li>
                <strong>Boiler-to-forced-air conversions:</strong> Some homes were converted from hot water radiators to forced air.
                These conversions often have uneven heating, noisy ductwork, and poor airflow design because the ductwork was
                shoehorned into spaces never intended for it. We have redesigned several Forest Park conversions that simply never
                worked properly.
              </li>
              <li>
                <strong>Basement moisture and rust:</strong> Forest Park's older basements are prone to dampness from foundation
                seepage and poor drainage. Furnaces in damp basements rust faster — we have replaced 10-year-old furnaces in
                Forest Park that looked 30 years old due to rust. Musty basement air also gets drawn into return ductwork,
                circulating mold spores throughout the home.
              </li>
              <li>
                <strong>Historic preservation considerations:</strong> For homes in historic districts or with preservation easements,
                exterior modifications like running refrigerant lines or adding outdoor units may require approval from the
                Historic Preservation Commission. We are familiar with these requirements and can design installations that meet
                both comfort needs and preservation guidelines.
              </li>
              <li>
                <strong>Original windows and air infiltration:</strong> Forest Park's original wood windows are charming but leak
                air. Storm windows help, but many homes lack them. This infiltration makes HVAC sizing critical — an oversized
                system short-cycles and dehumidifies poorly; an undersized system runs constantly and still cannot keep up.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Boiler Preservation vs. Full Conversion</h2>
            <p>
              Many Forest Park homeowners love their boiler heat. Boilers provide superior comfort — radiant heat is even, quiet,
              and does not dry the air like forced air. If your boiler is in good condition, you do not need to rip it out.
            </p>
            <p>
              <strong>Option 1: Keep the boiler, add cooling separately.</strong> High-velocity mini-duct systems or ductless
              mini-splits can provide air conditioning without disturbing your boiler. High-velocity systems use small 2-inch
              flexible ducts that fit inside walls with minimal plaster disruption. Ductless mini-splits mount on walls and
              require only a 3-inch hole for refrigerant lines. Both options preserve your boiler heat while adding modern cooling.
            </p>
            <p>
              <strong>Option 2: Full conversion to forced air.</strong> If your boiler is failing and you want central AC, a full
              conversion makes sense. But this is a major project — typically $8,000-$15,000 — that requires new ductwork, possible
              asbestos abatement, and careful design to avoid destroying the home's character. We have done many Forest Park
              conversions and know how to hide ductwork in chases, behind crown molding, and in closets.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Forest Park-Specific Service Notes</h2>
            <p>
              Response time to Forest Park is typically <strong>20-40 minutes</strong> — the shortest of any Fort Wayne neighborhood
              we serve because of its central location. We carry parts for the diverse equipment found in historic homes, from
              modern high-efficiency systems to older boiler components that are increasingly hard to find.
            </p>
            <p>
              For replacements and major upgrades, we provide preservation-friendly options: period-appropriate vent covers,
              hidden refrigerant lines, basement installations that respect original construction, and ductwork designs that minimize
              wall disruption. We have worked with the Fort Wayne Historic Preservation Commission and understand their requirements.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Rebates for Historic Home Upgrades</h2>
            <p>
              Forest Park homeowners may qualify for several incentives when upgrading HVAC:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Federal Tax Credits:</strong> Up to $3,200 through the Inflation Reduction Act for high-efficiency heat
                pumps, furnaces, and AC units.
              </li>
              <li>
                <strong>Indiana Michigan Power (I&M) Rebates:</strong> $200-$500 for qualifying equipment.
              </li>
              <li>
                <strong>Historic Preservation Tax Credits:</strong> If your home is in a registered historic district, certain
                energy-efficient upgrades may qualify for additional state or federal preservation credits. We can connect you
                with preservation consultants who specialize in these applications.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Services for Forest Park Homes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Boiler repair and maintenance (gas and oil)</li>
              <li>High-velocity mini-duct AC installation</li>
              <li>Ductless mini-split installation (heating and cooling)</li>
              <li>Boiler-to-forced-air conversion design and installation</li>
              <li>Ductwork redesign and sealing for retrofit systems</li>
              <li>Asbestos-aware HVAC modifications</li>
              <li>Whole-home dehumidification (critical for historic basements)</li>
              <li>Indoor air quality solutions for musty historic homes</li>
              <li>Smart thermostat installation compatible with boiler systems</li>
              <li>Historic-preservation-compliant exterior installations</li>
            </ul>
          </div>

          {/* Tool CTA */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Not Sure If You Should Repair or Replace?</h3>
            <p className="text-slate-600 mb-6">Get an honest recommendation based on your system's age, repair history, and energy costs. No email required.</p>
            <Link href="/repair-or-replace-tool" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Decision Tool →
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">Forest Park HVAC FAQ</h2>
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

          {/* Cost Estimator CTA */}
          <div className="mt-12 bg-red-50 rounded-2xl border border-red-100 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Curious About Replacement Costs?</h3>
            <p className="text-slate-600 mb-6">Get a Fort Wayne-specific price range for your home size and system type. No email required.</p>
            <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Cost Estimator →
            </Link>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Forest Park HVAC Service"
          subtitle="Historic home expertise in central Fort Wayne. Respectful, knowledgeable service that preserves your home's character."
        />
      </main>
    </>
  );
}
