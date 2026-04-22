import type { MetadataRoute } from "next";

const BASE = "https://beyond22.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/patriot-alert",
    "/donate",
    "/resources",
    "/resources/crisis-intervention",
    "/resources/support",
    "/mental-health",
    "/mental-health/veteran-services",
    "/mental-health/counseling",
    "/mental-health/family-therapy",
    "/mental-health/short-term-housing",
    "/mental-health/continuum-of-care",
    "/programs",
    "/programs/camps",
    "/programs/excursions",
    "/programs/retreats",
    "/programs/family-camps",
    "/programs/psychedelic-treatment",
    "/programs/peptide-therapy",
    "/programs/health",
    "/programs/life-coaching",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
