import "./Digital.css";
import { useEffect } from "react";
import { CalendarSearch, Ticket, Users, ShieldCheck, Gauge, Layers } from "lucide-react";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const Digital = () => {

  useEffect(() => {

    const handleScroll = () => {

      const section = document.querySelector(".eventPeople-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();

      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const progress =
        (windowHeight - rect.top) / (windowHeight + sectionHeight);

      const img1 = document.querySelector(".img1");
      const img2 = document.querySelector(".img2");
      const img3 = document.querySelector(".img3");

      if (progress >= 0 && progress <= 1) {
        if (img1) img1.style.transform = `translateY(${progress * -400}px) rotate(-12deg)`;
        if (img2) img2.style.transform = `translateY(${progress * -500}px) rotate(8deg)`;
        if (img3) img3.style.transform = `translateY(${progress * -450}px) rotate(12deg)`;
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    const section = document.querySelector(".et-section");
    const cards = document.querySelectorAll(".et-card");
    if (!section || cards.length === 0) return;

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

    return () => observer.disconnect();

  }, []);

  return (
    <PageWrapper>
      <div className="digital-page">
        {/* HERO */}
        <section className="eventtech-hero">
          <AnimatedSection type="slideRight" className="eventtech-content" duration={0.7}>
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
          </AnimatedSection>

          <div className="eventtech-image">
            <AnimatedSection type="slideLeft" duration={0.7}>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                alt="Event technology"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* SECTION 2 - DARK HERO CARD */}
        <section className="eventtech-section-container">
          <div className="eventtech-dark-card">
            <div className="eventtech-grid-overlay"></div>
            
            <div className="eventtech-left">
              <AnimatedSection type="slideRight" duration={0.7} className="eventtech-image-wrapper">
                <div className="eventtech-glow-backdrop"></div>
                <img
                  src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=900&q=80"
                  alt="Event Technology & Digital Infrastructure"
                  className="eventtech-premium-image"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection type="slideLeft" className="eventtech-right" duration={0.7}>
              <div className="eventtech-badge-lime">
                <span>EVENT ARCHITECTURE</span>
              </div>
              <h2 className="eventtech-heading-white">
                Digital Infrastructure for Event Management
              </h2>
              <p className="eventtech-text-light">
                Power your events with a fully integrated digital system that simplifies 
                event operations from start to finish. Manage event listings, handle 
                participant registrations, and maintain accurate attendance records.
              </p>
              
              <div className="eventtech-mini-features">
                <div className="mini-feature-item">
                  <span className="feature-dot">✓</span>
                  <span>Live Participant Tracking</span>
                </div>
                <div className="mini-feature-item">
                  <span className="feature-dot">✓</span>
                  <span>Automated Reporting</span>
                </div>
                <div className="mini-feature-item">
                  <span className="feature-dot">✓</span>
                  <span>Secure Payments</span>
                </div>
                <div className="mini-feature-item">
                  <span className="feature-dot">✓</span>
                  <span>Real-time Analytics</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PARALLAX CARDS */}
        <section className="et-section">
          <AnimatedSection type="fade">
            <h2 className="et-title">
              Digital Infrastructure for Event Management
            </h2>
          </AnimatedSection>

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

        {/* SERVICES SECTION */}
        <section className="services-section">
          <AnimatedSection type="fade">
            <p className="services-small">
              HOW OUR PLATFORM OPERATES
            </p>
            <h1 className="services-title">
              Digital Infrastructure for Event Management
            </h1>
          </AnimatedSection>

          <div className="services-container">
            <AnimatedSection type="slideUp" delay={0.1} className="service-card">
              <CalendarSearch className="service-icon" size={45} />
              <h3>Centralized Event Listing</h3>
              <p>
                Manage and showcase events through a unified system that improves 
                visibility and simplifies how users access and explore available programs.
              </p>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.2} className="service-card">
              <Ticket className="service-icon" size={45} />
              <h3>Registration & Transaction Flow</h3>
              <p>
                Enable smooth participant onboarding with streamlined registration, 
                integrated ticketing, and secure payment handling within a single workflow.
              </p>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.3} className="service-card">
              <Users className="service-icon" size={45} />
              <h3>Data, Insights & Control</h3>
              <p>
                Monitor event performance using dashboards, generate structured reports, 
                and manage participants efficiently with data-driven decision support.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ASTRO SECTION */}
        <section className="astro-section">
          <div className="astro-image">
            <AnimatedSection type="slideRight" duration={0.7}>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
                alt="Event platform user"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection type="slideLeft" className="astro-content" duration={0.7}>
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
          </AnimatedSection>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Digital;