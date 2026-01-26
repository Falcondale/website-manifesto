import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import '../styles/landing.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">FALCONDALE</div>
          <nav className="nav-links">
            <a href="mailto:contact@falcondale.pro" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">
            Quantum Intelligence.<br />
            Real-World Impact.
          </h1>
          <p className="hero-subtitle">
            Applied Quantum Machine Learning & Optimization
          </p>
        </section>

        {/* Contact Info Bar */}
        <section className="contact-bar">
          <div className="contact-item">
            <span className="contact-label">Contact</span>
            <a href="mailto:contact@falcondale.pro" className="contact-link">
              contact@falcondale.pro
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Hiring</span>
            <a href="mailto:hiring@falcondale.pro" className="contact-link">
              hiring@falcondale.pro
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Locations</span>
            <span className="contact-value">Delaware + Bilbao</span>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-header">
            <h2 className="section-title">Falcondale</h2>
          </div>
          
          <div className="about-content">
            <p className="about-text lead-text">
              We dedicate our expertise to discovering quantum methods that deliver 
              tangible advantages across industries—from advanced predictive 
              classification models to complex optimization challenges.
            </p>

            <p className="about-text">
              Our approach is rooted in rigorous analysis. We carefully evaluate 
              problem complexity and scale to determine where quantum computing 
              can truly excel. If classical methods already perform well for your 
              use case, we'll be the first to tell you.
            </p>

            <p className="about-text">
              Our philosophy centers on identifying problems where quantum 
              encoding and solving—whether for speed, performance, or both—can 
              be efficiently achieved with today's software and hardware stack.
            </p>

            <div className="highlight-box">
              <div className="highlight-number">50,000+</div>
              <div className="highlight-text">
                Lines of bespoke code developing unique methodologies to enhance 
                performance across industry-standard challenges.
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h3 className="cta-title">Ready to explore quantum advantage?</h3>
          <div className="cta-links">
            <a href="mailto:contact@falcondale.pro" className="cta-link">
              <span>Get in Touch</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="mailto:hiring@falcondale.pro" className="cta-link secondary">
              <span>Join Our Team</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">Falcondale</div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Falcondale. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
