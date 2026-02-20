import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column footer-main">
            <div className="footer-brand">
              <img src="/logo.png" alt="BodhiStreams" className="footer-logo" />
              <p className="footer-description">
                Empowering businesses through innovative software solutions, 
                IT services, and cutting-edge digital platforms.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Solutions</h3>
            <div className="footer-links">
              <Link to="/services" className="footer-link">Software Development</Link>
              <Link to="/services" className="footer-link">IT Consulting</Link>
              <Link to="/services" className="footer-link">Equipment Trading</Link>
              <Link to="/services" className="footer-link">Event Platform</Link>
              <Link to="/services" className="footer-link">Cloud Services</Link>
              <Link to="/services" className="footer-link">Mobile Apps</Link>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/about" className="footer-link">Careers</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <span className="footer-link">Blog</span>
              <span className="footer-link">Partners</span>
              <span className="footer-link">Press</span>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <div className="footer-links">
              <span className="footer-link">Documentation</span>
              <span className="footer-link">Help Center</span>
              <span className="footer-link">Case Studies</span>
              <span className="footer-link">Webinars</span>
              <span className="footer-link">Community</span>
              <span className="footer-link">Events</span>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <div className="footer-links">
              <a href="mailto:info@bodhistreams.com" className="footer-link">
                Email Support
              </a>
              <a href="tel:+911234567890" className="footer-link">
                Call Us
              </a>
              <span className="footer-link">Live Chat</span>
              <span className="footer-link">Status</span>
              <span className="footer-link">Terms of Service</span>
              <span className="footer-link">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="footer-cta">
          <h2 className="footer-cta-title">
            How can we help? <Link to="/contact" className="footer-cta-link">Contact us</Link>
          </h2>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Twitter">𝕏</a>
            <a href="#" className="social-icon" aria-label="Facebook">f</a>
            <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
            <a href="#" className="social-icon" aria-label="YouTube">▶</a>
            <a href="#" className="social-icon" aria-label="Instagram">📷</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer--large">
              <span className="company-name-large">Bodhistreams</span>
            </div>
            <div className="footer-bottom-links">
              <span>Terms of use</span>
              <span>Privacy notice</span>
              <span>Cookie notice</span>
              <span>Cookie settings</span>
              <span>Trust Center</span>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} <span className="company-name">BodhiStreams</span> Convergence Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
