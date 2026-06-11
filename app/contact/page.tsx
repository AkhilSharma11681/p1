import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Contact – Omegle V", description: "Contact the Omegle V team for support or inquiries." };
export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui,sans-serif", padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", fontSize: "14px" }}>← Back to Home</Link>
      <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "24px 0 16px" }}>Contact Us</h1>
      <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "24px" }}>Have a question or concern? Reach out to the Omegle V team.</p>
      <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "16px", padding: "24px" }}>
        <p style={{ color: "#94a3b8", marginBottom: "12px", fontSize: "14px" }}>📧 General: <a href="mailto:hello@omeglev.com" style={{ color: "#3b82f6" }}>hello@omeglev.com</a></p>
        <p style={{ color: "#94a3b8", marginBottom: "12px", fontSize: "14px" }}>🔒 Privacy: <a href="mailto:privacy@omeglev.com" style={{ color: "#3b82f6" }}>privacy@omeglev.com</a></p>
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>⚠️ Abuse: <a href="mailto:abuse@omeglev.com" style={{ color: "#3b82f6" }}>abuse@omeglev.com</a></p>
      </div>
    </div>
  );
}
