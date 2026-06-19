import { useState, useRef, useEffect } from 'react';
import Marquee from '../components/Marquee';
import { useReveal } from '../components/useReveal';
import { PROJECTS } from '../data';
import type { Project } from '../types';

type Filter = 'all' | 'ml' | 'web' | 'mobile' | 'data';
const FILTERS: { label: string; key: Filter }[] = [
  { label: 'All', key: 'all' },
  { label: 'AI / ML', key: 'ml' },
  { label: 'Web', key: 'web' },
  { label: 'Mobile', key: 'mobile' },
  { label: 'Data', key: 'data' },
];

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--px', (px * 100).toFixed(1) + '%');
    el.style.setProperty('--py', (py * 100).toFixed(1) + '%');
    el.style.transition = 'transform .12s ease, border-color .4s, box-shadow .4s';
    el.style.transform = `perspective(900px) translateY(-8px) rotateX(${(py - 0.5) * -7}deg) rotateY(${(px - 0.5) * 7}deg)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transition = 'transform .5s cubic-bezier(.23,1,.32,1), border-color .4s, box-shadow .4s';
    el.style.transform = '';
  };

  return (
    <div ref={ref} className="pc vis" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="pc-num">{p.num}</div>
      <div className="pc-cat">{p.cat}</div>
      <div className="pc-name">{p.name}</div>
      {p.metric && (
        <div className="pc-metric">
          <div className="pc-metric-num">{p.metric}</div>
          <div className="pc-metric-lbl">{p.metricLabel}</div>
        </div>
      )}
      <div className="pc-desc">{p.desc}</div>
      <div className="pc-detail">{p.detail}</div>
      <div className="pc-techs">{p.techs.map((t, i) => <span key={i} className="pc-tech">{t}</span>)}</div>
      <div className="pc-links">
        {p.link   && <a href={p.link}   target="_blank" rel="noreferrer" className="pc-link">Live Demo →</a>}
        {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="pc-link ghost">GitHub ↗</a>}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const ref = useReveal();

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Portfolio</div>
          <h1 className="page-hero-title">
            <span className="fill">All</span>
            <span className="outline">Projects.</span>
          </h1>
          <p className="page-hero-sub">
            8 projects spanning reinforcement learning, NLP, full-stack web,
            mobile apps, and business intelligence — each with real metrics.
          </p>
        </div>
      </section>

      <Marquee items={['TENSORFLOW', 'REACT', 'POWER BI', 'REACT NATIVE', 'NLP', 'DQN', 'UNITY', 'FIREBASE']} dur={20} sm />

      {/* ── FILTER ── */}
      <section style={{ padding: '60px 52px 0' }}>
        <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: '10px 24px', border: '1px solid',
                borderColor: filter === f.key ? 'var(--accent)' : 'var(--border)',
                background: filter === f.key ? 'rgba(127,255,178,.08)' : 'transparent',
                color: filter === f.key ? 'var(--accent)' : 'var(--muted)',
                fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: 2,
                textTransform: 'uppercase', cursor: 'none',
                transition: 'all .3s',
              }}
            >
              {f.label}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', display: 'flex', alignItems: 'center' }}>
            {visible.length} project{visible.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: '40px 52px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
          {visible.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
        {visible.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)', fontSize: 14 }}>
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* ── GITHUB CTA ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="sec-label reveal" style={{ justifyContent: 'center' }}>Open Source</div>
        <h2 className="sec-title reveal" style={{ textAlign: 'center', fontSize: 'clamp(32px,5vw,64px)' }}>
          More on<br />GitHub.
        </h2>
        <p className="reveal" style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 2, maxWidth: 440, margin: '0 auto 36px' }}>
          Additional experiments, coursework repos, and works-in-progress live on my GitHub profile.
        </p>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
          <a href="https://github.com/dikesh098" target="_blank" rel="noreferrer" className="btn-primary">Visit GitHub ↗</a>
          <a href="/DIKESH_CV.pdf" target="_blank" rel="noreferrer" className="btn-ghost">Download CV</a>
        </div>
      </section>

      <Marquee items={['8 PROJECTS', 'DQN AGENT', '85% ACCURACY', 'LIVE WEBAPP', 'CROSS PLATFORM', 'DATA PIPELINES']} dur={22} rev />
    </main>
  );
}
