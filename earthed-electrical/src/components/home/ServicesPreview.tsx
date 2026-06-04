import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const SERVICES = [
  { num: '01', title: 'Faults & repairs', desc: 'Tripping breakers, dead circuits, stray voltage, RCD nuisance trips. Diagnostic-first.' },
  { num: '02', title: 'Switchboard upgrades', desc: 'Old fuseboxes to compliant RCD/RCBO boards with documentation.' },
  { num: '03', title: 'Lighting & power', desc: 'New circuits, downlights, outdoor, kitchen and bathroom additions.' },
  { num: '04', title: 'Renovations & rewires', desc: 'Full or partial rewires alongside builders, joiners, plasterers.' },
  { num: '05', title: 'EV chargers', desc: '7kW & 22kW residential & light-commercial installs.' },
  { num: '06', title: 'Landlord & compliance', desc: 'Maintenance, CoCs, paperwork that property managers actually want.' },
];

function ServiceRow({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href="/services"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: '48px 1fr 32px',
          gap: 'clamp(16px, 2vw, 32px)',
          alignItems: 'center',
          padding: '20px 0',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 0%, var(--accent-glow) 50%, transparent 100%)',
            transform: hovered ? 'translateX(0%)' : 'translateX(-110%)',
            transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
          }}
        />

        <span className="mono" style={{ color: 'var(--fg-3)', fontSize: 11, position: 'relative' }}>
          {service.num}
        </span>

        <div style={{ position: 'relative' }}>
          <span
            className="ee-h3"
            style={{
              display: 'block',
              color: 'var(--fg)',
              transform: hovered ? 'translateX(6px)' : 'translateX(0)',
              transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {service.title}
          </span>
          <span
            className="service-desc"
            style={{
              display: 'block',
              fontSize: 14,
              color: 'var(--fg-2)',
              marginTop: 4,
              lineHeight: 1.5,
            }}
          >
            {service.desc}
          </span>
        </div>

        <div
          aria-hidden="true"
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: `1px solid ${hovered ? 'var(--accent)' : 'var(--line-2)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: hovered ? 'var(--bg)' : 'var(--fg-3)',
            background: hovered ? 'var(--accent)' : 'transparent',
            transition: 'background 250ms, color 250ms, border-color 250ms',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesPreview() {
  return (
    <section style={{ paddingBlock: 'clamp(80px, 10vw, 140px)', background: 'var(--bg)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}
        >
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>Our services</span>
          <h2 className="ee-h1">
            Electrical work{' '}
            <em className="serif" style={{ color: 'var(--fg-2)' }}>
              for Christchurch homes.
            </em>
          </h2>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
