import { motion } from 'framer-motion';
import { Link } from 'wouter';

const TIMELINE = [
  { year: '2015', event: 'Apprenticeship and trade years across Canterbury — residential, commercial, and industrial work.' },
  { year: '2023', event: 'Electrical Inspector role — reviewing installs from the compliance side and seeing firsthand the standard of work out in the field.' },
  { year: '2025', event: 'Earthed Electrical Services Ltd incorporated. Owner-led electrical services for Christchurch homes and businesses.' },
  { year: 'Now', event: 'Residential and light commercial work across greater Christchurch. One operator, one standard.' },
];

const WHAT_WE_DO = [
  {
    n: '01',
    heading: 'Earthed',
    body: 'A proper ground path on every circuit. A real number on every quote. No floating wires, no floating answers.',
  },
  {
    n: '02',
    heading: 'Honest',
    body: "If a job is outside scope or needs a different specialist, you'll hear it from us — before the work starts, not after the invoice.",
  },
  {
    n: '03',
    heading: 'Documented',
    body: 'Certificate of Compliance and Electrical Safety Certificate where required — issued and explained before we leave the site.',
  },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '55vh',
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
            style={{ marginBottom: 28, display: 'flex' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            About Earthed Electrical
          </motion.p>

          <motion.h1
            className="ee-display"
            style={{ marginBottom: 28, maxWidth: 780 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            A local electrician{' '}
            <em className="serif" style={{ color: 'var(--accent)' }}>
              you can rely on.
            </em>
          </motion.h1>

          <motion.p
            className="body-lg"
            style={{ maxWidth: 620 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Earthed Electrical Services is a one-person business. When you call, David answers. When we quote a job, David does the work. When the job is done, David signs it off and hands you the documentation.
          </motion.p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section style={{ paddingBlock: 'clamp(72px, 10vw, 120px)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <p className="body-lg">
                Canterbury-trained and EWRB-licensed. Before starting Earthed Electrical, David spent time working as an Electrical Inspector — which means he has seen firsthand how many installs leave the site without proper earthing, documentation, or care.
              </p>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.65 }}>
                Earthed Electrical started because he got tired of explaining to homeowners why the work they'd paid for didn't meet the standard. It's a small business deliberately — one van, one operator — so that every job gets the attention it deserves.
              </p>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.65 }}>
                David is based in Beckenham and works across Christchurch and greater Canterbury. He issues the correct compliance documentation on every job and doesn't leave a site until the work is right.
              </p>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 8, borderTop: '1px solid var(--line)' }}>
                {[
                  { label: 'Registration', value: 'EWRB Licensed' },
                  { label: 'Based', value: 'Beckenham, Chch' },
                  { label: 'Service area', value: 'Greater Christchurch' },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 10,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--fg)', fontSize: 15 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                aspectRatio: '3/4',
                borderRadius: 'var(--radius-m)',
                border: '1px solid var(--line)',
                overflow: 'hidden',
                position: 'relative',
                maxWidth: 360,
                width: '100%',
                background: 'var(--bg-3)',
              }}
            >
              <img
                src="/about-david.png"
                alt="Earthed Electrical Services — professional electrician"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  padding: '48px 16px 16px',
                }}
              >
                <div style={{ display: 'flex', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      background: 'var(--accent)',
                      color: 'var(--bg)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-s)',
                      fontWeight: 600,
                    }}
                  >
                    EWRB Licensed
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      background: 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-s)',
                    }}
                  >
                    Christchurch
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ paddingBlock: 'clamp(64px, 10vw, 120px)', background: 'var(--bg-2)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 48 }}
          >
            <span className="eyebrow" style={{ marginBottom: 16, display: 'flex' }}>Background</span>
            <h2 className="ee-h1">The short version.</h2>
          </motion.div>

          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div
              style={{
                position: 'absolute',
                left: 5, top: 8, bottom: 8,
                width: 1,
                background: 'var(--line-2)',
              }}
            />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  marginBottom: i < TIMELINE.length - 1 ? 36 : 0,
                  display: 'flex',
                  gap: 24,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: -28, top: 6,
                    width: 9, height: 9,
                    borderRadius: '50%',
                    background: i === TIMELINE.length - 1 ? 'var(--accent)' : 'var(--fg-2)',
                    boxShadow: i === TIMELINE.length - 1 ? '0 0 12px var(--accent-glow)' : 'none',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    flexShrink: 0,
                    paddingTop: 2,
                    minWidth: 48,
                  }}
                >
                  {item.year}
                </span>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section style={{ paddingBlock: 'clamp(64px, 10vw, 120px)' }}>
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 48 }}
          >
            <span className="eyebrow" style={{ marginBottom: 16, display: 'flex' }}>How we work</span>
            <h2 className="ee-h1">
              What you can expect{' '}
              <em className="serif" style={{ color: 'var(--accent)' }}>on every job.</em>
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
          }}>
            {WHAT_WE_DO.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: 'clamp(24px, 3vw, 40px)',
                  borderRight: i < WHAT_WE_DO.length - 1 ? '1px solid var(--line)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {p.n}
                </span>
                <em className="serif" style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 0.95, display: 'block', color: 'var(--fg)' }}>
                  {p.heading}
                </em>
                <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(64px, 10vw, 120px)', textAlign: 'center', borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
        <div className="wrap" style={{ maxWidth: 600 }}>
          <h2 className="ee-h2" style={{ marginBottom: 20 }}>Ready to get started?</h2>
          <p className="body-lg" style={{ marginBottom: 36 }}>
            Describe the job, your suburb, and attach a photo. You'll hear back the same working day.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg)',
                padding: '14px 28px',
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 15,
                fontFamily: 'var(--ff-display)',
                transition: 'background 200ms',
              }}
            >
              Request a quote →
            </Link>
            <a
              href="tel:0226306654"
              style={{
                border: '1.5px solid var(--line-2)',
                color: 'var(--fg-2)',
                padding: '13px 28px',
                borderRadius: 100,
                fontWeight: 500,
                fontSize: 15,
                fontFamily: 'var(--ff-display)',
                transition: 'border-color 200ms, color 200ms',
              }}
            >
              022 630 6654
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
