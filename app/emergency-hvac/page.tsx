"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+126****9284";
const WHATSAPP_HREF = "https://wa.me/27658475289?text=Hi%2C%20I%20need%20emergency%20HVAC%20service%20in%20Fort%20Wayne";

const emergencySchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Emergency HVAC Service Fort Wayne",
  description:
    "24/7 emergency HVAC repair service in Fort Wayne, IN. Available around the clock for AC breakdowns, furnace failures, and heating emergencies. Serving all of Allen County.",
  url: "https://hvacrepairfortwayne.com/emergency-hvac",
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
    "Emergency HVAC Service",
    "Emergency AC Repair",
    "Emergency Furnace Repair",
    "24/7 HVAC Service",
    "Heating Emergency",
    "Cooling Emergency",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Check",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What qualifies as an HVAC emergency in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any situation that threatens your comfort, safety, or property is an HVAC emergency. This includes: complete AC failure during 90°F+ heatwaves (common in Fort Wayne's humid summers), furnace breakdown when temps drop below 20°F, gas smells or carbon monoxide concerns, refrigerant leaks, water flooding from frozen coils or drain lines, and any electrical issues like sparking or tripped breakers. If you're unsure, call us — we'd rather check it out than have you go without heat or cooling."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you respond to an emergency HVAC call in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prioritize emergency calls above all other service. Our standard response time in Fort Wayne is 45-90 minutes, even in the middle of the night. During peak seasons — Indiana's July heatwaves and January polar vortex events — we staff extra crews to ensure we can reach every home in Allen County, from Aboite to Waynedale, as quickly as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge extra for after-hours or weekend emergency HVAC service in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do not charge extra for emergency dispatch or after-hours calls. Unlike many HVAC companies that add 50-100% markup for nights, weekends, or holidays, we maintain flat, transparent pricing 24/7. You pay the same rate whether we show up at 2 PM on a Tuesday or 2 AM on a Sunday. We believe emergency service shouldn't come with a penalty."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do while waiting for emergency HVAC service in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your AC is out in summer: close all blinds and curtains, avoid using heat-generating appliances like ovens, and stay on the lowest level of your home where it's naturally cooler. If your furnace is out in winter: shut off exposed water pipes to prevent freezing, open cabinet doors under sinks to let warm air circulate, and layer up. If you smell gas or hear strange sounds from your HVAC unit, leave the house and wait for the technician outside. Never attempt DIY repairs on gas or electrical components."
      }
    },
    {
      "@type": "Question",
      "name": "Do you service both AC and furnace emergencies in Fort Wayne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our technicians are fully trained and equipped to handle both air conditioning and heating emergencies. We carry common replacement parts for all major brands — Carrier, Trane, Lennox, Rheem, Goodman, and more — so we can complete most repairs in a single visit, whether it's a frozen AC coil in July or a cracked heat exchanger in January."
      }
    },
    {
      "@type": "Question",
      "name": "Is emergency HVAC service available all over Allen County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We cover all of Allen County including Fort Wayne, Aboite, Waynedale, Pine Valley, Arlington Park, Forest Park, New Haven, Huntertown, Leo-Cedarville, Grabill, Hoagland, Monroeville, and Woodburn. No matter where you are in Allen County, our emergency crews can reach you. We also serve select areas of surrounding counties for urgent calls."
      }
    },
    {
      "@type": "Question",
      "name": "What payment do you accept for emergency HVAC repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept cash, all major credit cards, and personal checks. We do not require payment upfront for emergency service — you pay after the repair is complete and your system is running. We also offer financing options for larger emergency repairs like full furnace or AC replacements."
      }
    }
  ]
};

