import "./ITPages.css";
import { Home, MessageSquare, Users, BarChart2, Settings, Sparkles } from "lucide-react";

const SoftwareDevelopment = () => {
  return (
    <>
      <section className="zendesk-hero">

        {/* LEFT CONTENT */}
        <div className="zendesk-left">
          <p className="mini-title">IT SERVICES FOR ENTERPRISES</p>

          <h1>
            Deliver powerful <br />
            software solutions <br />
            with scalable <br />
            IT infrastructure
          </h1>

          <p className="description">
            We design, develop, deploy and manage web applications,
            mobile platforms, enterprise systems and cloud-based
            solutions. From consulting to automation and managed IT
            services, we help organizations innovate and scale.
          </p>


        </div>

        {/* RIGHT IMAGE */}
        <div className="zendesk-right">
  <div className="image-wrapper">

   <img
  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  alt="Developer Coding"
  className="hero-image"
/>

    {/* GREEN CHAT */}
    <div className="floating-text bubble-green">
      Welcome back! How can I help you today?
    </div>

    {/* WHITE CHAT */}
    <div className="floating-text bubble-white">
      I want to upgrade my subscription plan.
    </div>

  </div>
</div>

      </section>




      {/* ================= FEATURE SECTION BELOW ================= */}

      <section className="sd-section">

        <p className="sd-mini-title">
          HOW SOFTWARE DEVELOPMENT WORKS
        </p>

        <h2 className="sd-main-title">
          Smart & Scalable Digital Solutions
        </h2>

        <div className="sd-grid">

          <div className="sd-card">
            <div className="sd-icon">✓</div>
            <h3>Custom Application Development</h3>
            <p>
              Design and develop web, mobile and enterprise
              applications tailored to business needs with secure,
              scalable architecture.
            </p>
          </div>

          <div className="sd-card">
            <div className="sd-icon">👍</div>
            <h3>Cloud & SaaS Platforms</h3>
            <p>
              Build SaaS, PaaS and IaaS systems with API integrations,
              cloud deployment and optimized database performance.
            </p>
          </div>

          <div className="sd-card">
            <div className="sd-icon">✨</div>
            <h3>IT Consulting & Managed Services</h3>
            <p>
              Provide system integration, digital transformation,
              automation and ongoing technical support globally.
            </p>
          </div>

        </div>

      </section >




      {/* ======================================================================================== */}

      <section className="ai-section">

        {/* LEFT SIDE */}
        <div className="ai-left">

          <p className="ai-label">INFORMATION TECHNOLOGY SERVICES</p>

          <h1>
            Comprehensive software <br />
            development & digital <br />
            technology solutions
          </h1>

          <p className="ai-description">
            We design, develop, customize, test, implement, deploy, operate,
            maintain and support computer software, web applications, mobile
            applications, enterprise systems, cloud platforms (SaaS, PaaS, IaaS),
            APIs, databases and digital solutions. We also provide IT consulting,
            system integration, software testing, digital transformation,
            automation and managed IT services across India and abroad.
          </p>

          <a href="#" className="ai-link">
            Explore our IT capabilities →
          </a>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="ai-card-wrapper">

          {/* Floating AI Icon */}
          <div className="ai-floating-icon">
            ✦
          </div>

          {/* Avatar */}
          <div className="ai-avatar">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Client"
            />
          </div>

          <div className="ai-card">

            <div className="ai-top-bar"></div>

            <div className="ai-card-content">

              <div className="ai-user-name">Enterprise Client</div>

              <div className="ai-message user">
                Do you provide complete software & cloud solutions?
              </div>

              <div className="ai-agent-label">IT Services Team</div>

              <div className="ai-message agent">
                Yes. We deliver web, mobile, enterprise applications and
                SaaS, PaaS, IaaS cloud platforms with full IT support.
              </div>

              <div className="ai-template-box">
                <h4>Managed IT & Consulting</h4>
                <p>
                  System integration, QA testing, automation and
                  technical support services.
                </p>

                <button className="ai-template-btn">
                  Contact IT Team
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>






      {/* ======================================================================================== */}

      <section className="copilot-section">

        {/* LEFT SIDE CHAT UI */}
        <div className="copilot-left">

          <div className="chat-container">

            {/* Sidebar */}
            <div className="chat-sidebar">
              <Home size={20} />
              <MessageSquare size={20} className="active-icon" />
              <Users size={20} />
              <BarChart2 size={20} />
              <Settings size={20} />
            </div>

            {/* Chat Content */}
            <div className="chat-content">

              <div className="chat-title">
                IT Support Conversation
              </div>

              <div className="chat-message agent-msg">
                <Sparkles size={18} />
                <p>
                  Welcome. How can we assist with your software or cloud requirements?
                </p>
              </div>

              <div className="chat-message user-msg">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />
                <p>
                  Do you provide end-to-end IT and cloud services?
                </p>
              </div>

            </div>

          </div>

          {/* COPILOT SUGGEST CARD */}
          <div className="copilot-card">

            <div className="copilot-header">
              Copilot suggests
            </div>

            <div className="copilot-body">

              <div className="copilot-auto-tag">
                ⚡ IT Solutions
              </div>

              <div className="copilot-message">
                We design, develop and deploy web, mobile and enterprise
                applications including SaaS, PaaS and IaaS platforms.
                We also provide consulting, system integration,
                automation and managed IT support.
              </div>



            </div>

          </div>

        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="copilot-right">

          <p className="copilot-label">INFORMATION TECHNOLOGY</p>

          <h1>
            Elevate your software <br />
            development & IT <br />
            capabilities
          </h1>

          <p>
            We design, customize, test, deploy and manage secure software,
            applications, APIs and cloud platforms. From consulting and
            integration to automation and managed IT services, we deliver
            scalable technology solutions in India and abroad.
          </p>

          <a href="#" className="copilot-link">
            Discover IT Services
          </a>

        </div>

      </section>











      {/* ======================================================================================== */}

      <section className="resources-section">

        <h2 className="resources-title fade-up">
          IT Service Resources
        </h2>

        <div className="resources-grid">

          <div className="resource-card fade-up delay-1">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Software Development"
              />
            </div>

            <div className="resource-content">
              <span className="resource-tag">SOFTWARE DEVELOPMENT</span>
              <h3>
                Custom web, mobile and enterprise application development
              </h3>
            </div>
          </div>

          <div className="resource-card fade-up delay-2">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
                alt="Cloud Solutions"
              />
            </div>

            <div className="resource-content">
              <span className="resource-tag">CLOUD SOLUTIONS</span>
              <h3>
                SaaS, PaaS, IaaS platforms and scalable cloud infrastructure
              </h3>
            </div>
          </div>

          <div className="resource-card fade-up delay-3">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="IT Consulting"
              />
            </div>

            <div className="resource-content">
              <span className="resource-tag">IT CONSULTING</span>
              <h3>
                System integration, automation and managed IT services
              </h3>
            </div>
          </div>

        </div>
      </section>





      {/* ======================================================================================== */}

      <section className="cta-section">

  <div className="cta-content">

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

  </div>

</section>














    </>

  );
};

export default SoftwareDevelopment;