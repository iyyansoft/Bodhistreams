import "./Digital.css";
import { useEffect } from "react";
import { CalendarSearch, Ticket, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Digital = () => {


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




  useEffect(() => {

    const section = document.querySelector(".et-section");
    const cards = document.querySelectorAll(".et-card");

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          window.addEventListener("scroll", handleScroll);

        } else {

          window.removeEventListener("scroll", handleScroll);

        }

      });

    }, { threshold: 0.3 });


    observer.observe(section);


    function handleScroll() {

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

      cards.forEach((card, index) => {

        if (progress > 0.5) {

          card.classList.add("et-straight");

        } else {

          card.classList.remove("et-straight");

        }

      });

    }

  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);



  return (
    <>
      <section className="eventtech-hero">

        <div className="eventtech-content">



          <h1 className="eventtech-title">
            Digital Infrastructure <br />
            <span>for Event Management</span>
          </h1>

          <p className="eventtech-desc">
            Discover events, enable seamless registration,
            digital ticketing and secure access control
            for conferences, seminars and exhibitions.
          </p>

        </div>

        <div className="eventtech-image">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            alt="Event technology"
          />
        </div>

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

      {/* ---------------------------------------------------------------------------------------------------------------- */}




      <section className="et-section">

        <h2 className="et-title">
          Event Technology & Digital Platforms
        </h2>

        <div className="et-wrapper">

          <div className="et-card et-card1">
            <h3>Event Discovery</h3>
            <p>
              Discover seminars, workshops, conferences,
              exhibitions and community events through
              our digital event platform.
            </p>
          </div>

          <div className="et-card et-card2">
            <h3>Online Registration</h3>
            <p>
              Participants can register easily for
              professional training programs, symposiums
              and educational workshops.
            </p>
          </div>

          <div className="et-card et-card3">
            <h3>Online Ticket Booking</h3>
            <p>
              Secure ticket booking system for concerts,
              exhibitions, trade fairs, conferences and
              sports events.
            </p>
          </div>

          <div className="et-card et-card4">
            <h3>Payment Processing</h3>
            <p>
              Integrated payment gateway for ticket
              purchases with automated confirmations
              and digital passes.
            </p>
          </div>

          <div className="et-card et-card5">
            <h3>Access Control & Analytics</h3>
            <p>
              QR based access control, event analytics,
              marketing tools and organizer dashboard.
            </p>
          </div>

        </div>

      </section>

      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <section className="services-section">

        <p className="services-small" data-aos="fade-up">
          HOW OUR PLATFORM WORKS
        </p>

        <h1 className="services-title" data-aos="fade-up">
          Smart & Scalable Event Platform Services
        </h1>

        <div className="services-container">

          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <CalendarSearch className="service-icon" size={45} />
            <h3>Event Discovery & Promotion</h3>
            <p>
              Digital platforms for discovering, promoting and listing events
              including seminars, workshops, conferences and cultural programs.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <Ticket className="service-icon" size={45} />
            <h3>Registration & Ticketing</h3>
            <p>
              Online registration, ticket booking, ticket sales and digital
              distribution systems for various educational and entertainment
              events.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <Users className="service-icon" size={45} />
            <h3>Organizer & Participant Services</h3>
            <p>
              Connecting organizers, participants and sponsors with payment
              processing, analytics tools and event management support.
            </p>
          </div>

        </div>

      </section>



      {/* -------------------------------------------------------------------------------------------------------------- */}


      <section className="astro-section">

        {/* LEFT IMAGE */}
        <div className="astro-image">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
            alt="Profile"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="astro-content">

          <p className="astro-tag">{`{ About Platform }`}</p>

          <h1>
            DISCOVER AND <br />
            EXPERIENCE EVENTS <br />
            IN A SMARTER WAY
          </h1>

          <p className="astro-text">
            To develop and operate digital platforms including websites and
            mobile applications for event discovery, promotion, registration,
            ticket booking, payment processing, and event management services
            for educational, professional, cultural, and entertainment events.
          </p>

        </div>

      </section>



    </>
  );
};

export default Digital;