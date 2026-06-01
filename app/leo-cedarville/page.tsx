import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Leo-Cedarville, IN | Heating & Cooling in Allen County",
  description:
    "HVAC repair and installation in Leo-Cedarville, Indiana. Rural Allen County expertise for homes with well water, propane heating, and acreage properties. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/leo-cedarville/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Leo-Cedarville", item: "https://hvacrepairfortwayne.com/leo-cedarville/" },
  ],
};

export default function LeoCedarvillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Rural Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Leo-Cedarville</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Leo-Cedarville sits at the edge of Fort Wayne's suburban expansion, where homes sit on acreage and the HVAC challenges are different from city neighborhoods. Propane heating, well water, and rural electrical service create unique demands.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Rural HVAC Challenges in Leo-Cedarville</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Propane heating costs:</strong> Many Leo-Cedarville homes rely on propane, which fluctuates wildly in price. At $2.50/gallon, propane heating costs 40-60% more than natural gas. Heat pump conversions are extremely popular here because they eliminate propane dependence entirely.</li>
              <li><strong>Electrical service limitations:</strong> Rural properties sometimes have 100-amp panels or long service runs that cause voltage drop. Adding a heat pump or high-efficiency furnace may require a panel upgrade or service line reinforcement.</li>
              <li><strong>Well water and humidifiers:</strong> Hard rural well water quickly scales up bypass humidifiers. We recommend steam humidifiers or dedicated water softening for homes with very hard water.</li>
              <li><strong>Acreage debris:</strong> Leo-Cedarville's properties are surrounded by farmland and woods. Outdoor condensers collect more dust, pollen, and leaf debris than in-city units. Quarterly cleaning is essential.</li>
              <li><strong>Large homes on acreage:</strong> Many Leo-Cedarville homes exceed 3,000 sq ft with high ceilings and bonus rooms. These homes need careful load calculations and often benefit from zoned systems or ductless mini-splits for hard-to-condition spaces.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Leo-Cedarville</h2>
            <p>Response time to Leo-Cedarville is <strong>35-55 minutes</strong>. We carry a full inventory of common parts and have experience with both residential and small agricultural HVAC applications. For propane-to-heat-pump conversions, we provide detailed ROI calculations showing exactly how long the payback period will be.</p>
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
        <PageCTA title="Leo-Cedarville HVAC Service" subtitle="Rural Allen County HVAC expertise. Propane conversions, heat pumps, and acreage properties." />
      </main>
    </>
  );
}
