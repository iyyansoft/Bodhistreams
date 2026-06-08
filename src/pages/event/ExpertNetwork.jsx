import React from "react";
import "./ExpertNetwork.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

export default function ExpertNetwork() {
  return (
    <PageWrapper>
      <div className="expert-page">

        {/* HERO */}
        <section className="hero">
          <div className="overlay"></div>
          <AnimatedSection type="fade" duration={0.8} className="hero-content">
            <h1>Expert Network Ecosystem</h1>
            <p>
              Unlock the power of collaboration by connecting with industry experts,
              mentors, and specialists who bring real-world knowledge and proven experience.
            </p>
            <button>Explore Experts →</button>
          </AnimatedSection>
        </section>

        {/* OVERVIEW */}
        <section className="sec overview-new">
          <div className="container overview-box">
            <AnimatedSection type="slideRight" className="overview-text" duration={0.7}>
              <h2>Overview</h2>
              <p>
                A strong network is the backbone of success in any event,
                startup, or initiative. Our Expert Network connects ideas
                with execution through experienced professionals.
              </p>
              <p>
                From planning to execution, expert involvement ensures
                smarter decisions, reduced risks, and impactful outcomes.
              </p>
            </AnimatedSection>

            <div className="overview-highlights">
              <AnimatedSection type="scale" delay={0.1} className="highlight-card">
                <h3>💡 Smart Decisions</h3>
                <p>Expert guidance for better strategic clarity</p>
              </AnimatedSection>
              <AnimatedSection type="scale" delay={0.2} className="highlight-card">
                <h3>🚀 Faster Execution</h3>
                <p>Speed up projects with professional support</p>
              </AnimatedSection>
              <AnimatedSection type="scale" delay={0.3} className="highlight-card">
                <h3>📊 Measurable Results</h3>
                <p>Achieve clear and impactful outcomes</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section className="sec types-new">
          <div className="container">
            <AnimatedSection type="fade">
              <h2 className="center">Types of Experts</h2>
            </AnimatedSection>

            <div className="types-new-grid">
              <AnimatedSection type="slideUp" delay={0.1} className="type-new-card">
                <span>👨‍🏫</span>
                <h3>Industry Experts & Mentors</h3>
                <p>
                  Provide domain knowledge, insights, and strategic direction
                  to improve decision-making and execution.
                </p>
              </AnimatedSection>

              <AnimatedSection type="slideUp" delay={0.2} className="type-new-card">
                <span>📈</span>
                <h3>Startup Advisors</h3>
                <p>
                  Help validate ideas, build scalable models, and guide
                  startups toward sustainable growth.
                </p>
              </AnimatedSection>

              <AnimatedSection type="slideUp" delay={0.3} className="type-new-card">
                <span>💻</span>
                <h3>Technical Specialists</h3>
                <p>
                  Support development, integration, and problem-solving
                  across multiple technologies.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* STRATEGIC COLLAB */}
        <section className="sec split">
          <div className="container split-box">
            <AnimatedSection type="slideRight" duration={0.7}>
              <h2>Strategic Collaboration</h2>
              <p>
                Collaborating with the right experts transforms the way projects
                and events are executed. Their expertise helps identify opportunities,
                avoid common mistakes, and optimize performance.
              </p>
              <p>
                This collaboration ensures that every decision is backed by
                experience and every action leads to measurable impact.
              </p>
            </AnimatedSection>
            <div className="split-image-wrap">
              <AnimatedSection type="slideLeft" duration={0.7}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" alt="Collaboration" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="sec process-alt">
          <div className="container">
            <AnimatedSection type="fade">
              <h2 className="center">How It Works</h2>
            </AnimatedSection>

            <div className="flow">
              <AnimatedSection type="scale" className="flow-step">
                <div className="circle">01</div>
                <h4>Connect</h4>
                <p>Identify and connect with the right experts based on your needs.</p>
              </AnimatedSection>
              <div className="flow-line"></div>
              <AnimatedSection type="scale" className="flow-step" delay={0.1}>
                <div className="circle">02</div>
                <h4>Collaborate</h4>
                <p>Work together to plan and design effective solutions.</p>
              </AnimatedSection>
              <div className="flow-line"></div>
              <AnimatedSection type="scale" className="flow-step" delay={0.2}>
                <div className="circle">03</div>
                <h4>Execute</h4>
                <p>Implement ideas with expert guidance and achieve results.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* VALUE VALUE VALUE */}
        <section className="sec value-alt">
          <div className="container">
            <AnimatedSection type="fade">
              <h2 className="center">Where Experts Add Value</h2>
            </AnimatedSection>

            <div className="value-grid">
              {[
                { icon: "🎓", t: "Academic Events", d: "Enhancing seminars, workshops, and training programs." },
                { icon: "🚀", t: "Startup Ecosystem", d: "Supporting ideation, prototyping, and pitching." },
                { icon: "🏢", t: "Corporate Events", d: "Improving conferences and professional gatherings." },
                { icon: "💡", t: "Innovation Programs", d: "Driving research, development, and product innovation." },
                { icon: "🛠️", t: "Workshops", d: "Delivering hands-on training and skill development." },
                { icon: "📊", t: "Consulting", d: "Providing strategic and technical advisory support." }
              ].map((val, idx) => (
                <AnimatedSection type="scale" delay={idx * 0.05} className="value-card" key={idx}>
                  <span>{val.icon}</span>
                  <h4>{val.t}</h4>
                  <p>{val.d}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="sec benefits-alt">
          <div className="container benefits-wrapper">
            <AnimatedSection type="slideRight" className="benefit-main" duration={0.7}>
              <h2>Key Benefits</h2>
              <p>
                Unlock powerful advantages by connecting with the right experts.
                Improve speed, decision-making, and overall performance across
                your projects and initiatives.
              </p>
            </AnimatedSection>

            <div className="benefit-list">
              <AnimatedSection type="slideLeft" delay={0.1} className="benefit-item">
                <h4>⚡ Faster Execution</h4>
                <p>Accelerate projects with expert-driven guidance.</p>
              </AnimatedSection>
              <AnimatedSection type="slideLeft" delay={0.2} className="benefit-item">
                <h4>🎯 Better Decisions</h4>
                <p>Make smarter choices with real-world insights.</p>
              </AnimatedSection>
              <AnimatedSection type="slideLeft" delay={0.3} className="benefit-item">
                <h4>🌐 Strong Network</h4>
                <p>Access valuable professional connections.</p>
              </AnimatedSection>
              <AnimatedSection type="slideLeft" delay={0.4} className="benefit-item">
                <h4>📈 High Impact Results</h4>
                <p>Achieve measurable and scalable outcomes.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA SPLIT */}
        <section className="cta-split">
          <div className="cta-image">
            <AnimatedSection type="slideRight" duration={0.7}>
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1600"
                alt="Team collaboration"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection type="slideLeft" className="cta-content" duration={0.7}>
            <h2>Collaborate with Experts</h2>
            <p>
              Connect with professionals, gain insights, and transform
              your ideas into real-world impact with confidence.
            </p>
            <button>Connect Now →</button>
          </AnimatedSection>
        </section>
      </div>
    </PageWrapper>
  );
}