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
    <div style={{
      backgroundColor: "#0f172a",
      color: "#f8fafc",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    }}>
      
      {/* BRANDING HEADER */}
      <header style={{
        width: "100%",
        backgroundColor: "#1e293b",
        borderBottom: "1px solid #334155",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>Omegle</span> <span style={{ color: "#f97316" }}>V</span>
          </h1>
          <span style={{
            backgroundColor: "rgba(249, 115, 22, 0.1)",
            color: "#fb923c",
            fontSize: "10px",
            fontWeight: "bold",
            padding: "2px 6px",
            borderRadius: "4px",
            textTransform: "uppercase"
          }}>
            Node
          </span>
        </div>

        {/* LIVE COUNTER */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          border: "1px solid rgba(16, 185, 129, 0.2)",
          padding: "6px 12px",
          borderRadius: "20px"
        }}>
          <span style={{
            height: "8px",
            width: "8px",
            backgroundColor: "#10b981",
            borderRadius: "50%",
            display: "inline-block"
          }}></span>
          <span style={{ fontSize: "12px", fontWeight: "bold", color: "#34d399" }}>
            {onlineCount.toLocaleString()} <span style={{ fontWeight: "normal", color: "rgba(52, 211, 153, 0.7)" }}>Online</span>
          </span>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main style={{
        flex: 1,
        maxWidth: "420px",
        width: "100%",
        margin: "0 auto",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        boxSizing: "border-box"
      }}>
        
        {/* HERO TITLE */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            color: "#60a5fa",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: 500,
            marginBottom: "12px"
          }}>
            🌐 Real-time Encrypted P2P Channels
          </div>
          <h2 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px 0", lineHeight: "1.2", color: "#ffffff" }}>
            Talk to global strangers,<br />
            <span style={{ color: "#f97316" }}>completely anonymous.</span>
          </h2>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0, lineHeight: "1.5" }}>
            Omegle V randomly pairs you with real people for instant 1-on-1 text sessions. Match with your exact vibe instantly.
          </p>
        </div>

        {/* DETAILS SECTION */}
        <div style={{
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px"
        }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "16px", padding: "6px", backgroundColor: "#0f172a", borderRadius: "8px" }}>🛡️</span>
            <div>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold", color: "#e2e8f0" }}>No Logs Retained</p>
              <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#94a3b8" }}>Your chat data vanishes instantly from memory layers</p>
            </div>
          </div>
          
          <div style={{ height: "1px", backgroundColor: "#334155", width: "100%" }} />
          
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "16px", padding: "6px", backgroundColor: "#0f172a", borderRadius: "8px" }}>⚡</span>
            <div>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold", color: "#e2e8f0" }}>Instant Handshake</p>
              <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#94a3b8" }}>Sub-second queue processing algorithm</p>
            </div>
          </div>
          
          <div style={{ height: "1px", backgroundColor: "#334155", width: "100%" }} />
          
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "16px", padding: "6px", backgroundColor: "#0f172a", borderRadius: "8px" }}>🔒</span>
            <div>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold", color: "#e2e8f0" }}>100% Serverless Architecture</p>
              <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#94a3b8" }}>Direct peer state channels powered by edge engines</p>
            </div>
          </div>
        </div>

        {/* INPUT CARD AREA */}
        <div style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          border: "1px solid rgba(51, 65, 85, 0.6)",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
          <div>
            <label style={{ fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
              Add your interests (Optional)
            </label>
            <input
              type="text"
              placeholder="gaming, college, anime, music..."
              style={{
                width: "100%",
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                color: "#f8fafc",
                fontSize: "14px",
                padding: "12px",
                borderRadius: "12px",
                outline: "none",
                boxSizing: "border-box"
              }}
            />
          </div>

          <Link href="/chat" style={{ textDecoration: "none" }}>
            <span style={{
              width: "100%",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "14px 0",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textAlign: "center"
            }}>
              💬 Start Text Chat
            </span>
          </Link>

          <div style={{
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            gap: "8px",
            fontSize: "10px",
            color: "#64748b",
            lineHeight: "1.4"
          }}>
            <span style={{ fontSize: "12px" }}>⚙️</span>
            <span>STATUS: ENGINE GRID READY. Channels lock on matching topics.</span>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{
        width: "100%",
        padding: "16px",
        textAlign: "center",
        borderTop: "1px solid #1e293b",
        backgroundColor: "#0f172a",
        boxSizing: "border-box"
      }}>
        <p style={{ margin: 0, fontSize: "10px", color: "#64748b" }}>
          You must be 18+ to use this node. Omegle V is independent and unaffiliated.
        </p>
      </footer>

    </div>
  );
}
