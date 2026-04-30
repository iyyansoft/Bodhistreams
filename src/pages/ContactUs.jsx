import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
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
      "service_o6y5k79",        // 👉 un service ID
      "template_bi1xi7l",       // 👉 template ID paste pannunga
      formData,                 // 👉 form data
      "hYl4_wB9ezhna6UnC"         // 👉 public key
    )
      .then(() => {
        alert("Message Sent Successfully ✅");
        setLoading(false);

        // reset form
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
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We’d love to discuss your project or requirements.</p>
      </div>

      {/* MAIN */}
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">

          <h2>Contact Information</h2>
          <p>Reach out to us via email, phone, or visit us.</p>

          <div className="info-item">
            <span>📧</span>
            <div>
              <h4>Email Us</h4>
              <p>bodhistreamsltd@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+91 98845 95762</p>
            </div>
          </div>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Visit Us</h4>
              <p>
                Plot 30/2, 2nd St, Ramapuram,<br />
                Adambakkam, Chennai<br />
                Tamil Nadu – India
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="form-wrapper">

          <h2>Send us a Message</h2>

          <form className="form-grid" onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Organization</label>
              <input
                type="text"
                name="organization"
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="submit-btn" type="submit">
              {loading ? "Sending..." : "Submit Request ✈"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}