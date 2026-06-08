import React from "react";
/* ============================================================
   MORIAH LABS — Hero variants
   A: Diagrama/sistema (flow)  ·  B: Editorial tipográfico  ·  C: Matriz/órbita
   ============================================================ */

const HERO_COPY = {
  kicker: "Boutique de tecnologia · Jundiaí — SP",
  title: <>Onde a visão<br/>vira <em>sistema</em>.</>,
  lede: "Automação, sistemas web, sites e identidade visual para negócios que precisam de mais clareza, eficiência e presença digital.",
  primary: "Solicitar projeto",
  secondary: "Falar no WhatsApp",
};

/* ---------- Animated flow diagram ---------- */
function HeroFlow() {
  const inputs = [
    { y: 20, label: "Planilhas dispersas" },
    { y: 50, label: "Rotinas manuais" },
    { y: 80, label: "Processos soltos" },
  ];
  const outputs = [
    { y: 15, label: "Automação" },
    { y: 38.3, label: "Sistema web" },
    { y: 61.6, label: "Site" },
    { y: 85, label: "Identidade" },
  ];
  // SVG viewBox 100 x 100 (we scale via container aspect)
  const inX = 26, coreLx = 40, coreRx = 60, outX = 74;
  const curveIn = (y) => `M ${inX} ${y} C ${(inX+coreLx)/2} ${y}, ${(inX+coreLx)/2} 50, ${coreLx} 50`;
  const curveOut = (y) => `M ${coreRx} 50 C ${(coreRx+outX)/2} 50, ${(coreRx+outX)/2} ${y}, ${outX} ${y}`;

  return (
    <div className="flow" aria-hidden="true">
      <svg className="flow-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {inputs.map((n,i)=>(
          <path key={"i"+i} className="flow-path flow-in" d={curveIn(n.y)}
                style={{ "--len": 60, "--d": `${0.3 + i*0.12}s` }} />
        ))}
        {outputs.map((n,i)=>(
          <path key={"o"+i} className="flow-path flow-out" d={curveOut(n.y)}
                style={{ "--len": 60, "--d": `${0.9 + i*0.13}s` }} />
        ))}
        {outputs.map((n,i)=>(
          <circle key={"d"+i} className="flow-dot" r="0.7" style={{ "--d": `${1.6 + i*0.4}s` }}>
            <animateMotion dur={`${3.4 + i*0.3}s`} begin={`${1.6 + i*0.35}s`} repeatCount="indefinite"
                           path={curveOut(n.y)} />
          </circle>
        ))}
      </svg>

      {inputs.map((n,i)=>(
        <div key={"in"+i} className="node node-in" style={{ top:`${n.y}%`, "--d":`${0.2+i*0.1}s` }}>
          <span className="node-tick" /> {n.label}
        </div>
      ))}

      <div className="node node-core">
        <span className="core-eyebrow">MORIAH</span>
        <span className="core-sub">LABS</span>
        <span className="core-scan" />
      </div>

      {outputs.map((n,i)=>(
        <div key={"ou"+i} className="node node-out" style={{ top:`${n.y}%`, "--d":`${1.1+i*0.12}s` }}>
          {n.label} <span className="node-arrow">→</span>
        </div>
      ))}

      <div className="flow-axis flow-axis-l">ENTRADA · DISPERSO</div>
      <div className="flow-axis flow-axis-r">SAÍDA · ESTRUTURADO</div>
    </div>
  );
}

