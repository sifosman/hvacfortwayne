import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Emergency Furnace Repair on Christmas: What It Costs in Fort Wayne",
  description:
    "Furnace died on Christmas Day in Fort Wayne? Here is what emergency HVAC repair costs on holidays, what you can check yourself, and how to stay safe while you wait.",
  keywords:
    "emergency furnace repair christmas fort wayne, holiday hvac repair cost allen county, furnace broke christmas day indiana, 24 7 hvac repair fort wayne",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/emergency-furnace-repair-christmas-fort-wayne/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Emergency Furnace Repair on Christmas: What It Costs in Fort Wayne",
  description: "Holiday HVAC emergency costs, DIY safety checks, and how to stay warm while waiting for a technician in Fort Wayne.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-12-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hvacrepairfortwayne.com/blog/emergency-furnace-repair-christmas-fort-wayne/" },
};

export default function ChristmasEmergencyRepair() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-red-600 py-16 md:py-24 border-b border-red-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-200 font-black uppercase tracking-[0.3em] text-[10px]">Holiday Emergency Guide</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter uppercase leading-tight">
              Emergency Furnace Repair <span className="text-slate-900 italic">on Christmas</span>
            </h1>
            <p className="text-lg text-red-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              It is 10 PM on Christmas Eve. The house is 52°F and dropping. Your furnace just quit. Here is exactly what to do, what it will cost, and how to keep your family safe while you wait.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-xl font-medium text-slate-800 leading-relaxed bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <strong>First, the safety rule:</strong> If you smell gas or your CO detector is alarming, evacuate immediately and call 911. Do not try to fix it yourself. Carbon monoxide is odorless, colorless, and lethal.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What to Check Before You Call (2 Minutes)</h2>
            <p>
              These checks take under two minutes and can save you a $200+ holiday service call:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Thermostat:</strong> Is it set to "Heat"? Is the temperature above room temp? Are the batteries dead? (Dead thermostat batteries are the #1 "emergency" call on Christmas.)</li>
              <li><strong>Furnace switch:</strong> Look for a light switch on or near the furnace. Was it accidentally turned off?</li>
              <li><strong>Breaker panel:</strong> Has the furnace breaker tripped? Reset it once. If it trips again, leave it off and call a technician.</li>
              <li><strong>Filter:</strong> Is the filter completely clogged? A black filter can trip the high-limit switch. Replace it and try again.</li>
              <li><strong>Vents outside:</strong> Are snow or ice blocking the exhaust vent or intake pipe? Fort Wayne's Christmas snows routinely block vents.</li>
              <li><strong>Gas:</strong> Are other gas appliances working? If not, you may have a gas outage, not a furnace problem.</li>
            </ol>
            <p>
              If none of these resolve the issue, you need a technician. <Link href="/hvac-symptom-checker" className="text-red-600 hover:underline font-semibold">Use our Symptom Checker</Link> to confirm the severity and typical repair cost.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What Emergency HVAC Repair Costs on Holidays</h2>
            <p>
              Fort Wayne HVAC companies charge premium rates for after-hours, weekend, and holiday service. Here is the reality:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Service</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Standard Rate</th>
                    <th className="text-left px-4 py-3 font-bold uppercase tracking-wider">Holiday/After-Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Service Call + Diagnostic</td>
                    <td className="px-4 py-3">$89 – $129</td>
                    <td className="px-4 py-3">$250 – $400</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Igniter Replacement</td>
                    <td className="px-4 py-3">$180 – $350</td>
                    <td className="px-4 py-3">$350 – $550</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Flame Sensor Clean/Replace</td>
                    <td className="px-4 py-3">$150 – $250</td>
                    <td className="px-4 py-3">$300 – $450</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold">Blower Motor Replacement</td>
                    <td className="px-4 py-3">$450 – $900</td>
                    <td className="px-4 py-3">$650 – $1,200</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold">Heat Exchanger Crack (Replace Furnace)</td>
                    <td className="px-4 py-3">$4,500 – $7,500</td>
                    <td className="px-4 py-3">Same — no premium on install</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Why the premium?</strong> Technicians on Christmas are working instead of being with their families. The company pays overtime or holiday pay. Parts suppliers charge extra for emergency delivery. This is standard across every skilled trade — plumbers, electricians, and locksmiths charge similarly.
            </p>
            <p>
              We are transparent about pricing. When you call, we tell you the after-hours rate before we dispatch. No surprises.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Stay Warm While You Wait</h2>
            <p>
              Fort Wayne's December nights routinely drop to 10-20°F. A house without heat can fall below 40°F within 6-8 hours. Here is how to protect your family and your home:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Immediate Actions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Close off unused rooms:</strong> Shut doors to bedrooms, bathrooms, and closets. Concentrate heat in the rooms you are using.</li>
              <li><strong>Layer clothing:</strong> Multiple thin layers trap heat better than one thick layer. Wear a hat — you lose 30% of body heat through your head.</li>
              <li><strong>Use space heaters safely:</strong> Keep them 3+ feet from anything flammable. Never use extension cords. Never leave unattended. Place on a hard, level surface.</li>
              <li><strong>Let faucets drip:</strong> Moving water is less likely to freeze. Open cabinet doors under sinks to let warm room air reach pipes.</li>
              <li><strong>Close curtains and blinds:</strong> They provide an extra layer of insulation. If the sun is shining, open south-facing curtains during the day.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Protecting Your Pipes</h3>
            <p>
              Frozen pipes burst, and burst pipes cause $5,000+ in water damage. In a house with no heat, pipes in exterior walls can freeze in 4-6 hours when it is below 20°F outside.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Let all faucets drip — both hot and cold.</li>
              <li>Open cabinet doors under all sinks.</li>
              <li>Wrap exposed pipes in towels or blankets.</li>
              <li>If a pipe freezes, do not use a torch or open flame to thaw it. Use a hair dryer or space heater aimed at the frozen section.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Why Furnaces Fail on Christmas Specifically</h2>
            <p>
              It is not a conspiracy. There are real reasons Christmas is peak furnace failure season in Fort Wayne:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>First sustained cold snap:</strong> Fort Wayne's first week of sustained sub-30°F weather usually hits in mid-to-late December. Furnaces that have been idle or barely used suddenly run 18+ hours per day. Weak components fail under the load.</li>
              <li><strong>House full of people:</strong> Christmas means more bodies, more cooking, more door openings. The furnace works harder to maintain temperature.</li>
              <li><strong>Delayed maintenance:</strong> Homeowners who skipped fall maintenance discover the consequences when the system faces its first real test.</li>
              <li><strong>Aging systems:</strong> A 20-year-old furnace has already survived 300+ Fort Wayne winters. The 301st is when it finally gives up.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">How to Prevent a Christmas Emergency</h2>
            <p>
              The best holiday gift you can give yourself is a working furnace. Here is the prevention playbook:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Schedule fall maintenance in September.</strong> A $129 tune-up catches 90% of the problems that cause holiday failures.</li>
              <li><strong>Replace your filter before Thanksgiving.</strong> A clean filter prevents the high-limit switch trips that are common when the furnace first runs hard.</li>
              <li><strong>Test the system in November.</strong> Run the furnace for a full day before the cold arrives. Listen for odd noises. Check that all vents produce warm air.</li>
              <li><strong>Have a backup plan.</strong> Know where your space heaters are. Know how to shut off your water main if pipes freeze. Save our number in your phone: <strong>{PHONE}</strong>.</li>
            </ol>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Should You Repair or Replace on Christmas?</h2>
            <p>
              If your technician finds a major problem on a holiday, you face a hard decision: pay the holiday premium for a repair, or replace the furnace. Here is how to think about it:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Minor repair ($200-$400):</strong> Do it. A new igniter or flame sensor buys you time to plan a replacement in spring.</li>
              <li><strong>Major repair ($1,500+):</strong> If the furnace is 15+ years old, replacement is usually smarter. But on Christmas, you may need a temporary repair to get through the holiday, then schedule replacement in January.</li>
              <li><strong>Heat exchanger crack:</strong> Non-negotiable replacement. No reputable technician will operate a furnace with a cracked heat exchanger.</li>
            </ul>
            <p>
              <Link href="/repair-or-replace-tool" className="text-red-600 hover:underline font-semibold">Use our Repair or Replace Tool</Link> to evaluate your specific situation before the technician arrives.
            </p>
          </div>

          {/* Tool CTA */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Furnace Showing Warning Signs?</h3>
            <p className="text-slate-600 mb-6">Not sure if you should repair or replace? Get an honest recommendation in 30 seconds.</p>
            <Link href="/repair-or-replace-tool" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Decision Tool →
            </Link>
          </div>
        </article>

        <PageCTA
          title="HVAC Emergency? We're Here."
          subtitle="24/7 emergency furnace and AC repair across Fort Wayne and Allen County. Call anytime."
        />
      </main>
    </>
  );
}
