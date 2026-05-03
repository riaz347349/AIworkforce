export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        padding: "40px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 800,
            fontSize: "1.25rem",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#E85D26" }}>UKAI</span>
          <span style={{ color: "#ffffff" }}>Workforce</span>
        </a>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.875rem",
            margin: 0,
          }}
        >
          © 2025 UKAIWorkforce.co.uk · Bolton, England
        </p>
      </div>
    </footer>
  );
}
