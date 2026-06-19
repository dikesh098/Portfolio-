import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useReveal, useBarFill } from '../components/useReveal';
import { PROJECTS_FEATURED, SKILL_GROUPS, CERTIFICATIONS } from '../data';

const HERO_ROLES = ['AI / ML Engineer', 'Full-Stack Developer', 'Data Analyst', 'Problem Solver'];

const TERMINAL_LINES = [
  { prefix: '>>>',  text: 'import tensorflow as tf', color: 'var(--accent3)' },
  { prefix: '>>>',  text: 'model = build_dqn_agent(state_size=84)', color: 'var(--accent3)' },
  { prefix: '>>>',  text: 'model.fit(env, episodes=50_000)', color: 'var(--accent3)' },
  { prefix: 'out:', text: 'Epoch 50000 — reward: 9847 | loss: 0.023', color: 'var(--accent)' },
  { prefix: '>>>',  text: 'model.evaluate()  # accuracy: 85.2%', color: 'var(--accent3)' },
  { prefix: 'out:', text: "{'precision': 0.87, 'recall': 0.84, 'f1': 0.855}", color: 'var(--accent4)' },
];

function StatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const match = String(value).match(/^([0-9]*\.?[0-9]+)(.*)$/);
  const [display, setDisplay] = useState(match ? '0' + (match[2] ?? '') : value);

  useEffect(() => {
    if (!match || !ref.current) return;
    const target = parseFloat(match[1]);
    const suffix = match[2] ?? '';
    const isFloat = match[1].includes('.');
    const node = ref.current;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          let start: number | null = null;
          const dur = 1300;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay((isFloat ? (target * eased).toFixed(2) : Math.floor(target * eased)) + suffix);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(node);
        }
      });
    }, { threshold: 0.4 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className="stat-num">{display}</div>;
}

