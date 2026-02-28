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
                To build reliable IT infrastructure,
              </p>

              <h1>it takes precision</h1>

              <div className="hw-red-line"></div>

              <span className="hw-read-story">
                READ THE STORY →
              </span>
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
      <h2>IT Hardware Solutions</h2>

      <p>
        We carry on the business of wholesale and retail trading,
        import, export, buy, sell, distribute, supply and stock
        computers, desktops, laptops, servers, data storage devices,
        networking equipment, communication devices and electronic hardware.
      </p>

      <p>
        We act as authorized dealers, distributors, stockists,
        agents and service providers offering installation,
        configuration, maintenance, upgrades and complete
        technical support services.
      </p>
    </div>

    {/* RIGHT SIDE (Scrollable Content) */}
    <div className="hw-fit-right">

      <div className="hw-fit-card">
        <h3>Wholesale & Distribution</h3>
        <p>
          Comprehensive supply chain solutions for IT hardware,
          networking devices, peripherals and digital equipment.
        </p>
      </div>

      <div className="hw-fit-card">
        <h3>Authorized Dealership</h3>
        <p>
          Official distribution and reseller partnerships with
          leading technology brands across infrastructure products.
        </p>
      </div>

      <div className="hw-fit-card">
        <h3>Installation & Commissioning</h3>
        <p>
          Professional setup, configuration and deployment
          of servers, networking systems and office automation equipment.
        </p>
      </div>

      <div className="hw-fit-card">
        <h3>Maintenance & Support</h3>
        <p>
          Warranty support, refurbishment, upgrades and
          long-term technical maintenance services.
        </p>
      </div>

    </div>

  </div>
</section>

    </div>
  );
};

export default ITHardware;