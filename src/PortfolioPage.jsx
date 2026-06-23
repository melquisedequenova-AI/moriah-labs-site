import React from "react";
import { useEffect } from "react";
import { Portfolio } from "./Sections";

export default function PortfolioPage() {
  // Activate reveal animations (same as App's useMotion)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95) el.classList.add("in");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ background: "#0D0D0F", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px clamp(20px, 6vw, 80px)",
        background: "rgba(13,13,15,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(243,240,233,0.08)",
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.png" alt="Moriah Labs" style={{ height: "44px", width: "44px", objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(201,162,39,0.3))" }} />
          <span style={{ fontFamily: "var(--serif, 'Newsreader', serif)", fontSize: "1.2rem", color: "#F3F0E9", fontWeight: 440 }}>Moriah&nbsp;Labs</span>
        </a>
        <a href="/" style={{
          fontFamily: "var(--mono, monospace)", fontSize: "0.72rem", letterSpacing: ".1em",
          textTransform: "uppercase", color: "rgba(243,240,233,0.55)", textDecoration: "none",
        }}>← Voltar</a>
      </nav>

      <div style={{ paddingTop: "90px" }}>
        <Portfolio />
      </div>

      <div style={{
        textAlign: "center", padding: "32px",
        borderTop: "1px solid rgba(243,240,233,0.08)",
        fontFamily: "var(--mono, monospace)", fontSize: "0.65rem",
        letterSpacing: ".2em", textTransform: "uppercase",
        color: "rgba(243,240,233,0.3)",
      }}>
        Moriah Labs AI · Jundiaí — SP · Brasil
      </div>
    </div>
  );
}
