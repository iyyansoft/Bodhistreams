import { useState, useRef, useEffect } from "react";
import "./Networking.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Gauge, Layers, Network, Activity, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

const Networking = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrameId;
    let width = (canvas.width = parent.offsetWidth || window.innerWidth);
    let height = (canvas.height = parent.offsetHeight || 600);

    const handleResize = () => {
      if (canvas && parent) {
        width = canvas.width = parent.offsetWidth;
        height = canvas.height = parent.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const particles = [];
    const particleCount = 65; 
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (window.innerWidth || width),
        y: Math.random() * (parent.offsetHeight || 600),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = "rgba(140, 198, 63, 0.06)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        
        if (mouse.x !== null) {
          const distToMouse = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
          if (distToMouse < 220) {
            ctx.strokeStyle = `rgba(140, 198, 63, ${0.25 * (1 - distToMouse / 220)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "rgba(55, 111, 24, 0.22)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Smooth 3D tilt angles
    const rX = -(mouseY / (height / 2)) * 14;
    const rY = (mouseX / (width / 2)) * 14;
    setRotateX(rX);
    setRotateY(rY);

    const gX = ((e.clientX - rect.left) / width) * 100;
    const gY = ((e.clientY - rect.top) / height) * 100;
    setGlowX(gX);
    setGlowY(gY);
  };

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <PageWrapper>
      <div className="networking-page">

        {/* ================= HERO SECTION ================= */}
        <section className="nw-hero-minimal-section">
          {/* Wireframe background element */}
          <div className="nw-minimal-grid-bg"></div>
          <div className="nw-hero-minimal-container">
            {/* LEFT CONTENT */}
            <div className="nw-hero-minimal-left">
              <div className="nw-hero-minimal-badge">
                <span className="nw-badge-indicator-line"></span>
                <span>NETWORKING INFRASTRUCTURE</span>
              </div>
              <h1 className="nw-hero-minimal-title">
                Enterprise Networking & <br />
                <span className="text-highlight-green">Communication Solutions</span>
              </h1>
              <p className="nw-hero-minimal-desc">
                At BodhiStreams Convergence, we provide end-to-end networking and communication systems. 
                Configure secure routers, high-speed switches, intelligent firewalls, and structured 
                cabling frameworks designed for modern enterprise scaling.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="nw-hero-minimal-right">
              <div className="nw-minimal-vector-wrapper">
                <img
                  src="/minimal-networking.png"
                  alt="Enterprise Networking & Communication Infrastructure"
                  className="nw-minimal-hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TOP IMAGE BANNER ================= */}
        <section className="nw-top-wrapper">
          <div className="nw-top-banner">
            <div className="nw-overlay">
              <AnimatedSection type="fade" duration={0.8} className="nw-banner-text">
                <p className="nw-small-text">
                  Enterprise Networking • Infrastructure • Connectivity Solutions
                </p>
                <h1>Networking & Communication Equipment</h1>
                <div className="nw-red-line"></div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= PREMIUM OVERVIEW SECTION ================= */}
        <section className="nw-premium-section">
          <div className="nw-container">
            {/* LEFT */}
            <AnimatedSection type="slideRight" className="nw-left" duration={0.7}>
              <span className="nw-category-tag">Enterprise Connectivity Solutions</span>
              <h2 className="nw-main-title">
                Advanced Networking &amp; Communication Infrastructure
              </h2>
              <p className="nw-description">
                At BodhiStreams Convergence, we provide comprehensive networking and
                communication solutions designed to power your business operations with
                speed, security, and reliability. From enterprise-grade network devices
                to structured cabling and wireless solutions — we deliver performance
                that keeps you connected.
              </p>
            </AnimatedSection>

            {/* RIGHT */}
            <AnimatedSection type="slideLeft" className="nw-right" duration={0.7}>
              <div className="nw-quote-container">
                <div className="nw-quote-decor">“</div>
                <p className="nw-quote-text">
                  "Delivering secure, high-speed, and scalable networking solutions 
                   that power seamless communication and digital transformation."
                </p>
                <div className="nw-author-info">
                  <h4>BodhiStreams Convergence</h4>
                  <p>Networking & Communication Solutions Team</p>
                </div>
              </div>

              {/* VALUE PROP ITEMS */}
              <div className="nw-value-props">
                <div className="nw-value-prop-item">
                  <div className="nw-icon-wrapper">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Secure &amp; Reliable</h4>
                    <p>Enterprise-grade security for uninterrupted network performance.</p>
                  </div>
                </div>

                <div className="nw-value-prop-item">
                  <div className="nw-icon-wrapper">
                    <Gauge size={22} />
                  </div>
                  <div className="hw-value-text">
                    <h4>High Performance</h4>
                    <p>High-speed connectivity built for maximum efficiency.</p>
                  </div>
                </div>

                <div className="nw-value-prop-item">
                  <div className="nw-icon-wrapper">
                    <Layers size={22} />
                  </div>
                  <div className="hw-value-text">
                    <h4>Scalable Solutions</h4>
                    <p>Flexible networking solutions that grow with your business.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= FIT SECTION ================= */}
        <section className="nw-fit-section">
          <div className="nw-fit-container">
            <AnimatedSection type="slideRight" className="nw-fit-left" duration={0.7}>
              <h2>Who’s a Good Fit?</h2>
              <p>
                Our Networking & Communication division supports enterprises,
                ISPs, system integrators and growing organizations requiring
                reliable, secure and scalable connectivity solutions.
              </p>
              <p>
                From procurement and installation to long-term technical
                maintenance, we ensure stable network infrastructure
                and uninterrupted communication systems.
              </p>
              <div className="nw-fit-image-wrapper">
                <img 
                  src="/network_rack_setup.png" 
                  alt="Network Infrastructure Setup" 
                  className="nw-fit-image" 
                />
              </div>
            </AnimatedSection>

            <div className="nw-fit-right">
              {[
                { title: "Wholesale & Distribution", desc: "Supply of routers, switches, firewalls, access points and structured networking components." },
                { title: "Authorized Dealership", desc: "Official partnerships with networking hardware manufacturers and communication technology brands." },
                { title: "Installation & Configuration", desc: "Professional setup, commissioning and optimization of networking and communication systems." },
                { title: "Maintenance & Technical Support", desc: "Ongoing support, upgrades, warranty services and after-sales technical assistance." },
                { title: "Network Infrastructure Design", desc: "Strategic planning and architecture for scalable, secure and future-ready network environments." },
                { title: "Refurbishment & Upgrades", desc: "Hardware lifecycle management, system upgrades and performance enhancement solutions." },
                { title: "Annual Maintenance Contracts", desc: "Preventive maintenance, monitoring and priority service coverage for networking infrastructure." }
              ].map((card, index) => (
                <AnimatedSection type="scale" delay={index * 0.05} key={index} className="nw-fit-card">
                  <div className="nw-fit-card-header">
                    <CheckCircle2 className="nw-fit-check-icon" size={20} />
                    <h3>{card.title}</h3>
                  </div>
                  <p>{card.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= */}
        <section className="nw-v7-section">
          <AnimatedSection type="fade">
            <h2 className="nw-v7-title">
              How Our Networking Process Works
            </h2>
          </AnimatedSection>

          <div className="nw-v7-grid">
            <AnimatedSection type="scale" className="nw-v7-card" delay={0.1}>
              <div className="nw-v7-inner">
                <div className="nw-v7-front">
                  <img
                    src="https://www.ilscompany.com/wp-content/uploads/9-1.jpg"
                    alt="Enterprise Data Center Rows"
                  />
                  <div className="nw-v7-step-overlay">
                    <span>STEP 01</span>
                    <h3>Source & Supply</h3>
                  </div>
                </div>
                <div className="nw-v7-back">
                  <span className="nw-v7-step-num">01</span>
                  <h3>Source & Supply</h3>
                  <p>
                    Importing and distributing enterprise-grade networking
                    and communication equipment from trusted manufacturers.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="scale" className="nw-v7-card" delay={0.2}>
              <div className="nw-v7-inner">
                <div className="nw-v7-front">
                  <img
                    src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2024/03/adobestock_298063823.jpeg"
                    alt="Network Engineer Configuring Equipment"
                  />
                  <div className="nw-v7-step-overlay">
                    <span>STEP 02</span>
                    <h3>Deploy & Configure</h3>
                  </div>
                </div>
                <div className="nw-v7-back">
                  <span className="nw-v7-step-num">02</span>
                  <h3>Deploy & Configure</h3>
                  <p>
                    Installation, configuration and commissioning
                    ensuring high-speed and secure connectivity.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection type="scale" className="nw-v7-card" delay={0.3}>
              <div className="nw-v7-inner">
                <div className="nw-v7-front">
                  <img
                    src="https://t4.ftcdn.net/jpg/07/66/45/19/360_F_766451941_2EiexUIC3ZVnzhIxSgAUIV9S6FaRnC6X.jpg"
                    alt="Network Operations Center"
                  />
                  <div className="nw-v7-step-overlay">
                    <span>STEP 03</span>
                    <h3>Maintain & Support</h3>
                  </div>
                </div>
                <div className="nw-v7-back">
                  <span className="nw-v7-step-num">03</span>
                  <h3>Maintain & Support</h3>
                  <p>
                    Continuous monitoring, upgrades and technical
                    support for uninterrupted communication systems.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="nw-cta-section">
          <AnimatedSection type="scale" className="nw-cta-content">
            <h2>
              Empower your business with secure <br />
              Networking & Communication Solutions
            </h2>
            <div className="nw-cta-buttons">
              <Link to="/contactus" className="nw-cta-primary">
                Contact Sales
              </Link>
              <Link to="/it-consulting" className="nw-cta-outline">
                View IT Services
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </PageWrapper>
  );
};

export default Networking;