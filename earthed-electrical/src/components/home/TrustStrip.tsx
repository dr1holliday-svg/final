import { useState } from 'react';
import { motion } from 'framer-motion';

const CELLS = [
  {
    label: '01 · DIAGNOSTIC',
    heading: 'Test before replace',
    body: 'We find the real cause. No parts replaced on guesswork, no invoice surprises when the fault returns.',
  },
  {
    label: '02 · TRANSPARENT',
    heading: 'Written quote, always',
    body: 'A written number before anyone picks up a tool. Not a phone ballpark. Not an estimate that drifts.',
  },
  {
    label: '03 · CLEAN',
    heading: 'Site left tidy',
    body: 'Sweep, vacuum, labels on the board, furniture back where it was. Included, not an add-on.',
  },
  {
    label: '04 · DIRECT',
    heading: 'You call, David shows up',
    body: 'One sparkie. One van. The person who quotes is the person who does the work and signs it off.',
  },
];

function TrustCell({ cell, index }: { cell: typeof CELLS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 'clamp(24px, 3vw, 36px)',
        background: hovered ? 'var(--bg-2)' : 'transparent',
        transition: 'background 200ms',
        borderRight: index < CELLS.length - 1 ? '1px solid var(--line)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <span className="mono" style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: '0.18em' }}>
        {cell.label}
      </span>
      <h3 className="ee-h3" style={{ color: 'var(--fg)' }}>{cell.heading}</h3>
      <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{cell.body}</p>
    </motion.div>
  );
}

export function TrustStrip() {
  return (
    <section style={{ paddingBlock: 'clamp(60px, 8vw, 100px)', background: 'var(--bg)' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {CELLS.map((cell, i) => (
            <TrustCell key={cell.label} cell={cell} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
