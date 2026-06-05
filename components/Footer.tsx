import Link from "next/link";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="text-white font-bold mb-4 uppercase tracking-widest text-lg">Fort Wayne HVAC Repair</p>
          <p className="mb-2">Allen County, Indiana</p>
          <p className="mb-4">Available 24/7 for emergency service</p>
          <a href={PHONE_HREF} className="text-red-400 font-bold text-lg hover:text-white transition-colors">
            {PHONE}
          </a>
        </div>

        <div>
          <p className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Services</p>
          <div className="space-y-2">
            <Link href="/ac-repair-fort-wayne" className="block hover:text-white transition-colors">AC Repair</Link>
            <Link href="/furnace-repair-fort-wayne" className="block hover:text-white transition-colors">Furnace Repair</Link>
            <Link href="/hvac-maintenance-fort-wayne" className="block hover:text-white transition-colors">HVAC Maintenance</Link>
            <Link href="/emergency-hvac-fort-wayne" className="block hover:text-white transition-colors">Emergency HVAC</Link>
            <Link href="/ac-installation-fort-wayne" className="block hover:text-white transition-colors">AC Installation</Link>
            <Link href="/indoor-air-quality-fort-wayne" className="block hover:text-white transition-colors">Indoor Air Quality</Link>
            <Link href="/heat-pump-installation-fort-wayne" className="block hover:text-white transition-colors">Heat Pump Installation</Link>
          </div>
        </div>

        <div>
          <p className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Local Guides</p>
          <div className="space-y-2">
            <Link href="/fort-wayne-hvac-guide" className="block hover:text-white transition-colors">Fort Wayne HVAC Guide</Link>
            <Link href="/hvac-cost-guide-fort-wayne" className="block hover:text-white transition-colors">HVAC Cost Guide 2026</Link>
            <Link href="/heat-pumps-fort-wayne" className="block hover:text-white transition-colors">Heat Pumps in Fort Wayne</Link>
            <Link href="/allen-county-energy-savings" className="block hover:text-white transition-colors">Energy Savings & Rebates</Link>
            <Link href="/ac-furnace-cost-estimator-fort-wayne" className="block hover:text-white transition-colors font-semibold">💰 Cost Estimator</Link>
            <Link href="/repair-or-replace-tool" className="block hover:text-white transition-colors font-semibold">🔧 Repair or Replace?</Link>
            <Link href="/hvac-symptom-checker" className="block hover:text-white transition-colors font-semibold">🩺 Symptom Checker</Link>
          </div>
        </div>

        <div>
          <p className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Areas We Serve</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {["Aboite","Waynedale","Pine Valley","Forest Park","Arlington Park","New Haven","Huntertown","Leo-Cedarville","Grabill","Hoagland","Monroeville","Woodburn"].map((area) => (
              <Link key={area} href={`/${area.toLowerCase().replace(/\s+/g, "-")}`} className="block hover:text-white transition-colors">
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} HVAC Repair Fort Wayne. All rights reserved.</p>
        <p className="mt-1">Licensed & Insured HVAC Service in Allen County, Indiana</p>
      </div>
    </footer>
  );
}
