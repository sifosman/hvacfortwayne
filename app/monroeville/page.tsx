import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Monroeville, IN | Heating & Cooling in Allen County",
  description:
    "HVAC repair and installation in Monroeville, Indiana. Serving this rural Allen County community with expertise in older homes, propane systems, and agricultural properties. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/monroeville/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Monroeville", item: "https://hvacrepairfortwayne.com/monroeville/" },
  ],
};

export default function MonroevillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Monroeville</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Monroeville is a small town with a big rural footprint. The homes here range from early-1900s farmhouses to 1970s ranches and newer builds. HVAC needs vary dramatically depending on the home's age, fuel type, and proximity to active farmland.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">HVAC in Monroeville</h2>
            <p>Monroeville's housing stock is diverse. Downtown has older homes near the railroad. The surrounding rural area has farmhouses, ranch homes on acreage, and a scattering of newer construction. Natural gas is limited outside the town center, so propane and electric heating are common.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common Issues</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Propane vs. heat pump economics:</strong> With propane prices fluctuating between $2.00-$3.50/gallon, Monroeville homeowners with propane heating are increasingly interested in heat pump conversions. We provide detailed ROI calculations specific to current fuel and electricity rates.</li>
              <li><strong>Older farmhouse ductwork:</strong> Farmhouses retrofitted with central air often have ductwork run through unconditioned spaces — crawl spaces, attics, and exterior walls. Heat loss in winter and heat gain in summer make these systems inefficient. We recommend duct sealing and insulation upgrades.</li>
              <li><strong>Agricultural dust exposure:</strong> Outdoor condensers in Monroeville face heavy dust during spring planting and fall harvest. We offer seasonal maintenance plans that include quarterly condenser cleaning during peak agriculture months.</li>
              <li><strong>Water heater and HVAC coordination:</strong> Many Monroeville homes with propane furnaces also have propane water heaters. When converting to a heat pump, we evaluate whether a heat pump water heater makes sense as part of the same project — potentially stacking multiple rebates.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Monroeville</h2>
            <p>Response time to Monroeville is <strong>40-65 minutes</strong>. We carry parts for all major brands and have experience with both residential and small-shop HVAC systems. For heat pump conversions, we help Monroeville homeowners navigate Indiana Energy Saver rebates and federal tax credits.</p>
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
        <PageCTA title="Monroeville HVAC Service" subtitle="Rural Allen County HVAC repair and installation. Propane conversions, heat pumps, and honest advice." />
      </main>
    </>
  );
}
