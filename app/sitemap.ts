import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://omeglev.com";

  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/privacy`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.6 },

    { url: `${base}/blog/omegle-alternative`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/blog/random-chat`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/blog/chat-with-strangers`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/blog/sites-like-omegle`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/blog/anonymous-chat`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/blog/talk-to-strangers-online`, lastModified: new Date(), priority: 0.9 },
  ];
}
