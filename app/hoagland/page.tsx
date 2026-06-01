import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Hoagland, IN | Heating & Cooling in Allen County",
  description:
    "HVAC repair and installation in Hoagland, Indiana. Rural Allen County service for homes with propane, acreage properties, and agricultural buildings. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/hoagland/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Hoagland", item: "https://hvacrepairfortwayne.com/hoagland/" },
  ],
};

export default function HoaglandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Rural Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Hoagland</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Hoagland is a small, unincorporated community southeast of Fort Wayne surrounded by farmland. The homes here are spread out on large lots, and the HVAC challenges are distinctly rural — propane heating, hard well water, and exposure to agricultural dust.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">HVAC in Hoagland</h2>
            <p>Hoagland homes are typically 1970s-1990s ranch or split-level designs on 1-5 acre lots. Natural gas is not available in most of the area, so heating is either propane, electric resistance, or heat pump. The rural setting means outdoor AC units are exposed to higher dust loads from surrounding fields.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common Issues</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Propane furnace conversions:</strong> Many Hoagland homeowners are switching from propane to heat pumps to escape volatile fuel costs. We have installed several dual-fuel and all-electric systems in the area with excellent results.</li>
              <li><strong>Agricultural dust:</strong> Hoagland is surrounded by active farmland. During planting and harvest, outdoor condensers can accumulate enough dust to reduce efficiency by 20% in a single week. We recommend protective covers during off-season and frequent cleaning during peak agriculture periods.</li>
              <li><strong>Well water hardness:</strong> Hard water accelerates scale in humidifiers and steam systems. Water softeners are common in Hoagland and should be maintained to protect HVAC components.</li>
              <li><strong>Septic-safe drainage:</strong> Condensate and pump discharge must be routed away from septic fields and wellheads. We ensure all drainage complies with Allen County health regulations.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Hoagland</h2>
            <p>Response time to Hoagland is <strong>40-60 minutes</strong>. We carry common parts for the Goodman, Rheem, and Trane systems popular in this area's 1980s-1990s homes. For heat pump conversions, we provide detailed energy savings projections based on current propane vs. electricity rates.</p>
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
        <PageCTA title="Hoagland HVAC Service" subtitle="Rural Allen County HVAC expertise. Propane conversions, heat pumps, and acreage service." />
      </main>
    </>
  );
}
