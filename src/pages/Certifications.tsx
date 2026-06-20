import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useReveal } from '../components/useReveal';
import { CERTIFICATIONS } from '../data';

const DOMAINS = ['All', 'AI/ML', 'Data Science', 'Security', 'Industry'];

export default function Certifications() {
  const ref = useReveal();

  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Credentials</div>
          <h1 className="page-hero-title">
            <span className="fill">Certifi-</span>
            <span className="outline">cations.</span>
          </h1>
          <p className="page-hero-sub">
            Six industry certifications from AWS, IBM, Cisco, Deloitte, and Simplilearn —
            spanning Generative AI, Data Science, and Cybersecurity.
          </p>
        </div>
      </section>

      <Marquee items={['AWS', 'IBM', 'CISCO', 'DELOITTE', 'SIMPLILEARN', 'GENERATIVE AI', 'DATA SCIENCE', 'CYBERSECURITY']} dur={20} />

      {/* ── GRID ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="sec-label reveal">01 — All Certifications</div>
        <h2 className="sec-title reveal">Industry<br />Credentials.</h2>
        <div className="certs-grid">
          {CERTIFICATIONS.map((c, i) => (
            <div key={i} className="cert-card" style={{ transitionDelay: `${i * 0.08}s` }}>
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

      {/* ── BY DOMAIN ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="sec-label reveal">02 — By Domain</div>
        <h2 className="sec-title reveal">Organised<br />by Focus.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {[
            {
              domain: 'AI / ML', icon: '🤖', color: 'var(--accent)',
              certs: CERTIFICATIONS.filter(c => c.domain === 'AI/ML'),
              desc: 'Generative AI and foundation model concepts from AWS.',
            },
            {
              domain: 'Data Science', icon: '📊', color: 'var(--accent3)',
              certs: CERTIFICATIONS.filter(c => c.domain === 'Data Science'),
              desc: 'Python pipelines, EDA, and data storytelling from IBM.',
            },
            {
              domain: 'Security', icon: '🔒', color: 'var(--accent2)',
              certs: CERTIFICATIONS.filter(c => c.domain === 'Security' || c.domain === 'Industry'),
              desc: 'Cybersecurity fundamentals, threat detection, and industry simulation.',
            },
          ].map((g, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{g.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 8, color: g.color }}>{g.domain}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.8 }}>{g.desc}</div>
              {g.certs.map((c, j) => (
                <div key={j} style={{ padding: '10px 0', borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--text)' }}>{c.name} — <span style={{ color: 'var(--muted)' }}>{c.issuer}</span></div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CERTS ── */}
      <section style={{ padding: '80px 52px' }}>
        <div className="sec-label reveal">03 — Motivation</div>
        <h2 className="sec-title reveal">Learning<br />Beyond the Classroom.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            {[
              "Certifications are how I signal that I take learning seriously enough to pursue it outside of coursework and internship hours.",
              "Each of these covered skills directly applicable to my projects — the AWS GenAI cert informed how I think about foundation models, while the IBM Python cert underpins my data pipeline work.",
              "I treat certifications as a complementary layer on top of hands-on project work — theory paired with implementation.",
            ].map((p, i) => (
              <p key={i} className="reveal" style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted)', marginBottom: 20, transitionDelay: `${i * 0.1}s` }}>
                {p}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { n: '6+', l: 'Certifications Completed' },
              { n: '4', l: 'Issuing Organisations' },
              { n: '3', l: 'Domains Covered' },
            ].map((s, i) => (
              <div key={i} className="stat-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="stat-num">{s.n}</div>
                <div className="stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 28, borderTop: '1px solid var(--border)' }}>
        <div>
          <div className="sec-label">Get in Touch</div>
          <h2 className="sec-title reveal" style={{ marginBottom: 0, fontSize: 'clamp(28px,4vw,52px)' }}>Want to hire me?</h2>
        </div>
        <div style={{ display: 'flex', gap: 14 }} className="reveal">
          <Link to="/contact" className="btn-primary">Send a Message →</Link>
          <Link to="/projects" className="btn-ghost">View Projects →</Link>
        </div>
      </section>

      <Marquee items={['AWS', 'IBM', 'CISCO', 'DELOITTE', 'GENERATIVE AI', 'DATA SCIENCE', 'CYBERSECURITY']} dur={22} rev />
    </main>
  );
}