export default function EmergencyHVACPage() {
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
      <input type="hidden" name="_subject" value="New Emergency HVAC Request - Fort Wayne" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://hvacrepairfortwayne.com/emergency-hvac?sent=1" />
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
        placeholder="Describe your emergency (e.g. AC dead in 95° heat, furnace stopped working, water leaking, gas smell)"
        rows={4}
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none border border-gray-200"
      />
      <button
        type="submit"
        className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
      >
        Send Emergency Request
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency Request Received!</h3>
            <p className="text-gray-600 mb-6">We've received your emergency request. A technician will call you within 15-30 minutes. Stay safe and we'll be there soon.</p>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── META / HEAD ── */}
      <head>
        <title>Emergency HVAC Service Fort Wayne | 24/7 Emergency AC & Furnace Repair | HVAC Repair</title>
        <meta name="description" content="24/7 emergency HVAC service in Fort Wayne, IN. Around-the-clock AC repair, furnace repair, and heating service. Same-day response for all HVAC emergencies. Call (260) 786-9284." />
        <meta name="keywords" content="emergency hvac service fort wayne, emergency ac repair fort wayne, emergency furnace repair fort wayne, 24 hour hvac fort wayne, after hours hvac fort wayne, hvac emergency fort wayne indiana" />
        <link rel="canonical" href="https://hvacrepairfortwayne.com/emergency-hvac" />
      </head>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-xl uppercase tracking-tighter">Fort Wayne</span>
              <span className="font-bold text-red-600 leading-none text-sm uppercase tracking-[0.2em]">EMERGENCY HVAC</span>
            </div>
          </div>
          <a
            href={PHONE_HREF}
            className="bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-wider hover:bg-red-600 transition-all shadow-lg animate-pulse"
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
                🚨 24/7 Emergency Dispatch — Allen County
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-slate-900">
                Emergency HVAC <br/>
                <span className="text-red-600 italic">Service Fort Wayne</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg font-medium leading-relaxed">
                When your AC dies in a 95° heatwave or your furnace fails during a polar vortex, every minute counts. We provide 24/7 emergency HVAC service across Fort Wayne — 365 days a year, including holidays and weekends.
              </p>
              <div className="hidden lg:grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">✅ Licensed & Insured</div>
                <div className="flex items-center gap-2">⚡ 24/7 Dispatch</div>
                <div className="flex items-center gap-2">📍 Locally Owned</div>
                <div className="flex items-center gap-2">🚨 Response in 45-90 Min</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  24/7 Emergency Service
                </h2>
                <ContactForm />
                <p className="text-slate-400 text-xs mt-4 text-center">
                  Average emergency response time in Fort Wayne: 45-90 Minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 24/7 EMPHASIS ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Available Around the Clock</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                We Never Close. <span className="text-red-600 italic">Ever.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "24/7 Availability",
                  desc: "Day or night, weekday or holiday — our emergency dispatch center is always staffed. Fort Wayne weather doesn't take days off, and neither do we. Call anytime and speak directly to a live dispatcher.",
                  icon: "🕐",
                },
                {
                  title: "Same-Day Arrival",
                  desc: "We understand that an HVAC emergency can't wait until tomorrow. Our technicians are strategically positioned across Allen County to reach you fast. Most emergency calls are answered within 90 minutes.",
                  icon: "🚚",
                },
                {
                  title: "No Extra Fees",
                  desc: "Unlike most HVAC companies, we don't charge overtime, after-hours, or holiday fees. You pay the same fair price whether we arrive at noon or midnight. Emergency service shouldn't cost extra.",
                  icon: "💰",
                },
              ].map((s) => (
                <div key={s.title} className="bg-slate-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="text-5xl mb-6">{s.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY EMERGENCY SERVICE MATTERS IN FORT WAYNE ── */}
        <section className="py-24 px-4 bg-slate-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Why Every Minute Matters</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Fort Wayne Weather Doesn't <br/>
                <span className="text-red-600 italic">Wait For Anyone</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  In Fort Wayne, we experience some of the most extreme weather in the Midwest. Summer heat indexes can exceed <span className="text-slate-900 font-bold">105°F</span> with humidity rolling in from the Great Lakes. Winter wind chills regularly drop below <span className="text-slate-900 font-bold">-20°F</span> from lake-effect snow bands. When your HVAC system fails in these conditions, it's more than an inconvenience — it's a safety risk.
                </p>
                <p>
                  A broken AC in July can push indoor temperatures above <span className="text-slate-900 font-bold">90°F</span> within hours, creating dangerous conditions for elderly residents, infants, and pets. A failed furnace in January can cause pipes to freeze and burst in as little as <span className="text-slate-900 font-bold">2-3 hours</span>, leading to thousands in water damage.
                </p>
                <p>
                  In neighborhoods like <span className="text-slate-900 font-bold">Aboite</span>, <span className="text-slate-900 font-bold">Forest Park</span>, and <span className="text-slate-900 font-bold">Pine Valley</span>, many homes have aging HVAC systems that are more prone to catastrophic failure during peak demand. That's why we maintain a 24/7 emergency fleet ready to deploy at a moment's notice.
                </p>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm italic text-sm text-slate-800">
                  "Every summer and winter, we get the same call: 'My system was working fine an hour ago, and now it's completely dead.' In Indiana's extreme weather, components fail fast. We carry parts for every major brand on our trucks so we can get you back online in a single visit — day or night."
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image src="/images/tech.jpg" alt="Emergency HVAC Service in Fort Wayne" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── EMERGENCY SERVICES ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Emergency Services</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                24/7 HVAC Emergency Services <br/>
                <span className="text-red-600 italic">in Fort Wayne</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Emergency AC Repair",
                  desc: "Complete AC breakdown, frozen coils, refrigerant leaks, failed compressors, bad capacitors, and electrical failures. We handle all AC emergencies 24/7.",
                  icon: "❄️",
                  image: "/images/ac.png"
                },
                {
                  title: "Emergency Furnace Repair",
                  desc: "No heat, cracked heat exchanger, pilot light out, gas smell, carbon monoxide concerns, broken blower motor, or frozen condensate lines. We'll have your heat back on fast.",
                  icon: "🔥",
                  image: "/images/furnace.jpg"
                },
                {
                  title: "Emergency HVAC Replacement",
                  desc: "If your system is beyond repair, we can perform emergency replacement of furnaces, AC units, and heat pumps. Same-brand replacements completed same day in most cases.",
                  icon: "🛠️",
                  image: "/images/tech.jpg"
                }
              ].map((s) => (
                <div key={s.title} className="bg-slate-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                  <div className="aspect-video relative transition-all duration-500 bg-slate-200">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{s.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
                    <a href={PHONE_HREF} className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-slate-900 transition-colors">
                      Call Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 24/7 SERVICE HIGHLIGHTS ── */}
        <section className="py-20 px-4 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 tracking-tight">
              24/7 Emergency Service — Fort Wayne
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "365", label: "Days a Year" },
                { num: "24/7", label: "Dispatch Available" },
                { num: "45-90", label: "Min Response Time" },
                { num: "4.9★", label: "187+ Reviews" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <div className="text-4xl font-black mb-2">{s.num}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-red-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AREAS ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Emergency HVAC Coverage — Allen County</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Aboite", "Waynedale", "Pine Valley", "Arlington Park",
                "Forest Park", "New Haven", "Huntertown", "Leo-Cedarville",
                "Grabill", "Hoagland", "Monroeville", "Woodburn"
              ].map((area) => (
                <div key={area} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  🚨 {area}, IN
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 uppercase tracking-tighter">Emergency HVAC FAQ — Fort Wayne</h2>
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
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">HVAC Emergency?</h2>
            <p className="text-xl mb-10 text-red-100">Don't wait — call our 24/7 dispatch center. A technician will be on the way within minutes.</p>
            <a href={PHONE_HREF} className="bg-white text-red-600 px-10 py-5 rounded-full text-xl font-black uppercase shadow-2xl hover:bg-slate-900 hover:text-white transition-all inline-block">
              📞 {PHONE}
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-900 text-slate-500 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center text-sm font-medium">
          <div>
            <p className="text-white font-bold mb-2 uppercase tracking-widest text-lg">Fort Wayne Emergency HVAC</p>
            <p>Allen County, Indiana</p>
            <p className="mt-2 text-slate-400">24/7 Emergency Service Available</p>
          </div>
          <div className="md:text-right">
            <p>&copy; {new Date().getFullYear()} HVAC Repair Fort Wayne. All rights reserved.</p>
            <p className="mt-1">Built with 🛠️ for Fort Wayne homeowners.</p>
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
