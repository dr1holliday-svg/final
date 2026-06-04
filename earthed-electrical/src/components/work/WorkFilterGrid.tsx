import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Switchboard' | 'Renovation' | 'EV' | 'Fault' | 'Lighting' | 'Compliance';

interface JobStat {
  label: string;
  value: string;
}

interface Job {
  id: string;
  title: string;
  suburb: string;
  year: number;
  category: Exclude<Category, 'All'>;
  value: string;
  headline: string;
  found: string;
  fixed: string;
  stats: JobStat[];
  img: string;
}

const JOBS: Job[] = [
  {
    id: 'BCK-104',
    title: '200A switchboard rebuild',
    suburb: 'Beckenham',
    year: 2025,
    category: 'Switchboard',
    value: '.8k',
    headline: 'From a 1970s ceramic-fuse fire-hazard to a properly labelled 12-way RCBO board.',
    found: 'Ceramic fuses, melted neutral bar, no main earth bond, two unidentified circuits.',
    fixed: 'New 200A main switch · 12-way RCBO board · neutral & earth bars replaced · circuits identified and labelled.',
    stats: [
      { label: 'Circuits', value: '12' },
      { label: 'Main switch', value: '200A' },
      { label: 'RCD type', value: 'RCBO' },
      { label: 'CoC', value: 'Issued' },
    ],
    img: '/work/switchboard-bckenh.png',
  },
  {
    id: 'STL-088',
    title: 'Kitchen rewire & circuit split',
    suburb: 'St Albans',
    year: 2025,
    category: 'Renovation',
    value: '.2k',
    headline: 'Single 16A circuit feeding the whole kitchen, split into 5 dedicated runs.',
    found: 'Lights, oven, dishwasher, microwave, kettle all on one circuit. Tripping under load.',
    fixed: 'Dedicated 20A oven · 20A induction · 16A appliances · 16A dishwasher · separated lighting on dimmer.',
    stats: [
      { label: 'Old circuits', value: '1' },
      { label: 'New circuits', value: '5' },
      { label: 'Cable', value: '2.5mm²' },
      { label: 'USB outlets', value: '4' },
    ],
    img: '/work/kitchen-rewire-stalbans.png',
  },
  {
    id: 'OPW-061',
    title: '7.4kW EV charger',
    suburb: 'Opawa',
    year: 2025,
    category: 'EV',
    value: '.9k',
    headline: 'Weatherproof Type-2, dedicated 32A circuit, lines-company notified.',
    found: 'EV ordered, no home charging, garage 60m of cable away from main board.',
    fixed: 'Dedicated 32A circuit · 25mm² mains-grade run · Type-2 weatherproof wallbox · notified Orion.',
    stats: [
      { label: 'Output', value: '7.4kW' },
      { label: 'Circuit', value: '32A' },
      { label: 'Cable run', value: '62m' },
      { label: 'Charge time', value: '8–9h' },
    ],
    img: '/work/ev-charger-opawa.png',
  },
  {
    id: 'SYD-042',
    title: 'Intermittent RCD trip',
    suburb: 'Sydenham',
    year: 2025,
    category: 'Fault',
    value: '',
    headline: 'Tripped most evenings around 6pm. Traced to one corroded outdoor socket.',
    found: 'Whole-house RCD tripping. Random pattern. Three other electricians had a guess.',
    fixed: 'Isolated each circuit, found earth-leakage at 12mA on socket circuit, traced to corroded outdoor box, replaced.',
    stats: [
      { label: 'Leakage', value: '12mA' },
      { label: 'Trips/wk', value: '9→0' },
      { label: 'Hours', value: '2.5' },
      { label: 'Parts', value: '—' },
    ],
    img: '/work/fault-trace-syd.png',
  },
  {
    id: 'CSH-027',
    title: 'Downlight retrofit',
    suburb: 'Cashmere',
    year: 2025,
    category: 'Lighting',
    value: '.4k',
    headline: '23 dimmable LEDs across two zones, integrated with existing 3-way switching.',
    found: 'Ten 50W halogens. Hot, dim, expensive to run. Plaster ceilings.',
    fixed: '23 × 9W LED downlights · 2 zones · dimmer-compatible driver · centred to dining and lounge geometry.',
    stats: [
      { label: 'Lights', value: '23' },
      { label: 'Watts (was)', value: '500W' },
      { label: 'Watts (now)', value: '207W' },
      { label: 'Save/yr', value: '≈$90' },
    ],
    img: '/work/downlights-cashmere.png',
  },
  {
    id: 'MRV-019',
    title: 'Landlord WoF — 4 unit block',
    suburb: 'Merivale',
    year: 2025,
    category: 'Compliance',
    value: '',
    headline: 'Pre-tenancy electrical safety check across 4 flats; ESCs issued per unit.',
    found: 'Property manager onboarding new tenants; insurance wanted current ESCs.',
    fixed: 'Visual & instrument inspection across 4 units, smoke-alarm test, RCD push-test, 1 unit needed RCBO retrofit.',
    stats: [
      { label: 'Units', value: '4' },
      { label: 'ESCs', value: '4' },
      { label: 'Faults found', value: '1' },
      { label: 'Smoke alarms', value: '8' },
    ],
    img: '/work/compliance-merivale.png',
  },
];

