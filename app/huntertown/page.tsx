import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Huntertown, IN | AC & Furnace Service Near Fort Wayne",
  description:
    "HVAC repair and installation in Huntertown, Indiana. Serving this rapidly growing Allen County suburb with expertise in new construction and modern high-efficiency systems. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/huntertown/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Huntertown", item: "https://hvacrepairfortwayne.com/huntertown/" },
  ],
};

export default function HuntertownPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Huntertown</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Huntertown has transformed from a small rural community into one of Allen County's most desirable suburbs. The new construction here represents the best of modern building standards — and the worst when builders cut corners on HVAC.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Huntertown's Two Housing Worlds</h2>
            <p>Huntertown has a split personality. The original town center has homes from the 1950s-1980s. The explosion of development since 2010 has added hundreds of new subdivisions with 2,500-4,000 sq ft homes, open floor plans, and modern building envelopes. These two eras have completely different HVAC needs.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">HVAC in New Huntertown Construction</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Builder-grade equipment:</strong> Many new Huntertown homes were sold with the cheapest 14 SEER single-stage AC and 80% AFUE furnace the builder could install. These systems are adequate but not efficient — and they often struggle to maintain even temperatures in open-concept homes with high ceilings.</li>
              <li><strong>Oversizing:</strong> Builders routinely oversize AC by half a ton to avoid callbacks. The result is short cycling, poor dehumidification, and premature compressor wear.</li>
              <li><strong>Poor ductwork design:</strong> In the rush to complete subdivisions, ductwork is often installed by general laborers rather than HVAC technicians. We find long duct runs with no dampers, supplies blowing directly into kitchen islands, and returns located in closets.</li>
              <li><strong>Heat pump readiness:</strong> Huntertown's newer, well-insulated homes are ideal for heat pumps. Several of our clients in the new subdivisions have installed cold-climate heat pumps and are heating and cooling their entire homes on electricity alone — with lower bills than their neighbors with gas furnaces.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Older Huntertown Homes</h2>
            <p>The original Huntertown homes often have well water, septic systems, and propane heating. For propane-heated homes, a heat pump conversion can cut heating costs by 50-70% compared to propane at current prices. We have converted several older Huntertown homes from propane furnaces to dual-fuel heat pump systems with dramatic savings.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Huntertown</h2>
            <p>Response time to Huntertown is <strong>30-50 minutes</strong>. We are familiar with all the major subdivisions and can usually access parts quickly. For new construction warranty issues, we work directly with homeowners to ensure builders honor their obligations.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Huntertown HVAC Service" subtitle="Fast, expert HVAC repair in Huntertown. New construction and older homes, we handle it all." />
      </main>
    </>
  );
}
