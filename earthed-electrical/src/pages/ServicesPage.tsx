import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const SERVICES = [
  {
    slug: 'faults',
    num: '01',
    title: 'Faults & repairs',
    tagline: 'If it trips, sparks, buzzes or refuses to work — this is the job.',
    description:
      'Most fault-finding calls start with a symptom and end with a guess. We start with a multimeter and a wiring diagram. Ground current measured, insulation resistance checked, circuit traced end-to-end before anything is replaced.',
    includes: [
      'RCD / RCBO nuisance tripping',
      'Circuit dead or intermittent',
      'Stray voltage / earth leakage',
      'Buzzing, burning smell or visible scorching',
      'Appliance damage investigation',
    ],
  },
  {
    slug: 'switchboards',
    num: '02',
    title: 'Switchboard upgrades',
    tagline: 'The heart of the install. We do it properly or not at all.',
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
    slug: 'lighting',
    num: '03',
    title: 'Lighting & power',
    tagline: 'New circuits, downlights, outdoors, kitchens and bathrooms.',
    description:
      'From a single extra socket to a complete lighting design with switched zones and dimmers, we plan the circuit load before picking up a cable. Halogen-to-LED retrofits, outdoor weatherproof fittings, and IP-rated bathroom zones all done properly.',
    includes: [
      'LED downlight installation and halogen replacement',
      'Outdoor weatherproof lighting',
      'Bathroom IK/IP-rated fittings',
      'Dimmer and 3-way switching',
      'Dedicated kitchen or workshop power circuits',
    ],
  },
  {
    slug: 'renovations',
    num: '04',
    title: 'Renovations & rewires',
    tagline: 'Full or partial rewires that fit around the build programme.',
    description:
      'We work alongside your builder and project manager, not against them. First-fix, second-fix, and sign-off timed to the build sequence. Full rewires, heritage homes, and partial upgrades all documented and handed over with compliant paperwork.',
    includes: [
      'First and second fix co-ordination',
      'Partial rewires (single-room to multi-room)',
      'Full-house rewires',
      'Heritage home wiring (knob-and-tube removal)',
      'Pre-Code compliance upgrades',
    ],
  },
  {
    slug: 'ev',
    num: '05',
    title: 'EV chargers',
    tagline: '7kW and 22kW installs with lines-company notification.',
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
    slug: 'compliance',
    num: '06',
    title: 'Landlord & compliance',
    tagline: 'ESCs, maintenance, and documentation that property managers actually want.',
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

const PROCESS = [
  { step: '01', title: 'You contact us', body: 'Phone, form, or email. Describe the job and your suburb. A photo never hurts.' },
  { step: '02', title: 'Written quote', body: 'A real number in writing — not a ballpark, not "depends what we find". Within the working day for most jobs.' },
  { step: '03', title: 'We do the work', body: 'David arrives, does the job, tidies up. No subcontractors, no surprises.' },
  { step: '04', title: 'Paperwork issued', body: 'Certificate of Compliance or Electrical Safety Certificate where required, handed over before we leave.' },
];

export function ServicesPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingBlock: 'clamp(80px, 12vh, 140px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="bg-grid" />
        <div className="scan" />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <motion.p
            className="eyebrow"
            style={{ marginBottom: 28 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            What we do
          </motion.p>

          <motion.h1
            className="ee-display"
            style={{ marginBottom: 24 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Six things.{' '}
            <em className="serif" style={{ color: 'var(--accent)' }}>
              Done right.
            </em>
          </motion.h1>

          <motion.p
            className="body-lg"
            style={{ maxWidth: 600 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A short list of things we&rsquo;re genuinely good at. No false broadening. If it&rsquo;s not here, we&rsquo;ll say so.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ paddingBlock: 'clamp(64px, 10vw, 120px)', background: 'var(--bg)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 2 }}>
            {SERVICES.map((svc, i) => {
              const isOpen = activeSlug === svc.slug;
              return (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: isOpen ? 'var(--bg-2)' : 'transparent',
                    border: '1px solid var(--line)',
                    padding: 'clamp(20px, 2.5vw, 32px)',
                    cursor: 'pointer',
                    transition: 'background 200ms',
                    borderRadius: 'var(--radius-s)',
                  }}
                  onClick={() => setActiveSlug(isOpen ? null : svc.slug)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <span className="mono" style={{ color: 'var(--accent)' }}>{svc.num}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: 'var(--fg-3)', fontSize: 20, lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </div>
                  <h2 className="ee-h3" style={{ marginBottom: 8, color: 'var(--fg)' }}>{svc.title}</h2>
                  <p style={{ fontSize: 14, color: 'var(--fg-3)', margin: 0, lineHeight: 1.55 }}>{svc.tagline}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{svc.description}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {svc.includes.map((item) => (
                          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.4 }}>
                            <span style={{ color: 'var(--accent)', marginTop: 1, flexShrink: 0 }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section style={{ background: 'var(--bg-2)', paddingBlock: 'clamp(64px, 10vw, 120px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}
          >
            <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>How it works</span>
            <h2 className="ee-h1">How the job works.{' '}<em className="serif" style={{ color: 'var(--fg-2)' }}>Every time.</em></h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 0,
            borderTop: '1px solid var(--line)',
          }}>
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: 'clamp(24px, 3vw, 36px)',
                  borderRight: i < PROCESS.length - 1 ? '1px solid var(--line)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span className="mono" style={{ color: 'var(--accent)' }}>{p.step}</span>
                <h3 className="ee-h3">{p.title}</h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(72px, 12vh, 140px)', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <motion.h2
            className="ee-h2"
            style={{ marginBottom: 20 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            See something that fits?
          </motion.h2>
          <motion.p
            className="body-lg"
            style={{ marginBottom: 40 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Describe the job, your suburb, and send a photo if you have one. You&rsquo;ll get a written quote within the working day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
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
                transition: 'background 200ms, transform 150ms',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'var(--accent-deep)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Request a quote →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
