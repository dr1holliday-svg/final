import { motion } from 'framer-motion';

const SUBURBS = [
  'Beckenham', 'Sydenham', 'Opawa', 'St Albans',
  'Cashmere', 'Riccarton', 'Linwood', 'Merivale',
  'Spreydon', 'Halswell', 'Sumner', 'Lyttelton',
  'Addington', 'Woolston', 'Fendalton', 'Burnside',
];

export function ServiceArea() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingBlock: 'clamp(80px, 10vw, 130px)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}
        >
          <span className="eyebrow" style={{ marginBottom: 20, display: 'flex' }}>
            Service area
          </span>
          <h2 className="ee-h1">
            Greater Christchurch{' '}
            <em className="serif" style={{ color: 'var(--fg-2)' }}>and Canterbury.</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-m)',
                overflow: 'hidden',
                border: '1px solid var(--line-2)',
                aspectRatio: '1/1',
                maxWidth: 480,
                width: '100%',
              }}
            >
              <iframe
                title="Earthed Electrical service area — Beckenham, Christchurch"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Beckenham,Christchurch,New+Zealand&z=13&output=embed"
                allowFullScreen
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=Beckenham,Christchurch,New+Zealand&z=13"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--fg-2)',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              View larger map on Google Maps ↗
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            <div>
              <p className="body-lg" style={{ marginBottom: 0 }}>
                Based in Beckenham. We work across the central city, inner suburbs, and greater Canterbury. If you're not sure whether we cover your area — call us and we'll be straight with you.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-2)',
                  marginBottom: 12,
                }}
              >
                Suburbs we regularly cover
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                  gap: 6,
                }}
              >
                {SUBURBS.map((suburb) => (
                  <div
                    key={suburb}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '7px 12px',
                      background: suburb === 'Beckenham' ? 'var(--accent-glow)' : 'var(--bg)',
                      borderRadius: 'var(--radius-s)',
                      border: `1px solid ${suburb === 'Beckenham' ? 'var(--accent)' : 'var(--line)'}`,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: suburb === 'Beckenham' ? 'var(--accent)' : 'var(--fg-2)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 10,
                        letterSpacing: '0.08em',
                        color: suburb === 'Beckenham' ? 'var(--accent)' : 'var(--fg-2)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {suburb}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: '20px 24px',
                background: 'var(--bg)',
                borderRadius: 'var(--radius-m)',
                border: '1px solid var(--line)',
              }}
            >
              <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: 'var(--fg)', display: 'block', marginBottom: 6 }}>Outside Christchurch?</strong>
                We take on select jobs across Canterbury — Banks Peninsula, Selwyn, and Waimakariri districts. Call to discuss your job and we'll let you know if we can help.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
