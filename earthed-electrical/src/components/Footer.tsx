import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useTheme } from '@/components/ThemeProvider';

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-NZ', {
      timeZone: 'Pacific/Auckland',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="mono"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: '12px 14px',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-m)',
        background: 'var(--bg-2)',
        fontSize: 11,
        lineHeight: 1.7,
        marginTop: 12,
      }}
    >
      <span>
        <span style={{ color: 'var(--accent)' }}>›</span>{' '}
        <span style={{ color: 'var(--fg-2)' }}>Christchurch time: {time || '--:--:--'}</span>
      </span>
      <span>
        <span style={{ color: 'var(--accent)' }}>›</span>{' '}
        <span style={{ color: 'var(--fg-2)' }}>Currently taking bookings</span>
      </span>
    </div>
  );
}

export function Footer() {
  const { theme } = useTheme();
  return (
    <>
      <style>{`
        @keyframes ee-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .footer-link {
          color: var(--fg-2);
          font-size: 14px;
          line-height: 1.9;
          transition: color 200ms;
        }
        .footer-link:hover {
          color: var(--fg);
        }
        .footer-col-label {
          font-family: var(--ff-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg-2);
          margin-bottom: 12px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 32px;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 'clamp(64px, 10vw, 96px)',
          paddingBottom: 32,
          background: 'var(--bg)',
        }}
      >
        <div className="wrap">
          {/* Footer CTA */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
              marginBottom: 'clamp(56px, 8vw, 80px)',
              paddingBottom: 'clamp(56px, 8vw, 80px)',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div>
              <h2 className="ee-h1" style={{ marginBottom: 16 }}>
                Ready to get it sorted?
              </h2>
              <p style={{ color: 'var(--fg-2)', fontSize: 17, lineHeight: 1.6, maxWidth: 460, margin: 0 }}>
                Describe the job, include your suburb, and attach a photo if you have one. You'll get a written quote within the working day.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="tel:0226306654"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  borderRadius: 'var(--radius-l)',
                  padding: '14px 28px',
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 600,
                  fontSize: 16,
                  letterSpacing: '-0.01em',
                  transition: 'background 200ms',
                  width: 'fit-content',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'var(--accent-deep)'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'var(--accent)'; }}
              >
                <PhoneIcon /> Call 022 630 6654
              </a>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  border: '1.5px solid var(--line-2)',
                  color: 'var(--fg-2)',
                  borderRadius: 'var(--radius-l)',
                  padding: '13px 28px',
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 500,
                  fontSize: 15,
                  transition: 'border-color 200ms, color 200ms',
                  width: 'fit-content',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.borderColor = 'var(--fg-2)'; e.currentTarget.style.color = 'var(--fg)'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.borderColor = 'var(--line-2)'; e.currentTarget.style.color = 'var(--fg-2)'; }}
              >
                Request a quote →
              </Link>
            </div>
          </div>

          {/* Footer grid */}
          <div className="footer-grid">
            <div>
              <div className="footer-col-label">Company</div>
              <img
                src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
                alt="Earthed Electrical"
                style={{ height: 32, width: 'auto', display: 'block', marginBottom: 12 }}
              />
              <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                Owner-operated electrical services for Christchurch homes and businesses.
              </div>
              <LiveClock />
            </div>

            <div>
              <div className="footer-col-label">Navigate</div>
              <nav style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/services', label: 'Services' },
                  { href: '/work', label: 'Work' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="footer-link">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="footer-col-label">Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="tel:0226306654" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <PhoneIcon /> 022 630 6654
                </a>
                <a href="mailto:hello@e-electrical.co.nz" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MailIcon /> hello@e-electrical.co.nz
                </a>
                <a
                  href="https://www.facebook.com/p/Earthed-Electrical-Services-61577926974943/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <FbIcon /> Facebook
                </a>
                <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 4, lineHeight: 1.6 }}>
                  Based in Beckenham<br />
                  Christchurch, Canterbury
                </div>
              </div>
            </div>

            <div>
              <div className="footer-col-label">Credentials</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Licensed Electrician (EWRB)',
                  'Certificate of Compliance issued',
                  'Greater Christchurch service area',
                  'Owner-operated — David quotes & does the work',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--accent)', marginTop: 1, flexShrink: 0, fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: 56,
              paddingTop: 24,
              borderTop: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 8,
              fontSize: 13,
              color: 'var(--fg-2)',
            }}
          >
            <span>© {new Date().getFullYear()} Earthed Electrical Services Ltd. All rights reserved.</span>
            <span style={{ color: 'var(--fg-2)', fontSize: 13 }}>
              Christchurch, New Zealand
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 8.5 6a2 2 0 0 0 3 0L22 7" />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
