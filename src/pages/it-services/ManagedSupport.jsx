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
    <p className="ms-mini-title">MANAGED IT & TECHNICAL SUPPORT</p>

    <h1 className="ms-hero-heading">
      Ensure reliable, secure <br />
      and scalable IT systems <br />
      with continuous support
    </h1>

    <p className="ms-hero-desc">
      At BodhiStreams Convergence, we provide end-to-end managed IT 
      support services to ensure your systems, applications, and 
      infrastructure run smoothly and efficiently.
    </p>

    <p className="ms-hero-desc">
      From 24/7 monitoring and maintenance to system upgrades, 
      troubleshooting, and technical support, we help organizations 
      minimize downtime, improve performance, and maintain secure 
      and reliable IT environments.
    </p>

   

    <div className="ms-hero-buttons">
      <button className="ms-btn-primary">Get Support</button>
      <button className="ms-btn-outline">Explore IT Services</button>
    </div>
  </div>

  <div className="ms-hero-right">
    <div className="ms-hero-img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
        alt="Managed IT Support"
        className="ms-hero-img"
      />

      <div className="ms-bubble ms-bubble-green">
        Do you provide 24/7 monitoring and system maintenance?
      </div>

      <div className="ms-bubble ms-bubble-white">
        Yes, we ensure continuous monitoring, support, and optimization.
      </div>
    </div>
  </div>
</section>



      {/* ================= SERVICES SECTION ================= */}
      <section className="ms-dark-section">

  <div className="ms-dark-grid">

    {/* CARD 1 */}
    <div className="ms-dark-card">
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
    </div>

    {/* CARD 2 */}
    <div className="ms-dark-card">
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
    </div>

    {/* CARD 3 */}
    <div className="ms-dark-card">
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
    </div>

  </div>

</section>









{/* ================= DETAILED SUPPORT ================= */}
      <section className="ms-enterprise">
        <div className="ms-enterprise-left">
          <p className="
        ms-enterprise-label">
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





<section className="ms-support">

  {/* LEFT SIDE */}
  <div className="ms-support-left">

    <div className="ms-support-glow-card">

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

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="ms-support-right">

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

  </div>

</section>





      {/* ------------------------------------------------------------------------------------- */}



      <section className="ms-premium">

  <h2 className="ms-premium-title">
    Reliable IT Support & System Performance
  </h2>

  <div className="ms-premium-grid">

    {/* LEFT */}
    <div className="ms-premium-card">
      <h1>99.9%</h1>
      <h3>System Uptime</h3>
      <p>
        Continuous monitoring and maintenance to ensure maximum
        availability and minimal downtime.
      </p>
    </div>

    {/* CENTER */}
    <div className="ms-premium-card highlight">
      <h1>24/7</h1>
      <h3>Monitoring & Support</h3>
      <p>
        Round-the-clock technical support and proactive issue
        resolution for all IT systems.
      </p>
    </div>

    {/* RIGHT */}
    <div className="ms-premium-card">
      <h1>500+</h1>
      <h3>Systems Managed</h3>
      <p>
        Managing enterprise applications, cloud platforms,
        and infrastructure environments at scale.
      </p>
    </div>

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