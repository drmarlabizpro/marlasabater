'use client'

import { useState } from 'react'

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(401) 000-0000' },
]

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontWeight: 600,
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--ink-45)',
  display: 'block',
  marginBottom: 6,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid var(--ink-15)',
  background: 'var(--paper)',
  padding: '12px 14px',
  fontFamily: 'var(--sans)',
  fontSize: 14,
  color: 'var(--ink)',
  outline: 'none',
  borderRadius: 0,
  appearance: 'none' as const,
  WebkitAppearance: 'none' as const,
  boxSizing: 'border-box' as const,
}

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div style={{
        fontFamily: 'var(--serif)',
        fontStyle: 'italic',
        fontSize: 'clamp(18px, 2.4vw, 24px)',
        color: dark ? 'var(--cream)' : 'var(--ink)',
        background: dark ? 'rgba(242,233,218,0.08)' : 'var(--paper)',
        border: dark ? '1px solid rgba(242,233,218,0.2)' : '1px solid var(--ink-15)',
        padding: 32,
      }}>
        Message sent. We will be in touch shortly.
      </div>
    )
  }

  return (
    <div className={dark ? 'contact-form-dark' : ''}>
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true) }}
        style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
      >
        {FIELDS.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} style={labelStyle} className="form-label">
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              className="form-field"
              style={inputStyle}
              required={f.name === 'name' || f.name === 'email'}
            />
          </div>
        ))}

        <div>
          <label htmlFor="service" style={labelStyle} className="form-label">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="form-field"
            style={inputStyle}
          >
            <option value="" disabled>Select a service</option>
            <option value="accounting-tax">Accounting &amp; Tax</option>
            <option value="payroll">Payroll Services</option>
            <option value="business-advisory">Business Advisory</option>
            <option value="investments-acquisitions">Investments &amp; Acquisitions</option>
            <option value="construction-development">Construction &amp; Development</option>
            <option value="food-hospitality">Food &amp; Hospitality</option>
            <option value="media-talent">Media &amp; Talent</option>
            <option value="hospitality-entertainment">Hospitality &amp; Entertainment</option>
            <option value="automotive">Automotive</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" style={labelStyle} className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your business and what you need..."
            className="form-field"
            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          />
        </div>

        <button
          type="submit"
          className="form-submit"
          style={{
            background: 'var(--bordeaux)',
            color: 'var(--cream)',
            border: 'none',
            padding: '15px 32px',
            fontFamily: 'var(--sans)',
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 0.2s',
            width: '100%',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
