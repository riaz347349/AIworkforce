"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,93,38,0.15)" : "1px solid transparent",
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
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "1.375rem",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#ffffff" }}>UKAI</span>
          <span style={{ color: "#E85D26" }}>Workforce</span>
        </a>

        {/* Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            className="nav-links"
            style={{ display: "flex", gap: "28px" }}
          >
            {["How it works", "Services", "Pricing", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
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
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "transform 0.15s, background 0.2s",
              whiteSpace: "nowrap",
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
