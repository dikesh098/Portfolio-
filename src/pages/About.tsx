import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useReveal } from '../components/useReveal';

const VALUES = [
  { icon: '◈', title: 'Data-Driven', desc: 'Every decision is backed by evidence — whether training a model or designing a UI flow.' },
  { icon: '◻', title: 'Systems Thinker', desc: 'I map how components interact before writing a single line of code.' },
  { icon: '◎', title: 'Iterative Builder', desc: 'Ship fast, measure, refine. Small wins compound into working systems.' },
  { icon: '⚙', title: 'Always Learning', desc: 'Generative AI, RL, and web tooling move fast — so do I.' },
];

const TOOLS = ['Python', 'TensorFlow', 'React', 'TypeScript', 'SQL', 'Power BI', 'Unity', 'Git', 'Supabase', 'Figma'];

const INTERESTS = [
  { e: '🎮', t: 'Game AI', d: 'Obsessed with how agents learn complex strategies in dynamic environments.' },
  { e: '📊', t: 'Data Viz', d: 'Turning raw numbers into stories anyone can read at a glance.' },
  { e: '🧩', t: 'System Design', d: 'Clean architecture makes code feel like it was always supposed to exist.' },
  { e: '📚', t: 'Research', d: 'Reading NLP and RL papers is genuinely one of my hobbies.' },
];

export default function About() {
  const ref = useReveal();

  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Who I Am</div>
          <h1 className="page-hero-title">
            <span className="fill">About</span>
            <span className="outline">Me.</span>
          </h1>
          <p className="page-hero-sub">
            AI/ML Engineering graduate who builds intelligent systems and
            data-driven products — from neural networks to production-grade React apps.
          </p>
        </div>
      </section>

      <Marquee items={['ABOUT', 'DIKESH GAUTAM', 'AI ENGINEER', 'HYDERABAD', 'UNIVERSITY OF MUMBAI', 'OPEN TO WORK']} dur={22} />

      {/* ── MAIN BIO ── */}
      <section style={{ padding: '100px 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Profile box */}
          <div className="reveal-scale">
            <div className="profile-box" style={{ height: 440 }}>
              <div className="cb tl" /><div className="cb tr" /><div className="cb bl" /><div className="cb br" />
              <img src="/profile1.jpg" alt="Dikesh Gautam" className="profile-img" onError={e => {
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Ccircle cx='80' cy='80' r='80' fill='%230c0c14'/%3E%3Ctext x='50%25' y='50%25' font-size='64' text-anchor='middle' dominant-baseline='middle' fill='%237fffb2'%3EDG%3C/text%3E%3C/svg%3E";
              }} />
              <div style={{ fontSize: 13, color: 'var(--accent)', fontFamily: "'Fraunces',serif", fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                Dikesh Gautam
              </div>
              <div className="profile-footer">
                <span><span className="status-blink">◉</span> Available</span>
                <span>Hyderabad, IN</span>
                <span>2025 Graduate</span>
              </div>
            </div>

            {/* Quick contact chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
              {[
                { icon: '✉', label: 'gautamdikesh098@gmail.com' },
                { icon: '🔗', label: 'github.com/dikesh098' },
                { icon: '💼', label: 'dikeshgautam.vercel.app' },
              ].map((c, i) => (
                <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '12px 18px', display: 'flex', gap: 12, alignItems: 'center', fontSize: 12, color: 'var(--muted)' }}>
                  <span>{c.icon}</span><span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="sec-label reveal">01 — Bio</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(30px,4vw,52px)', fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, marginBottom: 32 }} className="reveal">
              Engineering intelligence,<br />
              <span style={{ color: 'var(--accent)', fontFamily: "'Fraunces',serif", fontStyle: 'italic', fontWeight: 200 }}>one model at a time.</span>
            </h2>

            {[
              "I'm Dikesh Gautam — a fresher AI/ML engineer and full-stack developer based in Hyderabad. I graduated with a B.E. in Artificial Intelligence & Machine Learning from the University of Mumbai in 2025.",
              "During my degree I specialised in deep learning, reinforcement learning, and NLP, while simultaneously developing production-ready web applications with React and Node.js. My final-year project — an adaptive NPC AI system using priority matrices and vector-based pathfinding — received a distinction from my evaluation panel.",
              "I completed internships at NY All in One Solutions (web development) and Suvidha Foundation, where I shipped real features used by real people. I hold six industry certifications spanning AWS Generative AI, IBM Data Science, Cisco Cybersecurity, and Deloitte's Cyber Job Simulation.",
              "I'm actively seeking entry-level roles in Data Analytics, Python/ML Engineering, or Full-Stack Development where I can contribute meaningfully from day one.",
            ].map((p, i) => (
              <p key={i} className="reveal" style={{ fontSize: 14, lineHeight: 2, color: 'var(--muted)', marginBottom: 20, transitionDelay: `${i * 0.1}s` }}>
                {p}
              </p>
            ))}

            <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }} className="reveal">
              <Link to="/projects" className="btn-primary">View My Work →</Link>
              <a href="/DIKESH_CV.pdf" target="_blank" rel="noreferrer" className="btn-ghost">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="sec-label reveal">02 — Approach</div>
        <h2 className="sec-title reveal">How I<br />Think.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
          {VALUES.map((v, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.08}s`, padding: '28px 24px' }}>
              <div className="skill-card-icon" style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{v.title}</div>
              <div style={{ fontSize: 12, lineHeight: 1.9, color: 'var(--muted)' }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ padding: '80px 52px' }}>
        <div className="sec-label reveal">03 — Daily Tools</div>
        <h2 className="sec-title reveal">What I<br />Work With.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {TOOLS.map((t, i) => (
            <div key={i} className="reveal" style={{
              border: '1px solid var(--border)', padding: '14px 24px',
              fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15,
              position: 'relative', overflow: 'hidden', cursor: 'none',
              transition: 'border-color .3s, color .3s, transform .3s',
              transitionDelay: `${i * 0.04}s`,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; e.currentTarget.style.transform = ''; }}
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERESTS ── */}
      <section style={{ padding: '80px 52px', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="sec-label reveal">04 — Interests</div>
        <h2 className="sec-title reveal">Beyond<br />the Code.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
          {INTERESTS.map((it, i) => (
            <div key={i} className="skill-card reveal" style={{ transitionDelay: `${i * 0.08}s`, padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{it.e}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{it.t}</div>
              <div style={{ fontSize: 12, lineHeight: 1.85, color: 'var(--muted)' }}>{it.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 52px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 28, borderTop: '1px solid var(--border)' }}>
        <div>
          <div className="sec-label">Let's Talk</div>
          <h2 className="sec-title reveal" style={{ marginBottom: 0, fontSize: 'clamp(30px,4vw,56px)' }}>Ready to collaborate?</h2>
        </div>
        <div style={{ display: 'flex', gap: 14 }} className="reveal">
          <Link to="/contact" className="btn-primary">Send a Message →</Link>
          <Link to="/skills" className="btn-ghost">See My Skills →</Link>
        </div>
      </section>

      <Marquee items={['AI ENGINEER', 'DIKESH GAUTAM', 'HYDERABAD', 'OPEN TO WORK', '2025 GRADUATE', 'UNIVERSITY OF MUMBAI']} dur={24} rev />
    </main>
  );
}
