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
    const cards = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>(".outcome-card") ?? []
    );
    if (!cards.length) return;

    const reveal = () =>
      cards.forEach((card, i) =>
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, i * 120)
      );

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { reveal(); observer.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    const fallback = setTimeout(reveal, 1400);
    return () => { observer.disconnect(); clearTimeout(fallback); };
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
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="outcomes-grid"
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
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "22px",
                }}
              >
                {o.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: o.textColor,
                  margin: "0 0 10px",
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

      <style>{`
        @media (max-width: 720px) {
          .outcomes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
