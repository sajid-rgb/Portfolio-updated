"use client";

import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import SkillsRadar from "./components/SkillsRadar";
import CareerTimeline from "./components/CareerTimeline";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import Toast from "./components/Toast";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = prefersDark ? "dark" : "light";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("portfolio_theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
      } catch (err) {
        console.error(err);
      }
      showToast(`Activated ${nextTheme === "light" ? "White (Light)" : "Dark"} Mode 🌓`);
      return nextTheme;
    });
  }, [showToast]);

  const handleCopyEmail = useCallback(() => {
    const email = "sajidchowdhury1612@gmail.com";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopiedEmail(true);
    showToast("Email copied to clipboard: sajidchowdhury1612@gmail.com 📋");
    setTimeout(() => setCopiedEmail(false), 3000);
  }, [showToast]);

  // Keyboard shortcut listener for Cmd+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Floating Modern Header Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Hero Section */}
      <HeroSection
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
      />

      {/* Featured Production Case Studies */}
      <CaseStudiesSection />

      {/* Core Technical Stack & Capabilities Matrix */}
      <SkillsRadar />

      {/* Career Experience & Education Timeline */}
      <CareerTimeline />

      {/* Direct Contact Hub */}
      <ContactSection
        onCopyEmail={handleCopyEmail}
        copied={copiedEmail}
      />

      {/* Minimal Footer */}
      <Footer />

      {/* Command Palette Modal (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onCopyEmail={handleCopyEmail}
      />

      {/* Dynamic Feedback Toast */}
      <Toast message={toastMessage} />
    </main>
  );
}
