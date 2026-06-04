import { motion } from 'framer-motion';

const ITEMS = [
  {
    n: '01',
    title: 'Properly earthed',
    body: 'Every circuit gets a correct ground path. Every quote gets a real number. No floating wires, no floating answers.',
    detail: 'We test earth continuity on every circuit we touch and won\'t sign off work that doesn\'t meet the standard.',
  },
  {
    n: '02',
    title: 'Site left tidy',
    body: 'We sweep up, vacuum out, label the switchboard, and leave the place the way we found it — or better.',
    detail: 'This is included in the job price. Not charged as a separate clean-up fee, not left for the homeowner to deal with.',
  },
  {
    n: '03',
    title: 'Paperwork issued',
    body: 'Certificate of Compliance or Electrical Safety Certificate where required by law — issued before we leave the job.',
    detail: 'You\'ll receive documentation that explains what was done, why it was done, and what standard it was completed to.',
  },
];

export function Manifesto() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingBlock: 'clamp(80px, 10vw, 130px)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}
        >
          <span className="eyebrow" style={{ marginBottom: 20, display: 'flex' }}>
            Every job, without exception
          </span>
          <h2 className="ee-h1" style={{ maxWidth: 640 }}>
            What you get{' '}
            <em className="serif" style={{ color: 'var(--accent)' }}>on every job.</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            borderTop: '1px solid var(--line)',
          }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: 'clamp(28px, 3.5vw, 48px) clamp(20px, 3vw, 40px)',
                borderRight: i < ITEMS.length - 1 ? '1px solid var(--line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                borderBottom: '1px solid var(--line)',
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
                {item.n}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                  margin: 0,
                }}
              >
                {item.title}
              </h3>

              <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                {item.body}
              </p>

              <p
                style={{
                  color: 'var(--fg-2)',
                  fontSize: 13,
                  lineHeight: 1.65,
                  margin: 0,
                  paddingTop: 12,
                  borderTop: '1px solid var(--line)',
                  opacity: 0.8,
                }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
