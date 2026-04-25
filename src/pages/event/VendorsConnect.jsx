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
      src="https://miro.medium.com/0*u7Zc_-K7UWdj3Kg2.png"
      alt="Vendors Connect"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="ticket-content">

    <h1 className="ticket-title">
      VENDORS <br /> CONNECT
    </h1>

    <p>
      Access a network of verified vendors to simplify event execution
      with reliable logistics, venue arrangements, and technical support.
    </p>

    {/* LIST CONTENT */}
    <ul style={{ margin: "20px 0", lineHeight: "1.8" }}>
      <li>✔ Access to verified vendors</li>
      <li>✔ Logistics, venue, and technical support</li>
      <li>✔ Streamlined coordination</li>
    </ul>

    <button className="ticket-btn">
      Explore Vendors →
    </button>

  </div>

</section>


      {/* ----------------------------------------------------------------------------------------------------- */}


<section className="event-strip-wrapper">

  <h2 className="event-section-heading">
    Explore Our Brand Promotion Services
  </h2>

  <div className="event-strip">

    <div className="event-card">
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
        alt="Targeted Campaigns"
      />
      <div className="event-text">Targeted Campaigns</div>
    </div>

    <div className="event-card">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
        alt="Audience Segmentation"
      />
      <div className="event-text">Audience Segmentation</div>
    </div>

    <div className="event-card">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
        alt="Digital Event Marketing"
      />
      <div className="event-text">Digital Event Marketing</div>
    </div>

    <div className="event-card">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
        alt="Cross Platform Visibility"
      />
      <div className="event-text">Cross-Platform Visibility</div>
    </div>

    <div className="event-card">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
        alt="Brand Growth"
      />
      <div className="event-text">Brand Growth & Reach</div>
    </div>

  </div>

</section>

      {/* ----------------------------------------------------------------------------------------------------------------- */}


      
<section className="feedback-section">

  <h2 className="feedback-heading">
    What Our Clients Say
  </h2>

  <div className="feedback-card card1">
    <span>★★★★★</span>
    <p>
      Our event visibility increased significantly through targeted digital marketing campaigns.
    </p>
  </div>

  <div className="feedback-card card2">
    <span>★★★★★</span>
    <p>
      Audience segmentation helped us reach the right people and improve engagement.
    </p>
  </div>

  <div className="feedback-card card3">
    <span>★★★★★</span>
    <p>
      Cross-platform promotion gave our event maximum exposure across multiple channels.
    </p>
  </div>

  <div className="feedback-card card4">
    <span>★★★★★</span>
    <p>
      Vendors Connect made logistics and coordination smooth and hassle-free.
    </p>
  </div>

</section>


      {/* ----------------------------------------------------------------------------------------------------- */}


<section className="ticketing-wrapper">

  {/* LEFT IMAGE */}
  <div className="ticketing-image-box">
    <img
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
      alt="Brand Promotion"
    />
  </div>

  {/* RIGHT CARD */}
  <div className="ticketing-card-area">

    <a className="ticketing-card" href="#">

      <h3 className="ticketing-title">
        Brand Promotion & Audience Engagement
      </h3>

      <p className="ticketing-text">
        Enhance your event visibility through targeted digital marketing campaigns,
        audience segmentation, and cross-platform promotion strategies.
        Without visibility, your event doesn’t exist — we ensure your brand
        reaches the right audience at the right time.
      </p>

      <div className="ticketing-corner">
        <span className="ticketing-arrow">→</span>
      </div>

    </a>

  </div>

</section>


      {/* ----------------------------------------------------------------------------------------------------------------- */}





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