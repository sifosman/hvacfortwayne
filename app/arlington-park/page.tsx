import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Arlington Park, Fort Wayne | AC & Furnace Service",
  description:
    "HVAC repair and installation in Arlington Park, Fort Wayne. Serving this established east-side neighborhood with expertise in mid-century homes and mature-tree HVAC maintenance. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/arlington-park/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Arlington Park", item: "https://hvacrepairfortwayne.com/arlington-park/" },
  ],
};

export default function ArlingtonParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving East Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Arlington Park</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Arlington Park's tree-lined streets and mid-century homes make it one of Fort Wayne's most appealing neighborhoods. But those 1950s-1970s homes also come with aging systems, mature-tree debris, and ductwork that predates modern efficiency standards.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Arlington Park Housing Stock</h2>
            <p>Built primarily between 1950 and 1975, Arlington Park homes are predominantly single-story ranches and split-levels on generous lots. Many have full basements with original or early-replacement forced-air furnaces. The neighborhood's mature oak canopy is beautiful but creates significant HVAC maintenance demands.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Common HVAC Issues</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Oak leaf and acorn debris:</strong> Arlington Park's oak trees drop leaves in fall and acorns in late summer. Both clog outdoor condenser fins and block condensate drain outlets. We recommend condenser cleaning every 6-8 weeks during peak shedding seasons.</li>
              <li><strong>Original 1960s ductwork:</strong> Many Arlington Park homes have never had their ductwork inspected. Leaky, uninsulated ducts in unconditioned basements and crawl spaces waste 20-30% of heating and cooling energy.</li>
              <li><strong>Aging 80% AFUE furnaces:</strong> The 1990s replacement furnaces common here are now 25-30 years old and approaching end of life. We see frequent heat exchanger inspections and igniter replacements.</li>
              <li><strong>Single-zone heating/cooling:</strong> Many homes were built with a single thermostat controlling the entire house. Master bedrooms are often too hot in summer, and basement levels are too cold in winter.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to Arlington Park</h2>
            <p>We typically reach Arlington Park in <strong>25-45 minutes</strong>. Our technicians carry parts for Goodman, Rheem, and Carrier systems — the brands most commonly found in this neighborhood's homes. We also offer ductless mini-splits for homes that need zoned temperature control without major ductwork modifications.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Arlington Park HVAC Service" subtitle="East Fort Wayne's trusted HVAC repair. Fast response, local knowledge, honest pricing." />
      </main>
    </>
  );
}