function ProjectCard({ p, delay = 0, big = false }: { p: typeof PROJECTS_FEATURED[0]; delay?: number; big?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--px', (px * 100).toFixed(1) + '%');
    el.style.setProperty('--py', (py * 100).toFixed(1) + '%');
    el.style.transition = 'transform .12s ease, border-color .4s, box-shadow .4s';
    el.style.transform = `perspective(900px) translateY(-8px) rotateX(${(py - 0.5) * -8}deg) rotateY(${(px - 0.5) * 8}deg)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transition = 'transform .5s cubic-bezier(.23,1,.32,1), border-color .4s, box-shadow .4s';
    el.style.transform = '';
  };

  return (
    <div ref={ref} className={`pc ${big ? 'pc-big' : ''}`} style={{ transitionDelay: `${delay}s` }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="pc-num">{p.num}</div>
      <div className="pc-cat">{p.cat}</div>
      <div className="pc-name" style={{ fontFamily: "'Syne',sans-serif", fontSize: big ? 28 : 20, fontWeight: 700 }}>{p.name}</div>
      {p.metric && (
        <div className="pc-metric">
          <div className="pc-metric-num">{p.metric}</div>
          <div className="pc-metric-lbl">{p.metricLabel}</div>
        </div>
      )}
      <div className="pc-desc">{p.desc}</div>
      <div className="pc-techs">{p.techs.map((t, i) => <span key={i} className="pc-tech">{t}</span>)}</div>
      <div className="pc-links">
        {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="pc-link">Live Demo →</a>}
        <Link to="/projects" className="pc-link ghost">Full Detail →</Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [termLine, setTermLine] = useState(0);
  const pageRef = useReveal();
  useBarFill();

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % HERO_ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (termLine >= TERMINAL_LINES.length) return;
    const id = setTimeout(() => setTermLine(t => t + 1), 500);
    return () => clearTimeout(id);
  }, [termLine]);

  const magMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.22;
    const y = (e.clientY - r.top - r.height / 2) * 0.22;
    el.style.transform = `translate(${x}px, ${y - 2}px)`;
  };
  const magLeave = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = ''; };

  return (
    <main ref={pageRef as React.RefObject<HTMLElement>} style={{ minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section className="hero" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '0 52px', position: 'relative', overflow: 'hidden',
      }}>
        {/* grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(127,255,178,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(127,255,178,.025) 1px,transparent 1px)',
          backgroundSize: '64px 64px', animation: 'gridScroll 25s linear infinite',
        }} />
        {/* orbs */}
        <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle,rgba(127,255,178,.05),transparent 70%)', top: -160, right: -120, '--tx': '30px', '--ty': '-40px', '--dur': '10s' } as React.CSSProperties} />
        <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(107,159,255,.045),transparent 70%)', bottom: 60, left: 60, '--tx': '-20px', '--ty': '25px', '--dur': '8s', '--del': '-3s' } as React.CSSProperties} />

        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* LEFT: text */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, opacity: 0, animation: 'slideUp .8s .3s forwards' }}>
              <div className="pulse-dot" /> Available for Opportunities
            </div>

            <div style={{ opacity: 0, animation: 'slideUp .9s .5s forwards', lineHeight: 0.88, marginBottom: 6 }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(56px,9vw,128px)', fontWeight: 800, letterSpacing: -5, display: 'block', background: 'linear-gradient(135deg,#fff 0%,var(--accent) 130%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                DIKESH
              </span>
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(56px,9vw,128px)', fontWeight: 800, letterSpacing: -5, display: 'block', WebkitTextStroke: '1.5px rgba(127,255,178,.25)', color: 'transparent' }}>
                GAUTAM
              </span>
            </div>

            <div style={{ fontSize: 'clamp(15px,2vw,22px)', color: 'var(--accent)', fontFamily: "'Syne',sans-serif", fontWeight: 600, minHeight: '1.4em', marginBottom: 14, opacity: 0, animation: 'slideUp .9s .65s forwards' }}>
              <span key={roleIdx} style={{ display: 'inline-block', animation: 'roleFade .5s ease' }}>
                {HERO_ROLES[roleIdx]}
                <span style={{ marginLeft: 3, animation: 'blinkAnim 1s step-end infinite', color: 'var(--accent3)' }}>_</span>
              </span>
            </div>

            <div style={{ fontSize: 'clamp(13px,1.5vw,15px)', lineHeight: 1.9, color: 'var(--muted)', maxWidth: 480, marginBottom: 36, opacity: 0, animation: 'slideUp .9s .8s forwards' }}>
              AI/ML Engineering graduate from <span style={{ color: 'var(--text)' }}>University of Mumbai</span>.<br />
              Building <span style={{ color: 'var(--text)' }}>intelligent systems</span> and data-driven applications<br />
              from <span style={{ color: 'var(--text)' }}>Hyderabad, India</span>.
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', opacity: 0, animation: 'slideUp .9s .95s forwards' }}>
              <Link to="/projects" className="btn-primary" onMouseMove={magMove} onMouseLeave={magLeave}>↓ View Projects</Link>
              <Link to="/contact" className="btn-ghost" onMouseMove={magMove} onMouseLeave={magLeave}>Get In Touch →</Link>
            </div>
          </div>

          {/* RIGHT: terminal */}
          <div style={{ opacity: 0, animation: 'slideUp 1s .7s forwards' }}>
            <div style={{
              background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: 4, overflow: 'hidden',
            }}>
              {/* terminal header */}
              <div style={{ background: 'var(--surface)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--border)' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ marginLeft: 8, fontSize: 10, color: 'var(--muted)', letterSpacing: 1 }}>dikesh@ai-lab:~</span>
              </div>
              {/* lines */}
              <div style={{ padding: '20px 20px', fontFamily: "'DM Mono',monospace", fontSize: 12, lineHeight: 1.9, minHeight: 220 }}>
                {TERMINAL_LINES.slice(0, termLine).map((l, i) => (
                  <div key={i}>
                    <span style={{ color: 'var(--muted)', marginRight: 8 }}>{l.prefix}</span>
                    <span style={{ color: l.color }}>{l.text}</span>
                  </div>
                ))}
                {termLine < TERMINAL_LINES.length && (
                  <span style={{ color: 'var(--accent)', animation: 'blinkAnim 1s step-end infinite' }}>▌</span>
                )}
              </div>
            </div>
            {/* quick stat chips */}
            <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
              {[{ n: '8+', l: 'Projects' }, { n: '85%', l: 'NLP Accuracy' }, { n: '7.04', l: 'CGPA' }, { n: '2', l: 'Internships' }].map((s, i) => (
                <div key={i} style={{ border: '1px solid var(--border)', padding: '10px 16px', background: 'var(--surface)' }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 40, right: 52, writingMode: 'vertical-rl', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 12, opacity: 0, animation: 'fadeIn 1s 1.6s forwards' }}>
          Scroll Down
        </div>
      </section>

      {/* ── MARQUEES ── */}
      <Marquee items={['DIKESH GAUTAM', 'AI ENGINEER', 'ML DEVELOPER', 'REACT DEV', 'OPEN TO WORK', 'HYDERABAD']} dur={22} />
      <Marquee items={['Python', '·', 'TensorFlow', '·', 'React', '·', 'Node.js', '·', 'SQL', '·', 'Power BI', '·', 'Unity', '·', 'MongoDB', '·', 'PyTorch', '·']} dur={14} rev sm />

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: '100px 52px', background: 'var(--surface)' }}>
        <div className="sec-label">Featured Work</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <h2 className="sec-title reveal" style={{ marginBottom: 0 }}>Selected<br />Projects.</h2>
          <Link to="/projects" className="btn-ghost" style={{ flexShrink: 0 }}>All 8 Projects →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 2 }}>
          {PROJECTS_FEATURED.map((p, i) => <ProjectCard key={p.id} p={p} delay={i * 0.1} big={i === 0} />)}
        </div>
      </section>

      <Marquee items={['FULL STACK', 'DATA SCIENCE', 'REACT DEV', 'ML MODELS', 'WEB APPS', 'AI SYSTEMS', 'PYTHON DEV']} dur={26} rev />

      {/* ── QUICK SKILLS ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="sec-label">Tech Stack</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <h2 className="sec-title reveal" style={{ marginBottom: 0 }}>Core<br />Skills.</h2>
          <Link to="/skills" className="btn-ghost" style={{ flexShrink: 0 }}>Full Stack →</Link>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.slice(0, 3).map((g, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="skill-card-icon">{g.icon}</div>
              <div className="skill-card-title">{g.title}</div>
              <div className="tags">{g.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="stats-grid">
          {[
            { num: '8+', lbl: 'Projects Built' },
            { num: '85%', lbl: 'NLP Model Accuracy' },
            { num: '6+', lbl: 'Certifications' },
            { num: '7.04', lbl: 'CGPA / 10' },
          ].map((s, i) => (
            <div key={i} className="stat-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <StatNumber value={s.num} />
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CERTS PREVIEW ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="sec-label">Credentials</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <h2 className="sec-title reveal" style={{ marginBottom: 0 }}>Recent<br />Certifications.</h2>
          <Link to="/certifications" className="btn-ghost" style={{ flexShrink: 0 }}>All Certs →</Link>
        </div>
        <div className="certs-grid">
          {CERTIFICATIONS.slice(0, 3).map((c, i) => (
            <div key={i} className="cert-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-meta">
                  <span className="cert-year">{c.year}</span>
                  <span className="cert-domain">{c.domain}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '100px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        background: 'var(--surface)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          fontFamily: "'Syne',sans-serif", fontSize: 'clamp(60px,15vw,220px)', fontWeight: 800,
          letterSpacing: -10, color: 'rgba(127,255,178,.018)', whiteSpace: 'nowrap', pointerEvents: 'none',
          animation: 'bgFloat 6s ease-in-out infinite',
        }}>CONNECT</div>
        <div className="sec-label reveal" style={{ justifyContent: 'center' }}>Available Now</div>
        <h2 className="sec-title reveal" style={{ textAlign: 'center' }}>
          Let's Build<br />
          <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Something Great.
          </span>
        </h2>
        <p className="reveal" style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, maxWidth: 460, margin: '0 auto 40px' }}>
          Actively seeking entry-level roles in Data Analytics,<br />
          Python Development, or Software Engineering.
        </p>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Link to="/contact" className="btn-primary">Send a Message →</Link>
          <a href="/DIKESH_CV.pdf" target="_blank" rel="noreferrer" className="btn-ghost">Download CV</a>
        </div>
      </section>

      <Marquee items={['AVAILABLE FOR WORK', 'DIKESH GAUTAM', 'AI ENGINEER', 'REACT DEV', 'LET\'S CONNECT', 'HYDERABAD']} dur={20} />
    </main>
  );
}
