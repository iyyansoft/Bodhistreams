import "./DigitalTransformation.css";
import {
  Cpu,
  Cloud,
  Shield,
  BarChart2,
  Settings,
  Sparkles,
} from "lucide-react";

const DigitalTransformation = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="dt-hero">
        <div className="dt-hero-left">
          <p className="dt-mini-title">DIGITAL TRANSFORMATION SERVICES</p>

          <h1 className="dt-hero-heading">
            Accelerate your <br />
            digital evolution <br />
            with intelligent <br />
            transformation strategies
          </h1>

          <p className="dt-hero-desc">
            We empower enterprises to embrace digital transformation
            through cloud modernization, process automation,
            AI integration, and scalable technology ecosystems.
            Our data-driven strategies help organizations innovate
            faster and stay competitive in the digital era.
          </p>

          <div className="dt-hero-buttons">
            <button className="dt-btn-primary">Start Transformation</button>
            <button className="dt-btn-outline">Explore Solutions</button>
          </div>
        </div>

        <div className="dt-hero-right">
          <div className="dt-hero-img-wrapper">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=100"
              alt="Digital Transformation"
              className="dt-hero-img"
            />

            <div className="dt-bubble dt-bubble-green">
              Ready to move your business to the cloud?
            </div>

            <div className="dt-bubble dt-bubble-white">
              Yes, we need automation & AI-driven solutions.
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRANSFORMATION FRAMEWORK ================= */}
      <section className="dt-framework">
        <p className="dt-framework-label">OUR DIGITAL FRAMEWORK</p>

        <h2 className="dt-framework-heading">
          Technology, Innovation & Process Reinvention
        </h2>

        <div className="dt-framework-grid">
          <div className="dt-framework-card">
            <div className="dt-card-icon">
              <Cloud size={60} />
            </div>
            <h3>Cloud Transformation</h3>
            <p>
              Migrate legacy infrastructure to secure cloud
              environments with optimized scalability, cost efficiency,
              and hybrid architecture strategies.
            </p>
          </div>

          <div className="dt-framework-card">
            <div className="dt-card-icon">
              <Settings size={60} />
            </div>
            <h3>Process Automation</h3>
            <p>
              Implement intelligent automation solutions to streamline
              workflows, reduce manual intervention, and enhance
              operational efficiency.
            </p>
          </div>

          <div className="dt-framework-card">
            <div className="dt-card-icon">
              <Cpu size={60} />
            </div>
            <h3>AI & Data Intelligence</h3>
            <p>
              Leverage AI-driven analytics, predictive modeling,
              and real-time data insights to accelerate
              decision-making and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ENTERPRISE TRANSFORMATION ================= */}
      <section className="dt-enterprise">
        <div className="dt-enterprise-left">
          <p className="dt-enterprise-label">
            END-TO-END DIGITAL MODERNIZATION
          </p>

          <h1 className="dt-enterprise-heading">
            Reinvent your business with next-generation technology
          </h1>

          <p className="dt-enterprise-desc">
            We help organizations transform traditional operations
            into digital-first ecosystems through cloud migration,
            AI adoption, cybersecurity reinforcement, and
            scalable enterprise platforms.
          </p>

          <p className="dt-enterprise-desc">
            Our transformation experts ensure seamless integration,
            optimized performance, data-driven insights, and
            sustainable innovation strategies for long-term growth.
          </p>
        </div>

        <div className="dt-enterprise-right">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=100"
            alt="Digital Innovation"
            className="dt-enterprise-img"
          />
        </div>
      </section>

      {/* ================= DIGITAL SUPPORT ================= */}
      <section className="dt-support">
        <div className="dt-support-left">
          <div className="dt-chat-box">
            <div className="dt-chat-sidebar">
              <BarChart2 size={40} />
              <Shield size={40} />
              <Cloud size={40} />
              <Settings size={40} />
            </div>

            <div className="dt-chat-content">
              <div className="dt-chat-title">
                Digital Transformation Support
              </div>

              <div className="dt-chat-message agent">
                <Sparkles size={32} />
                <p>
                  How can we modernize your digital ecosystem?
                </p>
              </div>

              <div className="dt-chat-message user">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                />
                <p>
                  We want AI automation and cloud scalability.
                </p>
              </div>

              <div className="dt-chat-message agent">
                <p>
                  Our team will assess your systems,
                  implement AI automation, and build
                  scalable cloud-native architecture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dt-support-right">
          <h1>Empower your digital future with innovation</h1>

          <p>
            From automation and AI to secure cloud migration
            and enterprise modernization, we enable digital-first
            business models designed for growth and resilience.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="dt-cta">
        <div className="dt-cta-content">
          <h2>
            Begin your digital transformation journey today
          </h2>

          <div className="dt-cta-buttons">
            <button className="dt-btn-primary">
              Talk to Experts
            </button>

            <button className="dt-btn-outline">
              View Transformation Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformation;