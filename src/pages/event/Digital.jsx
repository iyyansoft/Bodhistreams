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
      Build and manage events with a complete digital ecosystem that supports 
      event listing, participant registration, attendance tracking, and 
      structured feedback collection — all from a single platform.

      Enable integrated ticket booking, access real-time dashboards, and 
      generate automated reports while ensuring smooth payments, faster 
      settlements, and transparent event operations.
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
      Digital Infrastructure for Event Management
    </h2>

    <p className="eventtech-text">
      Power your events with a fully integrated digital system that simplifies 
      event operations from start to finish. Manage event listings, handle 
      participant registrations, and maintain accurate attendance records 
      through a single streamlined platform.

      Leverage built-in tools for feedback collection, automated report 
      generation, and real-time performance monitoring, while ensuring 
      secure payment processing and efficient event execution.
    </p>

    <button className="eventtech-btn">
      Explore Platform →
    </button>

  </div>

</section>
      {/* ---------------------------------------------------------------------------------------------------------------- */}




    <section className="et-section">

  <h2 className="et-title">
    Digital Infrastructure for Event Management
  </h2>

  <div className="et-wrapper">

    <div className="et-card et-card1">
      <h3>Event Listing Platform</h3>
      <p>
        Publish and showcase events through a centralized system that helps 
        organizers reach the right audience and improves event visibility.
      </p>
    </div>

    <div className="et-card et-card2">
      <h3>Participant Management</h3>
      <p>
        Handle user registrations with a simplified process and maintain 
        accurate participant data with efficient tracking capabilities.
      </p>
    </div>

    <div className="et-card et-card3">
      <h3>Ticketing System</h3>
      <p>
        Enable seamless ticket booking with a secure digital system designed 
        for smooth transactions and hassle-free user experience.
      </p>
    </div>

    <div className="et-card et-card4">
      <h3>Secure Payment Flow</h3>
      <p>
        Integrated payment processing ensures safe transactions, instant 
        confirmations, and streamlined financial operations for events.
      </p>
    </div>

    <div className="et-card et-card5">
      <h3>Insights & Reporting</h3>
      <p>
        Access performance data through dashboards and generate structured 
        reports to evaluate event outcomes and participant engagement.
      </p>
    </div>

  </div>

</section>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

     <section className="services-section">

  <p className="services-small" data-aos="fade-up">
    HOW OUR PLATFORM OPERATES
  </p>

  <h1 className="services-title" data-aos="fade-up">
    Digital Infrastructure for Event Management
  </h1>

  <div className="services-container">

    <div className="service-card" data-aos="fade-up" data-aos-delay="100">
      <CalendarSearch className="service-icon" size={45} />
      <h3>Centralized Event Listing</h3>
      <p>
        Manage and showcase events through a unified system that improves 
        visibility and simplifies how users access and explore available programs.
      </p>
    </div>

    <div className="service-card" data-aos="fade-up" data-aos-delay="200">
      <Ticket className="service-icon" size={45} />
      <h3>Registration & Transaction Flow</h3>
      <p>
        Enable smooth participant onboarding with streamlined registration, 
        integrated ticketing, and secure payment handling within a single workflow.
      </p>
    </div>

    <div className="service-card" data-aos="fade-up" data-aos-delay="300">
      <Users className="service-icon" size={45} />
      <h3>Data, Insights & Control</h3>
      <p>
        Monitor event performance using dashboards, generate structured reports, 
        and manage participants efficiently with data-driven decision support.
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
      alt="Event platform user"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="astro-content">

    <p className="astro-tag">{`{ Platform Overview }`}</p>

    <h1>
      BUILD AND MANAGE <br />
      EVENTS WITH A <br />
      DIGITAL ECOSYSTEM
    </h1>

    <p className="astro-text">
      A comprehensive digital framework designed to support end-to-end event 
      operations — from publishing events and handling registrations to 
      managing ticketing workflows and processing transactions.

      The platform also enables structured feedback collection, automated 
      reporting, and real-time monitoring, ensuring efficient execution 
      and better control over event performance.
    </p>

  </div>

</section>


    </>
  );
};

export default Digital;