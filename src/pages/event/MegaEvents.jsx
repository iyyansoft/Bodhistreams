import React from "react";
import "./MegaEvents.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

export default function MegaEvents() {
  return (
    <PageWrapper>
      <div className="mega-mag">

        {/* HERO */}
        <section className="hero-split">
          <AnimatedSection type="slideRight" className="hero-left" duration={0.7}>
            <h1>Mega Events & Conclaves</h1>
            <p>
              Startup summits, hackathons, and innovation events designed to
              create real business impact and collaboration.
            </p>
            <button>Explore Events →</button>
          </AnimatedSection>

          <div className="hero-right">
            <AnimatedSection type="slideLeft" duration={0.7}>
              <img
                src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/qbvyzfv2qw0gqihpf3ck?_a=BACAGSGT"
                alt="Mega Events"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* ABOUT */}
        <section className="sec-overlay">
          <div className="overlay-wrapper">
            <img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600"
              alt="Events"
            />
            <AnimatedSection type="scale" className="overlay-card">
              <h2>About Our Events</h2>
              <p>
                We create platforms where ideas meet execution and innovation
                meets opportunity through large-scale events.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FORMATS */}
        <section className="formats-css">
          <AnimatedSection type="fade">
            <h2 className="title">Event Formats</h2>
          </AnimatedSection>

          <div className="accordion-css">
            <AnimatedSection type="slideUp" delay={0.1} className="item">
              <input type="checkbox" id="item1" />
              <label htmlFor="item1">
                Startup Summits 🚀 <span>+</span>
              </label>
              <div className="content">
                <p>
                  Large-scale events connecting founders, investors, and innovators for networking and growth opportunities.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.2} className="item">
              <input type="checkbox" id="item2" />
              <label htmlFor="item2">
                Innovation Challenges 💡 <span>+</span>
              </label>
              <div className="content">
                <p>
                  Competitions designed to solve real-world problems through creativity and innovation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.3} className="item">
              <input type="checkbox" id="item3" />
              <label htmlFor="item3">
                Hackathons 💻 <span>+</span>
              </label>
              <div className="content">
                <p>
                  Fast-paced collaborative events focused on building technical solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection type="slideUp" delay={0.4} className="item">
              <input type="checkbox" id="item4" />
              <label htmlFor="item4">
                Conferences 🎤 <span>+</span>
              </label>
              <div className="content">
                <p>
                  Knowledge-sharing platforms with expert talks and networking sessions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* EXECUTION */}
        <section className="execution-stack">
          <AnimatedSection type="scale" className="stack-card">
            <div className="stack-image">
              <img
                src="https://skipprichard.com/wp-content/uploads/2017/06/bigstock-Business-Execution-Concept-181358104.jpg"
                alt="Execution Excellence"
              />
            </div>
            <div className="stack-content">
              <h2>Execution Excellence</h2>
              <p>
                We ensure smooth event delivery with planning,
                management, and high-quality engagement.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* PROCESS */}
        <section className="process-stepper">
          <AnimatedSection type="fade">
            <h2 className="title">Process</h2>
          </AnimatedSection>

          <div className="stepper">
            <AnimatedSection type="scale" className="step" delay={0.1}>
              <div className="circle">1</div>
              <h4>Planning</h4>
              <p>Defining goals and strategy.</p>
            </AnimatedSection>
            <AnimatedSection type="scale" className="step" delay={0.2}>
              <div className="circle">2</div>
              <h4>Organizing</h4>
              <p>Managing resources and logistics.</p>
            </AnimatedSection>
            <AnimatedSection type="scale" className="step" delay={0.3}>
              <div className="circle">3</div>
              <h4>Execution</h4>
              <p>Delivering the event smoothly.</p>
            </AnimatedSection>
            <AnimatedSection type="scale" className="step" delay={0.4}>
              <div className="circle">4</div>
              <h4>Impact</h4>
              <p>Measuring results and outcomes.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* VALUE */}
        <section className="impact-rows">
          <AnimatedSection type="fade">
            <h2 className="title">Impact Areas</h2>
          </AnimatedSection>

          <div className="impact-list">
            {[
              { icon: "🎓", t: "Education", d: "Empowering students and institutions through knowledge-driven events, workshops, and innovation programs." },
              { icon: "🚀", t: "Startups", d: "Supporting startup ecosystems with networking, funding opportunities, and mentorship platforms." },
              { icon: "🏢", t: "Corporate", d: "Enabling organizations to collaborate, innovate, and engage through strategic events and conferences." },
              { icon: "🌍", t: "Community", d: "Creating meaningful social impact through community-driven events and collaborative initiatives." }
            ].map((item, idx) => (
              <AnimatedSection type="slideUp" delay={idx * 0.08} className="impact-item" key={idx}>
                <div className="icon">{item.icon}</div>
                <div className="text">
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="cta-banner">
          <AnimatedSection type="scale" className="banner-content">
            <h2>Key Benefits</h2>
            <div className="chips">
              <span>⚡ Faster Execution</span>
              <span>🎯 Better Decisions</span>
              <span>🌐 Strong Networking</span>
              <span>📈 Business Growth</span>
            </div>
            <p>
              Deliver high-impact events with expert-driven strategies,
              seamless execution, and meaningful outcomes.
            </p>
          </AnimatedSection>
        </section>
      </div>
    </PageWrapper>
  );
}