import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

const SERVICES = [
  {
    num: '01',
    slug: 'faults',
    title: 'Faults & repairs',
    tagline: 'Diagnostic-first. No guesswork, no invoice surprises.',
    img: '/work/fault-trace-syd.png',
    description:
      'Most fault calls start with a symptom and end with a guess. We start with instruments. Ground current measured, insulation resistance checked, circuit traced end-to-end before anything is replaced.',
    includes: [
      'RCD / RCBO nuisance tripping',
      'Circuit dead or intermittent',
      'Stray voltage and earth leakage',
      'Buzzing, burning smell or visible scorching',
      'Appliance damage investigation',
    ],
  },
  {
    num: '02',
    slug: 'switchboards',
    title: 'Switchboard upgrades',
    tagline: 'The heart of the install. Done properly or not at all.',
    img: '/work/switchboard-bckenh.png',
    description:
      'Old fuseboxes and 1970s rewireable panels are a compliance, safety and insurance liability. We upgrade to modern RCBO or RCD-protected boards, label every circuit, document the neutral and earth bars, and issue a Certificate of Compliance.',
    includes: [
      '100A and 200A main switch replacement',
      'RCD / RCBO board installations',
      'Neutral and earth bar replacements',
      'Circuit labelling and load balancing',
      'New meter-board surrounds (with lines-company co-ordination)',
    ],
  },
  {
    num: '03',
    slug: 'lighting',
    title: 'Lighting & power',
    tagline: 'New circuits, downlights, outdoors, kitchens and bathrooms.',
    img: '/work/downlights-cashmere.png',
    description:
      'From a single extra socket to a complete lighting design with switched zones and dimmers, we plan circuit load before picking up cable. Halogen-to-LED retrofits, outdoor weatherproof fittings, and IP-rated bathroom zones all done properly.',
    includes: [
      'LED downlight installation and halogen replacement',
      'Outdoor weatherproof lighting',
      'Bathroom IK/IP-rated fittings',
      'Dimmer and 3-way switching',
      'Dedicated kitchen or workshop power circuits',
    ],
  },
  {
    num: '04',
    slug: 'renovations',
    title: 'Renovations & rewires',
    tagline: 'Full or partial rewires that fit around the build programme.',
    img: '/work/kitchen-rewire-stalbans.png',
    description:
      'We work alongside your builder and project manager — not against them. First-fix, second-fix, and sign-off timed to the build sequence. Full rewires, heritage homes, and partial upgrades all documented and handed over with compliant paperwork.',
    includes: [
      'First and second fix co-ordination',
      'Partial rewires (single-room to multi-room)',
      'Full-house rewires',
      'Heritage home wiring (knob-and-tube removal)',
      'Pre-Code compliance upgrades',
    ],
  },
  {
    num: '05',
    slug: 'ev',
    title: 'EV chargers',
    tagline: '7kW and 22kW installs with lines-company notification.',
    img: '/work/ev-charger-opawa.png',
    description:
      'EV chargers need a dedicated circuit, often a new cable run, and — for 22kW three-phase installs — co-ordination with your lines company. We quote the full job, not just the wallbox, and notify Orion or Transpower where required.',
    includes: [
      '7.4kW single-phase Type-2 installs',
      '22kW three-phase installs',
      'Dedicated 32A circuit to garage or carport',
      'Long cable runs (>40m)',
      'Lines-company notification and load assessment',
    ],
  },
  {
    num: '06',
    slug: 'compliance',
    title: 'Landlord & compliance',
    tagline: 'ESCs, maintenance, and documentation property managers actually want.',
    img: '/work/compliance-merivale.png',
    description:
      'Rental properties need current Electrical Safety Certificates. We inspect, test, document defects, and issue ESCs in a format that satisfies Healthy Homes requirements and insurance policies. Ongoing maintenance contracts also available.',
    includes: [
      'Electrical Safety Certificates (single and multi-unit)',
      'RCD push-test and documentation',
      'Smoke alarm testing and replacement',
      'Defect identification and repair',
      'Ongoing maintenance contract (call-out priority)',
    ],
  },
];

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 'var(--radius-m)',
        border: `1px solid ${open ? 'var(--accent)' : 'var(--line)'}`,
        overflow: 'hidden',
        transition: 'border-color 200ms',
        background: 'var(--bg-2)',
      }}
    >
      <div
        style={{
          position: 'relative',
          paddingTop: '52%',
          overflow: 'hidden',
          background: 'var(--bg-3)',
        }}
      >
        <img
          src={svc.img}
          alt={svc.title}
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
            background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            background: 'rgba(0,0,0,0.6)',
            padding: '4px 8px',
            borderRadius: 4,
          }}
        >
          {svc.num}
        </span>
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
          <h3
            style={{
              fontFamily: 'var(--ff-display)',
              fontWeight: 600,
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              margin: 0,
            }}
          >
            {svc.title}
          </h3>
        </div>
      </div>

      <div style={{ padding: 'clamp(16px, 2vw, 24px)' }}>
        <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px' }}>
          {svc.tagline}
        </p>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: open ? 'var(--accent)' : 'var(--fg-2)',
            transition: 'color 200ms',
            cursor: 'pointer',
          }}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block', fontSize: 16, lineHeight: 1, marginTop: -1 }}
          >
            +
          </motion.span>
          {open ? 'Less detail' : 'What\'s included'}
        </button>

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
              <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>
                  {svc.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {svc.includes.map((item) => (
                    <li
                      key={item}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.45 }}
                    >
                      <span style={{ color: 'var(--accent)', flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function WorkServicesSection() {
  return (
    <section style={{ paddingBlock: 'clamp(72px, 10vw, 120px)', background: 'var(--bg)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}
        >
          <span className="eyebrow" style={{ marginBottom: 16, display: 'flex' }}>What we do</span>
          <h2 className="ee-h1" style={{ maxWidth: 680 }}>
            Six services.{' '}
            <em className="serif" style={{ color: 'var(--fg-2)' }}>All done properly.</em>
          </h2>
          <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.65, marginTop: 20, maxWidth: 560 }}>
            Expand any card to see exactly what's included. Every job comes with a written quote, compliant paperwork, and a tidy site.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(12px, 2vw, 20px)',
          }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.slug} svc={svc} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: 'clamp(40px, 5vw, 64px)',
            padding: 'clamp(24px, 3vw, 36px)',
            background: 'var(--bg-2)',
            borderRadius: 'var(--radius-m)',
            border: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--ff-display)', fontWeight: 600, fontSize: 'clamp(16px, 1.5vw, 20px)', letterSpacing: '-0.015em', color: 'var(--fg)', margin: '0 0 6px' }}>
              Not sure which service you need?
            </p>
            <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Describe the job and your suburb — we'll tell you what it involves and what it'll cost.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '13px 28px',
              borderRadius: 100,
              fontFamily: 'var(--ff-display)',
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: '-0.01em',
              transition: 'background 200ms',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'var(--accent-deep)'; }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'var(--accent)'; }}
          >
            Get a quote →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
