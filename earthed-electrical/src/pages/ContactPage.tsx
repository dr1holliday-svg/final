import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type FormData = {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  service: string;
  message: string;
};

const SERVICE_OPTIONS = [
  'Faults & repairs',
  'Switchboard upgrade',
  'Lighting & power',
  'Renovation / rewire',
  'EV charger',
  'Landlord / compliance',
  'Not sure',
];

function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  placeholder = 'Select…',
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const focused = open;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} ref={ref}>
      <label
        htmlFor={id}
        className="mono"
        style={{ color: 'var(--fg-3)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}
      >
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <button
          id={id}
          type="button"
          onClick={() => setOpen((o) => !o)}
          style={{
            width: '100%',
            background: 'var(--bg-2)',
            border: `1px solid ${focused ? 'var(--accent)' : 'var(--line-2)'}`,
            borderRadius: 'var(--radius-s)',
            padding: '12px 40px 12px 16px',
            color: value ? 'var(--fg)' : 'var(--fg-3)',
            fontSize: 15,
            fontFamily: 'var(--ff-display)',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'border-color 200ms',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            boxSizing: 'border-box',
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {value || placeholder}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              right: 14,
              top: '50%',
              translateY: '-50%',
              color: 'var(--fg-3)',
              pointerEvents: 'none',
              display: 'flex',
            }}
          >
            <ChevronIcon />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -4, scaleY: 0.97 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                right: 0,
                zIndex: 50,
                background: 'var(--bg-2)',
                border: '1px solid var(--accent)',
                borderRadius: 'var(--radius-s)',
                overflow: 'hidden',
                listStyle: 'none',
                padding: '4px 0',
                margin: 0,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                transformOrigin: 'top',
              }}
            >
              {options.map((opt) => {
                const selected = opt === value;
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      onClick={() => { onChange(opt); setOpen(false); }}
                      style={{
                        width: '100%',
                        background: selected ? 'var(--accent)' : 'transparent',
                        color: selected ? 'var(--bg)' : 'var(--fg)',
                        border: 'none',
                        padding: '10px 16px',
                        fontFamily: 'var(--ff-display)',
                        fontSize: 14,
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 8,
                        transition: 'background 120ms, color 120ms',
                      }}
                      onMouseEnter={(e) => {
                        if (!selected) e.currentTarget.style.background = 'var(--bg-3)';
                      }}
                      onMouseLeave={(e) => {
                        if (!selected) e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {opt}
                      {selected && (
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function InputField({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder = '',
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label
        htmlFor={id}
        className="mono"
        style={{ color: 'var(--fg-3)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}
      >
        {label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: 'var(--bg-2)',
          border: '1px solid var(--line-2)',
          borderRadius: 'var(--radius-s)',
          padding: '12px 16px',
          color: 'var(--fg)',
          fontSize: 15,
          fontFamily: 'var(--ff-display)',
          outline: 'none',
          transition: 'border-color 200ms',
          width: '100%',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--line-2)'; }}
      />
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  const update = (key: keyof FormData) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingBlock: 'clamp(80px, 12vh, 140px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="bg-grid" />
        <div className="scan" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <motion.p className="eyebrow" style={{ marginBottom: 28 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Get a quote
          </motion.p>
          <motion.h1 className="ee-display" style={{ marginBottom: 24 }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
            Get a{' '}<em className="serif" style={{ color: 'var(--accent)' }}>quote.</em>
          </motion.h1>
          <motion.p className="body-lg" style={{ maxWidth: 600 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Fill in the form. Describe the job in your own words. A photo in the message helps. You&rsquo;ll get a written quote — not a phone ballpark — within the working day.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBlock: 'clamp(64px, 10vw, 120px)' }}>
        <div className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(48px, 8vw, 96px)',
            alignItems: 'start',
          }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
            >
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>Direct contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <a
                    href="tel:0226306654"
                    style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--fg)', textDecoration: 'none', padding: '16px 20px', background: 'var(--bg-2)', borderRadius: 'var(--radius-m)', border: '1px solid var(--line)', transition: 'border-color 200ms' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
                  >
                    <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', flexShrink: 0 }}>
                      <PhoneIcon />
                    </span>
                    <div>
                      <div className="mono" style={{ color: 'var(--fg-3)', fontSize: 10, marginBottom: 2 }}>PHONE</div>
                      <div style={{ fontWeight: 600, fontSize: 18 }}>022 630 6654</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@e-electrical.co.nz"
                    style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--fg)', textDecoration: 'none', padding: '16px 20px', background: 'var(--bg-2)', borderRadius: 'var(--radius-m)', border: '1px solid var(--line)', transition: 'border-color 200ms' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
                  >
                    <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-2)', flexShrink: 0 }}>
                      <MailIcon />
                    </span>
                    <div>
                      <div className="mono" style={{ color: 'var(--fg-3)', fontSize: 10, marginBottom: 2 }}>EMAIL</div>
                      <div style={{ fontWeight: 500, fontSize: 15 }}>hello@e-electrical.co.nz</div>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/p/Earthed-Electrical-Services-61577926974943/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--fg)', textDecoration: 'none', padding: '16px 20px', background: 'var(--bg-2)', borderRadius: 'var(--radius-m)', border: '1px solid var(--line)', transition: 'border-color 200ms' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--line)')}
                  >
                    <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-2)', flexShrink: 0 }}>
                      <FbIcon />
                    </span>
                    <div>
                      <div className="mono" style={{ color: 'var(--fg-3)', fontSize: 10, marginBottom: 2 }}>FACEBOOK</div>
                      <div style={{ fontWeight: 500, fontSize: 15 }}>Earthed Electrical Services</div>
                    </div>
                  </a>
                </div>
              </div>

              <div style={{ padding: '20px 24px', background: 'var(--bg-2)', borderRadius: 'var(--radius-m)', border: '1px solid var(--line)' }}>
                <p className="eyebrow" style={{ marginBottom: 16 }}>Hours</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Mon – Fri', val: '7:00 am – 5:30 pm' },
                    { label: 'Saturday', val: 'By arrangement' },
                    { label: 'After-hours', val: 'Emergency fault call-outs' },
                  ].map((row) => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14 }}>
                      <span className="mono" style={{ color: 'var(--fg-3)' }}>{row.label}</span>
                      <span style={{ color: 'var(--fg)', fontWeight: 500 }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Based</p>
                <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6 }}>
                  Malcolm Avenue, Beckenham<br />
                  Christchurch, Canterbury<br />
                  New Zealand
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {status === 'success' ? (
                <div style={{
                  padding: 'clamp(40px, 6vw, 80px)',
                  textAlign: 'center',
                  background: 'var(--bg-2)',
                  borderRadius: 'var(--radius-m)',
                  border: '1px solid var(--line)',
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--bg)', fontSize: 22 }}>
                    ✓
                  </div>
                  <h3 className="ee-h3" style={{ marginBottom: 12 }}>Got it. Thank you.</h3>
                  <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
                    David will be in touch with a written quote by end of the working day. If it&rsquo;s urgent, call 022 630 6654.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', suburb: '', service: '', message: '' }); }}
                    className="mono"
                    style={{ color: 'var(--accent)', fontSize: 11, cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: 'var(--bg-2)',
                    borderRadius: 'var(--radius-m)',
                    border: '1px solid var(--line)',
                    padding: 'clamp(24px, 4vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                  }}
                >
                  <p className="eyebrow" style={{ marginBottom: 4 }}>Request a quote</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <InputField label="Name" id="name" value={form.name} onChange={update('name')} required placeholder="Jane Smith" />
                    <InputField label="Phone" id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="02X XXX XXXX" />
                  </div>

                  <InputField label="Email" id="email" type="email" value={form.email} onChange={update('email')} required placeholder="jane@example.co.nz" />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <InputField label="Suburb" id="suburb" value={form.suburb} onChange={update('suburb')} required placeholder="e.g. Beckenham" />
                    <SelectField
                      label="Service type"
                      id="service"
                      value={form.service}
                      onChange={update('service')}
                      options={SERVICE_OPTIONS}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label htmlFor="message" className="mono" style={{ color: 'var(--fg-3)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      Describe the job <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      value={form.message}
                      onChange={(e) => update('message')(e.target.value)}
                      rows={5}
                      placeholder="Describe what's happening, your suburb, and attach a photo if possible. e.g. 'Kitchen lights keep tripping the RCD after 6pm. Single storey 1970s house in Beckenham.'"
                      style={{
                        background: 'var(--bg-2)',
                        border: '1px solid var(--line-2)',
                        borderRadius: 'var(--radius-s)',
                        padding: '12px 16px',
                        color: 'var(--fg)',
                        fontSize: 15,
                        fontFamily: 'var(--ff-display)',
                        outline: 'none',
                        resize: 'vertical',
                        lineHeight: 1.6,
                        transition: 'border-color 200ms',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--line-2)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                      background: status === 'submitting' ? 'var(--fg-3)' : 'var(--accent)',
                      color: 'var(--bg)',
                      border: 'none',
                      borderRadius: 100,
                      padding: '14px 32px',
                      fontFamily: 'var(--ff-display)',
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: status === 'submitting' ? 'wait' : 'pointer',
                      transition: 'background 200ms',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send request →'}
                  </button>

                  <p className="mono" style={{ color: 'var(--fg-3)', fontSize: 10, lineHeight: 1.7 }}>
                    This form goes directly to David. Response within the working day. No third-party CRM, no auto-reply bot.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 8.5 6a2 2 0 0 0 3 0L22 7" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
