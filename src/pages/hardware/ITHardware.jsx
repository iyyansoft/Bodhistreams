import "./ITHardware.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";
import { ShieldCheck, Headphones, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const ITHardware = () => {
  return (
    <PageWrapper>
      <div className="hardware-page">

        {/* ================= TOP IMAGE BANNER ================= */}
        <section className="hw-top-wrapper">
          <div className="hw-top-banner">
            <div className="hw-overlay">
              <AnimatedSection type="fade" duration={0.8} className="hw-banner-text">
                <p className="hw-small-text">
                  Wholesale • Distribution • Authorized Dealership
                </p>
                <h1>Powering Businesses with Trusted IT Hardware</h1>
                <div className="hw-red-line"></div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= PREMIUM OVERVIEW SECTION ================= */}
        <section className="hw-premium-section">
          <div className="hw-container">
            {/* LEFT */}
            <AnimatedSection type="slideRight" className="hw-left" duration={0.7}>
              <span className="hw-category-tag">IT Hardware Trading & Distribution</span>
              <h2 className="hw-main-title">
                Enterprise Hardware Solutions &amp; Technology Supply
              </h2>
              <p className="hw-description">
                At BodhiStreams Convergence, we specialize in the wholesale and
                distribution of enterprise-grade IT hardware. From servers and storage
                systems to networking devices and components — we deliver quality,
                authentic products from leading global brands.
              </p>
            </AnimatedSection>

            {/* RIGHT */}
            <AnimatedSection type="slideLeft" className="hw-right" duration={0.7}>
              <div className="hw-quote-container">
                <p className="hw-quote-text">
                  "Delivering high-performance IT hardware and infrastructure 
                   solutions built for scalability, reliability, and long-term 
                   business growth."
                </p>
                <div className="hw-author-info">
                  <h4>BodhiStreams Convergence</h4>
                  <p>Building Stronger Business Solutions Team</p>
                </div>
              </div>

              {/* THREE VALUE PROP ITEMS */}
              <div className="hw-value-props">
                <div className="hw-value-prop-item">
                  <div className="hw-icon-wrapper">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Authentic Products</h4>
                    <p>Genuine & reliable hardware from trusted brands.</p>
                  </div>
                </div>

                <div className="hw-value-prop-item">
                  <div className="hw-icon-wrapper">
                    <Headphones size={24} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Expert Support</h4>
                    <p>Pre-sales & after-sales support from certified professionals.</p>
                  </div>
                </div>

                <div className="hw-value-prop-item">
                  <div className="hw-icon-wrapper">
                    <Truck size={24} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Timely Delivery</h4>
                    <p>Pan-India delivery with secure & timely fulfillment.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= WHO IS A GOOD FIT STYLE SECTION ================= */}
        <section className="hw-fit-section">
          <div className="hw-fit-container">
            {/* LEFT SIDE */}
            <AnimatedSection type="slideRight" className="hw-fit-left" duration={0.7}>
              <h2>Who We Support</h2>
              <p>
                Our IT Hardware Trading & Distribution solutions are designed 
                for institutions, enterprises, and organizations building 
                modern digital infrastructure and innovation ecosystems.
              </p>
              <p>
                From computer labs and smart classrooms to enterprise IT 
                environments, we deliver complete hardware supply, setup, 
                and lifecycle support to ensure reliability, scalability, 
                and long-term performance.
              </p>
              <div className="hw-fit-image-wrapper">
                <img 
                  src="/school_lab_setup.png" 
                  alt="IT Hardware Lab Setup" 
                  className="hw-fit-image" 
                />
              </div>
            </AnimatedSection>

            {/* RIGHT SIDE */}
            <div className="hw-fit-right">
              {[
                { title: "IT Equipment Supply", desc: "Supply of computers, laptops, servers, storage systems, networking devices, and digital infrastructure equipment for institutions and enterprises." },
                { title: "Computer Lab & Smart Setup", desc: "Complete setup of computer labs, smart classrooms, and IT-enabled learning environments with integrated hardware solutions." },
                { title: "Networking & Infrastructure", desc: "Deployment of networking equipment, Wi-Fi solutions, and enterprise infrastructure for seamless connectivity." },
                { title: "Installation & Commissioning", desc: "Professional installation, configuration, testing, and commissioning of hardware systems for immediate usability." },
                { title: "Upgrades & Lifecycle Support", desc: "Hardware upgrades, system enhancements, and lifecycle management services to ensure long-term efficiency." },
                { title: "AMC & Maintenance", desc: "Annual maintenance contracts, preventive servicing, and dedicated technical support for uninterrupted operations." },
                { title: "Lab Infrastructure Supply", desc: "Supply of equipment for STEM labs, innovation labs, IoT labs, robotics kits, and digital fabrication setups." }
              ].map((card, index) => (
                <AnimatedSection type="scale" delay={index * 0.05} key={index} className="hw-fit-card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= */}
        <section className="hw-v7-section">
          <AnimatedSection type="fade">
            <h2 className="hw-v7-title">
              IT Hardware Supply & Deployment Process
            </h2>
          </AnimatedSection>

          <div className="hw-v7-grid">
            {/* CARD 1 */}
            <AnimatedSection type="scale" className="hw-v7-card" delay={0.1}>
              <div className="hw-v7-inner">
                <div className="hw-v7-front">
                  <img
                    src="https://foreexcel.com/wp-content/uploads/2026/04/fccb9ef2355b5ddcb6975fb194530154.jpg"
                    alt="IT Hardware Supply"
                  />
                </div>
                <div className="hw-v7-back">
                  <h3>01. Supply & Distribution</h3>
                  <p>
                    Procurement and distribution of computers, servers, 
                    networking equipment, and lab infrastructure hardware 
                    from trusted technology partners.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* CARD 2 */}
            <AnimatedSection type="scale" className="hw-v7-card" delay={0.2}>
              <div className="hw-v7-inner">
                <div className="hw-v7-front">
                  <img
                    src="https://sysracks.com/wp-content/uploads/2024/09/setting-up-a-server-rack.png"
                    alt="Installation Setup"
                  />
                </div>
                <div className="hw-v7-back">
                  <h3>02. Installation & Setup</h3>
                  <p>
                    Complete installation, configuration, and commissioning 
                    of IT systems, computer labs, and smart infrastructure 
                    for immediate usability.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* CARD 3 */}
            <AnimatedSection type="scale" className="hw-v7-card" delay={0.3}>
              <div className="hw-v7-inner">
                <div className="hw-v7-front">
                  <img
                    src="https://cdn11.bigcommerce.com/s-bfxxgrup/images/stencil/1000x1000/uploaded_images/server.jpeg?t=1711732358"
                    alt="Maintenance Support"
                  />
                </div>
                <div className="hw-v7-back">
                  <h3>03. Maintenance & Support</h3>
                  <p>
                    Ongoing maintenance, hardware upgrades, AMC services, 
                    and technical support to ensure reliable and long-term 
                    IT system performance.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= CUSTOMER SECTION ================= */}
        <section className="hw-customer-section">
          <div className="hw-customer-container">
            {/* LEFT CONTENT */}
            <AnimatedSection type="slideRight" className="hw-customer-left" duration={0.7}>
              <p className="hw-small-title">
                IT HARDWARE TRADING & DISTRIBUTION
              </p>
              <h2>
                Enterprise IT Hardware & 
                Infrastructure Solutions
              </h2>
              <p>
                At BodhiStreams Convergence, we provide end-to-end IT hardware 
                trading and distribution solutions for institutions and enterprises. 
                Our offerings include computers, laptops, servers, storage systems, 
                networking equipment, and complete digital infrastructure components.
              </p>
              <p>
                Beyond supply, we deliver installation, configuration, upgrades, 
                and long-term technical support to ensure reliable, scalable, 
                and high-performance IT environments across labs, classrooms, 
                and enterprise systems.
              </p>
            </AnimatedSection>

            {/* RIGHT IMAGE */}
            <div className="hw-customer-right">
              <AnimatedSection type="slideLeft" duration={0.7}>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
                  alt="IT Hardware Infrastructure"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-section1">
          <AnimatedSection type="scale" className="cta-content1">
            <h2>
              Power your business with reliable <br />
              IT Hardware Trading & Distribution
            </h2>
            <div className="cta-buttons1">
              <Link to="/contactus" className="cta-primary1">
                Contact Sales
              </Link>
              <Link to="/it-consulting" className="cta-outline1">
                View IT Services
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </PageWrapper>
  );
};

export default ITHardware;