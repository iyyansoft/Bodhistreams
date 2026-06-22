import "./ITConsulting.css";
import { useEffect, useState } from "react";
import {
  Home,
  MessageSquare,
  Users,
  BarChart2,
  Settings,
  Sparkles,
} from "lucide-react";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const ITConsulting = () => {
  return (
    <PageWrapper>
      {/* ================= HERO ================= */}
      <section className="itc-hero">
        <AnimatedSection type="slideRight" className="itc-hero-left" duration={0.7}>
          <p className="itc-mini-title">IT CONSULTING & SYSTEM INTEGRATION</p>
          <h1 className="itc-hero-heading">
            Design, Integrate & 
            Optimize Enterprise 
            IT Systems for
            Scalable Growth
          </h1>
          <p className="itc-hero-desc">
            At BodhiStreams Convergence, we provide end-to-end IT consulting 
            and system integration services to help organizations build 
            connected, scalable, and high-performance digital ecosystems. 
            
            From enterprise architecture design and system analysis to 
            seamless integration of software, cloud, and infrastructure, 
            we ensure efficient operations, better decision-making, and 
            long-term technology value.
            
            We don’t just advise — we execute and deliver fully functional systems.
          </p>
        </AnimatedSection>

        <div className="itc-hero-right">
          <AnimatedSection type="slideLeft" className="itc-hero-img-wrapper" duration={0.7}>
            <img
              src="https://atayacontentops.com/wp-content/uploads/2025/05/blog16.webp"
              alt="IT Consulting"
              className="itc-hero-img"
            />
            <div className="itc-bubble itc-bubble-green">
              Can you integrate our software, cloud, and enterprise systems?
            </div>
            <div className="itc-bubble itc-bubble-white">
              Yes. We design, connect, and optimize complete IT ecosystems.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="itc-strategy">
        <AnimatedSection type="fade">
          <p className="itc-strategy-label">OUR CONSULTING FRAMEWORK</p>
          <h2 className="itc-strategy-heading">
            IT Consulting & System Integration Approach
          </h2>
        </AnimatedSection>

        <div className="itc-strategy-grid">
          <AnimatedSection type="slideUp" delay={0.1} className="itc-strategy-card">
            <div className="itc-card-icon">📊</div>
            <h3>IT Consulting & System Analysis</h3>
            <p>
              Analyze existing IT infrastructure, applications, and workflows 
              to identify gaps, inefficiencies, and opportunities for 
              modernization and integration.
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideUp" delay={0.2} className="itc-strategy-card">
            <div className="itc-card-icon">🔗</div>
            <h3>System Integration & Architecture</h3>
            <p>
              Design and integrate enterprise systems, software applications, 
              cloud platforms, APIs, and databases into a unified, secure, 
              and scalable digital ecosystem.
            </p>
          </AnimatedSection>

          <AnimatedSection type="slideUp" delay={0.3} className="itc-strategy-card">
            <div className="itc-card-icon">⚡</div>
            <h3>Implementation & Optimization</h3>
            <p>
              Deploy integrated systems, optimize performance, automate workflows, 
              and ensure reliable, scalable operations for long-term business growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= DETAILED SERVICES ================= */}
      <section className="itc-enterprise">
        <AnimatedSection type="slideRight" className="itc-enterprise-left" duration={0.7}>
          <p className="itc-enterprise-label">
            IT CONSULTING & SYSTEM INTEGRATION
          </p>
          <h1 className="itc-enterprise-heading">
            End-to-End Enterprise IT Consulting & Integration Solutions
          </h1>
          <p className="itc-enterprise-desc">
            At BodhiStreams Convergence, we help organizations design, 
            implement, and manage modern IT systems that are scalable, 
            connected, and performance-driven.
          </p>
          <p className="itc-enterprise-desc">
            From system analysis and architecture design to seamless integration 
            of software, cloud platforms, APIs, and enterprise applications, 
            we build unified digital ecosystems that improve efficiency, 
            automation, and decision-making.
          </p>
          <p className="itc-enterprise-desc">
            We don’t just provide consulting — we execute, integrate, and deliver 
            fully functional IT solutions that drive long-term business growth.
          </p>
        </AnimatedSection>

        <div className="itc-enterprise-right">
          <AnimatedSection type="slideLeft" duration={0.7}>
            <img
              src="https://www.milesit.com/wp-content/uploads/it-consulting-hero-image.webp"
              alt="Enterprise Consulting"
              className="itc-enterprise-img"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= IT SUPPORT UI ================= */}
      <section className="itc-support">
        <div className="itc-support-left">
          <AnimatedSection type="slideRight" className="itc-chat-box" duration={0.7}>
            <div className="itc-chat-sidebar">
              <Home size={20} />
              <MessageSquare size={20} />
              <Users size={20} />
              <BarChart2 size={20} />
              <Settings size={20} />
            </div>

            <div className="itc-chat-content">
              <div className="itc-chat-title">
                IT Consulting Support
              </div>
              <div className="itc-chat-message agent">
                <Sparkles size={18} />
                <p>
                  How can we assist with your IT modernization strategy?
                </p>
              </div>
              <div className="itc-chat-message user">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />
                <p>
                  We need cloud migration and enterprise system integration.
                </p>
              </div>
              <div className="itc-chat-message agent">
                <p>
                  Our experts will analyze your infrastructure,
                  design scalable architecture, and execute secure
                  enterprise integration strategies.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection type="slideLeft" className="itc-support-right" duration={0.7}>
          <h1>Optimize your IT infrastructure & integration strategy</h1>
          <p>
            From consulting and architecture planning to integration,
            automation, and managed IT services, we deliver secure,
            scalable enterprise IT solutions tailored to your business.
          </p>
        </AnimatedSection>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="itc-resources">
        <AnimatedSection type="fade">
          <h2 className="itc-resources-title">
            IT Consulting & Integration Insights
          </h2>
        </AnimatedSection>

        <div className="itc-resources-grid">
          <AnimatedSection type="scale" delay={0.1} className="itc-resource-card">
            <img
              src="https://t4.ftcdn.net/jpg/06/34/85/05/360_F_634850584_3IKt4GFrYDwi881pobjhoU5dROpXFcOA.jpg"
              alt="System Analysis"
            />
            <h3>
              IT System Analysis & Architecture Design
            </h3>
          </AnimatedSection>

          <AnimatedSection type="scale" delay={0.2} className="itc-resource-card">
            <img
              src="https://teamcomputers.com/wp-content/uploads/2026/03/Blog-Feature-image-30.png"
              alt="System Integration"
            />
            <h3>
              Enterprise System & Cloud Integration Solutions
            </h3>
          </AnimatedSection>

          <AnimatedSection type="scale" delay={0.3} className="itc-resource-card">
            <img
              src="https://www.issquaredinc.com/static/automation-service-management.jpg"
              alt="Automation"
            />
            <h3>
              Automation, Optimization & Managed IT Services
            </h3>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="modern-cta-section">
        <div className="modern-cta-visual">
          <AnimatedSection type="slideRight" duration={0.7}>
            <img
              src="https://dxc.scene7.com/is/image/dxc/AdobeStock_1538535392?qlt=90&wid=1200&ts=1765414149928&dpr=off"
              alt="Business Team"
              className="modern-cta-img"
            />
          </AnimatedSection>
        </div>

        <AnimatedSection type="slideLeft" className="modern-cta-content" duration={0.7}>
          <span className="modern-cta-label">
            FUTURE READY IT SERVICES
          </span>
          <h2 className="modern-cta-heading">
            Secure and scalable IT solutions 
            for modern businesses
          </h2>
          <p className="modern-cta-para">
            Transform your business with reliable infrastructure,
            cloud integration and smart digital solutions.
          </p>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
};

export default ITConsulting;