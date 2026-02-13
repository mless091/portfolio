"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

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
      className="relative flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md transition border border-slate-700"
      aria-label="Copy email address"
    >
      {/* Swap Icon on Click for feedback */}
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Mail className="w-4 h-4" />
      )}
      
      <span>Email</span>

      {/* Floating Tooltip */}
      {copied && (
        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-slate-950 text-green-400 px-3 py-1.5 rounded-md border border-slate-800 shadow-xl whitespace-nowrap z-50">
          Copied!
        </span>
      )}
    </button>
  );
}