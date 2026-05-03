"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "80%", label: "Tasks automated on average" },
  { value: "2wks", label: "Average time to first solution" },
  { value: "£50", label: "Monthly retainer from just" },
];

export default function Hero() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = elementsRef.current.filter(Boolean) as HTMLElement[];
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 120 + 100);
    });
  }, []);

  const scrollToProblem = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  const setRef = (i: number) => (el: HTMLElement | null) => {
    elementsRef.current[i] = el;
  };

  return (
    <section
      style={{
        background: "#0D0D0D",
        backgroundImage: `
          linear-gradient(rgba(232,93,38,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,93,38,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        textAlign: "center",
      }}
    >
      {/* Badge pill */}
      <div
        ref={setRef(0)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(232,93,38,0.12)",
          border: "1px solid rgba(232,93,38,0.3)",
          borderRadius: "100px",
          padding: "8px 20px",
          marginBottom: "28px",
          color: "#E85D26",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          letterSpacing: "0.02em",
        }}
      >
        <span>🇬🇧</span>
        <span>UK-based AI agency · Bolton, England</span>
      </div>

      {/* H1 */}
      <h1
        ref={setRef(1)}
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          lineHeight: 1.1,
          color: "#ffffff",
          maxWidth: "820px",
          margin: "0 0 24px",
          letterSpacing: "-1px",
        }}
      >
        Your{" "}
        <span style={{ color: "#E85D26" }}>AI workforce</span>
        , built for business.
      </h1>

      {/* Subtext */}
      <p
        ref={setRef(2)}
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          color: "rgba(255,255,255,0.7)",
          maxWidth: "600px",
          margin: "0 0 40px",
          lineHeight: 1.65,
        }}
      >
        We build AI agents and custom applications that save you time, cut your
        costs, and unlock new revenue — without the overhead of hiring.
      </p>

      {/* CTA button */}
      <button
        ref={setRef(3)}
        onClick={scrollToProblem}
        style={{
          background: "#E85D26",
          color: "#fff",
          border: "none",
          borderRadius: "100px",
          padding: "16px 36px",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontWeight: 500,
          fontSize: "1.05rem",
          cursor: "pointer",
          marginBottom: "64px",
          transition: "transform 0.15s, box-shadow 0.2s",
          boxShadow: "0 4px 24px rgba(232,93,38,0.35)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 6px 32px rgba(232,93,38,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,93,38,0.35)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Tell us your problem →
      </button>

      {/* Divider + stats */}
      <div
        ref={setRef(4)}
        style={{
          width: "100%",
          maxWidth: "640px",
        }}
      >
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            marginBottom: "40px",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.value} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#E85D26",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.85rem",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
