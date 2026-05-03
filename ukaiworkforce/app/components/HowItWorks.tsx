"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    icon: "📋",
    title: "Tell us your problem",
    body: "We send you a short questionnaire to understand how you currently handle the task — or what's slowing you down. Plain English, no jargon, takes less than 5 minutes.",
    badge: "Free & no obligation",
  },
  {
    icon: "🔍",
    title: "We design your solution",
    body: "Our team reviews your answers and designs a tailored AI solution for your business. We come back to you with exactly what we'd build and what it costs.",
    badge: "You approve before we build",
  },
  {
    icon: "🚀",
    title: "We build & deploy it",
    body: "Once you're happy, we build and deploy your AI solution. A small one-off setup fee, then an affordable monthly cost to keep it running and improving.",
    badge: "Live in as little as 2 weeks",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".step-card");
            cards?.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ background: "#f5f5f3", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        {/* Tag */}
        <span
          style={{
            display: "inline-block",
            background: "rgba(232,93,38,0.1)",
            color: "#E85D26",
            borderRadius: "100px",
            padding: "6px 16px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 500,
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          How it works
        </span>

        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#0D0D0D",
            margin: "0 0 16px",
            letterSpacing: "-0.5px",
          }}
        >
          Our 3-step plan
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            color: "#888",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            margin: "0 auto 64px",
            maxWidth: "520px",
          }}
        >
          From first contact to a working AI solution — here&apos;s exactly what
          happens.
        </p>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="step-card"
              style={{
                position: "relative",
                padding: "0 32px",
                opacity: 0,
                transform: "translateY(24px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {/* Connector line between bubbles */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "28px",
                    right: "-4px",
                    width: "50%",
                    height: "2px",
                    background: "#E85D26",
                    zIndex: 0,
                    display: "none",
                  }}
                  className="step-connector"
                />
              )}

              {/* Bubble */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#E85D26",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  margin: "0 auto 20px",
                  position: "relative",
                  zIndex: 1,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>

              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{step.icon}</div>

              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#0D0D0D",
                  margin: "0 0 12px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  margin: "0 0 16px",
                }}
              >
                {step.body}
              </p>

              <span
                style={{
                  display: "inline-block",
                  background: "rgba(232,93,38,0.1)",
                  color: "#E85D26",
                  borderRadius: "100px",
                  padding: "5px 14px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              >
                {step.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .step-connector { display: block !important; }
        }
      `}</style>
    </section>
  );
}
