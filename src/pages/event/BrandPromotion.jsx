import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BrandPromotion.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const events = [
  { title: "Seminars", desc: "Knowledge sharing", icon: "📘", color: "#7C3AED", details: "Host engaging educational events, webinars, and expert lectures with integrated presentation materials and secure attendance records.", metric: "12k+ Attendees" },
  { title: "Workshops", desc: "Hands-on learning", icon: "💡", color: "#2563EB", details: "Facilitate collaborative learning sessions, live exercises, task boards, and interactive whiteboard integrations.", metric: "4.8/5 Rating" },
  { title: "Hackathons", desc: "Build & innovate", icon: "💻", color: "#059669", details: "Coordinate design challenges and coding sprints with automated registration, team profiles, and submission tracking.", metric: "250+ Teams" },
  { title: "Conclaves", desc: "Expert gatherings", icon: "👥", color: "#EA580C", details: "Bring industry experts together for panel discussions, live Q&A formats, private lounges, and customized access tiers.", metric: "80+ Speakers" },
  { title: "Conference", desc: "Professional events", icon: "🎤", color: "#DB2777", details: "Organize large-scale summits featuring multi-track sessions, virtual stages, sponsor booths, and real-time polls.", metric: "50+ Sessions" },
  { title: "Culturals", desc: "Art & performance", icon: "🎵", color: "#7C3AED", details: "Showcase talent hunts, music festivals, and performances with HD live streaming and ticket integrations.", metric: "30k+ Reach" },
  { title: "Business", desc: "Networking & trade", icon: "💼", color: "#374151", details: "Drive commercial impact with B2B networking hubs, structured appointments, and digital company profiles.", metric: "500+ Deals Done" },
  { title: "Community", desc: "Social causes", icon: "❤️", color: "#DC2626", details: "Mobilize volunteers, raise awareness, and manage donations through transparent event registration portals.", metric: "$45k+ Raised" }
];

function BrandPromotion() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  return (
    <PageWrapper>
      <div className="brand-promotion-page">
        {/* SHUFFLING EVENTS */}
        <section className="events-section">
          <AnimatedSection type="fade">
            <h2 className="title">Brand Promotion & Audience Engagement</h2>
            <p className="subtitle-desc">Hover over any format on the right to preview features and projected scale.</p>
          </AnimatedSection>

          <div className="event-hub-container">
            {/* ACTIVE EVENT DISPLAY CARD (LEFT) */}
            <div className="event-hub-display-side">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEventIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="active-display-card"
                  style={{ '--theme-color': events[activeEventIndex].color }}
                >
                  <div className="active-card-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${events[activeEventIndex].color}12, transparent 70%)` }}></div>
                  <div className="display-header">
                    <div className="display-icon-box" style={{ backgroundColor: `${events[activeEventIndex].color}12`, border: `1px solid ${events[activeEventIndex].color}30` }}>
                      <span>{events[activeEventIndex].icon}</span>
                    </div>
                    <div className="display-title-block">
                      <span className="display-tag">EVENT CAPABILITY</span>
                      <h2>{events[activeEventIndex].title}</h2>
                    </div>
                  </div>
                  
                  <p className="display-details">
                    {events[activeEventIndex].details}
                  </p>
                  
                  <div className="display-footer">
                    <div className="display-metric">
                      <span className="metric-num" style={{ color: events[activeEventIndex].color }}>{events[activeEventIndex].metric}</span>
                      <span className="metric-label">Projected Impact</span>
                    </div>
                    <button className="display-action-btn" style={{ background: events[activeEventIndex].color }}>
                      Configure Setup →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* SELECTION GRID (RIGHT) */}
            <div className="event-hub-selector-side">
              <div className="events-grid-interactive">
                {events.map((item, i) => (
                  <div 
                    key={i} 
                    className={`selector-card ${i === activeEventIndex ? "active" : ""}`}
                    onMouseEnter={() => setActiveEventIndex(i)}
                    style={{ '--theme-color': item.color }}
                  >
                    <div className="selector-icon" style={{ backgroundColor: i === activeEventIndex ? `${item.color}` : `${item.color}10` }}>
                      <span style={{ filter: i === activeEventIndex ? 'brightness(1.5)' : 'none' }}>{item.icon}</span>
                    </div>
                    <div className="selector-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <button onClick={() => window.open("https://eventzgo.com", "_blank")}>
                Promote Your Event →
              </button>
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