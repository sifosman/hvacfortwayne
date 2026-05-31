import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hvacrepairfortwayne.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/ac-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/furnace-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hvac-maintenance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/emergency-hvac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
