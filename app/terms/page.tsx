import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Terms of Service – Omegle V", description: "Omegle V terms of service and usage guidelines." };
export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui,sans-serif", padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", fontSize: "14px" }}>← Back to Home</Link>
      <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "24px 0 16px" }}>Terms of Service</h1>
      <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "32px" }}>Last updated: {new Date().toLocaleDateString()}</p>
      {[
        { h: "Acceptance", p: "By using Omegle V, you agree to these terms. If you do not agree, please do not use the service." },
        { h: "Age Requirement", p: "You must be at least 18 years old to use Omegle V. Users under 18 must have parental consent." },
        { h: "Prohibited Content", p: "You may not use Omegle V to share illegal content, harass others, share explicit content involving minors, or engage in any activity that violates applicable laws." },
        { h: "Anonymous Use", p: "Omegle V provides anonymous chat services. You are responsible for your own conduct during chats. We do not moderate real-time conversations." },
        { h: "Disclaimer", p: "Omegle V is provided as-is. We are not responsible for the content of conversations between users." },
        { h: "Modifications", p: "We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms." },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "#f1f5f9" }}>{s.h}</h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "14px", margin: 0 }}>{s.p}</p>
        </div>
      ))}
    </div>
  );
}
