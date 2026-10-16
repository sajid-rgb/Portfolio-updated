"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightIcon, SparklesIcon, GaugeIcon, LayersIcon, CopyIcon, CheckIcon, MailIcon } from "./Icons";

interface HeroSectionProps {
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export default function HeroSection({ onCopyEmail, copiedEmail }: HeroSectionProps) {
  const roles = [
    "Full-Stack Engineer | React, Next.js & Node.js",
    "Enterprise ERP Specialist for Garment Manufacturing",
    "TypeScript, NestJS, Express.js & MongoDB Architect",
    "Automated Testing (Vitest & React Testing Library)",
    "High-Performance Data Grids, React-PDF & pdfMake",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "135px",
        paddingBottom: "70px",
        position: "relative",
      }}
    >
      <div className="app-container">
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          {/* Status & Experience Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 18px",
              borderRadius: "9999px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-glass)",
              boxShadow: "var(--shadow-sm)",
              backdropFilter: "blur(12px)",
              marginBottom: "22px",
            }}
          >
            <span className="status-beacon" />
            <span
              style={{
                fontSize: "0.84rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.01em",
              }}
            >
              Software Engineer @ Echotex Ltd
            </span>
            <span
              style={{
                fontSize: "0.74rem",
                color: "var(--accent-primary)",
                background: "var(--gradient-badge)",
                padding: "2px 8px",
                borderRadius: "9999px",
                fontWeight: 700,
              }}
            >
              5+ YOE
            </span>
          </div>

          {/* Name Label */}
          <div style={{ marginBottom: "12px" }}>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--accent-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Md. Sajidur Rahman
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "-0.035em",
              color: "var(--text-white)",
              marginBottom: "20px",
            }}
          >
            Building Scalable <span className="text-gradient">Enterprise ERP &amp; Full-Stack Systems</span> with High-Impact Performance
          </h1>

          {/* Dynamic Role Subtitle */}
          <div
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.28rem)",
              fontWeight: 600,
              color: "var(--accent-primary)",
              minHeight: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <SparklesIcon size={18} />
            <span style={{ transition: "all 300ms ease" }}>
              {roles[roleIndex]}
            </span>
          </div>

          {/* Bio from CV */}
          <p
            style={{
              fontSize: "clamp(0.98rem, 1.25vw, 1.12rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "760px",
              margin: "0 auto 36px auto",
            }}
          >
            Full-Stack Engineer with <strong>5 years of experience</strong> architecting and scaling business-critical enterprise applications. 
            Deep expertise in <strong>React.js, TypeScript, Next.js</strong>, and modern state architectures, with practical hands-on knowledge in backend development using <strong>Node.js, Express.js, NestJS, and MongoDB</strong>. 
            Proven track record optimizing complex ERP workflows for garment factory users, building reusable UI libraries cutting sprint times by 25%, and executing automated testing (<strong>Vitest, React Testing Library</strong>).
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "52px",
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Production Projects</span>
              <ArrowRightIcon size={17} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <MailIcon size={17} />
              <span>Get in Touch</span>
            </a>
            <button
              onClick={onCopyEmail}
              className="btn btn-ghost"
              style={{
                border: "1px solid var(--border-subtle)",
              }}
            >
              {copiedEmail ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Key Metric Highlights Bento Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "16px",
              padding: "24px",
              borderRadius: "20px",
              background: "var(--bg-card)",
              backdropFilter: "blur(16px)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Metric 1 */}
            <div style={{ textAlign: "center", padding: "8px" }}>
              <div
                style={{
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--text-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <span>5+</span>
                <span style={{ fontSize: "1.1rem", color: "var(--accent-primary)" }}>Years</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Full-Stack Engineering
              </div>
            </div>

            {/* Metric 2 */}
            <div style={{ textAlign: "center", padding: "8px" }}>
              <div
                style={{
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--accent-emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <GaugeIcon size={20} />
                <span>+25%</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Sprint Delivery Speed Boost
              </div>
            </div>

            {/* Metric 3 */}
            <div style={{ textAlign: "center", padding: "8px" }}>
              <div
                style={{
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--accent-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <span>Zero</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Redundant Re-Renders
              </div>
            </div>

            {/* Metric 4 */}
            <div style={{ textAlign: "center", padding: "8px" }}>
              <div
                style={{
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--accent-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <LayersIcon size={20} />
                <span>Global</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Bangladesh, Norway &amp; USA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
