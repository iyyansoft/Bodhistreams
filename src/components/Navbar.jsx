import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Products",
      title: "Digital Solutions Suite",
      desc: "Powerful AI & IT products built for modern businesses.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
      features: [
        "AI Automation Tools",
        "Cloud Infrastructure",
        "Event Platform",
        "Enterprise Software",
        "Smart Analytics"
      ]
    },
    {
      label: "Solutions",
      title: "End-to-End IT Services",
      desc: "Customized digital transformation strategies.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      features: [
        "Web Development",
        "Mobile Apps",
        "ERP Systems",
        "Cyber Security"
      ]
    },
    {
      label: "Resources",
      title: "Knowledge Hub",
      desc: "Explore insights & case studies.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      features: [
        "Case Studies",
        "Tech Blogs",
        "Whitepapers",
        "Documentation"
      ]
    }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-wrapper">

        {/* ===== TOP UTILITY ROW ===== */}
        <div className="utility-row">
          <div className="utility-links">
            <Link to="#">Sign in</Link>
            <Link to="#">Help Centre</Link>
            <Link to="#">Company</Link>
            <Link to="#">Contact us</Link>
            <Link to="#">Language</Link>
          </div>
        </div>

        {/* ===== MAIN NAVBAR ROW ===== */}
        <div className="navbar-container">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="BodhiStreams" />
            </Link>
          </div>

          {/* CENTER MENU */}
          <div className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>

            {navItems.map((item, index) => (
              <div
                key={index}
                className="nav-item"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className="nav-link">
                  {item.label}
                </span>

                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      className="dropdown"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="dropdown-content">

                        <div className="dropdown-left">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>

                          <div className="image-wrapper">
                            <img src={item.image} alt="preview" />
                          </div>
                        </div>

                        <div className="dropdown-right">
                          <h4>FEATURES</h4>
                          <ul>
                            {item.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </div>

          {/* RIGHT BUTTONS */}
          <div className="nav-actions">
            <button className="btn-primary">Try it for free</button>
            <button className="btn-outline">View demo</button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
