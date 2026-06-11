"use client";

import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function ChatPage() {
  const [userId] = useState(() => uuidv4());
  const [status, setStatus] = useState<"idle" | "waiting" | "matched">("idle");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [onlineCount, setOnlineCount] = useState(() => Math.floor(Math.random() * 200) + 34120);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const pollingRef = useRef<any>(null);
  const chatListenerRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const roomIdRef = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialViewportHeight = useRef<number>(0);

  useEffect(() => {
    roomIdRef.current = roomId;
  }, [roomId]);

  // KEYBOARD DETECTION — fixes layout when keyboard opens on mobile
  useEffect(() => {
    initialViewportHeight.current = window.visualViewport?.height || window.innerHeight;

    const handleViewportResize = () => {
      const currentHeight = window.visualViewport?.height || window.innerHeight;
      const diff = initialViewportHeight.current - currentHeight;
      setKeyboardOpen(diff > 150);
    };

    window.visualViewport?.addEventListener("resize", handleViewportResize);
    window.addEventListener("resize", handleViewportResize);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleViewportResize);
      window.removeEventListener("resize", handleViewportResize);
    };
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    window.addEventListener("beforeunload", triggerDisconnectSignal);
    return () => window.removeEventListener("beforeunload", triggerDisconnectSignal);
  }, []);

  useEffect(() => {
    startMatchmaking();
    const countInterval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 4000);
    return () => {
      clearInterval(countInterval);
      triggerDisconnectSignal();
      cleanupSession();
    };
  }, [userId]);

  const startMatchmaking = async () => {
    setStatus("waiting");
    setMessages([{ sender: "system", text: "📡 Finding a secure peer connection..." }]);

    const { data: waitingUsers } = await supabase
      .from("chat_queue").select("user_id").eq("status", "waiting").neq("user_id", userId).limit(1);

    if (waitingUsers && waitingUsers.length > 0) {
      const partnerId = waitingUsers[0].user_id;
      const generatedRoomId = `room-${[userId, partnerId].sort().join("-")}`;
      await supabase.from("chat_queue").update({ status: "matched", matched_with: generatedRoomId }).eq("user_id", partnerId);
      await supabase.from("chat_queue").upsert({ user_id: userId, status: "matched", matched_with: generatedRoomId });
      setRoomId(generatedRoomId);
      setStatus("matched");
      setMessages([{ sender: "system", text: "🤝 Connected! Say hi to your random stranger." }]);
      listenForMessages(generatedRoomId);
    } else {
      await supabase.from("chat_queue").upsert({ user_id: userId, status: "waiting", matched_with: null });
      startQueuePolling();
    }
  };

  const startQueuePolling = () => {
    pollingRef.current = setInterval(async () => {
      const { data } = await supabase.from("chat_queue").select("status, matched_with").eq("user_id", userId).maybeSingle();
      if (data?.status === "matched" && data?.matched_with) {
        clearInterval(pollingRef.current);
        setRoomId(data.matched_with);
        setStatus("matched");
        setMessages([{ sender: "system", text: "🤝 Connected! Say hi to your random stranger." }]);
        listenForMessages(data.matched_with);
      }
    }, 1500);
  };

  const listenForMessages = (activeRoomId: string) => {
    if (chatListenerRef.current) supabase.removeChannel(chatListenerRef.current);
    chatListenerRef.current = supabase
      .channel(`room-${activeRoomId}`)
      .on("broadcast", { event: "shout" }, (payload: any) => {
        if (payload.payload.senderId !== userId) {
          if (payload.payload.type === "msg") {
            setMessages((prev) => [...prev, { sender: "stranger", text: payload.payload.text }]);
          } else if (payload.payload.type === "exit") {
            handleStrangerExit();
          }
        }
      }).subscribe();
  };

  const triggerDisconnectSignal = () => {
    if (chatListenerRef.current && roomIdRef.current) {
      chatListenerRef.current.send({ type: "broadcast", event: "shout", payload: { senderId: userId, type: "exit" } });
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !roomId || status !== "matched") return;
    chatListenerRef.current?.send({ type: "broadcast", event: "shout", payload: { senderId: userId, type: "msg", text: message } });
    setMessages((prev) => [...prev, { sender: "you", text: message }]);
    setMessage("");
    inputRef.current?.focus();
  };

  const handleSkip = async () => {
    triggerDisconnectSignal();
    cleanupSession();
    startMatchmaking();
  };

  const handleStrangerExit = () => {
    setMessages((prev) => [...prev, { sender: "system", text: "🏳️ Stranger disconnected. Click Next to find someone new." }]);
    setStatus("idle");
    if (pollingRef.current) clearInterval(pollingRef.current);
    if (chatListenerRef.current) supabase.removeChannel(chatListenerRef.current);
  };

  const cleanupSession = async () => {
    if (pollingRef.current) clearInterval(pollingRef.current);
    if (chatListenerRef.current) supabase.removeChannel(chatListenerRef.current);
    await supabase.from("chat_queue").delete().eq("user_id", userId);
    setStatus("idle");
    setRoomId(null);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "#0f172a",
      color: "#f8fafc",
      display: "flex",
      flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
      overflow: "hidden",
    }}>
      {/* HEADER */}
      <header style={{
        backgroundColor: "#1e293b",
        borderBottom: "1px solid #334155",
        padding: "10px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
        zIndex: 10,
      }}>
        <Link href="/" onClick={triggerDisconnectSignal} style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>Omegle</span>{" "}
            <span style={{ color: "#f97316" }}>V</span>
          </span>
        </Link>
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
          padding: "4px 10px", borderRadius: "20px",
        }}>
          <span style={{ height: "6px", width: "6px", backgroundColor: "#10b981", borderRadius: "50%", display: "inline-block" }} />
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#34d399" }}>
            {onlineCount.toLocaleString()} Live
          </span>
        </div>
      </header>

      {/* MESSAGES AREA */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        WebkitOverflowScrolling: "touch",
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            display: "flex",
            justifyContent: msg.sender === "you" ? "flex-end" : msg.sender === "stranger" ? "flex-start" : "center",
          }}>
            {msg.sender === "system" ? (
              <span style={{
                fontSize: "11px", color: "#94a3b8",
                backgroundColor: "rgba(30,41,59,0.8)", border: "1px solid #334155",
                padding: "4px 14px", borderRadius: "20px", textAlign: "center", maxWidth: "90%",
              }}>{msg.text}</span>
            ) : (
              <div style={{
                maxWidth: "78%",
                padding: "10px 14px",
                borderRadius: msg.sender === "you" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                fontSize: "15px",
                lineHeight: "1.45",
                color: "#ffffff",
                backgroundColor: msg.sender === "you" ? "#2563eb" : "#1e293b",
                border: msg.sender === "you" ? "none" : "1px solid #334155",
                wordBreak: "break-word",
              }}>{msg.text}</div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} style={{ height: "4px" }} />
      </div>

      {/* INPUT BAR — stays above keyboard always */}
      <div style={{
        backgroundColor: "#1e293b",
        borderTop: "1px solid #334155",
        padding: keyboardOpen ? "8px 12px" : "10px 12px",
        paddingBottom: keyboardOpen ? "8px" : "calc(10px + env(safe-area-inset-bottom))",
        flexShrink: 0,
        zIndex: 10,
      }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", maxWidth: "640px", margin: "0 auto" }}>
          <button onClick={handleSkip} style={{
            backgroundColor: status === "matched" ? "#ef4444" : "#64748b",
            color: "#fff", border: "none", borderRadius: "12px",
            padding: "0 16px", fontSize: "13px", fontWeight: "bold",
            cursor: "pointer", height: "44px", flexShrink: 0, whiteSpace: "nowrap",
          }}>
            {status === "matched" ? "Skip" : "Next"}
          </button>

          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={status !== "matched"}
            placeholder={status === "matched" ? "Type a message..." : status === "waiting" ? "Finding stranger..." : "Press Next to reconnect"}
            style={{
              flex: 1,
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
              padding: "0 14px",
              color: "#f8fafc",
              fontSize: "16px", // 16px PREVENTS iOS zoom
              outline: "none",
              height: "44px",
              opacity: status === "matched" ? 1 : 0.5,
              minWidth: 0,
            }}
          />

          <button onClick={sendMessage} disabled={status !== "matched"} style={{
            backgroundColor: message.trim() && status === "matched" ? "#2563eb" : "#334155",
            color: "#fff", border: "none", borderRadius: "12px",
            padding: "0 18px", fontSize: "13px", fontWeight: "bold",
            cursor: status === "matched" ? "pointer" : "not-allowed",
            height: "44px", flexShrink: 0,
            transition: "background-color 0.15s",
          }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
