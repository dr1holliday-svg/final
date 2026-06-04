import { motion } from 'framer-motion';
import { Link } from 'wouter';

function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 1440 800"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.12,
        pointerEvents: 'none',
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="currentLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Horizontal bus bars */}
      {[200, 320, 440, 560].map((y) => (
        <line key={y} x1="360" y1={y} x2="1080" y2={y} stroke="var(--fg-3)" strokeWidth="0.5" strokeOpacity="0.4" />
      ))}

      {/* Circuit breakers */}
      {[200, 320, 440].map((y, i) => (
        <g key={y}>
          <rect x={680 + i * 60} y={y - 10} width="20" height="20" rx="2" stroke="var(--fg-3)" strokeWidth="0.8" fill="none" strokeOpacity="0.6" />
          <line x1={690 + i * 60} y1={y - 10} x2={690 + i * 60} y2={y + 10} stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" />
        </g>
      ))}

      {/* Ground bus */}
      <line x1="360" y1="700" x2="1080" y2="700" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.6" />

      {/* Earthing symbol */}
      <line x1="660" y1="700" x2="780" y2="700" stroke="var(--accent)" strokeWidth="2.5" strokeOpacity="0.8" />
      <line x1="686" y1="716" x2="754" y2="716" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.65" />
      <line x1="706" y1="732" x2="734" y2="732" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* Vertical current line */}
      <line x1="720" y1="20" x2="720" y2="700" stroke="url(#currentLine)" strokeWidth="1.5" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        marginTop: '-80px',
        paddingTop: '80px',
      }}
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="scan" aria-hidden="true" />
      <HeroDiagram />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 'var(--max)',
          margin: '0 auto',
          paddingInline: 'var(--gutter)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: 'clamp(20px, 3vw, 32px)',
          paddingTop: 'clamp(40px, 6vw, 80px)',
          paddingBottom: 'clamp(80px, 10vw, 120px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">
            Christchurch · Owner-operated · EWRB Licensed
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="ee-display">
            Trusted electrical work<br />
            for Christchurch homes{' '}
            <em className="serif" style={{ color: 'var(--accent)' }}>and businesses.</em>
          </h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 580 }}>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Safe, tidy electrical work from a local Christchurch electrician. David quotes the job, does the work, and hands you the compliance documentation before leaving.
          </motion.p>

          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--accent)',
                color: 'var(--bg)',
                borderRadius: 'var(--radius-l)',
                padding: '14px 28px',
                fontFamily: 'var(--ff-display)',
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '-0.01em',
                transition: 'background 200ms, transform 150ms',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'var(--accent-deep)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get a quote →
            </Link>
            <a
              href="tel:0226306654"
              style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 500,
                fontSize: 15,
                color: 'var(--fg-2)',
                borderBottom: '1px solid var(--line-2)',
                paddingBottom: 2,
                transition: 'color 200ms, border-color 200ms',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = 'var(--fg)';
                e.currentTarget.style.borderColor = 'var(--fg)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = 'var(--fg-2)';
                e.currentTarget.style.borderColor = 'var(--line-2)';
              }}
            >
              022 630 6654
            </a>
            <Link
              href="/services"
              style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 500,
                fontSize: 15,
                color: 'var(--fg-2)',
                borderBottom: '1px solid var(--line-2)',
                paddingBottom: 2,
                transition: 'color 200ms, border-color 200ms',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = 'var(--fg)';
                e.currentTarget.style.borderColor = 'var(--fg)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.color = 'var(--fg-2)';
                e.currentTarget.style.borderColor = 'var(--line-2)';
              }}
            >
              View services
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: 24, flexWrap: 'wrap', paddingTop: 8 }}
          >
            {[
              'EWRB Licensed',
              'Certificate of Compliance issued',
              'Based in Beckenham',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13 }}>✓</span>
                <span style={{ color: 'var(--fg-2)', fontSize: 13 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  );
}
