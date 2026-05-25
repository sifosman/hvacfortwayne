import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HVAC Repair Fort Wayne | Expert Emergency AC & Furnace Service",
  description:
    "Fast, reliable HVAC repair in Fort Wayne, IN. Serving Aboite, Waynedale, and more. 24/7 emergency air conditioning and heating services. Call for a free quote.",
  keywords:
    "hvac repair fort wayne, ac repair fort wayne in, furnace repair fort wayne, heating and cooling fort wayne, hvac service fort wayne, emergency ac repair fort wayne",
  alternates: { canonical: "https://hvacrepairfortwayne.com/" },
  openGraph: {
    title: "HVAC Repair Fort Wayne | Expert Emergency AC & Furnace Service",
    description:
      "Fast, reliable HVAC repair in Fort Wayne, IN. Serving Aboite, Waynedale, and more. 24/7 emergency air conditioning and heating services.",
    url: "https://hvacrepairfortwayne.com/",
    siteName: "HVAC Repair Fort Wayne",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
