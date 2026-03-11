import "./VendorsConnect.css";
import { useEffect } from "react";


const VendorsConnect = () => {


  useEffect(() => {

    let lastScroll = window.scrollY;

    const handleScroll = () => {

      const cards = document.querySelectorAll(".feedback-card");
      const section = document.querySelector(".feedback-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const currentScroll = window.scrollY;

      /* section screen inside iruka check */
      if (rect.top < window.innerHeight && rect.bottom > 0) {

        if (currentScroll > lastScroll) {
          /* Scroll Down */
          cards.forEach(card => card.classList.add("active"));
        }
        else {
          /* Scroll Up */
          cards.forEach(card => card.classList.remove("active"));
        }

      }

      lastScroll = currentScroll;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (
    <>
      <section className="ticket-hero">

        {/* LEFT IMAGE */}
        <div className="ticket-image">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop"
            alt="Event Ticketing"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="ticket-content">

          <h1 className="ticket-title">
            CAPTURE THE <br /> MOMENT!
          </h1>

          <p>
            Our platform provides secure online ticket booking for
            concerts, exhibitions, trade fairs, sports events and
            conferences. Users can purchase tickets instantly and
            receive digital confirmations through automated systems.
          </p>

          <button className="ticket-btn">
            Book Tickets
          </button>

        </div>

      </section>


      {/* ----------------------------------------------------------------------------------------------------- */}


      <section className="event-strip-wrapper">

        <h2 className="event-section-heading">
          Explore Our Event Experiences
        </h2>

        <div className="event-strip">

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Expertise"
            />
            <div className="event-text">Leading with Expertise</div>
          </div>

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
              alt="Innovation"
            />
            <div className="event-text">Igniting Innovation</div>
          </div>

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
              alt="Events"
            />
            <div className="event-text">Explore Events</div>
          </div>

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              alt="Growth"
            />
            <div className="event-text">Sharpening Your Edge</div>
          </div>

          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1200&auto=format&fit=crop"
              alt="Sports"
            />
            <div className="event-text">Excellence in Sports</div>
          </div>

        </div>

      </section>


      {/* ----------------------------------------------------------------------------------------------------- */}



      <section className="ticketing-wrapper">

        {/* LEFT IMAGE */}
        <div className="ticketing-image-box">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop"
            alt="Event Ticketing"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="ticketing-card-area">

          <a className="ticketing-card" href="#">

            <h3 className="ticketing-title">
              Online Ticketing Platform
            </h3>

            <p className="ticketing-text">
              Our platform provides secure online ticket booking for
              concerts, exhibitions, trade fairs, sports events and
              conferences. Users can purchase tickets instantly and
              receive digital confirmations through automated ticketing
              systems and QR-based entry passes.
            </p>

            <div className="ticketing-corner">
              <span className="ticketing-arrow">→</span>
            </div>

          </a>

        </div>

      </section>


      {/* ----------------------------------------------------------------------------------------------------------------- */}



      <section className="feedback-section">

        <h2 className="feedback-heading">
          What Our Community Says
        </h2>

        <div className="feedback-card card1">
          <span>★★★★★</span>
          <p>
            The best climbing gym I've been to. The routes are creative,
            well-maintained and constantly changing.
          </p>
        </div>

        <div className="feedback-card card2">
          <span>★★★★★</span>
          <p>
            I tried climbing for the first time here and instantly
            felt comfortable.
          </p>
        </div>

        <div className="feedback-card card3">
          <span>★★★★★</span>
          <p>
            Amazing community and events. Highly recommended.
          </p>
        </div>

        <div className="feedback-card card4">
          <span>★★★★★</span>
          <p>
            Event discovery and ticket booking works perfectly.
          </p>
        </div>

      </section>


      {/* ----------------------------------------------------------------------------------------------- */}

      <section className="event-hero">

        <div className="event-hero-content">

          <h1>
            Discover Events <br />
            & Book Tickets Instantly
          </h1>

          <p>
            "Explore seminars, workshops, conferences and live events
            through our smart event discovery and secure ticketing platform."
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Explore Events
            </button>

            <button className="btn-outline">
              View Ticketing
            </button>

          </div>

        </div>

      </section>




    </>
  );
};

export default VendorsConnect;