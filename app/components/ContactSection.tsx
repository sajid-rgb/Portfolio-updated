"use client";

import React, { useState, useEffect } from "react";
import { MailIcon, CopyIcon, CheckIcon, GithubIcon, LinkedinIcon, ArrowRightIcon, ZapIcon } from "./Icons";

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export default function ContactSection({ onCopyEmail, copied }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Senior Front-End Role",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const mailtoSubject = encodeURIComponent(
    `[Portfolio Contact] ${formState.subject} - from ${formState.name || "Inquirer"}`
  );
  const mailtoBody = encodeURIComponent(
    `Hi Md. Sajidur Rahman,\n\nName: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.subject}\n\nMessage:\n${formState.message}\n\nSent from your portfolio website.`
  );
  const mailtoLink = `mailto:sajidchowdhury1612@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.error || "Unable to deliver message right now. You can launch your mail client below."
        );
      }
    } catch (err) {
      console.error("Contact form delivery error:", err);
      setErrorMessage("Network issue connecting to delivery API. Click 'Send via Mail App' below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="app-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MailIcon size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle">
            Looking for a 5+ years experienced front-end engineer for scalable ERP, web application,
            or React/Next.js product development? Let&apos;s talk.
          </p>
        </div>

        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {/* Left Column: Direct Info & Availability Card */}
          <div
            className="glass-card"
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "var(--accent-emerald)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                <span className="status-beacon" />
                <span>Open for Full-Time &amp; High-Impact Roles</span>
              </div>

              <h3
                style={{
                  fontSize: "1.55rem",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  marginBottom: "6px",
                }}
              >
                Md. Sajidur Rahman
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--accent-primary)",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                5+ Years Experienced Front-end Developer • Dhaka, Bangladesh
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Experienced in architecting complex enterprise ERP systems, responsive modern web apps, and collaborative global team delivery across Bangladesh, Norway, and the United States.
              </p>

              {/* Email Copy Box */}
              <div
                onClick={onCopyEmail}
                title="Click to copy email"
                style={{
                  padding: "16px 20px",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  boxShadow: "var(--shadow-sm)",
                  marginBottom: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ color: "var(--accent-primary)" }}>
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Direct Email
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "monospace" }}>
                      sajidchowdhury1612@gmail.com
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: copied ? "var(--accent-emerald)" : "var(--border-subtle)",
                    color: copied ? "#ffffff" : "var(--accent-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 200ms ease",
                  }}
                >
                  {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
                </div>
              </div>

              {/* Phone / WhatsApp Link */}
              <a
                href="https://wa.me/8801767589086?text=Hi%20Sajidur%20Rahman,%20reaching%20out%20regarding%20front-end%20engineering"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "14px 20px",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-primary)",
                  marginBottom: "18px",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
              >
                <div style={{ color: "var(--accent-emerald)" }}>
                  <ZapIcon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    WhatsApp / Direct Phone
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, fontFamily: "monospace" }}>
                    +880 1767-589086
                  </div>
                </div>
              </a>

              {/* Local Time Widget */}
              <div
                style={{
                  padding: "12px 16px",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <span>Local Time (Dhaka):</span>
                <span style={{ color: "var(--accent-primary)", fontFamily: "monospace", fontWeight: 700 }}>
                  {currentTime || "GMT+6"}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://github.com/sajid-rgb"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1, minWidth: "130px" }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/md-sajidur-rahman-a10b8895/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1, minWidth: "130px" }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Message Form */}
          <div
            className="glass-card"
            style={{
              padding: "32px",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
            }}
          >
            {submitted ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "36px 16px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "2px solid var(--accent-emerald)",
                    color: "var(--accent-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.25)",
                  }}
                >
                  <CheckIcon size={32} />
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-white)", marginBottom: "8px" }}>
                  Message Sent to Sajid!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: "340px", marginBottom: "20px", lineHeight: 1.6 }}>
                  Thank you, <strong>{formState.name}</strong>. Your message has been dispatched to <code>sajidchowdhury1612@gmail.com</code>. I will review and reply promptly.
                </p>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    href={mailtoLink}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Open in Mail App</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "Senior Front-End Role", message: "" });
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-white)" }}>
                    Send a Direct Message
                  </h3>
                  <span style={{ fontSize: "0.74rem", color: "var(--accent-emerald)", fontWeight: 600 }}>
                    ● Live Delivery
                  </span>
                </div>

                {errorMessage && (
                  <div
                    style={{
                      background: "rgba(244, 63, 94, 0.1)",
                      border: "1px solid rgba(244, 63, 94, 0.3)",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      fontSize: "0.84rem",
                      color: "var(--accent-rose)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <span>{errorMessage}</span>
                    <a
                      href={mailtoLink}
                      style={{
                        color: "var(--accent-primary)",
                        fontWeight: 700,
                        textDecoration: "underline",
                        fontSize: "0.82rem",
                      }}
                    >
                      Click here to send directly via your Mail Client →
                    </a>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Hiring Manager / Team Lead"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-input)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-input)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    Opportunity Topic
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-input)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    <option value="Senior Front-End Role">Full-Time Senior Front-End Role</option>
                    <option value="ERP Web Application Contract">ERP Web Application Development</option>
                    <option value="React / Next.js Consulting">React &amp; Next.js Architecture</option>
                    <option value="General Sync">Technical Discussion / Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    Project or Role Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product requirements, tech stack, and goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-input)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      outline: "none",
                      fontSize: "0.9rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Action Row */}
                <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRightIcon size={17} />
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoLink}
                    title="Open draft in your email client (Gmail / Apple Mail / Outlook)"
                    className="btn btn-secondary"
                    style={{ padding: "12px 16px" }}
                  >
                    <MailIcon size={17} />
                    <span>Mail App</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
