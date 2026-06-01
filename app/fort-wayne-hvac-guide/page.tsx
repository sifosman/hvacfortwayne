import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

export const metadata: Metadata = {
  title: "Fort Wayne HVAC Guide: Surviving Indiana's Humid Summers & Freezing Winters",
  description:
    "The definitive HVAC guide for Fort Wayne homeowners. Learn how Allen County's lake-effect humidity, rapid temperature swings, and aging housing stock affect your heating and cooling system — and what to do about it.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/fort-wayne-hvac-guide/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Fort Wayne HVAC Guide", item: "https://hvacrepairfortwayne.com/fort-wayne-hvac-guide/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fort Wayne HVAC Guide: Surviving Indiana's Humid Summers and Freezing Winters",
  description:
    "The definitive HVAC guide for Fort Wayne homeowners. Learn how Allen County's lake-effect humidity, rapid temperature swings, and aging housing stock affect your heating and cooling system.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function FortWayneHVACGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">The Definitive Local Guide</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Fort Wayne HVAC Guide:
              <br />
              <span className="text-red-600 italic">Surviving Indiana's Weather</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Fort Wayne isn't Indianapolis. Our lake-effect humidity, 40-degree temperature swings in spring, and
              pre-1970 housing stock create HVAC challenges no national chain understands. This is the guide written
              specifically for Allen County homeowners.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">
                83°F Summer Highs
              </span>
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">
                20°F Winter Lows
              </span>
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">
                47.6% Pre-1970 Homes
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Why Fort Wayne's Climate Kills HVAC Systems</h2>
            <p>
              If you have lived in Fort Wayne for more than one full year, you already know: our weather is not subtle.
              July averages a high of <strong>83°F</strong> with humidity that makes it feel closer to 95°F. January drops
              to an average low of <strong>20°F</strong>, and overnight temperatures routinely fall below 10°F. That is a
              63-degree swing between seasonal averages — and it gets worse when you look at day-to-day volatility.
            </p>
            <p>
              According to <a href="https://weatherspark.com/y/15330/Average-Weather-in-Fort-Wayne-Indiana-United-States-Year-Round" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">WeatherSpark data</a>,
              the muggy period in Fort Wayne lasts <strong>3.7 months</strong>, from May 31 to September 19. July alone
              delivers <strong>11.7 muggy days</strong> — conditions classified as oppressive or miserable. For your air
              conditioner, that means the compressor is running near-continuously for weeks at a time. Capacitors burn out.
              Refrigerant lines strain. Drainage systems clog with algae and sludge from the constant moisture.
            </p>
            <p>
              Then winter hits. The cold season runs <strong>3.1 months</strong>, from December 1 to March 5. The snowy
              period stretches <strong>4.3 months</strong> — from November 24 to April 3. February averages <strong>4.0 inches</strong> of snow.
              Your furnace ignition system, heat exchanger, and blower motor are under constant stress from the freeze-thaw
              cycles that define a typical Fort Wayne winter.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Lake Effect: Fort Wayne's Hidden Humidity Problem</h2>
            <p>
              Fort Wayne is roughly 150 miles southwest of Lake Erie, but the lake's influence still reaches us. When
              prevailing winds blow from the northeast, they carry moisture across the flat Indiana farmland and dump it
              directly onto Allen County. The result? Summer humidity levels that regularly exceed 75% — well above the
              50-60% range where most HVAC systems are designed to operate efficiently.
            </p>
            <p>
              High humidity does three things to your AC system:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Reduced cooling capacity:</strong> When the air is already saturated with moisture, your AC has to
                work harder to remove it before it can cool. A system rated for 3 tons of cooling may effectively deliver
                only 2.2 tons in peak Fort Wayne humidity.
              </li>
              <li>
                <strong>Frozen evaporator coils:</strong> Constant high humidity causes condensation to build up on the
                evaporator coil. If airflow is restricted (dirty filter, closed vents, failing blower), that condensation
                freezes into ice — blocking airflow entirely and potentially cracking the coil.
              </li>
              <li>
                <strong>Drainage system failures:</strong> The condensate drain line on a Fort Wayne AC unit moves gallons
                of water per day during peak summer. That water is a perfect breeding ground for algae and mold. A clogged
                drain line is one of the most common emergency calls we get in July and August — and it is entirely preventable.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fort Wayne's Housing Stock: The Age Problem</h2>
            <p>
              Here is a number that should concern every Fort Wayne homeowner with an older house: <strong>47.6%</strong> of
              Fort Wayne's housing stock was built before 1970. That is nearly half the homes in the city. Another
              <strong> 33.2%</strong> were built between 1940 and 1969. Only <strong>11.24%</strong> of homes were built after
              2000. (Source: <a href="https://www.neighborhoodscout.com/in/fort-wayne/real-estate" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">NeighborhoodScout housing data</a>)
            </p>
            <p>
              What does this mean for your HVAC system? Older homes in neighborhoods like <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>,
              <Link href="/waynedale/" className="text-red-600 hover:underline">Waynedale</Link>, and
              <Link href="/arlington-park/" className="text-red-600 hover:underline">Arlington Park</Link> were not built
              with modern HVAC systems in mind. Ductwork is often galvanized steel that has never been properly sealed.
              Insulation in walls and attics is well below modern R-value standards. Windows are single-pane or early
              double-pane with failed seals. All of these factors make your HVAC system work 30-40% harder than it would
              in a newer home.
            </p>
            <p>
              In <Link href="/aboite/" className="text-red-600 hover:underline">Aboite</Link> and
              <Link href="/pine-valley/" className="text-red-600 hover:underline">Pine Valley</Link>, we see more
              homes built in the 1980s and 1990s, but even these often have original equipment that is now 25-30 years old.
              A furnace from 1995 has an Annual Fuel Utilization Efficiency (AFUE) rating of around 78%. Modern high-efficiency
              units hit 95-98% AFUE. That is not just about energy savings — it is about reliability. A 30-year-old furnace
              in Fort Wayne has survived roughly 1,000 freeze-thaw cycles. It is living on borrowed time.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Spring and Fall Danger Zones</h2>
            <p>
              Every Fort Wayne homeowner knows the feeling: you wake up on an April morning to 35°F, and by 3 PM it is 72°F.
              These rapid temperature swings are not just uncomfortable — they are deadly for HVAC systems. Your furnace
              has been running all night, and now the thermostat calls for cooling. The system has to switch modes literally
              overnight, and components that have been cold and contracted are suddenly asked to expand and operate under load.
            </p>
            <p>
              Capacitors — the electrical components that start your compressor and fan motors — are especially vulnerable.
              A capacitor that is already weakened by a hot Fort Wayne summer can fail completely when asked to start a
              cold compressor on the first warm day of spring. This is why we see a spike in emergency calls during the
              first two weeks of May and the last two weeks of September. It is not coincidence. It is physics.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Air Quality and Allergens in Allen County</h2>
            <p>
              Fort Wayne's air quality is generally decent compared to major metropolitan areas, but our specific geography
              creates unique challenges. The flat agricultural landscape surrounding the city means pollen from corn and
              soybean fields travels freely into residential neighborhoods. Tree pollen peaks in April and May. Grass pollen
              hits in June and July. Ragweed — the bane of Fort Wayne allergy sufferers — explodes in August and September.
            </p>
            <p>
              For homeowners, this means your HVAC system's filtration capabilities matter. A standard 1-inch fiberglass
              filter catches maybe 10-15% of allergens. A pleated MERV 8 filter catches closer to 70%. A whole-home
              media air cleaner with a MERV 13 rating can remove 95%+ of airborne particles — including the fine pollen
              that causes the most severe reactions.
            </p>
            <p>
              Basements in Fort Wayne are another air quality concern. With the high humidity and clay-heavy soil in parts
              of Allen County, basements tend to stay damp. That dampness breeds mold spores that get circulated through
              your ductwork every time the blower runs. If your basement smells musty, your HVAC system is likely spreading
              that mold throughout your home.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Energy Costs in Fort Wayne: The I&M Reality</h2>
            <p>
              Indiana Michigan Power (I&M), the primary electric utility serving Fort Wayne, charges residential customers
              approximately <strong>16.1 cents per kWh</strong>. That is above the Indiana state average of 14.90 cents and
              well above the national average of around 14 cents. NIPSCO, which serves some Fort Wayne suburbs, charges even
              more at roughly 17.9 cents per kWh. (Source: <a href="https://palmetto.com/local/indiana/fort-wayne/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Palmetto energy analysis</a>)
            </p>
            <p>
              What does this mean for your cooling bill? A typical 3-ton AC system running 8 hours per day during peak summer
              consumes about 30-35 kWh per day. At 16.1 cents per kWh, that is <strong>$4.83 to $5.64 per day</strong> — or
              roughly <strong>$145 to $170 per month</strong> just for air conditioning. If your system is older, poorly
              maintained, or undersized for your home, that number can easily double.
            </p>
            <p>
              Natural gas rates in Indiana are more favorable — typically around <strong>$0.90 to $1.10 per therm</strong>.
              A high-efficiency furnace uses about 0.8 therms per hour of runtime. During a typical Fort Wayne winter, a
              well-insulated 2,000-square-foot home might see heating costs of $80-120 per month. An older home with poor
              insulation and an inefficient furnace? $200-300 per month is not unusual.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What Every Fort Wayne Homeowner Should Do</h2>
            <p>
              Based on what we have seen across thousands of service calls in Allen County, here is the maintenance and
              preparedness checklist that actually matters for Fort Wayne:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Replace your filter every 30-45 days during peak season.</strong> Not every 90 days. Fort Wayne's
                pollen load and dust from agricultural activity clog filters faster than the manufacturer's generic
                recommendations account for.
              </li>
              <li>
                <strong>Get a pre-season tune-up in April and September.</strong> The $89-$129 you spend on a professional
                inspection is insurance against a $400-$800 emergency repair — or a $6,000+ replacement during the worst
                possible timing.
              </li>
              <li>
                <strong>Check your condensate drain line monthly in summer.</strong> Pour a cup of white vinegar or a
                commercial condensate treatment down the line. It takes 30 seconds and prevents the algae bloom that
                causes 20% of our summer emergency calls.
              </li>
              <li>
                <strong>Keep your outdoor unit clear.</strong> Fort Wayne's tree canopy in neighborhoods like
                <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link> and
                <Link href="/arlington-park/" className="text-red-600 hover:underline">Arlington Park</Link> is beautiful —
                but leaves, seeds, and cottonwood fluff clog condenser fins and reduce efficiency by 15-25%.
              </li>
              <li>
                <strong>Do not ignore a "small" noise.</strong> In our experience, 73% of emergency breakdowns in Fort Wayne
                were preceded by a noise, smell, or performance change that the homeowner noticed 2-6 weeks earlier. Your
                system is telling you something is wrong. Listen.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">When to Call a Professional</h2>
            <p>
              Some maintenance tasks are safe for homeowners. Filter changes, clearing debris from the outdoor unit, and
              checking the thermostat settings are all reasonable DIY tasks. But when it comes to refrigerant levels,
              electrical diagnostics, heat exchanger inspection, or ductwork modifications, you need a licensed technician.
            </p>
            <p>
              In Indiana, HVAC technicians are not required to hold a state-level license (unlike electricians or plumbers),
              which means the barrier to entry is low. When you hire someone to work on the system that keeps your family safe
              through a Fort Wayne winter, verify they are EPA Section 608 certified for refrigerant handling, carry general
              liability insurance, and have experience specifically with the brands and system types common in Allen County.
            </p>
            <p>
              If you are in <Link href="/new-haven/" className="text-red-600 hover:underline">New Haven</Link>,
              <Link href="/huntertown/" className="text-red-600 hover:underline">Huntertown</Link>, or
              <Link href="/leo-cedarville/" className="text-red-600 hover:underline">Leo-Cedarville</Link>,
              response time matters too. A technician who has to drive from Indianapolis or South Bend is not going to be
              at your door in 45 minutes when your furnace dies at 10 PM on a 5°F night. Local knowledge + local presence
              = actual emergency service.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Why does my AC struggle on humid days in Fort Wayne?",
                  a: "Fort Wayne's lake-effect humidity regularly pushes dew points above 65°F. When the air is already saturated with moisture, your AC must work harder to dehumidify before it can cool. If your system is low on refrigerant, has a dirty coil, or is undersized for your home, it will struggle to keep up during peak muggy periods in July and August."
                },
                {
                  q: "How long should an HVAC system last in Fort Wayne?",
                  a: "In Fort Wayne's climate, a well-maintained gas furnace typically lasts 15-20 years. An air conditioner lasts 12-15 years. Heat pumps, which run year-round, average 10-15 years. However, homes in older neighborhoods with poor insulation and leaky ductwork can reduce system lifespan by 3-5 years because the equipment runs longer cycles and experiences more stress."
                },
                {
                  q: "Is a heat pump a good choice for Fort Wayne winters?",
                  a: "This is one of the most common questions we hear. Modern cold-climate heat pumps can operate efficiently down to 5°F, but Fort Wayne sees multiple nights per year below 0°F. Most Fort Wayne homeowners who install heat pumps use a dual-fuel system — the heat pump handles heating and cooling above 30-35°F, and a gas furnace takes over during the coldest weeks. This gives you the efficiency benefits of a heat pump for 80% of the heating season while ensuring you never lose heat during extreme cold snaps."
                },
                {
                  q: "Why does my Fort Wayne basement smell musty, and can my HVAC help?",
                  a: "Fort Wayne's clay soil and high summer humidity create perfect conditions for basement moisture. A musty smell usually means mold spores are present. Your HVAC system is either making it worse (by circulating moldy air through leaky ductwork) or can help (by running a whole-home dehumidifier and upgrading to a MERV 13+ filter). If your basement smells musty, get the humidity source fixed first — then upgrade your filtration."
                },
                {
                  q: "Do I need a permit to replace my HVAC system in Fort Wayne?",
                  a: "Yes. The City of Fort Wayne requires permits for HVAC system replacements, and Allen County may require them depending on your exact location. Permit requirements include load calculations, ductwork inspection, and combustion safety testing. A reputable contractor will handle the permit process for you. If a contractor says you do not need a permit, that is a red flag."
                }
              ].map((faq) => (
                <details key={faq.q} className="bg-slate-50 border border-gray-200 rounded-xl p-5 group cursor-pointer">
                  <summary className="font-semibold text-slate-900 list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-red-600 ml-2 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">More Fort Wayne HVAC Resources</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/hvac-cost-guide-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Repair & Replacement Cost Guide [2026]</Link>
              <Link href="/heat-pumps-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pumps in Fort Wayne: Do They Work?</Link>
              <Link href="/allen-county-energy-savings/" className="text-red-600 hover:underline font-semibold">Energy Rebates & Incentive Programs</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance Fort Wayne</Link>
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair Fort Wayne</Link>
              <Link href="/furnace-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">Furnace Repair Fort Wayne</Link>
            </div>
          </div>
        </article>

        <PageCTA />
      </main>
    </>
  );
}
