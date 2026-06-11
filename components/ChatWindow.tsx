"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Pusher from "pusher-js";
import { v4 as uuidv4 } from "uuid";

interface Message {
  id: string;
  sender: "me" | "stranger" | "system";
  text: string;
}

export default function ChatWindow() {
  const [isMounted, setIsMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", sender: "system", text: "Connecting to serverless pool..." },
  ]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [status, setStatus] = useState<"connecting" | "searching" | "connected">("connecting");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pusherRef = useRef<Pusher | null>(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startMatching = async () => {
    if (!userId) return;
    setStatus("searching");
    setRoomId(null);
    setMessages([
      { id: "sys-1", sender: "system", text: "Looking for a friendly stranger..." }
    ]);

    if (!pusherRef.current) {
      pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
      });
    }

    const pusher = pusherRef.current;
    const userChannel = pusher.subscribe(`user-${userId}`);

    userChannel.bind("matched", (data: { roomId: string }) => {
      setRoomId(data.roomId);
      setStatus("connected");
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: "system", text: "You're now chatting with a random stranger. Say hi!" },
      ]);

      const roomChannel = pusher.subscribe(`room-${data.roomId}`);
      roomChannel.bind("message", (msg: { senderId: string; text: string }) => {
        if (msg.senderId !== userId) {
          setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), sender: "stranger", text: msg.text },
          ]);
        }
      });
    });

    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, action: "findMatch", socketId: pusher.connection.socket_id }),
    });
  };

  useEffect(() => {
    setIsMounted(true);
    setUserId(uuidv4());
  }, []);

  useEffect(() => {
    if (userId) {
      startMatching();
    }
    return () => {
      if (pusherRef.current) {
        pusherRef.current.disconnect();
      }
    };
  }, [userId]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !roomId) return;

    const textToSend = input;
    setInput("");

    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "me", text: textToSend }]);

    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, roomId, action: "sendMessage", text: textToSend }),
    });
  };

  const handleSkip = () => {
    if (roomId && pusherRef.current) {
      pusherRef.current.unsubscribe(`room-${roomId}`);
    }
    startMatching();
  };

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-gray-500 font-sans text-sm tracking-widest uppercase">
        Loading Chat Engine...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4.5rem)] w-full max-w-5xl mx-auto bg-white font-mono text-[15px]">
      {/* Classic Chat Stream Box */}
      <div className="flex-1 overflow-y-auto p-6 space-y-2 selection:bg-blue-100">
        {messages.map((msg) => (
          <div key={msg.id} className="leading-relaxed whitespace-pre-wrap break-words">
            {msg.sender === "system" && (
              <p className="text-gray-400 text-xs font-sans font-semibold py-2 text-center select-none uppercase tracking-wide">
                {msg.text}
              </p>
            )}
            {msg.sender === "me" && (
              <p>
                <span className="text-blue-600 font-bold select-none">You:</span>{" "}
                <span className="text-gray-900 font-sans">{msg.text}</span>
              </p>
            )}
            {msg.sender === "stranger" && (
              <p>
                <span className="text-red-500 font-bold select-none">Stranger:</span>{" "}
                <span className="text-gray-900 font-sans">{msg.text}</span>
              </p>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Classic Flat Footer Controls Panel */}
      <form onSubmit={handleSend} className="border-t border-gray-300 bg-gray-50 flex items-center h-20 w-full">
        <button 
          type="button"
          onClick={handleSkip}
          className="h-full px-6 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-200 hover:from-gray-100 hover:to-gray-200 border-r border-gray-300 text-gray-800 font-bold text-sm sm:text-base active:bg-gray-300 transition-all select-none leading-tight"
        >
          {status === "connected" ? "Stop" : "Skip"}<br/>
          <span className="text-[10px] font-normal text-gray-400 uppercase tracking-wider">(Esc)</span>
        </button>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "connected"}
          onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(e); } }}
          placeholder={status === "connected" ? "Type your message here..." : "Waiting for a stranger connection..."}
          className="flex-1 h-full px-4 py-6 bg-transparent text-gray-900 placeholder-gray-400 text-base focus:outline-none resize-none font-sans disabled:opacity-40"
        />

        <button 
          type="submit"
          disabled={status !== "connected"}
          className="h-full px-8 sm:px-12 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all tracking-wide disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed select-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}