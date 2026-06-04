import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/components/ThemeProvider';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function GroundingGlyph() {
  return (
    <svg viewBox="0 0 32 32" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square">
      <line x1="16" y1="4" x2="16" y2="14" />
      <line x1="6" y1="14" x2="26" y2="14" />
      <line x1="10" y1="19" x2="22" y2="19" />
      <line x1="13" y1="24" x2="19" y2="24" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function VoltageArc({ onDone, theme }: { onDone: () => void; theme: 'dark' | 'light' }) {
  const svgRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const len = el.getTotalLength();
    el.style.strokeDasharray = String(len);
    el.style.strokeDashoffset = String(len);
    void el.getBoundingClientRect();
    el.style.transition = 'stroke-dashoffset 700ms ease-out';
    el.style.strokeDashoffset = '0';
    const t = setTimeout(onDone, 750);
    return () => clearTimeout(t);
  }, [onDone]);

  const w = typeof window !== 'undefined' ? window.innerWidth : 1440;
  const h = typeof window !== 'undefined' ? window.innerHeight : 900;
  const segments = 14;
  const step = w / segments;
  let d = `M 0 ${h / 2}`;
  for (let i = 1; i <= segments; i++) {
    const x = i * step;
    const y = h / 2 + (i % 2 === 0 ? -1 : 1) * (20 + Math.sin(i * 1.7) * 40);
    d += ` L ${x} ${y}`;
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        pointerEvents: 'none',
        mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--accent)',
          opacity: 0,
          animation: 'ee-flash 700ms ease-out forwards',
        }}
      />
      <svg
        width={w}
        height={h}
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={svgRef}
          d={d}
          stroke="var(--accent)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#arc-glow)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Nav() {
  const [pathname] = useLocation();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showArc, setShowArc] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<'dark' | 'light' | null>(null);

  const handleThemeToggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setPendingTheme(next);
    setShowArc(true);
  }, [theme]);

  const handleArcDone = useCallback(() => {
    setShowArc(false);
    if (pendingTheme) {
      setTheme(pendingTheme);
      setPendingTheme(null);
    }
  }, [pendingTheme, setTheme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <style>{`
        @keyframes ee-flash {
          0% { opacity: 0; }
          20% { opacity: 0.18; }
          100% { opacity: 0; }
        }
        .brand-icon {
          display: none;
          height: 36px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
        .brand-logo {
          display: block;
          height: 36px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
        .nav-pill-link {
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--fg-2);
          transition: color 200ms, background 200ms;
        }
        .nav-pill-link:hover {
          color: var(--fg);
          background: var(--bg-3);
        }
        .nav-pill-link.is-active {
          color: var(--bg);
          background: var(--fg);
        }
        .nav-theme-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--fg-2);
          transition: color 200ms, background 200ms;
          overflow: hidden;
          position: relative;
        }
        .nav-theme-btn:hover {
          color: var(--fg);
          background: var(--bg-3);
        }
        .theme-icon {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 300ms var(--ease-out), opacity 300ms;
        }
        .theme-icon.visible {
          transform: translateY(0);
          opacity: 1;
        }
        .theme-icon.hidden-up {
          transform: translateY(-120%);
          opacity: 0;
        }
        .theme-icon.hidden-down {
          transform: translateY(120%);
          opacity: 0;
        }
        .nav-cta {
          padding: 8px 18px;
          border-radius: var(--radius-l);
          background: var(--accent);
          color: var(--bg);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.01em;
          transition: background 200ms, transform 100ms;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: var(--accent-deep);
          transform: translateY(-1px);
        }
        .nav-cta:active {
          transform: translateY(0);
        }
        .hamburger-btn {
          width: 36px;
          height: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: var(--fg);
        }
        .hamburger-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: transform 300ms var(--ease-out), opacity 200ms;
        }
        .hamburger-btn.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger-btn.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transform: translateY(-100%);
          transition: transform 400ms var(--ease-out);
        }
        .mobile-overlay.open {
          transform: translateY(0);
        }
        .mobile-nav-link {
          font-size: clamp(28px, 6vw, 48px);
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--fg-2);
          padding: 8px 24px;
          border-radius: var(--radius-m);
          transition: color 200ms, background 200ms;
        }
        .mobile-nav-link:hover, .mobile-nav-link.is-active {
          color: var(--fg);
          background: var(--bg-3);
        }
        @media (min-width: 800px) {
          .nav-hamburger { display: none !important; }
          .brand-icon { display: none !important; }
          .brand-logo { display: block !important; }
        }
        @media (max-width: 799px) {
          .nav-centre { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-call {
            width: 36px;
            height: 36px;
            padding: 0;
            justify-content: center;
            border-radius: 50%;
          }
          .nav-call-label { display: none !important; }
        }
        .nav-call {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-l);
          border: 1.5px solid var(--line-2);
          color: var(--fg-2);
          font-size: 13px;
          font-weight: 500;
          font-family: var(--ff-display);
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: color 200ms, border-color 200ms, background 200ms;
          flex-shrink: 0;
        }
        .nav-call:hover {
          color: var(--fg);
          border-color: var(--fg-2);
          background: var(--bg-3);
        }
      `}</style>

      {showArc && <VoltageArc onDone={handleArcDone} theme={theme} />}

      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none', visibility: menuOpen ? 'visible' : 'hidden' }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`mobile-nav-link${pathname === href ? ' is-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta" style={{ marginTop: 24 }} onClick={() => setMenuOpen(false)}>
          Request a quote
        </Link>
      </div>

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          padding: '12px var(--gutter)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img
            src={theme === 'dark' ? '/icon-light.png' : '/icon-dark.png'}
            alt="Earthed Electrical"
            className="brand-icon"
          />
          <img
            src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
            alt="Earthed Electrical"
            className="brand-logo"
          />
        </Link>

        <nav
          className="nav-centre"
          aria-label="Main navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: '4px',
            borderRadius: 999,
            background: 'color-mix(in srgb, var(--bg-2) 70%, transparent)',
            border: '1px solid var(--line)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-pill-link${pathname === href ? ' is-active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <a href="tel:0226306654" className="nav-call" aria-label="Call 022 630 6654">
            <PhoneIcon />
            <span className="nav-call-label">022 630 6654</span>
          </a>
          <button
            className="nav-theme-btn"
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className={`theme-icon ${theme === 'light' ? 'visible' : 'hidden-up'}`}>
              <SunIcon />
            </span>
            <span className={`theme-icon ${theme === 'dark' ? 'visible' : 'hidden-down'}`}>
              <MoonIcon />
            </span>
          </button>
          <Link href="/contact" className="nav-cta nav-cta-desktop">
            Request a quote
          </Link>
          <button
            className={`hamburger-btn nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
