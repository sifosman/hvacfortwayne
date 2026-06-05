import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "AC Repair Fort Wayne | Same-Day Air Conditioning Service in Allen County",
  description:
    "Fast, reliable AC repair in Fort Wayne, IN. We fix compressors, refrigerant leaks, frozen coils, and electrical issues. Same-day service across Aboite, Waynedale, New Haven, and all of Allen County. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/ac-repair-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "AC Repair Fort Wayne", item: "https://hvacrepairfortwayne.com/ac-repair-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "Air Conditioning Repair",
  description: "Same-day AC repair service across Fort Wayne and Allen County. Compressors, leaks, coils, electrical diagnostics.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is my AC running but not cooling my Fort Wayne home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Fort Wayne, the most common causes are frozen evaporator coils (from restricted airflow or low refrigerant), clogged condensate drains, or a failed capacitor. Heavy summer humidity makes all of these worse. If your AC is blowing warm air, turn it off and check your filter first. If the filter is clean and the problem persists, you likely need a technician to test refrigerant levels and electrical components."
      }
    },
    {
      "@type": "Question",
      "name": "How much does AC repair cost in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common AC repairs in Fort Wayne range from $150-$350 for capacitors and contactors, $120-$250 for clogged drain lines, $280-$650 for blower motor issues, and $1,200-$1,800 for refrigerant leaks. Compressor replacement costs $2,500-$3,500. We provide upfront written quotes before any work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can I replace just the outside AC unit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technically yes, but it is usually not recommended. The outdoor condenser and indoor evaporator coil are designed as a matched system. Replacing only the outdoor unit with a newer high-SEER model while keeping an old indoor coil reduces efficiency by 20-30% and may void the manufacturer's warranty. In most cases, replacing both together is the smarter long-term investment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you handle an AC repair in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During business hours, our average dispatch-to-arrival time in Allen County is 45-90 minutes. Emergency after-hours service is available with premium rates. We stock common parts for Carrier, Trane, Lennox, Goodman, and Rheem systems, so most same-day repairs are completed within 2 hours of arrival."
      }
    }
  ]
};

