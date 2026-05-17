import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CloudSpacePage() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <ScrollReveal>
        <div className="label">Infrastructure</div>
        <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>Cloud Space.</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Welcome to our Digital Creation House. Elevate performance through rigorous evaluation and scalable cloud architecture designed for the modern enterprise.
        </p>
      </ScrollReveal>
      
      <div className="bento-grid" style={{ marginTop: '4rem' }}>
        <ScrollReveal delay={0} className="bento-card">
          <h3>Cloud Migration</h3>
          <p>Seamlessly transition your legacy systems to modern, scalable cloud environments with zero data loss and minimal downtime.</p>
        </ScrollReveal>
        <ScrollReveal delay={100} className="bento-card">
          <h3>Cloud Security</h3>
          <p>Enterprise-grade security implementations ensuring your cloud infrastructure meets strict compliance and data protection standards.</p>
        </ScrollReveal>
        <ScrollReveal delay={200} className="bento-card">
          <h3>Optimization</h3>
          <p>Continuous monitoring and resource optimization to ensure your cloud operations remain versatile, pragmatic, and highly cost-effective.</p>
        </ScrollReveal>
      </div>
      
      <ScrollReveal>
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link href="/contact" className="btn btn-primary">Start your cloud journey</Link>
        </div>
      </ScrollReveal>
    </main>
  );
}
