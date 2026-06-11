import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-Z7ZDVSJJ45";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omeglev.com"),
  title: {
    default: "Omegle V – Free Random Text Chat with Strangers | Anonymous",
    template: "%s | Omegle V",
  },
  description: "Omegle V is the best free anonymous random chat platform. Talk to strangers instantly — no login, no tracking. The #1 Omegle alternative for random text chat.",
  keywords: [
    "omegle", "omegle v", "omeglev", "random chat", "talk to strangers",
    "anonymous chat", "stranger chat", "free chat", "omegle alternative",
    "random text chat", "chat with strangers", "online chat", "meet strangers",
    "omegle replacement", "anonymous text chat", "free random chat",
  ],
  authors: [{ name: "Omegle V" }],
  creator: "Omegle V",
  publisher: "Omegle V",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omeglev.com",
    siteName: "Omegle V",
    title: "Omegle V – Free Anonymous Random Chat with Strangers",
    description: "Talk to random strangers instantly. No login, no tracking, 100% anonymous. The best Omegle alternative.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Omegle V – Random Chat Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@omeglev",
    creator: "@omeglev",
    title: "Omegle V – Free Random Text Chat with Strangers",
    description: "Anonymous random stranger chat. No login required. Talk instantly.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://omeglev.com",
  },
  category: "social",
  applicationName: "Omegle V",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://omeglev.com/#website",
      "url": "https://omeglev.com",
      "name": "Omegle V",
      "description": "Free anonymous random text chat platform",
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://omeglev.com/chat" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://omeglev.com/#app",
      "name": "Omegle V",
      "url": "https://omeglev.com",
      "description": "Free anonymous random text chat with strangers. No login required.",
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "All",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": [
        "Anonymous chat", "Random stranger matching", "No login required",
        "Real-time messaging", "Interest-based matching", "Mobile friendly"
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://omeglev.com/#org",
      "name": "Omegle V",
      "url": "https://omeglev.com",
      "logo": "https://omeglev.com/icon-192.png",
      "sameAs": ["https://omeglev.com"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Omegle V?", "acceptedAnswer": { "@type": "Answer", "text": "Omegle V is a free anonymous random text chat platform where you can talk to strangers worldwide without any registration." } },
        { "@type": "Question", "name": "Is Omegle V free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Omegle V is completely free to use with no subscriptions or hidden fees." } },
        { "@type": "Question", "name": "Do I need to sign up for Omegle V?", "acceptedAnswer": { "@type": "Answer", "text": "No sign up needed. Start chatting instantly with zero registration." } },
        { "@type": "Question", "name": "Is Omegle V safe and anonymous?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All chats are peer-to-peer. No chat logs are stored. Your identity remains completely anonymous." } },
        { "@type": "Question", "name": "What is the best Omegle alternative?", "acceptedAnswer": { "@type": "Answer", "text": "Omegle V is the best free Omegle alternative for anonymous random text chat with strangers." } },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
