import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav style={{ background: scrolled ? 'rgba(5,5,8,.96)' : undefined }}>
      <Link to="/" className="nav-logo">DG</Link>

      <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {NAV_LINKS.map(l => (
          <Link
            key={l.path}
            to={l.path}
            className={location.pathname === l.path ? 'active' : ''}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="/DIKESH_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          Resume ↗
        </a>
      </div>

      <button
        className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
