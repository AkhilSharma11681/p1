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
  
  const pollingRef = useRef<any>(null);
  const chatListenerRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const roomIdRef = useRef<string | null>(null);

  useEffect(() => {
    roomIdRef.current = roomId;
  }, [roomId]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Small delay to ensure layout shifts are complete before scrolling
    const timer = setTimeout(scrollToBottom, 80);
    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      triggerDisconnectSignal();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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
      .from("chat_queue")
      .select("user_id")
      .eq("status", "waiting")
      .neq("user_id", userId)
      .limit(1);

    if (waitingUsers && waitingUsers.length > 0) {
      const partnerId = waitingUsers[0].user_id;
      const generatedRoomId = `room-${[userId, partnerId].sort().join("-")}`;

      await supabase.from("chat_queue").update({ status: "matched", matched_with: generatedRoomId }).eq("user_id", partnerId);
      await supabase.from("chat_queue").upsert({ user_id: userId, status: "matched", matched_with: generatedRoomId });

      setRoomId(generatedRoomId);
      setStatus("matched");
      setMessages([{ sender: "system", text: "🤝 Connected! Chatting with a random stranger." }]);
      listenForMessages(generatedRoomId);
    } else {
      await supabase.from("chat_queue").upsert({ user_id: userId, status: "waiting", matched_with: null });
      startQueuePolling();
    }
  };

  const startQueuePolling = () => {
    pollingRef.current = setInterval(async () => {
      const { data } = await supabase
        .from("chat_queue")
        .select("status, matched_with")
        .eq("user_id", userId)
        .maybeSingle();

      if (data && data.status === "matched" && data.matched_with) {
        clearInterval(pollingRef.current);
        setRoomId(data.matched_with);
        setStatus("matched");
        setMessages([{ sender: "system", text: "🤝 Connected! Chatting with a random stranger." }]);
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
      })
      .subscribe();
  };

  const triggerDisconnectSignal = () => {
    if (chatListenerRef.current && roomIdRef.current) {
      chatListenerRef.current.send({
        type: "broadcast",
        event: "shout",
        payload: { senderId: userId, type: "exit" },
      });
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !roomId || status !== "matched") return;

    if (chatListenerRef.current) {
      chatListenerRef.current.send({
        type: "broadcast",
        event: "shout",
        payload: { senderId: userId, type: "msg", text: message },
      });

      setMessages((prev) => [...prev, { sender: "you", text: message }]);
      setMessage("");
    }
  };

  const handleSkip = async () => {
    triggerDisconnectSignal();
    cleanupSession();
    startMatchmaking();
  };

  const handleStrangerExit = () => {
    setMessages((prev) => [...prev, { sender: "system", text: "🏳️ Stranger disconnected. Room terminated." }]);
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
      backgroundColor: "#0f172a",
      color: "#f8fafc",
      height: "100dvh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "system-ui, -apple-system, sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      position: "absolute",
      top: 0,
      left: 0,
      overflow: "hidden"
    }}>
      
      {/* HEADER BLOCK */}
      <header style={{
        backgroundColor: "#1e293b",
        borderBottom: "1px solid #334155",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        width: "100%",
        flexShrink: 0
      }}>
        <Link href="/" style={{ textDecoration: "none" }} onClick={triggerDisconnectSignal}>
          <h1 style={{ margin: 0, fontSize: "18px", fontWeight: 900, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#3b82f6" }}>Omegle</span> <span style={{ color: "#f97316" }}>V</span>
          </h1>
        </Link>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          border: "1px solid rgba(16, 185, 129, 0.2)",
          padding: "4px 10px",
          borderRadius: "20px"
        }}>
          <span style={{ height: "6px", width: "6px", backgroundColor: "#10b981", borderRadius: "50%", display: "inline-block" }}></span>
          <span style={{ fontSize: "11px", fontWeight: "bold", color: "#34d399" }}>
            {onlineCount.toLocaleString()} Live
          </span>
        </div>
      </header>

      {/* CHAT MESSAGES SCROLL ENGINE */}
      <div style={{
        flex: 1,
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        boxSizing: "border-box"
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            display: "flex",
            justifyContent: msg.sender === "you" ? "flex-end" : msg.sender === "stranger" ? "flex-start" : "center",
            width: "100%"
          }}>
            {msg.sender === "system" ? (
              <span style={{
                fontSize: "11px",
                color: "#94a3b8",
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                border: "1px solid #334155",
                padding: "4px 12px",
                borderRadius: "20px",
                textAlign: "center"
              }}>
                {msg.text}
              </span>
            ) : (
              <div style={{
                maxWidth: "75%",
                padding: "10px 14px",
                borderRadius: "14px",
                fontSize: "14px",
                lineHeight: "1.4",
                fontWeight: 500,
                color: "#ffffff",
                backgroundColor: msg.sender === "you" ? "#2563eb" : "#1e293b",
                border: msg.sender === "you" ? "none" : "1px solid #334155",
                borderBottomRightRadius: msg.sender === "you" ? "2px" : "14px",
                borderBottomLeftRadius: msg.sender === "stranger" ? "2px" : "14px",
                wordBreak: "break-word"
              }}>
                {msg.text}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* MOBILE KEYBOARD SAFE FOOTER CONTROLS */}
      <div style={{
        backgroundColor: "#1e293b",
        borderTop: "1px solid #334155",
        padding: "10px 12px",
        boxSizing: "border-box",
        width: "100%",
        flexShrink: 0
      }}>
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          gap: "8px",
          width: "100%",
          alignItems: "center"
        }}>
          <button onClick={handleSkip} style={{
            backgroundColor: "#ef4444",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "0 14px",
            fontSize: "13px",
            fontWeight: "bold",
            cursor: "pointer",
            height: "40px"
          }}>
            {status === "matched" ? "Skip" : "Next"}
          </button>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={status !== "matched"}
            placeholder={status === "matched" ? "Type a message..." : "Match disconnected..."}
            style={{
              flex: 1,
              backgroundColor: status === "matched" ? "#0f172a" : "#1e293b",
              border: "1px solid #334155",
              borderRadius: "10px",
              padding: "0 12px",
              color: "#f8fafc",
              fontSize: "14px",
              outline: "none",
              height: "40px",
              boxSizing: "border-box",
              opacity: status === "matched" ? 1 : 0.6
            }}
          />
          
          <button onClick={sendMessage} disabled={status !== "matched"} style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "0 16px",
            fontSize: "13px",
            fontWeight: "bold",
            cursor: "pointer",
            height: "40px",
            opacity: status === "matched" ? 1 : 0.5
          }}>
            Send
          </button>
        </div>
      </div>

    </div>
  );
}
