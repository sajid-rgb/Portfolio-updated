"use client";

import React, { useState, useEffect } from "react";
import { SearchIcon, SunIcon, MoonIcon, TerminalIcon } from "./Icons";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({
  onOpenCommandPalette,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? "12px 20px" : "18px 24px",
        transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "var(--bg-surface)"
            : "var(--bg-card)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--border-glass)",
          borderRadius: "9999px",
          padding: "8px 20px",
          boxShadow: scrolled
            ? "var(--shadow-card)"
            : "var(--shadow-sm)",
          transition: "all 250ms ease",
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "var(--text-white)",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 2px 10px var(--accent-glow)",
            }}
          >
            <TerminalIcon size={16} />
          </div>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Sajidur Rahman</span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--accent-primary)",
                background: "var(--gradient-badge)",
                border: "1px solid var(--border-glass)",
                padding: "2px 7px",
                borderRadius: "9999px",
                fontWeight: 700,
              }}
            >
              5+ YOE
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          <a
            href="#projects"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 500,
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Featured Projects
          </a>
          <a
            href="#skills"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 500,
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Technical Stack
          </a>
          <a
            href="#journey"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 500,
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Experience
          </a>
          <a
            href="#contact"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 500,
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Contact
          </a>
        </nav>

        {/* Action Controls: Theme Switcher & Cmd+K */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Dark / White Mode Switcher */}
          <button
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to White Mode" : "Switch to Dark Mode"}
            title={theme === "dark" ? "Switch to White Mode" : "Switch to Dark Mode"}
            style={{
              background: "var(--bg-card-hover)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
              borderRadius: "9999px",
              padding: "7px 12px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: 600,
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {theme === "dark" ? (
              <>
                <SunIcon size={15} style={{ color: "#f59e0b" }} />
                <span className="theme-btn-label">White</span>
              </>
            ) : (
              <>
                <MoonIcon size={15} style={{ color: "#6366f1" }} />
                <span className="theme-btn-label">Dark</span>
              </>
            )}
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette"
            style={{
              background: "var(--bg-card-hover)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              borderRadius: "9999px",
              padding: "7px 12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontSize: "0.82rem",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <SearchIcon size={14} />
            <span style={{ fontWeight: 500 }} className="search-btn-label">Search</span>
            <kbd
              style={{
                fontSize: "0.68rem",
                padding: "2px 6px",
                borderRadius: "4px",
                background: "var(--border-subtle)",
                color: "var(--text-primary)",
                fontFamily: "monospace",
              }}
            >
              ⌘K
            </kbd>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            Hire Sajid
          </a>
        </div>
      </div>
    </header>
  );
}
