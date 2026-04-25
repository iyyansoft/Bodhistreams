import "./HardwareSupport.css";

const HardwareSupport = () => {
  return (

    <div>
<section className="support-hero">

  <div className="support-overlay"></div>

  <div className="support-content">

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

  </div>

</section>


      {/* // -------------------------------------------------------------------------------------------- */}


<section className="support-section">

  <div className="section-header">
    <h5>FEATURES</h5>
    <h2>Our Features & Services</h2>
  </div>

  <div className="support-grid">

    <div className="support-card">
      <div className="icon">🖥️</div>
      <h3>Hardware Supply</h3>
      <p>
        Supply of computers, servers, networking equipment
        and IT infrastructure solutions.
      </p>
      <button className="card-btn">More</button>
    </div>

    <div className="support-card">
      <div className="icon">⚙️</div>
      <h3>Installation</h3>
      <p>
        Installation, configuration and deployment of
        enterprise IT systems and infrastructure.
      </p>
      <button className="card-btn">More</button>
    </div>

    <div className="support-card">
      <div className="icon">🛠️</div>
      <h3>Support</h3>
      <p>
        Maintenance, upgrades and technical support
        for reliable system performance.
      </p>
      <button className="card-btn">More</button>
    </div>

  </div>

</section>
      {/* ------------------------------------------------------------------------------------- */}


<section className="modern-section">

  <div className="modern-container">

    {/* LEFT CONTENT */}
    <div className="modern-left">
      <h5>INSTALLATION & TECHNICAL SUPPORT SERVICES</h5>

      <h2>
        Reliable installation & <br />
        continuous IT support <br />
        for enterprise systems
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
    </div>

    {/* RIGHT IMAGE */}
    <div className="modern-right">
      <img
        src="https://www.smartvalley.net/assets/images/help-desk-calisan.png"
        alt="IT Installation & Technical Support"
      />
    </div>

  </div>

</section>

      {/* ----------------------------------------------------------------------------------------------------- */}



<section className="split-section">

  <div className="split-container">

    {/* LEFT CARD */}
    <div className="split-card">

      <div className="split-icons">
        <span>🖥️</span>
        <span>🛡️</span>
        <span>☁️</span>
        <span>⚙️</span>
      </div>

      <div className="split-content">
        <h3>Installation & Technical Support</h3>

        <div className="bubble green">
          How can we deploy and manage enterprise IT infrastructure?
        </div>

        <div className="bubble white">
          We need secure servers, networking setup and long-term support.
        </div>

        <div className="bubble green">
          We provide complete installation, configuration and commissioning
          of IT systems including servers, networking, smart classrooms and
          digital lab infrastructure.
        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="split-right">
      <h2>
        Build reliable IT systems <br />
        with expert installation 
        and continuous support
      </h2>

      <p>
        At BodhiStreams Convergence, we deliver end-to-end installation,
        system integration and technical support services. From setup
        to maintenance, upgrades and AMC support, we ensure secure,
        scalable and high-performance IT environments for institutions
        and enterprises.
      </p>
    </div>

  </div>

</section>




    <section className="it-premium">
      <div className="it-premium-container">

        {/* LEFT SIDE */}
        <div className="it-premium-left">
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
        </div>

        {/* RIGHT SIDE */}
        <div className="it-premium-right">

          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
            alt="IT Infrastructure"
            className="premium-bg-img"
          />

          {/* FLOATING CARDS */}
          <div className="float-card card1">
            <h3>⚙️ Deployment</h3>
            <p>Fast setup of IT systems</p>
          </div>

          <div className="float-card card2">
            <h3>🔗 Integration</h3>
            <p>Seamless system connection</p>
          </div>

          <div className="float-card card3">
            <h3>📡 Monitoring</h3>
            <p>Real-time performance tracking</p>
          </div>

          <div className="float-card card4">
            <h3>🛠️ Support</h3>
            <p>Continuous maintenance & upgrades</p>
          </div>

        </div>

      </div>
    </section>






</div>

  );
};

export default HardwareSupport;