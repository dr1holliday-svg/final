const STATS = [
  { value: '6', label: 'Services offered' },
  { value: 'EWRB', label: 'Licensed electrician' },
  { value: 'CoC', label: 'Issued where required by law' },
  { value: '1', label: 'Electrician on every job' },
];

export function StatsStrip() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--bg-2)',
        paddingBlock: 'clamp(40px, 6vh, 72px)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 0,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              textAlign: 'center',
              padding: '16px 24px',
              borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 'clamp(48px, 6vw, 80px)',
                lineHeight: 1,
                color: 'var(--accent)',
                letterSpacing: '-0.03em',
                fontWeight: 600,
                marginBottom: 10,
                textTransform: 'none',
              }}
            >
              {s.value}
            </div>
            <div className="mono" style={{ color: 'var(--fg-3)', fontSize: 11 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
