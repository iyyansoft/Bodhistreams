import "./ManagedSupport.css";
import {
  Server,
  Cloud,
  ShieldCheck,
  Settings,
  Headphones,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const ManagedSupport = () => {
  return (
    <PageWrapper>
      {/* ================= HERO ================= */}
      <section className="it-support-section">
        {/* LEFT IMAGE */}
        <div className="it-support-image-side">
          <AnimatedSection type="slideRight" className="it-support-image-card" duration={0.7}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
              alt="IT Support"
              className="it-support-image"
            />
            <div className="it-support-status">
              <span className="it-support-dot"></span>
              Systems Running Smoothly
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT CONTENT */}
        <AnimatedSection type="slideLeft" className="it-support-content" duration={0.7}>
          <p className="it-support-label">
            MANAGED IT SUPPORT
          </p>
          <h1 className="it-support-heading">
            Reliable support for 
            secure and scalable 
            business operations
          </h1>
          <p className="it-support-description">
            We help organizations maintain stable, secure, 
            and high-performing IT systems with continuous 
            monitoring and technical support.
          </p>

          {/* POINTS */}
          <div className="it-support-points">
            <div className="it-support-point">✔ 24/7 Monitoring</div>
            <div className="it-support-point">✔ Fast Issue Resolution</div>
            <div className="it-support-point">✔ Secure Infrastructure</div>
          </div>

        </AnimatedSection>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="ms-dark-section">
        <div className="ms-dark-grid">
          {/* CARD 1 */}
          <AnimatedSection type="slideUp" delay={0.1} className="ms-dark-card">
            <div className="ms-dark-icon">
              <Server size={28} />
            </div>
            <p className="ms-dark-label">APPLICATION SUPPORT</p>
            <h3>
              Reliable application monitoring & maintenance
            </h3>
            <p>
              Continuous monitoring, maintenance, and support for web, mobile 
              and enterprise applications to ensure stability, performance, 
              and minimal downtime.
            </p>
          </AnimatedSection>

          {/* CARD 2 */}
          <AnimatedSection type="slideUp" delay={0.2} className="ms-dark-card">
            <div className="ms-dark-icon">
              <ShieldCheck size={28} />
            </div>
            <p className="ms-dark-label">SECURITY & SUPPORT</p>
            <h3>
              Secure and optimized IT operations
            </h3>
            <p>
              Proactive system monitoring, cybersecurity protection, issue 
              resolution, and technical support for reliable and secure 
              IT environments.
            </p>
          </AnimatedSection>

          {/* CARD 3 */}
          <AnimatedSection type="slideUp" delay={0.3} className="ms-dark-card">
            <div className="ms-dark-icon">
              <Cloud size={28} />
            </div>
            <p className="ms-dark-label">CLOUD MANAGEMENT</p>
            <h3>
              Scalable cloud & infrastructure solutions
            </h3>
            <p>
              Manage cloud platforms, servers, and infrastructure with 
              performance optimization, secure deployment, and scalable 
              environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= DETAILED SUPPORT ================= */}
      <section className="ms-enterprise">
        <AnimatedSection type="slideRight" className="ms-enterprise-left" duration={0.7}>
          <p className="ms-enterprise-label">
            END-TO-END MANAGED IT SERVICES
          </p>
          <h1 className="ms-enterprise-heading">
            Complete Technology Lifecycle Management
          </h1>
          <p className="ms-enterprise-desc">
            To design, develop, customize, test, implement, deploy,
            operate, maintain, support, license, market and manage
            computer software products, applications, platforms,
            systems and digital technology-enabled solutions.
          </p>
          <p className="ms-enterprise-desc">
            We provide information technology consulting, advisory
            services, system analysis and design, system integration,
            software testing and quality assurance, digital
            transformation, automation services, managed IT services,
            data processing, technical support, maintenance,
            training, and IT-enabled services to individuals,
            firms, companies, government bodies and institutions
            in India and abroad.
          </p>
        </AnimatedSection>

        <div className="ms-enterprise-right">
          <AnimatedSection type="slideLeft" duration={0.7}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Enterprise IT Management"
              className="ms-enterprise-img"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="ms-support">
        <div className="ms-support-left">
          <AnimatedSection type="slideRight" className="ms-support-glow-card" duration={0.7}>
            <h3>Managed IT Support Services</h3>
            <ul>
              <li>✔ 24/7 Monitoring & Maintenance</li>
              <li>✔ Cloud Infrastructure Management</li>
              <li>✔ Enterprise Application Support</li>
              <li>✔ Network & Server Management</li>
              <li>✔ Technical Support & Issue Resolution</li>
            </ul>
            <div className="ms-support-stats">
              <div>
                <h4>99.9%</h4>
                <p>Uptime</p>
              </div>
              <div>
                <h4>24/7</h4>
                <p>Support</p>
              </div>
              <div>
                <h4>500+</h4>
                <p>Systems</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection type="slideLeft" className="ms-support-right" duration={0.7}>
          <h1>
            Managed IT & Technical Support <br />
            for Reliable Enterprise Operations
          </h1>
          <p>
            BodhiStreams Convergence delivers end-to-end managed IT services 
            including monitoring, maintenance, cloud infrastructure management, 
            system integration, and technical support to ensure secure and 
            scalable IT environments.
          </p>
        </AnimatedSection>
      </section>

      {/* ================= PREMIUM PERFORMANCE ================= */}
      <section className="ms-premium">
        <AnimatedSection type="fade">
          <h2 className="ms-premium-title">
            Reliable IT Support & System Performance
          </h2>
        </AnimatedSection>

        <div className="ms-premium-grid">
          <AnimatedSection type="scale" delay={0.1} className="ms-premium-card">
            <h1>99.9%</h1>
            <h3>System Uptime</h3>
            <p>
              Continuous monitoring and maintenance to ensure maximum
              availability and minimal downtime.
            </p>
          </AnimatedSection>

          <AnimatedSection type="scale" delay={0.2} className="ms-premium-card highlight">
            <h1>24/7</h1>
            <h3>Monitoring & Support</h3>
            <p>
              Round-the-clock technical support and proactive issue
              resolution for all IT systems.
            </p>
          </AnimatedSection>

          <AnimatedSection type="scale" delay={0.3} className="ms-premium-card">
            <h1>500+</h1>
            <h3>Systems Managed</h3>
            <p>
              Managing enterprise applications, cloud platforms,
              and infrastructure environments at scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="managed-cta-section">
        <AnimatedSection type="scale" className="managed-cta-container">
          <p className="managed-cta-tag">
            24/7 MANAGED IT SUPPORT
          </p>
          <h2 className="managed-cta-title">
            Empower your business with 
            reliable managed IT support
          </h2>
          <p className="managed-cta-text">
            Ensure secure, stable, and high-performing 
            systems with continuous monitoring and 
            expert technical assistance.
          </p>
          <div className="managed-cta-actions">
            <button className="managed-primary-btn">
              Contact Support Team
            </button>
            <button className="managed-outline-btn">
              Explore Managed Services
            </button>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
};

export default ManagedSupport;