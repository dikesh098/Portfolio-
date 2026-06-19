import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useReveal } from '../components/useReveal';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const ref = useReveal();
  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Career</div>
          <h1 className="page-hero-title">
            <span className="fill">Work</span>
            <span className="outline">History.</span>
          </h1>
          <p className="page-hero-sub">
            Two internships shipping real features for real users — from React UIs to accessibility overhauls.
          </p>
        </div>
      </section>

      <Marquee items={['EXPERIENCE', 'REACT', 'INTERNSHIP', 'FULL STACK', 'WEB DEV', 'REST APIS', 'MOBILE']} dur={20} />

      {/* ── TIMELINE ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="sec-label reveal">01 — Timeline</div>
        <h2 className="sec-title reveal">Professional<br />Experience.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div className="timeline">
            {EXPERIENCES.map((ex, i) => (
              <div key={i} className="tl-item" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="tl-dot" />
                <div className="tl-date">{ex.date}</div>
                <div className="tl-company">{ex.company}</div>
                <div className="tl-role">{ex.role} · {ex.location}</div>
                <ul className="tl-points">
                  {ex.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="tl-tags">
                  {ex.tags.map((t, j) => <span key={j} className="tl-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Side panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="reveal" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: 32 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 48, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>2</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>Internships Completed</div>
            </div>
            <div className="reveal" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: 32, transitionDelay: '.1s' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 48, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>8+</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>REST APIs Integrated</div>
            </div>
            <div className="reveal" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: 32, transitionDelay: '.2s' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 48, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>30%</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>Perf. Improvement Achieved</div>
            </div>

            <div className="reveal" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: 28, transitionDelay: '.3s' }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Key Skills Used</div>
              <div className="tags">
                {['React', 'React Native', 'JavaScript', 'REST APIs', 'Git', 'HTML5', 'CSS3', 'Accessibility', 'UI/UX', 'Agile'].map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I BRING ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="sec-label reveal">02 — Value Add</div>
        <h2 className="sec-title reveal">What I Bring<br />to a Team.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {[
            { icon: '◻', title: 'Shipping Mentality', desc: 'I\'ve shipped features under deadline pressure in real internship environments — not just academic projects.' },
            { icon: '◈', title: 'Cross-Domain Bridge', desc: 'I can converse with ML researchers AND frontend engineers fluently — I\'ve built in both worlds.' },
            { icon: '◎', title: 'Self-Directed', desc: 'Completed 8+ independent projects and 6 certifications outside of coursework and internship hours.' },
          ].map((v, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="skill-card-icon" style={{ fontSize: 28 }}>{v.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{v.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.9, color: 'var(--muted)' }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 28, borderTop: '1px solid var(--border)' }}>
        <div>
          <div className="sec-label">Continue</div>
          <h2 className="sec-title reveal" style={{ marginBottom: 0, fontSize: 'clamp(28px,4vw,52px)' }}>See the projects I built.</h2>
        </div>
        <div style={{ display: 'flex', gap: 14 }} className="reveal">
          <Link to="/projects" className="btn-primary">View Projects →</Link>
          <Link to="/education" className="btn-ghost">Education →</Link>
        </div>
      </section>

      <Marquee items={['EXPERIENCE', 'WEB DEV', 'REACT', 'REST APIS', 'INTERNSHIP', 'MOBILE', 'ACCESSIBILITY']} dur={22} rev />
    </main>
  );
}
