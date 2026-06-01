import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HVAC Repair Fort Wayne | Expert Emergency AC & Furnace Service",
  description:
    "Fast, reliable HVAC repair in Fort Wayne, IN. Serving Aboite, Waynedale, Pine Valley, Forest Park, New Haven, Huntertown, and all of Allen County. 24/7 emergency air conditioning and heating services. Call (260) 786-9284 for a free quote.",
  keywords:
    "hvac repair fort wayne, ac repair fort wayne in, furnace repair fort wayne, heating and cooling fort wayne, hvac service fort wayne, emergency ac repair fort wayne, heat pump installation fort wayne, indoor air quality fort wayne",
  alternates: { canonical: "https://hvacrepairfortwayne.com/" },
  openGraph: {
    title: "HVAC Repair Fort Wayne | Expert Emergency AC & Furnace Service",
    description:
      "Fast, reliable HVAC repair in Fort Wayne, IN. Serving Aboite, Waynedale, and more. 24/7 emergency air conditioning and heating services.",
    url: "https://hvacrepairfortwayne.com/",
    siteName: "HVAC Repair Fort Wayne",
    type: "website",
    images: [{ url: "https://hvacrepairfortwayne.com/images/tech.jpg", width: 1200, height: 800 }],
  },
  other: {
    "google-site-verification": "YOUR_VERIFICATION_CODE", // TODO: Replace with real GSC code
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "HVAC Repair Fort Wayne",
  description:
    "Professional HVAC repair, furnace service, and air conditioning solutions in Fort Wayne, IN and surrounding Allen County areas.",
  url: "https://hvacrepairfortwayne.com",
  telephone: "+12607869284",
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
    "AC Repair",
    "Furnace Repair",
    "HVAC Maintenance",
    "Emergency HVAC Service",
    "Indoor Air Quality",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Check",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HM7GLSJ9FQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HM7GLSJ9FQ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/27658475289?text=Hi%2C%20I%20need%20HVAC%20repair%20in%20Fort%20Wayne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
