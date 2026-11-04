import type { MetadataRoute } from "next";


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clickandswap.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/product", priority: 0.9 },
  { path: "/card", priority: 0.8 },
  { path: "/payment", priority: 0.8 },
  { path: "/waitlist", priority: 0.8 },
  { path: "/company", priority: 0.7 },
  { path: "/developer", priority: 0.7 },
  { path: "/help", priority: 0.6 },
  { path: "/faqs", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
