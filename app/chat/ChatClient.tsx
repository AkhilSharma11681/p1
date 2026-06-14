"use client";

import ReportButton from "@/components/ReportButton";

import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const botResponses = [
  "Hey! How's it going? 😊", "What are your hobbies?", "I'm into gaming, what about you?",
  "Favorite music genre?", "This is fun 😂", "Where are you from?", "Do you like movies?"
];

export default function ChatClient() {
  const searchParams = useSearchParams();
  const interests = searchParams.get("interests") || "";
  
  const [userId] = useState(() => uuidv4());
  const [status, setStatus] = useState<"idle" | "waiting" | "matched" | "bot">("idle");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [onlineCount, setOnlineCount] = useState(142);
  const [isBot, setIsBot] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const pollingRef = useRef<any>(null);
  const chatListenerRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => Math.max(87, prev + Math.floor(Math.random() * 4) - 1));
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const startMatchmaking = async () => {
    setStatus("waiting");
    setMessages([{ sender: "system", text: interests ? `🔍 Finding someone interested in ${interests}...` : "🔍 Looking for a stranger..." }]);

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
      setIsBot(false);
      setMessages([{ sender: "system", text: "🤝 Connected! Say hi 👋" }]);
      listenForMessages(generatedRoomId);
    } else {
      await supabase.from("chat_queue").upsert({ user_id: userId, status: "waiting", matched_with: null });
      setTimeout(async () => {
        const { data } = await supabase
          .from("chat_queue")
          .select("status")
          .eq("user_id", userId)
          .single();

        if (data?.status === "waiting") {
          connectToBot();
        }
      }, 3500);
    }
  };

  const connectToBot = () => {
    setStatus("bot");
    setIsBot(true);
    setMessages((prev) => [...prev, { sender: "system", text: "🤖 Connected to AI Bot (no one online right now)" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "stranger", text: "Hi! 👋 What brings you here today?" }]);
    }, 800);
  };

  const listenForMessages = (activeRoomId: string) => {
    if (chatListenerRef.current) supabase.removeChannel(chatListenerRef.current);
    chatListenerRef.current = supabase.channel(activeRoomId)
      .on("broadcast", { event: "shout" }, (payload: any) => {
        if (payload.payload.senderId !== userId && payload.payload.type === "msg") {
          setMessages((prev) => [...prev, { sender: "stranger", text: payload.payload.text }]);
        } else if (payload.payload.type === "exit") {
          handleStrangerExit();
        }
      }).subscribe();
  };

  const sendMessage = () => {
    if (status !== "matched" && status !== "bot") {
      alert("Please wait until connected.");
      return;
    }

    if (!message.trim()) return;
    const text = message.trim();
    setMessages((prev) => [...prev, { sender: "you", text }]);
    setMessage("");

    if (isBot) {
      setTimeout(() => {
        const reply = botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages((prev) => [...prev, { sender: "stranger", text: reply }]);
      }, 600 + Math.random() * 700);
    } else if (chatListenerRef.current && roomId) {
      chatListenerRef.current.send({
        type: "broadcast", event: "shout",
        payload: { senderId: userId, type: "msg", text }
      });
    }
  };

  const handleSkip = () => {
    if (!isBot && roomId) {
      chatListenerRef.current?.send({
        type: "broadcast", event: "shout",
        payload: { senderId: userId, type: "exit" }
      });
    }
    startMatchmaking();
  };

  const handleStrangerExit = () => {
    setMessages((prev) => [...prev, { sender: "system", text: "🏃‍♂️ Stranger left the chat." }]);
    setStatus("idle");
    setRoomId(null);
  };

  const handleReport = async () => {
    if (!roomId) return;
    const reason = prompt("Why are you reporting? (short reason)");
    if (!reason) return;

    await supabase.from("reports").upsert({
      reported_by: userId,
      room_id: roomId,
      reason,
      timestamp: new Date().toISOString()
    });

    alert("✅ Report submitted. Thank you!");
    handleSkip();
  };

  const shareApp = () => {
    const text = "Come chat with me on Omegle V! 🔥\nhttps://omeglev.com";
    if (navigator.share) {
      navigator.share({ title: "Omegle V", text });
    } else {
      navigator.clipboard.writeText(text);
      alert("✅ Link copied! Share it with friends.");
    }
  };

  useEffect(() => {
    startMatchmaking();
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
      if (chatListenerRef.current) supabase.removeChannel(chatListenerRef.current);
    };
  }, [userId]);

  return (
    <div style={{ 
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: "#0f172a", color: "#f8fafc", 
      display: "flex", flexDirection: "column", overflow: "hidden", 
      fontFamily: "system-ui, sans-serif", touchAction: "manipulation"
    }}>
      <header style={{ backgroundColor: "#1e293b", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #334155" }}>
        <Link href="/" style={{ fontSize: "18px", fontWeight: 900 }}>
          <span style={{ color: "#3b82f6" }}>Omegle</span><span style={{ color: "#f97316" }}>V</span>
        </Link>
        <div style={{ fontSize: "11px", color: "#34d399", backgroundColor: "rgba(16,185,129,0.1)", padding: "4px 10px", borderRadius: "9999px" }}>
          {onlineCount} online
        </div>
      </header>

      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.sender === "you" ? "flex-end" : "flex-start" }}>
            {msg.sender === "system" ? (
              <div style={{ background: "#1e293b", padding: "8px 16px", borderRadius: "9999px", fontSize: "13px", color: "#94a3b8", alignSelf: "center" }}>{msg.text}</div>
            ) : (
              <div style={{
                maxWidth: "75%", padding: "11px 15px", borderRadius: msg.sender === "you" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                backgroundColor: msg.sender === "you" ? "#2563eb" : "#1f2937", color: "#fff", fontSize: "15px"
              }}>
                {msg.text}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ backgroundColor: "#1e293b", padding: "12px", borderTop: "1px solid #334155" }}>
        <div style={{ display: "flex", gap: "8px", maxWidth: "640px", margin: "0 auto" }}>
          <button onClick={handleSkip} style={{ padding: "0 18px", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold" }}>Next</button>
          
          <input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={status !== "matched" && status !== "bot"}
            placeholder={isBot ? "Chatting with AI Bot..." : "Wait until connected..."}
            style={{ flex: 1, padding: "12px 16px", backgroundColor: "#0f172a", border: "1px solid #475569", borderRadius: "12px", color: "#fff", fontSize: "16px" }}
          />
          
          <button onClick={sendMessage} disabled={status !== "matched" && status !== "bot"} style={{ padding: "0 24px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold" }}>Send</button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "12px" }}>
          {!isBot && (
            <button onClick={() => setShowReport(!showReport)} style={{ color: "#f87171", fontSize: "13px", background: "none", border: "none" }}>
              🚩 Report
            </button>
          )}
          <button onClick={shareApp} style={{ color: "#60a5fa", fontSize: "13px", background: "none", border: "none" }}>
            🔗 Invite Friend
          </button>
        </div>

        {showReport && (
          <button onClick={handleReport} style={{ marginTop: "8px", backgroundColor: "#b91c1c", color: "white", border: "none", padding: "10px", borderRadius: "8px", width: "100%" }}>
            Submit Report
          </button>
        )}

        {isBot && <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px", color: "#64748b" }}>🤖 AI Bot Mode • Real users coming soon</p>}
      </div>
    </div>
  );
}
