import "./DigitalTransformation.css";
import {
  Cpu,
  Cloud,
  Shield,
  BarChart2,
  Settings,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";
import { Link } from "react-router-dom";

const DigitalTransformation = () => {
  return (
    <PageWrapper>
      {/* ================= HERO ================= */}
      <section className="future-section">
        {/* LEFT SIDE IMAGE */}
        <div className="future-image-wrapper">
          <AnimatedSection type="slideRight" duration={0.7}>
            <img
              src="https://escp.eu/thechoice/wp-content/uploads/blogpost-aidigitaltransformation-shutterstock-nicoelnino-1024x640.jpg"
              alt="Automation"
              className="future-image"
            />
            <div className="future-overlay-card">
              <h4>Automation</h4>
              <p>Modern systems for faster operations</p>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <AnimatedSection type="slideLeft" className="future-content" duration={0.7}>
          <span className="future-tag">
            SMART DIGITAL SOLUTIONS
          </span>
          <h1 className="future-title">
            Simplify business operations 
            with intelligent automation
          </h1>
          <p className="future-text">
            We create scalable digital systems that help 
            businesses automate workflows, integrate platforms, 
            and improve productivity.
          </p>

          {/* STATS */}
          <div className="future-stats">
            <div className="future-stat-box">
              <h3>95%</h3>
              <p>Process Efficiency</p>
            </div>
            <div className="future-stat-box">
              <h3>24/7</h3>
              <p>Automation Support</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ================= TRANSFORMATION FRAMEWORK ================= */}
      <section className="dt-framework">
        <AnimatedSection type="fade">
          <p className="dt-framework-label">OUR DIGITAL FRAMEWORK</p>
          <h2 className="dt-framework-heading">
            Technology, Innovation & Process Reinvention
          </h2>
        </AnimatedSection>

        <div className="dt-framework-grid">
          <AnimatedSection type="slideUp" delay={0.1} className="dt-framework-card">
            <div className="dt-card-icon">
              <Cloud size={60} />
            </div>
            <h3>Cloud Transformation</h3>
            <p>
              Migrate legacy infrastructure to secure cloud
              environments with optimized scalability, cost efficiency,
              and hybrid architecture strategies.
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideUp" delay={0.2} className="dt-framework-card">
            <div className="dt-card-icon">
              <Settings size={60} />
            </div>
            <h3>Process Automation</h3>
            <p>
              Implement intelligent automation solutions to streamline
              workflows, reduce manual intervention, and enhance
              operational efficiency.
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideUp" delay={0.3} className="dt-framework-card">
            <div className="dt-card-icon">
              <Cpu size={60} />
            </div>
            <h3>AI & Data Intelligence</h3>
            <p>
              Leverage AI-driven analytics, predictive modeling,
              and real-time data insights to accelerate
              decision-making and innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="dt-enterprise">
        <AnimatedSection type="slideRight" className="dt-enterprise-left" duration={0.7}>
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
        </AnimatedSection>

        <div className="dt-enterprise-right">
          <AnimatedSection type="slideLeft" duration={0.7}>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=100"
              alt="Digital Transformation & Automation"
              className="dt-enterprise-img"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= DIGITAL SUPPORT ================= */}
      <section className="dt-support">
        <div className="dt-support-left">
          <AnimatedSection type="slideRight" className="dt-chat-box" duration={0.7}>
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
              <div className="dt-chat-message agent">
                <Sparkles size={32} />
                <p>
                  How can we optimize and automate your current systems?
                </p>
              </div>
              <div className="dt-chat-message user">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                />
                <p>
                  We want to automate workflows and integrate cloud-based systems.
                </p>
              </div>
              <div className="dt-chat-message agent">
                <p>
                  We will analyze your processes, integrate applications and cloud platforms,
                  and implement automation to reduce manual effort and improve efficiency.
                </p>
              </div>
              <div className="dt-chat-message agent">
                <p>
                  Our solutions include workflow automation, AI-enabled systems,
                  and scalable digital infrastructure for long-term performance.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection type="slideLeft" className="dt-support-right" duration={0.7}>
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
        </AnimatedSection>
      </section>

      {/* ================= CTA ================= */}
      <section className="transform-cta-section">
        <AnimatedSection type="scale" className="transform-cta-box">
          <p className="transform-cta-tag">
            LET’S BUILD THE FUTURE
          </p>
          <h2 className="transform-cta-title">
            Begin your digital transformation 
            journey today
          </h2>
          <p className="transform-cta-text">
            Modernize your business with automation, 
            cloud solutions, and intelligent systems.
          </p>
          <div className="transform-cta-actions">
            <Link to="/contactus" className="transform-primary-btn">
              Talk to Experts
            </Link>
            <Link to="/it-consulting" className="transform-outline-btn">
              View Services
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
};

export default DigitalTransformation;