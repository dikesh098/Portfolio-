import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span style={{ fontFamily: "'Fraunces',serif", fontStyle: 'italic', color: 'var(--text)' }}>
        Dikesh Gautam
      </span>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        {NAV_LINKS.slice(1).map(l => (
          <Link key={l.path} to={l.path} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', transition: 'color .3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >{l.label}</Link>
        ))}
      </div>
      <span style={{ color: 'var(--accent)' }}>© {year} · Hyderabad, India</span>
    </footer>
  );
}
