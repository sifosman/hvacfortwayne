import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

const PHONE = "(260) 786-9284";

export const metadata: Metadata = {
  title: "HVAC Repair Waynedale, Fort Wayne | Heating & Cooling in South Fort Wayne",
  description:
    "HVAC repair and installation in Waynedale, Fort Wayne. Serving the older homes and neighborhoods of south Fort Wayne with expertise in vintage ductwork and system upgrades. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/waynedale/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Waynedale", item: "https://hvacrepairfortwayne.com/waynedale/" },
  ],
};

export default function WaynedalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving South Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
              HVAC Service <span className="text-red-600 italic">Waynedale</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
              Waynedale has character — tree-lined streets, mid-century ranches, and a tight-knit community feel. But those
              1950s-1970s homes also have aging HVAC systems, original ductwork, and insulation that predates modern standards.
              We know Waynedale because we have worked on its homes for years.
            </p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Waynedale's Housing Stock</h2>
            <p>
              Waynedale was largely built between 1945 and 1975. You will find single-story ranches, split-levels, and modest
              two-story homes on generous lots. Many still have their original forced-air systems or early replacements from
              the 1980s-1990s. The ductwork is typically galvanized steel with asbestos tape at the joints — a detail that
              matters when we are sealing or modifying ducts.
            </p>
            <p>
              These homes often have unfinished basements with furnaces sitting on the floor, and the ductwork runs through
              soffits and chases that were not designed for modern high-static-pressure systems. When we replace an HVAC
              system in Waynedale, we always evaluate whether the existing ductwork can handle the airflow of a new
              high-efficiency unit.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">HVAC Challenges Specific to Waynedale</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Aging galvanized ductwork:</strong> Original steel ducts rust from the inside out, especially in
                the humid Fort Wayne climate. We often find disconnected runs, collapsed soffit ducts, and rust holes that leak
                conditioned air into walls and attics.
              </li>
              <li>
                <strong>Original furnaces with cracked heat exchangers:</strong> A 1970s furnace in Waynedale has survived
                50+ Fort Wayne winters. Heat exchanger cracks are common and dangerous. We check every older furnace with
                a combustion analyzer and borescope inspection.
              </li>
              <li>
                <strong>Asbestos tape on duct joints:</strong> Before disturbing any ductwork in a pre-1985 Waynedale home,
                we inspect for asbestos-containing materials. If present, we follow EPA abatement protocols or recommend
                an abatement contractor.
              </li>
              <li>
                <strong>Undersized electrical panels:</strong> Many Waynedale homes still have 100-amp fuse boxes or early
                breaker panels with no spare capacity. Upgrading to a high-efficiency furnace with an ECM blower or adding
                a heat pump often requires a panel upgrade first.
              </li>
              <li>
                <strong>Mature tree canopy:</strong> Waynedale's beautiful oak and maple trees drop leaves, seeds, and cottonwood
                fluff that clog outdoor condensers. We recommend quarterly condenser cleaning for homes under heavy canopy cover.
              </li>
            </ul>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Waynedale-Specific Service Notes</h2>
            <p>
              Our average response time to Waynedale is <strong>30-60 minutes</strong>. We stock parts for the brands most
              common in this neighborhood's older homes: Carrier, Bryant, Rheem, and Goodman. For full system replacements,
              we provide Manual J calculations and evaluate ductwork modifications as part of every quote.
            </p>
            <p>
              Waynedale is also one of the neighborhoods where heat pumps make the most sense — if the home has been
              weatherized. The ranch-style floor plans are easy to heat and cool evenly, and many homeowners have already
              replaced windows and added attic insulation. If your Waynedale home has been updated, a cold-climate heat
              pump or dual-fuel system could cut your heating and cooling costs by 40%.
            </p>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>

        <PageCTA
          title="Waynedale HVAC Service"
          subtitle="Local expertise in south Fort Wayne's older homes. Fast, honest service for AC and furnace repair."
        />
      </main>
    </>
  );
}
