import "./ITConsulting.css";
import {
  Home,
  MessageSquare,
  Users,
  BarChart2,
  Settings,
  Sparkles,
} from "lucide-react";

const ITConsulting = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="itc-hero">
        <div className="itc-hero-left">
          <p className="itc-mini-title">ENTERPRISE IT CONSULTING</p>

          <h1 className="itc-hero-heading">
            Transform your <br />
            IT infrastructure <br />
            with strategic <br />
            system integration
          </h1>

          <p className="itc-hero-desc">
            We provide IT consulting, advisory services, enterprise
            architecture design, system analysis, and seamless
            integration solutions. Our scalable digital strategies help
            organizations modernize infrastructure, optimize
            technology investments, and accelerate innovation.
          </p>

          <div className="itc-hero-buttons">
            <button className="itc-btn-primary">Schedule Consultation</button>
            <button className="itc-btn-outline">Explore Services</button>
          </div>
        </div>

        <div className="itc-hero-right">
          <div className="itc-hero-img-wrapper">
            <img
              src="https://atayacontentops.com/wp-content/uploads/2025/05/blog16.webp"
              alt="IT Consulting"
              className="itc-hero-img"
            />

            <div className="itc-bubble itc-bubble-green">
              Need help modernizing your IT systems?
            </div>

            <div className="itc-bubble itc-bubble-white">
              Yes, we want to integrate cloud & enterprise systems.
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONSULTING FRAMEWORK ================= */}
      <section className="itc-strategy">
        <p className="itc-strategy-label">OUR CONSULTING FRAMEWORK</p>

        <h2 className="itc-strategy-heading">
          Enterprise IT Strategy & Integration
        </h2>

        <div className="itc-strategy-grid">
          <div className="itc-strategy-card">
            <div className="itc-card-icon">✓</div>
            <h3>IT Strategy & Advisory</h3>
            <p>
              Develop enterprise technology roadmaps, governance models,
              risk management strategies, and IT transformation plans
              aligned with long-term business objectives.
            </p>
          </div>

          <div className="itc-strategy-card">
            <div className="itc-card-icon">⚙</div>
            <h3>System Integration</h3>
            <p>
              Integrate ERP systems, APIs, enterprise applications,
              cloud platforms (SaaS, PaaS, IaaS), and databases into
              secure, scalable ecosystems.
            </p>
          </div>

          <div className="itc-strategy-card">
            <div className="itc-card-icon">🚀</div>
            <h3>Digital Transformation</h3>
            <p>
              Modernize legacy systems with automation, cloud migration,
              DevOps practices, cybersecurity frameworks, and digital
              workflow optimization.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES ================= */}
      <section className="itc-enterprise">
        <div className="itc-enterprise-left">
          <p className="itc-enterprise-label">
            IT CONSULTING & SYSTEM INTEGRATION
          </p>

          <h1 className="itc-enterprise-heading">
            Comprehensive enterprise technology consulting
          </h1>

          <p className="itc-enterprise-desc">
            To carry on the business of information technology and to
            design, develop, customize, test, implement, deploy,
            operate, maintain, support, license, market, and otherwise
            deal in computer software, software products, applications,
            platforms, systems, and solutions of all kinds.
          </p>

          <p className="itc-enterprise-desc">
            We provide information technology consulting, advisory
            services, system analysis and design, system integration,
            software testing and quality assurance, digital
            transformation services, automation services, managed IT
            services, data processing services, technical support,
            maintenance services, and IT-enabled solutions to
            organizations in India and abroad.
          </p>
        </div>

        <div className="itc-enterprise-right">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Enterprise Consulting"
            className="itc-enterprise-img"
          />
        </div>
      </section>

      {/* ================= IT SUPPORT UI ================= */}
      <section className="itc-support">
        <div className="itc-support-left">
          <div className="itc-chat-box">
            <div className="itc-chat-sidebar">
              <Home size={20} />
              <MessageSquare size={20} />
              <Users size={20} />
              <BarChart2 size={20} />
              <Settings size={20} />
            </div>

            <div className="itc-chat-content">
              <div className="itc-chat-title">
                IT Consulting Support
              </div>

              <div className="itc-chat-message agent">
                <Sparkles size={18} />
                <p>
                  How can we assist with your IT modernization strategy?
                </p>
              </div>

              <div className="itc-chat-message user">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />
                <p>
                  We need cloud migration and enterprise system integration.
                </p>
              </div>

              <div className="itc-chat-message agent">
                <p>
                  Our experts will analyze your infrastructure,
                  design scalable architecture, and execute secure
                  enterprise integration strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="itc-support-right">
          <h1>Optimize your IT infrastructure & integration strategy</h1>

          <p>
            From consulting and architecture planning to integration,
            automation, and managed IT services, we deliver secure,
            scalable enterprise IT solutions tailored to your business.
          </p>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="itc-resources">
        <h2 className="itc-resources-title">
          IT Consulting Insights & Resources
        </h2>

        <div className="itc-resources-grid">
          <div className="itc-resource-card">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Enterprise Strategy"
            />
            <h3>Enterprise Architecture Planning</h3>
          </div>

          <div className="itc-resource-card">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
              alt="Cloud Migration"
            />
            <h3>Cloud Migration & Hybrid Integration</h3>
          </div>

          <div className="itc-resource-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="IT Governance"
            />
            <h3>IT Governance & Compliance Frameworks</h3>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="itc-cta">
        <div className="itc-cta-content">
          <h2>
            Modernize your enterprise IT infrastructure today
          </h2>

          <div className="itc-cta-buttons">
            <button className="itc-btn-primary">
              Contact IT Experts
            </button>

            <button className="itc-btn-outline">
              View Consulting Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITConsulting;