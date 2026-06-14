import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Chat Online With Strangers",
  description:
    "Start random chat online with strangers instantly. Anonymous and free.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1>Random Chat Online With Strangers</h1>

      <p>
        Random chat allows people from around the world to connect
        instantly and have conversations without creating accounts.
      </p>

      <h2>Benefits of Random Chat</h2>

      <ul>
        <li>Meet new people</li>
        <li>Practice languages</li>
        <li>Make friends</li>
        <li>Enjoy anonymous conversations</li>
      </ul>
    </main>
  );
}
