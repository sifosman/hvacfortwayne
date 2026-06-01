import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Pine Valley, Fort Wayne | AC & Furnace Service",
  description:
    "HVAC repair and installation in Pine Valley, Fort Wayne. Serving this established northeast neighborhood with fast response and local expertise. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/pine-valley/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Pine Valley", item: "https://hvacrepairfortwayne.com/pine-valley/" },
  ],
};

export default function PineValleyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Northeast Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Pine Valley</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Pine Valley's mix of 1970s-1990s homes and mature landscaping creates specific HVAC challenges. We have serviced this neighborhood for years and know the equipment, ductwork, and common failure points.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Pine Valley Housing and HVAC</h2>
            <p>Pine Valley was developed heavily in the 1970s and 1980s, with many homes built during the energy crisis era. These homes often have compromised insulation — builders in the 1970s prioritized cost over efficiency. Original HVAC systems are typically 80% AFUE furnaces with 10-12 SEER AC units, now 25-35 years old.</p>
            <p>The neighborhood's mature pine trees (hence the name) are beautiful but drop needles year-round. Pine needles are notorious for clogging outdoor condenser fins and gutter drainage systems that feed condensate lines.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common Issues in Pine Valley</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Original 1980s furnaces failing:</strong> Heat exchanger cracks, failed ignition modules, and worn blower motors are routine in Pine Valley's original systems.</li>
              <li><strong>Pine needle accumulation:</strong> Outdoor AC units need quarterly cleaning in Pine Valley. Needles wedge between condenser fins and reduce airflow by 20-30%.</li>
              <li><strong>Poor attic ventilation:</strong> Many 1970s homes here were built with inadequate soffit and ridge venting. Hot attics in summer force AC systems to work 15-20% harder.</li>
              <li><strong>Original ductwork with no returns:</strong> Some Pine Valley homes were built with only one or two return air ducts for the entire house. This restricts airflow and causes pressure imbalances.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Our Pine Valley Service</h2>
            <p>Response time to Pine Valley averages <strong>30-50 minutes</strong>. We carry parts for the Carrier, Bryant, and Lennox systems common in this neighborhood's 1980s-1990s builds. For replacements, we assess attic ventilation and ductwork capacity as standard practice.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Pine Valley HVAC Service" subtitle="Fast, local AC and furnace repair in Pine Valley and northeast Fort Wayne." />
      </main>
    </>
  );
}
