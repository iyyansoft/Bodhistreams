import "./Networking.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";
import { ShieldCheck, Gauge, Layers } from "lucide-react";

const Networking = () => {
  return (
    <PageWrapper>
      <div className="networking-page">

        {/* ================= CUSTOMER STYLE SECTION ================= */}
        <section className="nw-customer-section">
          <div className="nw-customer-container">
            {/* LEFT CONTENT */}
            <AnimatedSection type="slideRight" className="nw-customer-left" duration={0.7}>
              <p className="nw-small-title">
                NETWORKING & COMMUNICATION EQUIPMENT
              </p>
              <h2>
                Enterprise Networking & <br />
                Communication Infrastructure
              </h2>
              <p>
                At BodhiStreams Convergence, we provide end-to-end networking 
                and communication solutions including routers, switches, firewalls, 
                structured cabling, and enterprise connectivity infrastructure.
              </p>
              <p>
                We ensure seamless installation, configuration, and integration 
                of networks across campuses, labs, offices, and enterprise environments, 
                along with ongoing monitoring, maintenance, and technical support 
                for reliable and high-performance connectivity.
              </p>
            </AnimatedSection>

            {/* RIGHT IMAGE */}
            <div className="nw-customer-right">
              <AnimatedSection type="slideLeft" duration={0.7}>
                <img
                  src="https://images.stockcake.com/public/a/c/f/acf83e69-3e39-41b9-a833-e204720c0f31_large/global-network-connectivity-stockcake.jpg"
                  alt="Enterprise Networking Infrastructure"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= TOP IMAGE BANNER ================= */}
        <section className="nw-top-wrapper">
          <div className="nw-top-banner">
            <div className="nw-overlay">
              <AnimatedSection type="fade" duration={0.8} className="nw-banner-text">
                <p className="nw-small-text">
                  Enterprise Networking • Infrastructure • Connectivity Solutions
                </p>
                <h1>Networking & Communication Equipment</h1>
                <div className="nw-red-line"></div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= PREMIUM OVERVIEW SECTION ================= */}
        <section className="nw-premium-section">
          <div className="nw-container">
            {/* LEFT */}
            <AnimatedSection type="slideRight" className="nw-left" duration={0.7}>
              <span className="nw-category-tag">Enterprise Connectivity Solutions</span>
              <h2 className="nw-main-title">
                Advanced Networking &amp; Communication Infrastructure
              </h2>
              <p className="nw-description">
                At BodhiStreams Convergence, we provide comprehensive networking and
                communication solutions designed to power your business operations with
                speed, security, and reliability. From enterprise-grade network devices
                to structured cabling and wireless solutions — we deliver performance
                that keeps you connected.
              </p>
              <button className="nw-explore-btn">
                Explore Solutions <span className="arrow">→</span>
              </button>
            </AnimatedSection>

            {/* RIGHT */}
            <AnimatedSection type="slideLeft" className="nw-right" duration={0.7}>
              <div className="nw-quote-container">
                <p className="nw-quote-text">
                  "Delivering secure, high-speed, and scalable networking solutions 
                   that power seamless communication and digital transformation."
                </p>
                <div className="nw-author-info">
                  <h4>BodhiStreams Convergence</h4>
                  <p>Networking & Communication Solutions Team</p>
                </div>
              </div>

              {/* THREE VALUE PROP ITEMS */}
              <div className="nw-value-props">
                <div className="nw-value-prop-item">
                  <div className="nw-icon-wrapper">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Secure &amp; Reliable</h4>
                    <p>Enterprise-grade security for uninterrupted network performance.</p>
                  </div>
                </div>

                <div className="nw-value-prop-item">
                  <div className="nw-icon-wrapper">
                    <Gauge size={24} />
                  </div>
                  <div className="hw-value-text">
                    <h4>High Performance</h4>
                    <p>High-speed connectivity built for maximum efficiency.</p>
                  </div>
                </div>

                <div className="nw-value-prop-item">
                  <div className="nw-icon-wrapper">
                    <Layers size={24} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Scalable Solutions</h4>
                    <p>Flexible networking solutions that grow with your business.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= FIT SECTION ================= */}
        <section className="nw-fit-section">
          <div className="nw-fit-container">
            <AnimatedSection type="slideRight" className="nw-fit-left" duration={0.7}>
              <h2>Who’s a Good Fit?</h2>
              <p>
                Our Networking & Communication division supports enterprises,
                ISPs, system integrators and growing organizations requiring
                reliable, secure and scalable connectivity solutions.
              </p>
              <p>
                From procurement and installation to long-term technical
                maintenance, we ensure stable network infrastructure
                and uninterrupted communication systems.
              </p>
            </AnimatedSection>

            <div className="nw-fit-right">
              {[
                { title: "Wholesale & Distribution", desc: "Supply of routers, switches, firewalls, access points and structured networking components." },
                { title: "Authorized Dealership", desc: "Official partnerships with networking hardware manufacturers and communication technology brands." },
                { title: "Installation & Configuration", desc: "Professional setup, commissioning and optimization of networking and communication systems." },
                { title: "Maintenance & Technical Support", desc: "Ongoing support, upgrades, warranty services and after-sales technical assistance." },
                { title: "Network Infrastructure Design", desc: "Strategic planning and architecture for scalable, secure and future-ready network environments." },
                { title: "Refurbishment & Upgrades", desc: "Hardware lifecycle management, system upgrades and performance enhancement solutions." },
                { title: "Annual Maintenance Contracts", desc: "Preventive maintenance, monitoring and priority service coverage for networking infrastructure." }
              ].map((card, index) => (
                <AnimatedSection type="scale" delay={index * 0.05} key={index} className="nw-fit-card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= */}
        <section className="nw-v7-section">
          <AnimatedSection type="fade">
            <h2 className="nw-v7-title">
              How Our Networking Process Works
            </h2>
          </AnimatedSection>

          <div className="nw-v7-grid">
            <AnimatedSection type="scale" className="nw-v7-card" delay={0.1}>
              <div className="nw-v7-inner">
                <div className="nw-v7-front">
                  <img
                    src="https://www.ilscompany.com/wp-content/uploads/9-1.jpg"
                    alt="Enterprise Data Center Rows"
                  />
                </div>
                <div className="nw-v7-back">
                  <h3>01. Source & Supply</h3>
                  <p>
                    Importing and distributing enterprise-grade networking
                    and communication equipment from trusted manufacturers.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="scale" className="nw-v7-card" delay={0.2}>
              <div className="nw-v7-inner">
                <div className="nw-v7-front">
                  <img
                    src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2024/03/adobestock_298063823.jpeg"
                    alt="Network Engineer Configuring Equipment"
                  />
                </div>
                <div className="nw-v7-back">
                  <h3>02. Deploy & Configure</h3>
                  <p>
                    Installation, configuration and commissioning
                    ensuring high-speed and secure connectivity.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="scale" className="nw-v7-card" delay={0.3}>
              <div className="nw-v7-inner">
                <div className="nw-v7-front">
                  <img
                    src="https://t4.ftcdn.net/jpg/07/66/45/19/360_F_766451941_2EiexUIC3ZVnzhIxSgAUIV9S6FaRnC6X.jpg"
                    alt="Network Operations Center"
                  />
                </div>
                <div className="nw-v7-back">
                  <h3>03. Maintain & Support</h3>
                  <p>
                    Continuous monitoring, upgrades and technical
                    support for uninterrupted communication systems.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="nw-cta-section">
          <AnimatedSection type="scale" className="nw-cta-content">
            <h2>
              Empower your business with secure <br />
              Networking & Communication Solutions
            </h2>
            <div className="nw-cta-buttons">
              <button className="nw-cta-primary">
                Contact Sales
              </button>
              <button className="nw-cta-outline">
                View IT Services
              </button>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </PageWrapper>
  );
};

export default Networking;