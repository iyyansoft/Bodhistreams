import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import { useState, useEffect } from "react";


const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const imageSlidesData = [
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      title: "Software Development"
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      title: "Team Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "Data Analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      title: "Business Growth"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      title: "Innovation Hub"
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      title: "Digital Strategy"
    },
    {
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      title: "Modern Workspace"
    },
    {
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      title: "Tech Solutions"
    }
  ];



  const leftImages = [
    "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=900",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=900",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900",
  ];

  const rightImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900",
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=900",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900",
  ];





  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);







  const slides = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900",
      quote: "BodhiStreams AI automation transformed our enterprise infrastructure and reduced operational costs by 40%.",
      name: "Ananya Rao",
      role: "CTO, FinTech Enterprise"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900",
      quote: "Their cloud scalability solutions helped us expand globally without infrastructure bottlenecks.",
      name: "Rahul Mehta",
      role: "Founder, SaaS Platform"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900",
      quote: "BodhiStreams’ AI engine optimized our analytics pipeline in real-time.",
      name: "Sneha Kapoor",
      role: "Head of Data, RetailTech"
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900",
      quote: "From automation to security, everything is integrated seamlessly.",
      name: "Meera Iyer",
      role: "IT Director, Enterprise Group"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900",
      quote: "We scaled faster than ever with BodhiStreams intelligent systems.",
      name: "Vikram Shah",
      role: "CEO, Digital Solutions"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* Hero Section with Sliding Images */}
      <section className="hero-zendesk">
        <div className="hero-container">
          <motion.div className="hero-center-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} >
            <h1 className="hero-main-heading"> Powering Digital Transformation <br /> <span>Through Technology & Innovation</span>
            </h1> <p className="hero-subtext"> BodhiStreams Convergence Pvt Ltd provides complete software, IT, and electronic solutions along with a secure online ticketing platform to support modern business growth.</p>
            <div className="hero-input-wrapper">
              <div className="hero-input-group">


                <input
                  type="email"
                  placeholder="Enter your business email"
                />
                <button>
                  Get Started →
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>




      {/* ---------------------------------------------------------------------------------------------------------------------- */}



      {/* Animated Stats Section */}
      <section className="zendesk-style-section">

        {/* LEFT IMAGE */}
        <div className="side-image left">
          <AnimatePresence mode="wait">
            <motion.img
              key={leftIndex}
              src={leftImages[leftIndex]}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>


        {/* CENTER CARD */}
        <div className="support-wrapper">

          {/* LEFT CHAT SECTION */}
          <div className="chat-section">

            <div className="chat-header">
              <h3>Core Business Activities</h3>
              <div className="chat-icons">
                <span>💻</span>
                <span>🖥️</span>
                <span>🎫</span>
              </div>
            </div>

            <div className="chat-body">

              <div className="chat-row">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                <div className="chat-bubble">
                  <strong>Software & IT Services</strong>
                  <p>
                    We design and deliver web, mobile, cloud and enterprise software solutions.
                  </p>
                </div>
              </div>

              <div className="chat-row user">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />
                <div className="chat-bubble">
                  <strong>Hardware & Electronics</strong>
                  <p>
                    We trade, distribute and support IT hardware and electronic equipment.
                  </p>
                </div>
              </div>

            </div>

            <div className="chat-footer">
              <h4>Event Technology Platform</h4>
              <div className="recommended">
                We develop and manage digital platforms for event discovery, registration and secure ticket booking.
              </div>
              <button className="copilot-btn">✨ Integrated Solutions</button>
            </div>

          </div>

          {/* RIGHT INFO SECTION */}
          <div className="info-section">

            <div className="profile-card">
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />
              <div>
                <h4>BodhiStreams <span className="vip">Company</span></h4>
                <p>Technology & Event Solutions</p>
              </div>
            </div>

            <div className="order-status">
              <span className="dot"></span> Active Operations
            </div>

            <div className="info-block">
              <p><strong>Software Development</strong></p>
              <div className="line"></div>
              <div className="line short"></div>
            </div>

            <div className="info-block">
              <p><strong>Hardware Distribution</strong></p>
              <div className="line"></div>
              <div className="line short"></div>
            </div>

            <div className="ai-guidance">
              <h4>Key Focus Areas</h4>
              <ul>
                <li> IT & Software Solutions</li>
                <li> Hardware & Electronics Trading</li>
                <li> Online Event Ticketing Platform</li>
              </ul>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="side-image right">
          <AnimatePresence mode="wait">
            <motion.img
              key={rightIndex}
              src={rightImages[rightIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

      </section>





      {/* ------------------------------------------------------------------------------------------------------------------------------- */}




<section className="report-hero">
  <div className="report-container">

    {/* LEFT IMAGE */}
    <div className="report-image">
    <img
  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1974&auto=format&fit=crop"
  alt="Students working in Innovation Lab"
/>
    </div>

    {/* RIGHT CONTENT */}
    <div className="report-content">

      <span className="report-tag">INSIGHTS</span>

      <h1>
        Building Innovation Infrastructure for
        Institutions and Enterprises
      </h1>

    <p>
  We design and establish Innovation Labs, STEM Labs, and Makerspaces 
  with complete end-to-end solutions.
  <br /><br />
  From planning and equipment setup to training and execution, 
  we ensure labs are not just installed—but actively used 
  for real innovation and outcomes.
</p>



    </div>

  </div>
</section>



      {/* --------------------------------------------------------------------------------------------------------------------------------- */}
<section className="bs-loop-section-v2">
  <div className="bs-loop-container">

    {/* LEFT CONTENT */}
    <motion.div
      className="bs-loop-content"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="bs-small-tag">
        FUTURE-READY INNOVATION ECOSYSTEM
      </p>

      <h2>
        Transform Institutions into
        Active Innovation & Product
        Development Centers
      </h2>

      <p className="bs-desc">
        We help institutions move beyond traditional learning by enabling 
        real-world innovation, prototyping, and problem-solving environments. 
        Our solutions ensure students and teams actively build, test, and 
        create impactful outcomes.
      </p>

      <button className="bs-loop-btn">
        Start Your Innovation Journey
      </button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="bs-loop-visual"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bs-image-wrapper">
        <img 
          src="/product.webp" 
          alt="Innovation Lab"
        />
      </div>
    </motion.div>

  </div>
</section>


      {/* ----------------------------------------------------------------------------------------------------------------------------- */}


      <section className="bs-transform-section">
  <div className="bs-transform-container">

    {/* LEFT IMAGE */}
    <div className="bs-transform-image">
      <img
        src="https://bernardmarr.com/wp-content/uploads/2025/11/tech-in-action.jpeg"
        alt="IT Infrastructure Solutions"
      />

      {/* Floating Card */}
      <motion.div
        className="bs-floating-card"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4>BodhiStreams IT Solutions</h4>

        <p>✔ Scalable Infrastructure</p>
        <p>✔ Secure & Reliable Systems</p>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div
        className="bs-chat ai"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        System deployment completed successfully 🚀
      </motion.div>

    </div>

    {/* RIGHT CONTENT */}
    <motion.div
      className="bs-transform-content"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >

      <h2>
        BodhiStreams: Transform <br />
        IT & Digital Infrastructure <br />
        with Scalable Enterprise Solutions
      </h2>

      <p>
        Build reliable IT infrastructure with seamless system integration,
        cloud-ready environments, and enterprise-grade scalability
        designed for long-term performance and growth.
      </p>

      <div className="bs-buttons">
        <button className="primary-btn2">
          Explore IT Solutions
        </button>
      </div>

    </motion.div>

  </div>
</section>


      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
<section className="bs-employee-section">
  <div className="bs-employee-container">

    {/* LEFT CONTENT */}
    <motion.div
      className="bs-employee-content"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>
        Enable Institutions to Build, <br />
        Experiment & Innovate at Scale
      </h2>

      <p>
        We create environments where students, faculty, and innovators can 
        actively explore ideas, develop prototypes, and transform concepts 
        into real-world solutions through structured lab ecosystems.
      </p>

      <button className="secondary-btn">
        Discover Innovation Solutions
      </button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <div className="bs-employee-image">

      <img
        src="https://www.hbs.edu/ctfassets/public/images/6S5XyaoeTV0TpCltWA96xl/business-professional-leading-product-innovation.jpg"
        alt="Innovation Lab Students"
      />

      {/* Floating Text 1 */}
      <motion.div
        className="bs-float tag1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Prototype Development 🔧
      </motion.div>

      {/* Floating Text 2 */}
      <motion.div
        className="bs-float tag2"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Hands-on Learning 🚀
      </motion.div>

    </div>

  </div>
</section>









{/* --------------------------------------------------------------------------------------------------------------------------------- */}



      {/* ================= BODHISTREAMS STORY SLIDER ================= */}

      <section className="bs-story-section">

        <div className="bs-story-wrapper">

          <button className="bs-arrow left" onClick={prevSlide}>←</button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bs-slide"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
            >

              {/* LEFT IMAGE */}
              <div className="bs-slide-image">
                <img src={slides[index].image} alt="client" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="bs-slide-content">
                <h2>“{slides[index].quote}”</h2>

                <div className="bs-client-info">
                  <h4>{slides[index].name}</h4>
                  <p>{slides[index].role}</p>
                </div>

                <button className="bs-read-btn">
                  Read customer story
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

          <button className="bs-arrow right" onClick={nextSlide}>→</button>

        </div>

      </section>





    </motion.div>
  );
};

export default Home;
