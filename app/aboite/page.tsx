import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Repair Aboite, Fort Wayne | AC & Furnace Service in Southwest Fort Wayne",
  description:
    "HVAC repair and installation in Aboite, Fort Wayne. We service the newer homes and subdivisions in southwest Fort Wayne with fast response times and local expertise. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/aboite/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Aboite", item: "https://hvacrepairfortwayne.com/aboite/" },
  ],
};

export default function AboitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Southwest Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              HVAC Service <span className="text-red-600 italic">Aboite</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Aboite is one of Fort Wayne's most desirable and fastest-growing areas — and its HVAC needs are different from
              the rest of Allen County. With a mix of 1980s-1990s subdivisions and recent new construction, Aboite homes
              require technicians who understand both aging systems and modern high-efficiency equipment.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Aboite Housing and HVAC Systems</h2>
            <p>
              Unlike older Fort Wayne neighborhoods where pre-1970 homes dominate, Aboite's housing stock skews newer. Most
              homes here were built between 1985 and 2010, with significant new construction continuing into the 2020s.
              You will find ranch-style homes, two-story colonials, and modern open-concept builds. The dominant HVAC setup
              is a split-system gas furnace with central AC — many of which are now 15-25 years old and approaching replacement age.
            </p>
            <p>
              The newer construction in Aboite (2005+) typically features better insulation, sealed ductwork, and more
              efficient windows. These homes are excellent candidates for heat pump installations and high-SEER AC systems
              because the tight envelope means the equipment can operate at its designed efficiency without fighting heat
              loss and air infiltration.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common HVAC Issues in Aboite</h2>
            <p>
              Because many Aboite homes were built during the 1990s construction boom, we see specific recurring problems:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Original equipment reaching end of life:</strong> A furnace installed in 1998 is now 28 years old.
                It has exceeded its design lifespan by nearly a decade. We see frequent igniter failures, cracked heat
                exchangers, and blower motor burnouts in these original systems.
              </li>
              <li>
                <strong>Condensate drain issues in two-story homes:</strong> Many Aboite colonials have the indoor unit in
                the attic. A clogged condensate drain in an attic unit causes water damage to ceilings and walls before anyone
                notices. We recommend annual drain line cleaning and float switch installation for all attic-mounted systems.
              </li>
              <li>
                <strong>Hard water scale in humidifiers:</strong> Allen County's moderately hard water means bypass
                humidifiers in Aboite homes accumulate scale on the water panel, reducing output by 50%+ within a season.
                Regular pad replacement is essential.
              </li>
              <li>
                <strong>Oversized AC from the 1990s:</strong> Contractors in the 1990s routinely oversized AC units by half
                a ton or more. The result is short cycling, poor dehumidification, and premature compressor failure. When
                replacement time comes, we perform Manual J calculations to right-size the new system.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Why Aboite Homeowners Choose Us</h2>
            <p>
              Our technicians know Aboite's subdivisions — Covington Dells, Sycamore Hills, Eagle Creek, Bittersweet Lakes.
              We understand which builders used quality ductwork and which cut corners. We know which homes have crawl space
              furnaces versus basement installations. This local knowledge means faster diagnostics and more accurate quotes.
            </p>
            <p>
              Response time to Aboite from our dispatch center is typically <strong>30-60 minutes</strong> during business hours.
              Emergency after-hours service is available with premium rates.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Services We Provide in Aboite</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AC repair and replacement</li>
              <li>Furnace repair and replacement</li>
              <li>Heat pump installation (Aboite's tight homes are ideal candidates)</li>
              <li>Ductless mini-split installation for additions and bonus rooms</li>
              <li>Whole-home air purification and dehumidification</li>
              <li>Smart thermostat installation and programming</li>
              <li>Preventive maintenance agreements</li>
            </ul>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Aboite HVAC Service"
          subtitle="Fast, local HVAC repair in Aboite and all of southwest Fort Wayne. Call now for same-day service."
        />
      </main>
    </>
  );
}
