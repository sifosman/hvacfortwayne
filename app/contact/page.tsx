"use client";

import { useState, useEffect } from "react";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+126****9284";
const WHATSAPP_HREF = "https://wa.me/27658475289?text=Hi%2C%20I%20need%20HVAC%20repair%20in%20Fort%20Wayne";

const neighborhoods = [
  "Aboite", "Waynedale", "Pine Valley", "Arlington Park",
  "Forest Park", "New Haven", "Huntertown", "Leo-Cedarville",
  "Grabill", "Hoagland", "Monroeville", "Woodburn",
  "West Central", "North Highlands", "Indian Village",
  "Southwood Park", "Lakeside", "Williams-Woodland",
  "Northcrest", "Southtown", "Meadowbrook", "Canterbury",
  "Covington Dells", "Georgetown", "Glenbrook",
  "Maplewood Park", "Place des Fleurs", "St. Joseph",
  "Kingsbury", "Bloomingdale", "Yoder"
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Fort Wayne HVAC Repair",
  "description": "Contact Fort Wayne HVAC Repair for same-day AC, furnace, and heating service across Allen County, Indiana.",
  "url": "https://hvacrepairfortwayne.com/contact",
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
  "serviceType": "HVAC Repair",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Wayne",
    "addressRegion": "IN",
    "addressCountry": "US"
  }
};

export default function Contact() {
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
      <input type="hidden" name="_subject" value="New Contact Request - Fort Wayne HVAC Repair" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://hvacrepairfortwayne.com/contact?sent=1" />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200"
      />
      <select
        name="service"
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200"
      >
        <option value="">Select Service Needed</option>
        <option value="AC Repair">AC Repair</option>
        <option value="Furnace Repair">Furnace Repair</option>
        <option value="HVAC Maintenance">HVAC Maintenance</option>
        <option value="Air Quality">Air Quality</option>
        <option value="Emergency Service">Emergency Service</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Describe your HVAC issue or question"
        rows={4}
        className="rounded-lg px-4 py-3 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none border border-gray-200"
      />
      <button
        type="submit"
        className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
      >
        Send Message
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
            <p className="text-gray-600 mb-6">Thank you for contacting Fort Wayne HVAC Repair. We&apos;ll get back to you within 15-30 minutes.</p>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ── META / HEAD ── */}
      <head>
        <title>Contact Fort Wayne HVAC Repair | Same-Day Service | HVAC Repair</title>
        <meta name="description" content="Contact Fort Wayne HVAC Repair for fast, professional HVAC service across Allen County. Call (260) 786-9284 for same-day AC repair, furnace repair, and maintenance." />
        <meta name="keywords" content="contact Fort Wayne HVAC repair, HVAC Fort Wayne phone number, AC repair Fort Wayne contact, furnace repair Fort Wayne, Allen County HVAC service" />
        <link rel="canonical" href="https://hvacrepairfortwayne.com/contact" />
      </head>

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
        {/* ── HERO / CONTACT SECTION ── */}
        <section className="relative bg-slate-50 py-16 md:py-24 overflow-hidden border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-left">
              <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-6 rounded">
                24/7 Dispatch in Allen County
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter uppercase text-slate-900">
                Contact <br/>
                <span className="text-red-600 italic">Fort Wayne HVAC</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg font-medium leading-relaxed">
                Need fast HVAC service in Fort Wayne? Call us now or fill out the form and we&apos;ll respond within minutes. We serve every neighborhood in Allen County.
              </p>

              {/* ── PROMINENT PHONE DISPLAY ── */}
              <div className="bg-slate-900 rounded-2xl p-6 mb-8 shadow-xl">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Call Us Now</p>
                <a
                  href={PHONE_HREF}
                  className="text-3xl md:text-4xl font-black text-white hover:text-red-400 transition-colors block"
                >
                  📞 {PHONE}
                </a>
                <p className="text-slate-500 text-xs mt-2 font-medium">Available 24/7 — Same-Day Service</p>
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">✅ Licensed & Insured</div>
                <div className="flex items-center gap-2">⚡ Same Day Service</div>
                <div className="flex items-center gap-2">📍 Locally Owned</div>
                <div className="flex items-center gap-2">❄️ AC & Heating</div>
              </div>
            </div>
            <div className="relative lg:sticky lg:top-24">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Send Us a Message
                </h2>
                <ContactForm />
                <p className="text-slate-400 text-xs mt-4 text-center">
                  Average response time in Fort Wayne: 45 Minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREA ── */}
        <section className="py-20 px-4 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Where We Serve</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
                Service Area — <span className="text-red-600 italic">Allen County</span>
              </h2>
              <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto font-medium">
                From downtown Fort Wayne to the outer townships, we provide same-day HVAC service across all of Allen County, Indiana.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((area) => (
                <div key={area} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  📍 {area}, IN
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GOOGLE MAPS PLACEHOLDER ── */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-8 tracking-tighter uppercase leading-tight">
              Serving All of <span className="text-red-600 italic">Allen County</span>
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193286.19383791555!2d-85.24395645!3d41.0792734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815f79dbac9ef5b%3A0x4a7be9c23b26e94e!2sFort%20Wayne%2C%20IN!5e0!3m2!1sen!2sus!4v1!4m1!3e6"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fort Wayne HVAC Repair Service Area - Allen County"
                className="w-full"
              />
            </div>
            <p className="text-slate-500 text-sm mt-6 font-medium">
              Fort Wayne, IN &bull; Serving all of Allen County including New Haven, Huntertown, Leo-Cedarville, Grabill, Hoagland, Monroeville, Woodburn, and all Fort Wayne neighborhoods.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 bg-red-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">Need HVAC Help Now?</h2>
            <p className="text-xl mb-10 text-red-100">Don&apos;t wait — call our dispatch center for same-day service across Allen County.</p>
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
            <p className="mt-2 text-slate-400">Available 24/7 for HVAC Emergencies</p>
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