/* ---------- Variant A — Diagram ---------- */
function HeroDiagram() {
  return (
    <header className="hero" data-hero="A">
      <div className="hero-grid wrap">
        <div className="hero-copy">
          <span className="kicker" data-reveal>{HERO_COPY.kicker}</span>
          <h1 className="display hero-title" data-reveal style={{ "--d": "80ms" }}>{HERO_COPY.title}</h1>
          <p className="lede" data-reveal style={{ "--d": "200ms" }}>{HERO_COPY.lede}</p>
          <div className="hero-cta" data-reveal style={{ "--d": "300ms" }}>
            <a className="btn btn-primary" href="#contato">{HERO_COPY.primary}<span className="arw">↗</span></a>
            <a className="btn btn-ghost" href="#contato">{HERO_COPY.secondary}</a>
          </div>
          <div className="hero-meta" data-reveal style={{ "--d": "420ms" }}>
            <span>Automação</span><i/><span>Sistemas web</span><i/><span>Sites</span><i/><span>Identidade</span>
          </div>
        </div>
        <div className="hero-visual" data-reveal style={{ "--d": "260ms" }}>
          <HeroFlow />
        </div>
      </div>
      <ScrollCue/>
    </header>
  );
}

/* ---------- Variant B — Editorial ---------- */
function HeroEditorial() {
  return (
    <header className="hero hero-ed" data-hero="B">
      <div className="wrap hero-ed-inner">
        <div className="hero-ed-top" data-reveal>
          <span className="kicker">{HERO_COPY.kicker}</span>
          <span className="hero-ed-index">/01 — Manifesto</span>
        </div>
        <h1 className="hero-ed-title" data-reveal style={{ "--d": "100ms" }}>
          <span>Automação,</span>
          <span>software &amp;</span>
          <span><em>identidade</em></span>
          <span>com clareza.</span>
        </h1>
        <div className="hero-ed-foot">
          <p className="lede" data-reveal style={{ "--d": "260ms" }}>{HERO_COPY.lede}</p>
          <div className="hero-cta" data-reveal style={{ "--d": "360ms" }}>
            <a className="btn btn-primary" href="#contato">{HERO_COPY.primary}<span className="arw">↗</span></a>
            <a className="btn btn-ghost" href="#contato">{HERO_COPY.secondary}</a>
          </div>
        </div>
      </div>
      <ScrollCue/>
    </header>
  );
}

/* ---------- Variant C — Matrix / orbit ---------- */
function HeroMatrix() {
  const orbit = ["Automação","Sistema web","Site","Identidade"];
  return (
    <header className="hero" data-hero="C">
      <div className="hero-grid hero-grid--c wrap">
        <div className="hero-copy">
          <span className="kicker" data-reveal>{HERO_COPY.kicker}</span>
          <h1 className="display hero-title" data-reveal style={{ "--d": "80ms" }}>
            Transformamos<br/>operação em <em>ativo</em>.
          </h1>
          <p className="lede" data-reveal style={{ "--d": "200ms" }}>{HERO_COPY.lede}</p>
          <div className="hero-cta" data-reveal style={{ "--d": "300ms" }}>
            <a className="btn btn-primary" href="#contato">{HERO_COPY.primary}<span className="arw">↗</span></a>
            <a className="btn btn-ghost" href="#contato">{HERO_COPY.secondary}</a>
          </div>
        </div>
        <div className="hero-visual" data-reveal style={{ "--d": "260ms" }}>
          <div className="orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="orbit-ring orbit-ring-3" />
            <div className="orbit-core"><span>M</span></div>
            {orbit.map((o,i)=>(
              <div key={i} className={`orbit-node orbit-node-${i+1}`}><span>{o}</span></div>
            ))}
          </div>
        </div>
      </div>
      <ScrollCue/>
    </header>
  );
}

function ScrollCue(){
  return (
    <div className="scroll-cue" data-reveal style={{ "--d": "600ms" }}>
      <span className="scroll-cue-line" />
      <span className="scroll-cue-txt">Role para conhecer</span>
    </div>
  );
}

function Hero({ variant }) {
  if (variant === "B") return <HeroEditorial/>;
  if (variant === "C") return <HeroMatrix/>;
  return <HeroDiagram/>;
}

export { Hero, HeroDiagram, HeroEditorial, HeroMatrix };
