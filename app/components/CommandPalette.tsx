"use client";

import React, { useState, useEffect, useRef } from "react";
import { SearchIcon, CloseIcon, TerminalIcon, SunIcon, ArrowRightIcon } from "./Icons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onCopyEmail: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Action" | "Social";
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  theme,
  onToggleTheme,
  onCopyEmail,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const commands: CommandItem[] = [
    {
      id: "projects",
      title: "Jump to: Featured Case Studies & Production Systems",
      category: "Navigation",
      shortcut: "P",
      action: () => scrollToSection("projects"),
    },
    {
      id: "skills",
      title: "Jump to: Technical Stack & Capabilities Matrix",
      category: "Navigation",
      shortcut: "S",
      action: () => scrollToSection("skills"),
    },
    {
      id: "journey",
      title: "Jump to: Experience & Career History",
      category: "Navigation",
      shortcut: "E",
      action: () => scrollToSection("journey"),
    },
    {
      id: "contact",
      title: "Jump to: Direct Contact Station",
      category: "Navigation",
      shortcut: "C",
      action: () => scrollToSection("contact"),
    },
    {
      id: "toggle-theme",
      title: theme === "dark" ? "Switch to White (Light) Mode" : "Switch to Dark Mode",
      category: "Action",
      shortcut: "T",
      action: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: "copy-email",
      title: "Copy Email: sajidchowdhury1612@gmail.com",
      category: "Action",
      shortcut: "@",
      action: () => {
        onCopyEmail();
        onClose();
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile (@sajid-rgb)",
      category: "Social",
      action: () => {
        window.open("https://github.com/sajid-rgb", "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile (md-sajidur-rahman)",
      category: "Social",
      action: () => {
        window.open("https://www.linkedin.com/in/md-sajidur-rahman", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        setSelectedIndex(0);
        setQuery("");
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "14vh",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "var(--bg-surface-elevated)",
          border: "1px solid var(--border-glass)",
          borderRadius: "20px",
          boxShadow: "var(--shadow-card)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid var(--border-subtle)",
            gap: "12px",
          }}
        >
          <div style={{ color: "var(--accent-primary)", display: "flex", alignItems: "center" }}>
            <SearchIcon size={18} />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--text-white)",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: "360px", overflowY: "auto", padding: "8px" }}>
          {filteredCommands.length === 0 ? (
            <div
              style={{
                padding: "32px",
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              No matching commands found
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: isSelected ? "var(--gradient-badge)" : "transparent",
                    border: isSelected
                      ? "1px solid var(--accent-primary)"
                      : "1px solid transparent",
                    cursor: "pointer",
                    transition: "all 100ms ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        color: isSelected ? "var(--accent-primary)" : "var(--text-muted)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {cmd.category === "Action" ? (
                        <SunIcon size={16} />
                      ) : cmd.category === "Social" ? (
                        <ArrowRightIcon size={16} />
                      ) : (
                        <TerminalIcon size={16} />
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: isSelected ? 700 : 500,
                        color: isSelected ? "var(--text-white)" : "var(--text-primary)",
                      }}
                    >
                      {cmd.title}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      {cmd.category}
                    </span>
                    {cmd.shortcut && (
                      <kbd
                        style={{
                          fontSize: "0.72rem",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          background: "var(--border-subtle)",
                          color: "var(--text-secondary)",
                          fontFamily: "monospace",
                        }}
                      >
                        {cmd.shortcut}
                      </kbd>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer hints */}
        <div
          style={{
            padding: "10px 18px",
            borderTop: "1px solid var(--border-subtle)",
            background: "var(--bg-subtle)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.74rem",
            color: "var(--text-muted)",
          }}
        >
          <span>Use ↑↓ to navigate, Enter to select</span>
          <span>Esc to exit</span>
        </div>
      </div>
    </div>
  );
}
