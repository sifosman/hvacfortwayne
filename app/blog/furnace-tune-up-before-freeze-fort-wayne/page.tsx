import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Furnace Tune-Up Before First Freeze: Allen County Fall HVAC Timeline",
  description:
    "When should Fort Wayne homeowners schedule fall furnace maintenance? Get the Allen County timeline, pre-winter checklist, and what a professional inspection actually covers.",
  keywords:
    "furnace tune up fort wayne, fall hvac maintenance allen county, when to service furnace indiana, fort wayne first freeze furnace prep",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/furnace-tune-up-before-freeze-fort-wayne/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Furnace Tune-Up Before First Freeze: Allen County Fall HVAC Timeline",
  description: "When to schedule fall furnace maintenance in Fort Wayne and what a professional inspection covers.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  datePublished: "2026-09-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hvacrepairfortwayne.com/blog/furnace-tune-up-before-freeze-fort-wayne/" },
};

export default function FallFurnaceTuneUp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Fall Preparation</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Furnace Tune-Up <span className="text-red-600 italic">Before the First Freeze</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Fort Wayne's first freeze typically hits in mid-October. By then, every procrastinating homeowner is calling for furnace service at once. Beat the rush with this Allen County fall timeline.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-xl font-medium text-slate-800 leading-relaxed bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
              <strong>The window:</strong> Schedule your fall furnace tune-up between <strong>September 1 and October 15</strong>. After October 15, appointment availability shrinks and emergency rates kick in for homes with no heat.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Fort Wayne's First Freeze Timeline</h2>
            <p>
              Based on 30 years of Allen County weather data, here is what to expect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>September 15:</strong> First night in the 40s. Your furnace has been off for 5+ months. Dust has settled on the heat exchanger. The igniter has not cycled since April.</li>
              <li><strong>October 10-20:</strong> First freeze (32°F). Usually brief — a single cold night followed by a warm rebound. But that first freeze tests every weak component.</li>
              <li><strong>November 1:</strong> Sustained cold arrives. Daily highs drop into the 40s. Your furnace now runs 12-16 hours per day.</li>
              <li><strong>December-February:</strong> Peak demand. January averages 20°F lows. Your furnace fights for its life.</li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The 8-Point Fall Furnace Checklist</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-8">1. Change the Filter</h3>
            <p>
              Your furnace filter has been collecting dust since the last cooling cycle ended. A clogged filter restricts airflow, which causes the heat exchanger to overheat and trip the high-limit switch. In extreme cases, it cracks the heat exchanger.
            </p>
            <p>
              Use a MERV 8-11 filter for Fort Wayne's dust levels. Higher MERV ratings (13+) restrict too much airflow in older systems.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">2. Test the System Before You Need It</h3>
            <p>
              Turn your thermostat to "Heat" and set it 5 degrees above room temperature. Listen for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Does the blower start within 30 seconds?</li>
              <li>Do you smell burning dust for the first 10 minutes? (Normal — dust burning off.)</li>
              <li>Does the burner stay lit, or does it cycle on and off repeatedly?</li>
              <li>Are all vents producing warm air?</li>
            </ul>
            <p>
              If the burner lights and immediately shuts off, you likely have a dirty flame sensor or weak igniter — both cheap fixes if caught early.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">3. Inspect the Exhaust Vent and Intake</h3>
            <p>
              Fort Wayne's fall leaves and winter snow are common causes of blocked vents. Walk outside and look at the PVC pipes exiting your home. Make sure they are clear of debris, bird nests, and leaf buildup.
            </p>
            <p>
              In older Fort Wayne neighborhoods like <Link href="/waynedale/" className="text-red-600 hover:underline">Waynedale</Link> and <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>, where mature trees drop heavy leaf cover, check vents weekly in October and November.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">4. Check Carbon Monoxide Detectors</h3>
            <p>
              Every furnace produces some carbon monoxide. A properly functioning system vents it outside. A cracked heat exchanger or blocked flue leaks it into your home. Test every CO detector and replace batteries. If a detector is more than 5-7 years old, replace the entire unit.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">5. Inspect the Humidifier</h3>
            <p>
              If you have a whole-home humidifier, fall is when you switch it on. Check the water panel — it is probably crusted with hard water scale from last season. Allen County's moderately hard water means panels need replacement every season. A clogged panel reduces humidity output by 50%+ and can harbor bacteria.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">6. Seal Air Leaks Around Windows and Doors</h3>
            <p>
              Fort Wayne's winter wind finds every gap. Caulk exterior gaps and replace weatherstripping before cold weather arrives. A 1/8-inch gap under a door is equivalent to a 4-inch hole in your wall.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">7. Reverse Ceiling Fan Direction</h3>
            <p>
              In summer, fans spin counterclockwise to push cool air down. In winter, reverse them to clockwise at low speed. This pulls cool air up and pushes warm air (which rises to the ceiling) back down the walls. It can reduce your heating bill by 5-10%.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">8. Schedule a Professional Fall Inspection</h3>
            <p>
              A professional fall inspection goes far beyond what homeowners can check. We inspect the heat exchanger with a borescope camera, test gas pressure with a digital manometer, analyze combustion with a flue gas analyzer, and verify every safety switch. This takes 60-90 minutes and costs $89-$129.
            </p>
            <p>
              The alternative: a failed heat exchanger discovered in January, when your home is 45°F inside and every HVAC company in Allen County is booked solid for 2 weeks.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Should You Repair or Replace Before Winter?</h2>
            <p>
              Fall is the ideal time to evaluate replacement. If your furnace is 15+ years old, has needed repairs in the last 2 years, or your energy bills have climbed 20%+, replacement may save you money and prevent a mid-winter emergency.
            </p>
            <p>
              <Link href="/repair-or-replace-tool" className="text-red-600 hover:underline font-semibold">Use our Repair or Replace Decision Tool</Link> to get an honest recommendation based on your system's age, repair history, and energy costs.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The Cost of Skipping Fall Maintenance</h2>
            <p>
              Every January, we get calls from Fort Wayne homeowners who "meant to get the furnace checked." The most expensive preventable winter failures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cracked heat exchanger:</strong> $1,500-$3,500 to replace, but usually means full furnace replacement. And it leaks carbon monoxide.</li>
              <li><strong>Failed igniter in sub-zero weather:</strong> A $180 repair that leaves your family in a freezing house for 6+ hours while you wait for emergency service.</li>
              <li><strong>Frozen pipes from no heat:</strong> $5,000+ in water damage from a $250 repair that was ignored.</li>
            </ul>
          </div>

          {/* Tool CTA */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Not Sure If Your Furnace Will Make It Through Winter?</h3>
            <p className="text-slate-600 mb-6">Answer 3 quick questions and get an honest repair-or-replace recommendation for your Fort Wayne home.</p>
            <Link href="/repair-or-replace-tool" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Decision Tool →
            </Link>
          </div>
        </article>

        <PageCTA
          title="Schedule Your Fall Tune-Up Now"
          subtitle="Beat the October rush. September appointments are easy to book and come with priority scheduling."
        />
      </main>
    </>
  );
}
