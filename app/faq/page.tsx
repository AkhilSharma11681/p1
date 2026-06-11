import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ – Omegle V Random Chat | Common Questions Answered",
  description: "Frequently asked questions about Omegle V. Learn how to use anonymous random chat, privacy policy, safety tips and more.",
};

const faqs = [
  { q: "What is Omegle V?", a: "Omegle V is a free anonymous random text chat platform where you can talk to strangers worldwide without any registration." },
  { q: "Is Omegle V free to use?", a: "Yes, Omegle V is completely free. No subscription or payment is required." },
  { q: "Do I need to create an account?", a: "No. You can start chatting instantly without any signup or login." },
  { q: "Is my identity kept anonymous?", a: "Yes. We do not store any chat logs or personal information. All conversations are peer-to-peer." },
  { q: "How does the matching work?", a: "Our system randomly pairs you with another online user. You can add interests to match with like-minded people." },
  { q: "Can I skip to the next person?", a: "Yes. Click the Skip or Next button at any time to be matched with a new random stranger." },
  { q: "Is Omegle V safe?", a: "We take safety seriously. Never share personal information like your name, address, or phone number with strangers." },
  { q: "What age do I need to be to use Omegle V?", a: "You must be 18 years or older, or have parental consent to use Omegle V." },
  { q: "Is Omegle V related to the original Omegle?", a: "No. Omegle V is an independent platform and is not affiliated with the original Omegle website." },
  { q: "Can I use Omegle V on mobile?", a: "Yes. Omegle V is fully optimized for mobile browsers on both iOS and Android." },
];

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui, sans-serif", padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link href="/" style={{ color: "#3b82f6", textDecoration: "none", fontSize: "14px" }}>← Back to Home</Link>
      <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "24px 0 8px" }}>Frequently Asked Questions</h1>
      <p style={{ color: "#64748b", marginBottom: "40px" }}>Everything you need to know about Omegle V</p>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid #1e293b", paddingBottom: "24px", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "#f1f5f9" }}>{faq.q}</h2>
          <p style={{ color: "#94a3b8", lineHeight: "1.7", margin: 0 }}>{faq.a}</p>
        </div>
      ))}
      <div style={{ marginTop: "40px" }}>
        <Link href="/chat" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: "bold", fontSize: "16px" }}>
          Start Chatting Now →
        </Link>
      </div>
    </div>
  );
}
