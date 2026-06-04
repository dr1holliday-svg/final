export function WorkHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBlock: 'clamp(64px, 10vh, 120px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="bg-grid" />
      <div className="scan" />

      <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 880 }}>
        <p className="eyebrow" style={{ marginBottom: 28 }}>Portfolio</p>

        <h1
          className="ee-display"
          style={{ fontSize: 'clamp(48px, 9vw, 100px)', marginBottom: 24 }}
        >
          What we do.{' '}
          <em className="serif" style={{ color: 'var(--accent)' }}>
            How we do it.
          </em>
        </h1>

        <p
          className="body-lg"
          style={{ maxWidth: 640, marginBottom: 20 }}
        >
          Six services, all done by David — who quotes the job, does the work, and signs
          off the paperwork before leaving. Expand any service to see exactly what's included.
        </p>
      </div>
    </section>
  );
}
