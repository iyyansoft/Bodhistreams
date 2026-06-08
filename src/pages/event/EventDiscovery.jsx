import "./EventDiscovery.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const EventDiscovery = () => {
  return (
    <PageWrapper>
      <div className="event-discovery-page">
        {/* HERO */}
        <section className="ed-hero">
          <div className="ed-overlay"></div>
          <div className="ed-container">
            <AnimatedSection type="slideRight" className="ed-left" duration={0.7}>
              <span className="ed-dot"></span>
              <p className="ed-mini">
                Event Discovery Platform
              </p>
              <h1>
                Discover & Register Professional Events
              </h1>
            </AnimatedSection>
          </div>
          <h2 className="ed-big-text">
            EVENTS
          </h2>
        </section>

        {/* MANAGEMENT & REGISTRATION SECTION */}
        <section className="event-discovery-section">
          <AnimatedSection type="slideRight" className="event-content" duration={0.7}>
            <h2>Event Management & Registration Platform</h2>
            <p>
              We provide a powerful all-in-one platform to manage and streamline your events 
              efficiently. From event creation and promotion to registration, attendance tracking, 
              and ticket booking — everything is handled seamlessly in one place.
              
              Our solution is designed for workshops, conferences, seminars, corporate programs, 
              and large-scale events, helping organizers save time, reduce manual work, and 
              deliver a professional experience.
            </p>

            <div className="event-features">
              <div className="feature-card">🎟️ Event Creation & Listing</div>
              <div className="feature-card">📝 Easy Registration System</div>
              <div className="feature-card">📊 Attendance & Reports</div>
              <div className="feature-card">💳 Ticketing & Payments</div>
              <div className="feature-card">🤖 AI Feedback Summary</div>
              <div className="feature-card">⚡ Fast Settlements</div>
            </div>

            <button className="event-btn">Explore Platform</button>
          </AnimatedSection>

          <div className="event-image">
            <AnimatedSection type="slideLeft" duration={0.7}>
              <img
                src="/registaration.png"
                alt="Event conference audience"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* HOW EVENTZGO WORKS */}
        <section className="service-wrapper">


          <div className="service-text">
            {/* EVENT CREATION */}
            <div className="service-row">
              <div className="service-img">
                <AnimatedSection type="slideRight">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                    alt="Event creation and listing"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection type="slideLeft" className="service-info">
                <h2>Create & Publish Events</h2>
                <p>
                  Easily create and list your events on our platform at no cost. 
                  Add event details, schedules, and categories to reach the right audience.
                </p>
              </AnimatedSection>
            </div>

            {/* PROMOTION */}
            <div className="service-row reverse">
              <div className="service-img">
                <AnimatedSection type="slideLeft">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                    alt="Event promotion marketing"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection type="slideRight" className="service-info">
                <h2>Promotion & Audience Reach</h2>
                <p>
                  Promote your events effectively through digital channels and increase 
                  visibility to attract the right participants and maximize engagement.
                </p>
              </AnimatedSection>
            </div>

            {/* REGISTRATION */}
            <div className="service-row">
              <div className="service-img">
                <AnimatedSection type="slideRight">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                    alt="Event registration"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection type="slideLeft" className="service-info">
                <h2>Registration & Attendance Tracking</h2>
                <p>
                  Manage registrations seamlessly and track attendance with ease. 
                  Collect feedback and generate automated event reports.
                </p>
              </AnimatedSection>
            </div>

            {/* TICKETING */}
            <div className="service-row reverse">
              <div className="service-img">
                <AnimatedSection type="slideLeft">
                  <img
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                    alt="Ticketing payments"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection type="slideRight" className="service-info">
                <h2>Ticketing & Secure Payments</h2>
                <p>
                  Enable smooth ticket booking with secure online payments and 
                  ensure faster settlements with a transparent process.
                </p>
              </AnimatedSection>
            </div>

            {/* ANALYTICS */}
            <div className="service-row">
              <div className="service-img">
                <AnimatedSection type="slideRight">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    alt="Event analytics dashboard"
                  />
                </AnimatedSection>
              </div>
              <AnimatedSection type="slideLeft" className="service-info">
                <h2>Analytics & Performance Insights</h2>
                <p>
                  Access real-time dashboards, track event performance, and 
                  analyze participation trends with detailed reports.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ABOUT PLATFORM */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-image">
              <AnimatedSection type="slideRight" duration={0.7}>
                <img
                  src="/eventhome1.png"
                  alt="Live event"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection type="slideLeft" className="about-content" duration={0.7}>
              <h1>EVENT DISCOVERY & REGISTRATION PLATFORM</h1>
              <p>
                Explore upcoming events through a unified platform designed to help users 
                quickly find relevant programs across multiple domains. From professional 
                meetups to large-scale conferences, everything is organized for easy access 
                and seamless browsing.
              </p>
              <p>
                Participants can register instantly without complex steps, while organizers 
                gain full control to handle registrations, monitor participant flow, and 
                manage event data efficiently from a single dashboard.
              </p>
              <button className="about-btn">Get Started</button>
            </AnimatedSection>
          </div>
        </section>

        {/* EVENT SERVICES GRID */}
        <section className="event-services">
          <AnimatedSection type="fade">
            <h2>All-in-One Event Discovery & Booking Platform</h2>
          </AnimatedSection>

          <div className="services-grid">
            <AnimatedSection type="scale" delay={0.1} className="service-card">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop"
                alt="Event discovery"
              />
              <div className="card-overlay">
                <span>EVENT DISCOVERY</span>
                <h3>
                  Explore and discover events across multiple categories through a 
                  centralized platform with smart search, filters, and real-time visibility
                </h3>
              </div>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.2} className="service-card">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt="Registration"
              />
              <div className="card-overlay">
                <span>REGISTRATION & TICKETING</span>
                <h3>
                  Enable seamless event registration with secure ticket booking, 
                  instant confirmations, and a smooth user-friendly experience
                </h3>
              </div>
            </AnimatedSection>

            <AnimatedSection type="scale" delay={0.3} className="service-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Dashboard"
              />
              <div className="card-overlay">
                <span>EVENT MANAGEMENT DASHBOARD</span>
                <h3>
                  Manage events efficiently with powerful dashboards, attendance tracking, 
                  analytics, and automated reports — all in one platform
                </h3>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default EventDiscovery;