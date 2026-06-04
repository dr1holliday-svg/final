const ITEMS = [
  '240V · 50Hz',
  'EWRB Licensed',
  'Ōtautahi · Christchurch',
  'Properly Documented',
  'Owner-led since 2025',
  'CoC on every job',
  'Canterbury wide service',
  'Quote within the working day',
];

export function Ticker() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        borderBlock: '1px solid var(--line)',
        overflow: 'hidden',
        background: 'var(--bg)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'ticker 40s linear infinite',
          paddingBlock: 10,
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="mono"
            style={{
              fontSize: 12,
              color: 'var(--fg-2)',
              paddingInline: 28,
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', opacity: 0.7 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
