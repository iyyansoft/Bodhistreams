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
    <p className="dt-mini-title">
      DIGITAL TRANSFORMATION & AUTOMATION
    </p>

    <h1 className="dt-hero-heading">
      Transform operations <br />
      with automation, cloud <br />
      and intelligent <br />
      digital systems
    </h1>

    <p className="dt-hero-desc">
      At BodhiStreams Convergence, we help organizations modernize 
      their systems through automation, cloud adoption, and intelligent 
      digital solutions. 
    </p>

    <p className="dt-hero-desc">
      From workflow automation and system integration to AI-enabled 
      processes and scalable digital platforms, we build connected 
      ecosystems that improve efficiency, reduce manual effort, 
      and accelerate business performance.
    </p>

    <p className="dt-hero-desc">
      We don’t just plan transformation — we implement, automate, 
      and deliver measurable results.
    </p>

    <div className="dt-hero-buttons">
      <button className="dt-btn-primary">Start Transformation</button>
      <button className="dt-btn-outline">Explore Automation Solutions</button>
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
        Can you automate our workflows and integrate systems?
      </div>

      <div className="dt-bubble dt-bubble-white">
        Yes, we build automated, AI-enabled digital systems.
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


<section className="dt-enterprise">
  <div className="dt-enterprise-left">
    <p className="dt-enterprise-label">
      DIGITAL TRANSFORMATION & AUTOMATION
    </p>

    <h1 className="dt-enterprise-heading">
      Build automated, scalable and connected digital systems
    </h1>

    <p className="dt-enterprise-desc">
      At BodhiStreams Convergence, we enable organizations to transform 
      traditional processes into automated, digital-first workflows 
      through cloud adoption, system integration, and intelligent 
      technology solutions.
    </p>

    <p className="dt-enterprise-desc">
      From workflow automation and application integration to AI-enabled 
      systems and cloud platforms, we design and implement solutions 
      that improve efficiency, reduce manual effort, and enhance 
      operational performance.
    </p>

    <p className="dt-enterprise-desc">
      We don’t just define transformation strategies — we execute, 
      automate, and deliver real, measurable outcomes.
    </p>
  </div>

  <div className="dt-enterprise-right">
    <img
      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=100"
      alt="Digital Transformation & Automation"
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
          Automation & Digital Transformation
        </div>

        {/* AGENT */}
        <div className="dt-chat-message agent">
          <Sparkles size={32} />
          <p>
            How can we optimize and automate your current systems?
          </p>
        </div>

        {/* USER */}
        <div className="dt-chat-message user">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Client"
          />
          <p>
            We want to automate workflows and integrate cloud-based systems.
          </p>
        </div>

        {/* AGENT */}
        <div className="dt-chat-message agent">
          <p>
            We will analyze your processes, integrate applications and cloud platforms,
            and implement automation to reduce manual effort and improve efficiency.
          </p>
        </div>

        {/* FINAL AGENT */}
        <div className="dt-chat-message agent">
          <p>
            Our solutions include workflow automation, AI-enabled systems,
            and scalable digital infrastructure for long-term performance.
          </p>
        </div>

      </div>
    </div>
  </div>

  <div className="dt-support-right">
    <h1>
      Automate operations and build intelligent digital systems
    </h1>

    <p>
      At BodhiStreams Convergence, we help organizations transform 
      manual processes into automated, integrated digital ecosystems. 
      From workflow automation and AI-enabled solutions to cloud integration 
      and system optimization, we design and implement scalable technologies 
      that improve efficiency and drive business growth.
    </p><br></br>

    <p>
      We don’t just recommend solutions — we implement, automate, 
      and deliver measurable outcomes.
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