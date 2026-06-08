import "./VendorsConnect.css";
import { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const VendorsConnect = () => {

  useEffect(() => {

    let lastScroll = window.scrollY;

    const handleScroll = () => {

      const cards = document.querySelectorAll(".feedback-card");
      const section = document.querySelector(".feedback-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const currentScroll = window.scrollY;

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
    <PageWrapper>
      <div className="vendors-connect-page">
        {/* HERO */}
        <section className="ticket-hero">
          <div className="ticket-image">
            <AnimatedSection type="slideRight" duration={0.7}>
              <img
                src="https://miro.medium.com/0*u7Zc_-K7UWdj3Kg2.png"
                alt="Vendors Connect"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection type="slideLeft" className="ticket-content" duration={0.7}>
            <h1 className="ticket-title">
              VENDORS <br /> CONNECT
            </h1>
            <p>
              Access a network of verified vendors to simplify event execution
              with reliable logistics, venue arrangements, and technical support.
            </p>
            <ul style={{ margin: "20px 0", lineHeight: "1.8" }}>
              <li>✔ Access to verified vendors</li>
              <li>✔ Logistics, venue, and technical support</li>
              <li>✔ Streamlined coordination</li>
            </ul>
            <button className="ticket-btn">
              Explore Vendors →
            </button>
          </AnimatedSection>
        </section>

        {/* BRAND PROMOTION SERVICES */}
        <section className="event-strip-wrapper">
          <AnimatedSection type="fade">
            <h2 className="event-section-heading">
              Explore Our Brand Promotion Services
            </h2>
          </AnimatedSection>

          <div className="event-strip">
            {[
              { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop", text: "Targeted Campaigns" },
              { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", text: "Audience Segmentation" },
              { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop", text: "Digital Event Marketing" },
              { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop", text: "Cross-Platform Visibility" },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", text: "Brand Growth & Reach" }
            ].map((item, index) => (
              <AnimatedSection type="scale" delay={index * 0.05} key={index} className="event-card">
                <img src={item.img} alt={item.text} />
                <div className="event-text">{item.text}</div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section className="feedback-section">
          <AnimatedSection type="fade">
            <h2 className="feedback-heading">
              What Our Clients Say
            </h2>
          </AnimatedSection>

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

        {/* TICKETING WRAPPER */}
        <section className="ticketing-wrapper">
          <div className="ticketing-image-box">
            <AnimatedSection type="slideRight" duration={0.7}>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
                alt="Brand Promotion"
              />
            </AnimatedSection>
          </div>

          <div className="ticketing-card-area">
            <AnimatedSection type="slideLeft" duration={0.7}>
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
            </AnimatedSection>
          </div>
        </section>

        {/* HERO FOOTER */}
        <section className="event-hero">
          <AnimatedSection type="scale" className="event-hero-content">
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
          </AnimatedSection>
        </section>
      </div>
    </PageWrapper>
  );
};

export default VendorsConnect;