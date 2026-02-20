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
            </h1> <p className="hero-subtext"> BodhiStreams Convergence Pvt Ltd delivers end-to-end software development, IT solutions, electronic equipment distribution, and a secure online event ticket booking platform — helping businesses scale with confidence. </p>
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
              <h3>Update shipping</h3>
              <div className="chat-icons">
                <span>✉️</span>
                <span>☎️</span>
                <span>💬</span>
              </div>
            </div>

            <div className="chat-body">

              <div className="chat-row">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                <div className="chat-bubble">
                  <strong>Cathy Lee</strong>
                  <p>Hi Fran, how can I help you today?</p>
                </div>
              </div>

              <div className="chat-row user">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />
                <div className="chat-bubble">
                  <strong>Fran Anderson</strong>
                  <p>I forgot to select expedited shipping on my order, can you help me?</p>
                </div>
              </div>

            </div>

            <div className="chat-footer">
              <h4>Recommended response</h4>
              <div className="recommended">
                No problem! I updated your order—you'll receive it on Saturday. Here’s the shipping confirmation.
              </div>
              <button className="copilot-btn">✨ Agent co-pilot</button>
            </div>

          </div>

          {/* RIGHT INFO SECTION */}
          <div className="info-section">

            <div className="profile-card">
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />
              <div>
                <h4>Fran Anderson <span className="vip">VIP</span></h4>
                <p>Order #1005</p>
              </div>
            </div>

            <div className="order-status">
              <span className="dot"></span> Preparing to ship
            </div>

            <div className="info-block">
              <p><strong>Items</strong></p>
              <div className="line"></div>
              <div className="line short"></div>
            </div>

            <div className="info-block">
              <p><strong>Address</strong></p>
              <div className="line"></div>
              <div className="line short"></div>
            </div>

            <div className="ai-guidance">
              <h4>AI guidance</h4>
              <ul>
                <li>✨ Customer has a shipping request</li>
                <li>✔ Verified loyal customer</li>
                <li>✔ Apply priority shipping on order</li>
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










      <section className="report-hero">

        <div className="report-container">

          {/* LEFT IMAGE */}
          <div className="report-image">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1974&auto=format&fit=crop"
              alt="AI Digital Infrastructure"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="report-content">

            <span className="report-tag">INSIGHTS</span>

            <h1>
              BodhiStreams recognised as a
              next-generation leader in
              AI-powered IT & Digital Solutions
            </h1>

            <p>
              Driving innovation across software development,
              IT infrastructure, and intelligent event platforms
              with scalable enterprise technology.
            </p>

            <button className="report-btn">
              Explore Our Solutions
            </button>

          </div>

        </div>

      </section>








      <section className="bs-awards-section">

        <div className="bs-awards-container">

          {/* LEFT CONTENT */}
          <div className="bs-awards-left">
            <p className="bs-tag">OUR AWARD-WINNING SERVICE SOLUTION</p>

            <h2>
              Recognised by <br />
              industry leaders
            </h2>
          </div>

          {/* RIGHT BADGES */}
          <div className="bs-awards-wrapper">
            {[
              { title: "Leader", sub: "AI Enterprise" },
              { title: "Leader", sub: "Cloud Infrastructure" },
              { title: "Leader", sub: "Mid-Market IT" },
              { title: "Leader", sub: "Enterprise Digital" }
            ].map((item, index) => (
              <div className="bs-award-card" key={index}>
                <span className="season">WINTER 2026</span>
                <h3>{item.title}</h3>
                <p>{item.sub}</p>
              </div>
            ))}
          </div>


        </div>

      </section>




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
              INTELLIGENT AUTOMATION FRAMEWORK
            </p>

            <h2>
              Accelerate Growth with the <br />
              BodhiStreams AI Feedback Loop™
            </h2>

            <p className="bs-desc">
              Automate workflows by connecting AI systems, cloud infrastructure,
              and real-time analytics into one unified platform.
            </p>

            <button className="bs-loop-btn">
              Explore AI Framework
            </button>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="bs-loop-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bs-ring-wrapper">
              <div className="bs-ring">
                <span className="moving-dot"></span>
              </div>

              <div className="bs-center">
                <div className="pulse"></div>
                <span>AI Core</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>













      <section className="bs-transform-section">
        <div className="bs-transform-container">

          {/* LEFT IMAGE */}
          <div className="bs-transform-image">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
              alt="Software Development Team"
            />




            {/* Floating AI Card */}
            <motion.div
              className="bs-floating-card"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4>BodhiStreams AI Engine</h4>
              <span className="status">ACTIVE • Real-time</span>
              <p>✔ Traffic Optimized</p>
              <p>✔ Cloud Scaled</p>
              <p>✔ Security Monitored</p>
            </motion.div>

            {/* Chat Bubbles */}
            <motion.div
              className="bs-chat user"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Client: Improve infrastructure speed & reliability.
            </motion.div>

            <motion.div
              className="bs-chat ai"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Bodhi AI: Optimization deployed successfully 🚀
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
              with Intelligent AI Systems
            </h2>

            <p>
              Unify cloud infrastructure, AI-driven automation, and enterprise-grade
              scalability into one powerful platform.
            </p>

            <div className="bs-buttons">
              <button className="primary-btn">
                Explore Our Solutions
              </button>


            </div>

          </motion.div>

        </div>
      </section>

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
              Make enterprise operations <br />
              effortless with BodhiStreams AI
            </h2>

            <p>
              Our AI-powered digital operations platform simplifies IT workflows,
              automates support requests, and empowers teams to scale efficiently
              with real-time intelligence.
            </p>

            <button className="secondary-btn">
              Explore Digital Operations
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="bs-employee-image">

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
              alt="Enterprise Team Collaboration"
            />

            {/* Floating Question Bubble */}
            <motion.div
              className="bs-float question"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              How can we optimize system performance?
            </motion.div>

            {/* Floating AI Response */}
            <motion.div
              className="bs-float answer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              AI Insight: Performance boost enabled ✔
              <div className="doc-btn">Optimization_Report.pdf</div>
            </motion.div>

          </div>

        </div>
      </section>













      <section className="bs-resources-section">
        <div className="bs-resources-container">

          <motion.h2
            className="bs-resources-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Additional Resources
          </motion.h2>

          <div className="bs-resources-grid">
            {[
              {
                tag: "PRODUCT",
                badge: "FEATURED",
                title: "AI-Powered Enterprise Platform",
                img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop"
              },
              {
                tag: "REPORT",
                title: "BodhiStreams AI Trends 2026",
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
              },
              {
                tag: "GUIDE",
                title: "How AI Optimizes Cloud Infrastructure",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
              },
              {
                tag: "ARTICLE",
                title: "Scaling Digital Systems with Automation",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              }
            ].map((item, index) => (
              <motion.div
                className="bs-resource-card"
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bs-card-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="bs-card-content">
                  <div className="bs-card-top">
                    <span className="tag">{item.tag}</span>
                    {item.badge && (
                      <span className="badge">{item.badge}</span>
                    )}
                  </div>

                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>



















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





























      {/* Testimonials Slider */}
      <section className="testimonials-modern">
        <div className="container">
          <motion.div
            className="section-header-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title-xl">Client Success Stories</h2>
            <p className="section-subtitle-xl">
              Hear from businesses we've helped transform
            </p>
          </motion.div>

          <div className="testimonials-grid-modern">
            {[
              {
                quote: "BodhiStreams delivered exceptional results that exceeded our expectations. Their technical expertise and commitment to quality is unmatched.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                rating: 5
              },
              {
                quote: "Working with BodhiStreams was a game-changer for our business. They understood our vision and brought it to life perfectly.",
                author: "Michael Chen",
                role: "CEO, InnovateLabs",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                rating: 5
              },
              {
                quote: "The event platform they built revolutionized our operations. Highly professional team with incredible attention to detail.",
                author: "Priya Sharma",
                role: "Event Director",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card-modern"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author-modern">
                  <img src={testimonial.image} alt={testimonial.author} loading="lazy" />
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

    </motion.div>
  );
};

export default Home;
