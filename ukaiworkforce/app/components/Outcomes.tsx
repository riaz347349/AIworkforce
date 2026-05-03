"use client";

import { useEffect, useRef } from "react";

const outcomes = [
  {
    bg: "#0D0D0D",
    icon: "⏱",
    title: "Save time",
    body: "Reclaim hours lost to repetitive tasks and manual processes",
    textColor: "#fff",
    mutedColor: "rgba(255,255,255,0.65)",
  },
  {
    bg: "#E85D26",
    icon: "💷",
    title: "Save money",
    body: "Reduce headcount costs and operational overhead with AI",
    textColor: "#fff",
    mutedColor: "rgba(255,255,255,0.8)",
  },
  {
    bg: "#1A1A2E",
    icon: "📈",
    title: "Make more money",
    body: "Unlock new revenue streams and scale without scaling your team",
    textColor: "#fff",
    mutedColor: "rgba(255,255,255,0.65)",
  },
];

export default function Outcomes() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".outcome-card");
            cards?.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 120);
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
      ref={sectionRef}
      style={{ background: "#f5f5f3", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
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
          The outcome
        </span>

        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#0D0D0D",
            margin: "0 0 56px",
            letterSpacing: "-0.5px",
          }}
        >
          Three results. Every client.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="outcome-card"
              style={{
                background: o.bg,
                borderRadius: "20px",
                padding: "40px 32px",
                textAlign: "left",
                opacity: 0,
                transform: "translateY(24px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <div style={{ fontSize: "2.25rem", marginBottom: "20px" }}>{o.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: o.textColor,
                  margin: "0 0 12px",
                }}
              >
                {o.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: o.mutedColor,
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
