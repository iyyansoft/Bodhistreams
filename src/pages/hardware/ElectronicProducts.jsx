import "./ElectronicProducts.css";
import {
  Monitor,
  Wifi,
  Settings,
  ShieldCheck,
  Laptop,
  Server
} from "lucide-react";

const ElectronicProducts = () => {
  const features = [
    { icon: <Settings size={26} />, text: "Installation & Setup" },
    { icon: <ShieldCheck size={26} />, text: "Maintenance & Support" },
    { icon: <Monitor size={26} />, text: "Computers & Desktops" },
    { icon: <Wifi size={26} />, text: "Networking Equipment" },
    { icon: <Laptop size={26} />, text: "Laptops & Peripherals" },
    { icon: <Server size={26} />, text: "Servers & Storage" },
  ];

  const radius = 360;   // distance from center
  const size = 900;     // wrapper size
  const center = size / 2;

  return (
    <>





      <section className="esc-hero">
        <div className="esc-left">

          <p className="esc-mini">ENTERPRISE SYSTEM CONSULTING</p>

          <h1 className="esc-heading">
            Modernize your <br />
            enterprise systems <br />
            with intelligent <br />
            digital transformation
          </h1>

          <p className="esc-desc">
            We deliver enterprise consulting, digital transformation strategy,
            IT governance advisory, and seamless system modernization solutions.
            Our scalable frameworks empower organizations to streamline
            operations, enhance performance, and drive long-term innovation.
          </p>

          <div className="esc-buttons">
            <button className="esc-btn-primary">Request Strategy Call</button>
            <button className="esc-btn-outline">View Capabilities</button>
          </div>

        </div>

        <div className="esc-right">
          <div className="esc-img-wrap">

            <img
              src="/Digital-transformation.png"
              alt="Digital-transformation"
              className="esc-main-img"
            />


            <div className="esc-chat esc-chat-green">
              Looking to upgrade your legacy systems?
            </div>

            <div className="esc-chat esc-chat-white">
              We need cloud integration & secure architecture support.
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------------- */}


      {/* -------------------------------------------------------------------------------------------------- */}



      <section className="edp-hero-section">

        <div className="edp-hero-container">

          {/* LEFT IMAGE */}
          <div className="edp-hero-left">
            <img src="/Electric-transport.png" alt="Electronic Products" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="edp-hero-content">
            <h1>
              Electronic & Digital <br />
              Products Supply
            </h1>

            <p>
              We specialize in wholesale and retail supply of computers, servers,
              networking equipment and IT hardware. As authorized dealers,
              we provide installation, maintenance and complete technical
              support services for all digital solutions.
            </p>

            <button className="edp-hero-btn">
              EXPLORE SERVICES →
            </button>
          </div>

        </div>

      </section>











      {/* ---------------------------------------------------------------------------------- */}

      <section className="edp-section">
        <div className="edp-layout">

          {/* LEFT SIDE */}
          <div className="edp-column edp-left">

            <div className="edp-item">
              <div className="edp-icon edp-purple">🔐</div>
              <p>Computers & Desktops</p>
            </div>

            <div className="edp-item">
              <div className="edp-icon edp-green">💾</div>
              <p>Servers & Storage</p>
            </div>

            <div className="edp-item">
              <div className="edp-icon edp-pink">🧩</div>
              <p>IT Accessories & Components</p>
            </div>

          </div>

          {/* CENTER CONTENT */}
          <div className="edp-center">
            <h1>Electronic & Digital <br /> Products Supply</h1>

            <p>
              We specialize in wholesale and retail supply of computers, servers,
              networking equipment, IT hardware and digital products.
              As authorized dealers, we provide installation, maintenance
              and complete technical support services.
            </p>


          </div>

          {/* RIGHT SIDE */}
          <div className="edp-column edp-right">

            <div className="edp-item">
              <div className="edp-icon edp-orange">🌐</div>
              <p>Networking Equipment</p>
            </div>

            <div className="edp-item">
              <div className="edp-icon edp-yellow">⚙️</div>
              <p>Installation & Configuration</p>
            </div>

            <div className="edp-item">
              <div className="edp-icon edp-blue">🛠️</div>
              <p>Maintenance & Support</p>
            </div>

          </div>

        </div>
      </section>




      {/* ----------------------------------------------------------------------------------------------------- */}


      <section className="edp-resources-section">

        <h2 className="edp-resources-title">
          Electronic & Digital Solutions
        </h2>

        <div className="edp-resources-grid">

          {/* CARD 1 */}
          <div className="edp-card">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
              alt="IT Hardware Supply"
            />

            <div className="edp-card-content">
              <span className="edp-card-label">
                HARDWARE SUPPLY
              </span>

              <h3>
                Wholesale and retail supply of computers, servers
                and networking equipment
              </h3>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="edp-card">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80"
              alt="IT Infrastructure Setup"
            />

            <div className="edp-card-content">
              <span className="edp-card-label">
                INSTALLATION SERVICES
              </span>

              <h3>
                Professional installation, configuration and
                infrastructure setup solutions
              </h3>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="edp-card">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Technical Support"
            />

            <div className="edp-card-content">
              <span className="edp-card-label">
                TECHNICAL SUPPORT
              </span>

              <h3>
                Maintenance, upgrades and complete
                after-sales technical support services
              </h3>
            </div>
          </div>

        </div>

      </section>


      {/* ---------------------------------------------------------------------------------------- */}




      <section className="edp-gradient-hero">

        <div className="edp-gradient-content">

          <h1>
            Electronic & Digital <br />
            Products & IT Solutions
          </h1>

          <p className="hero-quote">
            "Your trusted partner for IT hardware,
            installation and digital support solutions."
          </p>

          <div className="edp-gradient-buttons">
            <button className="edp-btn-primary">
              Contact Sales
            </button>

            <button className="edp-btn-outline">
              View Services
            </button>
          </div>

        </div>

      </section>



    </>
  );
};

export default ElectronicProducts;