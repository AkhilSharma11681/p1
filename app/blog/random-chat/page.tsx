import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Chat India - Talk to Strangers Online Free | OmegleV",
  description:
    "Random chat in India with strangers online. Free, no login, anonymous. Chat with girls and boys from Delhi, Mumbai, Bangalore and all over India on OmegleV.",
};

export default function RandomChatPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10" style={{ color: "#f8fafc", backgroundColor: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "16px" }}>
        Random Chat India — Talk to Strangers Online Free
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
        Want to do random chat in India without signup? <strong style={{ color: "#f8fafc" }}>OmegleV</strong> connects you instantly with random strangers from across India — Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and everywhere else. 100% free, 100% anonymous.
      </p>
      <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "20px", marginBottom: "32px" }}>
        <p style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#34d399" }}>
          Start random chat now — <Link href="/chat" style={{ color: "#3b82f6" }}>free, no login</Link>
        </p>
      </div>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>Random Chat Features on OmegleV</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
        {[
          ["Fast Matching", "Get matched with a stranger in under 3 seconds"],
          ["Interest Matching", "Type your interests to meet like-minded people"],
          ["Anonymous", "No account, no name, no phone number needed"],
          ["Mobile First", "Designed for Indian mobile users on 4G and 5G"],
          ["Completely Free", "No coins, no premium, no subscriptions ever"],
          ["Skip Anytime", "Not feeling it? Press Next and find someone new"],
        ].map(([title, desc], i) => (
          <div key={i} style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "10px", padding: "16px" }}>
            <div style={{ fontWeight: 700, marginBottom: "4px" }}>{title}</div>
            <div style={{ color: "#94a3b8", fontSize: "13px" }}>{desc}</div>
          </div>
        ))}
      </div>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>Who Uses Random Chat in India?</h2>
      <ul style={{ color: "#94a3b8", lineHeight: 2, paddingLeft: "20px", marginBottom: "32px" }}>
        <li><strong style={{ color: "#f8fafc" }}>College students</strong> — looking to meet new people outside their campus</li>
        <li><strong style={{ color: "#f8fafc" }}>Young professionals</strong> — wanting casual conversations after work</li>
        <li><strong style={{ color: "#f8fafc" }}>Language learners</strong> — practicing English or other Indian languages</li>
        <li><strong style={{ color: "#f8fafc" }}>Curious explorers</strong> — who enjoy meeting people from different backgrounds</li>
      </ul>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>Frequently Asked Questions</h2>
      <div style={{ marginBottom: "32px" }}>
        {[
          ["Is random chat free in India?", "Yes. OmegleV is 100% free for all Indian users. No subscription or payment required."],
          ["Can I chat with girls on OmegleV?", "OmegleV connects you randomly with strangers. All users are expected to follow respectful behavior guidelines."],
          ["Which is the best random chat app in India?", "OmegleV is one of the best free random chat platforms in India in 2026 — no login, no bots, works on mobile."],
          ["Is OmegleV available in Hindi?", "The interface is in English but you can chat in any language including Hindi, Tamil, Telugu, Bengali, or any other Indian language."],
          ["Does OmegleV work on 4G?", "Yes. OmegleV is optimized for Indian mobile networks and works smoothly on 4G and 5G connections."],
        ].map(([q, a], i) => (
          <div key={i} style={{ borderTop: "1px solid #334155", padding: "16px 0" }}>
            <p style={{ fontWeight: 700, color: "#f8fafc", marginBottom: "6px" }}>{q}</p>
            <p style={{ color: "#94a3b8", margin: 0 }}>{a}</p>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: "#1e293b", border: "1px solid #3b82f6", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
        <h2 style={{ margin: "0 0 8px", fontSize: "1.3rem" }}>Try random chat now</h2>
        <p style={{ color: "#94a3b8", margin: "0 0 16px" }}>No signup. No login. Just open and start chatting with strangers in India.</p>
        <Link href="/chat" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "14px 32px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "16px" }}>
          Start Random Chat
        </Link>
      </div>
    </main>
  );
}
