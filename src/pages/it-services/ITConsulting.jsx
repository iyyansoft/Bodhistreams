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
    <p className="itc-mini-title">IT CONSULTING & SYSTEM INTEGRATION</p>

    <h1 className="itc-hero-heading">
      Design, Integrate & <br />
      Optimize Enterprise <br />
      IT Systems for <br />
      Scalable Growth
    </h1>

    <p className="itc-hero-desc">
      At BodhiStreams Convergence, we provide end-to-end IT consulting 
      and system integration services to help organizations build 
      connected, scalable, and high-performance digital ecosystems. 
      
      From enterprise architecture design and system analysis to 
      seamless integration of software, cloud, and infrastructure, 
      we ensure efficient operations, better decision-making, and 
      long-term technology value.
      
      We don’t just advise — we execute and deliver fully functional systems.
    </p>

    <div className="itc-hero-buttons">
      <button className="itc-btn-primary">Schedule Consultation</button>
      <button className="itc-btn-outline">Explore Integration Services</button>
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
        Can you integrate our software, cloud, and enterprise systems?
      </div>

      <div className="itc-bubble itc-bubble-white">
        Yes. We design, connect, and optimize complete IT ecosystems.
      </div>
    </div>
  </div>
</section>



<section className="itc-strategy">
  <p className="itc-strategy-label">OUR CONSULTING FRAMEWORK</p>

  <h2 className="itc-strategy-heading">
    IT Consulting & System Integration Approach
  </h2>

  <div className="itc-strategy-grid">

    {/* 1 */}
    <div className="itc-strategy-card">
       <div className="itc-card-icon">📊</div>
      <h3>IT Consulting & System Analysis</h3>
      <p>
        Analyze existing IT infrastructure, applications, and workflows 
        to identify gaps, inefficiencies, and opportunities for 
        modernization and integration.
      </p>
    </div>

    {/* 2 */}
    <div className="itc-strategy-card">
      <div className="itc-card-icon">🔗</div>
      <h3>System Integration & Architecture</h3>
      <p>
        Design and integrate enterprise systems, software applications, 
        cloud platforms, APIs, and databases into a unified, secure, 
        and scalable digital ecosystem.
      </p>
    </div>

    {/* 3 */}
    <div className="itc-strategy-card">
      <div className="itc-card-icon">⚡</div>
      <h3>Implementation & Optimization</h3>
      <p>
        Deploy integrated systems, optimize performance, automate workflows, 
        and ensure reliable, scalable operations for long-term business growth.
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
      End-to-End Enterprise IT Consulting & Integration Solutions
    </h1>

    <p className="itc-enterprise-desc">
      At BodhiStreams Convergence, we help organizations design, 
      implement, and manage modern IT systems that are scalable, 
      connected, and performance-driven.
    </p>

    <p className="itc-enterprise-desc">
      From system analysis and architecture design to seamless integration 
      of software, cloud platforms, APIs, and enterprise applications, 
      we build unified digital ecosystems that improve efficiency, 
      automation, and decision-making.
    </p>

    <p className="itc-enterprise-desc">
      We don’t just provide consulting — we execute, integrate, and deliver 
      fully functional IT solutions that drive long-term business growth.
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




      
<section className="itc-resources">
  <h2 className="itc-resources-title">
    IT Consulting & Integration Insights
  </h2>

  <div className="itc-resources-grid">

    {/* CARD 1 */}
    <div className="itc-resource-card">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
        alt="System Analysis"
      />
      <h3>
        IT System Analysis & Architecture Design
      </h3>
    </div>

    {/* CARD 2 */}
    <div className="itc-resource-card">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
        alt="System Integration"
      />
      <h3>
        Enterprise System & Cloud Integration Solutions
      </h3>
    </div>

    {/* CARD 3 */}
    <div className="itc-resource-card">
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        alt="Automation"
      />
      <h3>
        Automation, Optimization & Managed IT Services
      </h3>
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