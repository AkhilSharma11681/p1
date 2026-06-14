import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anonymous Chat Online",
  description: "Anonymous chat with strangers online without signup.",
};

export default function AnonymousChatPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1>Anonymous Chat Online</h1>

      <p>
        Chat anonymously with strangers online without creating an account.
      </p>
    </main>
  );
}
