import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const supportSlides = [
  {
    image: "/support1.png",
    status: "Systems Running Smoothly",
    title: "PROACTIVE MONITORING",
    dotColor: "#8cc63f"
  },
  {
    image: "/support2.png",
    status: "Network Protected & Secure",
    title: "INFRASTRUCTURE SECURITY",
    dotColor: "#00f0ff"
  },
  {
    image: "/support3.png",
    status: "Cloud Infrastructure Scaled",
    title: "ENTERPRISE SUPPORT",
    dotColor: "#ff9900"
  }
];

const ManagedSupport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % supportSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      {/* ================= HERO ================= */}
      <section className="it-support-section">
        {/* LEFT IMAGE */}
        <div className="it-support-image-side">
          <div className="premium-image-container">
            {/* Concentric Decorative Rings */}
            <div className="deco-ring ring-1"></div>
            <div className="deco-ring ring-2"></div>
            <div className="deco-ring ring-3"></div>

            <div className="wavy-border-frame">
              <div className="it-support-image-card">
                <AnimatePresence>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="slide-wrapper absolute-slide"
                  >
                    <img
                      src={supportSlides[currentSlide].image}
                      alt="IT Support Slide"
                      className="it-support-image"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Title overlay in the bottom-right corner */}
                <div className="slide-title-badge">
                  <span
                    className="it-support-dot"
                    style={{
                      backgroundColor: supportSlides[currentSlide].dotColor,
                      boxShadow: `0 0 10px ${supportSlides[currentSlide].dotColor}`
                    }}
                  ></span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentSlide}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {supportSlides[currentSlide].title}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Dots Indicator */}
                <div className="slide-dots">
                  {supportSlides.map((_, idx) => (
                    <button
                      key={idx}
                      className={`slide-dot ${idx === currentSlide ? "active" : ""}`}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
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

        <div className="ms-support-right">
          <AnimatedSection type="slideLeft" className="ms-support-right-content" duration={0.7}>
            <p className="ms-support-tag">
              ENTERPRISE-GRADE SERVICE
            </p>
            <h1>
              Stable and secure IT solutions
            </h1>
            <p>
              We provide information technology consulting, advisory services,
              system analysis and design, system integration, software testing
              and quality assurance, digital transformation, automation, managed
              IT services, and 24/7 technical support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= PREMIUM METRICS ================= */}
      <section className="ms-premium-metrics">
        <h2 className="ms-premium-title">
          Scale your business operations
        </h2>
        <div className="ms-premium-grid">
          {/* STAT 1 */}
          <AnimatedSection type="scale" delay={0.1} className="ms-premium-card">
            <h1>24/7</h1>
            <h3>Active Monitoring</h3>
            <p>
              Continuous security monitoring, server health checks,
              and real-time system performance analysis.
            </p>
          </AnimatedSection>

          {/* STAT 2 */}
          <AnimatedSection type="scale" delay={0.2} className="ms-premium-card">
            <h1>99.9%</h1>
            <h3>Uptime Guaranteed</h3>
            <p>
              Optimizing legacy workflows and cloud resources
              to minimize disruptions and ensure business continuity.
            </p>
          </AnimatedSection>

          {/* STAT 3 */}
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

      {/* Custom Wavy ClipPath Definition */}
      <svg width="0" height="0" style={{ position: "absolute", zIndex: -1 }}>
        <defs>
          <clipPath id="wavy-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.12 0.08 C 0.35 0.18, 0.65 0.18, 0.88 0.08 C 0.94 0.08, 0.92 0.18, 0.92 0.25 C 0.82 0.45, 0.82 0.55, 0.92 0.75 C 0.92 0.82, 0.94 0.92, 0.88 0.92 C 0.65 0.82, 0.35 0.82, 0.12 0.92 C 0.06 0.92, 0.08 0.82, 0.08 0.75 C 0.18 0.55, 0.18 0.45, 0.08 0.25 C 0.08 0.18, 0.06 0.08, 0.12 0.08 Z" />
          </clipPath>
        </defs>
      </svg>
    </PageWrapper>
  );
};

export default ManagedSupport;