export default function ACRepairFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Same-Day Service</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              AC Repair <span className="text-red-600 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              When the Indiana humidity hits and your AC quits, you need a technician who knows Fort Wayne's climate — not a
              dispatch center in another state. We repair all brands and fix the problems that Fort Wayne's lake-effect
              humidity causes: frozen coils, clogged drains, burnt capacitors, and refrigerant leaks.
            </p>
            <div className="mt-8">
              <a href={`tel:+12607869284`} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-black uppercase shadow-xl hover:bg-slate-900 transition-all inline-block">
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Common AC Problems in Fort Wayne's Climate</h2>
            <p>
              Fort Wayne's summer humidity is not just uncomfortable — it is destructive to air conditioning systems. The
              muggy period lasts <strong>3.7 months</strong> (May 31 to September 19), with July delivering <strong>11.7 days</strong>{" "}
              classified as oppressively humid. That sustained moisture load creates specific failure patterns we see
              repeatedly across Allen County:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">1. Frozen Evaporator Coils</h3>
            <p>
              The most common summer emergency call in Fort Wayne is an AC unit blowing warm air with visible ice on the
              refrigerant lines. This happens when airflow is restricted — usually by a clogged filter, dirty coil, or
              failing blower motor — and the evaporator temperature drops below freezing. The condensed humidity on the
              coil turns to ice, which blocks airflow entirely. Left running, ice can crack the coil, turning a $200
              repair into a $2,500 replacement.
            </p>
            <p>
              In older Fort Wayne neighborhoods like <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>{" "}
              and <Link href="/arlington-park/" className="text-red-600 hover:underline">Arlington Park</Link>, where homes
              often have undersized returns or galvanized ductwork with 40+ years of debris buildup, restricted airflow is
              especially common.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">2. Clogged Condensate Drain Lines</h3>
            <p>
              A Fort Wayne AC unit running full-blast in July produces 5-10 gallons of condensate per day. That water exits
              through a small PVC drain line — a line that is also the perfect environment for algae, mold, and sludge.
              When the line clogs, water backs up into the drain pan. If the pan overflows (or has a rust hole, common in
              older units), water damages ceilings, walls, and flooring.
            </p>
            <p>
              The fix is usually simple: a technician clears the line with a wet/dry vacuum or nitrogen blow, then treats
              it with an anti-algae solution. The cost is $150-$250. The water damage from ignoring it? $1,000-$5,000.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">3. Capacitor and Contactor Failure</h3>
            <p>
              Capacitors are the electrical components that provide the initial jolt of power to start your compressor and
              fan motors. In Fort Wayne's climate, they work overtime: starting a hot compressor against high head pressure,
              cycling on and off constantly as the thermostat struggles against humidity, and dealing with voltage fluctuations
              from I&M's grid during peak demand.
            </p>
            <p>
              A failed capacitor is a $150-$350 repair. But the symptoms — humming outdoor unit, fan not spinning, compressor
              trying to start and failing — are often mistaken by homeowners for a "broken" system that needs replacement.
              A quick electrical diagnostic from a technician saves you from an unnecessary $6,000+ quote.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">4. Refrigerant Leaks</h3>
            <p>
              Refrigerant does not get "used up." If your AC is low on refrigerant, it has a leak. In Fort Wayne, the most
              common leak points are the evaporator coil (corroded by acidic condensate), the suction line (vibration wear
              at the outdoor unit connection), and the Schrader valves (worn seals).
            </p>
            <p>
              If your system uses R-22 (Freon), a recharge is now economically irrational. R-22 costs $100+ per pound, and
              a 3-ton system holds 6-10 pounds. A full recharge plus leak repair can cost $1,200-$1,800 — for a system that
              is probably 15+ years old and will need replacement soon anyway. In these cases, we recommend putting that
              money toward a new R-410A or R-454B system.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Our AC Repair Process</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Diagnostic:</strong> We test pressures, temperatures, electrical components, and airflow. We do not
                guess — we measure. A proper diagnostic takes 30-60 minutes and tells us exactly what is wrong.
              </li>
              <li>
                <strong>Upfront Pricing:</strong> Before we start any repair, we give you a written quote. No surprises, no
                hidden fees. If the repair does not make financial sense, we will tell you honestly.
              </li>
              <li>
                <strong>Repair:</strong> We stock common parts for the brands most popular in Fort Wayne (Carrier, Trane,
                Lennox, Goodman, Rheem). Most same-day repairs are completed within 2 hours of arrival.
              </li>
              <li>
                <strong>Testing:</strong> After the repair, we run the system through a full cycle, check temperatures at
                supply and return vents, and verify proper drainage. We do not leave until we are confident the fix is solid.
              </li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">When to Repair vs. Replace Your AC</h2>
            <p>
              The industry rule of thumb: if the repair costs more than 40-50% of a new system, replace. But in Fort Wayne,
              there are additional factors:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Age + Efficiency:</strong> A 12-year-old 13 SEER unit in Fort Wayne's climate is past its prime
                and inefficient. Even a "cheap" $500 repair is money you will not get back in performance or longevity.
              </li>
              <li>
                <strong>Refrigerant type:</strong> If your system uses R-22, replacement is almost always the smarter financial
                decision. Do not let a contractor talk you into a "recharge and hope for the best" approach.
              </li>
              <li>
                <strong>Repair history:</strong> If this is your third repair call in two years, the system is telling you
                something. Cumulative repair costs often exceed replacement cost without giving you a reliable system.
              </li>
              <li>
                <strong>Home comfort:</strong> If your AC runs constantly but cannot get the house below 75°F on humid days,
                the problem may be undersizing, poor ductwork, or insulation — not the AC itself. A new unit will not fix
                those underlying issues.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service Areas</h2>
            <p>
              We provide same-day AC repair throughout Fort Wayne and Allen County, including{" "}
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
            <p>
              Response time varies by distance and call volume, but our average dispatch-to-arrival time in Allen County
              is <strong>45-90 minutes</strong> for emergency calls during business hours.
            </p>
          </div>

          {/* Tool CTAs */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Thinking About Replacing Instead of Repairing?</h3>
            <p className="text-slate-600 mb-6">Get an instant Fort Wayne-specific price range for AC replacement. No email required.</p>
            <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Cost Estimator →
            </Link>
          </div>

          <div className="mt-8 bg-red-50 rounded-2xl border border-red-100 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">AC Blowing Warm Air or Making Noise?</h3>
            <p className="text-slate-600 mb-6">Pick your symptom and get the likely cause, typical repair cost, and whether you need same-day service.</p>
            <Link href="/hvac-symptom-checker" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Use the Symptom Checker →
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-8 text-center">AC Repair FAQ</h2>
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
              <Link href="/ac-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Installation / Replacement</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance</Link>
              <Link href="/emergency-hvac-fort-wayne/" className="text-red-600 hover:underline font-semibold">Emergency HVAC Service</Link>
              <Link href="/indoor-air-quality-fort-wayne/" className="text-red-600 hover:underline font-semibold">Indoor Air Quality</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="AC Not Cooling?"
          subtitle="Same-day AC repair across Fort Wayne and Allen County. Call now for fast, honest service."
        />
      </main>
    </>
  );
}
