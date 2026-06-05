import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Fort Wayne Spring HVAC Checklist 2026 | Pre-Summer Prep for Allen County",
  description:
    "Don't wait for the first 90°F day. Follow this Fort Wayne-specific spring HVAC checklist to prevent summer breakdowns, lower your I&M bill, and avoid emergency calls.",
  keywords:
    "spring hvac checklist fort wayne, ac tune up fort wayne, prepare ac for summer indiana, hvac maintenance spring allen county",
  alternates: { canonical: "https://hvacrepairfortwayne.com/blog/spring-hvac-checklist-fort-wayne/" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Fort Wayne Spring HVAC Checklist 2026",
  description: "A step-by-step spring HVAC checklist tailored to Fort Wayne's climate and housing stock.",
  author: { "@type": "Organization", name: "HVAC Repair Fort Wayne" },
  publisher: { "@type": "Organization", name: "HVAC Repair Fort Wayne", logo: { "@type": "ImageObject", url: "https://hvacrepairfortwayne.com/images/tech.jpg" } },
  datePublished: "2026-03-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://hvacrepairfortwayne.com/blog/spring-hvac-checklist-fort-wayne/" },
};

export default function SpringHVACChecklist() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Seasonal Guide</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Fort Wayne Spring <span className="text-red-600 italic">HVAC Checklist</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Fort Wayne's first 80°F day usually hits in mid-May. By then, every procrastinating homeowner is calling for AC service at once. Beat the rush with this pre-summer prep guide.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-xl font-medium text-slate-800 leading-relaxed bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
              <strong>Bottom line:</strong> Completing this checklist in April prevents 80% of the emergency AC calls we see in July. Most tasks are free and take under 30 minutes.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">The 10-Point Fort Wayne Spring HVAC Checklist</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-8">1. Change Your Air Filter</h3>
            <p>
              This is the #1 cause of summer AC failure in Fort Wayne. A clogged filter restricts airflow, which causes the evaporator coil to freeze. When the ice melts, water leaks. When the coil stays frozen, the compressor overheats and dies.
            </p>
            <p>
              <strong>Fort Wayne-specific note:</strong> Allen County's agricultural dust (especially during April planting) clogs filters 30% faster than urban areas. If you live near <Link href="/grabill/" className="text-red-600 hover:underline">Grabill</Link> or <Link href="/leo-cedarville/" className="text-red-600 hover:underline">Leo-Cedarville</Link>, check your filter weekly in spring.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">2. Clear the Outdoor Condenser</h3>
            <p>
              Remove leaves, twigs, cottonwood fluff, and grass clippings from the area around your outdoor unit. Maintain 2 feet of clearance on all sides. Use a garden hose (on low pressure) to spray the fins from the inside out — never use a pressure washer, which bends the delicate aluminum fins.
            </p>
            <p>
              In Fort Wayne, cottonwood trees release fluff in late May and early June. One week of accumulation can reduce condenser efficiency by 20%. If your unit is under a cottonwood, check it twice weekly during fluff season.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">3. Test Your AC Before You Need It</h3>
            <p>
              Turn your thermostat to "Cool" and set it 5 degrees below the current room temperature. Listen for unusual noises. Feel the air coming from the vents — it should be noticeably cooler than room temperature within 10 minutes.
            </p>
            <p>
              If the AC blows warm air, makes a loud humming noise, or the outdoor fan doesn't spin, you have a problem that will only get worse. <Link href="/hvac-symptom-checker" className="text-red-600 hover:underline font-semibold">Use our Symptom Checker</Link> to identify the likely cause and cost before calling.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">4. Check Condensate Drain Line</h3>
            <p>
              Find the PVC drain line that exits near your outdoor unit. Pour one cup of white vinegar into the line at the indoor unit (usually near the furnace). If water flows freely out the exit, the line is clear. If it backs up, you have a clog that will cause water damage during the first humid week.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">5. Inspect Ductwork in the Basement</h3>
            <p>
              Walk your basement and look at the exposed ductwork. Are any sections disconnected? Is flex duct sagging or torn? Are supply registers fully open? In older Fort Wayne homes, especially in <Link href="/waynedale/" className="text-red-600 hover:underline">Waynedale</Link> and <Link href="/forest-park/" className="text-red-600 hover:underline">Forest Park</Link>, disconnected basement ducts are a top cause of poor cooling upstairs.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">6. Test Smoke and CO Detectors</h3>
            <p>
              Spring is when we switch from heating to cooling — and when furnace problems that went unnoticed all winter finally show up. A cracked heat exchanger or blocked flue may not have triggered your CO detector in winter because the furnace ran constantly, diluting any leak. Test every detector and replace batteries.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">7. Program Your Thermostat for Efficiency</h3>
            <p>
              Fort Wayne's spring weather is erratic — 75°F one day, 45°F the next. Program your thermostat to avoid heating and cooling the same day. A good spring schedule: 68°F for mornings under 50°F, system off between 50-75°F, and 74°F for afternoons over 75°F.
            </p>
            <p>
              If you have a heat pump, never set the temperature back more than 3-4 degrees. Heat pumps recover slowly, and aggressive setbacks trigger expensive auxiliary heat.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">8. Check Window and Door Seals</h3>
            <p>
              Fort Wayne's humidity enters through gaps around windows and doors. On humid days, that moisture makes your AC work harder to remove it. Caulk exterior gaps and replace worn weatherstripping before summer.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">9. Schedule a Professional Tune-Up</h3>
            <p>
              A professional spring tune-up includes refrigerant testing, electrical diagnostics, and coil cleaning that homeowners cannot do themselves. In Fort Wayne, April appointments are easy to book. By mid-May, wait times stretch to 2-3 weeks.
            </p>
            <p>
              Our spring tune-up is $89-$129 and includes everything on this list plus professional diagnostics. <a href="tel:+12607869284" className="text-red-600 hover:underline font-semibold">Call {PHONE} to schedule</a>.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8">10. Know When to Replace Instead of Repair</h3>
            <p>
              If your AC is 15+ years old, uses R-22 refrigerant, or needed a major repair last summer, spring is the time to evaluate replacement — before you're desperate in July. A new 16 SEER system can cut your cooling costs by 30-40% versus a 12 SEER unit from 2005.
            </p>
            <p>
              <Link href="/ac-furnace-cost-estimator-fort-wayne" className="text-red-600 hover:underline font-semibold">Use our Cost Estimator</Link> to get an instant price range for your home size and system type — no email required.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">When to Switch from Heat to AC in Indiana</h2>
            <p>
              Fort Wayne's weather is famously unpredictable. Our rule: once the 10-day forecast shows no nights below 45°F, switch to AC and schedule your furnace's fall inspection. The last frost in Fort Wayne is typically around May 10, but we've seen late frosts as far out as May 20.
            </p>
            <p>
              If you have a heat pump, you never really "switch" — the system handles both. But you should still switch the thermostat from "Heat" to "Auto" or "Cool" mode to match the season.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">What Happens If You Skip This Checklist</h2>
            <p>
              Every July, we get the same calls from Fort Wayne homeowners who "meant to get the AC checked." The most expensive preventable failures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Compressor burnout:</strong> $2,500-$3,500. Caused by low refrigerant or dirty coils that go unchecked.</li>
              <li><strong>Water damage from clogged drains:</strong> $2,000-$5,000 in drywall, insulation, and flooring repairs.</li>
              <li><strong>Evaporator coil replacement:</strong> $1,800-$2,800. Caused by restricted airflow from a dirty filter.</li>
            </ul>
            <p>
              A $129 tune-up prevents all three. The math is not complicated.
            </p>
          </div>

          {/* Tool CTA */}
          <div className="mt-12 bg-slate-50 rounded-2xl border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">Wondering What Replacement Would Cost?</h3>
            <p className="text-slate-600 mb-6">Get an instant Fort Wayne-specific price range for AC or furnace replacement. No email required.</p>
            <Link href="/ac-furnace-cost-estimator-fort-wayne" className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all">
              Try the Cost Estimator →
            </Link>
          </div>
        </article>

        <PageCTA
          title="Don't Wait for the Heat"
          subtitle="Schedule your spring AC tune-up now and beat the summer rush. Same-day appointments available in April."
        />
      </main>
    </>
  );
}
