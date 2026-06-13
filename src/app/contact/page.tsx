import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '8rem', minHeight: '80vh', paddingBottom: '4rem' }} className="container">
      <ScrollReveal>
        <div className="label">Get in Touch</div>
        <h1 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: '2rem' }}>Contact Us.</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Ready to optimize your operations? Reach out to our team of transformation experts today.
        </p>
      </ScrollReveal>
      
      <div className="feature-row" style={{ marginTop: '4rem', alignItems: 'flex-start' }}>
        <ScrollReveal className="bento-card large">
          <h3>Send us a message</h3>
          <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" name="First Name" placeholder="First Name" required style={{ flex: 1, padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', fontSize: '0.875rem' }} />
              <input type="text" name="Last Name" placeholder="Last Name" required style={{ flex: 1, padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', fontSize: '0.875rem' }} />
            </div>
            <input type="email" name="Email" placeholder="Work Email" required style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', fontSize: '0.875rem' }} />
            <textarea name="Message" placeholder="How can we help you?" rows={5} required style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical', fontFamily: 'inherit', fontSize: '0.875rem' }}></textarea>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit Message</button>
          </form>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div className="label">Email</div>
              <p style={{ marginTop: '0.5rem', fontSize: '1.125rem' }}>info@nexabean.com</p>
            </div>
            <div>
              <div className="label">Phone</div>
              <p style={{ marginTop: '0.5rem', fontSize: '1.125rem' }}>+1-817-600-7630</p>
            </div>
            <div>
              <div className="label">Office</div>
              <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                2601 Frisco Wood Dr, Fort Worth, TX 76244
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
