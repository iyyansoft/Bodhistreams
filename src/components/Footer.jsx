import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column footer-main">
            <div className="footer-brand">
              <img src="/bodhiwhite.png" alt="BodhiStreams" className="footer-logo" />
              <p className="footer-description">
                Empowering businesses through innovative software solutions, <br></br>
                IT services, and cutting-edge digital platforms.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Solutions</h3>
            <div className="footer-links">
              <Link to="/software-development" className="footer-link">Software Development</Link>
              <Link to="/it-consulting" className="footer-link">IT Consulting</Link>
              {/* <Link to="/services" className="footer-link">Equipment Trading</Link> */}
              <Link to="/event-discovery" className="footer-link">Event Platform</Link>
              {/* <Link to="/services" className="footer-link">Cloud Services</Link> */}
              {/* <Link to="/services" className="footer-link">Mobile Apps</Link> */}
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/#" className="footer-link">Careers</Link>
              <Link to="/contactus" className="footer-link">Contact</Link>

            </div>
          </div>



        </div>

        <div className="footer-cta">
          <h2 className="footer-cta-title">
            How can we help? <Link to="/contactus" className="footer-cta-link">Contact us</Link>
          </h2>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Twitter">𝕏</a>
            <a href="https://www.facebook.com/profile.php?id=61589257161901" className="social-icon" aria-label="Facebook">f</a>
            <a href="https://www.linkedin.com/company/eventzgo/" className="social-icon" aria-label="LinkedIn">in</a>
            {/* <a href="#" className="social-icon" aria-label="YouTube">▶</a> */}
            {/* <a href="#" className="social-icon" aria-label="Instagram">📷</a> */}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer--large">
              <span className="company-name-large">Bodhistreams</span>
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
