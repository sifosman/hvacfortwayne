import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "Indoor Air Quality Fort Wayne | Filtration, Humidity & Allergen Control in Allen County",
  description:
    "Improve your home's air quality in Fort Wayne, IN. Whole-home filtration, humidity control, and allergen reduction tailored to Allen County's pollen, mold, and humidity challenges. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/indoor-air-quality-fort-wayne/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Indoor Air Quality Fort Wayne", item: "https://hvacrepairfortwayne.com/indoor-air-quality-fort-wayne/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Indoor Air Quality Fort Wayne",
  provider: { "@type": "HVACBusiness", name: "HVAC Repair Fort Wayne", telephone: "+12607869284" },
  areaServed: { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
  serviceType: "Indoor Air Quality",
  description: "Whole-home air filtration, humidity control, and allergen solutions for Fort Wayne homes.",
};

export default function IndoorAirQualityFortWayne() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Breathe Better at Home</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              Indoor Air Quality <span className="text-red-600 italic">Fort Wayne</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Fort Wayne's lake-effect humidity, agricultural pollen, and aging housing stock create indoor air problems
              that standard HVAC systems do not solve. We design whole-home air quality solutions specifically for Allen
              County homes — not generic products marketed nationwide.
            </p>
            <div className="mt-8">
              <a href={`tel:+12607869284`} className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-black uppercase shadow-xl hover:bg-slate-900 transition-all inline-block">
                Free IAQ Assessment {PHONE}
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Fort Wayne's Unique Indoor Air Challenges</h2>
            <p>
              Fort Wayne is not Phoenix. It is not Seattle. Our specific combination of agricultural land, lake-effect
              humidity, clay-heavy soil, and pre-1970 housing stock creates indoor air quality problems that off-the-shelf
              solutions do not address. Here is what we actually see in Allen County homes:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">1. Agricultural Pollen Load</h3>
            <p>
              Fort Wayne sits in the middle of Indiana's corn and soybean belt. From April through September, pollen from
              these crops — along with tree pollen in spring and ragweed in late summer — creates one of the highest pollen
              burdens in the Midwest. A standard 1-inch fiberglass filter catches maybe 10-15% of these particles. The rest
              circulates through your home, triggering allergies, asthma, and chronic sinus issues.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">2. Humidity and Mold</h3>
            <p>
              Fort Wayne's muggy season lasts 3.7 months. Relative humidity regularly exceeds 75% outdoors — and if your
              home's AC is oversized, poorly maintained, or running in short cycles, indoor humidity can climb above 60%.
              At 60% relative humidity, mold growth accelerates. In pre-1970 homes with unventilated crawl spaces and
              damp basements, mold is nearly ubiquitous.
            </p>
            <p>
              The musty smell in your basement? That is mold spores being pulled into your return ductwork and distributed
              to every room. Your HVAC system is not filtering them — it is broadcasting them.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">3. Dust and Particulates from Older Homes</h3>
            <p>
              With <strong>47.6%</strong> of Fort Wayne homes built before 1970, many still have original plaster walls,
              deteriorating insulation, and decades of accumulated dust in wall cavities and attics. Every time a door
              slams or a truck drives by, pressure changes force that dust through gaps around outlets, baseboards, and
              light fixtures. Standard filters do not catch the fine particulates that cause the most respiratory irritation.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">4. Volatile Organic Compounds (VOCs)</h3>
            <p>
              New carpet, furniture, paint, and cleaning products release VOCs into your home's air. In modern, well-sealed
              homes, these compounds accumulate. In older Fort Wayne homes with poor ventilation, the problem is different
              but equally serious: decades of off-gassing from old building materials, plus modern products, create a
              chemical cocktail that irritates eyes, throats, and lungs.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Whole-Home Air Quality Solutions</h2>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Media Air Cleaners (MERV 13-16)</h3>
            <p>
              A media air cleaner replaces your standard 1-inch filter slot with a 4-5-inch deep pleated filter. MERV 13
              filters capture 90%+ of particles between 1-10 microns — including pollen, mold spores, pet dander, and dust
              mites. MERV 16 approaches HEPA-level filtration (95%+ at 0.3 microns). For Fort Wayne's pollen load, we
              typically recommend MERV 13-14 as the sweet spot: excellent filtration without the airflow restriction that
              MERV 16 can cause in older ductwork.
            </p>
            <p>
              <strong>Cost:</strong> $600-$1,200 installed, plus $40-$80 per replacement filter (changed every 6-12 months).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Whole-Home Dehumidifiers</h3>
            <p>
              Portable dehumidifiers handle one room and need constant emptying. A whole-home dehumidifier integrates with
              your HVAC ductwork and removes 70-130 pints of moisture per day — enough to keep a 2,500 sq ft home at 45-50%
              relative humidity even during Fort Wayne's muggiest weeks.
            </p>
            <p>
              The benefits extend beyond comfort. At 45% humidity, dust mites die off. Mold cannot grow. Wood furniture
              and floors stop warping. And your AC runs less because the air feels cooler at lower humidity.
            </p>
            <p>
              <strong>Cost:</strong> $1,800-$3,500 installed, depending on capacity and existing ductwork configuration.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">UV-C Germicidal Lights</h3>
            <p>
              Installed inside your HVAC system's evaporator coil cabinet, UV-C lights kill mold, bacteria, and viruses
              that colonize the wet coil surface. In Fort Wayne's humid climate, evaporator coils are a perpetual petri
              dish. UV-C lights reduce microbial growth by 90%+, preventing the musty odors and allergen distribution that
              plague many local homes.
            </p>
            <p>
              <strong>Cost:</strong> $400-$800 installed. Bulbs need replacement every 1-2 years ($50-$100).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Energy Recovery Ventilators (ERV)</h3>
            <p>
              In modern, well-sealed homes, indoor air can become stale and polluted because not enough fresh air enters.
              An ERV brings in filtered outdoor air while exhausting stale indoor air — and it transfers heat and moisture
              between the two airstreams, so you do not lose the energy you paid to condition. In Fort Wayne's climate,
              an ERV is particularly valuable during spring and fall when windows are closed but the house needs fresh air.
            </p>
            <p>
              <strong>Cost:</strong> $2,500-$4,500 installed. Best suited for homes with good insulation and relatively
              tight construction.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Duct Cleaning and Sealing</h3>
            <p>
              If your ducts have never been cleaned and your home is 30+ years old, they are likely harboring decades of
              dust, dead insects, construction debris, and possibly mold. Duct cleaning ($400-$800) removes these contaminants.
              Duct sealing ($800-$2,000) prevents attic dust, insulation particles, and crawl space moisture from being
              pulled into the system through leaks.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Our IAQ Assessment Process</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Interview:</strong> We ask about allergies, asthma, odors, humidity complaints, and recent renovations.</li>
              <li><strong>Hygrometer readings:</strong> We measure humidity in multiple rooms and in the basement/crawl space.</li>
              <li><strong>Filter inspection:</strong> We check your current filter type, installation, and condition.</li>
              <li><strong>Ductwork visual inspection:</strong> We look for leaks, mold, and contamination in accessible areas.</li>
              <li><strong>System performance check:</strong> We verify your HVAC system is operating correctly — because no air cleaner fixes an undersized or malfunctioning system.</li>
              <li><strong>Customized recommendation:</strong> We propose solutions based on your home's specific problems and your budget.</li>
            </ol>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Related Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/ac-repair-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Repair</Link>
              <Link href="/hvac-maintenance-fort-wayne/" className="text-red-600 hover:underline font-semibold">HVAC Maintenance</Link>
              <Link href="/ac-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">AC Installation</Link>
              <Link href="/heat-pump-installation-fort-wayne/" className="text-red-600 hover:underline font-semibold">Heat Pump Installation</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Breathe Better in Your Fort Wayne Home"
          subtitle="Free indoor air quality assessment. We identify the real problems — not just sell you products."
        />
      </main>
    </>
  );
}
