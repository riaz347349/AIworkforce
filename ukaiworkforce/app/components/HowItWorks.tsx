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
    const cards = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>(".step-card") ?? []
    );
    if (!cards.length) return;

    const reveal = () =>
      cards.forEach((card, i) =>
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, i * 150)
      );

    // Hide via JS only (so SSR renders visible)
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    });

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { reveal(); observer.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    // Safety fallback — always show after 1.4 s
    const fallback = setTimeout(reveal, 1400);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ background: "#f5f5f3", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        {/* Tag */}
        <span style={tagStyle}>How it works</span>

        <h2 style={h2Style}>Our 3-step plan</h2>

        <p style={{ ...mutedPStyle, margin: "0 auto 72px", maxWidth: "520px" }}>
          From first contact to a working AI solution — here&apos;s exactly what happens.
        </p>

        {/* Bubbles row + connecting line */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            position: "relative",
            marginBottom: "32px",
          }}
          className="bubbles-row"
        >
          {/* Orange connecting line sits behind the bubbles */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "27px",
              left: "calc(100% / 6)",
              right: "calc(100% / 6)",
              height: "2px",
              background: "#E85D26",
              zIndex: 0,
            }}
          />
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "center" }}>
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
                  fontSize: "1.3rem",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 0 0 6px #f5f5f3",
                }}
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Step cards — content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0 24px",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="step-card"
              style={{ padding: "24px 16px 8px", textAlign: "center" }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{step.icon}</div>

              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#0D0D0D",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: "0 0 18px",
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
        @media (max-width: 720px) {
          .bubbles-row { grid-template-columns: 1fr !important; gap: 0; }
          .bubbles-row > div { margin-bottom: 8px; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-top: 1px solid #e8e8e4; padding-top: 28px; }
        }
      `}</style>
    </section>
  );
}

const tagStyle: React.CSSProperties = {
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
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-syne), sans-serif",
  fontWeight: 800,
  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
  color: "#0D0D0D",
  margin: "0 0 16px",
  letterSpacing: "-0.5px",
};

const mutedPStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  color: "#888",
  fontSize: "1.05rem",
  lineHeight: 1.65,
};
