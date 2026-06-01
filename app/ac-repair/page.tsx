"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

const acRepairSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "AC Repair Fort Wayne",
  "description": "Professional AC repair services in Fort Wayne, Indiana. Same-day service for air conditioning breakdowns, refrigerant leaks, frozen coils, and more. Serving Allen County.",
  "url": "https://hvacrepairfortwayne.com/ac-repair",
  "telephone": PHONE,
  "areaServed": [
    {
      "@type": "City",
      "name": "Fort Wayne",
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "County",
        "value": "Allen County"
      }
    }
  ],
  "serviceType": "Air Conditioning Repair",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "AC Repair",
      "description": "Expert air conditioning repair for residential homes in Fort Wayne. We fix compressors, capacitors, refrigerant leaks, frozen coils, and electrical issues."
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my AC needs repair in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common signs include warm air blowing from vents, weak airflow, unusual noises like grinding or squealing, frozen refrigerant lines, water pooling around the unit, and a sudden spike in your electric bill. The high humidity in Fort Wayne (often 70-90% in July and August) makes these problems worse and harder to ignore."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my AC freeze up in Fort Wayne's humidity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fort Wayne's summer humidity creates the perfect conditions for AC coil freeze-ups. When humid air passes over cold evaporator coils, excess moisture condenses and freezes, forming a layer of ice that restricts airflow. This is often caused by dirty air filters, low refrigerant levels, or blocked condensate drain lines — all common issues in older homes across neighborhoods like Forest Park and West Central."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an AC repair take in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most standard AC repairs in Fort Wayne take 1-3 hours from the time our technician arrives. Simple fixes like capacitor replacements or thermostat issues can be resolved in under an hour. Major repairs like compressor replacements may require up to a full day. We stock common parts for the most popular brands (Carrier, Trane, Lennox, Rheem) so we can fix most issues in a single visit."
      }
    },
    {
      "@type": "Question",
      "name": "Should I repair or replace my old AC unit in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your AC unit is over 12-15 years old and needs a major repair (compressor or coil replacement), replacement is usually more cost-effective. Newer units handle Indiana humidity much better and can lower your electric bill by 20-40%. However, if the repair is minor and your system is well-maintained, repairing is a smart short-term solution. We give honest advice — no pressure to replace if a simple fix will get you through the summer."
      }
    }
  ]
};

