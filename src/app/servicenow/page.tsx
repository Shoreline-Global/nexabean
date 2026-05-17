import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceNowPage() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <ScrollReveal>
        <div className="label">Platform</div>
        <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>ServiceNow Solutions.</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          In the face of complex challenges, effective planning on the ServiceNow platform sets the stage for success. We provide the roadmap to overcome obstacles and achieve your goals.
        </p>
      </ScrollReveal>
      
      <div className="feature-row" style={{ marginTop: '4rem' }}>
        <ScrollReveal>
          <div className="feature-text">
            <h2>Transform the way you manage applications.</h2>
            <p>We provide scalable, flexible infrastructure that revolutionizes your enterprise operations. From initial deployment to enterprise-wide adoption, we handle every technical detail.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Consult with us</Link>
          </div>
        </ScrollReveal>
        <div className="stats-grid">
          <ScrollReveal delay={0} className="stat">
            <h4>99.9%</h4>
            <p>Platform Uptime</p>
          </ScrollReveal>
          <ScrollReveal delay={100} className="stat">
            <h4>24/7</h4>
            <p>Managed Support</p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="stat">
            <h4>100+</h4>
            <p>Integrations</p>
          </ScrollReveal>
          <ScrollReveal delay={300} className="stat">
            <h4>Zero</h4>
            <p>Disruption</p>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
