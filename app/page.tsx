"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [onlineCount] = useState<number | null>(null);
  const [interests, setInterests] = useState("");

  

  return (
    <div style={{ backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui,-apple-system,sans-serif" }}>
      
      {/* HEADER - Same as before */}
      <header style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #3b82f6, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}>V</div>
          <div style={{ margin: 0, fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>Omegle</span> <span style={{ color: "#f97316" }}>V</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", padding: "6px 12px", borderRadius: "20px" }}>
          <span style={{ height: "8px", width: "8px", backgroundColor: "#10b981", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "12px", fontWeight: "bold", color: "#34d399" }}>{onlineCount ? `${onlineCount.toLocaleString()} Online Now` : "Anonymous Chat"}</span>
        </div>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "48px" }}>
          <div style={{ backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, marginBottom: "16px" }}>
            🌐 Best Free Omegle Alternative
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 16px", color: "#fff" }}>
            Talk to Strangers.<br />
            <span style={{ color: "#f97316" }}>100% Anonymous</span>
          </h1>
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


        <section style={{marginTop:"60px"}}>
          <h2>Why Choose Omeglev?</h2>

          <p>
            Omeglev is a free random chat platform that helps you meet
            strangers online instantly. No signup, no lengthy profile
            creation, and no complicated setup.
          </p>

          <ul style={{lineHeight:"2"}}>
            <li>Anonymous conversations</li>
            <li>Free random chat</li>
            <li>No registration required</li>
            <li>Works on desktop and mobile</li>
            <li>Meet people worldwide</li>
          </ul>
        </section>

        <section style={{marginTop:"60px"}}>
          <h2>How Random Chat Works</h2>

          <p>
            Enter your interests, start chatting, and get matched with
            people who share similar topics. Random chat is one of the
            easiest ways to meet new people online.
          </p>

          <p>
            Whether you enjoy gaming, music, anime, technology, sports,
            or casual conversations, random chat helps you connect with
            strangers around the world.
          </p>
        </section>

        <section style={{marginTop:"60px"}}>
          <h2>Frequently Asked Questions</h2>

          <h3>Is Omeglev free?</h3>
          <p>Yes. Omeglev is completely free to use.</p>

          <h3>Do I need an account?</h3>
          <p>No registration is required.</p>

          <h3>Can I chat anonymously?</h3>
          <p>Yes. Conversations are designed to be anonymous.</p>

          <h3>What interests can I use?</h3>
          <p>
            You can enter gaming, music, anime, sports, technology,
            education, movies, and many other interests.
          </p>
        </section>


        <section style={{marginTop:"60px"}}>
          <h2>Popular Guides</h2>

          <ul style={{lineHeight:"2"}}>
            <li><Link href="/blog/omegle-alternative">Best Omegle Alternative</Link></li>
            <li><Link href="/blog/random-chat">Random Chat Online</Link></li>
            <li><Link href="/blog/chat-with-strangers">Chat With Strangers Safely</Link></li>
            <li><Link href="/blog/sites-like-omegle">Sites Like Omegle</Link></li>
            <li><Link href="/blog/anonymous-chat">Anonymous Chat Online</Link></li>
          </ul>
        </section>

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
