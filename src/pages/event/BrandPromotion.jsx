import { useState, useEffect } from "react";
import "./BrandPromotion.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const initialEvents = [
  { title: "Seminars", desc: "Knowledge sharing", icon: "📘", color: "#7C3AED" },
  { title: "Workshops", desc: "Hands-on learning", icon: "💡", color: "#2563EB" },
  { title: "Hackathons", desc: "Build & innovate", icon: "💻", color: "#059669" },
  { title: "Conclaves", desc: "Expert gatherings", icon: "👥", color: "#EA580C" },
  { title: "Conference", desc: "Professional events", icon: "🎤", color: "#DB2777" },
  { title: "Culturals", desc: "Art & performance", icon: "🎵", color: "#7C3AED" },
  { title: "Business", desc: "Networking & trade", icon: "💼", color: "#374151" },
  { title: "Community", desc: "Social causes", icon: "❤️", color: "#DC2626" }
];

function BrandPromotion() {
  const [events, setEvents] = useState(initialEvents);

  const shuffleArray = (arr) => {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prev => shuffleArray(prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div className="brand-promotion-page">
        {/* SHUFFLING EVENTS */}
        <section className="events-section">
          <AnimatedSection type="fade">
            <h2 className="title">Brand Promotion & Audience Engagement</h2>
          </AnimatedSection>

          <div className="events-grid">
            {events.map((item, i) => (
              <AnimatedSection type="scale" delay={(i % 4) * 0.05} key={i} className="card">
                <div
                  className="icon"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
                <h3 style={{ color: item.color }}>{item.title}</h3>
                <p>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* LIVE EVENT EXPERIENCES */}
        <section className="event-supply">
          <div className="event-container">
            <div className="event-image">
              <AnimatedSection type="slideRight" duration={0.7}>
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"
                  alt="Live Events"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection type="slideLeft" className="event-content" duration={0.7}>
              <h2>
                Brand Promotion Through <br />
                Live Event Experiences
              </h2>
              <p>
                Amplify your brand presence by leveraging a digital platform designed 
                to promote and showcase events to the right audience. From event 
                publishing to audience engagement, our system helps increase visibility 
                and create impactful connections through curated event experiences.

                With integrated ticketing, participation tracking, and performance 
                insights, businesses can effectively measure reach and enhance their 
                promotional strategies through live and interactive events.
              </p>
              <button className="event-btn">
                Promote Your Brand →
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* SECTION 3 */}
        <div className="bp3-wrapper">
          <section className="bp3-section">
            <div className="bp3-container">
              <div className="bp3-image">
                <AnimatedSection type="slideRight" duration={0.7}>
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200" alt="marketing" />
                </AnimatedSection>
              </div>

              <AnimatedSection type="slideLeft" className="bp3-content" duration={0.7}>
                <h2>Brand Promotion</h2>
                <p className="bp3-desc">
                  Boost your event visibility using targeted strategies, smart audience segmentation,
                  and powerful cross-platform reach.
                </p>

                <div className="bp3-features">
                  <div className="bp3-item">
                    <span>01</span>
                    <div>
                      <h4>Targeted Campaigns</h4>
                      <p>Reach the right audience with precision marketing.</p>
                    </div>
                  </div>

                  <div className="bp3-item">
                    <span>02</span>
                    <div>
                      <h4>Audience Optimization</h4>
                      <p>Maximize engagement with smart segmentation.</p>
                    </div>
                  </div>

                  <div className="bp3-item">
                    <span>03</span>
                    <div>
                      <h4>Cross-Platform Visibility</h4>
                      <p>Expand your reach across multiple channels.</p>
                    </div>
                  </div>
                </div>

                <p className="bp3-seo">
                  SEO Keywords: event marketing services, brand promotion, digital event marketing
                </p>
              </AnimatedSection>
            </div>
          </section>

          <section className="bp3-cta">
            <AnimatedSection type="scale" className="bp3-cta-inner">
              <h2>Without visibility, your event doesn’t exist.</h2>
              <p>
                Create strong brand awareness and ensure your event reaches the right audience effectively.
              </p>
              <button>Promote Your Event →</button>
            </AnimatedSection>
          </section>
        </div>

        {/* ENTERTAINMENT & LIVE SOLUTIONS */}
        <section className="ent-section">
          <div className="ent-image">
            <AnimatedSection type="slideRight" duration={0.7}>
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600&auto=format&fit=crop"
                alt="Live Event"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection type="slideLeft" className="ent-content" duration={0.7}>
            <h1>
              ENTERTAINMENT & <br />
              LIVE EVENT <br />
              SOLUTIONS
            </h1>
            <p>
              Our platform enables seamless discovery,
              promotion and management of entertainment
              and live events including concerts,
              exhibitions, cultural programs, sports
              events and community experiences.
            </p>
            <p>
              With integrated online ticket booking,
              payment processing and secure access
              control, we help organizers manage events
              efficiently while delivering a smarter
              and more engaging experience for audiences.
            </p>
          </AnimatedSection>
        </section>
      </div>
    </PageWrapper>
  );
}

export default BrandPromotion;