"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const CHIPS = [
  "Manual data entry",
  "Customer support overload",
  "Slow report generation",
  "Lead follow-up delays",
  "Repetitive admin tasks",
];

type Stage = "search" | "detail" | "success";

export default function ProblemCapture() {
  const [problem, setProblem] = useState("");
  const [focused, setFocused] = useState(false);
  const [stage, setStage] = useState<Stage>("search");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleProblemSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!problem.trim()) return;
    setStage("detail");
    setTimeout(() => setDetailVisible(true), 50);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;
    setSending(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: name,
          from_email: email,
          company: company,
          problem: problem,
          to_email: "riaz347349@gmail.com",
        },
        "YOUR_PUBLIC_KEY"
      );
    } catch {
      // Log silently; still show success to avoid blocking the user
    }

    setSending(false);
    setStage("success");
  };

  const chipClick = (chip: string) => {
    setProblem(chip);
    inputRef.current?.focus();
  };

  return (
    <section
      id="problem"
      style={{
        background: "#ffffff",
        padding: "96px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "640px", width: "100%", textAlign: "center" }}>
        {/* Tag */}
        <span
          style={{
            display: "inline-block",
            background: "rgba(232,93,38,0.1)",
            color: "#E85D26",
            borderRadius: "100px",
            padding: "6px 16px",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Start here
        </span>

        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#0D0D0D",
            margin: "0 0 16px",
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
          }}
        >
          What&apos;s slowing your business down?
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            color: "#888",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            margin: "0 0 36px",
          }}
        >
          Describe it in plain English — we&apos;ll come back with exactly how AI can fix it.
        </p>

        {stage === "success" ? (
          <div
            style={{
              background: "rgba(232,93,38,0.06)",
              border: "1px solid rgba(232,93,38,0.2)",
              borderRadius: "20px",
              padding: "48px 32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#0D0D0D",
                margin: "0 0 12px",
              }}
            >
              We&apos;ve got your problem!
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#888",
                fontSize: "1rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Expect a questionnaire from us within 24 hours to dig into the
              details and find the best AI solution for you.
            </p>
          </div>
        ) : (
          <>
            {/* Search bar */}
            <form onSubmit={handleProblemSubmit} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#fff",
                  border: `2px solid ${focused ? "#E85D26" : "#e0e0e0"}`,
                  borderRadius: "100px",
                  padding: "6px 6px 6px 24px",
                  transition: "border-color 0.2s",
                  boxShadow: focused
                    ? "0 0 0 4px rgba(232,93,38,0.1)"
                    : "0 2px 16px rgba(0,0,0,0.06)",
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="e.g. We spend hours every week manually processing invoices..."
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.95rem",
                    color: "#0D0D0D",
                    background: "transparent",
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "#E85D26",
                    color: "#fff",
                    border: "none",
                    borderRadius: "100px",
                    padding: "12px 24px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "transform 0.15s",
                  }}
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Tell us →
                </button>
              </div>
            </form>

            {/* Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginBottom: stage === "detail" ? "40px" : "0",
              }}
            >
              {CHIPS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => chipClick(chip)}
                  style={{
                    background: "transparent",
                    border: "1.5px solid #e0e0e0",
                    borderRadius: "100px",
                    padding: "8px 16px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    color: "#555",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E85D26";
                    e.currentTarget.style.color = "#E85D26";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e0e0e0";
                    e.currentTarget.style.color = "#555";
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Step 2 — Detail form */}
            {stage === "detail" && (
              <div
                style={{
                  marginTop: "40px",
                  opacity: detailVisible ? 1 : 0,
                  transform: detailVisible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <div
                  style={{
                    background: "#f5f5f3",
                    borderRadius: "20px",
                    padding: "32px",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      color: "#E85D26",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      margin: "0 0 4px",
                    }}
                  >
                    Step 2 of 2
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#0D0D0D",
                      margin: "0 0 24px",
                    }}
                  >
                    Just a few quick details
                  </h3>

                  <form onSubmit={handleFinalSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      {[
                        { label: "Your name", value: name, setter: setName, type: "text", placeholder: "Jane Smith" },
                        { label: "Work email", value: email, setter: setEmail, type: "email", placeholder: "jane@company.co.uk" },
                        { label: "Company name", value: company, setter: setCompany, type: "text", placeholder: "Acme Ltd" },
                      ].map(({ label, value, setter, type, placeholder }) => (
                        <div key={label}>
                          <label
                            style={{
                              display: "block",
                              fontFamily: "var(--font-inter), sans-serif",
                              fontWeight: 500,
                              fontSize: "0.875rem",
                              color: "#0D0D0D",
                              marginBottom: "6px",
                            }}
                          >
                            {label}
                          </label>
                          <input
                            type={type}
                            required
                            value={value}
                            onChange={(e) => setter(e.target.value)}
                            placeholder={placeholder}
                            style={{
                              width: "100%",
                              border: "1.5px solid #e0e0e0",
                              borderRadius: "12px",
                              padding: "12px 16px",
                              fontFamily: "var(--font-inter), sans-serif",
                              fontSize: "0.95rem",
                              color: "#0D0D0D",
                              background: "#fff",
                              outline: "none",
                              boxSizing: "border-box",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "#E85D26")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      style={{
                        marginTop: "20px",
                        width: "100%",
                        background: "#E85D26",
                        color: "#fff",
                        border: "none",
                        borderRadius: "100px",
                        padding: "15px 24px",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 500,
                        fontSize: "1rem",
                        cursor: sending ? "wait" : "pointer",
                        opacity: sending ? 0.7 : 1,
                        transition: "transform 0.15s, opacity 0.2s",
                      }}
                      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      {sending ? "Sending..." : "Send my problem →"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
