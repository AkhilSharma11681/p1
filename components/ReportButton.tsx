"use client";

export default function ReportButton({
  partnerId,
}: {
  partnerId?: string;
}) {
  async function reportUser() {
    try {
      await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reportedUser: partnerId || "unknown",
        }),
      });

      alert("User reported successfully.");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={reportUser}
      style={{
        padding: "0 18px",
        backgroundColor: "#f59e0b",
        color: "white",
        border: "none",
        borderRadius: "12px",
        fontWeight: "bold",
      }}
    >
      Report
    </button>
  );
}
