import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Omegle Alternative in India 2026 - Free, No Login",
  description:
    "Looking for an Omegle alternative in India? OmegleV is the best free random chat site. Chat with strangers instantly, no signup, 100% anonymous. Works on mobile.",
};

export default function OmegleAlternativePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10" style={{ color: "#f8fafc", backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "16px" }}>
        Best Omegle Alternative in India 2026
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
        Omegle shut down in 2023. Since then, millions of Indian users have been searching for a free, safe, and working Omegle alternative. <strong style={{ color: "#f8fafc" }}>OmegleV</strong> is built exactly for this — random chat with strangers in India, no login required, completely free.
      </p>
      <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "20px", marginBottom: "32px" }}>
        <p style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#34d399" }}>
          Start chatting now — <Link href="/chat" style={{ color: "#3b82f6" }}>no signup needed</Link>
        </p>
      </div>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>Why Indians Are Switching to OmegleV</h2>
      <ul style={{ color: "#94a3b8", lineHeight: 2, paddingLeft: "20px", marginBottom: "32px" }}>
        <li><strong style={{ color: "#f8fafc" }}>100% Free</strong> — no subscription, no hidden charges</li>
        <li><strong style={{ color: "#f8fafc" }}>No Login</strong> — open the site and start chatting instantly</li>
        <li><strong style={{ color: "#f8fafc" }}>No Bots</strong> — real people only</li>
        <li><strong style={{ color: "#f8fafc" }}>Mobile Friendly</strong> — works perfectly on Android and iPhone</li>
        <li><strong style={{ color: "#f8fafc" }}>Anonymous</strong> — your identity is never revealed</li>
        <li><strong style={{ color: "#f8fafc" }}>Interest Matching</strong> — get matched with people who share your interests</li>
      </ul>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>OmegleV vs Other Omegle Alternatives</h2>
      <div style={{ overflowX: "auto", marginBottom: "32px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "#94a3b8", fontSize: "14px" }}>
          <thead>
            <tr style={{ backgroundColor: "#1e293b" }}>
              <th style={{ padding: "12px", textAlign: "left", color: "#f8fafc" }}>Feature</th>
              <th style={{ padding: "12px", textAlign: "center", color: "#34d399" }}>OmegleV</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Chatroulette</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Emerald Chat</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Free to use", "Yes", "Yes", "Partial"],
              ["No login required", "Yes", "No", "No"],
              ["Works in India", "Yes", "Slow", "Yes"],
              ["Mobile friendly", "Yes", "Partial", "Yes"],
              ["No bots", "Yes", "No", "Partial"],
              ["Interest matching", "Yes", "No", "Yes"],
            ].map(([feature, a, b, c], i) => (
              <tr key={i} style={{ borderTop: "1px solid #334155" }}>
                <td style={{ padding: "10px 12px" }}>{feature}</td>
                <td style={{ padding: "10px 12px", textAlign: "center", color: "#34d399" }}>{a}</td>
                <td style={{ padding: "10px 12px", textAlign: "center" }}>{b}</td>
                <td style={{ padding: "10px 12px", textAlign: "center" }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>Frequently Asked Questions</h2>
      <div style={{ marginBottom: "32px" }}>
        {[
          ["Is OmegleV free?", "Yes, OmegleV is completely free. No subscription, no coins, no premium plan needed."],
          ["Do I need to create an account?", "No. You do not need to sign up or log in. Just open the website and start chatting."],
          ["Is OmegleV safe?", "OmegleV has a report system to flag inappropriate users. Never share personal information with strangers."],
          ["Can I use OmegleV on my phone?", "Yes. OmegleV works on all Android and iPhone browsers. No app download required."],
          ["Is OmegleV available in India?", "Yes. OmegleV works in all Indian cities including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata."],
          ["What happened to Omegle?", "Omegle shut down permanently in November 2023. OmegleV is one of the best free alternatives."],
        ].map(([q, a], i) => (
          <div key={i} style={{ borderTop: "1px solid #334155", padding: "16px 0" }}>
            <p style={{ fontWeight: 700, color: "#f8fafc", marginBottom: "6px" }}>{q}</p>
            <p style={{ color: "#94a3b8", margin: 0 }}>{a}</p>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "#1e293b", border: "1px solid #3b82f6", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: "1.3rem" }}>Ready to chat?</h2>
        <p style={{ color: "#94a3b8", margin: "0 0 16px" }}>No login, no signup, 100% free.</p>
        <Link href="/chat" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "14px 32px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "16px" }}>
          Start Chatting Now
        </Link>
      </div>
    </main>
  );
}
