import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Fort Wayne Winter Furnace Survival: What to Do Before the First Freeze",
  description:
    "Fort Wayne's winters are brutal on furnaces. Here's a step-by-step survival guide for Allen County homeowners — from pre-winter maintenance to emergency backup plans.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/winter-furnace-survival-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://hvacrepairfortwayne.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Winter Furnace Survival Guide", item: "https://hvacrepairfortwayne.com/blog/winter-furnace-survival-fort-wayne/" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fort Wayne Winter Furnace Survival: What to Do Before the First Freeze",
  description: "Fort Wayne's winters are brutal on furnaces. Here's a step-by-step survival guide for Allen County homeowners.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

export default function BlogWinterFurnaceSurvival() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Seasonal Guide</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">Fort Wayne Winter Furnace <span className="text-red-600 italic">Survival Guide</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Fort Wayne's cold season lasts 3.1 months, with January lows averaging 20°F and overnight temperatures routinely dropping below 10°F. Your furnace is about to enter combat. Here is how to make sure it survives — and what to do if it doesn't.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Pre-Winter Checklist (Do This in October)</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Replace the filter:</strong> A dirty filter restricts airflow, which causes the heat exchanger to overheat and the high-limit switch to trip. Start the season with a clean filter.</li>
              <li><strong>Test the thermostat:</strong> Switch to "Heat" mode and raise the setpoint 5 degrees above room temperature. The furnace should fire within 60 seconds. If it doesn't, call for service now — not on the first freezing night.</li>
              <li><strong>Check the exhaust vent:</strong> Make sure the furnace exhaust pipe and air intake are clear of leaves, nests, and debris. In Fort Wayne's wooded neighborhoods, blocked vents are a common cause of furnace shutdown.</li>
              <li><strong>Inspect the condensate drain (high-efficiency furnaces):</strong> 90%+ AFUE furnaces produce acidic condensate that exits through a drain line. If the line is clogged, the furnace will shut down as a safety measure.</li>
              <li><strong>Listen for unusual noises:</strong> Squealing (blower belt or bearing), rumbling (dirty burner), or rattling (loose panel or duct) are warning signs. Address them before the system is running 18 hours a day.</li>
              <li><strong>Schedule professional maintenance:</strong> A fall tune-up includes heat exchanger inspection, combustion analysis, gas pressure verification, and safety control testing. It is the best $129 you will spend all winter.</li>
            </ol>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Emergency Preparedness: What If Your Furnace Fails?</h2>
            <p>Even well-maintained furnaces can fail. When temperatures are in the single digits, you have hours — not days — to act. Here is your emergency plan:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Close off unused rooms:</strong> Shut doors and stuff towels under the gaps. Focus heat on the rooms you are using.</li>
              <li><strong>Use space heaters safely:</strong> Keep them 3+ feet from anything flammable, never use extension cords, and never leave them unattended or while sleeping.</li>
              <li><strong>Open cabinet doors under sinks:</strong> This lets warm air circulate around pipes on exterior walls. Let faucets drip to prevent freezing.</li>
              <li><strong>Cover windows at night:</strong> Close blinds and curtains to add an insulating layer. Cardboard or blankets over windows help in an extreme pinch.</li>
              <li><strong>Do not use your oven for heat:</strong> It is a fire hazard and produces carbon monoxide risk. Use properly vented space heaters or layered clothing instead.</li>
              <li><strong>Check on elderly neighbors:</strong> Older adults are especially vulnerable to cold. A quick check could save a life.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Know When to Call for Emergency Service</h2>
            <p>Call for emergency HVAC service immediately if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your furnace will not start and the temperature is below 20°F</li>
              <li>You smell gas (evacuate first, then call)</li>
              <li>Your carbon monoxide detector alarms (evacuate immediately)</li>
              <li>You see visible damage to the furnace or venting</li>
              <li>The furnace starts but shuts off within minutes repeatedly</li>
            </ul>
            <p>In Fort Wayne, emergency service calls after hours carry a premium of $150-$300, but the alternative — frozen pipes, water damage, or health emergencies — is far more expensive.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Long Game: When to Replace Before Winter</h2>
            <p>If your furnace is 15+ years old and has needed repairs in the last two years, consider replacement before winter. A failing furnace will almost certainly choose the coldest night of the year to quit completely — because that is when it is under maximum stress.</p>
            <p>A pre-season replacement gives you time to choose the right equipment, schedule installation at your convenience, and avoid the emergency premium. It also lets you take advantage of fall rebate programs and contractor availability before the winter rush.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/blog/replace-15-year-old-furnace/" className="text-red-600 hover:underline font-semibold">Should You Replace Your 15-Year-Old Furnace?</Link>
              <Link href="/blog/heat-pump-reality-check/" className="text-red-600 hover:underline font-semibold">Fort Wayne Heat Pump Reality Check</Link>
              <Link href="/furnace-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">Furnace Repair Fort Wayne</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance Fort Wayne</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Get Your Furnace Winter-Ready" subtitle="Fall maintenance and pre-season inspections across Fort Wayne and Allen County. Schedule now before the first freeze." />
      </main>
    </>
  );
}
