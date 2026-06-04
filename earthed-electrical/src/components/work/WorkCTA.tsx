import { Link } from 'wouter';

export function WorkCTA() {
  return (
    <section
      style={{
        paddingBlock: 'clamp(72px, 12vh, 140px)',
        textAlign: 'center',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="wrap" style={{ maxWidth: 680 }}>
        <h2
          className="ee-h2"
          style={{ marginBottom: 20, color: 'var(--fg)' }}
        >
          Want a job like this done?
        </h2>
        <p
          className="body-lg"
          style={{ marginBottom: 40 }}
        >
          Every job on this page started with a call or a form submission. Describe what you
          need and your suburb.
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent)',
            color: 'var(--bg)',
            padding: '14px 32px',
            borderRadius: 100,
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: '-0.01em',
            transition: 'background 200ms',
          }}
        >
          Get a quote →
        </Link>
      </div>
    </section>
  );
}
