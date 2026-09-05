"use client";

import React from "react";
import { CheckIcon, SparklesIcon } from "./Icons";

interface ToastProps {
  message: string | null;
  type?: "success" | "info";
}

export default function Toast({ message, type = "success" }: ToastProps) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 300,
        background: "var(--bg-surface-elevated)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid var(--accent-primary)",
        boxShadow: "var(--shadow-card), 0 0 20px var(--accent-glow)",
        borderRadius: "9999px",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "var(--text-primary)",
        fontSize: "0.86rem",
        fontWeight: 600,
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: type === "success" ? "var(--accent-emerald)" : "var(--accent-primary)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {type === "success" ? <CheckIcon size={12} /> : <SparklesIcon size={12} />}
      </div>
      <span>{message}</span>
    </div>
  );
}
