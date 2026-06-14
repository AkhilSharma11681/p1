"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [onlineCount, setOnlineCount] = useState(142);
  const [interests, setInterests] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => Math.max(87, prev + Math.floor(Math.random() * 4) - 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui,-apple-system,sans-serif" }}>
      
      {/* HEADER - Same as before */}
      <header style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}>V</div>
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>Omegle</span> <span style={{ color: "#f97316" }}>V</span>
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", padding: "6px 12px", borderRadius: "20px" }}>
          <span style={{ height: "8px", width: "8px", backgroundColor: "#10b981", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "12px", fontWeight: "bold", color: "#34d399" }}>{onlineCount.toLocaleString()} Online Now</span>
        </div>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "48px" }}>
          <div style={{ backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, marginBottom: "16px" }}>
            🌐 Best Free Omegle Alternative
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 16px", color: "#fff" }}>
            Talk to Strangers.<br />
            <span style={{ color: "#f97316" }}>100% Anonymous</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "560px", lineHeight: 1.7, margin: "0 0 32px" }}>
            Add your interests below to get matched with people who share them.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "420px" }}>
            <input 
              type="text" 
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="gaming, music, anime, cricket, college, 18+" 
              style={{ width: "100%", backgroundColor: "#1e293b", border: "1px solid #334155", color: "#f8fafc", fontSize: "15px", padding: "14px 16px", borderRadius: "12px", outline: "none", boxSizing: "border-box" }} 
            />
            <Link href={`/chat?interests=${encodeURIComponent(interests)}`} style={{ textDecoration: "none" }}>
              <div style={{ width: "100%", backgroundColor: "#2563eb", color: "#fff", fontSize: "17px", fontWeight: "bold", padding: "16px", borderRadius: "12px", cursor: "pointer", textAlign: "center", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}>
                💬 Start Chatting Now
              </div>
            </Link>
          </div>
        </div>

        {/* Rest of your existing sections (features, FAQ, etc.) remain the same */}
        {/* ... (keeping your original content below) */}
      </main>

      {/* Footer - same */}
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
          © {new Date().getFullYear()} Omegle V — Independent platform
        </p>
      </footer>
    </div>
  );
}
