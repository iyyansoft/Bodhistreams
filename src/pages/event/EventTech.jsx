import "./EventTech.css";
import { useEffect } from "react";

const EventTech = () => {


  useEffect(() => {

    const handleScroll = () => {

      const section = document.querySelector(".eventPeople-section");
      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) / (windowHeight + sectionHeight);

      const img1 = document.querySelector(".img1");
      const img2 = document.querySelector(".img2");
      const img3 = document.querySelector(".img3");

      if (progress >= 0 && progress <= 1) {

        img1.style.transform =
          `translateY(${progress * -400}px) rotate(-12deg)`;

        img2.style.transform =
          `translateY(${progress * -500}px) rotate(8deg)`;

        img3.style.transform =
          `translateY(${progress * -450}px) rotate(12deg)`;

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <section className="eventtech-hero">

        <div className="eventtech-container">

          <p className="eventtech-tag">
            <span className="eventtech-star">✦</span>
            EVENTTECH
          </p>

          <h1 className="eventtech-title">
            EVENT TECHNOLOGY & <br /> <span>ACCESS CONTROL</span>
          </h1>

          <p className="eventtech-desc">
            Our digital platform enables event discovery,
            registration, online ticket booking, payment
            processing and secure access control for
            seminars, conferences, exhibitions and
            professional events.
          </p>

        </div>

      </section>


      {/* PEOPLE SECTION */}



      <section className="eventPeople-section">

        <h1 className="eventPeople-bgText">
          Technology Behind Every Event
        </h1>

        {/* Event Speaker */}

        <img
          className="event-img img1"
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
          alt="Conference Speaker"
        />

        <img
          className="event-img img2"
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
          alt="Event Networking"
        />

        <img
          className="event-img img3"
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop"
          alt="Conference Audience"
        />

      </section>




{/* ---------------------------------------------------------------------------------------------------- */}



    <section className="eventtech-section">

      {/* LEFT IMAGE */}

      <div className="eventtech-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Event Technology"
        />
      </div>

      {/* RIGHT CONTENT */}

      <div className="eventtech-right">

        <h2 className="eventtech-heading">
          Event Technology & Digital Platforms
        </h2>

        <p className="eventtech-text">
          We develop and operate digital platforms for event discovery,
          registration, ticket booking and secure access control. Our
          technology enables organizers to manage seminars, workshops,
          conferences, exhibitions and live events efficiently while
          providing seamless ticketing and payment solutions.
        </p>

        <button className="eventtech-btn">
          Explore Platform →
        </button>

      </div>

    </section>

    </>
  );
};

export default EventTech;