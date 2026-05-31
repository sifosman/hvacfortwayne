"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+126****9284";
const WHATSAPP_HREF = "https://wa.me/27658475289?text=Hi%2C%20I%20need%20HVAC%20maintenance%20in%20Fort%20Wayne";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I schedule HVAC maintenance in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend professional HVAC maintenance twice a year — once in spring for your AC before the humid Indiana summer hits, and once in fall for your furnace before the lake-effect winter freezes arrive. This keeps your system running efficiently year-round."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a preventative HVAC maintenance visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Fort Wayne technicians perform a full 21-point inspection: checking refrigerant levels, cleaning condenser coils, inspecting electrical connections, lubricating moving parts, testing thermostat calibration, inspecting ductwork for leaks, replacing air filters, checking gas pressure for furnaces, and ensuring your carbon monoxide detectors are working properly."
      }
    },
    {
      "@type": "Question",
      "name": "Can HVAC maintenance help lower my energy bills in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. A well-maintained HVAC system operates 15-25% more efficiently. In Fort Wayne's extreme weather — from 90°F humid summers to sub-zero winter wind chills — a maintained system uses less energy to keep your home comfortable, which directly lowers your monthly utility bills."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I skip HVAC maintenance in my Fort Wayne home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skipping maintenance leads to dirty coils, clogged filters, worn belts, and overlooked refrigerant leaks. In Fort Wayne's climate, these small issues become expensive emergency repairs fast. Most system failures we see in Allen County could have been prevented with a simple spring or fall tune-up."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer HVAC maintenance plans for Fort Wayne homeowners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our VIP Maintenance Plan includes two tune-ups per year, priority scheduling, a 15% discount on repairs, and annual filter deliveries. It's the smartest investment a Fort Wayne homeowner can make to extend the life of their furnace and AC system."
      }
    }
  ]
};

