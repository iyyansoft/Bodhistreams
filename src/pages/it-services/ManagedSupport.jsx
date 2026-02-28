import "./ManagedSupport.css";
import {
  Server,
  Cloud,
  ShieldCheck,
  Settings,
  Headphones,
  Sparkles,
} from "lucide-react";

const ManagedSupport = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="ms-hero">
        <div className="ms-hero-left">
          <p className="ms-mini-title">MANAGED IT SUPPORT SERVICES</p>

          <h1 className="ms-hero-heading">
            Reliable Managed <br />
            IT Support & <br />
            Enterprise <br />
            Technology Solutions
          </h1>

          <p className="ms-hero-desc">
            We carry on the business of information technology by designing,
            developing, customizing, testing, implementing, deploying,
            operating, maintaining, supporting, licensing and delivering
            enterprise-grade software solutions and digital platforms.
          </p>

          <div className="ms-hero-buttons">
            <button className="ms-btn-primary">Get Support</button>
            <button className="ms-btn-outline">View IT Services</button>
          </div>
        </div>

        <div className="ms-hero-right">
          <div className="ms-hero-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Managed IT Support"
              className="ms-hero-img"
            />

            <div className="ms-bubble ms-bubble-green">
              24/7 IT monitoring & maintenance
            </div>

            <div className="ms-bubble ms-bubble-white">
              Secure cloud & enterprise system management
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="ms-services">
        <p className="ms-services-label">OUR MANAGED SERVICES</p>

        <h2 className="ms-services-heading">
          Comprehensive IT & Technology Support
        </h2>

        <div className="ms-services-grid">
          <div className="ms-service-card">
            <Server size={50} />
            <h3>Enterprise Applications</h3>
            <p>
              Web-based applications, mobile applications, enterprise
              systems, digital platforms, APIs, and database-driven
              solutions tailored for scalable growth.
            </p>
          </div>

          <div className="ms-service-card">
            <Cloud size={50} />
            <h3>Cloud & Infrastructure</h3>
            <p>
              SaaS, PaaS, IaaS platforms, cloud-based applications,
              infrastructure deployment, and secure hosting environments.
            </p>
          </div>

          <div className="ms-service-card">
            <ShieldCheck size={50} />
            <h3>Security & Compliance</h3>
            <p>
              System integration, cybersecurity frameworks,
              data protection, and enterprise compliance solutions.
            </p>
          </div>
        </div>
      </section>






            {/* ================= SUPPORT INTERFACE ================= */}
      <section className="ms-support">
        <div className="ms-support-left">
          <div className="ms-chat-box">
            <div className="ms-chat-sidebar">
              <Settings size={20} />
              <Headphones size={20} />
              <Server size={20} />
              <Cloud size={20} />
            </div>

            <div className="ms-chat-content">
              <div className="ms-chat-title">
                Managed Support Assistance
              </div>

              <div className="ms-chat-message agent">
                <Sparkles size={18} />
                <p>
                  How can we assist your organization today?
                </p>
              </div>

              <div className="ms-chat-message user">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />
                <p>
                  We need complete managed IT services and cloud support.
                </p>
              </div>

              <div className="ms-chat-message agent">
                <p>
                  Our team provides full lifecycle IT management,
                  monitoring, integration, and ongoing technical support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ms-support-right">
          <h1>Proactive Monitoring & 24/7 Enterprise Support</h1>

          <p>
            From consulting and system integration to automation,
            quality assurance, cloud management, and technical support,
            we ensure secure, scalable, and reliable IT operations.
          </p>
        </div>
      </section>

      {/* ================= DETAILED SUPPORT ================= */}
      <section className="ms-enterprise">
        <div className="ms-enterprise-left">
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
        </div>

        <div className="ms-enterprise-right">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Enterprise IT Management"
            className="ms-enterprise-img"
          />
        </div>
      </section>



      {/* ================= CTA ================= */}
      <section className="ms-cta">
        <div className="ms-cta-content">
          <h2>
            Empower your business with reliable managed IT support
          </h2>

          <div className="ms-cta-buttons">
            <button className="ms-btn-primary">
              Contact Support Team
            </button>

            <button className="ms-btn-outline">
              Explore Managed Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagedSupport;