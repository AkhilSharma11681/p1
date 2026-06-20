import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omeglev.com"),
  title: {
    default: "OmegleV - Free Random Chat With Strangers in India | No Login",
    template: "%s | OmegleV",
  },
  description:
    "OmegleV is the best free Omegle alternative in India. Chat with random strangers instantly, no signup, no login. Talk to girls and boys anonymously online.",
  keywords: [
    "omegle alternative india",
    "random chat india",
    "chat with strangers india",
    "girls free chatting online",
    "talk to strangers india",
    "free random chat no login",
    "anonymous chat india",
    "omegle india",
    "stranger chat india",
    "online chatting with girls",
    "omegle alternative free",
    "chat with girls online free",
    "indian random chat",
    "sites like omegle india",
    "omegle not working alternative",
    "free chat no registration",
    "meet strangers online india"
  ],
  authors: [{ name: "OmegleV" }],
  openGraph: {
    title: "OmegleV - Free Random Chat With Strangers in India",
    description: "Chat with random strangers in India instantly. No signup, 100% anonymous. Best free Omegle alternative.",
    url: "https://www.omeglev.com",
    siteName: "OmegleV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmegleV - Free Random Chat With Strangers in India",
    description: "Chat with random strangers in India instantly. No signup, 100% anonymous. Best free Omegle alternative.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