export default function HvacMaintenance() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === '1') {
      setShowThankYou(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const ContactForm = () => (
    <form
      action="https://formspree.io/f/xnjrbnkb"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="New HVAC Maintenance Request - Fort Wayne" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://hvacrepairfortwayne.com/hvac-maintenance?sent=1" />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200"
      />
      <textarea
        name="message"
        placeholder="Tell us about your HVAC system — when was your last tune-up?"
        rows={4}
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none border border-gray-200"
      />
      <button
        type="submit"
        className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
      >
        Schedule Maintenance
      </button>
    </form>
  );

  return (
    <>
      {showThankYou && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h3>
            <p className="text-gray-600 mb-6">We've received your maintenance request and will call you within 15-30 minutes to schedule your appointment.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "HVAC Maintenance Fort Wayne",
            description:
              "Professional preventative HVAC maintenance services in Fort Wayne, IN. Spring AC tune-ups, fall furnace inspections, and year-round system care.",
            provider: {
              "@type": "HVACBusiness",
              name: "HVAC Repair Fort Wayne",
              url: "https://hvacrepairfortwayne.com",
              telephone: "+126****9284",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fort Wayne",
                addressRegion: "IN",
                addressCountry: "US",
              },
            },
            areaServed: [
              "Fort Wayne",
              "Aboite",
              "Waynedale",
              "New Haven",
              "Huntertown",
              "Leo-Cedarville",
              "Grabill",
              "Monroeville",
            ],
            serviceType: "HVAC Maintenance",
          }),
        }}
      />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-xl uppercase tracking-tighter">Fort Wayne</span>
              <span className="font-bold text-red-600 leading-none text-sm uppercase tracking-[0.2em]">HVAC REPAIR</span>
            </div>
          </a>
          <a
            href={PHONE_HREF}
            className="bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-wider hover:bg-red-600 transition-all shadow-lg"
          >
            {PHONE}
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative bg-slate-50 py-16 md:py-24 overflow-hidden border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-6 rounded">
                Preventative Care in Allen County
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-slate-900">
                HVAC Maintenance <br/>
                <span className="text-red-600 italic">Fort Wayne</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg font-medium leading-relaxed">
                Keep your furnace and AC running like new through Indiana's brutal seasons. Our certified technicians provide thorough preventative maintenance to extend the life of your system and prevent costly emergency breakdowns.
              </p>
              <div className="hidden lg:grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">✅ Licensed & Insured</div>
                <div className="flex items-center gap-2">⚡ Same Day Service</div>
                <div className="flex items-center gap-2">📍 Locally Owned</div>
                <div className="flex items-center gap-2">🔧 21-Point Inspection</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Book a Tune-Up
                </h2>
                <ContactForm />
                <p className="text-slate-400 text-xs mt-4 text-center">
                  Available 7 days a week in Fort Wayne
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY MAINTENANCE MATTERS ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Don't Wait for a Breakdown</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Preventative Maintenance <br/>
                <span className="text-red-600 italic">Saves You Thousands</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Fort Wayne's weather doesn't give your HVAC system any breaks. One week it's 90°F with oppressive humidity rolling in from the Great Lakes, the next week you're scraping ice off your windshield. Your furnace and AC take a beating working through those extremes.
                </p>
                <p>
                  <span className="text-slate-900 font-bold">Regular preventative maintenance</span> catches small problems before they become expensive emergencies. A dirty condenser coil, a loose electrical connection, or a worn blower belt won't show up on your radar — but our technicians spot them every time.
                </p>
                <p>
                  Homeowners in <span className="text-slate-900 font-bold">Aboite</span>, <span className="text-slate-900 font-bold">Pine Valley</span>, and <span className="text-slate-900 font-bold">Waynedale</span> who skip tune-ups often face the consequences during peak season — when every HVAC company in Allen County is booked solid and wait times stretch to days.
                </p>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm italic text-sm text-slate-800">
                  "We've seen units that could have lasted 15+ years fail at year 8 simply because nobody changed the filters or cleaned the coils. A $150 tune-up today saves you a $4,000 replacement tomorrow. It's that simple."
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image src="/images/tech.jpg" alt="HVAC Maintenance Technician" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── MAINTENANCE CHECKLIST ── */}
        <section className="py-24 px-4 bg-slate-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] text-center block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-12 tracking-tighter uppercase leading-tight text-center">
              21-Point <span className="text-red-600 italic">Maintenance Checklist</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Spring AC Tune-Up",
                  items: [
                    "Inspect & clean condenser coils",
                    "Check refrigerant levels & pressure",
                    "Test capacitor & electrical components",
                    "Clean condensate drain line",
                    "Inspect ductwork for leaks",
                    "Calibrate thermostat",
                    "Replace air filters",
                    "Lubricate blower motor & bearings"
                  ],
                  icon: "❄️",
                  season: "Before Summer"
                },
                {
                  title: "Fall Furnace Inspection",
                  items: [
                    "Inspect heat exchanger for cracks",
                    "Clean burner assembly & igniter",
                    "Check gas pressure & connections",
                    "Test carbon monoxide detectors",
                    "Inspect flue pipe & ventilation",
                    "Verify blower & limit switch operation",
                    "Lubricate circulating fan motor",
                    "Check pilot light & flame sensor"
                  ],
                  icon: "🔥",
                  season: "Before Winter"
                },
                {
                  title: "Year-Round Benefits",
                  items: [
                    "Extended equipment lifespan",
                    "Lower monthly energy bills",
                    "Fewer emergency service calls",
                    "Improved indoor air quality",
                    "Maintained manufacturer warranty",
                    "Priority scheduling for VIP members",
                    "Peace of mind year-round",
                    "15% discount on any repairs"
                  ],
                  icon: "✅",
                  season: "All Year"
                }
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                  <div className="bg-slate-900 p-6 text-center">
                    <div className="text-4xl mb-2">{s.icon}</div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{s.title}</h3>
                    <span className="inline-block bg-red-600 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 mt-2 rounded">
                      {s.season}
                    </span>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <span className="text-red-600 mt-0.5 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Serving All of Allen County</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Aboite", "Waynedale", "Pine Valley", "Arlington Park",
                "Forest Park", "New Haven", "Huntertown", "Leo-Cedarville",
                "Grabill", "Hoagland", "Monroeville", "Woodburn"
              ].map((area) => (
                <div key={area} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  📍 {area}, IN
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 uppercase tracking-tighter">HVAC Maintenance FAQ</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((q) => (
                <details key={q.name} className="bg-white border border-gray-200 rounded-xl p-5 group cursor-pointer">
                  <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                    {q.name}
                    <span className="text-red-600 ml-2 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {q.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 bg-red-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Schedule Your Tune-Up Today</h2>
            <p className="text-xl mb-10 text-red-100">Don't wait for a mid-winter breakdown or a summer AC failure. Call now to book your preventative maintenance appointment.</p>
            <a href={PHONE_HREF} className="bg-white text-red-600 px-10 py-5 rounded-full text-xl font-black uppercase shadow-2xl hover:bg-slate-900 hover:text-white transition-all inline-block">
              📞 {PHONE}
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-900 text-slate-500 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center text-sm font-medium">
          <div>
            <p className="text-white font-bold mb-2 uppercase tracking-widest text-lg">Fort Wayne HVAC Repair</p>
            <p>Allen County, Indiana</p>
            <p className="mt-2 text-slate-400">Available 24/7</p>
          </div>
          <div className="md:text-right">
            <p>&copy; {new Date().getFullYear()} HVAC Repair Fort Wayne. All rights reserved.</p>
            <p className="mt-1">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">|</span>
              <a href="/hvac-maintenance" className="text-white hover:text-red-400 transition-colors">HVAC Maintenance</a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
