import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat With Strangers Safely Online",
  description:
    "Learn how to chat with strangers online safely and anonymously.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1>Chat With Strangers Safely Online</h1>

      <p>
        Anonymous chat can be fun when basic online safety practices
        are followed.
      </p>

      <h2>Safety Tips</h2>

      <ul>
        <li>Never share personal information</li>
        <li>Avoid sending money</li>
        <li>Report abusive users</li>
      </ul>
    </main>
  );
}
