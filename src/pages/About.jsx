import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="about-hero-title">About BodhiStreams</h1>
            <p className="about-hero-subtitle">
              Driving Digital Transformation Through Innovation and Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
            <motion.div 
              className="overview-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                BodhiStreams Convergence Pvt Ltd is a dynamic technology company 
                specializing in comprehensive IT solutions. We blend cutting-edge 
                software development with strategic IT consulting to help businesses 
                thrive in the digital age.
              </p>
              <p className="section-text">
                Our diverse portfolio spans custom software development, IT infrastructure 
                solutions, hardware trading, and innovative digital platforms. We're 
                committed to delivering excellence through every project we undertake.
              </p>
            </motion.div>
            <motion.div 
              className="overview-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Our team" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <motion.div 
              className="mv-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="mv-icon">🎯</div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To empower businesses with innovative technology solutions that 
                drive growth, efficiency, and competitive advantage in an 
                ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div 
              className="mv-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="mv-icon">👁️</div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                To be the trusted technology partner for businesses worldwide, 
                recognized for our innovation, reliability, and commitment to 
                delivering exceptional value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {[
              {
                icon: "⚡",
                title: "Innovation",
                description: "Constantly exploring new technologies and approaches to solve complex challenges"
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "Building trust through transparency, honesty, and ethical business practices"
              },
              {
                icon: "🎯",
                title: "Excellence",
                description: "Committed to delivering the highest quality in every project we undertake"
              },
              {
                icon: "🌟",
                title: "Customer Focus",
                description: "Your success is our success. We put your needs at the heart of everything"
              },
              {
                icon: "🚀",
                title: "Agility",
                description: "Adapting quickly to change and staying ahead in a dynamic technology landscape"
              },
              {
                icon: "💡",
                title: "Collaboration",
                description: "Working together with our clients and partners to achieve shared goals"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="expertise-areas">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">
              Comprehensive solutions across multiple domains
            </p>
          </motion.div>

          <div className="expertise-grid">
            <motion.div 
              className="expertise-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80" 
                alt="Software Development" 
              />
              <div className="expertise-content">
                <h3>Software Development & IT Services</h3>
                <p>
                  End-to-end development of web applications, mobile apps, and 
                  enterprise software with ongoing maintenance and support.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" 
                alt="IT Equipment" 
              />
              <div className="expertise-content">
                <h3>IT & Electronic Equipment Trading</h3>
                <p>
                  Wholesale supply of premium computers, networking equipment, 
                  and electronic hardware for businesses of all sizes.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="expertise-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" 
                alt="Event Platform" 
              />
              <div className="expertise-content">
                <h3>Online Event Ticket Booking</h3>
                <p>
                  Advanced digital platform for seamless event discovery, 
                  ticket booking, and comprehensive event management.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
