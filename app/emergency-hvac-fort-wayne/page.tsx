import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Emergency HVAC Service Fort Wayne | 24/7 AC & Furnace Repair in Allen County",
  description:
    "24/7 emergency HVAC repair in Fort Wayne, IN. No heat in winter? No AC in summer? We dispatch fast across Allen County. Call (260) 786-9284 anytime.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/emergency-hvac-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Emergency HVAC Fort Wayne", item: "https://hvacrepairfortwayne.com/emergency-hvac-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency HVAC Service Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "Emergency HVAC Repair",
  description: "24/7 emergency HVAC repair across Fort Wayne and Allen County. Fast dispatch for no-heat and no-cooling emergencies.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What counts as an HVAC emergency in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "True emergencies include: no heat when outdoor temps are below 20°F (especially dangerous for elderly or infants), carbon monoxide alarm activation (evacuate and call 911), gas smell (evacuate, call gas company), no AC when temps exceed 90°F, and electrical burning smell from HVAC equipment (fire risk). AC blowing warm on a 75°F day or a furnace cycling rapidly while maintaining some heat are urgent but not life-threatening."
      }
    },
    {
      "@type": "Question",
      "name": "How much does emergency HVAC repair cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emergency service calls between 6 PM and 7 AM, and on weekends/holidays, carry a premium of $150-$300 over standard rates. After-hours diagnostic visits range from $250-$400. Common after-hours repairs: igniter replacement $350-$550, capacitor $250-$400, blower motor $650-$1,200. We tell you the price before we dispatch — no surprises."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you arrive for an emergency in Allen County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our average dispatch-to-arrival time in Allen County is 45-90 minutes during business hours and 60-120 minutes for after-hours emergencies. We dispatch from local technicians — not out-of-town subcontractors who take 3+ hours. Response to central Fort Wayne neighborhoods like Forest Park and Arlington Park is typically fastest at 20-45 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do while waiting for emergency HVAC service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For no heat in winter: close off unused rooms, use space heaters safely (3+ feet from anything flammable, no extension cords), open cabinet doors under sinks, and let faucets drip to prevent freezing. For no AC in summer: close blinds, use fans, avoid oven use, and wet towels on your neck/wrists help. For water leaks: turn off the AC at the breaker and place buckets. For gas smell: evacuate, do not use light switches or phones inside, and call the gas company first."
      }
    }
  ]
};

