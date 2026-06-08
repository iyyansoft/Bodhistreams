import "./ITPages.css";
import { Home, MessageSquare, Users, BarChart2, Settings, Sparkles } from "lucide-react";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const SoftwareDevelopment = () => {
  return (
    <PageWrapper>
      <section className="zendesk-hero">
        {/* LEFT CONTENT */}
        <AnimatedSection type="slideRight" className="zendesk-left" duration={0.7}>
          <p className="mini-title">IT SERVICES FOR ENTERPRISES</p>
          <h1>
            Deliver powerful 
            software solutions 
            with scalable <br />
            IT infrastructure
          </h1>
          <p className="description">
            We design, develop, deploy and manage web applications,
            mobile platforms, enterprise systems and cloud-based
            solutions. From consulting to automation and managed IT
            services, we help organizations innovate and scale.
          </p>
        </AnimatedSection>

        {/* RIGHT IMAGE */}
        <div className="zendesk-right">
          <AnimatedSection type="slideLeft" className="image-wrapper-sofrtware" duration={0.7}>
            <img
              src="https://www.libertycenterone.com/wp-content/uploads/2024/11/img-blog-scalable-IT-strategies-and-solutions-for-tech-startups.webp"
              alt="Developer Coding"
              className="hero-image"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= FEATURE SECTION BELOW ================= */}
      <section className="sd-section">
        <AnimatedSection type="fade">
          <p className="sd-mini-title">
            HOW SOFTWARE DEVELOPMENT WORKS
          </p>
          <h2 className="sd-main-title">
            Smart & Scalable Digital Solutions
          </h2>
        </AnimatedSection>

        <div className="sd-grid">
          <AnimatedSection type="slideUp" delay={0.1} className="sd-card">
            <div className="sd-icon">💻</div>
            <h3>Custom Application Development</h3>
            <p>
              Design and develop web, mobile and enterprise
              applications tailored to business needs with secure,
              scalable architecture.
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideUp" delay={0.2} className="sd-card">
            <div className="sd-icon">☁️</div>
            <h3>Cloud & SaaS Platforms</h3>
            <p>
              Build SaaS, PaaS and IaaS systems with API integrations,
              cloud deployment and optimized database performance.
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideUp" delay={0.3} className="sd-card">
            <div className="sd-icon">🛠️</div>
            <h3>IT Consulting & Managed Services</h3>
            <p>
              Provide system integration, digital transformation,
              automation and ongoing technical support globally.
            </p>
          </AnimatedSection>
        </div>
      </section >

      {/* ======================================================================================== */}
      <section className="ai-section">
        {/* LEFT SIDE */}
        <AnimatedSection type="slideRight" className="ai-left" duration={0.7}>
          <p className="ai-label">INFORMATION TECHNOLOGY SERVICES</p>
          <h1>
            End-to-End Software <br />
            Development & Digital <br />
            Transformation Solutions
          </h1>
          <p className="ai-description">
            At BodhiStreams Convergence, we design, develop, and deliver 
            scalable software solutions tailored for institutions and enterprises. 
            From web and mobile applications to enterprise systems and cloud platforms, 
            we ensure seamless integration, performance, and long-term reliability.
            
            We don’t just build software — we create digital ecosystems that 
            drive innovation, automation, and business growth.
          </p>
          <a href="#" className="ai-link">
            Explore our IT capabilities →
          </a>
        </AnimatedSection>

        {/* RIGHT SIDE CARD */}
        <div className="ai-card-wrapper">
          <AnimatedSection type="slideLeft" duration={0.7}>
            <div className="ai-new-card">
              {/* TOP IMAGE */}
              <div className="ai-image">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                  alt="Software Development"
                />
              </div>
              {/* CONTENT */}
              <div className="ai-content">
                <h4>Digital Solutions Suite</h4>
                <ul>
                  <li>✔ Custom Software Development</li>
                  <li>✔ Cloud & SaaS Platforms</li>
                  <li>✔ System Integration</li>
                  <li>✔ Automation & AI Solutions</li>
                </ul>
                <button className="ai-btn">
                  Explore Solutions
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ======================================================================================== */}
      <section className="impact-with-image">
        {/* LEFT IMAGE */}
        <div className="impact-image">
          <AnimatedSection type="slideRight" duration={0.7}>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Technology"
            />
          </AnimatedSection>
        </div>

        {/* RIGHT CONTENT */}
        <AnimatedSection type="slideLeft" className="impact-content" duration={0.7}>
          <p className="impact-label">
            ENTERPRISE TECHNOLOGY SOLUTIONS
          </p>
          <h1>
            Delivering scalable systems 
            for modern digital operations
          </h1>
          <p>
            We help organizations build strong digital foundations by developing
            high-performance applications and integrating them with reliable IT infrastructure.
          </p>
          <p>
            Our solutions focus on efficiency, system connectivity, and operational stability—
            ensuring businesses can adapt, scale, and perform in a rapidly evolving digital environment.
          </p>
          <a href="#" className="impact-link">
            Discover Technology Services →
          </a>
        </AnimatedSection>
      </section>

      {/* ======================================================================================== */}
      <section className="resources-section">
        <AnimatedSection type="fade">
          <h2 className="resources-title">
            IT Service Resources
          </h2>
        </AnimatedSection>

        <div className="resources-grid">
          <AnimatedSection type="scale" delay={0.1} className="resource-card">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Software Development"
              />
            </div>
            <div className="resource-content">
              <span className="resource-tag">SOFTWARE DEVELOPMENT</span>
              <h3>
                Design, Development & Deployment of Scalable Web, Mobile and Enterprise Applications
              </h3>
            </div>
          </AnimatedSection>

          <AnimatedSection type="scale" delay={0.2} className="resource-card">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
                alt="Cloud Platforms"
              />
            </div>
            <div className="resource-content">
              <span className="resource-tag">CLOUD & DIGITAL PLATFORMS</span>
              <h3>
                SaaS, PaaS & IaaS Based Application Development with Scalable Cloud Integration
              </h3>
            </div>
          </AnimatedSection>

          <AnimatedSection type="scale" delay={0.3} className="resource-card">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="IT Services"
              />
            </div>
            <div className="resource-content">
              <span className="resource-tag">IT & SOFTWARE SERVICES</span>
              <h3>
                System Integration, Automation, Testing and Managed IT Support for Applications
              </h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ======================================================================================== */}
      <section className="cta-section">
        <AnimatedSection type="slideUp" className="cta-content">
          <h2>
            Elevate your software <br />
            development & IT services
          </h2>
          <div className="cta-buttons">
            <button className="cta-primary">
              Contact Sales
            </button>
            <button className="cta-outline">
              View IT Services
            </button>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
};

export default SoftwareDevelopment;