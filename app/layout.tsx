import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omegle V – Free Random Text Chat with Strangers | Anonymous & Secure",
  description: "Omegle V is a free anonymous random text chat platform. Talk to strangers instantly, no login required. Meet new people worldwide, completely private.",
  keywords: "omegle, random chat, talk to strangers, anonymous chat, free chat, omegle alternative, stranger chat, text chat",
  openGraph: {
    title: "Omegle V – Free Random Text Chat with Strangers",
    description: "Talk to random strangers instantly. No login, no tracking, 100% anonymous.",
    url: "https://omeglev.com",
    siteName: "Omegle V",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omegle V – Free Random Text Chat",
    description: "Anonymous random stranger chat. No login required.",
  },
  alternates: {
    canonical: "https://omeglev.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://omeglev.com" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
