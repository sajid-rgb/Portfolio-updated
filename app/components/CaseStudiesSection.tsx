"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { LayersIcon, CloseIcon, CheckIcon } from "./Icons";

export type ProjectCategory = "all" | "erp" | "fullstack" | "cro" | "proptech" | "mobile";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  rolePeriod: string;
  category: "erp" | "fullstack" | "cro" | "proptech" | "mobile";
  categoryLabel: string;
  image: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  problem: string;
  solution: string;
  architectureNotes: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "echotex-erp",
    title: "Echotex Enterprise Garment ERP & High-Density Data Grids",
    subtitle: "High-Volume Production Data Grids, Multi-Step Compliance Forms & Automated PDF Reporting",
    company: "Echotex Ltd (Gazipur, Dhaka)",
    rolePeriod: "Software Engineer | May 2024 — Present",
    category: "erp",
    categoryLabel: "Garment ERP",
    image: "/images/echotex_erp.jpg",
    metrics: [
      { label: "Delivery Velocity", value: "+25%" },
      { label: "Automated Tests", value: "Vitest + RTL" },
      { label: "Export Engine", value: "React-PDF & pdfMake" },
    ],
    stack: [
      "React.js",
      "TypeScript",
      "React Hook Form",
      "Yup",
      "React-PDF",
      "pdfMake",
      "Vitest",
      "React Testing Library",
      "REST & .NET APIs",
    ],
    problem:
      "Garment factory manufacturing operations require managing thousands of daily production lines, high-density order allocations, and complex compliance records across multiple factory units. Inefficient form states caused heavy table lag, submission validation errors, and slow client-side PDF export times.",
    solution:
      "Architected modular frontend workflows and designed a standardized reusable component library cutting sprint delivery times by 25%. Eliminated redundant re-renders via memoization and state optimization, implemented multi-step forms with React Hook Form and Yup validation, engineered advanced data grids with server-side pagination, and authored comprehensive Vitest and React Testing Library test suites.",
    architectureNotes: [
      "Architected and scaled frontend modules for an enterprise ERP platform used by garment factory users, translating complex operational logic into high-performance UI workflows.",
      "Eliminated redundant React re-renders across complex ERP forms and data-heavy tables using memoization and state optimization, noticeably improving UI responsiveness.",
      "Built dynamic, multi-step enterprise forms with React Hook Form and Yup validation, significantly minimizing submission errors.",
      "Engineered advanced data grids featuring multi-column sorting, filtering, server-side pagination, and client-side PDF export (React-PDF, pdfMake).",
      "Standardized frontend patterns by building a reusable component library, cutting sprint delivery times for feature teams by 25%.",
      "Authored component test suites with Vitest and React Testing Library; collaborated with backend teams on REST/.NET API contracts and data schemas.",
    ],
  },
  {
    id: "vshipping-fullstack",
    title: "V Shipping BD – Full-Stack Maritime Logistics Platform",
    subtitle: "Modular Frontend Architecture, NestJS REST Microservices & Optimized MongoDB Schemas",
    company: "V Shipping BD (Full Stack Project)",
    rolePeriod: "Full-Stack Project Architect",
    category: "fullstack",
    categoryLabel: "Full-Stack Logistics",
    image: "/images/vshipping_erp.jpg",
    metrics: [
      { label: "Backend Service", value: "NestJS REST" },
      { label: "Database Layer", value: "MongoDB & Indices" },
      { label: "Access Security", value: "RBAC Guards" },
    ],
    stack: [
      "NestJS",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RBAC",
      "REST APIs",
      "Tailwind CSS",
    ],
    problem:
      "Global maritime shipping operations required a unified logistics tracking platform to manage vessel schedules, container manifests, and multi-user clearance workflows with strict access controls and zero data latency.",
    solution:
      "Engineered the complete full-stack solution: architected modular frontend application workflows and responsive user interfaces with React and Tailwind CSS. Built high-throughput backend services and REST APIs using NestJS clean modular architecture with robust request validation. Implemented role-based access control (RBAC) and led MongoDB schema design with specialized indexing for high-efficiency logistics tracking.",
    architectureNotes: [
      "Architected modular frontend application workflows and responsive user interfaces for shipping and logistics operations.",
      "Engineered backend services and REST APIs with NestJS, implementing clean modular architecture and request validation.",
      "Implemented secure authentication and role-based access control (RBAC) to protect shipment records and operational workflows.",
      "Led MongoDB database design and query optimization, structuring schemas and indices for high-efficiency logistics tracking.",
    ],
  },
  {
    id: "echologyx-cro",
    title: "Enterprise CRO & A/B Testing Experimentation Engine",
    subtitle: "High-Impact Conversion Experiments on AB Tasty, Convert & Monetate with Sub-Second Web Vitals",
    company: "Echologyx Ltd (Dhaka)",
    rolePeriod: "Software Engineer | Sep 2023 — Apr 2024",
    category: "cro",
    categoryLabel: "CRO & Performance",
    image: "/images/echologyx_cro.jpg",
    metrics: [
      { label: "Platforms", value: "AB Tasty & Convert" },
      { label: "Performance", value: "Optimal Web Vitals" },
      { label: "Core Stack", value: "Vanilla JS & CSS3" },
    ],
    stack: [
      "Vanilla JavaScript",
      "HTML5",
      "CSS3",
      "AB Tasty",
      "Convert",
      "Monetate",
      "Core Web Vitals",
      "A/B Testing",
    ],
    problem:
      "International enterprise clients required high-frequency experimentation campaigns, dynamic checkout modifications, and variant injection without degrading Core Web Vitals (LCP, FID, CLS) or causing flickers.",
    solution:
      "Developed and maintained Conversion Rate Optimization (CRO) and A/B testing implementations for international enterprise clients using lightweight Vanilla JavaScript, HTML5, and CSS3. Launched experimentation campaigns on AB Tasty, Convert, and Monetate, boosting client engagement and conversion rates while continuously fine-tuning script execution for optimal speed.",
    architectureNotes: [
      "Developed and maintained Conversion Rate Optimization (CRO) and A/B testing implementations for international enterprise clients using Vanilla JavaScript, HTML5, and CSS3.",
      "Implemented high-impact experimentation campaigns across platforms including AB Tasty, Convert, and Monetate, boosting client engagement and conversion rates.",
      "Analyzed web vitals and fine-tuned script execution to ensure experimentation snippets maintained optimal website speed.",
    ],
  },
  {
    id: "unite-living",
    title: "Unite Living – Norwegian PropTech Platform",
    subtitle: "Enterprise Rental & Property Management System Built with an International Agile Team",
    company: "Gain Solutions Ltd (Client: Unite Living, Norway)",
    rolePeriod: "JavaScript Developer | Sep 2021 — Aug 2023",
    category: "proptech",
    categoryLabel: "PropTech Platform",
    image: "/images/unite_living.jpg",
    metrics: [
      { label: "Agile Scale", value: "20+ Engineers" },
      { label: "State Strategy", value: "Optimistic UI" },
      { label: "Prototypes", value: "Vue.js POC" },
    ],
    stack: [
      "React.js",
      "JavaScript (ES6+)",
      "Vue.js",
      "Bootstrap",
      "RESTful APIs",
      "State Caching",
      "Agile",
    ],
    problem:
      "A Norwegian real-estate platform required an all-in-one web portal for landlords and tenants to search listings, sign rental contracts, process monthly payments, and submit maintenance tickets with high reliability.",
    solution:
      "Collaborated as a core front-end engineer in an Agile cross-functional team of 20+ engineers. Built frontend features for Unite Living, integrated RESTful APIs and state caching with React components leveraging optimistic UI updates, developed responsive cross-browser interfaces, conducted peer code reviews, and created Vue.js proof-of-concept prototypes.",
    architectureNotes: [
      "Built frontend features for Unite Living (a Norwegian real estate platform), collaborating in an Agile cross-functional team of 20+ engineers.",
      "Integrated RESTful APIs and state caching with React components, leveraging optimistic UI updates.",
      "Developed responsive, cross-browser interfaces with React.js, modern JavaScript (ES6+), and Bootstrap; conducted peer code reviews.",
      "Created technical proof-of-concept prototypes in Vue.js to assess migration viability for legacy subsystems.",
    ],
  },
  {
    id: "tilleli-app",
    title: "Tilleli Cross-Platform Native Mobile Application",
    subtitle: "Cross-Platform Real-Time Synchronized Application with Firebase & Cloud Firestore",
    company: "Tilleli Inc. (Remote USA)",
    rolePeriod: "React Native Developer Intern | May 2021 — Aug 2021",
    category: "mobile",
    categoryLabel: "Cross-Platform Mobile",
    image: "/images/tilleli_mobile.jpg",
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Data Sync", value: "Sub-Second" },
      { label: "UI System", value: "Styled-Components" },
    ],
    stack: [
      "React Native",
      "Styled Components",
      "Firebase",
      "Cloud Firestore",
      "Figma",
      "iOS & Android",
    ],
    problem:
      "A US startup required a cross-platform mobile application with instant live synchronization of user feeds, responsive ergonomics across varied iOS and Android screen sizes, and offline persistence.",
    solution:
      "Developed cross-platform mobile screens using React Native and Styled Components, converting Figma mockups into pixel-perfect UIs. Connected Firebase and Cloud Firestore for real-time data sync and authentication, ensuring sub-second updates across devices.",
    architectureNotes: [
      "Developed cross-platform mobile screens using React Native and Styled Components, converting Figma mockups into pixel-perfect UIs.",
      "Connected Firebase and Cloud Firestore for real-time data sync and authentication, ensuring sub-second updates across devices.",
      "Ensured responsive layouts and native ergonomics on both iOS and Android platforms.",
    ],
  },
];

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "erp", label: "Garment ERP" },
  { id: "fullstack", label: "Full-Stack Logistics" },
  { id: "cro", label: "CRO & Experimentation" },
  { id: "proptech", label: "PropTech" },
  { id: "mobile", label: "Mobile Apps" },
];

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return CASE_STUDIES;
    return CASE_STUDIES.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <LayersIcon size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Enterprise ERP &amp; <span className="text-gradient">Production Systems</span>
          </h2>
          <p className="section-subtitle">
            Engineered across 5 years for Echotex Ltd, V Shipping BD,
            Echologyx Ltd, Gain Solutions (Unite Living Norway), and Tilleli Inc. (USA).
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "38px",
          }}
        >
          {CATEGORIES.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  border: isActive
                    ? "1px solid var(--accent-primary)"
                    : "1px solid var(--border-subtle)",
                  background: isActive
                    ? "var(--gradient-badge)"
                    : "var(--bg-card)",
                  color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                  boxShadow: isActive ? "0 0 16px var(--accent-glow)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                borderRadius: "20px",
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "230px",
                  overflow: "hidden",
                  backgroundColor: "var(--bg-subtle)",
                }}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "var(--bg-surface)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid var(--border-glass)",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "var(--accent-primary)",
                  }}
                >
                  {study.company}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    background: "var(--bg-surface)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid var(--border-glass)",
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                  }}
                >
                  {study.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div style={{ fontSize: "0.78rem", color: "var(--accent-secondary)", fontWeight: 700, marginBottom: "4px" }}>
                  {study.rolePeriod}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--text-white)",
                    marginBottom: "6px",
                    lineHeight: 1.35,
                  }}
                >
                  {study.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "20px",
                  }}
                >
                  {study.subtitle}
                </p>

                {/* Metrics Badges */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                    background: "var(--bg-subtle)",
                    padding: "12px",
                    borderRadius: "14px",
                    border: "1px solid var(--border-subtle)",
                    marginBottom: "20px",
                  }}
                >
                  {study.metrics.map((m, idx) => (
                    <div key={idx} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          color: "var(--accent-primary)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          marginTop: "2px",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {study.stack.map((tech, idx) => (
                    <span
                      key={idx}
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

                {/* Card Actions */}
                <div style={{ marginTop: "auto" }}>
                  <button
                    onClick={() => setSelectedCase(study)}
                    className="btn btn-secondary btn-sm"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <LayersIcon size={16} />
                    <span>View Architecture Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal Drawer */}
      {selectedCase && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            style={{
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-glass)",
              borderRadius: "24px",
              maxWidth: "840px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "32px",
              boxShadow: "var(--shadow-card)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "var(--bg-subtle)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
            >
              <CloseIcon size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: "24px", paddingRight: "40px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {selectedCase.company} • {selectedCase.rolePeriod}
              </span>
              <h2
                style={{
                  fontSize: "1.65rem",
                  fontWeight: 900,
                  color: "var(--text-white)",
                  marginTop: "6px",
                  lineHeight: 1.3,
                }}
              >
                {selectedCase.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
                {selectedCase.subtitle}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderLeft: "4px solid var(--accent-rose)",
                  padding: "18px",
                  borderRadius: "14px",
                }}
              >
                <div style={{ fontWeight: 700, color: "var(--accent-rose)", marginBottom: "8px", fontSize: "0.9rem" }}>
                  Engineering Challenge
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {selectedCase.problem}
                </p>
              </div>

              <div
                style={{
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderLeft: "4px solid var(--accent-emerald)",
                  padding: "18px",
                  borderRadius: "14px",
                }}
              >
                <div style={{ fontWeight: 700, color: "var(--accent-emerald)", marginBottom: "8px", fontSize: "0.9rem" }}>
                  Delivered Solution
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 style={{ color: "var(--text-white)", fontSize: "1rem", marginBottom: "12px", fontWeight: 700 }}>
                Technical Execution &amp; Key Architectural Responsibilities
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {selectedCase.architectureNotes.map((note, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.86rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <div style={{ color: "var(--accent-primary)", marginTop: "2px", flexShrink: 0 }}>
                      <CheckIcon size={16} />
                    </div>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
