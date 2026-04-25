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

  <div className="esc-overlay"></div>

  <div className="esc-content">

    <p className="esc-mini">
      ELECTRONIC & DIGITAL PRODUCTS SUPPLY
    </p>

    <h1 className="esc-heading">
      Advanced Digital Infrastructure 
      for Institutions & Enterprises
    </h1>

    <p className="esc-desc">
      We supply computers, smart classroom systems, networking devices,
      IoT kits, and lab equipment with seamless setup and integration
      for modern learning and business environments.
    </p>

    <div className="esc-buttons">
      <button className="esc-btn-primary">
        Explore Solutions
      </button>

      <button className="esc-btn-outline">
        Get Details
      </button>
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
        Smart IT Equipment <br />
        for Modern Institutions
      </h1>

      <p>
        We provide a wide range of reliable IT hardware including computers, 
        laptops, servers, and networking devices tailored for institutions 
        and enterprises. Our solutions are designed to support seamless 
        operations, digital learning, and scalable infrastructure growth.
      </p>

      <button className="edp-hero-btn">
        Explore Products →
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
    Digital Infrastructure Solutions
  </h2>

  <div className="edp-resources-grid">

    {/* CARD 1 */}
    <div className="edp-card">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
        alt="Computers and Devices"
      />

      <div className="edp-card-content">
        <span className="edp-card-label">
          IT EQUIPMENT
        </span>

        <h3>
          High-quality computers, laptops, and devices for modern digital environments
        </h3>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="edp-card">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
        alt="Networking and Servers"
      />

      <div className="edp-card-content">
        <span className="edp-card-label">
          NETWORK & SERVERS
        </span>

        <h3>
          Reliable networking solutions and server infrastructure for seamless connectivity
        </h3>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="edp-card">
      <img
        src="https://www.advancedtech.com/wp-content/uploads/2022/04/iStock-1206840249_ATS-1-scaled-2.jpg"
        alt="Support and Maintenance"
      />

      <div className="edp-card-content">
        <span className="edp-card-label">
          SUPPORT & MAINTENANCE
        </span>

        <h3>
          Continuous support, upgrades, and maintenance for long-term performance
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