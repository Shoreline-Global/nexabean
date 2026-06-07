import ScrollReveal from "@/components/ScrollReveal";

export default function CompanyPage() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <ScrollReveal>
        <div className="label">The Team</div>
        <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>About Nexabean.</h1>
      </ScrollReveal>
      
      <div className="feature-row" style={{ marginTop: '2rem' }}>
        <ScrollReveal>
          <div className="feature-text">
            <p>
              At Nexabean, we strive to solve complex problems by leveraging the most cutting-edge tech solutions. We identify the precise technology required for your specific needs and implement it in strict accordance with your technological goals.
            </p>
            <p>
              Customer satisfaction is at the heart of everything we do. We take immense pride in delivering exceptional, high-availability solutions to our valued enterprise clients. We view your operational success as the absolute proof of our commitment to engineering excellence.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative', height: '250px', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img src="/nexabean-logo.jpeg" alt="NexaBean Logo" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
