import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Grabill, IN | Heating & Cooling in Allen County",
  description:
    "HVAC repair and installation in Grabill, Indiana. Serving this small-town Allen County community with rural expertise and fast response. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/grabill/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Grabill", item: "https://hvacrepairfortwayne.com/grabill/" },
  ],
};

export default function GrabillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Grabill</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Grabill is known for its small-town charm, Amish heritage, and proximity to Fort Wayne. The homes here range from historic farmhouses to newer rural properties, and the HVAC needs reflect that diversity.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">HVAC in Grabill</h2>
            <p>Grabill's housing includes 19th-century farmhouses, mid-century ranch homes, and newer properties on the town's outskirts. Many older homes were originally heated with wood stoves or coal furnaces and have been retrofit with modern forced-air systems. These retrofits often have creative ductwork routing and undersized returns.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common Issues</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Wood stove supplements:</strong> Many Grabill homes use wood stoves as primary or supplemental heat. When a wood stove is the primary heat source, the central HVAC system may have been minimally maintained. We check for rusted heat exchangers, seized blower motors, and animal nests in unused ductwork.</li>
              <li><strong>Rural electrical service:</strong> Some outlying properties have limited electrical capacity. Adding a heat pump or high-SEER AC may require a panel upgrade or a service line capacity check with the utility.</li>
              <li><strong>Hard water and humidifiers:</strong> Grabill's well water is moderately hard, which accelerates scale buildup in humidifiers and steam generators.</li>
              <li><strong>Septic and drainage considerations:</strong> Condensate drain lines must be routed carefully in homes with septic systems. We ensure drains terminate safely away from drain fields.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Grabill</h2>
            <p>Response time to Grabill is <strong>35-55 minutes</strong>. We respect the community's values and work efficiently with minimal disruption. Whether you have a farmhouse with a 30-year-old furnace or a new build with a modern heat pump, we provide honest, knowledgeable service.</p>
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
        <PageCTA title="Grabill HVAC Service" subtitle="Small-town service with professional expertise. Grabill and surrounding Allen County areas." />
      </main>
    </>
  );
}