const CATEGORIES: Category[] = ['All', 'Switchboard', 'Renovation', 'EV', 'Fault', 'Lighting', 'Compliance'];

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginRight: 6,
        }}
      >
        {label}:
      </span>
      <span style={{ color: 'var(--fg-2)', fontSize: 13, lineHeight: 1.5 }}>{value}</span>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--bg-2)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-m)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          background: 'var(--bg-3)',
          overflow: 'hidden',
        }}
      >
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
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: 'rgba(0,0,0,0.65)',
            color: '#fff',
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '3px 8px',
            borderRadius: 'var(--radius-s)',
            zIndex: 2,
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
            padding: '3px 10px',
            borderRadius: 100,
            zIndex: 2,
            fontWeight: 600,
          }}
        >
          {job.category}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 20px 0', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--ff-display)',
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: '-0.015em',
            lineHeight: 1.2,
            marginBottom: 6,
            color: 'var(--fg)',
          }}
        >
          {job.title}
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--fg-2)',
            }}
          >
            {job.suburb} · {job.year}
          </span>
          {job.value && (
            <span
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 11,
                letterSpacing: '0.06em',
                color: 'var(--accent)',
                fontWeight: 600,
              }}
            >
              {job.value}
            </span>
          )}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          borderTop: '1px solid var(--line)',
          width: '100%',
          cursor: 'pointer',
          color: 'var(--fg-2)',
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--fg-2)',
          }}
        >
          {open ? 'Hide detail' : 'View detail'}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ display: 'inline-block', lineHeight: 1, color: 'var(--fg-2)' }}
        >
          ↓
        </motion.span>
      </button>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '20px',
                borderTop: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                {job.headline}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <DetailRow label="Found" value={job.found} />
                <DetailRow label="Fixed" value={job.fixed} />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 8,
                  borderTop: '1px solid var(--line)',
                  paddingTop: 16,
                }}
              >
                {job.stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--fg-2)',
                        marginBottom: 2,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 13,
                        color: 'var(--fg)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function WorkFilterGrid() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? JOBS : JOBS.filter((j) => j.category === active);

  return (
    <section style={{ paddingBlock: 'clamp(48px, 8vh, 96px)' }}>
      <div className="wrap">
        {/* Filter buttons */}
        <div
          role="group"
          aria-label="Filter by category"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 40,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '7px 16px',
                borderRadius: 100,
                border: `1.5px solid ${active === cat ? 'var(--accent)' : 'var(--line-2)'}`,
                cursor: 'pointer',
                fontFamily: 'var(--ff-mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: active === cat ? 'var(--accent)' : 'transparent',
                color: active === cat ? 'var(--bg)' : 'var(--fg-2)',
                transition: 'background 200ms, color 200ms, border-color 200ms',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--fg-2)',
              textAlign: 'center',
              padding: '48px 0',
            }}
          >
            No jobs logged in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
