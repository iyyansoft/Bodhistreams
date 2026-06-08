import "./About.css";
import PageWrapper from "../components/PageWrapper";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <PageWrapper>
      <div className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-left">
              <AnimatedSection type="slideRight" duration={0.7}>
                <span className="about-hero-tag">WHO WE ARE</span>
                <h1>About BodhiStreams</h1>
                <div className="accent-line"></div>
              </AnimatedSection>
            </div>

            <div className="about-hero-right">
              <AnimatedSection type="slideLeft" duration={0.7}>
                <p>
                  BodhiStreams Convergence Private Limited is a forward-thinking technology partner. We specialize in turning vision into reality through turnkey Innovation Labs, custom IT infrastructure setups, and next-generation event technology.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* PILLARS / HIGHLIGHTS */}
        <section className="about-pillars">
          <div className="pillars-grid">
            <AnimatedSection type="scale" delay={0.1} className="pillar-card">
              <div className="pillar-icon">🔬</div>
              <h3>STEM & Innovation</h3>
              <p>Turnkey lab designs, STEM setup, MakerSpaces, IoT, and custom academic programs.</p>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.2} className="pillar-card">
              <div className="pillar-icon">💻</div>
              <h3>IT Infrastructure</h3>
              <p>High-performance networks, server installations, and comprehensive support.</p>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.3} className="pillar-card">
              <div className="pillar-icon">🎫</div>
              <h3>EventzGo Platform</h3>
              <p>AI-driven event insights, easy registration, ticketing, and fast settlements.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="about-section">
          <div className="split-section">
            <AnimatedSection type="slideRight" className="split-text" duration={0.7}>
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
            </AnimatedSection>

            <AnimatedSection type="slideLeft" className="split-image" duration={0.7}>
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="overview" />
            </AnimatedSection>
          </div>
        </section>

        {/* LAB */}
        <section className="about-section">
          <div className="split-section reverse">
            <AnimatedSection type="slideRight" className="split-text" duration={0.7}>
              <h2>Innovation Labs & STEM Setup</h2>
              <p>Complete turnkey lab setup solutions.</p>

              <div className="grid">
                <div className="card"><h3>Lab Design</h3><p>Smart planning & layout.</p></div>
                <div className="card"><h3>Equipment</h3><p>IoT, robotics, 3D printers.</p></div>
                <div className="card"><h3>Setup</h3><p>Installation & commissioning.</p></div>
                <div className="card"><h3>Custom Labs</h3><p>Tailored solutions.</p></div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="slideLeft" className="split-image" duration={0.7}>
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232" alt="lab" />
            </AnimatedSection>
          </div>
        </section>

        {/* TRAINING */}
        <section className="about-section">
          <div className="split-section">
            <AnimatedSection type="slideRight" className="split-text" duration={0.7}>
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
            </AnimatedSection>

            <AnimatedSection type="slideLeft" className="split-image" duration={0.7}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="training"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* IT */}
        <section className="about-section">
          <div className="split-section reverse">
            <AnimatedSection type="slideRight" className="split-text" duration={0.7}>
              <h2>IT Infrastructure</h2>

              <div className="grid">
                <div className="card"><h3>Hardware</h3><p>Servers & systems.</p></div>
                <div className="card"><h3>Installation</h3><p>Setup & integration.</p></div>
                <div className="card"><h3>Maintenance</h3><p>Support & upgrades.</p></div>
                <div className="card"><h3>Reliable</h3><p>Scalable systems.</p></div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="slideLeft" className="split-image" duration={0.7}>
              <img src="https://www.techicy.com/wp-content/uploads/2022/09/What-is-IT-infrastructure.jpg" alt="it" />
            </AnimatedSection>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="client-section">
          <AnimatedSection type="fade" duration={0.6}>
            <div className="client-header">
              <p>OUR NETWORK</p>
              <h2>Who We Work With</h2>
            </div>
          </AnimatedSection>

          <div className="client-grid">
            <AnimatedSection type="scale" delay={0.1} className="client-card">
              <h3>Schools</h3>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.2} className="client-card">
              <h3>Colleges</h3>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.3} className="client-card">
              <h3>Universities</h3>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.4} className="client-card">
              <h3>Government</h3>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.5} className="client-card">
              <h3>Corporates</h3>
            </AnimatedSection>
          </div>
        </section>

        {/* EVENTZGO */}
        <section className="eventzgo-section">
          <AnimatedSection type="slideUp">
            <div className="eventzgo-header">
              <p>ALL-IN-ONE EVENT MANAGEMENT PLATFORM</p>
              <h2>EventzGo Platform</h2>
              <span>
                Managing events shouldn’t feel like running a second event in itself.
                EventzGo simplifies event operations with smart automation,
                AI-powered tools, and end-to-end event management solutions.
              </span>
            </div>
          </AnimatedSection>

          <div className="eventzgo-content">
            <div className="eventzgo-left">
              <AnimatedSection type="slideRight" delay={0.1} className="eventzgo-card">
                <div className="event-icon">🎫</div>
                <h3>Free Event Listing</h3>
                <p>
                  List your events for free with zero upfront costs and no hidden charges.
                  Enjoy 1 full year of zero platform fees as part of our launch offer.
                </p>
              </AnimatedSection>

              <AnimatedSection type="slideRight" delay={0.2} className="eventzgo-card">
                <div className="event-icon">📍</div>
                <h3>Attendance & Tracking</h3>
                <p>
                  Mark attendance effortlessly using our simplified tracking system
                  and manage participants in real time.
                </p>
              </AnimatedSection>

              <AnimatedSection type="slideRight" delay={0.3} className="eventzgo-card">
                <div className="event-icon">🤖</div>
                <h3>AI Feedback Summaries</h3>
                <p>
                  Collect structured feedback from attendees and let AI automatically
                  summarize insights after every event.
                </p>
              </AnimatedSection>

              <AnimatedSection type="slideRight" delay={0.4} className="eventzgo-card">
                <div className="event-icon">📋</div>
                <h3>Automated Reports</h3>
                <p>
                  Generate professional event completion reports instantly
                  with just one click.
                </p>
              </AnimatedSection>
            </div>

            <div className="eventzgo-right">
              <AnimatedSection type="slideLeft" delay={0.1} className="eventzgo-highlight">
                <h3>🚀 Advanced Capabilities Built for Growth</h3>
                <ul>
                  <li>End-to-end ticket booking system</li>
                  <li>Dedicated organizer dashboard</li>
                  <li>Weekly, monthly & yearly reports</li>
                  <li>Scheduled & faster settlements</li>
                  <li>Transparent refund management</li>
                  <li>Performance analytics & insights</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection type="slideLeft" delay={0.2} className="eventzgo-highlight">
                <h3>🔮 Coming Soon</h3>
                <ul>
                  <li>Vendor networking tools</li>
                  <li>Sponsor collaboration system</li>
                  <li>Subject matter expert access</li>
                  <li>Expanded organizer ecosystem</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection type="slideLeft" delay={0.3} className="eventzgo-note">
                <h3>Perfect For</h3>
                <p>
                  Academic conferences, corporate workshops, college events,
                  public programs, seminars, expos, hackathons, and large-scale
                  community events.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection type="slideUp" className="eventzgo-bottom">
            <h3>Ready to Transform Your Events?</h3>
            <p>
              Whether you're managing workshops, academic conferences,
              or enterprise-scale programs, EventzGo is built to scale with you.
            </p>
            <a href="https://www.eventzgo.com" target="_blank">
              👉 Get Started at www.eventzgo.com
            </a>
          </AnimatedSection>
        </section>
      </div>
    </PageWrapper>
  );
}