import "./HardwareSupport.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";
import { HelpCircle, ShieldCheck, Server, Network, Monitor, Headphones } from "lucide-react";

const HardwareSupport = () => {
  return (
    <PageWrapper>
      <div className="hardware-support-page">
        {/* HERO */}
        <section className="support-hero">
          <div className="support-overlay"></div>
          <AnimatedSection type="fade" duration={0.8} className="support-content">
            <h4>End-to-End IT Installation & Support</h4>
            <h1>
              Installation & <br />
              Technical Support Services
            </h1>
            <p>
              We provide installation, configuration, and support for servers,
              networking systems, smart classrooms, and digital infrastructure.
            </p>
            <p>
              From setup to maintenance and upgrades, we ensure reliable,
              secure, and high-performance IT environments.
            </p>
            <button className="support-btn">
              Request Technical Support
            </button>
          </AnimatedSection>
        </section>

        {/* FEATURES */}
        <section className="support-section">
          <AnimatedSection type="fade" className="section-header">
            <h5>FEATURES</h5>
            <h2>Our Features & Services</h2>
          </AnimatedSection>

          <div className="support-grid">
            <AnimatedSection type="slideUp" delay={0.1} className="support-card">
              <div className="icon">🖥️</div>
              <h3>Hardware Supply</h3>
              <p>
                Supply of computers, servers, networking equipment
                and IT infrastructure solutions.
              </p>
              <button className="card-btn">More</button>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.2} className="support-card">
              <div className="icon">⚙️</div>
              <h3>Installation</h3>
              <p>
                Installation, configuration and deployment of
                enterprise IT systems and infrastructure.
              </p>
              <button className="card-btn">More</button>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.3} className="support-card">
              <div className="icon">🛠️</div>
              <h3>Support</h3>
              <p>
                Maintenance, upgrades and technical support
                for reliable system performance.
              </p>
              <button className="card-btn">More</button>
            </AnimatedSection>
          </div>
        </section>

        {/* MODERN SECTION */}
        <section className="modern-section">
          <div className="modern-container">
            {/* LEFT CONTENT */}
            <AnimatedSection type="slideRight" className="modern-left" duration={0.7}>
              <h5>INSTALLATION & TECHNICAL SUPPORT SERVICES</h5>
              <h2>
                Reliable installation & continuous IT support for enterprise systems
              </h2>
              <p>
                At BodhiStreams Convergence, we provide end-to-end installation,
                configuration, and commissioning of servers, networking systems,
                smart classrooms, and digital lab infrastructure.
              </p>
              <p>
                Our services include system integration, maintenance,
                troubleshooting, upgrades, and AMC support to ensure
                secure, reliable, and high-performance IT environments
                for institutions and enterprises.
              </p>
            </AnimatedSection>

            {/* RIGHT IMAGE */}
            <div className="modern-right">
              <AnimatedSection type="slideLeft" duration={0.7}>
                <img
                  src="https://www.smartvalley.net/assets/images/help-desk-calisan.png"
                  alt="IT Installation & Technical Support"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* REDESIGNED SPLIT SECTION */}
        <section className="hw-support-split-section">
          <div className="hw-support-split-container">
            {/* LEFT CARD */}
            <AnimatedSection type="slideRight" className="hw-support-split-card" duration={0.7}>
              <div className="hw-support-card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
                  alt="Server Room Infrastructure Support"
                />
              </div>
              <div className="hw-support-card-content">
                <h3>Installation &amp; Technical Support</h3>
                
                <div className="hw-support-chat-bubble light-green">
                  <div className="hw-bubble-icon green-icon">
                    <HelpCircle size={20} />
                  </div>
                  <p>How can we deploy and manage enterprise IT infrastructure?</p>
                </div>

                <div className="hw-support-chat-bubble white">
                  <div className="hw-bubble-icon dark-green-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <p>We need secure servers, networking setup, and long-term support.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT CONTENT */}
            <AnimatedSection type="slideLeft" className="hw-support-split-right" duration={0.7}>
              <h2 className="hw-support-main-heading">
                Build reliable IT systems with expert installation and continuous support
              </h2>
              <div className="hw-support-heading-line"></div>
              
              <p className="hw-support-subtext">
                At BodhiStreams Convergence, we deliver end-to-end installation, system integration and technical support services. From setup to maintenance, we ensure your IT infrastructure runs smoothly, securely, and efficiently.
              </p>

              {/* FOUR GRID FEATURES */}
              <div className="hw-support-features-grid">
                <div className="hw-support-feature-item">
                  <div className="hw-support-icon-box">
                    <Server size={24} />
                  </div>
                  <h4>Server Installation</h4>
                  <p>Secure deployment of servers and storage systems.</p>
                </div>

                <div className="hw-support-feature-item">
                  <div className="hw-support-icon-box">
                    <Network size={24} />
                  </div>
                  <h4>Network Setup</h4>
                  <p>Structured cabling, network configuration &amp; connectivity.</p>
                </div>

                <div className="hw-support-feature-item">
                  <div className="hw-support-icon-box">
                    <Monitor size={24} />
                  </div>
                  <h4>System Integration</h4>
                  <p>Seamless integration of hardware and software systems.</p>
                </div>

                <div className="hw-support-feature-item">
                  <div className="hw-support-icon-box">
                    <Headphones size={24} />
                  </div>
                  <h4>Technical Support</h4>
                  <p>Ongoing monitoring, maintenance &amp; expert support.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PREMIUM */}
        <section className="it-premium">
          <div className="it-premium-container">
            {/* LEFT SIDE */}
            <AnimatedSection type="slideRight" className="it-premium-left" duration={0.7}>
              <h5>INSTALLATION & TECHNICAL SUPPORT</h5>
              <h2>
                Smart deployment with <br />
                reliable long-term support
              </h2>
              <p>
                We provide structured installation, system integration,
                and continuous technical support to ensure stable,
                secure and high-performance IT environments.
              </p>
              <button className="premium-btn">
                Explore Services →
              </button>
            </AnimatedSection>

            {/* RIGHT SIDE */}
            <div className="it-premium-right">
              <AnimatedSection type="slideLeft" duration={0.7}>
                <img
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                  alt="IT Infrastructure"
                  className="premium-bg-img"
                />
              </AnimatedSection>

              {/* FLOATING CARDS */}
              <AnimatedSection type="scale" delay={0.1} className="float-card card1">
                <h3>⚙️ Deployment</h3>
                <p>Fast setup of IT systems</p>
              </AnimatedSection>

              <AnimatedSection type="scale" delay={0.2} className="float-card card2">
                <h3>🔗 Integration</h3>
                <p>Seamless system connection</p>
              </AnimatedSection>

              <AnimatedSection type="scale" delay={0.3} className="float-card card3">
                <h3>📡 Monitoring</h3>
                <p>Real-time performance tracking</p>
              </AnimatedSection>

              <AnimatedSection type="scale" delay={0.4} className="float-card card4">
                <h3>🛠️ Support</h3>
                <p>Continuous maintenance & upgrades</p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default HardwareSupport;