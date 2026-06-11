"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [onlineCount, setOnlineCount] = useState(34120);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 11) - 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui,-apple-system,sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* LOGO */}
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}>V</div>
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>Omegle</span> <span style={{ color: "#f97316" }}>V</span>
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", padding: "6px 12px", borderRadius: "20px" }}>
          <span style={{ height: "8px", width: "8px", backgroundColor: "#10b981", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "12px", fontWeight: "bold", color: "#34d399" }}>{onlineCount.toLocaleString()} Online</span>
        </div>
      </header>

      {/* MAIN */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* HERO */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "48px" }}>
          <div style={{ backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, marginBottom: "16px" }}>
            🌐 The #1 Free Omegle Alternative
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 16px", color: "#fff" }}>
            Talk to Strangers.<br />
            <span style={{ color: "#f97316" }}>100% Anonymous. Free.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "560px", lineHeight: 1.7, margin: "0 0 32px" }}>
            Omegle V randomly pairs you with real people worldwide for instant one-on-one text chat. No login. No tracking. No limits.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "400px" }}>
            <input type="text" placeholder="Add interests: gaming, music, anime... (optional)" style={{ width: "100%", backgroundColor: "#1e293b", border: "1px solid #334155", color: "#f8fafc", fontSize: "15px", padding: "14px 16px", borderRadius: "12px", outline: "none", boxSizing: "border-box" }} />
            <Link href="/chat" style={{ textDecoration: "none" }}>
              <div style={{ width: "100%", backgroundColor: "#2563eb", color: "#fff", fontSize: "17px", fontWeight: "bold", padding: "16px", borderRadius: "12px", cursor: "pointer", textAlign: "center", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}>
                💬 Start Chatting Now — It's Free
              </div>
            </Link>
            <p style={{ fontSize: "11px", color: "#475569", margin: 0 }}>You must be 18+ to use this platform. By continuing you agree to our terms.</p>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "56px" }}>
          {[
            { icon: "🛡️", title: "Zero Logs", desc: "Chat data is never stored on our servers. Complete privacy guaranteed." },
            { icon: "⚡", title: "Instant Match", desc: "Sub-second pairing algorithm connects you to strangers in real time." },
            { icon: "🌍", title: "Global Users", desc: "Connect with people from every country around the world." },
            { icon: "📱", title: "Mobile Friendly", desc: "Perfectly optimized for all devices — phone, tablet, desktop." },
            { icon: "🔒", title: "100% Anonymous", desc: "No name, no email, no account — just pure anonymous chat." },
            { icon: "🎯", title: "Interest Matching", desc: "Add topics to find strangers who share your exact interests." },
          ].map((f, i) => (
            <div key={i} style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 6px" }}>{f.title}</h3>
              <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* SEO TEXT BLOCK — Google reads this */}
        <div style={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "20px", padding: "32px", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px", color: "#f1f5f9" }}>What is Omegle V?</h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "16px", fontSize: "14px" }}>
            <strong style={{ color: "#f1f5f9" }}>Omegle V</strong> is a free anonymous random text chat platform that connects you with strangers from around the world in real time. Similar to the original Omegle, but faster, safer, and built for modern devices. No registration. No personal data. Just instant human connection.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "16px", fontSize: "14px" }}>
            Whether you're looking for a <strong style={{ color: "#cbd5e1" }}>random chat</strong>, want to <strong style={{ color: "#cbd5e1" }}>talk to strangers online</strong>, or simply need a free <strong style={{ color: "#cbd5e1" }}>Omegle alternative</strong> — Omegle V is the platform for you. With thousands of users online at any given moment, you'll never wait more than a second to be matched.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "14px" }}>
            Omegle V is designed for users who value privacy. We use real-time peer-to-peer channels powered by edge infrastructure, ensuring your conversations are never logged, never stored, and never shared. Add your interests to get matched with people who share your exact vibe — gaming, anime, college, music, sports, and more.
          </p>
        </div>

        {/* FAQ SECTION — Google Featured Snippets */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "24px", color: "#f1f5f9" }}>Frequently Asked Questions</h2>
          {[
            { q: "What is Omegle V?", a: "Omegle V is a free anonymous random text chat platform. It connects you with strangers worldwide instantly — no login or registration needed." },
            { q: "Is Omegle V the same as Omegle?", a: "Omegle V is an independent platform inspired by the original Omegle concept. It is not affiliated with the original Omegle website but offers a similar anonymous stranger chat experience." },
            { q: "Is Omegle V free to use?", a: "Yes, Omegle V is 100% free. No subscriptions, no premium plans, no hidden costs." },
            { q: "Do I need to create an account on Omegle V?", a: "No. You can start chatting instantly with zero signup. Just open the site and click Start Chatting." },
            { q: "Is Omegle V safe and private?", a: "All chats on Omegle V are peer-to-peer. No messages are stored on our servers. Your identity stays completely anonymous throughout every session." },
            { q: "What are the best Omegle alternatives?", a: "Omegle V is one of the best free Omegle alternatives for anonymous random text chat. Other alternatives include Chatroulette, Emerald Chat, and Chathub — but Omegle V offers the fastest matching with zero data logging." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #1e293b", padding: "20px 0" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", margin: "0 0 8px" }}>{faq.q}</h3>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#1e293b", borderRadius: "20px", border: "1px solid #334155" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 900, margin: "0 0 12px", color: "#fff" }}>Ready to meet someone new?</h2>
          <p style={{ color: "#64748b", margin: "0 0 24px", fontSize: "14px" }}>Join {onlineCount.toLocaleString()} people chatting right now</p>
          <Link href="/chat" style={{ textDecoration: "none" }}>
            <div style={{ display: "inline-block", backgroundColor: "#2563eb", color: "#fff", fontSize: "16px", fontWeight: "bold", padding: "16px 40px", borderRadius: "12px", cursor: "pointer", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}>
              💬 Start Free Chat Now
            </div>
          </Link>
        </div>
      </main>

      {/* FOOTER with links — important for SEO */}
      <footer style={{ borderTop: "1px solid #1e293b", padding: "32px 20px", textAlign: "center", marginTop: "60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "16px", flexWrap: "wrap" }}>
          {[
            { label: "About", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "#475569", fontSize: "13px", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
        <p style={{ color: "#334155", fontSize: "12px", margin: 0 }}>
          © {new Date().getFullYear()} Omegle V — Independent platform, not affiliated with Omegle.com
        </p>
      </footer>
    </div>
  );
}
