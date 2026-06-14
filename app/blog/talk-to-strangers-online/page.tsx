import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk To Strangers Online",
  description: "Meet and talk to strangers online safely and anonymously."
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1>Talk To Strangers Online</h1>
      <p>
        Talking to strangers online is one of the easiest ways to meet new people,
        discover different cultures, and have interesting conversations.
      </p>
    </main>
  );
}
