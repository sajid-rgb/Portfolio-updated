"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { CodeIcon, LayersIcon, CloseIcon, CheckIcon, ExternalLinkIcon } from "./Icons";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  rolePeriod: string;
  category: "all" | "erp" | "logistics" | "proptech" | "mobile";
  categoryLabel: string;
  image: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  problem: string;
  solution: string;
  architectureNotes: string[];
  codeSnippet: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "echologyx-erp",
    title: "Enterprise ERP & High-Volume Data Grid",
    subtitle: "Complex Data Grid, Dynamic Forms & Client-Side PDF Generation for 1,500+ Users",
    company: "Echologyx Ltd (Uttara, Dhaka)",
    rolePeriod: "Software Engineer | Sep 2023 — Present",
    category: "erp",
    categoryLabel: "Enterprise ERP",
    image: "/images/echologyx_erp.jpg",
    metrics: [
      { label: "Active Users", value: "1,500+" },
      { label: "Re-Render Drops", value: "-55%" },
      { label: "Client PDF Export", value: "pdfmake" },
    ],
    stack: ["React", "TypeScript", "Redux", "Material UI", "React Hook Form", "Yup", "pdfmake", "Styled-Components"],
    problem:
      "Enterprise clients managing massive financial and operational data experienced table lag during high-frequency filter interactions, form re-render bottlenecks, and backend latency when generating multi-page PDF reports.",
    solution:
      "Optimized the core ERP modules handling 1,500+ active enterprise users by eliminating unnecessary component re-renders with memoization and virtualization. Engineered dynamic validation forms with React Hook Form and Yup, implemented multi-column data grids, and designed instant client-side PDF document generation using pdfmake.",
    architectureNotes: [
      "Designed reusable component primitives reducing overall team development cycle time across multiple ERP sub-modules.",
      "Replaced heavy form state with React Hook Form uncontrolled inputs, avoiding component-tree re-renders on keystrokes.",
      "Integrated declarative pdfmake schemas generating customized multi-column invoices and reports directly in the browser.",
      "Collaborated closely with backend engineers to streamline REST API payload sizes and pagination contracts.",
    ],
    codeSnippet: `// Dynamic Form Validation & Client-Side PDF Generator
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import pdfMake from "pdfmake/build/pdfmake";

const erpFilterSchema = yup.object({
  dateRange: yup.string().required(),
  category: yup.string().required(),
  minAmount: yup.number().positive(),
});

export function useErpDataGrid() {
  const form = useForm({ resolver: yupResolver(erpFilterSchema) });

  const exportPdfReport = (rows: TransactionRow[]) => {
    const docDefinition = {
      content: [
        { text: 'ERP Financial Overview', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              ['Invoice ID', 'Customer', 'Amount', 'Status'],
              ...rows.map(r => [r.id, r.customer, r.amount, r.status])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(docDefinition).download('ERP_Report.pdf');
  };

  return { form, exportPdfReport };
}`,
  },
  {
    id: "vshipping-erp",
    title: "V-Shipping Maritime Logistics ERP",
    subtitle: "Vessel Routes, Container Schedules & Dynamic Admin Dashboard",
    company: "V-Shipping BD",
    rolePeriod: "Software Engineer (Part Time) | Aug 2025 — Present",
    category: "logistics",
    categoryLabel: "Logistics & Maritime",
    image: "/images/vshipping_erp.jpg",
    metrics: [
      { label: "Global State", value: "Zustand" },
      { label: "Query Cache", value: "RTK Query" },
      { label: "Design System", value: "Tailwind CSS" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "RTK Query", "React Hook Form", "React PDF"],
    problem:
      "A global maritime shipment company required a centralized logistics ERP to manage complex vessel routes, container inventory schedules, multi-currency invoices, and real-time shipment status updates.",
    solution:
      "Architected the front-end admin dashboard using React and TypeScript. Managed synchronous UI state with lightweight Zustand stores and handled network caching and auto-refetching using RTK Query. Designed responsive dashboards using Tailwind CSS and built printable shipment manifests with React PDF.",
    architectureNotes: [
      "Streamlined API consumption by integrating RTK Query endpoints with automatic cache invalidation on shipment status mutations.",
      "Decoupled modal and filter state into atomic Zustand slices, avoiding prop-drilling across multi-tier route views.",
      "Designed dynamic admin panel interfaces with high-density data tables and live status beacons.",
      "Collaborated with backend developers to resolve complex business logic edge cases in logistics calculations.",
    ],
    codeSnippet: `// RTK Query Shipment Endpoint & Zustand Route State
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { create } from "zustand";

export const shipmentApi = createApi({
  reducerPath: "shipmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/shipments" }),
  tagTypes: ["Shipments"],
  endpoints: (builder) => ({
    getShipments: builder.query<Shipment[], ShipmentFilter>({
      query: (filters) => ({ url: "", params: filters }),
      providesTags: ["Shipments"],
    }),
    updateVesselStatus: builder.mutation<void, { id: string; status: string }>({
      query: ({ id, ...patch }) => ({
        url: \`/\${id}/status\`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Shipments"],
    }),
  }),
});

interface ShipmentStore {
  selectedContainer: string | null;
  selectContainer: (id: string) => void;
}

export const useShipmentStore = create<ShipmentStore>((set) => ({
  selectedContainer: null,
  selectContainer: (id) => set({ selectedContainer: id }),
}));`,
  },
  {
    id: "unite-living",
    title: "Unite Living – Norwegian PropTech Platform",
    subtitle: "Enterprise Rental & Property Management System Built with an International Agile Team",
    company: "Gain Solutions Ltd (Client: Unite Living, Norway)",
    rolePeriod: "JavaScript Developer | Sep 2021 — Aug 2023",
    category: "proptech",
    categoryLabel: "PropTech & Real Estate",
    image: "/images/unite_living.jpg",
    metrics: [
      { label: "Agile Team", value: "20+ Devs" },
      { label: "API Protocol", value: "GraphQL" },
      { label: "Client Stack", value: "React + Vue" },
    ],
    stack: ["React.js", "GraphQL", "Apollo Client", "Context API", "Bootstrap", "Moment.js", "CSS"],
    problem:
      "A Norwegian real-estate platform needed an all-in-one web portal for landlords and tenants to search listings, sign rental contracts, process monthly payments, and submit maintenance tickets with high reliability.",
    solution:
      "Collaborated as a core front-end engineer in a 20+ member agile team. Handled seamless interaction between Apollo GraphQL APIs and React components, conducted thorough peer code reviews, and implemented responsive Scandinavian-designed user interfaces.",
    architectureNotes: [
      "Managed GraphQL queries and mutations with Apollo Client, implementing normalized cache policies for fast client transitions.",
      "Participated in active agile sprints, backlog grooming, and cross-timezone collaboration with Norwegian stakeholders.",
      "Investigated alternative front-end architectures including Vue.js and Meteor to evaluate long-term framework evolution.",
      "Reviewed and maintained code quality standards across customer-facing and administrative dashboards.",
    ],
    codeSnippet: `// Apollo Client GraphQL Integration for Unite Living
import { useQuery, gql } from "@apollo/client";

export const GET_PROPERTY_LISTINGS = gql\`
  query GetProperties($location: String!, $limit: Int!) {
    properties(location: $location, limit: $limit) {
      id
      title
      monthlyRent
      squareMeters
      isAvailable
      address {
        street
        city
      }
    }
  }
\`;

export function PropertyListingsView({ location }: { location: string }) {
  const { data, loading, error } = useQuery(GET_PROPERTY_LISTINGS, {
    variables: { location, limit: 20 },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <SkeletonLoader count={4} />;
  return <ListingGrid properties={data?.properties ?? []} />;
}`,
  },
  {
    id: "tilleli-app",
    title: "Tilleli Native Mobile Application",
    subtitle: "Cross-Platform Real-Time Synchronized Application with Firebase & Firestore",
    company: "Tilleli Inc. (New Jersey, USA)",
    rolePeriod: "React Native Developer (Intern) | May 2021 — Aug 2021",
    category: "mobile",
    categoryLabel: "Cross-Platform Mobile",
    image: "/images/tilleli_mobile.jpg",
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Database", value: "Cloud Firestore" },
      { label: "UI System", value: "Styled-Comp" },
    ],
    stack: ["React Native", "Context API", "Styled Components", "Firebase", "Cloud Firestore"],
    problem:
      "A US startup required a cross-platform mobile application with instant live synchronization of user feeds, responsive ergonomics across varied iOS and Android screen sizes, and offline persistence.",
    solution:
      "Engineered mobile screens and component logic using React Native. Seamlessly connected the app to Firebase Authentication and Cloud Firestore for real-time data streaming, and crafted responsive UIs using styled-components.",
    architectureNotes: [
      "Built declarative mobile UI components with Styled Components, ensuring design system tokens translated cleanly across platforms.",
      "Leveraged Firestore snapshot listeners (\`onSnapshot\`) to deliver real-time optimistic feed updates.",
      "Managed user authentication sessions and global state cleanly using React Context API.",
    ],
    codeSnippet: `// React Native Real-Time Firestore Synchronization Hook
import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import styled from "styled-components/native";

export const CardContainer = styled.View\`
  background-color: #121826;
  border-radius: 16px;
  padding: 16px;
  margin-vertical: 8px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
\`;

export function useRealtimeFeed(userId: string) {
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("userFeeds")
      .doc(userId)
      .collection("items")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFeed(items as FeedItem[]);
      });

    return () => unsubscribe();
  }, [userId]);

  return feed;
}`,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "erp", label: "Enterprise ERP" },
  { id: "logistics", label: "Logistics & Maritime" },
  { id: "proptech", label: "PropTech" },
  { id: "mobile", label: "Mobile Apps" },
] as const;

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

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
            Enterprise ERP &amp; <span className="text-gradient">Production Web Systems</span>
          </h2>
          <p className="section-subtitle">
            Engineered across 5+ years for Echologyx Ltd, V-Shipping BD,
            Gain Solutions (Unite Living Norway), and Tilleli Inc. (USA).
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
                    fontSize: "1.32rem",
                    fontWeight: 800,
                    color: "var(--text-white)",
                    marginBottom: "6px",
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
                          fontSize: "1rem",
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
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "var(--text-white)",
                  marginTop: "6px",
                }}
              >
                {selectedCase.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
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
