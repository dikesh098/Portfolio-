import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useReveal, useBarFill } from '../components/useReveal';
import { SKILL_GROUPS, SKILL_BARS } from '../data';

const CURRENTLY_LEARNING = ['LangChain', 'FastAPI', 'Docker', 'Next.js', 'Kubernetes', 'Rust'];

export default function Skills() {
  const ref = useReveal();
  useBarFill();

  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">What I Know</div>
          <h1 className="page-hero-title">
            <span className="fill">Tech</span>
            <span className="outline">Stack.</span>
          </h1>
          <p className="page-hero-sub">
            A full-stack skill set anchored in AI/ML — from training neural networks
            to shipping production React apps and Power BI dashboards.
          </p>
        </div>
      </section>

      <Marquee items={['PYTHON', 'TENSORFLOW', 'REACT', 'SQL', 'POWER BI', 'PYTORCH', 'TYPESCRIPT', 'UNITY', 'MONGODB']} dur={20} sm />

      {/* ── PROFICIENCY BARS ── */}
      <section style={{ padding: '100px 52px', background: 'var(--surface)' }}>
        <div className="sec-label reveal">01 — Proficiency</div>
        <h2 className="sec-title reveal">Core<br />Capabilities.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 80px' }}>
          {SKILL_BARS.map((b, i) => (
            <div key={i} className="bar-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="bar-head">
                <span style={{ color: 'var(--text)', fontWeight: 400 }}>{b.name}</span>
                <span style={{ color: 'var(--accent)' }}>{b.pct}%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-pct={b.pct} />
              </div>
              <div className="bar-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILL GROUPS ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="sec-label reveal">02 — Full Stack</div>
        <h2 className="sec-title reveal">Everything<br />in the Arsenal.</h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="skill-card-icon">{g.icon}</div>
              <div className="skill-card-title">{g.title}</div>
              <div className="tags">
                {g.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CURRENTLY LEARNING ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="sec-label reveal">03 — In Progress</div>
        <h2 className="sec-title reveal">Currently<br />Learning.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {CURRENTLY_LEARNING.map((t, i) => (
            <div key={i} className="reveal" style={{
              border: '1px dashed rgba(127,255,178,.25)', padding: '16px 28px',
              fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17,
              color: 'var(--muted)', position: 'relative', transitionDelay: `${i * 0.06}s`,
            }}>
              <span style={{ position: 'absolute', top: 6, right: 8, fontSize: 8, color: 'var(--accent)', letterSpacing: 1 }}>IN PROGRESS</span>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── ML FOCUS ── */}
      <section style={{ padding: '80px 52px' }}>
        <div className="sec-label reveal">04 — AI / ML Deep Dive</div>
        <h2 className="sec-title reveal">Machine Learning<br />Expertise.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {[
            { title: 'Supervised Learning', items: ['Linear & Logistic Regression', 'SVM (85% NLP accuracy)', 'Decision Trees & Random Forests', 'Cross-validation & tuning'], icon: '◈' },
            { title: 'Deep Learning', items: ['Neural network architectures', 'CNNs for image classification', 'LSTMs & sequence models', 'TensorFlow / PyTorch pipelines'], icon: '⚙' },
            { title: 'Reinforcement Learning', items: ['Deep Q-Networks (DQN)', 'OpenAI Gym environments', '50k-episode Tetris agent', 'Reward engineering'], icon: '◎' },
          ].map((d, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="skill-card-icon">{d.icon}</div>
              <div className="skill-card-title">{d.title}</div>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {d.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.9, paddingLeft: 16, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: 10 }}>→</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 28, borderTop: '1px solid var(--border)' }}>
        <div>
          <div className="sec-label">Next Step</div>
          <h2 className="sec-title reveal" style={{ marginBottom: 0, fontSize: 'clamp(30px,4vw,52px)' }}>See it in practice.</h2>
        </div>
        <div style={{ display: 'flex', gap: 14 }} className="reveal">
          <Link to="/projects" className="btn-primary">View Projects →</Link>
          <Link to="/experience" className="btn-ghost">Experience →</Link>
        </div>
      </section>

      <Marquee items={['PYTHON', 'REACT', 'TENSORFLOW', 'SQL', 'POWER BI', 'PYTORCH', 'NODE.JS', 'UNITY']} dur={18} rev />
    </main>
  );
}
