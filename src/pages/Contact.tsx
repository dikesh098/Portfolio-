import { useState } from 'react';
import Marquee from '../components/Marquee';
import { useReveal } from '../components/useReveal';
import { supabase } from '../lib/supabase';
import type { ContactMessage } from '../types';

const SOCIAL_LINKS = [
  { icon: '✉', label: 'Email', value: 'gautamdikesh098@gmail.com', href: 'mailto:gautamdikesh098@gmail.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/dikesh098', href: 'https://github.com/dikesh098' },
  { icon: '🔗', label: 'Portfolio', value: 'dikeshgautam.vercel.app', href: 'https://dikeshgautam.vercel.app' },
  { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana, India', href: '#' },
];

const OPEN_TO = ['Full-time roles', 'Internships', 'Freelance projects', 'Open-source collaboration'];

const EMPTY: ContactMessage = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState<ContactMessage>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrMsg('Please fill in Name, Email, and Message.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) { setStatus('error'); setErrMsg('Please enter a valid email address.'); return; }

    setStatus('loading');
    try {
      const { error } = await supabase.from('messages').insert([{
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || 'General Inquiry',
        message: form.message.trim(),
      }]);
      if (error) throw error;
      setStatus('success');
      setForm(EMPTY);
    } catch (err: unknown) {
      setStatus('error');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <main ref={ref as React.RefObject<HTMLElement>} className="page-wrapper">

      <section className="page-hero">
        <div className="page-hero-grid" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Get In Touch</div>
          <h1 className="page-hero-title">
            <span className="fill">Let's</span>
            <span className="outline">Connect.</span>
          </h1>
          <p className="page-hero-sub">
            I'm actively seeking entry-level opportunities. Whether you have a role,
            project, or just want to talk tech — I'd love to hear from you.
          </p>
        </div>
      </section>

      <Marquee items={['AVAILABLE NOW', 'HYDERABAD', 'REMOTE OK', 'OPEN TO WORK', 'AI ENGINEER', 'REACT DEV']} dur={20} />

      {/* ── MAIN CONTACT ── */}
      <section style={{ padding: '100px 52px' }}>
        <div className="contact-grid">

          {/* LEFT: info */}
          <div>
            <div className="sec-label reveal">01 — Reach Out</div>
            <h2 className="sec-title reveal" style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
              Available for<br />
              <span style={{ fontFamily: "'Fraunces',serif", fontStyle: 'italic', fontWeight: 200, color: 'var(--accent)' }}>the right opportunity.</span>
            </h2>

            <div className="reveal" style={{ marginBottom: 36 }}>
              {SOCIAL_LINKS.map((l, i) => (
                <a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" className="c-link">
                  <span className="c-link-icon">{l.icon}</span>
                  <div>
                    <div style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>{l.label}</div>
                    <div style={{ fontSize: 13 }}>{l.value}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: 16 }}>↗</span>
                </a>
              ))}
            </div>

            <div className="reveal" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Open to</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {OPEN_TO.map((o, i) => (
                  <div key={i} style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: 'var(--accent)', fontSize: 11 }}>✓</span> {o}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ marginTop: 20, padding: '18px 24px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="pulse-dot" />
              <div>
                <div style={{ fontSize: 12, color: 'var(--text)' }}>Currently Available</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: 1, marginTop: 2 }}>Hyderabad · Remote · Hybrid</div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="reveal" style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>
              // Send a message
            </div>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Message Sent!</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 28 }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </div>
                <button className="btn-ghost" onClick={() => setStatus('idle')} style={{ cursor: 'none' }}>
                  Send Another →
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Dikesh Gautam" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="hello@company.com" className="form-input" type="email" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} className="form-input" style={{ appearance: 'none' }}>
                    <option value="">Select a subject…</option>
                    <option>Job Opportunity</option>
                    <option>Internship Offer</option>
                    <option>Freelance Project</option>
                    <option>Open Source Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Hi Dikesh, I'd like to discuss..."
                    className="form-textarea" rows={6} />
                </div>

                {status === 'error' && (
                  <div className="form-status error" style={{ marginBottom: 16 }}>⚠ {errMsg}</div>
                )}

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? '// Sending…' : 'Send Message →'}
                </button>

                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 14, textAlign: 'center', letterSpacing: 1 }}>
                  Or email directly: gautamdikesh098@gmail.com
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Marquee items={['AVAILABLE NOW', 'AI ENGINEER', 'HYDERABAD', 'REMOTE OK', 'LET\'S BUILD TOGETHER', 'DIKESH GAUTAM']} dur={22} rev />
    </main>
  );
}
