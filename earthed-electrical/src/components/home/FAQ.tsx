import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    q: 'Are you a licensed electrician?',
    a: 'Yes. David Holliday is registered with the Electrical Workers Registration Board (EWRB). You can verify any licensed electrician using the EWRB public register at ewrb.govt.nz.',
  },
  {
    q: 'What paperwork do I receive after the job?',
    a: 'Where required by law, we issue a Certificate of Compliance (CoC) — confirming the work meets the New Zealand Wiring Rules — before leaving the site. For safety inspections and rental property checks, we issue an Electrical Safety Certificate (ESC). We explain which documents apply to your job before we start.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Fill in the contact form with a description of the job, your suburb, and a photo if you have one. We\'ll reply with a written quote — not a phone estimate that drifts — by the end of the working day. No obligation.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We\'re based in Beckenham and work across Christchurch and greater Canterbury — including Banks Peninsula, Selwyn, and Waimakariri. If you\'re unsure whether we reach your area, call us and we\'ll tell you directly.',
  },
  {
    q: 'Do you do after-hours or emergency electrical work?',
    a: 'Contact us and ask. We\'ll be straightforward about our availability. We don\'t advertise 24/7 emergency call-outs, but we do our best to help genuine urgent situations.',
  },
  {
    q: 'Is site clean-up included?',
    a: 'Yes. Every job includes sweeping up, vacuuming out, labelling the switchboard, and leaving the site tidy. This is part of the price, not an add-on.',
  },
  {
    q: 'Who actually does the work — is it just one electrician?',
    a: 'David quotes the job, David does the work, and David signs it off. There\'s no relay through a call centre and no subcontracting. You deal with one person from start to finish.',
  },
];

function FaqItem({ item, isOpen, onToggle }: { item: typeof QUESTIONS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--line)',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: 'clamp(18px, 2vw, 24px) 0',
          cursor: 'pointer',
          background: 'none',
          border: 0,
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--ff-display)',
            fontWeight: 500,
            fontSize: 'clamp(16px, 1.5vw, 19px)',
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
            color: 'var(--fg)',
          }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '1.5px solid var(--line-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? 'var(--accent)' : 'var(--fg-2)',
            borderColor: isOpen ? 'var(--accent)' : 'var(--line-2)',
            fontSize: 18,
            lineHeight: 1,
            transition: 'color 200ms, border-color 200ms',
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                color: 'var(--fg-2)',
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                lineHeight: 1.7,
                paddingBottom: 'clamp(18px, 2vw, 24px)',
                margin: 0,
                maxWidth: 740,
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ paddingBlock: 'clamp(80px, 10vw, 130px)', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'start',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow" style={{ marginBottom: 20, display: 'flex' }}>
              Common questions
            </span>
            <h2 className="ee-h1" style={{ marginBottom: 20 }}>
              Good questions{' '}
              <em className="serif" style={{ color: 'var(--accent)' }}>deserve straight answers.</em>
            </h2>
            <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.65, maxWidth: 360 }}>
              If there's something specific you'd like to know that isn't covered here, call us or use the contact form.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderTop: '1px solid var(--line)' }}
          >
            {QUESTIONS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
