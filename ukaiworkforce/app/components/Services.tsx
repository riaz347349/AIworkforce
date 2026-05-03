"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "⚡",
    title: "AI Agents",
    body: "Autonomous agents that handle tasks, workflows, and decisions around the clock — your always-on digital team members.",
  },
  {
    icon: "🛠",
    title: "AI Applications",
    body: "Custom-built software powered by AI to solve your specific business problems — from lead generation to internal tools.",
  },
  {
    icon: "🔗",
    title: "AI Automation",
    body: "Connect your existing tools and eliminate manual processes. Stop doing repetitive work and let AI handle it.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>(".service-card") ?? []
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
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s, box-shadow 0.2s";
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
      id="services"
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <span style={tagStyle}>What we do</span>

        <h2 style={h2Style}>Three ways we put AI to work</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="services-grid"
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="service-card"
              style={{
                background: "#f5f5f3",
                borderRadius: "20px",
                padding: "40px 32px",
                textAlign: "left",
                border: "1.5px solid transparent",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(232,93,38,0.3)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,93,38,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "rgba(232,93,38,0.1)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: "22px",
                }}
              >
                {svc.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#0D0D0D",
                  margin: "0 0 12px",
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {svc.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .services-grid { grid-template-columns: 1fr !important; }
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
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 500,
  fontSize: "0.8rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "20px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontWeight: 800,
  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
  color: "#0D0D0D",
  margin: "0 0 48px",
  letterSpacing: "-0.5px",
};
