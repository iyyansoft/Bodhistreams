import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import PageWrapper from "../components/PageWrapper";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_o6y5k79",        // Service ID
      "template_bi1xi7l",       // Template ID
      formData,                 // Form data
      "hYl4_wB9ezhna6UnC"       // Public key
    )
      .then(() => {
        alert("Message Sent Successfully ✅");
        setLoading(false);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          service: "",
          message: ""
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send ❌");
        setLoading(false);
      });
  };

  return (
    <PageWrapper>
      <div className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-overlay"></div>
          <div className="contact-hero-container">
            <AnimatedSection type="slideDown" duration={0.6}>
              <span className="contact-badge">GET IN TOUCH</span>
              <h1>Let's Connect</h1>
              <p>Have a project in mind, or need technical expertise? Our team is here to help.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* MAIN CONTAINER */}
        <div className="contact-main-section">
          <div className="contact-container">
            {/* LEFT: INFO */}
            <AnimatedSection type="slideRight" className="contact-left" duration={0.7}>
              <div className="contact-info-header">
                <h2>Contact Information</h2>
                <p>Reach out to us directly through any of the channels below or submit the inquiry form.</p>
              </div>

              <div className="info-cards-list">
                <div className="info-item-card">
                  <div className="info-icon-wrapper blue">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p className="info-link">bodhistreamsltd@gmail.com</p>
                  </div>
                </div>

                <div className="info-item-card">
                  <div className="info-icon-wrapper green">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p className="info-link">+91 98845 95762</p>
                  </div>
                </div>

                <div className="info-item-card">
                  <div className="info-icon-wrapper purple">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Visit Us</h4>
                    <p className="info-address">
                      Plot 30/2, 2nd St, Ramapuram,<br />
                      Adambakkam, Chennai,<br />
                      Tamil Nadu – India
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT: FORM */}
            <AnimatedSection type="slideLeft" className="form-wrapper" duration={0.7}>
              <h2>Send us a Message</h2>
              <p className="form-subtitle">Fill out this form and a specialist will get back to you within 24 hours.</p>

              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Organization</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Company or Institution"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full">
                  <label>Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option>Makers Lab Setup</option>
                    <option>Prototype Development</option>
                    <option>IT Services & Software</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="How can we help your business succeed?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="submit-btn" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit Inquiry →"}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}