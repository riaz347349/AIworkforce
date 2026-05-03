"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // run once on mount in case page loads mid-scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProblem = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        // Always keep a minimum dark gradient so the logo never disappears
        background: scrolled
          ? "rgba(13,13,13,0.95)"
          : "linear-gradient(rgba(13,13,13,0.55), transparent)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(232,93,38,0.15)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — UKAI always orange so it's visible on any bg */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "1.35rem",
            textDecoration: "none",
            letterSpacing: "-0.3px",
          }}
        >
          <span style={{ color: "#E85D26" }}>UKAI</span>
          <span style={{ color: "#ffffff" }}>Workforce</span>
        </a>

        {/* Links + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div className="nav-links" style={{ display: "flex", gap: "28px" }}>
            {["How it works", "Services", "Pricing", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToProblem}
            style={{
              background: "#E85D26",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              padding: "10px 22px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "0.9rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
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

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
