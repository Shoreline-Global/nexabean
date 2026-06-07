import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-circuit-container">
          <div className="hero-circuit-grid"></div>
        </div>
        <div className="container">
          <div className="hero-content">

            <ScrollReveal delay={100}>
              <h1>From <span style={{ color: '#016ec7' }}>Next</span> Ideas to Real <span style={{ color: '#024b8a' }}>Outcomes</span>.</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>Experience the power of ServiceNow and transform the way you manage and deliver applications. Scalable, flexible infrastructure for the modern enterprise.</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="hero-actions">
                <Link href="/services" className="btn btn-primary">Explore Services</Link>
                <Link href="/contact" className="btn btn-secondary">Book Consultation</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dark Banner */}
      <section className="section dark-banner">
        <div className="banner-glow"></div>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <ScrollReveal>
            <div className="label">Why Nexabean</div>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>We solve problems with cutting-edge technology.</h2>
            <p>We identify the most suitable technology for your needs and implement it in accordance with your goals. Versatile, pragmatic, and cost-effective infrastructure options.</p>
            <Link href="/company" className="btn btn-white" style={{ marginTop: '2rem' }}>Learn about us</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-border" id="services">
        <div className="container">
          <ScrollReveal>
            <div className="label">Capabilities</div>
            <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Comprehensive IT Solutions</h2>
          </ScrollReveal>
          <div className="bento-grid">
            <ScrollReveal delay={0} className="bento-card large">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <h3>Advisory Services</h3>
              <p>Unlock strategic insights and gain a competitive edge. We collaborate to align IT strategies, assess risks, and develop comprehensive plans that leverage emerging technologies.</p>
            </ScrollReveal>
            <ScrollReveal delay={100} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg></div>
              <h3>Implementations</h3>
              <p>Flawless execution of ServiceNow solutions, ensuring reliability, performance, and enterprise-grade security.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <h3>Managed Services</h3>
              <p>Continuous support and optimization for your infrastructure. Versatile, pragmatic, and cost-effective management.</p>
            </ScrollReveal>
            <ScrollReveal delay={100} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg></div>
              <h3>Cloud Space</h3>
              <p>Your Digital Creation House. Elevate performance through rigorous evaluation and scalable cloud architecture.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="bento-card">
              <div className="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></div>
              <h3>App Development</h3>
              <p>Tailored applications built directly on the ServiceNow platform, accelerating workflows and bringing automation.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" id="servicenow">
        <div className="container">
          <div className="feature-row">
            <ScrollReveal>
              <div className="feature-text">
                <div className="label">The Platform</div>
                <h2 style={{ marginTop: '0.5rem' }}>Your Next Transformation Experts.</h2>
                <p>In the face of complex challenges, effective planning on the ServiceNow platform sets the stage for success. Our planning services provide a roadmap to overcome obstacles.</p>
                <p>Measurement is paramount to understanding performance and driving continuous strategic decision-making.</p>
              </div>
            </ScrollReveal>
            <div className="stats-grid">
              <ScrollReveal delay={0} className="stat"><h4>99.9%</h4><p>Platform Uptime</p></ScrollReveal>
              <ScrollReveal delay={100} className="stat"><h4>24/7</h4><p>Managed Support</p></ScrollReveal>
              <ScrollReveal delay={200} className="stat"><h4>100+</h4><p>Integrations</p></ScrollReveal>
              <ScrollReveal delay={300} className="stat"><h4>Zero</h4><p>Disruption Delivery</p></ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
