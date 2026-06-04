import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function CallToBook() {
  return (
    <section style={{ paddingBlock: 'clamp(80px, 12vw, 150px)', background: 'var(--bg)' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow" style={{ marginBottom: 20, display: 'flex' }}>
              Get a quote
            </span>
            <h2 className="ee-h1" style={{ maxWidth: 480 }}>
              Describe the job.<br />
              <em className="serif" style={{ color: 'var(--accent)' }}>We'll get back to you.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 28 }}
          >
            <p className="body-lg">
              Send us a description of what you need done, your suburb, and a photo if you have one. We'll reply with a written quote — not a vague phone estimate — by the end of the working day.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  borderRadius: 'var(--radius-l)',
                  padding: '15px 32px',
                  fontFamily: 'var(--ff-display)',
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
              <a
                href="tel:0226306654"
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 500,
                  fontSize: 15,
                  color: 'var(--fg-2)',
                  borderBottom: '1px solid var(--line-2)',
                  paddingBottom: 2,
                  transition: 'color 200ms, border-color 200ms',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.borderColor = 'var(--fg)'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--fg-2)'; e.currentTarget.style.borderColor = 'var(--line-2)'; }}
              >
                Or call 022 630 6654
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 24,
                paddingTop: 16,
                borderTop: '1px solid var(--line)',
                flexWrap: 'wrap',
              }}
            >
              {[
                { icon: '✓', label: 'Written quote provided' },
                { icon: '✓', label: 'Same-day response' },
                { icon: '✓', label: 'No call-out fee to quote' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 14 }}>{item.icon}</span>
                  <span style={{ color: 'var(--fg-2)', fontSize: 13 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
