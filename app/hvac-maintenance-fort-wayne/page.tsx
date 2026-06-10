import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Maintenance Fort Wayne | Seasonal Tune-Ups for Allen County Homes",
  description:
    "Professional HVAC maintenance in Fort Wayne, IN. Spring AC tune-ups and fall furnace inspections tailored to Allen County's climate. Prevent breakdowns and lower energy bills. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/hvac-maintenance-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "HVAC Maintenance Fort Wayne", item: "https://hvacrepairfortwayne.com/hvac-maintenance-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Maintenance Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "HVAC Maintenance",
  description: "Seasonal HVAC tune-ups for Fort Wayne homes. Spring AC and fall furnace maintenance with Fort Wayne-specific checks.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I change my HVAC filter in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Fort Wayne, change your filter every 30-60 days during peak heating and cooling seasons. Allen County's agricultural dust (especially during planting and harvest) clogs filters faster than urban areas. If you have pets, allergies, or live near rural areas like Grabill or Leo-Cedarville, check monthly. A clogged filter is the #1 preventable cause of AC and furnace failure."
      }
    },
    {
      "@type": "Question",
      "name": "What does a professional HVAC tune-up include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our spring AC tune-up includes refrigerant pressure testing, condenser coil cleaning, evaporator coil inspection, condensate drain flush, electrical component testing, blower motor inspection, thermostat calibration, and ductwork visual inspection. Our fall furnace tune-up includes heat exchanger inspection with borescope, igniter and flame sensor testing, gas pressure and combustion analysis, safety switch verification, venting inspection, and carbon monoxide testing. Each takes 60-90 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "When should I schedule AC and furnace maintenance in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schedule AC maintenance in April, before the first 80°F day. Schedule furnace maintenance in September-October, before the first freeze (typically mid-October in Fort Wayne). By mid-May and mid-October, appointment availability shrinks and emergency rates kick in for breakdowns. Priority scheduling for maintenance agreement holders means you get the first available slots."
      }
    },
    {
      "@type": "Question",
      "name": "How much does HVAC maintenance cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single system tune-up (AC or furnace) costs $89-$129. A full system tune-up (both AC and furnace) costs $149-$229. Our Annual Maintenance Agreement at $199-$279/year includes two tune-ups, a 15% repair discount, and priority scheduling. The agreement pays for itself with just one repair discount."
      }
    }
  ]
};

