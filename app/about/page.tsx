"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Fort Wayne HVAC Repair",
  description:
    "Locally owned and operated HVAC repair company serving Fort Wayne and all of Allen County, Indiana. We provide AC repair, furnace repair, and air quality services.",
  url: "https://hvacrepairfortwayne.com/about",
  telephone: PHONE,
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Local Fort Wayne Team",
  },
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
    "Pine Valley",
    "Forest Park",
    "Arlington Park",
    "New Haven",
    "Huntertown",
    "Leo-Cedarville",
    "Grabill",
    "Hoagland",
    "Monroeville",
    "Woodburn",
  ],
  serviceType: [
    "HVAC Repair",
    "AC Repair",
    "Furnace Repair",
    "Heating Repair",
    "Air Quality Services",
    "Emergency HVAC Service",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Check",
};

export default function AboutPage() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("sent") === "1") {
      setShowThankYou(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const ContactForm = () => (
    <form
      action="https://formspree.io/f/xnjrbnkb"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="New About Page Quote Request - Fort Wayne" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://hvacrepairfortwayne.com/about?sent=1" />
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
        placeholder="Tell us about your HVAC needs (e.g. AC not cooling, furnace repair, maintenance check)"
        rows={4}
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none border border-gray-200"
      />
      <button
        type="submit"
        className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
      >
        Get a Quote Today
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
            <p className="text-gray-600 mb-6">We&apos;ve received your request and will call you within 15-30 minutes.</p>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-black text-slate-900 leading-none text-xl uppercase tracking-tighter">Fort Wayne</span>
              <span className="font-bold text-red-600 leading-none text-sm uppercase tracking-[0.2em]">HVAC REPAIR</span>
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
                Locally Owned &amp; Operated
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-slate-900">
                About Fort Wayne <br/>
                <span className="text-red-600 italic">HVAC Repair</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg font-medium leading-relaxed">
                We&apos;re not a national chain. We&apos;re your neighbors — a locally owned HVAC company
                that&apos;s been keeping Fort Wayne homes comfortable through Indiana&apos;s brutal
                summers and freezing winters since 2018.
              </p>
              <div className="hidden lg:grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">✅ Licensed &amp; Insured</div>
                <div className="flex items-center gap-2">⚡ Same Day Service</div>
                <div className="flex items-center gap-2">📍 Locally Owned</div>
                <div className="flex items-center gap-2">📅 Since 2018</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Get a Free Quote
                </h2>
                <ContactForm />
                <p className="text-slate-400 text-xs mt-4 text-center">
                  Average response time in Fort Wayne: 45 Minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Your Local Fort Wayne <br/>
                <span className="text-red-600 italic">HVAC Experts</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Fort Wayne HVAC Repair is a <span className="text-slate-900 font-bold">family-owned and operated</span> business
                  serving Allen County and the surrounding areas. We understand Fort Wayne&apos;s unique weather challenges
                  because we live through them too — the humidity of July, the lake-effect snow of January, and everything in between.
                </p>
                <p>
                  Our technicians are <span className="text-slate-900 font-bold">licensed, insured, and background-checked</span>.
                  Every member of our team calls Fort Wayne home. We take pride in showing up on time,
                  diagnosing accurately, and fixing the problem right the first time — not selling you
                  equipment you don&apos;t need.
                </p>
                <p>
                  Whether you live in a historic home in <span className="text-slate-900 font-bold">West Central</span>,
                  a modern build in <span className="text-slate-900 font-bold">Aboite</span>, or a ranch in <span className="text-slate-900 font-bold">Waynedale</span>,
                  we treat your home like it&apos;s our own. No upselling. No hidden fees. Just honest HVAC service.
                </p>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm italic text-sm text-slate-800">
                  &ldquo;We don&apos;t believe in one-size-fits-all HVAC service. Every Fort Wayne home is different —
                  from the age of the ductwork to the quirks of the electrical panel. We diagnose the problem,
                  explain it clearly, and let you decide. That&apos;s the Fort Wayne way.&rdquo;
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image src="/images/tech.jpg" alt="Fort Wayne HVAC Technician" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-24 px-4 bg-slate-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                What We Stand For in <span className="text-red-600 italic">Allen County</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Honest Diagnoses",
                  desc: "We don't recommend repairs you don't need. We explain what's wrong, show you the evidence, and give you a clear upfront price before any work begins. No surprise charges — ever.",
                  icon: "🔍",
                  image: "/images/ac.png"
                },
                {
                  title: "Quality Workmanship",
                  desc: "Every repair comes with a warranty because we stand behind our work. We use OEM parts, follow manufacturer specifications, and take the time to do the job right so you don't have to call us back next week.",
                  icon: "🏆",
                  image: "/images/tech.jpg"
                },
                {
                  title: "Community First",
                  desc: "We're proud to support Fort Wayne — from sponsoring local youth sports to donating services to families in need. When you hire us, you're supporting a local business that reinvests right back into Allen County.",
                  icon: "🤝",
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST SIGNALS ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Trust Signals</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Why Fort Wayne Homeowners <br/>
                <span className="text-red-600 italic">Trust Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Licensed & Insured",
                  desc: "Fully licensed in the state of Indiana with comprehensive general liability and workers' compensation insurance. Your property is protected every time we step through the door."
                },
                {
                  title: "Same-Day Service",
                  desc: "When your AC dies on a 95-degree day or your furnace goes out during a winter freeze, we answer the call. We dispatch to Fort Wayne homes within hours, not days."
                },
                {
                  title: "Upfront Pricing",
                  desc: "We give you a complete price before any work starts. No hourly surprises, no hidden trip charges, no &lsquo;we found more problems&rsquo; middle-of-the-job upsells."
                },
                {
                  title: "100% Satisfaction Guarantee",
                  desc: "If you're not happy with our service, we make it right. Period. We've built our reputation on word-of-mouth in Allen County, and every job reflects that."
                },
                {
                  title: "Certified Technicians",
                  desc: "Every technician is EPA-certified, NATE-trained, and undergoes continuous education on the latest HVAC systems. From Carrier to Trane to Lennox — we know them all."
                },
                {
                  title: "24/7 Emergency Service",
                  desc: "HVAC emergencies don't follow a 9-to-5 schedule. We offer round-the-clock emergency repair service across Fort Wayne. A real person answers — not a call center."
                }
              ].map((t) => (
                <div key={t.title} className="bg-slate-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{t.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY LOCALS CHOOSE US ── */}
        <section className="py-24 px-4 bg-slate-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200 order-2 md:order-1">
              <Image src="/images/air-quality.jpg" alt="Fort Wayne Home HVAC Service" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Why Locals Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                The Fort Wayne Advantage <br/>
                <span className="text-red-600 italic">You Can Feel</span>
              </h2>
              <div className="mt-8 space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Fort Wayne isn&apos;t just another market to us — it&apos;s our home. We know the neighborhoods,
                  we know the housing stock, and we know exactly what goes wrong with HVAC systems in
                  Allen County&apos;s unique climate. That local knowledge means we diagnose faster and
                  fix it right the first time.
                </p>
                <p>
                  Unlike the big national chains that route your call through a distant call center,
                  you talk directly to our Fort Wayne-based team. Our dispatch center is right here
                  in Allen County, so when you call, you&apos;re speaking to someone who understands
                  the difference between a &ldquo;normal&rdquo; furnace noise and one that needs immediate attention.
                </p>
                <p>
                  We also stock the most common parts for homes in our area — from the capacitors that
                  fail in summer heat to the ignitors that crack in winter cold. That means we rarely
                  have to order parts and come back. We fix it the same day, every time.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Fast Dispatch",
                    "Local Team",
                    "No Upsells",
                    "Warranty-Backed",
                    "Family Owned"
                  ].map((tag) => (
                    <div key={tag} className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider border border-red-100">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AREAS ── */}
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

        {/* ── CTA ── */}
        <section className="py-24 px-4 bg-red-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Ready to Work With a Local Team?</h2>
            <p className="text-xl mb-10 text-red-100">Experience the Fort Wayne difference. Call us today for honest, professional HVAC service.</p>
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
            <p className="mt-2 text-slate-400">Available 24/7 — Locally Owned &amp; Operated</p>
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
