"use client";

import React from "react";
import { CheckIcon, SparklesIcon, GraduationCapIcon } from "./Icons";

interface ExperienceMilestone {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  responsibilities: string[];
  techStack: string[];
}

const CAREER_MILESTONES: ExperienceMilestone[] = [
  {
    period: "May 2024 — Present",
    role: "Software Engineer",
    company: "Echotex Ltd",
    location: "Gazipur, Dhaka, Bangladesh",
    type: "Full Time",
    responsibilities: [
      "Architect and scale frontend modules for an enterprise ERP platform used by garment factory users, translating complex operational logic into high-performance UI workflows.",
      "Eliminated redundant React re-renders across complex ERP forms and data-heavy tables using memoization and state optimization, noticeably improving UI responsiveness.",
      "Built dynamic, multi-step enterprise forms with React Hook Form and Yup validation, significantly minimizing submission errors.",
      "Engineered advanced data grids featuring multi-column sorting, filtering, server-side pagination, and client-side PDF export (React-PDF, pdfMake).",
      "Standardized frontend patterns by building a reusable component library, cutting sprint delivery times for feature teams by 25%.",
      "Authored component test suites with Vitest and React Testing Library; collaborated with backend teams on REST/.NET API contracts and data schemas.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Vitest",
      "React Testing Library",
      "React Hook Form",
      "Yup",
      "React-PDF",
      "pdfMake",
      "REST & .NET APIs",
    ],
  },
  {
    period: "September 2023 — April 2024",
    role: "Software Engineer",
    company: "Echologyx Ltd",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    responsibilities: [
      "Developed and maintained Conversion Rate Optimization (CRO) and A/B testing implementations for international enterprise clients using Vanilla JavaScript, HTML5, and CSS3.",
      "Implemented high-impact experimentation campaigns across platforms including AB Tasty, Convert, and Monetate, boosting client engagement and conversion rates.",
      "Analyzed web vitals and fine-tuned script execution to ensure experimentation snippets maintained optimal website speed.",
    ],
    techStack: [
      "Vanilla JavaScript",
      "HTML5",
      "CSS3",
      "AB Tasty",
      "Convert",
      "Monetate",
      "Core Web Vitals",
      "A/B Testing",
    ],
  },
  {
    period: "September 2021 — August 2023",
    role: "JavaScript Developer",
    company: "Gain Solutions Ltd",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    responsibilities: [
      "Built frontend features for Unite Living (a Norwegian real estate platform), collaborating in an Agile cross-functional team of 20+ engineers.",
      "Integrated RESTful APIs and state caching with React components, leveraging optimistic UI updates.",
      "Developed responsive, cross-browser interfaces with React.js, modern JavaScript (ES6+), and Bootstrap; conducted peer code reviews.",
      "Created technical proof-of-concept prototypes in Vue.js to assess migration viability for legacy subsystems.",
    ],
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "Vue.js",
      "Bootstrap",
      "REST APIs",
      "State Caching",
      "Agile",
    ],
  },
  {
    period: "May 2021 — August 2021",
    role: "React Native Developer Intern",
    company: "Tilleli Inc.",
    location: "Remote (USA)",
    type: "Internship",
    responsibilities: [
      "Developed cross-platform mobile screens using React Native and Styled Components, converting Figma mockups into pixel-perfect UIs.",
      "Connected Firebase and Cloud Firestore for real-time data sync and authentication, ensuring sub-second updates across devices.",
    ],
    techStack: [
      "React Native",
      "Styled Components",
      "Firebase",
      "Cloud Firestore",
      "Figma",
      "iOS & Android",
    ],
  },
];

export default function CareerTimeline() {
  return (
    <section id="journey" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <SparklesIcon size={14} />
            <span>Career History &amp; Education</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated impact across garment factory ERPs, international CRO campaigns,
            Norwegian PropTech platforms, and mobile apps.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "24px",
          }}
        >
          {/* Vertical Track Line */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              bottom: "10px",
              left: "7px",
              width: "2px",
              background:
                "linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--border-subtle) 100%)",
            }}
          />

          {CAREER_MILESTONES.map((milestone, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                marginBottom: "36px",
                paddingLeft: "32px",
              }}
            >
              {/* Timeline Dot Beacon */}
              <div
                style={{
                  position: "absolute",
                  left: "-22px",
                  top: "4px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: idx === 0 ? "var(--accent-primary)" : "var(--bg-card)",
                  border: `2px solid ${idx === 0 ? "var(--accent-primary)" : "var(--border-glass)"}`,
                  boxShadow: idx === 0 ? "0 0 16px var(--accent-glow)" : "none",
                  zIndex: 2,
                }}
              />

              {/* Milestone Card */}
              <div
                className="glass-card"
                style={{
                  padding: "26px",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--accent-primary)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {milestone.period}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "var(--text-white)",
                        margin: "4px 0",
                      }}
                    >
                      {milestone.role}
                    </h3>
                    <div
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      <strong style={{ color: "var(--text-primary)" }}>{milestone.company}</strong> •{" "}
                      <span style={{ color: "var(--text-muted)" }}>{milestone.location}</span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                    }}
                  >
                    {milestone.type}
                  </span>
                </div>

                {/* Responsibilities List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px" }}>
                  {milestone.responsibilities.map((point, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ color: "var(--accent-primary)", marginTop: "3px", flexShrink: 0 }}>
                        <CheckIcon size={14} />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {milestone.techStack.map((tech, bIdx) => (
                    <span
                      key={bIdx}
                      style={{
                        fontSize: "0.72rem",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "var(--bg-subtle)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Card */}
          <div
            style={{
              position: "relative",
              marginBottom: "20px",
              paddingLeft: "32px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-22px",
                top: "4px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "var(--accent-secondary)",
                border: "2px solid var(--border-glass)",
                boxShadow: "0 0 16px var(--accent-glow-secondary)",
                zIndex: 2,
              }}
            />

            <div
              className="glass-card"
              style={{
                padding: "24px 28px",
                border: "1px solid var(--border-subtle)",
                borderRadius: "18px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <GraduationCapIcon size={18} style={{ color: "var(--accent-secondary)" }} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent-secondary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Education • 2015 — 2019
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.22rem",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  margin: "4px 0",
                }}
              >
                Bachelor of Science in Electrical and Electronic Engineering (EEE)
              </h3>
              <div style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                University of Chittagong, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
