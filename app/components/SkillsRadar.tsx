"use client";

import React, { useState, useMemo } from "react";
import { CpuIcon, SearchIcon } from "./Icons";

export type SkillCategory = "all" | "frontend" | "backend" | "cloud" | "styling" | "testing";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "styling" | "testing";
  level: "Expert" | "Advanced" | "Proficient";
  details: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend & State
  {
    name: "React.js & Next.js",
    category: "frontend",
    level: "Expert",
    details: "Architecting high-performance enterprise web apps, SSR, memoization, and complex ERP workflows.",
  },
  {
    name: "TypeScript & JavaScript (ES6+)",
    category: "frontend",
    level: "Expert",
    details: "Strict types, generic constraints, asynchronous architectures, and scalable enterprise design patterns.",
  },
  {
    name: "Redux Toolkit, Zustand & RTK Query",
    category: "frontend",
    level: "Expert",
    details: "State optimization, normalized caching, and decoupled state management eliminating redundant re-renders.",
  },
  {
    name: "React Native",
    category: "frontend",
    level: "Advanced",
    details: "Cross-platform mobile apps for iOS and Android with Styled Components & real-time Firebase sync.",
  },
  {
    name: "Vue.js & Context API",
    category: "frontend",
    level: "Advanced",
    details: "Component lifecycle, reactivity, and technical proof-of-concept migration feasibility prototypes.",
  },
  {
    name: "HTML5, CSS3 & Sass",
    category: "frontend",
    level: "Expert",
    details: "Semantic markup, modern CSS layouts, responsive design, and maintainable CSS preprocessor architectures.",
  },

  // Backend & Databases
  {
    name: "Node.js & Express.js",
    category: "backend",
    level: "Advanced",
    details: "RESTful API development, asynchronous middleware pipelines, and scalable backend microservices.",
  },
  {
    name: "NestJS",
    category: "backend",
    level: "Advanced",
    details: "Modular backend architecture, dependency injection, request validation (DTOs), and clean API services.",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: "Advanced",
    details: "Document schema modeling, aggregation pipelines, query optimization, and indices for logistics tracking.",
  },
  {
    name: "PostgreSQL & SQL",
    category: "backend",
    level: "Advanced",
    details: "Relational database modeling, complex queries, transactions, and high-integrity data persistence.",
  },
  {
    name: "Prisma ORM",
    category: "backend",
    level: "Advanced",
    details: "Type-safe database queries, automated migrations, and schema management across relational databases.",
  },
  {
    name: "REST APIs & Firebase",
    category: "backend",
    level: "Expert",
    details: "Clean API contract design, Cloud Firestore real-time sync, and secure authentication services.",
  },
  {
    name: "Python",
    category: "backend",
    level: "Proficient",
    details: "Algorithmic scripting, backend utilities, data manipulation, and automation workflows.",
  },

  // Cloud & DevOps
  {
    name: "AWS & Azure",
    category: "cloud",
    level: "Advanced",
    details: "Cloud deployment infrastructure, serverless functions, object storage, and environment management.",
  },
  {
    name: "Docker",
    category: "cloud",
    level: "Advanced",
    details: "Containerizing frontend and backend microservices, reproducible dev environments, and CI/CD pipelines.",
  },
  {
    name: "Git & GitHub",
    category: "cloud",
    level: "Expert",
    details: "Branching strategies, pull requests, thorough peer code reviews, and automated CI workflows.",
  },
  {
    name: "Jira & Agile Workflows",
    category: "cloud",
    level: "Expert",
    details: "Sprint delivery velocity, cross-functional collaboration, backlog grooming, and enterprise delivery.",
  },

  // UI & Styling
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
    details: "Enterprise theme customization, data tables, dialogs, and garment manufacturing ERP workflows.",
  },
  {
    name: "Styled Components",
    category: "styling",
    level: "Expert",
    details: "CSS-in-JS scoped styles, dynamic theming, and cross-platform React Native ergonomics.",
  },
  {
    name: "Bootstrap & Responsive Design",
    category: "styling",
    level: "Expert",
    details: "Cross-browser interfaces, fluid grid systems, and Scandinavian UI implementations in Unite Living.",
  },

  // Forms & Testing
  {
    name: "Vitest & React Testing Library",
    category: "testing",
    level: "Expert",
    details: "Authored robust component test suites, automated regression testing, and API contract validation.",
  },
  {
    name: "Jest",
    category: "testing",
    level: "Advanced",
    details: "Unit and integration testing, mocking modules, and test-driven development practices.",
  },
  {
    name: "React Hook Form & Yup",
    category: "testing",
    level: "Expert",
    details: "Multi-step dynamic enterprise forms, uncontrolled inputs, and validation schemas cutting user errors.",
  },
  {
    name: "React-PDF & pdfMake",
    category: "testing",
    level: "Expert",
    details: "Client-side export of multi-column production reports, garment invoices, and shipping manifests.",
  },
];

const CATEGORY_TABS: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "All Skills (25)" },
  { id: "frontend", label: "Frontend & State" },
  { id: "backend", label: "Backend & Databases" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "styling", label: "UI & Styling" },
  { id: "testing", label: "Testing & Forms" },
];

export default function SkillsRadar() {
  const [filter, setFilter] = useState<SkillCategory>("all");
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
            Battle-tested across 5 years of architecting enterprise ERP solutions, scalable backend APIs,
            and automated test suites.
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
            {CATEGORY_TABS.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
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
              placeholder="Search skill (e.g. NestJS, Vitest)..."
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
