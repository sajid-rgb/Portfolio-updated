"use client";

import React from "react";
import { TerminalIcon, CheckIcon, SparklesIcon, GraduationCapIcon } from "./Icons";

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
    period: "September 2023 — Present",
    role: "Software Engineer",
    company: "Echologyx Ltd",
    location: "Uttara Sector-3, Dhaka, Bangladesh",
    type: "Full Time",
    responsibilities: [
      "Developed reusable React components that reduced overall team development cycle time.",
      "Optimized large-scale ERP modules handling 1,500+ active enterprise users.",
      "Improved page rendering performance and eliminated unnecessary component re-renders by 55%.",
      "Built dynamic, high-integrity forms using React Hook Form and Yup validation schemas.",
      "Designed complex data grids with multi-column filtering, pagination, data export, and client-side PDF generation.",
      "Collaborated with backend teams to architect and deliver seamless REST API integrations.",
    ],
    techStack: ["React", "TypeScript", "Redux", "Material UI", "React Hook Form", "Styled Components", "pdfmake"],
  },
  {
    period: "August 2025 — Present",
    role: "Software Engineer",
    company: "V-Shipping BD",
    location: "Dhaka, Bangladesh",
    type: "Part Time",
    responsibilities: [
      "Working as a front-end developer on a shipment-related ERP platform for an international maritime shipping company.",
      "Building new features, implementing complex business logic, and designing dynamic admin panel UIs.",
      "Architected responsive front-end state and data layer using React, TypeScript, Tailwind CSS, Zustand, and RTK Query.",
      "Integrating REST APIs and collaborating closely with backend engineers to resolve business logic and API contracts.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "RTK Query", "React Hook Form", "React PDF"],
  },
  {
    period: "September 2021 — August 2023",
    role: "JavaScript Developer",
    company: "Gain Solutions Ltd",
    location: "Mirpur 12, Dhaka, Bangladesh",
    type: "Full Time",
    responsibilities: [
      "Worked as a front-end developer on Norwegian-based PropTech project 'Unite Living', collaborating in an agile team of 20+ members.",
      "Handled high-throughput interactions between Apollo GraphQL APIs and React components.",
      "Conducted thorough peer code reviews and enforced front-end engineering best practices.",
      "Implemented all front-end logic and responsive design using React.js, Bootstrap, CSS, and modern JavaScript.",
      "Investigated and benchmarked alternative frameworks like Vue.js and Meteor.",
    ],
    techStack: ["React", "Context API", "Bootstrap", "Apollo Client (GraphQL)", "Moment.js", "CSS"],
  },
  {
    period: "May 2021 — August 2021",
    role: "React Native Developer",
    company: "Tilleli Inc.",
    location: "New Jersey, USA (Remote)",
    type: "Internship",
    responsibilities: [
      "Implemented and designed native cross-platform mobile application logic using React Native for iOS and Android.",
      "Configured Firebase and Cloud Firestore for real-time document synchronization and authentication.",
      "Delivered a flawless, highly responsive UI by applying styled-components for pixel-perfect design alignment.",
    ],
    techStack: ["React Native", "Context API", "Styled Components", "Firebase", "Firestore"],
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
            Track record of delivering enterprise ERP modules, international PropTech solutions,
            and real-time mobile applications across 5+ years.
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