export default function EmergencyHVACFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        <section className="bg-red-600 py-16 md:py-24 border-b border-red-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-200 font-black uppercase tracking-[0.3em] text-[10px]">Available 24/7</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tighter uppercase leading-tight">
              Emergency HVAC <span className="text-slate-900 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-red-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              When your furnace dies at 2 AM on a 5°F night, or your AC quits during a 90°F July heatwave, you do not need
              a voicemail. You need a technician. We answer our phones and dispatch across Allen County — day, night,
              weekends, and holidays.
            </p>
            <div className="mt-8">
              <a href={`tel:+12607869284`} className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-black uppercase shadow-xl hover:bg-slate-900 hover:text-white transition-all inline-block">
                Call {PHONE} Now
              </a>
            </div>
            <p className="mt-4 text-sm text-red-200">Average dispatch-to-arrival: 45-90 minutes in Allen County</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">What Counts as an HVAC Emergency?</h2>
            <p>
              Not every after-hours call is a true emergency. We prioritize calls based on safety risk and health impact.
              Here is how we triage emergency requests in Fort Wayne:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Critical (Dispatch Immediately)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No heat with outdoor temps below 20°F:</strong> Especially dangerous for elderly residents, infants, or anyone with health conditions. Pipes can freeze within hours.</li>
              <li><strong>Carbon monoxide alarm activation:</strong> If your CO detector goes off, evacuate immediately and call 911, then call us. We will inspect before you re-enter.</li>
              <li><strong>Gas smell:</strong> Evacuate, call the gas company, then call us. Do not attempt to locate the leak yourself.</li>
              <li><strong>No AC with outdoor temps above 90°F:</strong> Dangerous for elderly, infants, and people with respiratory or cardiovascular conditions.</li>
              <li><strong>Electrical burning smell from HVAC equipment:</strong> Fire risk. Shut off the system at the breaker and call immediately.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Urgent (Same-Day Service, May Be Next Morning)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>AC blowing warm air on a moderately hot day (under 85°F)</li>
              <li>Furnace cycling on and off rapidly but maintaining some heat</li>
              <li>Loud unusual noises that do not stop the system from operating</li>
              <li>Water leak from the indoor unit that is contained (bucket under the leak)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Non-Urgent (Next Available Business Appointment)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minor temperature inconsistency between rooms</li>
              <li>Slightly higher-than-normal energy bill</li>
              <li>Filter replacement reminder</li>
              <li>Annual maintenance scheduling</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What "24/7" Actually Means in Fort Wayne</h2>
            <p>
              We are transparent about how emergency service works. When you call after hours:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>A real person answers.</strong> Not a call center in another time zone. You will speak with someone
                who knows Fort Wayne's neighborhoods and can assess whether your situation is a true emergency.
              </li>
              <li>
                <strong>We dispatch from our local technicians.</strong> Our service area is Allen County and immediate
                surrounding areas. We do not subcontract to out-of-town companies who may take 3+ hours to arrive.
              </li>
              <li>
                <strong>After-hours rates apply.</strong> Emergency service calls between 6 PM and 7 AM, and on weekends and
                holidays, carry a premium of $150-$300 over standard rates. This is standard across the industry and reflects
                the cost of keeping technicians on call. We tell you the price before we dispatch.
              </li>
              <li>
                <strong>We stock parts for common failures.</strong> Our emergency vehicles carry capacitors, igniters,
                contactors, fuses, and other high-failure components. If your system needs a part we do not stock, we will
                tell you honestly and provide temporary heating or cooling solutions if possible.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fort Wayne's Worst HVAC Emergencies (And How to Prevent Them)</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">The January Furnace Failure</h3>
            <p>
              At 2 AM on a 0°F night, your furnace stops. The house drops to 50°F within 4 hours. Pipes in exterior walls
              freeze. The repair cost is $250 for an igniter — but the water damage from burst pipes is $5,000+.
            </p>
            <p>
              <strong>Prevention:</strong> Fall furnace maintenance. We test the igniter, flame sensor, and limit switches before
              winter. A $129 tune-up prevents a $5,000 disaster.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">The August AC Compressor Burnout</h3>
            <p>
              After three weeks of 85°F+ days with 75%+ humidity, your AC compressor overheats and seizes. The house
              becomes unlivable. Replacement costs $2,500-$3,500. You spend two nights in a hotel.
            </p>
            <p>
              <strong>Prevention:</strong> Spring AC maintenance. We check refrigerant levels, electrical components, and
              condenser cleanliness. Low refrigerant is the #1 cause of compressor failure, and it is detectable weeks in
              advance.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">The Condensate Flood</h3>
            <p>
              Your AC's drain line clogs. The drain pan overflows. Water runs through the ceiling of the room below, destroying
              drywall, insulation, and flooring. The HVAC repair is $200. The water damage repair is $2,000-$5,000.
            </p>
            <p>
              <strong>Prevention:</strong> Pour a cup of white vinegar down the condensate drain line monthly during summer.
              It takes 30 seconds. During maintenance, we install a float switch that shuts down the AC if the drain pan
              fills — an $80 part that prevents thousands in damage.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What to Do While You Wait</h2>
            <p>
              If you have called for emergency service and are waiting for a technician, here is how to protect your home and
              family:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No heat in winter:</strong> Close off unused rooms. Use space heaters safely (3+ feet from anything flammable, never on extension cords, never unattended). Open cabinet doors under sinks to let warm air reach pipes. Let faucets drip to prevent freezing.</li>
              <li><strong>No AC in summer:</strong> Close blinds and curtains. Use fans to create airflow. Avoid using ovens or stoves. Wet towels on your neck and wrists help with evaporative cooling. Check on elderly neighbors.</li>
              <li><strong>Water leak:</strong> Turn off the AC at the thermostat and breaker. Place buckets. If the ceiling is bulging, poke a small hole to release water and prevent the drywall from collapsing.</li>
              <li><strong>Gas smell:</strong> Do not use light switches, phones, or anything that could spark inside the house. Evacuate to a safe distance. Call the gas company first.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service Areas</h2>
            <p>
              Emergency service available throughout Fort Wayne and Allen County, including{" "}
              <Link href="/aboite/" className="text-red-600 hover:underline">Aboite</Link>,{" "}
              <Link href="/waynedale/" className="text-red-600 hover:underline">Waynedale</Link>,{" "}
              <Link href="/pine-valley/" className="text-red-600 hover:underline">Pine Valley</Link>,{" "}
              <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>,{" "}
              <Link href="/arlington-park/" className="text-red-600 hover:underline">Arlington Park</Link>,{" "}
              <Link href="/new-haven/" className="text-red-600 hover:underline">New Haven</Link>,{" "}
              <Link href="/huntertown/" className="text-red-600 hover:underline">Huntertown</Link>,{" "}
              <Link href="/leo-cedarville/" className="text-red-600 hover:underline">Leo-Cedarville</Link>,{" "}
              <Link href="/grabill/" className="text-red-600 hover:underline">Grabill</Link>,{" "}
              <Link href="/hoagland/" className="text-red-600 hover:underline">Hoagland</Link>,{" "}
              <Link href="/monroeville/" className="text-red-600 hover:underline">Monroeville</Link>, and{" "}
              <Link href="/woodburn/" className="text-red-600 hover:underline">Woodburn</Link>.
            </p>
          </div>

          {/* Tool CTAs */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Not Sure If This Is an Emergency?</h3>
            <p className="text-slate-600 mb-6">Pick your symptom and get the severity rating, typical repair cost, and whether you need same-day service.</p>
            <Link href="/hvac-symptom-checker" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Use the Symptom Checker →
            </Link>
          </div>

          <div className="mt-8 bg-red-50 rounded-2xl border border-red-100 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Worried About Replacement Costs?</h3>
            <p className="text-slate-600 mb-6">Get an instant Fort Wayne-specific price range. No email required.</p>
            <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Cost Estimator →
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">Emergency HVAC FAQ</h2>
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
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance</Link>
              <Link href="/ac-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Installation</Link>
              <Link href="/ac-repair-cost-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair Costs Fort Wayne</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="HVAC Emergency?"
          subtitle="We are standing by. Call now for immediate dispatch anywhere in Allen County."
        />
      </main>
    </>
  );
}
