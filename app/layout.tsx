import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Replace this with your actual GA4 Measurement ID from Step 1
const GA_MEASUREMENT_ID = "G-Z7ZDVSJJ45"; 

export const metadata: Metadata = {
  title: "Omegle V - Original Anonymous Unfiltered Chat Alternative",
  description: "Talk to random strangers on Omegle V, the best free legal alternative for secure anonymous text chats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script Injection */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
