import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omegle V - Talk to Strangers | Free Anonymous Chat",
  description: "Omegle V is the best free Omegle alternative. Chat anonymously with random strangers online. No login required.",
  keywords: ["omegle", "omegle alternative", "talk to strangers", "random chat", "anonymous chat", "online chat"],
  authors: [{ name: "Omegle V" }],
  openGraph: {
    title: "Omegle V - Anonymous Random Chat",
    description: "Talk to strangers instantly. Free & Anonymous.",
    images: [{ url: "https://p1-livid-eight.vercel.app/og-image.jpg" }],
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
