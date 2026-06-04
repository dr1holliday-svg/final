import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const JOBS = [
  {
    id: 'BCK-104',
    title: 'Switchboard rebuild',
    suburb: 'Beckenham',
    year: '2025',
    img: '/work/switchboard-bckenh.png',
    category: 'Switchboard',
  },
  {
    id: 'STL-088',
    title: 'Kitchen rewire',
    suburb: 'St Albans',
    year: '2025',
    img: '/work/kitchen-rewire-stalbans.png',
    category: 'Renovation',
  },
  {
    id: 'OPW-061',
    title: 'EV charger install',
    suburb: 'Opawa',
    year: '2025',
    img: '/work/ev-charger-opawa.png',
    category: 'EV',
  },
  {
    id: 'SYD-042',
    title: 'RCD fault traced',
    suburb: 'Sydenham',
    year: '2025',
    img: '/work/fault-trace-syd.png',
    category: 'Fault',
  },
];

function JobCard({ job, index }: { job: typeof JOBS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-m)',
          overflow: 'hidden',
          border: `1px solid ${hovered ? 'var(--accent)' : 'var(--line)'}`,
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms',
          cursor: 'default',
        }}
      >
        <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', background: 'var(--bg-3)' }}>
          <img
            src={job.img}
            alt={`${job.title} — ${job.suburb}`}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 8px',
              borderRadius: 4,
              zIndex: 1,
            }}
          >
            {job.id}
          </span>
          <span
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 100,
              zIndex: 1,
              fontWeight: 600,
            }}
          >
            {job.category}
          </span>
        </div>

        <div
          style={{
            padding: '16px 20px',
            background: 'var(--bg-2)',
            borderTop: '1px solid var(--line)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--ff-display)',
              fontWeight: 600,
              fontSize: 17,
              letterSpacing: '-0.015em',
              color: 'var(--fg)',
              margin: '0 0 6px',
            }}
          >
            {job.title}
          </h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--fg-2)',
              }}
            >
              {job.suburb}
            </span>
            <span
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--fg-2)',
              }}
            >
              {job.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WorkStrip() {
  return (
    <section style={{ paddingBlock: 'clamp(80px, 10vw, 130px)', background: 'var(--bg)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(32px, 4vw, 48px)',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <span className="eyebrow" style={{ marginBottom: 14, display: 'flex' }}>
              Recent work
            </span>
            <h2 className="ee-h1">
              Jobs completed{' '}
              <em className="serif" style={{ color: 'var(--fg-2)' }}>this year.</em>
            </h2>
          </div>
          <Link
            href="/work"
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              borderBottom: '1px solid var(--accent)',
              paddingBottom: 2,
              transition: 'opacity 200ms',
            }}
          >
            See all work →
          </Link>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
          gap: 'clamp(12px, 2vw, 20px)',
        }}>
          {JOBS.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
