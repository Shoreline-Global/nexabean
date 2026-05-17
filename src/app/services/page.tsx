import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <ScrollReveal>
        <div className="label">Capabilities</div>
        <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>Our Services.</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Comprehensive solutions from Advisory Planning to Enterprise Transformation, helping you align IT strategies with your business objectives.
        </p>
      </ScrollReveal>
      
      <div className="bento-grid" style={{ marginTop: '4rem' }}>
        <ScrollReveal delay={0} className="bento-card large">
          <h3>Advisory Services</h3>
          <p>Unlock strategic insights and gain a competitive edge. We collaborate to align IT strategies, assess risks, and develop comprehensive plans that leverage emerging technologies to drive your business forward.</p>
        </ScrollReveal>

        <ScrollReveal delay={100} className="bento-card">
          <h3>Implementations</h3>
          <p>Flawless execution of custom technical solutions, ensuring reliability, peak performance, and enterprise-grade security.</p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="bento-card">
          <h3>Managed Services</h3>
          <p>Continuous support and proactive optimization for your infrastructure. Versatile, pragmatic, and cost-effective daily management.</p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="bento-card">
          <h3>App Development</h3>
          <p>Tailored applications built to accelerate complex workflows and bring intelligent automation to your daily enterprise operations.</p>
        </ScrollReveal>

        <ScrollReveal delay={250} className="bento-card">
          <h3>Integrations</h3>
          <p>Seamlessly integrate your platforms with your existing toolchain to ensure data flows accurately and securely across your entire business ecosystem.</p>
        </ScrollReveal>
      </div>
    </main>
  );
}
