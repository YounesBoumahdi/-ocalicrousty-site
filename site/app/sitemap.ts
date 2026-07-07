import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ocalicrousty.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/menu`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/restaurants`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/franchise`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
