import ScrollReveal from "@/components/ScrollReveal";

export default function CompanyPage() {
  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        <ScrollReveal>
          <div className="label">The Team</div>
          <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>About Nexabean.</h1>
        </ScrollReveal>
        
        <div className="feature-row" style={{ marginTop: '2rem', marginBottom: '6rem' }}>
          <ScrollReveal>
            <div className="feature-text">
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
                At Nexabean, we strive to solve complex problems by leveraging the most cutting-edge tech solutions. We identify the precise technology required for your specific needs and implement it in strict accordance with your technological goals.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                Customer satisfaction is at the heart of everything we do. We take immense pride in delivering exceptional, high-availability solutions to our valued enterprise clients. We view your operational success as the absolute proof of our commitment to engineering excellence.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Headquarters</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                2601 Frisco Wood Dr<br />
                Fort Worth, TX 76244<br />
                USA
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="section section-border">
        <div className="container">
          <ScrollReveal>
            <div className="label">Our Philosophy</div>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '3rem' }}>Core Values.</h2>
          </ScrollReveal>
          <div className="bento-grid">
            <ScrollReveal delay={0} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <h3>Engineering Excellence</h3>
              <p>We believe in building robust, scalable infrastructure that stands the test of time, refusing to compromise on quality or performance.</p>
            </ScrollReveal>
            <ScrollReveal delay={100} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
              <h3>Client Centricity</h3>
              <p>Your success is our success. We partner closely with our clients to ensure every solution directly addresses their unique operational challenges.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
              <h3>Continuous Innovation</h3>
              <p>Technology moves fast, and so do we. We constantly evaluate and integrate the latest advancements to keep you ahead of the curve.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
