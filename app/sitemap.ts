import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hvacrepairfortwayne.com";
  const now = new Date().toISOString();

  const routes = [
    "",
    "/fort-wayne-hvac-guide/",
    "/hvac-cost-guide-fort-wayne/",
    "/ac-repair-cost-fort-wayne/",
    "/hvac-maintenance-cost-fort-wayne/",
    "/ductless-mini-split-cost-fort-wayne/",
    "/heat-pumps-fort-wayne/",
    "/allen-county-energy-savings/",
    "/ac-repair-fort-wayne/",
    "/furnace-repair-fort-wayne/",
    "/hvac-maintenance-fort-wayne/",
    "/emergency-hvac-fort-wayne/",
    "/ac-installation-fort-wayne/",
    "/indoor-air-quality-fort-wayne/",
    "/heat-pump-installation-fort-wayne/",
    "/aboite/",
    "/waynedale/",
    "/pine-valley/",
    "/forest-park/",
    "/arlington-park/",
    "/new-haven/",
    "/huntertown/",
    "/leo-cedarville/",
    "/grabill/",
    "/hoagland/",
    "/monroeville/",
    "/woodburn/",
    "/blog/",
    "/blog/lake-effect-humidity-ac-compressors/",
    "/blog/winter-furnace-survival-fort-wayne/",
    "/blog/real-cost-running-ac-fort-wayne/",
    "/blog/replace-15-year-old-furnace/",
    "/blog/basement-musty-humidity-hvac/",
    "/blog/heat-pump-reality-check/",
    "/blog/allen-county-energy-rebates-2026/",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
