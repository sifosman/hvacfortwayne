import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "HVAC Repair Forest Park, Fort Wayne | Heating & Cooling in Central Fort Wayne",
  description:
    "HVAC repair and installation in Forest Park, Fort Wayne. Specializing in older homes, vintage ductwork, and system upgrades in this historic central neighborhood. Call (260) 786-9284.",
  alternates: { canonical: "https://hvacrepairfortwayne.com/forest-park/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://hvacrepairfortwayne.com/" },
    { "@type": "ListItem", position: 2, name: "Forest Park", item: "https://hvacrepairfortwayne.com/forest-park/" },
  ],
};

export default function ForestParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Serving Central Fort Wayne</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">HVAC Service <span className="text-red-600 italic">Forest Park</span></h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">Forest Park is one of Fort Wayne's most historic and architecturally significant neighborhoods. The Craftsman bungalows, Tudor revivals, and Colonial homes here date from the 1920s through the 1950s — and their HVAC systems tell the story of a century of heating technology.</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Forest Park's Historic Housing</h2>
            <p>Many Forest Park homes were built before central air conditioning existed as a residential option. The original heating was coal or early gas furnaces with gravity-fed ductwork or radiator systems. When AC was added — often in the 1970s or 1980s — contractors had to retrofit ductwork into homes never designed for it.</p>
            <p>The result? Forest Park has some of the most challenging ductwork configurations in Fort Wayne. We have seen flex duct squeezed through original plaster walls, supply vents cut into hardwood floors, and returns that pull air from hallways instead of individual rooms. All of these compromises affect comfort and efficiency.</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">HVAC Challenges in Forest Park</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Retrofit ductwork:</strong> Ducts added decades after construction are often undersized, poorly sealed, and routed inefficiently. We measure static pressure and airflow at each vent to identify problems.</li>
              <li><strong>Plaster walls and asbestos:</strong> Forest Park's pre-1950 homes often have plaster walls with asbestos in the joint compound or insulation. Any wall penetration for ductwork modification requires careful assessment.</li>
              <li><strong>Boiler-to-forced-air conversions:</strong> Some homes were converted from hot water radiators to forced air. These conversions often have uneven heating, noisy ductwork, and poor airflow design.</li>
              <li><strong>Basement moisture:</strong> Forest Park's older basements are prone to dampness. Furnaces in damp basements rust faster, and musty air gets drawn into the return ductwork.</li>
              <li><strong>Historic preservation considerations:</strong> For homes in historic districts or with preservation easements, exterior modifications (like running refrigerant lines) may require approval.</li>
            </ul>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mt-12">Why Forest Park Homeowners Trust Us</h2>
            <p>We understand historic homes. We know how to work within the constraints of original construction while delivering modern comfort. Our Forest Park installations prioritize preserving architectural character — we hide lines where possible, use period-appropriate vent covers, and work with homeowners on aesthetic concerns.</p>
            <p>Response time to Forest Park: <strong>20-40 minutes</strong>.</p>
          </div>
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Other Areas We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <Link href="/aboite/" className="text-red-600 hover:underline font-semibold">Aboite</Link>
              <Link href="/waynedale/" className="text-red-600 hover:underline font-semibold">Waynedale</Link>
              <Link href="/pine-valley/" className="text-red-600 hover:underline font-semibold">Pine Valley</Link>
              <Link href="/arlington-park/" className="text-red-600 hover:underline font-semibold">Arlington Park</Link>
              <Link href="/new-haven/" className="text-red-600 hover:underline font-semibold">New Haven</Link>
              <Link href="/huntertown/" className="text-red-600 hover:underline font-semibold">Huntertown</Link>
            </div>
          </div>
        </article>
        <PageCTA title="Forest Park HVAC Service" subtitle="Historic home HVAC expertise in central Fort Wayne. Respectful, knowledgeable service." />
      </main>
    </>
  );
}
