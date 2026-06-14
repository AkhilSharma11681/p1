import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Omegle Alternative for Random Chat in 2026",
  description:
    "Looking for the best Omegle alternative? Chat anonymously with strangers online without signup.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1>Best Omegle Alternative for Random Chat in 2026</h1>

      <p>
        Omeglev is a modern random chat platform that helps people
        connect with strangers instantly without registration.
      </p>

      <h2>Why People Need an Omegle Alternative</h2>

      <p>
        Many users are looking for safer and simpler ways to meet new
        people online. Anonymous chat platforms allow users to talk
        freely while protecting privacy.
      </p>

      <h2>Features</h2>

      <ul>
        <li>Anonymous chatting</li>
        <li>No signup required</li>
        <li>Instant matching</li>
        <li>Mobile friendly</li>
      </ul>

      <h2>Start Chatting</h2>

      <p>
        Ready to meet new people?
      </p>

      <Link href="/chat">
        Start Random Chat
      </Link>
    </main>
  );
}
