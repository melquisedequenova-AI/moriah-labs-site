import React from "react";
import { Portfolio } from "./Sections";

export default function PortfolioPage() {
  return (
    <div style={{ background: "var(--bg-dark, #0D0D0F)", minHeight: "100vh" }}>
      <div style={{ paddingTop: "100px" }}>
        <Portfolio />
      </div>
      <div style={{ textAlign: "center", padding: "24px", borderTop: "1px solid rgba(243,240,233,0.08)" }}>
        <a href="/" style={{
          fontFamily: "var(--mono, monospace)", fontSize: "0.72rem", letterSpacing: ".1em",
          textTransform: "uppercase", color: "rgba(243,240,233,0.5)", textDecoration: "none",
        }}>← Voltar ao início</a>
      </div>
    </div>
  );
}
