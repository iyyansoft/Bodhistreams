import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    {
      label: "IT Services",
      title: "Digital Solutions Suite",
      desc: "Powerful AI & IT products built for modern businesses.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692",
      features: [
        {
          name: "Software Development Solutions",
          path: "/software-development"
        },
       
        {
          name: "IT Consulting & System Integration",
          path: "/it-consulting"
        },
        {
          name: "Digital Transformation & Automation",
          path: "/digital-transformation"
        },
        {
          name: "Managed IT & Technical Support",
          path: "/managed-support"
        }
      ]
    },
    {
      label: "Hardware & Electronic Solutions",
      title: "End-to-End IT Services",
      desc: "Customized digital transformation strategies.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      features: [
        { name: "IT Hardware Trading & Distribution", path: "/hardware-trading" },
        { name: "Networking & Communication Equipment", path: "/networking" },
        { name: "Electronic & Digital Products Supply", path: "/electronic-products" },
        { name: "Authorized Dealership & Reseller Services", path: "/dealership" },
        { name: "Installation & Technical Support Services", path: "/hardware-support" }
      ]
    },
    {
      label: "Event Management",
      title: "Knowledge Hub",
      desc: "Explore insights & case studies.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      features: [
        { name: "Event Discovery & Registration Platform", path: "/event-discovery" },
        { name: "Online Ticketing & Payment Solutions", path: "/ticketing" },
        { name: "Event Technology & Access Control", path: "/event-tech" },
        { name: "Corporate & Educational Events", path: "/corporate-events" },
        { name: "Entertainment & Live Event Solutions", path: "/live-events" }
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

        <div className="utility-row">
          <div className="utility-links">
            <Link to="#">Sign in</Link>
            <Link to="#">Help Centre</Link>
            <Link to="#">Company</Link>
            <Link to="#">Contact us</Link>
            <Link to="#">Language</Link>
          </div>
        </div>

        <div className="navbar-container">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img src="/bodhi_logo.png" alt="BodhiStreams" />
            </Link>
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* NAV MENU */}
          <div className={`nav-menu ${mobileOpen ? "active" : ""}`}>

            <Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>

            {navItems.map((item, index) => (
              <div
                key={index}
                className="nav-item"
                onMouseEnter={() => !isMobile && setActiveMenu(index)}
                onMouseLeave={() => !isMobile && setActiveMenu(null)}
                onClick={() => isMobile && setActiveMenu(activeMenu === index ? null : index)}
              >
                <span className="nav-link">{item.label}</span>

                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      className="dropdown"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="dropdown-content">
                        <div className="dropdown-left">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <div className="image-wrapper1">
                            <img src={item.image} alt="preview" />
                          </div>
                        </div>

                        <div className="dropdown-right">
                          <h4>FEATURES</h4>
                          <ul>
                            {item.features.map((feature, i) => (
                              <li key={i}>
                                <Link
                                  to={feature.path}
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setMobileOpen(false);
                                  }}
                                >
                                  {feature.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="nav-actions">
              <button className="btn-primary">Get quot</button>

            </div>

          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;