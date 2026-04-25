import "./EventDiscovery.css";

const EventDiscovery = () => {
  return (

    <>
      <section className="ed-hero">

        {/* background overlay */}
        <div className="ed-overlay"></div>

        <div className="ed-container">

          {/* LEFT CONTENT */}
          <div className="ed-left">

            <span className="ed-dot"></span>

            <p className="ed-mini">
              Event Discovery Platform
            </p>

            <h1>
              Discover & Register Professional Events
            </h1>

          </div>



        </div>

        {/* BIG BACKGROUND TEXT */}
        <h2 className="ed-big-text">
          EVENTS
        </h2>

      </section>


      {/* ---------------------------------------------------------------------------------------------------------- */}


<section className="event-discovery-section">

  {/* LEFT CONTENT */}
  <div className="event-content">

    <h2>Event Management & Registration Platform</h2>

    <p>
      We provide a powerful all-in-one platform to manage and streamline your events 
      efficiently. From event creation and promotion to registration, attendance tracking, 
      and ticket booking — everything is handled seamlessly in one place.

      Our solution is designed for workshops, conferences, seminars, corporate programs, 
      and large-scale events, helping organizers save time, reduce manual work, and 
      deliver a professional experience.
    </p>

    {/* FEATURE CARDS */}
    <div className="event-features">

      <div className="feature-card">🎟️ Event Creation & Listing</div>
      <div className="feature-card">📝 Easy Registration System</div>
      <div className="feature-card">📊 Attendance & Reports</div>
      <div className="feature-card">💳 Ticketing & Payments</div>
      <div className="feature-card">🤖 AI Feedback Summary</div>
      <div className="feature-card">⚡ Fast Settlements</div>

    </div>

    <button className="event-btn">Explore Platform</button>

  </div>

  {/* RIGHT IMAGE */}
  <div className="event-image">
    <img
      src="/registaration.png"
      alt="Event conference audience"
    />
  </div>

</section>



      {/* --------------------------------------------------------------------------------------------------------------------------- */}


      <section className="service-wrapper">

  {/* HERO IMAGE */}
  <div className="service-banner">
    <div className="overlay">
      <h1>How Eventzgo Works</h1>
    </div>
  </div>

  {/* CONTENT */}
  <div className="service-text">

    {/* EVENT CREATION */}
    <div className="service-row">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865"
          alt="Event creation and listing"
        />
      </div>

      <div className="service-info">
        <h2>Create & Publish Events</h2>
        <p>
          Easily create and list your events on our platform at no cost. 
          Add event details, schedules, and categories to reach the right audience.
        </p>
      </div>
    </div>

    {/* PROMOTION */}
    <div className="service-row reverse">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="Event promotion marketing"
        />
      </div>

      <div className="service-info">
        <h2>Promotion & Audience Reach</h2>
        <p>
          Promote your events effectively through digital channels and increase 
          visibility to attract the right participants and maximize engagement.
        </p>
      </div>
    </div>

    {/* REGISTRATION */}
    <div className="service-row">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          alt="Event registration"
        />
      </div>

      <div className="service-info">
        <h2>Registration & Attendance Tracking</h2>
        <p>
          Manage registrations seamlessly and track attendance with ease. 
          Collect feedback and generate automated event reports.
        </p>
      </div>
    </div>

    {/* TICKETING */}
    <div className="service-row reverse">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
          alt="Ticketing payments"
        />
      </div>

      <div className="service-info">
        <h2>Ticketing & Secure Payments</h2>
        <p>
          Enable smooth ticket booking with secure online payments and 
          ensure faster settlements with a transparent process.
        </p>
      </div>
    </div>

    {/* ANALYTICS */}
    <div className="service-row">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Event analytics dashboard"
        />
      </div>

      <div className="service-info">
        <h2>Analytics & Performance Insights</h2>
        <p>
          Access real-time dashboards, track event performance, and 
          analyze participation trends with detailed reports.
        </p>
      </div>
    </div>

  </div>

</section>


      {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}

<section className="about-section">

  <div className="about-container">

    {/* IMAGE */}
    <div className="about-image">
            <img
              src="/eventhome1.png"
              alt="Live event"
            />
    </div>

    {/* TEXT */}
    <div className="about-content">

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

    </div>

  </div>

</section>


      {/* ----------------------------------------------------------------------------------------------------- */}



<section className="event-services">

  <h2>All-in-One Event Discovery & Booking Platform</h2>

  <div className="services-grid">

    {/* CARD 1 */}
    <div className="service-card">
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
    </div>


    {/* CARD 2 */}
    <div className="service-card">
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
    </div>


    {/* CARD 3 */}
    <div className="service-card">
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
    </div>

  </div>

</section>


    </>
  );
};

export default EventDiscovery;