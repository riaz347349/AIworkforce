"use client";

import { useState, useRef } from "react";

interface CTABandProps {
  heading: string;
  subtext: string;
}

export default function CTABand({ heading, subtext }: CTABandProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToProblem = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => inputRef.current?.focus(), 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToProblem();
  };

  return (
    <section
      style={{
        background: "#E85D26",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "#fff",
            margin: "0 0 14px",
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
          }}
        >
          {heading}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            margin: "0 0 32px",
          }}
        >
          {subtext}
        </p>

        {/* Mini search bar */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "100px",
              padding: "6px 6px 6px 24px",
              boxShadow: focused ? "0 0 0 3px rgba(255,255,255,0.4)" : "0 4px 20px rgba(0,0,0,0.15)",
              transition: "box-shadow 0.2s",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Describe your problem..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
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
                padding: "12px 22px",
                fontFamily: "var(--font-dm-sans), sans-serif",
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
      </div>
    </section>
  );
}
