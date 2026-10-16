import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06080f",
};

export const metadata: Metadata = {
  title: "Md. Sajidur Rahman | Full-Stack Engineer (React, Next.js, TypeScript & Node.js)",
  description:
    "Full-Stack Engineer with 5 years of experience architecting and scaling business-critical enterprise applications. Deep expertise in React.js, TypeScript, Next.js, Node.js, NestJS, and MongoDB. Proven track record optimizing complex ERP workflows, reusable UI libraries, and automated testing.",
  keywords: [
    "Md. Sajidur Rahman",
    "Full-Stack Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Enterprise ERP",
    "Echotex Ltd",
    "Vitest",
    "React Testing Library",
    "Tailwind CSS",
    "Material UI",
  ],
  authors: [{ name: "Md. Sajidur Rahman" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-1" />
          <div className="ambient-orb ambient-orb-2" />
          <div className="ambient-orb ambient-orb-3" />
        </div>
        <div className="grid-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
