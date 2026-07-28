import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const BASE_URL = "https://drnisarga.com";

const staticRoutes = [
  { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/achievements`, priority: 0.7, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: "yearly" as const },
  { url: `${BASE_URL}/media`, priority: 0.6, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/patient-first`, priority: 0.8, changeFrequency: "monthly" as const },
  { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "weekly" as const },
  { url: `${BASE_URL}/testimonials`, priority: 0.7, changeFrequency: "weekly" as const },
];

const dynamicServiceRoutes = services.map((service) => ({
  url: `${BASE_URL}/services/${service.slug}`,
  priority: 0.8,
  changeFrequency: "monthly" as const,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...dynamicServiceRoutes,
  ];
}
