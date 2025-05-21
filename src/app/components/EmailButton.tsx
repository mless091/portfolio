"use client";

import { useState } from "react";

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  const email = "mless091@gmail.com";

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 bg-zinc-700 rounded-md text-white hover:bg-zinc-600 transition relative"
    >
      {/* {email} */}
      Email
      {copied && (
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-zinc-800 px-2 py-1 rounded text-green-400">
          Copied!
        </span>
      )}
    </button>
  );
}
