import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair New Haven, IN | AC & Furnace Service in Allen County",
  description:
    "HVAC repair and installation in New Haven, Indiana. Serving this growing Allen County community with residential and light commercial HVAC expertise. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/new-haven/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "New Haven", item: "https://hvacrepairfortwayne.com/new-haven/" },
  ],
};

export default function NewHavenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Allen County</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">New Haven</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">New Haven is one of Allen County's fastest-growing communities, with a mix of historic homes, mid-century subdivisions, and new construction near the US-30 corridor. Each era of housing has different HVAC needs — and we know them all.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">New Haven's Diverse Housing</h2>
            <p>New Haven's housing stock is more varied than most Fort Wayne suburbs. Downtown New Haven has early-1900s homes near the railroad. Mid-century neighborhoods have 1960s-1970s ranches and split-levels. The US-30 corridor has seen explosive new construction in the 2010s-2020s. This diversity means there is no "one size fits all" HVAC approach in New Haven.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">HVAC Challenges in New Haven</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Historic downtown homes:</strong> Pre-1950 homes near downtown often have gravity furnaces, boiler conversions, or early forced-air retrofits. These systems require technicians who understand vintage equipment.</li>
              <li><strong>Rural well water and humidifiers:</strong> Many New Haven homes outside the municipal water district have hard well water. Bypass humidifiers scale up quickly, reducing output and clogging solenoid valves.</li>
              <li><strong>New construction ductwork issues:</strong> Rapidly built subdivisions sometimes have ductwork installed by framers, not HVAC specialists. We find crushed ducts, unsealed connections, and returns pulling air from garages or attics.</li>
              <li><strong>Dual-fuel readiness:</strong> New Haven's newer homes with good insulation are excellent candidates for heat pump installations. We have installed several dual-fuel systems in the new subdivisions near US-30.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Service to New Haven</h2>
            <p>Response time to New Haven is <strong>30-50 minutes</strong>. We serve both residential and light commercial properties, including the small businesses along Lincoln Highway and Broadway. Whether you have a 1920s farmhouse or a 2020s subdivision home, we have the expertise to diagnose and repair your system correctly.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/forest-park/" className="text-red-600 hover:underline font-semibold">Forest Park</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>
        <PageCTA title="New Haven HVAC Service" subtitle="Allen County's growing community deserves expert HVAC service. Call for fast, reliable repair." />
      </main>
    </>
  );
}