export default function ACRepair() {
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
      <input type="hidden" name="_subject" value="New AC Repair Request - Fort Wayne" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://hvacrepairfortwayne.com/ac-repair?sent=1" />
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
        placeholder="Describe your AC issue (e.g. AC not cooling, unit frozen, weird noises, water leaking)"
        rows={4}
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none border border-gray-200"
      />
      <button
        type="submit"
        className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
      >
        Request AC Repair Now
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AC Repair Request Received!</h3>
            <p className="text-gray-600 mb-6">We've received your AC repair request and will call you within 15-30 minutes.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acRepairSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── META / HEAD ── */}
      <head>
        <title>AC Repair Fort Wayne | Same-Day Air Conditioning Service | HVAC Repair</title>
        <meta name="description" content="Professional AC repair in Fort Wayne, IN. Expert diagnosis and repair for all AC brands. Same-day service for broken air conditioners, frozen coils, refrigerant leaks, and more. Call (260) 786-9284." />
        <meta name="keywords" content="AC repair Fort Wayne, air conditioning repair Fort Wayne, AC service Fort Wayne, HVAC repair Fort Wayne Indiana, emergency AC repair Fort Wayne" />
        <link rel="canonical" href="https://hvacrepairfortwayne.com/ac-repair" />
      </head>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-xl uppercase tracking-tighter">Fort Wayne</span>
              <span className="font-bold text-red-600 leading-none text-sm uppercase tracking-[0.2em]">AC REPAIR</span>
            </div>
          </div>
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
                Same-Day AC Dispatch in Allen County
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-slate-900">
                AC Repair <br/>
                <span className="text-red-600 italic">Fort Wayne</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg font-medium leading-relaxed">
                When the Indiana humidity strikes and your AC quits, you need fast, reliable help. We provide same-day air conditioning repair across all of Fort Wayne — from Aboite to Waynedale.
              </p>
              <div className="hidden lg:grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">✅ Licensed & Insured</div>
                <div className="flex items-center gap-2">⚡ Same Day Service</div>
                <div className="flex items-center gap-2">📍 Locally Owned</div>
                <div className="flex items-center gap-2">❄️ AC Specialists</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Get AC Repair Now
                </h2>
                <ContactForm />
                <p className="text-slate-400 text-xs mt-4 text-center">
                  Average response time in Fort Wayne: 45 Minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── NON-COMMODITY: LOCAL AC CHALLENGES ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">The Fort Wayne AC Problem</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Indiana Humidity Is Brutal <br/>
                <span className="text-red-600 italic">On Your AC System</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Fort Wayne sits in the <span className="text-slate-900 font-bold">Maumee River Valley</span>, which acts like a bowl for humidity rolling in from Lake Michigan and Lake Erie. During July and August, humidity levels routinely hit <span className="text-slate-900 font-bold">80-90%</span>, forcing your AC system to work overtime just to keep you comfortable.
                </p>
                <p>
                  This relentless moisture causes three major problems: <span className="text-slate-900 font-bold">frozen evaporator coils</span> from condensate buildup, <span className="text-slate-900 font-bold">clogged drain lines</span> that flood your basement or crawlspace, and <span className="text-slate-900 font-bold">overworked compressors</span> that fail at the worst possible time — during a heatwave.
                </p>
                <p>
                  In older Fort Wayne neighborhoods like <span className="text-slate-900 font-bold">West Central</span>, <span className="text-slate-900 font-bold">North Highlands</span>, and <span className="text-slate-900 font-bold">Forest Park</span>, homes have undersized ductwork and aging electrical panels that can't handle modern high-efficiency AC units. We see failed capacitors, burned-out contactors, and tripped breakers constantly during the first 90-degree day of the season.
                </p>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm italic text-sm text-slate-800">
                  "The number one call we get every June is 'My AC was working fine yesterday, and now it's blowing warm air.' Nine times out of ten, it's a bad capacitor or a frozen coil caused by our Indiana humidity. We carry those parts on the truck and can have you cooled down the same day."
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image src="/images/ac.png" alt="AC Unit Repair Fort Wayne" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── AC REPAIR SERVICES ── */}
        <section className="py-24 px-4 bg-slate-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">What We Fix</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                AC Repair Services in <span className="text-red-600 italic">Fort Wayne</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Emergency AC Repair",
                  desc: "When your AC dies on a 95-degree day with 80% humidity, you can't wait. We offer same-day emergency service for complete breakdowns, electrical failures, and compressor issues.",
                  icon: "🚨",
                  image: "/images/ac.png"
                },
                {
                  title: "AC Tune-Up & Maintenance",
                  desc: "Prevent summer breakdowns with our comprehensive AC tune-up. We clean coils, check refrigerant levels, inspect capacitors, test airflow, and clear drain lines before the heat hits.",
                  icon: "🔧",
                  image: "/images/tech.jpg"
                },
                {
                  title: "Ductless & Window Units",
                  desc: "Many Fort Wayne homes rely on ductless mini-splits or window units for older additions and sunrooms. We service, repair, and install all types of ductless AC systems.",
                  icon: "❄️",
                  image: "/images/furnace.jpg"
                }
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                  <div className="aspect-video relative transition-all duration-500 bg-slate-200">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{s.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
                    <a href="/ac-repair" className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-slate-900 transition-colors">
                      Request Quote →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AREAS ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest">AC Repair Coverage — Allen County</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 uppercase tracking-tighter">AC Repair FAQ — Fort Wayne</h2>
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
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">AC Quit On You?</h2>
            <p className="text-xl mb-10 text-red-100">Don't sweat through the Fort Wayne humidity. Call our dispatch center for same-day AC repair.</p>
            <a href={PHONE_HREF} className="bg-white text-red-600 px-10 py-5 rounded-full text-xl font-black uppercase shadow-2xl hover:bg-slate-900 hover:text-white transition-all inline-block">
              📞 {PHONE}
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-900 text-slate-500 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center text-sm font-medium">
          <div>
            <p className="text-white font-bold mb-2 uppercase tracking-widest text-lg">Fort Wayne AC Repair</p>
            <p>Allen County, Indiana</p>
            <p className="mt-2 text-slate-400">Available 24/7 for AC Emergencies</p>
          </div>
          <div className="md:text-right">
            <p>&copy; {new Date().getFullYear()} HVAC Repair Fort Wayne. All rights reserved.</p>
            <p className="mt-1">Built with 🛠️ for Fort Wayne homeowners.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
