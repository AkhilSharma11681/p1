import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || "",
  key: process.env.NEXT_PUBLIC_PUSHER_KEY || "",
  secret: process.env.PUSHER_SECRET || "",
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER || "",
  useTLS: true,
});

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const params = new URLSearchParams(rawBody);
    
    const socketId = params.get("socket_id");
    const channelName = params.get("channel_name");
    
    // Dynamic user tracking params extraction
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId") || `user-${Math.floor(Math.random() * 100000)}`;

    if (!socketId || !channelName) {
      return new NextResponse("Missing required parameters", { status: 400 });
    }

    const presenceData = {
      user_id: userId,
      user_info: { name: "Stranger", joinedAt: Date.now() }
    };

    // CRITICAL FIX: Directly generate authorized token object
    const authResponse = pusher.authenticate(socketId, channelName, presenceData);
    
    // Return standard object headers signature to Pusher Client SDK
    return NextResponse.json(authResponse);

  } catch (error: any) {
    console.error("Pusher Server Auth Failure:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}