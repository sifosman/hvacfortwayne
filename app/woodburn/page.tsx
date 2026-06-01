import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Woodburn, IN | Heating & Cooling in Allen County",
  description:
    "HVAC repair and installation in Woodburn, Indiana. Rural Allen County expertise for homes with propane heating, well water, and acreage properties. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/woodburn/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Woodburn", item: "https://hvacrepairfortwayne.com/woodburn/" },
  ],
};

export default function WoodburnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Woodburn</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Woodburn is a small community northeast of Fort Wayne with a mix of rural properties, small-town homes, and agricultural land. The HVAC challenges here are classic rural Allen County: propane heating, hard well water, and exposure to Indiana's seasonal extremes.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">HVAC in Woodburn</h2>
            <p>Woodburn's homes span from early-1900s construction near the town center to 1970s-1990s ranch and split-level homes on the outskirts. Many properties sit on acreage with outbuildings. The lack of natural gas infrastructure in the rural areas means propane and electric heating dominate.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common Issues</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Propane cost volatility:</strong> Woodburn homeowners heating with propane face unpredictable winter fuel bills. A heat pump conversion provides price stability by switching to electricity, which does not spike seasonally the way propane does.</li>
              <li><strong>Hard water scale:</strong> Well water in the Woodburn area is moderately to very hard. Humidifiers, steam units, and condensate pumps all suffer from accelerated scale buildup. We recommend water analysis and often suggest whole-home water softening as part of an HVAC upgrade.</li>
              <li><strong>Outbuilding heating:</strong> Many Woodburn properties have shops, garages, or barns that need climate control. Ductless mini-splits are ideal for these spaces — no ductwork, high efficiency, and zoned control.</li>
              <li><strong>Seasonal dust loading:</strong> Outdoor condensers in Woodburn collect dust from nearby fields. We see condensers that lose 25-30% of their airflow capacity during peak agricultural seasons. Our maintenance plans include seasonal condenser cleaning.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Woodburn</h2>
            <p>Response time to Woodburn is <strong>35-60 minutes</strong>. We carry common parts for Goodman, Rheem, Carrier, and Trane systems. For heat pump conversions, we provide full energy analysis and help navigate Indiana Energy Saver and federal rebate programs.</p>
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
        <PageCTA title="Woodburn HVAC Service" subtitle="Rural Allen County HVAC expertise. Fast response, honest pricing, and local knowledge." />
      </main>
    </>
  );
}
