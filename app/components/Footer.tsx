"use client";

import React from "react";
import { TerminalIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-card)",
        padding: "36px 0",
        position: "relative",
        zIndex: 10,
        transition: "all 250ms ease",
      }}
    >
      <div className="app-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Brand & Note */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              <TerminalIcon size={16} />
            </div>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-white)" }}>
                Md. Sajidur Rahman
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                5+ Years Senior Front-End Developer • Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Contact quick links */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.84rem", flexWrap: "wrap" }}>
            <a
              href="mailto:sajidchowdhury1612@gmail.com"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              sajidchowdhury1612@gmail.com
            </a>
            <span style={{ color: "var(--text-muted)" }}>•</span>
            <a
              href="https://github.com/sajid-rgb"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              GitHub
            </a>
            <span style={{ color: "var(--text-muted)" }}>•</span>
            <a
              href="https://www.linkedin.com/in/md-sajidur-rahman-a10b8895/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              LinkedIn
            </a>
          </div>

          {/* Quick Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: "9999px", fontSize: "0.78rem" }}
          >
            <span>Back to Top ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
