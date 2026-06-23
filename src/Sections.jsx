import React from "react";
/* ============================================================
   MORIAH LABS — Body sections
   ============================================================ */

/* ---------- Manifesto ---------- */
function Manifesto() {
  return (
    <section className="section" id="manifesto">
      <div className="wrap mani-grid">
        <div className="mani-side">
          <span className="kicker" data-reveal>O significado</span>
          <p className="mani-name" data-reveal style={{ "--d":"80ms" }}>
            mo·ri·ah <span className="mani-pron">/moˈʁi.a/</span>
          </p>
          <p className="body mani-note" data-reveal style={{ "--d":"160ms" }}>
            Visão. Direção. Revelação. Um nome que carrega a ideia de enxergar
            adiante e dar forma ao que ainda não tem estrutura.
          </p>
        </div>
        <div className="mani-main">
          <h2 className="h-section mani-statement" data-reveal>
            Transformamos complexidade em <em>estrutura</em>. Tornamos o invisível
            visível, o manual em automatizado e o confuso em organizado.
          </h2>
          <div className="mani-points" data-reveal style={{ "--d":"160ms" }}>
            <div className="mani-pt"><span className="mp-from">invisível</span><span className="mp-arw">→</span><span className="mp-to">visível</span></div>
            <div className="mani-pt"><span className="mp-from">manual</span><span className="mp-arw">→</span><span className="mp-to">automatizado</span></div>
            <div className="mani-pt"><span className="mp-from">confuso</span><span className="mp-arw">→</span><span className="mp-to">organizado</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  { n:"01", t:"Automação inteligente", d:"Desenhamos fluxos, integrações e rotinas que reduzem o trabalho manual e aumentam a eficiência operacional.", tags:["Fluxos","Integrações","Rotinas"] },
  { n:"02", t:"Sistemas web", d:"Criamos plataformas, dashboards e sistemas sob medida para centralizar processos e dar escala à operação.", tags:["Plataformas","Dashboards","Sob medida"] },
  { n:"03", t:"Sites de alta conversão", d:"Desenvolvemos páginas e sites com posicionamento claro, performance e foco real em conversão.", tags:["Landing","Performance","Conversão"] },
  { n:"04", t:"Identidade visual", d:"Construímos marcas com direção estética, coerência e presença digital profissional.", tags:["Marca","Direção","Sistema"] },
];

function ServicesHead() {
  return (
    <div className="wrap svc-head">
      <span className="kicker" data-reveal>O que fazemos</span>
      <h2 className="h-section" data-reveal style={{ "--d":"80ms" }}>
        Quatro disciplinas, <em>um sistema</em>.
      </h2>
      <p className="lede svc-head-lede" data-reveal style={{ "--d":"160ms" }}>
        Estratégia, design e implementação técnica reunidos numa só entrega —
        do diagnóstico à operação no ar.
      </p>
    </div>
  );
}

function Services({ layout }) {
  return (
    <section className="section section--svc" id="servicos">
      <ServicesHead/>
      {layout === "index"   && <ServicesIndex/>}
      {layout === "mosaic"  && <ServicesMosaic/>}
      {(layout === "editorial" || !layout) && <ServicesEditorial/>}
    </section>
  );
}

function ServicesEditorial() {
  return (
    <div className="wrap svc-ed">
      {SERVICES.map((s,i)=>(
        <article className="svc-row" data-reveal style={{ "--d":`${i*70}ms` }} key={s.n}>
          <span className="svc-n">{s.n}</span>
          <h3 className="svc-t">{s.t}</h3>
          <p className="svc-d body">{s.d}</p>
          <div className="svc-tags">
            {s.tags.map(t=><span key={t} className="tag">{t}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}

function ServicesIndex() {
  return (
    <div className="wrap svc-idx">
      {SERVICES.map((s,i)=>(
        <article className="idx-row" data-reveal style={{ "--d":`${i*60}ms` }} key={s.n}>
          <span className="idx-n">{s.n}</span>
          <h3 className="idx-t">{s.t}</h3>
          <p className="idx-d">{s.d}</p>
          <span className="idx-arw">↗</span>
        </article>
      ))}
    </div>
  );
}

function ServicesMosaic() {
  return (
    <div className="wrap svc-mos">
      {SERVICES.map((s,i)=>(
        <article className={`mos-card mos-${i+1}`} data-reveal style={{ "--d":`${i*70}ms` }} key={s.n}>
          <span className="svc-n">{s.n}</span>
          <div className="mos-body">
            <h3 className="svc-t">{s.t}</h3>
            <p className="svc-d body">{s.d}</p>
          </div>
          <div className="svc-tags">{s.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Diferenciais ---------- */
const DIFFS = [
  { n:"A", t:"Estratégia antes da execução", d:"Pensamos o porquê e o como antes de construir. Cada decisão técnica nasce de um objetivo de negócio." },
  { n:"B", t:"Tecnologia aplicada ao real", d:"Automação com foco em operação — nunca tecnologia pela tecnologia." },
  { n:"C", t:"Design com função", d:"Estética a serviço de clareza, leitura e conversão." },
  { n:"D", t:"Estrutura pensada para crescer", d:"Sistemas e marcas preparados para escalar sem retrabalho." },
  { n:"E", t:"Clareza em cada entrega", d:"Organização, performance e documentação em tudo que sai daqui." },
];

function Diferenciais() {
  return (
    <section className="section section--diff" id="diferenciais">
      <div className="wrap diff-grid">
        <div className="diff-side">
          <span className="kicker" data-reveal>Por que a Moriah</span>
          <h2 className="h-section" data-reveal style={{ "--d":"80ms" }}>
            Autoridade técnica,<br/>sem ruído.
          </h2>
          <p className="body diff-side-note" data-reveal style={{ "--d":"160ms" }}>
            Unimos visão estratégica e execução técnica para entregar soluções
            sob medida — pensadas para a operação real do seu negócio.
          </p>
        </div>
        <div className="diff-list">
          {DIFFS.map((d,i)=>(
            <article className="diff-row" data-reveal style={{ "--d":`${i*60}ms` }} key={d.n}>
              <span className="diff-n">{d.n}</span>
              <div>
                <h3 className="diff-t">{d.t}</h3>
                <p className="diff-d body">{d.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Processo ---------- */
const STEPS = [
  { n:"01", t:"Diagnóstico", d:"Entendemos operação, gargalos e objetivos antes de qualquer linha de código." },
  { n:"02", t:"Estruturação", d:"Definimos arquitetura, fluxos e a direção visual que sustentam a solução." },
  { n:"03", t:"Execução", d:"Desenvolvemos, integramos e implementamos com precisão técnica." },
  { n:"04", t:"Evolução", d:"Acompanhamos, medimos e refinamos para a operação crescer com clareza." },
];

function Processo() {
  return (
    <section className="section section--proc" id="processo">
      <div className="wrap">
        <div className="proc-head">
          <span className="kicker" data-reveal>Como trabalhamos</span>
          <h2 className="h-section" data-reveal style={{ "--d":"80ms" }}>
            Um método em <em>quatro tempos</em>.
          </h2>
        </div>
        <div className="proc-track">
          <div className="proc-line" data-reveal />
          {STEPS.map((s,i)=>(
            <article className="proc-step" data-reveal style={{ "--d":`${i*90}ms` }} key={s.n}>
              <span className="proc-dot" />
              <span className="proc-n">{s.n}</span>
              <h3 className="proc-t">{s.t}</h3>
              <p className="proc-d body">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Impact ---------- */
function Impact() {
  return (
    <section className="section impact" id="impacto">
      <div className="impact-bg" data-parallax aria-hidden="true">
        <span className="impact-grid-line" /><span className="impact-grid-line" />
        <span className="impact-grid-line" /><span className="impact-grid-line" />
      </div>
      <div className="wrap impact-inner">
        <span className="kicker" data-reveal>Nossa premissa</span>
        <h2 className="impact-phrase" data-reveal style={{ "--d":"100ms" }}>
          Menos improviso.<br/><em>Mais sistema.</em>
        </h2>
        <p className="lede impact-sub" data-reveal style={{ "--d":"240ms" }}>
          Clareza operacional, presença digital e identidade com propósito —
          tornamos o invisível em estrutura.
        </p>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
const CONTACT = {
  email: "contato@moriahlabs.com.br",
  phone: "+55 11 99853-5124",
  whats: "https://wa.me/5511998535124",
  city:  "Jundiaí — SP",
};

function FinalCTA() {
  return (
    <section className="section section--cta" id="contato">
      <div className="wrap cta-grid">
        <div className="cta-main">
          <span className="kicker" data-reveal>Próximo passo</span>
          <h2 className="display cta-title" data-reveal style={{ "--d":"80ms" }}>
            Vamos estruturar sua<br/>operação e <em>presença digital</em>?
          </h2>
          <div className="hero-cta cta-actions" data-reveal style={{ "--d":"200ms" }}>
            <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>Solicitar projeto<span className="arw">↗</span></a>
            <a className="btn btn-ghost" href={CONTACT.whats} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
          </div>
        </div>
        <div className="cta-card" data-reveal style={{ "--d":"260ms" }}>
          <div className="cta-detail"><span className="cta-k">E-mail</span><a className="cta-v" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
          <hr className="rule"/>
          <div className="cta-detail"><span className="cta-k">Telefone</span><a className="cta-v" href={`tel:${CONTACT.phone.replace(/\s/g,"")}`}>{CONTACT.phone}</a></div>
          <hr className="rule"/>
          <div className="cta-detail"><span className="cta-k">Base</span><span className="cta-v">{CONTACT.city}</span></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  return (
    <section style={{
      padding: "48px 0 40px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div data-reveal style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        opacity: "var(--reveal-opacity, 1)",
      }}>
        <img
          src="/founder.jpg"
          alt="Melquisedeque Nova — Fundador"
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center top",
            border: "2px solid rgba(201,162,39,0.45)",
            flexShrink: 0,
          }}
        />
        <div style={{ lineHeight: 1.4 }}>
          <p style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--fg, #F3F0E9)",
            margin: 0,
            letterSpacing: "0.01em",
          }}>
            Melquisedeque Nova
          </p>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--accent, #C9A227)",
            margin: 0,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: "4px",
          }}>
            Fundador · Moriah Labs
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a href="#top" style={{ display:"inline-flex", alignItems:"center", textDecoration:"none" }}>
            <img src="/logo.png" alt="Moriah Labs AI" style={{ height:"48px", width:"auto", display:"block" }} />
          </a>
          <p className="footer-tag">Automação, sistemas web, sites e identidade visual.</p>
        </div>
        <nav className="footer-col">
          <span className="footer-h">Navegar</span>
          <a className="foot-link" href="#manifesto">Manifesto</a>
          <a className="foot-link" href="#servicos">Serviços</a>
          <a className="foot-link" href="#processo">Processo</a>
          <a className="foot-link" href="#contato">Contato</a>
        </nav>
        <nav className="footer-col">
          <span className="footer-h">Contato</span>
          <a className="foot-link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a className="foot-link" href={CONTACT.whats} target="_blank" rel="noreferrer">WhatsApp</a>
          <span className="foot-link">{CONTACT.city}</span>
        </nav>
        <nav className="footer-col">
          <span className="footer-h">Redes</span>
          <a className="foot-link" href="#">Instagram</a>
          <a className="foot-link" href="#">LinkedIn</a>
          <a className="foot-link" href="#">Behance</a>
        </nav>
      </div>
      <div className="wrap footer-base">
        <span>© {year} Moriah Labs. Todos os direitos reservados.</span>
        <span className="footer-sig">Onde a visão vira sistema.</span>
      </div>
    </footer>
  );
}


/* ---------- Portfolio ---------- */
const PROJECTS = [
  {
    id: "als-contabil",
    name: "ALS Assessoria Contábil",
    category: "Site Institucional",
    description: "Site profissional para escritório de contabilidade e fiscal com foco em credibilidade e captação de clientes.",
    url: "https://als-contabil.vercel.app",
    screen: "/screens/als-contabil.jpg",
    tags: ["HTML", "CSS", "Formspree"],
  },
  {
    id: "aura-cleaning",
    name: "Aura Cleaning NYC",
    category: "Landing Page",
    description: "Landing page de alta conversão para empresa de limpeza em Nova York, design premium e formulário integrado.",
    url: "https://aura-cleaning-site.vercel.app",
    screen: "/screens/aura-cleaning.jpg",
    tags: ["HTML", "CSS", "Formspree"],
    international: { flag: "🇺🇸", country: "Estados Unidos" },
  },
  {
    id: "mikaeli-adv",
    name: "Dra. Mikaeli Kezia",
    category: "Site Profissional",
    description: "Site premium para advogada em Jundiaí com identidade visual sofisticada e captação de leads.",
    url: "https://mikaeli-mendonca-adv.vercel.app",
    screen: "/screens/mikaeli-adv.jpg",
    tags: ["HTML", "CSS", "WhatsApp"],
  },
  {
    id: "promptforja",
    name: "PromptForja",
    category: "SaaS",
    description: "Plataforma SaaS de otimização de prompts com IA, multilíngue, pagamentos BR e internacionais.",
    url: "https://promptforja.com",
    screen: "/screens/promptforja.jpg",
    tags: ["React", "Supabase", "Stripe", "n8n"],
  },
  {
    id: "ibadgb",
    name: "IBAD-GB Sistema Web",
    category: "Sistema Acadêmico",
    description: "Sistema de gestão acadêmica para Instituto Bíblico das Assembleias de Deus da Guiné-Bissau — matrícula, notas, diplomas e relatórios.",
    url: "https://ibadgb.app",
    screen: "/screens/ibadgb.jpg",
    tags: ["React", "TypeScript", "Supabase", "Vercel"],
    international: { flag: "🇬🇼", country: "Guiné-Bissau" },
  },
  {
    id: "ofertasnow",
    name: "OfertasNow",
    category: "E-commerce / Ofertas",
    description: "Plataforma de ofertas e promoções com foco em curadoria de produtos e experiência de compra simplificada.",
    url: "http://ofertasnow.app.br/",
    screen: "/screens/ofertasnow.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

function ProjectCard({ project }) {
  const isIntl = !!project.international;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      style={{
        display: "block",
        textDecoration: "none",
        background: "#FFFFFF",
        border: isIntl ? "1px solid rgba(201,162,39,0.35)" : "1px solid rgba(21,19,14,0.10)",
        boxShadow: isIntl ? "0 2px 16px rgba(201,162,39,0.12)" : "0 2px 12px rgba(21,19,14,0.06)",
        borderRadius: "4px",
        overflow: "hidden",
        transition: "border-color .3s ease, transform .3s ease, box-shadow .3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(201,162,39,0.7)";
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(243,240,233,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", background: "#0d0d0f" }}>
        <img
          src={project.screen}
          alt={project.name}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transition: "transform .4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(13,13,15,0.65) 100%)" }} />
        <span style={{
          position: "absolute", top: "14px", left: "14px",
          fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: ".2em",
          textTransform: "uppercase", color: "var(--accent,#C9A227)",
          background: "rgba(13,13,15,0.8)", padding: "5px 10px", borderRadius: "2px",
          backdropFilter: "blur(8px)",
        }}>{project.category}</span>
        {isIntl && (
          <span style={{
            position: "absolute", top: "14px", left: "50%", transform: "translateX(-50%)",
            fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: ".15em",
            textTransform: "uppercase", color: "#C9A227",
            background: "rgba(13,13,15,0.85)", padding: "5px 10px", borderRadius: "2px",
            backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: "5px",
            whiteSpace: "nowrap",
          }}>
            ✦ Internacional
          </span>
        )}
        <span style={{
          position: "absolute", top: "14px", right: "14px",
          fontSize: "0.9rem", color: "rgba(243,240,233,0.7)",
          background: "rgba(13,13,15,0.8)", padding: "4px 10px", borderRadius: "2px",
          backdropFilter: "blur(8px)",
        }}>↗</span>
      </div>

      <div style={{ padding: "22px 24px 24px" }}>
        <h3 style={{
          fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 400,
          color: "#15130E", margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1.2,
        }}>{project.name}</h3>
        <p style={{
          fontFamily: "var(--sans)", fontSize: "0.83rem", lineHeight: 1.65,
          color: "rgba(21,19,14,0.58)", margin: "0 0 16px",
        }}>
          {project.description}
          {isIntl && (
            <span style={{ marginLeft: "8px", fontSize: "1.1rem", verticalAlign: "middle" }}
                  title={project.international.country}>
              {project.international.flag}
            </span>
          )}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: ".15em",
              textTransform: "uppercase", color: "rgba(201,162,39,0.8)",
              border: "1px solid rgba(201,162,39,0.22)", padding: "3px 9px", borderRadius: "2px",
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function Portfolio({ limit }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section id="portfolio" style={{ padding: "clamp(64px,9vw,128px) var(--gutter,5vw)", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
          <p style={{
            fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: ".28em",
            textTransform: "uppercase", color: "var(--accent,#C9A227)", margin: "0 0 12px",
          }}>Portfólio</p>
          <h2 style={{
            fontFamily: "var(--serif)", fontSize: "clamp(2.2rem,4.5vw,3.4rem)",
            fontWeight: 360, letterSpacing: "-0.03em", color: "#15130E",
            margin: 0, lineHeight: 1.08,
          }}>Projetos<br /><em>entregues.</em></h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
          gap: "24px",
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        {limit && (
          <div data-reveal style={{ marginTop: "52px", textAlign: "center" }}>
            <a href="/portfolio" style={{
              fontFamily: "var(--mono)", fontSize: "0.78rem", letterSpacing: ".1em",
              textTransform: "uppercase", color: "var(--accent,#C9A227)",
              textDecoration: "none", borderBottom: "1px solid rgba(201,162,39,0.35)",
              paddingBottom: "3px",
            }}>Ver todos os projetos →</a>
          </div>
        )}
      </div>
    </section>
  );
}

export { Manifesto, Services, Diferenciais, Processo, Impact, FinalCTA, Founder, Footer };
