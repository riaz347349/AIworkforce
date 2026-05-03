"use client";

import { useEffect, useRef } from "react";

const buildFeatures = [
  "Full discovery & solution design",
  "Custom AI agent or application built for you",
  "Testing & quality assurance",
  "Deployment & handover",
  "Fixed price agreed upfront — no surprises",
];

const retainerFeatures = [
  "Ongoing monitoring & uptime checks",
  "Regular performance optimisation",
  "Small tweaks & improvements included",
  "Direct access to our UK-based team",
  "Cancel anytime — no lock-in, no fees",
];

const comparisons = [
  { label: "Part-time AI hire", cost: "£1,800+/mo" },
  { label: "Freelance developer", cost: "£400–£800/day" },
  { label: "Large agency retainer", cost: "£2,000–£5,000/mo" },
  { label: "DIY no-code tools", cost: "Hours of your time" },
  { label: "UKAIWorkforce", cost: "From £50/mo", highlight: true },
];

const badges = [
  { icon: "🔓", title: "No lock-in", body: "Cancel your retainer anytime. No minimum term, ever." },
  { icon: "💷", title: "Fixed price", body: "Your setup fee is agreed upfront. No surprise invoices." },
  { icon: "🇬🇧", title: "UK-based team", body: "Real people, your timezone, plain English. Always." },
];

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="9" cy="9" r="9" fill="#E85D26" fillOpacity="0.12" />
      <path d="M5 9l3 3 5-5" stroke="#E85D26" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToProblem = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const cards = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>(".price-card") ?? []
    );
    if (!cards.length) return;

    const reveal = () =>
      cards.forEach((card, i) =>
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, i * 150)
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
      id="pricing"
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
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
          Pricing
        </span>

        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#0D0D0D",
            margin: "0 0 16px",
            letterSpacing: "-0.5px",
          }}
        >
          Simple, honest pricing.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            color: "#888",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            margin: "0 auto 56px",
            maxWidth: "520px",
          }}
        >
          No surprises, no lock-in. A small one-off fee to build it, then an
          affordable monthly cost to keep it running.
        </p>

        {/* Two cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          {/* Card 1 — Build & Deploy */}
          <div
            className="price-card"
            style={{
              background: "#0D0D0D",
              backgroundImage: `
                linear-gradient(rgba(232,93,38,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(232,93,38,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              borderRadius: "24px",
              padding: "40px 36px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(232,93,38,0.15)",
                color: "#E85D26",
                borderRadius: "100px",
                padding: "5px 14px",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "0.8rem",
                marginBottom: "20px",
              }}
            >
              One-off setup
            </span>

            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              Build & Deploy
            </h3>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                margin: "0 0 28px",
              }}
            >
              Discovery, design, build, testing and go-live — everything it takes
              to get your AI solution live.
            </p>

            <div style={{ marginBottom: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 800,
                  fontSize: "2.75rem",
                  color: "#fff",
                  letterSpacing: "-1px",
                }}
              >
                £199
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.9rem",
                  marginLeft: "8px",
                }}
              >
                one-off
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.82rem",
                margin: "0 0 28px",
              }}
            >
              Starting from · Price depends on complexity — confirmed before we start
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {buildFeatures.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "12px",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  <Tick />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToProblem}
              style={{
                width: "100%",
                background: "#E85D26",
                color: "#fff",
                border: "none",
                borderRadius: "100px",
                padding: "14px 24px",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "transform 0.15s",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Tell us your problem →
            </button>
          </div>

          {/* Card 2 — Keep it running */}
          <div
            className="price-card"
            style={{
              background: "#f5f5f3",
              border: "1.5px solid #e8e8e8",
              borderRadius: "24px",
              padding: "40px 36px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(232,93,38,0.1)",
                color: "#E85D26",
                borderRadius: "100px",
                padding: "5px 14px",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "0.8rem",
                marginBottom: "20px",
              }}
            >
              Monthly retainer
            </span>

            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#0D0D0D",
                margin: "0 0 12px",
              }}
            >
              Keep it running
            </h3>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#666",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                margin: "0 0 28px",
              }}
            >
              Ongoing maintenance, monitoring and improvements so your AI
              solution keeps delivering results.
            </p>

            <div style={{ marginBottom: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 800,
                  fontSize: "2.75rem",
                  color: "#0D0D0D",
                  letterSpacing: "-1px",
                }}
              >
                £50
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#888",
                  fontSize: "0.9rem",
                  marginLeft: "8px",
                }}
              >
                /month
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#aaa",
                fontSize: "0.82rem",
                margin: "0 0 28px",
              }}
            >
              Starting from · That&apos;s less than £2 a day to have AI working for your business
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {retainerFeatures.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "12px",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "#444",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  <Tick />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToProblem}
              style={{
                width: "100%",
                background: "#E85D26",
                color: "#fff",
                border: "none",
                borderRadius: "100px",
                padding: "14px 24px",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "transform 0.15s",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Tell us your problem →
            </button>
          </div>
        </div>

        {/* Comparison strip */}
        <div
          style={{
            background: "#f5f5f3",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "40px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 20px",
              textAlign: "center",
            }}
          >
            How we compare
          </h3>
          <div>
            {comparisons.map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <span
                  style={{
                    fontWeight: c.highlight ? 600 : 400,
                    color: c.highlight ? "#0D0D0D" : "#666",
                    fontSize: "0.95rem",
                  }}
                >
                  {c.highlight ? "⚡ " : ""}{c.label}
                </span>
                <span
                  style={{
                    fontFamily: c.highlight ? "var(--font-space-grotesk), sans-serif" : "var(--font-inter), sans-serif",
                    fontWeight: c.highlight ? 700 : 400,
                    color: c.highlight ? "#E85D26" : "#888",
                    fontSize: c.highlight ? "1rem" : "0.9rem",
                  }}
                >
                  {c.cost}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Confidence badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {badges.map((b) => (
            <div
              key={b.title}
              style={{
                textAlign: "center",
                padding: "24px 20px",
                background: "#f5f5f3",
                borderRadius: "16px",
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "10px" }}>{b.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#0D0D0D",
                  marginBottom: "6px",
                }}
              >
                {b.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#888",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                {b.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
