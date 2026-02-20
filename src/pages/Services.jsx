import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: "💻",
      title: "Software Development & IT Services",
      description: "Comprehensive software solutions tailored to your business needs",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Software Maintenance & Support",
        "Quality Assurance & Testing"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      icon: "🔧",
      title: "IT Consulting Services",
      description: "Strategic technology guidance for digital transformation",
      features: [
        "Technology Strategy & Planning",
        "Digital Transformation Consulting",
        "System Architecture Design",
        "IT Infrastructure Assessment",
        "Cloud Migration Solutions",
        "Cybersecurity Consulting"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      icon: "🖥️",
      title: "IT & Electronic Equipment Trading",
      description: "Premium hardware and networking solutions for businesses",
      features: [
        "Computer Systems & Workstations",
        "Networking Equipment & Infrastructure",
        "Servers & Storage Solutions",
        "Peripherals & Accessories",
        "Installation & Configuration",
        "Warranty & Technical Support"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
      icon: "🎫",
      title: "Online Event Ticket Booking Platform",
      description: "Modern digital platform for seamless event management",
      features: [
        "Event Discovery & Browsing",
        "Secure Online Ticket Booking",
        "Multiple Payment Options",
        "Digital Ticket Management",
        "Event Analytics & Reporting",
        "Customer Support Integration"
      ],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="services-page"
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="services-hero-title">Our Services</h1>
            <p className="services-hero-subtitle">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-detail ${index % 2 === 0 ? 'normal' : 'reverse'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="service-detail-content">
                <div className="service-detail-icon">{service.icon}</div>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="process-grid">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "Understanding your business goals, challenges, and requirements"
              },
              {
                number: "02",
                title: "Planning",
                description: "Creating a strategic roadmap and defining project scope"
              },
              {
                number: "03",
                title: "Development",
                description: "Building solutions with best practices and modern technologies"
              },
              {
                number: "04",
                title: "Delivery",
                description: "Deploying and providing ongoing support for your success"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="process-number">{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Technologies We Work With</h2>
            <p className="section-subtitle">
              Leveraging cutting-edge tools and frameworks
            </p>
          </motion.div>

          <motion.div 
            className="tech-categories"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="tech-category">
              <h3>Frontend</h3>
              <p>React, Vue.js, Angular, Next.js, TypeScript</p>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <p>Node.js, Python, Java, .NET, PHP</p>
            </div>
            <div className="tech-category">
              <h3>Mobile</h3>
              <p>React Native, Flutter, iOS, Android</p>
            </div>
            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <p>AWS, Azure, Google Cloud, Docker, Kubernetes</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Let's discuss how our services can help achieve your business goals
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
