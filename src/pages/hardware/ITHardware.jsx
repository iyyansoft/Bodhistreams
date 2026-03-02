import "./ITHardware.css";

const ITHardware = () => {
  return (
    <div className="hardware-page">

      {/* ================= TOP IMAGE BANNER ================= */}
      <section className="hw-top-wrapper">
        <div className="hw-top-banner">
          <div className="hw-overlay">
            <div className="hw-banner-text">
              <p className="hw-small-text">
                Wholesale • Distribution • Authorized Dealership
              </p>

              <h1>Powering Businesses with Trusted IT Hardware</h1>

              <div className="hw-red-line"></div>

             
            </div>
          </div>
        </div>
      </section>

      {/* ================= YELLOW SECTION ================= */}
      <section className="hw-yellow-section">
        <div className="hw-container">

          {/* LEFT */}
          <div className="hw-left">
            <p className="hw-tag">All-in-one IT Infrastructure</p>

            <h2>IT Hardware Trading & Distribution</h2>

            <p>
              Wholesale and retail trading of computers, servers,
              storage systems, networking equipment, electronic
              hardware and IT peripherals.
            </p>

            <p>
              Authorized distribution, installation, maintenance,
              upgrades and complete technical support services.
            </p>

            <button className="hw-btn">
              EXPLORE HARDWARE SOLUTIONS →
            </button>
          </div>

          {/* DIVIDER */}
          <div className="hw-divider"></div>

          {/* RIGHT */}
          <div className="hw-right">


            <p className="hw-quote">
              "Reliable hardware solutions designed for
              performance, scalability and long-term growth."
            </p>

            <div className="hw-author">

              <div>
                <h4>BodhiStreams Technology Division</h4>
                <p>Hardware & Infrastructure Team</p>
              </div>
            </div>
          </div>

        </div>

        <div className="hw-cube"></div>
      </section>








      {/* ================= WHO IS A GOOD FIT STYLE SECTION ================= */}

      <section className="hw-fit-section">
        <div className="hw-fit-container">

          {/* LEFT SIDE (Sticky) */}
          <div className="hw-fit-left">
            <h2>Who’s a Good Fit?</h2>

            <p>
              Our IT Hardware Trading & Distribution division supports
              enterprises, system integrators and growing organizations
              seeking reliable and scalable infrastructure solutions.
            </p>

            <p>
              From procurement to installation and long-term maintenance,
              we ensure operational efficiency, performance stability
              and business continuity.
            </p>
          </div>

          {/* RIGHT SIDE (Scroll Area) */}
          <div className="hw-fit-right">

            <div className="hw-fit-card">
              <h3>Wholesale & Distribution</h3>
              <p>
                Comprehensive supply chain solutions for IT hardware,
                networking devices and digital infrastructure equipment.
              </p>
            </div>

            <div className="hw-fit-card">
              <h3>Authorized Dealership</h3>
              <p>
                Official reseller partnerships with leading technology
                brands across enterprise infrastructure products.
              </p>
            </div>

            <div className="hw-fit-card">
              <h3>Installation & Commissioning</h3>
              <p>
                Professional configuration and deployment of servers,
                storage systems and networking equipment.
              </p>
            </div>

            <div className="hw-fit-card">
              <h3>Maintenance & Support</h3>
              <p>
                Warranty handling, hardware upgrades and long-term
                technical support services.
              </p>
            </div>

            <div className="hw-fit-card">
              <h3>Infrastructure Design</h3>
              <p>
                Strategic architecture planning for scalable and
                future-ready IT ecosystems.
              </p>
            </div>

            <div className="hw-fit-card">
              <h3>Hardware Refurbishment</h3>
              <p>
                Component replacement and lifecycle extension services
                ensuring sustained performance.
              </p>
            </div>

            <div className="hw-fit-card">
              <h3>Annual Maintenance Contracts</h3>
              <p>
                Preventive maintenance, priority response and
                comprehensive AMC support coverage.
              </p>
            </div>

          </div>
        </div>
      </section>











      {/* ------------------------------------------------------------------------------------------------------------- */}
      <section className="hw-v7-section">

        <h2 className="hw-v7-title">
          How Our Hardware Process Works
        </h2>

        <div className="hw-v7-grid">

          {/* CARD 1 */}
          <div className="hw-v7-card">
            <div className="hw-v7-inner">
              <div className="hw-v7-front">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
                  alt="Enterprise Server Rack"
                />
              </div>
              <div className="hw-v7-back">
                <h3>01. Source & Supply</h3>
                <p>
                  Importing and distributing enterprise-grade
                  servers, networking equipment and IT
                  hardware from trusted manufacturers.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="hw-v7-card">
            <div className="hw-v7-inner">
              <div className="hw-v7-front">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                  alt="Data Center Infrastructure"
                />
              </div>
              <div className="hw-v7-back">
                <h3>02. Deploy & Configure</h3>
                <p>
                  Installation, commissioning and configuration
                  ensuring optimal performance and scalability.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="hw-v7-card">
            <div className="hw-v7-inner">
              <div className="hw-v7-front">
                <img
                  src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1200&auto=format&fit=crop"
                  alt="Networking Equipment"
                />
              </div>
              <div className="hw-v7-back">
                <h3>03. Maintain & Support</h3>
                <p>
                  Warranty coverage, hardware upgrades and
                  long-term technical maintenance services.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ---------------------------------------------------------------------------------------------- */}



      <section className="hw-customer-section">
        <div className="hw-customer-container">

          {/* LEFT CONTENT */}
          <div className="hw-customer-left">
            <p className="hw-small-title">IT HARDWARE TRADING & DISTRIBUTION</p>

            <h2>
              Comprehensive IT Hardware <br />
              Supply & Service Solutions
            </h2>

            <p>
              We specialize in wholesale and retail trading of computers,
              laptops, servers, storage devices, networking equipment,
              peripherals and all types of electronic and digital products.
            </p>


          </div>

          {/* RIGHT IMAGE */}
          <div className="hw-customer-right">
            <img
              src="https://images.unsplash.com/photo-1581092919535-7146ff1a590b?q=80&w=1200&auto=format&fit=crop"
              alt="Enterprise Server Infrastructure"
            />
          </div>

        </div>
      </section>









      {/* ---------------------------------------------------------------------------------------------- */}

      <section className="cta-section1">

        <div className="cta-content1">

          <h2>
            Power your business with reliable <br />
            IT Hardware Trading & Distribution
          </h2>

          <div className="cta-buttons1">
            <button className="cta-primary1">
              Contact Sales
            </button>

            <button className="cta-outline1">
              View IT Services
            </button>
          </div>

        </div>

      </section>




    </div>
  );
};

export default ITHardware;