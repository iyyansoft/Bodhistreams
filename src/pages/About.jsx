import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Driving innovation through technology, education, events and practical solutions.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="about-section">
        <div className="split-section">
          <div className="split-text">
            <h2>Empowering Institutions Through Innovation</h2>
            <p>
              BodhiStreams Convergence Private Limited specializes in designing,
              setting up, and operationalizing Innovation Labs, STEM Labs, and Makerspaces.
            </p>
            <p>
              We help schools, colleges, universities, and organizations transition
              from traditional approaches to hands-on learning and digital transformation.
            </p>
            <p className="highlight">
              👉 We don’t just build labs — we ensure they are  productive and outcome-driven.
            </p>
          </div>

          <div className="split-image">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="overview" />
          </div>
        </div>
      </section>

      {/* LAB */}
      {/* <section className="about-section dark"> */}
        <div className="split-section reverse">
          <div className="split-text">
            <h2>Innovation Labs & STEM Setup</h2>
            <p>Complete turnkey lab setup solutions.</p>

            <div className="grid">
              <div className="card"><h3>Lab Design</h3><p>Smart planning & layout.</p></div>
              <div className="card"><h3>Equipment</h3><p>IoT, robotics, 3D printers.</p></div>
              <div className="card"><h3>Setup</h3><p>Installation & commissioning.</p></div>
              <div className="card"><h3>Custom Labs</h3><p>Tailored solutions.</p></div>
            </div>
          </div>

          <div className="split-image">
            <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232" alt="lab" />
          </div>
        </div>
      {/* </section> */}

      {/* TRAINING */}
      {/* <section className="about-section"> */}
        <div className="split-section">
          <div className="split-text">
            <h2>Training & Capacity Building</h2>

            <div className="grid">
              <div className="card"><h3>STEM</h3><p>Robotics & AI basics.</p></div>
              <div className="card"><h3>College</h3><p>IoT & Analytics.</p></div>
              <div className="card"><h3>Fabrication</h3><p>3D printing & PCB.</p></div>
              <div className="card"><h3>Startup</h3><p>Idea to product.</p></div>
            </div>

            <p className="highlight">
              👉 Learning by doing approach.
            </p>
          </div>

          <div className="split-image">
            <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
  alt="training"
/>
          </div>
        </div>
      {/* </section> */}

      {/* IT */}
      {/* <section className="about-section dark"> */}
        <div className="split-section reverse">
          <div className="split-text">
            <h2>IT Infrastructure</h2>

            <div className="grid">
              <div className="card"><h3>Hardware</h3><p>Servers & systems.</p></div>
              <div className="card"><h3>Installation</h3><p>Setup & integration.</p></div>
              <div className="card"><h3>Maintenance</h3><p>Support & upgrades.</p></div>
              <div className="card"><h3>Reliable</h3><p>Scalable systems.</p></div>
            </div>
          </div>

          <div className="split-image">
            <img src="https://www.techicy.com/wp-content/uploads/2022/09/What-is-IT-infrastructure.jpg" alt="it" />
          </div>
        </div>
      {/* </section> */}

      {/* CLIENTS */}
<section className="client-section">

  <div className="client-header">
    <p>OUR NETWORK</p>
    <h2>Who We Work With</h2>
  </div>

  <div className="client-grid">

    <div className="client-card">
      {/* <span>🏫</span> */}
      <h3>Schools</h3>
    </div>

    <div className="client-card">
      {/* <span>🎓</span> */}
      <h3>Colleges</h3>
    </div>

    <div className="client-card">
      {/* <span>🏛️</span> */}
      <h3>Universities</h3>
    </div>

    <div className="client-card">
      {/* <span>🌐</span> */}
      <h3>Government</h3>
    </div>

    <div className="client-card">
      {/* <span>🏢</span> */}
      <h3>Corporates</h3>
    </div>

  </div>

</section>

      {/* EVENTZGO */}
<section className="eventzgo-section">

  <div className="eventzgo-header">

    <p>ALL-IN-ONE EVENT MANAGEMENT PLATFORM</p>

    <h2>EventzGo Platform</h2>

    <span>
      Managing events shouldn’t feel like running a second event in itself.
      EventzGo simplifies event operations with smart automation,
      AI-powered tools, and end-to-end event management solutions.
    </span>

  </div>

  <div className="eventzgo-content">

    <div className="eventzgo-left">

      <div className="eventzgo-card">
        <div className="event-icon">🎫</div>

        <h3>Free Event Listing</h3>

        <p>
          List your events for free with zero upfront costs and no hidden charges.
          Enjoy 1 full year of zero platform fees as part of our launch offer.
        </p>
      </div>

      <div className="eventzgo-card">
        <div className="event-icon">📍</div>

        <h3>Attendance & Tracking</h3>

        <p>
          Mark attendance effortlessly using our simplified tracking system
          and manage participants in real time.
        </p>
      </div>

      <div className="eventzgo-card">
        <div className="event-icon">🤖</div>

        <h3>AI Feedback Summaries</h3>

        <p>
          Collect structured feedback from attendees and let AI automatically
          summarize insights after every event.
        </p>
      </div>

      <div className="eventzgo-card">
        <div className="event-icon">📋</div>

        <h3>Automated Reports</h3>

        <p>
          Generate professional event completion reports instantly
          with just one click.
        </p>
      </div>

    </div>

    <div className="eventzgo-right">

      <div className="eventzgo-highlight">

        <h3>🚀 Advanced Capabilities Built for Growth</h3>

        <ul>
          <li>End-to-end ticket booking system</li>
          <li>Dedicated organizer dashboard</li>
          <li>Weekly, monthly & yearly reports</li>
          <li>Scheduled & faster settlements</li>
          <li>Transparent refund management</li>
          <li>Performance analytics & insights</li>
        </ul>

      </div>

      <div className="eventzgo-highlight">

        <h3>🔮 Coming Soon</h3>

        <ul>
          <li>Vendor networking tools</li>
          <li>Sponsor collaboration system</li>
          <li>Subject matter expert access</li>
          <li>Expanded organizer ecosystem</li>
        </ul>

      </div>

      <div className="eventzgo-note">

        <h3>Perfect For</h3>

        <p>
          Academic conferences, corporate workshops, college events,
          public programs, seminars, expos, hackathons, and large-scale
          community events.
        </p>

      </div>

    </div>

  </div>

  <div className="eventzgo-bottom">

    <h3>Ready to Transform Your Events?</h3>

    <p>
      Whether you're managing workshops, academic conferences,
      or enterprise-scale programs, EventzGo is built to scale with you.
    </p>

    <a href="https://www.eventzgo.com" target="_blank">
      👉 Get Started at www.eventzgo.com
    </a>

  </div>

</section>

      {/* CTA */}


    </div>
  );
}