import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="contact-hero-title">Get In Touch</h1>
            <p className="contact-hero-subtitle">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-form-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 123 456 7890"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Development</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="equipment">Equipment Trading</option>
                    <option value="events">Event Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div 
              className="contact-info-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-info-card">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">
                  Reach out to us through any of these channels
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <a href="mailto:info@bodhistreams.com">info@bodhistreams.com</a>
                      <a href="mailto:support@bodhistreams.com">support@bodhistreams.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h3>Phone</h3>
                      <a href="tel:+911234567890">+91 123 456 7890</a>
                      <a href="tel:+919876543210">+91 987 654 3210</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h3>Office</h3>
                      <p>Bangalore, Karnataka</p>
                      <p>India - 560001</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🕐</div>
                    <div className="info-content">
                      <h3>Business Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-cta-card">
                <h3>Prefer a Quick Call?</h3>
                <p>Schedule a consultation with our team</p>
                <a href="tel:+911234567890" className="btn btn-secondary">
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div 
            className="map-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <h3>Visit Our Office</h3>
              <p>Bangalore, Karnataka, India</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
