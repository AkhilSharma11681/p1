import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy Policy – Omegle V", description: "Omegle V privacy policy. We do not store chat logs or personal data." };
export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui,sans-serif", padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", fontSize: "14px" }}>← Back to Home</Link>
      <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "24px 0 16px" }}>Privacy Policy</h1>
      <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "32px" }}>Last updated: {new Date().toLocaleDateString()}</p>
      {[
        { h: "No Data Collection", p: "Omegle V does not collect, store, or sell any personal information. We do not require registration, email addresses, or any personal data to use our service." },
        { h: "Chat Logs", p: "All conversations on Omegle V are peer-to-peer in real time. No chat messages are stored on our servers. Once your session ends, the conversation is permanently gone." },
        { h: "Cookies", p: "We use minimal session cookies only to maintain your anonymous chat session. No tracking cookies or third-party advertising cookies are used." },
        { h: "Analytics", p: "We use anonymized Google Analytics to understand general usage patterns. No personally identifiable data is tracked." },
        { h: "Age Requirement", p: "Omegle V is intended for users 18 years and older. If you are under 18, please obtain parental consent or do not use this service." },
        { h: "Contact", p: "For privacy concerns, contact us at privacy@omeglev.com" },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "#f1f5f9" }}>{s.h}</h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "14px", margin: 0 }}>{s.p}</p>
        </div>
      ))}
    </div>
  );
}
