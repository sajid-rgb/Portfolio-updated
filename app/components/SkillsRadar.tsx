"use client";

import React, { useState, useMemo } from "react";
import { CpuIcon, SearchIcon, CheckIcon, SparklesIcon } from "./Icons";

interface SkillItem {
  name: string;
  category: "frontend" | "styling" | "backend" | "tools";
  level: "Expert" | "Advanced" | "Proficient";
  details: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: "React & Next.js",
    category: "frontend",
    level: "Expert",
    details: "Component architecture, SSR/SSG, virtualized data grids, and memory tuning for 1,500+ ERP users.",
  },
  {
    name: "TypeScript & JavaScript (ES6+)",
    category: "frontend",
    level: "Expert",
    details: "Strict types, generic constraints, advanced async flows, and scalable enterprise codebases.",
  },
  {
    name: "Zustand & Redux Toolkit",
    category: "frontend",
    level: "Expert",
    details: "Decoupled global state, atomic Zustand store slices, and RTK slice machine state orchestration.",
  },
  {
    name: "RTK Query & Apollo GraphQL",
    category: "frontend",
    level: "Expert",
    details: "Normalized client caching, optimistic updates, and multi-endpoint data ingestion.",
  },
  {
    name: "React Hook Form & Yup",
    category: "frontend",
    level: "Expert",
    details: "High-speed uncontrolled form inputs eliminating re-renders during massive data input workflows.",
  },
  {
    name: "pdfmake & React PDF",
    category: "frontend",
    level: "Expert",
    details: "Client-side PDF generation of complex multi-column ERP invoices, financial tables, and shipping manifests.",
  },
  {
    name: "React Native",
    category: "frontend",
    level: "Advanced",
    details: "Cross-platform mobile apps for iOS and Android with real-time Firebase & Cloud Firestore sync.",
  },
  {
    name: "Vue.js & Meteor",
    category: "frontend",
    level: "Proficient",
    details: "Component lifecycle, reactivity, and framework evaluation for modern frontend web applications.",
  },

  // Styling & UI
  {
    name: "Tailwind CSS",
    category: "styling",
    level: "Expert",
    details: "Design system tokens, custom utilities, responsive layouts, and modern ergonomic dashboards.",
  },
  {
    name: "Material UI (MUI)",
    category: "styling",
    level: "Expert",
    details: "Enterprise component theming, data tables, dialogs, and admin panel interfaces for Echologyx ERP.",
  },
  {
    name: "Styled-Components",
    category: "styling",
    level: "Expert",
    details: "CSS-in-JS scoped styles, dynamic props-based styling, and theme provider orchestration.",
  },
  {
    name: "CSS3, SASS & Bootstrap",
    category: "styling",
    level: "Expert",
    details: "Fluid flexbox/grid layouts, responsive breakpoints, animations, and Scandinavian UI in Unite Living.",
  },

  // Backend & Database
  {
    name: "Node.js & Express.js",
    category: "backend",
    level: "Advanced",
    details: "REST API endpoints, middleware authentication, business logic validation, and microservices.",
  },
  {
    name: "Firebase & Cloud Firestore",
    category: "backend",
    level: "Advanced",
    details: "Real-time NoSQL document synchronization, snapshot listeners, and mobile backend integrations.",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: "Advanced",
    details: "Document schema modeling, aggregation pipelines, and query optimization for web applications.",
  },
  {
    name: "Python",
    category: "backend",
    level: "Proficient",
    details: "Scripting, algorithmic problem solving, and automation workflows.",
  },

  // Tools & Workflow
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Expert",
    details: "Branching strategies, pull requests, thorough peer code reviews, and version control workflows.",
  },
  {
    name: "Jira, Trello & Monday.com",
    category: "tools",
    level: "Expert",
    details: "Agile sprints, backlog grooming, ticket tracking, and cross-functional team project delivery.",
  },
];

export default function SkillsRadar() {
  const [filter, setFilter] = useState<"all" | "frontend" | "styling" | "backend" | "tools">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory = filter === "all" || skill.category === filter;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.details.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="skills" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <CpuIcon size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Core Skills &amp; <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested across 5+ years of shipping enterprise ERP solutions, scalable web systems, and high-performance apps.
          </p>
        </div>

        {/* Filter & Live Search Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {[
              { id: "all", label: "All Skills (18)" },
              { id: "frontend", label: "Frontend & Mobile" },
              { id: "styling", label: "Styling & UI Systems" },
              { id: "backend", label: "Backend & Cloud" },
              { id: "tools", label: "Tools & Agile" },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className="btn btn-sm"
                  style={{
                    borderRadius: "9999px",
                    background: isActive ? "var(--gradient-badge)" : "var(--bg-card)",
                    border: isActive
                      ? "1px solid var(--accent-primary)"
                      : "1px solid var(--border-subtle)",
                    color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                    fontWeight: isActive ? 700 : 500,
                    boxShadow: isActive ? "0 0 16px var(--accent-glow)" : "none",
                    cursor: "pointer",
                    transition: "all 150ms ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Filter Search Input */}
          <div
            style={{
              position: "relative",
              minWidth: "240px",
              maxWidth: "320px",
              flex: "1 1 240px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Zustand, PDF)..."
              style={{
                width: "100%",
                padding: "9px 14px 9px 38px",
                borderRadius: "9999px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontSize: "0.85rem",
                outline: "none",
                transition: "all 200ms ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--border-subtle)",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.06rem",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    lineHeight: 1.3,
                  }}
                >
                  {skill.name}
                </h3>
                <span
                  style={{
                    fontSize: "0.72rem",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background:
                      skill.level === "Expert"
                        ? "rgba(16, 185, 129, 0.12)"
                        : "var(--gradient-badge)",
                    border:
                      skill.level === "Expert"
                        ? "1px solid rgba(16, 185, 129, 0.3)"
                        : "1px solid var(--border-glass)",
                    color:
                      skill.level === "Expert"
                        ? "var(--accent-emerald)"
                        : "var(--accent-primary)",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.level}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.55,
                  marginTop: "auto",
                }}
              >
                {skill.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
