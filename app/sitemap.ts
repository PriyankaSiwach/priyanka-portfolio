import type { MetadataRoute } from "next";

const BASE_URL = "https://priyankasiwach.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/certifications`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
