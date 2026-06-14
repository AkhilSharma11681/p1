import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omeglev.com"),

  title: {
    default: "Random Chat With Strangers | Omeglev",
    template: "%s | Omeglev",
  },

  description:
    "Meet random strangers online instantly. Anonymous text chat with no signup required. Start chatting for free on Omeglev.",

  keywords: [
    "omegle alternative",
    "random chat",
    "anonymous chat",
    "talk to strangers",
    "chat with strangers",
    "free random chat",
    "online chat",
    "text chat",
    "omegle replacement",
    "sites like omegle"
  ],

  authors: [{ name: "Omeglev" }],

  openGraph: {
    title: "Random Chat With Strangers | Omeglev",
    description:
      "Meet random strangers online instantly. Anonymous text chat with no signup required.",
    url: "https://www.omeglev.com",
    siteName: "Omeglev",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Random Chat With Strangers | Omeglev",
    description:
      "Meet random strangers online instantly. Anonymous text chat with no signup required.",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
