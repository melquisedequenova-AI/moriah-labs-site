import { useState, useEffect } from 'react';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakRadio, TweakColor, TweakSelect
} from './TweaksPanel';
import { Hero } from './Heroes';
import { Manifesto, Services, Diferenciais, Processo, Impact, FinalCTA, Founder, Footer, Portfolio } from './Sections';

const TWEAK_DEFAULTS = {
  "heroVariant": "A",
  "base": "hybrid",
  "accent": "#C9A227",
  "servicesLayout": "editorial"
};

function inkFor(hex){
  const h = hex.replace("#","");
  const r = parseInt(h.slice(0,2),16)/255, g = parseInt(h.slice(2,4),16)/255, b = parseInt(h.slice(4,6),16)/255;
  const lin = c => c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4);
  const L = 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b);
  return L > 0.42 ? "#15130E" : "#F6F3EC";
}

function surfaceFor(base, region){
  if (base === "dark")  return "s-dark";
  if (base === "light") return "s-light";
  return region === "hero" ? "s-dark" : "s-light";
}

function Nav({ heroDark }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);
  const vars = heroDark
    ? { "--nav-fg":"#F3F0E9", "--nav-bg":"#0D0D0F", "--nav-line":"rgba(243,240,233,.12)" }
    : { "--nav-fg":"#15130E", "--nav-bg":"#F4F1EA", "--nav-line":"rgba(21,19,14,.14)" };
  return (
    <nav className="nav" data-scrolled={scrolled} style={vars}>
      <a className="brand" href="#top"><img src="/logo.png" alt="Moriah Labs AI" style={{height:"56px",width:"56px",objectFit:"contain",display:"block",flexShrink:0,filter:"drop-shadow(0 0 8px rgba(201,162,39,0.35))"}} />Moriah Labs</a>
      <div className="nav-links">
        <a className="nav-hide" href="#manifesto">Manifesto</a>
        <a className="nav-hide" href="#servicos">Serviços</a>
        <a className="nav-hide" href="#processo">Processo</a>
        <a className="nav-hide" href="/portfolio">Portfólio</a>
        <a className="nav-cta" href="#contato">Solicitar projeto</a>
      </div>
    </nav>
  );
}

function useMotion(deps){
  useEffect(()=>{
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }});
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el=>{
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) el.classList.add("in");
      else io.observe(el);
    });
    return ()=> io.disconnect();
  }, deps);

  useEffect(()=>{
    let raf = 0;
    const onScroll = ()=>{
      if (raf) return;
      raf = requestAnimationFrame(()=>{
        raf = 0;
        document.querySelectorAll("[data-parallax]").forEach(el=>{
          const rect = el.getBoundingClientRect();
          const prog = (rect.top + rect.height/2 - window.innerHeight/2) / window.innerHeight;
          el.style.transform = `translateY(${(prog * -36).toFixed(1)}px)`;
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
    return ()=> window.removeEventListener("scroll", onScroll);
  }, []);
}

export default function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(()=>{
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent-ink", inkFor(t.accent));
  }, [t.accent]);

  useMotion([t.heroVariant, t.servicesLayout, t.base]);

  const heroSurf = surfaceFor(t.base, "hero");
  const bodySurf = surfaceFor(t.base, "body");
  const heroDark = heroSurf === "s-dark";

  return (
    <div id="top">
      <Nav heroDark={heroDark} />

      <div className={heroSurf} key={"h"+t.heroVariant+t.base}>
        <Hero variant={t.heroVariant} />
      </div>

      <main>
        <div className={bodySurf} key={"b"+t.base+t.servicesLayout}>
          <Manifesto/>
          <hr className="rule wrap-rule" />
          <Services layout={t.servicesLayout}/>
          <hr className="rule wrap-rule" />
          <Diferenciais/>
          <hr className="rule wrap-rule" />
          <Processo/>
        </div>

        <Portfolio limit={4} />

        <div className="s-dark"><Impact/></div>

        <div className={bodySurf}><FinalCTA/></div>
      </main>

      <div className="s-dark"><Founder/></div>

      <div className="s-dark"><Footer/></div>

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Composição" value={t.heroVariant}
          options={[{label:"Diagrama",value:"A"},{label:"Editorial",value:"B"},{label:"Órbita",value:"C"}]}
          onChange={(v)=>setTweak("heroVariant", v)} />

        <TweakSection label="Paleta" />
        <TweakRadio label="Base" value={t.base}
          options={[{label:"Híbrido",value:"hybrid"},{label:"Escuro",value:"dark"},{label:"Claro",value:"light"}]}
          onChange={(v)=>setTweak("base", v)} />
        <TweakColor label="Destaque" value={t.accent}
          options={["#C9A227","#D98E32","#5A6B4B","#1E6F66"]}
          onChange={(v)=>setTweak("accent", v)} />

        <TweakSection label="Serviços" />
        <TweakSelect label="Layout" value={t.servicesLayout}
          options={[{label:"Editorial (numerado)",value:"editorial"},{label:"Índice / lista",value:"index"},{label:"Mosaico",value:"mosaic"}]}
          onChange={(v)=>setTweak("servicesLayout", v)} />
      </TweaksPanel>
    </div>
  );
}
