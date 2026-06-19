import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useReveal } from '../components/useReveal';
import { EDUCATIONS } from '../data';

const COURSEWORK = [
  { code: 'ML-301', name: 'Machine Learning', grade: 'A' },
  { code: 'DL-401', name: 'Deep Learning', grade: 'A' },
  { code: 'NLP-302', name: 'Natural Language Processing', grade: 'B+' },
  { code: 'CV-303', name: 'Computer Vision', grade: 'B+' },
  { code: 'DS-201', name: 'Data Structures & Algorithms', grade: 'A' },
  { code: 'DB-202', name: 'Database Management Systems', grade: 'A' },
  { code: 'SE-303', name: 'Software Engineering', grade: 'A' },
  { code: 'AI-401', name: 'Artificial Intelligence', grade: 'A' },
];

export default function Education() {
  const ref = useReveal();
  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Academic Background</div>
          <h1 className="page-hero-title">
            <span className="fill">Education</span>
            <span className="outline">Path.</span>
          </h1>
          <p className="page-hero-sub">
            Four years specialising in Artificial Intelligence & Machine Learning
            at the University of Mumbai — backed by hands-on projects and industry certifications.
          </p>
        </div>
      </section>

      <Marquee items={['UNIVERSITY OF MUMBAI', 'AI & ML', 'CGPA 7.04', 'B.E. GRADUATE', '2021–2025', 'FINAL YEAR PROJECT']} dur={22} />

      {/* ── DEGREE ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="sec-label reveal">01 — Degree</div>
        <h2 className="sec-title reveal">Academic<br />Journey.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div className="timeline">
            {EDUCATIONS.map((ed, i) => (
              <div key={i} className="tl-item" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="tl-dot" />
                <div className="tl-date">{ed.date}</div>
                <div className="tl-company">{ed.school}</div>
                <div className="tl-role">{ed.degree}</div>
                <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: 1, marginBottom: 16, fontWeight: 600 }}>{ed.grade}</div>
                <ul className="tl-points">
                  {ed.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="tl-tags">
                  {ed.tags.map((t, j) => <span key={j} className="tl-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Stats + badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { n: '7.04', l: 'CGPA / 10', accent: 'var(--accent)' },
              { n: '4', l: 'Years of Study', accent: 'var(--accent3)' },
              { n: '8+', l: 'Projects Completed', accent: 'var(--accent4)' },
              { n: '6+', l: 'Certifications Earned', accent: 'var(--accent2)' },
            ].map((s, i) => (
              <div key={i} className="stat-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="stat-num" style={{ color: s.accent }}>{s.n}</div>
                <div className="stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL YEAR PROJECT ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="sec-label reveal">02 — Final Year Project</div>
        <h2 className="sec-title reveal">Adaptive<br />Game AI.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div className="reveal">
            <p style={{ fontSize: 15, lineHeight: 2, color: 'var(--muted)', marginBottom: 24 }}>
              Designed and implemented an adaptive NPC (Non-Player Character) AI system for dynamic Unity game environments. The system uses <span style={{ color: 'var(--text)' }}>priority matrices</span> for real-time decision-making and <span style={{ color: 'var(--text)' }}>vector-based pathfinding</span> for navigation.
            </p>
            <p style={{ fontSize: 15, lineHeight: 2, color: 'var(--muted)', marginBottom: 28 }}>
              NPCs adapt to 6 player state variables and 4 terrain factors simultaneously, achieving natural-feeling gameplay without scripted paths. The evaluation panel awarded the project a <span style={{ color: 'var(--accent)' }}>distinction</span>.
            </p>
            <div className="tl-tags" style={{ marginTop: 0 }}>
              {['Unity', 'C#', 'Behaviour Trees', 'Pathfinding', 'AI/ML', 'Priority Matrices'].map((t, i) => (
                <span key={i} className="tl-tag">{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { label: 'Decision Variables', value: '6 player states + 4 terrain factors' },
              { label: 'Architecture', value: 'Behaviour tree + priority matrix' },
              { label: 'Navigation', value: 'Vector-based dynamic pathfinding' },
              { label: 'Result', value: 'Distinction — evaluation panel' },
            ].map((row, i) => (
              <div key={i} className="reveal" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transitionDelay: `${i * 0.07}s` }}>
                <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)' }}>{row.label}</span>
                <span style={{ fontSize: 13, color: 'var(--accent)' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSEWORK ── */}
      <section style={{ padding: '80px 52px' }}>
        <div className="sec-label reveal">03 — Coursework</div>
        <h2 className="sec-title reveal">Key<br />Subjects.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
          {COURSEWORK.map((c, i) => (
            <div key={i} className="reveal" style={{
              background: 'var(--surface)', border: '1px solid var(--border)', padding: '22px 20px',
              transitionDelay: `${i * 0.05}s`,
              transition: 'border-color .3s, transform .3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(127,255,178,.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = ''; (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              <div style={{ fontSize: 9, letterSpacing: 2, color: 'var(--accent3)', marginBottom: 8 }}>{c.code}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, lineHeight: 1.4 }}>{c.name}</div>
              <div style={{ fontSize: 20, fontFamily: "'Syne',sans-serif", fontWeight: 800, color: 'var(--accent)' }}>{c.grade}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 28, borderTop: '1px solid var(--border)' }}>
        <div>
          <div className="sec-label">Continue</div>
          <h2 className="sec-title reveal" style={{ marginBottom: 0, fontSize: 'clamp(28px,4vw,52px)' }}>Projects built during the degree.</h2>
        </div>
        <div style={{ display: 'flex', gap: 14 }} className="reveal">
          <Link to="/projects" className="btn-primary">View Projects →</Link>
          <Link to="/certifications" className="btn-ghost">Certifications →</Link>
        </div>
      </section>

      <Marquee items={['UNIVERSITY OF MUMBAI', 'AI & ML', 'CGPA 7.04', 'B.E. HONOURS', '2025 GRADUATE']} dur={24} rev />
    </main>
  );
}
