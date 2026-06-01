import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Furnace Repair Fort Wayne | Emergency Heating Service in Allen County",
  description:
    "Fast furnace repair in Fort Wayne, IN. We fix igniters, heat exchangers, blower motors, and gas valves. Emergency heating service across Aboite, Waynedale, New Haven, and all of Allen County. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/furnace-repair-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Furnace Repair Fort Wayne", item: "https://hvacrepairfortwayne.com/furnace-repair-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Furnace Repair Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "Furnace Repair",
  description: "Emergency furnace repair across Fort Wayne and Allen County. Gas and electric furnace diagnostics and repair.",
};

export default function FurnaceRepairFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Emergency Heating Service</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Furnace Repair <span className="text-red-600 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              When your furnace fails on a 5°F Fort Wayne night, every minute matters. We repair gas furnaces, electric
              furnaces, and heat pumps — and we know the specific failure patterns that Allen County's freeze-thaw cycles cause.
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
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Why Fort Wayne Furnaces Fail</h2>
            <p>
              Fort Wayne's cold season lasts <strong>3.1 months</strong>, with January averaging a low of <strong>20°F</strong>{" "}
              and overnight temperatures routinely dipping below 10°F. The snowy period stretches <strong>4.3 months</strong>{" "}
              (November 24 to April 3). Your furnace does not just run — it fights. And after 15-20 years of that fight,
              components start to fail in predictable ways.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">1. Igniter and Flame Sensor Failure</h3>
            <p>
              The most common no-heat call in Fort Wayne is a failed igniter or dirty flame sensor. Hot surface igniters
              (the glow plugs that light the gas) crack from thermal cycling — heating to 2,500°F and cooling back down
              thousands of times per winter. Flame sensors get coated with carbon and oxidation, causing the furnace to
              light and then immediately shut off as a safety precaution.
            </p>
            <p>
              The repair is straightforward: replace the igniter ($180-$350) or clean/replace the flame sensor ($150-$250).
              A technician can diagnose this in 10 minutes and have heat restored within an hour.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">2. Blower Motor Failure</h3>
            <p>
              The blower motor circulates heated air through your ductwork. In Fort Wayne, it runs almost continuously from
              December through February. Older PSC (Permanent Split Capacitor) motors draw high current and generate heat,
              which degrades bearings and windings over time. ECM (Electronically Commutated Motor) motors are more efficient
              but have control modules that can fail.
            </p>
            <p>
              Symptoms of a failing blower motor include weak airflow from vents, loud rattling or squealing, and the furnace
              overheating and shutting down on high-limit. Replacement costs $450-$900 depending on motor type.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">3. Heat Exchanger Cracks</h3>
            <p>
              This is the most serious furnace failure. The heat exchanger is the metal chamber where combustion gases pass
              and transfer heat to the air. Over years of expansion and contraction from Fort Wayne's extreme temperature
              swings, metal fatigue can cause cracks. A cracked heat exchanger can leak carbon monoxide into your home's
              air supply — a potentially lethal situation.
            </p>
            <p>
              Any reputable technician will check the heat exchanger during a service call. If a crack is found, the furnace
              must be shut down immediately. Replacement of a heat exchanger costs $1,500-$3,500, but given the age of most
              furnaces with cracked exchangers, full replacement ($4,500-$7,500) is usually the smarter choice.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">4. Limit Switch and Rollout Switch Trips</h3>
            <p>
              When a furnace overheats — usually because of restricted airflow (dirty filter, blocked vents, failing blower)
              — the high-limit switch shuts it down as a safety measure. If the switch trips repeatedly, it can fail permanently.
              Rollout switches detect flames escaping the combustion chamber and shut down the furnace immediately.
            </p>
            <p>
              These are not the root problem; they are symptoms. A technician must identify why the furnace is overheating
              or why flames are rolling out. Simply resetting the switch without fixing the cause is dangerous.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Gas vs. Electric Furnaces in Fort Wayne</h2>
            <p>
              The vast majority of Fort Wayne homes heat with natural gas. Indiana has relatively low natural gas rates
              (roughly $0.90-$1.10 per therm), making gas heating economical. Electric resistance heating (baseboard heaters,
              electric furnaces) is 3-4x more expensive to operate in Fort Wayne because I&M's electricity rates are 16.1
              cents per kWh — well above the national average.
            </p>
            <p>
              If your home currently has electric resistance heat, replacing it with a heat pump or gas furnace (if gas is
              available) will typically cut your heating costs by 50-70%. Even a standard 14 SEER heat pump operates at an
              effective 250-300% efficiency compared to resistance heating.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What to Do Before You Call</h2>
            <p>
              If your furnace stops working, check these basics before calling. You might save yourself a service charge:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Check the thermostat:</strong> Is it set to "Heat"? Is the temperature set above the current room temp? Are the batteries dead?</li>
              <li><strong>Check the power:</strong> Is the furnace switch turned on? Has a breaker tripped?</li>
              <li><strong>Check the filter:</strong> A severely clogged filter can cause the high-limit switch to trip. If the filter is black with dust, replace it and reset the furnace.</li>
              <li><strong>Check the gas:</strong> If you have other gas appliances, are they working? If not, you may have a gas outage.</li>
              <li><strong>Check the vents:</strong> Are snow or debris blocking the exhaust vent or intake pipe? In Fort Wayne's heavy snows, blocked vents are a common cause of furnace shutdown.</li>
            </ul>
            <p>
              If you have checked all of the above and the furnace still will not start, call a professional. Do not attempt
              to disassemble a gas furnace yourself.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Our Furnace Repair Process</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Safety first:</strong> We check for gas leaks, carbon monoxide, and combustion issues before anything else.</li>
              <li><strong>Diagnostic:</strong> We test gas pressure, ignition sequence, flame signal, limit switches, blower operation, and temperature rise.</li>
              <li><strong>Written quote:</strong> You get an upfront price before any work begins. No surprises.</li>
              <li><strong>Repair:</strong> We stock common parts for the brands most prevalent in Fort Wayne (Carrier, Trane, Lennox, Goodman, Rheem, Bryant).</li>
              <li><strong>Combustion test:</strong> After any repair involving gas or airflow, we verify safe combustion with a digital analyzer.</li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">When to Replace Instead of Repair</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Age over 15 years:</strong> A furnace's average lifespan in Fort Wayne is 15-20 years. At 15+ years,
                replacement parts become harder to find and major repairs are money you will not recover.
              </li>
              <li>
                <strong>AFUE below 80%:</strong> An old furnace with 78% AFUE wastes 22% of the gas you pay for. A modern
                96% AFUE furnace cuts that waste by 75%. In a typical Fort Wayne winter, the energy savings alone can pay
                for the upgrade over 8-12 years.
              </li>
              <li>
                <strong>Multiple recent repairs:</strong> If you have spent $1,500+ on repairs in the last two years, that money
                would have been better invested in a new, reliable system.
              </li>
              <li>
                <strong>Heat exchanger crack:</strong> For safety reasons, a cracked heat exchanger is almost always a
                replacement trigger. Do not let anyone talk you into patching it.
              </li>
            </ul>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance</Link>
              <Link href="/emergency-hvac-fort-wayne/" className="text-red-600 hover:underline font-semibold">Emergency HVAC</Link>
              <Link href="/heat-pump-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pump Installation</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Furnace Not Working?"
          subtitle="Emergency furnace repair across Fort Wayne and Allen County. Call now for fast, safe heating restoration."
        />
      </main>
    </>
  );
}
