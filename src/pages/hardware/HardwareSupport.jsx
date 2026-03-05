import "./HardwareSupport.css";

const HardwareSupport = () => {
  return (

    <>
      <section className="hardware-hero-bg">
        <div className="overlay"></div>

        <div className="hero-content">
          <h4>Professional IT Infrastructure Solutions</h4>

          <h1>
            Installation & <br />
            Technical Support <br />
            Services
          </h1>

          <p>
            We provide installation, configuration, maintenance, repair and
            after-sales technical support for servers, networking systems
            and IT hardware equipment.
          </p>

          <button className="hero-btn">Request Support</button>
        </div>
      </section>


      {/* // -------------------------------------------------------------------------------------------- */}



      <section className="support-section">

        <div className="section-header fade-in">
          <h5>HOW OUR SERVICES WORK</h5>
          <h2>Reliable & Scalable IT Infrastructure Solutions</h2>
        </div>

        <div className="support-grid">

          <div className="support-card slide-up delay-1">
            <div className="icon">🖥️</div>
            <h3>Hardware Supply & Distribution</h3>
            <p>
              Wholesale and retail trading of computers, laptops, servers,
              networking equipment and IT hardware products.
            </p>
          </div>

          <div className="support-card slide-up delay-2">
            <div className="icon">⚙️</div>
            <h3>Installation & Configuration</h3>
            <p>
              Professional installation, configuration and commissioning
              of servers, communication devices and enterprise systems.
            </p>
          </div>

          <div className="support-card slide-up delay-3">
            <div className="icon">🛠️</div>
            <h3>Maintenance & Technical Support</h3>
            <p>
              Ongoing maintenance, repair, upgrading and after-sales
              support ensuring reliable system performance.
            </p>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------------------------------- */}



      <section className="modern-section">

        <div className="modern-container">

          {/* LEFT CONTENT */}
          <div className="modern-left">
            <h5>END-TO-END IT INFRASTRUCTURE SERVICES</h5>

            <h2>
              Power your business with
              advanced hardware &
              technical support solutions
            </h2>

            <p>
              We supply, install and maintain computers, servers,
              networking systems and enterprise IT equipment.
              Our expert team ensures reliable performance,
              seamless integration and long-term scalability.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="modern-right">
            <img
              src="https://www.smartvalley.net/assets/images/help-desk-calisan.png"
              alt="IT Infrastructure"
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
                How can we deploy and manage enterprise IT hardware?
              </div>

              <div className="bubble white">
                We require secure servers, networking setup and long-term support.
              </div>

              <div className="bubble green">
                We supply, install and maintain computers, servers and
                networking systems with complete configuration,
                upgrades and after-sales technical support.
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="split-right">
            <h2>
              Build a stronger IT foundation
              with scalable infrastructure
            </h2>

            <p>
              From hardware distribution and installation
              to ongoing maintenance and technical services,
              we deliver reliable and performance-driven
              IT infrastructure solutions for growing businesses.
            </p>
          </div>

        </div>

      </section>



      <div className="hardware-section">

        {/* LEFT IMAGE */}
        <div className="hardware-image">
          <img
            src="/Live-collaboration.png"
            alt="IT Hardware"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="card">

          <a className="card1" href="#">
            <p className="heading">Installation & Technical Support</p>

            <p className="small">
              We supply, install and support a wide range of IT hardware including computers, servers, networking equipment and communication devices. Our services include installation, configuration, commissioning, maintenance, repair, upgrades and reliable after-sales technical support to ensure efficient and secure system performance.
            </p>

            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </a>

        </div>

      </div>


    </>
  );
};

export default HardwareSupport;