export default function HVACMaintenanceFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Preventative Care</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              HVAC Maintenance <span className="text-red-600 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Fort Wayne's extreme seasonal shifts — from 83°F humid summers to 20°F winters — make HVAC maintenance not
              optional. It is survival. Our seasonal tune-ups are designed specifically for Allen County's climate and
              housing stock.
            </p>
            <div className="mt-8">
              <a href={`tel:+12607869284`} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-black uppercase shadow-xl hover:bg-slate-900 transition-all inline-block">
                Schedule Maintenance {PHONE}
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Why Maintenance Matters More in Fort Wayne</h2>
            <p>
              The average Fort Wayne HVAC system runs the equivalent of a car driving 100,000 miles per year. The compressor
              cycles on and off 5,000+ times annually. The blower motor runs 2,000+ hours. And because of our rapid spring and
              fall temperature swings, components that have been cold all winter are suddenly asked to operate at full capacity
              in May — often without any pre-season check.
            </p>
            <p>
              Homeowners who get twice-yearly professional maintenance spend <strong>40-60% less on repairs</strong> over a
              10-year period compared to those who wait for breakdowns. The $180-$250 you spend on two tune-ups per year
              prevents $1,000+ in emergency repairs — and often avoids a total system replacement that comes at the worst
              possible time.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Spring AC Tune-Up (April-May)</h2>
            <p>
              Timing matters. Scheduling your AC tune-up in April, before the first 80°F day, ensures your system is ready
              for Fort Wayne's 3.7-month muggy season. Here is what our spring maintenance includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Refrigerant pressure and level check:</strong> Low refrigerant is the #1 cause of poor cooling and compressor damage. We measure superheat and subcooling to verify proper charge.</li>
              <li><strong>Condenser coil cleaning:</strong> Dirt, cottonwood seeds, and agricultural dust reduce efficiency by 15-25%. We chemically clean the coils to restore heat transfer.</li>
              <li><strong>Evaporator coil inspection:</strong> We check for mold, algae, and restricted airflow. In Fort Wayne's humidity, evaporator coils are a prime breeding ground for microbial growth.</li>
              <li><strong>Condensate drain line flush and treatment:</strong> We clear the line and add an anti-algae treatment. This prevents the clogged-drain emergency calls that spike in July.</li>
              <li><strong>Electrical component testing:</strong> Capacitors, contactors, and wiring are tested under load. We identify weakened components before they fail on the hottest day of summer.</li>
              <li><strong>Blower motor and wheel inspection:</strong> We check amp draw, bearing condition, and wheel balance. A failing blower motor in August is an emergency; in April, it is a scheduled repair.</li>
              <li><strong>Thermostat calibration and programming:</strong> We verify the thermostat reads accurately and program efficient schedules for Fort Wayne's variable spring weather.</li>
              <li><strong>Ductwork visual inspection:</strong> We look for disconnected runs, collapsed flex duct, and major leaks — especially common in pre-1970 Fort Wayne homes.</li>
              <li><strong>Filter replacement and recommendation:</strong> We install a new filter and recommend the right MERV rating for your home's allergen load and system capacity.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fall Furnace Inspection (September-October)</h2>
            <p>
              The first freeze in Fort Wayne typically arrives in mid-October. By late September, your furnace needs to be
              ready. Our fall maintenance includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Heat exchanger inspection:</strong> We visually inspect for cracks, rust, and corrosion with a borescope camera. A cracked heat exchanger is a carbon monoxide hazard — and non-negotiable.</li>
              <li><strong>Igniter and flame sensor testing:</strong> We measure ignition time, flame signal strength, and sensor cleanliness. Weak readings predict failure before it happens.</li>
              <li><strong>Gas pressure and combustion analysis:</strong> We verify the manifold pressure is within manufacturer specs and perform a combustion test with a digital analyzer. Safe, efficient burning is the goal.</li>
              <li><strong>Blower motor and capacitor testing:</strong> Same as spring — we check under load and look for wear patterns.</li>
              <li><strong>Limit switch and safety control testing:</strong> We verify all safety switches operate at the correct temperatures. A failed high-limit switch can allow dangerous overheating.</li>
              <li><strong>Venting and intake inspection:</strong> We check for blockages, corrosion, and proper slope. In Fort Wayne's snowy winters, blocked vents are a common and dangerous problem.</li>
              <li><strong>Filter replacement and ductwork check:</strong> Same as spring, with extra attention to any summer dust accumulation in return ducts.</li>
              <li><strong>Carbon monoxide test:</strong> We test ambient CO levels near the furnace and in the living space. Zero tolerance for CO.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fort Wayne-Specific Maintenance Concerns</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Agricultural Dust and Pollen</h3>
            <p>
              Surrounded by corn and soybean fields, Fort Wayne gets more airborne particulate than most Indiana cities.
              During planting and harvest seasons (April-May and September-October), dust levels spike. Outdoor condenser
              units in rural-adjacent areas like <Link href="/grabill/" className="text-red-600 hover:underline">Grabill</Link>{" "}
              and <Link href="/leo-cedarville/" className="text-red-600 hover:underline">Leo-Cedarville</Link> can accumulate
              a visible layer of dust in just two weeks. More frequent filter changes and coil cleanings are necessary.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Hard Water and Scale</h3>
            <p>
              Allen County has moderately hard water. While this primarily affects plumbing, it also impacts humidifier pads
              and any steam-based indoor air quality equipment attached to your HVAC system. Scale buildup reduces humidifier
              efficiency and can harbor bacteria.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Basement Humidity and Mold</h3>
            <p>
              Fort Wayne's clay-heavy soil and high water table mean basements stay damp. Damp basements breed mold, and mold
              spores circulate through your ductwork. During maintenance, we inspect the return air path for mold indicators
              and recommend dehumidification solutions if needed.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Maintenance Plan Pricing</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Plan</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Includes</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Single System Tune-Up</td>
                    <td className="px-4 py-3">One AC or furnace tune-up; filter included</td>
                    <td className="px-4 py-3">$89 – $129</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Full System Tune-Up</td>
                    <td className="px-4 py-3">Both AC and furnace; filters included</td>
                    <td className="px-4 py-3">$149 – $229</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Annual Maintenance Agreement</td>
                    <td className="px-4 py-3">Two tune-ups per year; 15% repair discount; priority scheduling</td>
                    <td className="px-4 py-3">$199 – $279/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The Annual Maintenance Agreement pays for itself with just one repair discount. More importantly, priority
              scheduling means you get the first available appointment slots in April and September — before the rush.
            </p>
          </div>

          {/* Tool CTAs */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Wondering If Your System Is Worth Maintaining?</h3>
            <p className="text-slate-600 mb-6">Get an honest repair-or-replace recommendation based on your system's age and condition. No email required.</p>
            <Link href="/repair-or-replace-tool" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Decision Tool →
            </Link>
          </div>

          <div className="mt-8 bg-red-50 rounded-2xl border border-red-100 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Something Not Working Right?</h3>
            <p className="text-slate-600 mb-6">Pick your symptom and get the likely cause, typical repair cost, and whether you need same-day service.</p>
            <Link href="/hvac-symptom-checker" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Use the Symptom Checker →
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">HVAC Maintenance FAQ</h2>
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

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair</Link>
              <Link href="/furnace-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">Furnace Repair</Link>
              <Link href="/emergency-hvac-fort-wayne/" className="text-red-600 hover:underline font-semibold">Emergency HVAC</Link>
              <Link href="/indoor-air-quality-fort-wayne/" className="text-red-600 hover:underline font-semibold">Indoor Air Quality</Link>
              <Link href="/hvac-maintenance-cost-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance Costs</Link>
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
