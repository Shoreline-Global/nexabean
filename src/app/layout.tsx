import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nexabean | Expert ServiceNow Consultation & Cloud Space",
  description: "Experience the power of ServiceNow. Nexabean provides scalable solutions and flawless implementations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '150px' }}>
              <img src="/header-logo-2.png" alt="NexaBean" style={{ height: '40px', width: 'auto', objectFit: 'contain', transform: 'scale(3.75)', transformOrigin: 'left center', position: 'absolute' }} />
            </Link>
            <div className="navbar-links">
              <Link href="/servicenow">ServiceNow</Link>
              <Link href="/cloudspace">Cloud Space</Link>
              <Link href="/services">Services</Link>
              <Link href="/company">Company</Link>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>Contact Us</Link>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <Link href="/" className="navbar-logo">
                  <span className="logo-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></span>
                  Nexabean
                </Link>
                <p>Your Next Transformation Experts. Driving efficiency through ServiceNow and cutting-edge Cloud solutions.</p>
              </div>
              <div className="footer-links">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/company">About Us</Link></li>
                  <li><Link href="/servicenow">ServiceNow</Link></li>
                  <li><Link href="/cloudspace">Cloud Space</Link></li>
                  <li><Link href="/services">Services</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Get in Touch</h4>
                <ul>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><a href="mailto:info@nexabean.com">info@nexabean.com</a></li>
                  <li><a href="tel:+18176007630">+1-817-600-7630</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Nexabean Inc. All rights reserved.</p>
              <p>Fort Worth, TX, USA</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
