"use client";

import { useState } from "react";

const FIELDS = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
];

const labelStyle = {
  fontFamily: "var(--sans)",
  fontWeight: 600,
  fontSize: 10,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--ink-45)",
  display: "block",
  marginBottom: 6,
};

const inputStyle = {
  width: "100%",
  border: "1px solid var(--ink-15)",
  background: "var(--paper)",
  padding: 12,
  fontFamily: "var(--sans)",
  fontSize: 14,
  color: "var(--ink)",
  outline: "none",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontSize: "clamp(20px, 2.4vw, 28px)",
          color: "var(--ink)",
          background: "var(--paper)",
          border: "1px solid var(--ink-15)",
          padding: 32,
        }}
      >
        Message sent. We will be in touch shortly.
      </div>
    );
  }

  return (
    <div>
      <style>{`.form-field:focus { border-color: var(--gold) !important; }`}</style>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {FIELDS.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} style={labelStyle}>
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              className="form-field"
              style={inputStyle}
            />
          </div>
        ))}
        <div>
          <label htmlFor="message" style={labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-field"
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "var(--bordeaux)",
            color: "var(--cream)",
            border: "none",
            padding: "14px 32px",
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
