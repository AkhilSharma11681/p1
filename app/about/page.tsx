import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Omegle V – Free Anonymous Random Chat Platform",
  description: "Learn about Omegle V, the free anonymous random text chat platform. No registration needed. Chat with strangers worldwide safely.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui, sans-serif", padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", fontSize: "14px" }}>← Back to Home</Link>
      <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "24px 0 16px" }}>About Omegle V</h1>
      <p style={{ color: "#94a3b8", lineHeight: "1.8", marginBottom: "20px" }}>
        Omegle V is a free, anonymous random text chat platform that connects you with strangers from around the world instantly. No registration, no email, no personal data required.
      </p>
      <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "32px 0 12px" }}>How It Works</h2>
      <p style={{ color: "#94a3b8", lineHeight: "1.8", marginBottom: "20px" }}>
        When you click "Start Text Chat", our system instantly pairs you with a random stranger for a one-on-one anonymous conversation. You can skip to the next person anytime.
      </p>
      <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "32px 0 12px" }}>Privacy & Safety</h2>
      <p style={{ color: "#94a3b8", lineHeight: "1.8", marginBottom: "20px" }}>
        All chats are peer-to-peer. No chat logs are stored on our servers. Your identity remains completely anonymous throughout every session.
      </p>
      <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "32px 0 12px" }}>Why Omegle V?</h2>
      <ul style={{ color: "#94a3b8", lineHeight: "2", paddingLeft: "20px" }}>
        <li>100% Free – No subscriptions, no hidden fees</li>
        <li>No Login Required – Start chatting in seconds</li>
        <li>Anonymous – We never store your identity</li>
        <li>Interest Matching – Find people with similar topics</li>
        <li>Global – Chat with people from every country</li>
      </ul>
      <div style={{ marginTop: "40px" }}>
        <Link href="/chat" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "bold", fontSize: "16px" }}>
          Start Chatting Now →
        </Link>
      </div>
    </div>
  );
}
