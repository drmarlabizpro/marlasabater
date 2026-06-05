export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 'var(--gut)', background: 'var(--cream)', fontFamily: 'var(--serif)' }}>
      <p style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '20px' }}>404</p>
      <h1 style={{ fontWeight: 400, fontSize: 'clamp(40px,8vw,96px)', lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--ink)' }}>Page not <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>found.</em></h1>
      <p style={{ fontStyle: 'italic', fontSize: 'clamp(17px,2vw,22px)', color: 'var(--ink-70)', marginTop: '24px' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ marginTop: '36px', display: 'inline-block', border: '1px solid var(--bordeaux)', color: 'var(--bordeaux)', padding: '14px 28px', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>Return Home</a>
    </main>
  )
}
