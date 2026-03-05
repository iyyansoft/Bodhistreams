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

                {/* LEFT IMAGE */}
                <div className="event-left-img">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png"
                        alt="Event discovery"
                    />
                </div>

                {/* CENTER CONTENT */}
                <div className="event-content">

                    <h2>Event Discovery & Registration Platform</h2>

                    <p>
                        We develop and operate digital platforms including websites,
                        web portals and mobile applications for event discovery,
                        promotion, listing, registration and online ticket booking.
                        Our solutions support seminars, workshops, conferences,
                        symposiums, training programs and knowledge-sharing events
                        across engineering, medicine, agriculture, information
                        technology, science, management and skill development sectors.
                    </p>

                    <p>
                        The platform also enables entertainment events, concerts,
                        exhibitions, trade fairs, sports events and community
                        programs. It provides event management tools, ticketing
                        infrastructure, payment gateway integration, analytics,
                        marketing tools and secure interaction between organizers,
                        participants, sponsors and partners.
                    </p>

                    <button className="event-btn">
                        Explore Platform
                    </button>

                </div>

                {/* RIGHT IMAGE */}
                <div className="event-right-img">
                    <div className="event-left-img">
                        <img
                            src="/happy_event.png"
                            alt="Event discovery"
                        />
                    </div>
                </div>

            </section>



            {/* --------------------------------------------------------------------------------------------------------------------------- */}


    <section className="service-wrapper">

      {/* HERO IMAGE */}
      <div className="service-banner">
        <div className="overlay">
          <h1>How Our Services Work</h1>
        </div>
      </div>

      {/* CONTENT */}

      <div className="service-text">

        {/* EVENT DISCOVERY */}
        <div className="service-row">

          <div className="service-img">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
              alt="Event discovery"
            />
          </div>

          <div className="service-info">
            <h2>Event Discovery</h2>
            <p>
              Discover seminars, workshops and conferences across
              multiple industries through our centralized event
              discovery platform.
            </p>
          </div>

        </div>


        {/* TICKETING */}
        <div className="service-row reverse">

          <div className="service-img">
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop"
              alt="Ticket booking"
            />
          </div>

          <div className="service-info">
            <h2>Online Ticketing</h2>
            <p>
              Book tickets instantly for concerts, exhibitions
              and live events with secure digital payments.
            </p>
          </div>

        </div>


        {/* EVENT TECHNOLOGY */}
        <div className="service-row">

          <div className="service-img">
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop"
              alt="Event technology"
            />
          </div>

          <div className="service-info">
            <h2>Event Technology</h2>
            <p>
              Powerful tools for event registration, analytics,
              payment integration and audience engagement.
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
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop"
            alt="Live event"
          />
        </div>

        {/* TEXT */}
        <div className="about-content">

          <h1>EVENT DISCOVERY</h1>

          <p>
            Our digital platform enables users to discover seminars,
            workshops, conferences and professional training programs
            across industries including technology, science,
            management and education.
          </p>

          <p>
            Event organizers can publish events, manage registrations
            and reach wider audiences through a centralized
            event discovery platform.
          </p>

          <button className="about-btn">Explore Events</button>

        </div>

      </div>

    </section>


    {/* ----------------------------------------------------------------------------------------------------- */}



        <section className="event-services">

      <div className="services-grid">

        {/* CARD 1 */}
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
            alt="Event discovery"
          />

          <div className="card-overlay">
            <span>EVENT DISCOVERY</span>
            <h3>
              Discover seminars, workshops and conferences across
              multiple industries in one place
            </h3>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop"
            alt="Ticketing"
          />

          <div className="card-overlay">
            <span>ONLINE TICKETING</span>
            <h3>
              Secure digital ticket booking for concerts,
              exhibitions and live events
            </h3>
          </div>
        </div>


        {/* CARD 3 */}
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop"
            alt="Event technology"
          />

          <div className="card-overlay">
            <span>EVENT TECHNOLOGY</span>
            <h3>
              Registration systems, analytics dashboards and
              payment integrations for organizers
            </h3>
          </div>
        </div>

      </div>

    </section>




 

        </>
    );
};

export default EventDiscovery;