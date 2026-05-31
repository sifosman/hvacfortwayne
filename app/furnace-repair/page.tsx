"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+126****9284";

const furnaceSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Furnace Repair Fort Wayne",
  description:
    "Professional furnace repair, heating service, and emergency furnace replacement in Fort Wayne, IN and surrounding Allen County areas.",
  url: "https://hvacrepairfortwayne.com/furnace-repair",
  telephone: "+126****9284",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Wayne",
    addressRegion: "IN",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0793,
    longitude: -85.1394,
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
  serviceType: [
    "Furnace Repair",
    "Heating Repair",
    "Emergency Furnace Service",
    "Furnace Replacement",
    "Furnace Maintenance",
    "Heat Pump Repair",
    "Boiler Repair",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Check",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you get a furnace repair technician to my Fort Wayne home in winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During Indiana's brutal winter freezes, we prioritize furnace emergencies. We aim to have a technician at your Fort Wayne home — from Aboite to Waynedale — within 2-4 hours, 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my furnace blowing cold air in my Fort Wayne home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Fort Wayne, common causes include a faulty pilot light or ignition sensor, a dirty flame sensor, or a frozen condensate line. In older homes near Forest Park, drafty ductwork can also cause cold air issues even when the furnace is running properly."
      }
    },
    {
      "@type": "Question",
      "name": "How can I lower my heating bill during Fort Wayne winters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular maintenance is essential. Replacing your furnace filter monthly, sealing drafty windows, and having a professional tune-up can improve efficiency by 20%. We also recommend checking your attic insulation — many Fort Wayne homes lose significant heat through poorly insulated attics."
      }
    },
    {
      "@type": "Question",
      "name": "At what temperature should I call for emergency furnace repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your furnace stops working and outdoor temperatures drop below 20°F, call immediately. Pipes can freeze within hours in Fort Wayne winters. Also call if you smell gas, hear strange banging noises, or see soot around your furnace."
      }
    }
  ]
};

export default function FurnaceRepairPage() {
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
      <input type="hidden" name="_subject" value="New Furnace Repair Quote Request - Fort Wayne" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://hvacrepairfortwayne.com/furnace-repair?sent=1" />
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
        placeholder="Describe your furnace issue (e.g. no heat, strange noises, pilot light out, not turning on)"
        rows={4}
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none border border-gray-200"
      />
      <button
        type="submit"
        className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
      >
        Request Furnace Service Now
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
            <p className="text-gray-600 mb-6">We've received your furnace repair request and will call you within 15-30 minutes.</p>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(furnaceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-xl uppercase tracking-tighter">Fort Wayne</span>
              <span className="font-bold text-red-600 leading-none text-sm uppercase tracking-[0.2em]">FURNACE REPAIR</span>
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
                24/7 Emergency Service in Allen County
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-slate-900">
                Furnace Repair <br/>
                <span className="text-red-600 italic">Fort Wayne</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg font-medium leading-relaxed">
                When the Indiana winter wind howls and temperatures plummet, you need a furnace you can trust. We provide same-day emergency furnace repair across Fort Wayne, 24 hours a day, 7 days a week.
              </p>
              <div className="hidden lg:grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">✅ Licensed & Insured</div>
                <div className="flex items-center gap-2">⚡ Same Day Service</div>
                <div className="flex items-center gap-2">📍 Locally Owned</div>
                <div className="flex items-center gap-2">🔥 Furnace Specialists</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Emergency Furnace Service
                </h2>
                <ContactForm />
                <p className="text-slate-400 text-xs mt-4 text-center">
                  Average response time in Fort Wayne: 45 Minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCAL WINTER CHALLENGES ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">The Fort Wayne Winter Threat</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Why Indiana Winters Destroy <br/>
                <span className="text-red-600 italic">Cheap Furnaces</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Fort Wayne winters are no joke. With lake-effect snow from the <span className="text-slate-900 font-bold">Great Lakes</span> and wind chills that regularly drop below -20°F, your furnace works harder here than almost anywhere else in the Midwest. When the temperature drops overnight, a failing furnace isn't just uncomfortable — it's dangerous.
                </p>
                <p>
                  In neighborhoods like <span className="text-slate-900 font-bold">Aboite</span>, <span className="text-slate-900 font-bold">Pine Valley</span>, and <span className="text-slate-900 font-bold">Waynedale</span>, we regularly see furnaces that haven't been serviced in years. Indiana's rapid temperature swings — 60°F one day, single digits the next — cause thermal expansion and contraction that cracks heat exchangers and breaks blower motors.
                </p>
                <p>
                  Older homes in areas like <span className="text-slate-900 font-bold">Forest Park</span> and <span className="text-slate-900 font-bold">Arlington Park</span> often have outdated furnaces that struggle to keep up with modern efficiency standards. If your furnace was installed before 2010, you're likely paying 30-50% more in heating costs than necessary.
                </p>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm italic text-sm text-slate-800">
                  "The most common mistake we see in Allen County is homeowners ignoring a furnace that's been cycling on and off too frequently. That short-cycling destroys your blower motor and heat exchanger. By the time you hear the loud bang, it's already an emergency. Don't wait — call at the first sign of trouble."
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image src="/images/furnace.jpg" alt="Furnace Repair in Fort Wayne" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── FURNACE ISSUES ── */}
        <section className="py-24 px-4 bg-slate-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Common Problems</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase">Signs Your Furnace Needs Repair</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "No Heat / Cold Air",
                  desc: "If your furnace is running but blowing cold air, it could be a faulty ignitor, clogged filter, or a broken thermocouple. In Fort Wayne's freezing temps, this is a top emergency call.",
                  icon: "🥶",
                  image: "/images/furnace.jpg"
                },
                {
                  title: "Strange Noises",
                  desc: "Banging, screeching, or popping sounds from your furnace signal serious issues — from a cracked heat exchanger to a failing blower motor. Never ignore furnace noises in winter.",
                  icon: "🔊",
                  image: "/images/tech.jpg"
                },
                {
                  title: "Pilot Light Issues",
                  desc: "A yellow or flickering pilot light often means a carbon monoxide risk or gas flow issue. If your pilot light keeps going out, you need immediate professional service.",
                  icon: "🔥",
                  image: "/images/ac.png"
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
                    <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-slate-900 transition-colors">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Serving Allen County for Furnace Repair</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 uppercase tracking-tighter">Furnace Repair FAQ</h2>
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
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Furnace Broke Down?</h2>
            <p className="text-xl mb-10 text-red-100">Don't freeze tonight. Call our dispatch center for same-day emergency furnace repair.</p>
            <a href={PHONE_HREF} className="bg-white text-red-600 px-10 py-5 rounded-full text-xl font-black uppercase shadow-2xl hover:bg-slate-900 hover:text-white transition-all inline-block">
              📞 {PHONE}
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-900 text-slate-500 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center text-sm font-medium">
          <div>
            <p className="text-white font-bold mb-2 uppercase tracking-widest text-lg">Fort Wayne Furnace Repair</p>
            <p>Allen County, Indiana</p>
            <p className="mt-2 text-slate-400">Available 24/7 for emergencies</p>
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
