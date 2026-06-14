
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};


import { Suspense } from "react";
import ChatClient from "./ChatClient";

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div style={{ 
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, 
        backgroundColor: "#0f172a", color: "#fff", 
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "18px"
      }}>
        Loading chat...
      </div>
    }>
      <ChatClient />
    </Suspense>
  );
}
