import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AgriTech.css';
import PageWrapper from '../components/PageWrapper';

const AgriTech = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageWrapper>
      <div className="agritech-page">
        {/* HERO SECTION */}
        <section className="agritech-hero">
          <div className="agritech-hero-overlay"></div>
          <div className="container">
            <div className="hero-grid">
              <motion.div 
                className="hero-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="badge">AI-Powered Smart Agriculture</span>
                <h1>AgriSort Mini</h1>
                <h2>Portable AI-Based Fruit Grading Machine</h2>
                <p>
                  Empowering farmers with AI-driven fruit grading technology that improves quality, reduces wastage, and increases profitability. Designed specifically for small farmers, FPOs, and rural agri entrepreneurs across India.
                </p>

              </motion.div>
              
              <motion.div 
                className="hero-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/agrisort.png" alt="AgriSort Mini Fruit Grading Machine" />
                <div className="image-accent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="stats-section">
          <div className="container">
            <motion.div 
              className="stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="stat-card">
                <h3>330M+</h3>
                <p>Tonnes of Fruit Production in India</p>
              </div>
              <div className="stat-card">
                <h3>50,000+</h3>
                <p>Potential Rural Users & FPOs</p>
              </div>
              <div className="stat-card">
                <h3>₹1.25L - ₹1.75L</h3>
                <p>Highly Affordable Pricing</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Made in India Tech</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT AGRISORT MINI */}
        <section id="about" className="about-agrisort">
          <div className="container">
            <div className="about-grid">
              <motion.div 
                className="about-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="feature-preview-card">
                  <img src="/agrisort.png" alt="AgriSort Mini Computer Vision" />
                </div>
              </motion.div>

              <motion.div 
                className="about-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <span className="section-badge">About AgriSort Mini</span>
                <h2>Revolutionizing Fruit Grading with Artificial Intelligence</h2>
                <p>
                  AgriSort Mini is a portable AI-powered fruit grading machine developed by <strong>Bodhistreams Convergence Private Limited</strong>. It automatically grades fruits and vegetables using advanced computer vision technology based on size, color, ripeness, shape, and surface defects.
                </p>
                <p>
                  Compact, portable, battery and solar compatible, AgriSort Mini is designed specifically for Indian farming conditions where access to industrial grading systems is limited.
                </p>
                <div className="quick-specs">
                  <div className="spec-item"><strong>Capacity:</strong> 2 - 3 Tons / Hour</div>
                  <div className="spec-item"><strong>Supported:</strong> Tomato, Mango, Guava, Apple, Orange, Lemon, Onion & more</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM & THE SOLUTION */}
        <section className="problem-solution">
          <div className="container">
            <div className="split-grid">
              <motion.div 
                className="problem-card glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="card-header">
                  <span className="card-icon red">⚠️</span>
                  <h3>The Challenges Faced by Farmers</h3>
                </div>
                <ul>
                  <li>Manual fruit grading is slow and inconsistent.</li>
                  <li>Mixed-quality produce reduces market value.</li>
                  <li>Farmers often sell at lower prices through middlemen.</li>
                  <li>Industrial grading machines are expensive and inaccessible.</li>
                  <li>Rural farmers lack affordable grading infrastructure.</li>
                </ul>
              </motion.div>

              <motion.div 
                className="solution-card glass-card accent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="card-header">
                  <span className="card-icon green">💡</span>
                  <h3>AI-Based Smart Fruit Grading</h3>
                </div>
                <p>
                  AgriSort Mini delivers accurate and affordable farm-level grading through AI-powered computer vision technology. It eliminates human error, standardizes export grades, and places the bargaining power back in the hands of rural farmers.
                </p>
                <div className="solution-features-list">
                  <span>🔋 Battery & Solar Compatible</span>
                  <span>📶 Offline AI Processing</span>
                  <span>🚜 Built for Rural India</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="features-section">
          <div className="container">
            <div className="section-title-center">
              <span className="section-badge">Key Features</span>
              <h2>Next-Generation Technology</h2>
            </div>
            <motion.div 
              className="features-grid-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {[
                { icon: "📷", title: "AI-Based Fruit Detection", desc: "Instantly recognizes multiple fruit types concurrently on the conveyor." },
                { icon: "🌟", title: "Automatic Quality Grading", desc: "Classifies produce into Premium, Good, Average, and Reject grades." },
                { icon: "🧠", title: "Computer Vision Tech", desc: "Advanced image analysis checks for surface defects, size, and skin color." },
                { icon: "💼", title: "Portable Design", desc: "Lightweight and compact frame designed for easy farm-to-farm transport." },
                { icon: "☀️", title: "Battery & Solar Compatible", desc: "Runs seamlessly on remote grids, single phase setups, or solar backup." },
                { icon: "🔌", title: "Offline AI Processing", desc: "Performs full local neural network inference without requiring an internet connection." },
                { icon: "⚡", title: "Easy to Operate", desc: "Intelligent UI touch panel requires zero complex technical training to run." },
                { icon: "🇮🇳", title: "Built for Rural India", desc: "Sturdy engineering that withstands dust, heat, and variable power supplies." }
              ].map((feature, idx) => (
                <div className="feature-card glass-card" key={idx}>
                  <div className="feat-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <div className="container">
            <div className="section-title-center">
              <span className="section-badge">Workflow</span>
              <h2>How It Works</h2>
            </div>
            <div className="timeline">
              {[
                { step: "Step 1", title: "Load Tray", desc: "Place fruits on the conveyor tray inlet." },
                { step: "Step 2", title: "Capture Image", desc: "The AI camera captures high-resolution overhead images." },
                { step: "Step 3", title: "AI Analysis", desc: "Computer vision analyzes size, shape, and quality parameters." },
                { step: "Step 4", title: "Sorting Classification", desc: "The machine automatically classifies fruits into designated quality grades." },
                { step: "Step 5", title: "Maximize Profit", desc: "Farmers can sell produce based on accurate grading for premium market prices." }
              ].map((item, idx) => (
                <motion.div 
                  className="timeline-item" 
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="step-num">{item.step}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits-section">
          <div className="container">
            <div className="section-title-center">
              <span className="section-badge">Benefits</span>
              <h2>Why Choose AgriSort Mini?</h2>
            </div>
            <div className="benefits-grid">
              {[
                "Improved Quality Standardization", "Better Market Pricing", "Reduced Post-Harvest Loss",
                "Export-Ready Produce", "Increased Farmer Income", "Affordable Technology",
                "Portable Deployment", "AI Accuracy", "Faster Sorting", "Minimal Human Error"
              ].map((benefit, idx) => (
                <motion.div 
                  className="benefit-tag" 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="check-icon">✓</span>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TARGET CUSTOMERS & ADVANTAGE */}
        <section className="target-advantage">
          <div className="container">
            <div className="split-grid">
              <div className="target-card glass-card">
                <h3>👥 Target Customers</h3>
                <p>We proudly serve the agricultural value chain:</p>
                <div className="target-list">
                  <span>🌾 Farmers</span>
                  <span>🏢 Farmer Producer Organizations (FPOs)</span>
                  <span>📍 Rural Aggregation Centers</span>
                  <span>💼 Agri Entrepreneurs</span>
                  <span>📦 Packhouses & Exporters</span>
                  <span>⚖️ Mandi Traders</span>
                </div>
              </div>

              <div className="advantage-card glass-card accent">
                <h3>🏆 Competitive Advantage</h3>
                <p>Unlike traditional industrial grading systems, AgriSort Mini offers:</p>
                <div className="advantage-list">
                  <span>💰 Affordable Pricing</span>
                  <span>🎒 Portable & Compact Frame</span>
                  <span>📶 100% Offline AI Processing</span>
                  <span>☀️ Battery & Solar Compatibility</span>
                  <span>🏡 Village-Level Localized Deployment</span>
                  <span>🛠️ Easy Field Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* TEAM SECTION */}
        <section className="team-section">
          <div className="container">
            <div className="section-title-center">
              <span className="section-badge">Leadership Team</span>
              <h2>Meet Our Founders</h2>
            </div>
            <div className="team-grid">
              {[
                { name: "Sakthivel S", role: "Chief Executive Officer (CEO)", desc: "Product vision, business operations, and ecosystem stakeholder management." },
                { name: "Sathish Kumar K P", role: "Director", desc: "AgriSort AI Technology lead, Computer Vision development, DevOps, and Cloud Architecture." },
                { name: "Gomathipriya P", role: "Director", desc: "Daily operations, institutional partnerships coordination, and business development." }
              ].map((member, idx) => (
                <div className="team-card glass-card" key={idx}>
                  <div className="team-avatar">👤</div>
                  <h4>{member.name}</h4>
                  <span className="role">{member.role}</span>
                  <p>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </PageWrapper>
  );
};

export default AgriTech;
