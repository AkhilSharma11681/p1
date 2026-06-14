export const metadata = {
  title: "Privacy Policy | Omeglev",
  description: "Privacy policy for Omeglev anonymous random chat."
}

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1>Privacy Policy</h1>

      <p>
        Omeglev provides anonymous random chat services.
        We do not require account creation.
      </p>

      <h2>Information We Collect</h2>

      <ul>
        <li>Anonymous session identifiers</li>
        <li>Basic analytics information</li>
      </ul>

      <h2>Data Usage</h2>

      <p>
        Data is used only to provide chat functionality and improve service quality.
      </p>
    </main>
  );
}