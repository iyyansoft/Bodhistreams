// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);
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

    const handleClickOutside = (event) => {
      const clickedInsideDropdown = event.target.closest(".dropdown-content");
      const clickedNavHeader = event.target.closest(".nav-link") || event.target.closest(".hamburger");
      if (!clickedInsideDropdown && !clickedNavHeader) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  const navItems = [
    {
      label: "IT Services",
      title: "Enterprise IT & Software Services",
      desc: "Tailored software development, expert systems consulting, digital automation, and proactive 24/7 managed support.",
      image:
        "https://kemsys.com/wp-content/uploads/2021/07/Digital-Engineering-Services-IoT-by-Kemsys-500x500.jpg",
      features: [
        {
          name: "Software Development Solutions",
          path: "/software-development",
          icon: "💻",
          desc: "Tailored web, mobile, and cloud software solutions."
        },
        {
          name: "IT Consulting & System Integration",
          path: "/it-consulting",
          icon: "🤝",
          desc: "Expert advisory for robust systems integration."
        },
        {
          name: "Digital Transformation & Automation",
          path: "/digital-transformation",
          icon: "⚡",
          desc: "Automate legacy workflows with smart tools."
        },
        {
          name: "Managed IT & Technical Support",
          path: "/managed-support",
          icon: "🛡️",
          desc: "24/7 proactive monitoring and system support."
        }
      ]
    },
    {
      label: "Hardware & Electronic Solutions",
      title: "IT Hardware & Electronics Supply",
      desc: "Authorized distribution, hardware procurement, networking gear, and on-site technical deployment services.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      features: [
        {
          name: "IT Hardware Trading & Distribution",
          path: "/hardware-trading",
          icon: "🖥️",
          desc: "Enterprise servers, clients, and workstation supplies."
        },
        {
          name: "Electronic & Digital Products Supply",
          path: "/electronic-products",
          icon: "🔌",
          desc: "Smart electronics, IoT, and custom lab materials."
        },
        {
          name: "Networking & Communication Equipment",
          path: "/networking",
          icon: "📡",
          desc: "High-speed routers, switches, and cabling."
        },
        {
          name: "Installation & Technical Support Services",
          path: "/hardware-support",
          icon: "⚙️",
          desc: "On-site setup, deployment, and SLA maintenance."
        }
      ]
    },
    {
      label: "Event infra",
      title: "Event Technology Suite",
      desc: "Complete digital ticketing, management apps, brand promotion, and physical setup infrastructure.",
      image:
        "https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg",
      features: [
        {
          name: "Event Discovery & Registration Platform",
          path: "/event-discovery",
          icon: "🎫",
          desc: "Secure ticketing and streamlined attendee registration."
        },
        {
          name: "Digital infrastructure for event management",
          path: "/digital-infra",
          icon: "🌐",
          desc: "Event apps, check-in kiosks, and cloud infrastructure."
        },
        {
          name: "Brand Promotion",
          path: "/brand-promotion",
          icon: "📢",
          desc: "Sponsor activation, target marketing, and brand boost."
        },
        {
          name: "Vendors Connect",
          path: "/vendors-connect",
          icon: "🤝",
          desc: "Matchmaking portals connecting organizers and vendors."
        },
        {
          name: "Expert Network",
          path: "/expert-network",
          icon: "🎓",
          desc: "Connect with event planners, techs, and speakers."
        },
        {
          name: "Mega Events & Conclaves",
          path: "/megaEvents-Conclaves",
          icon: "✨",
          desc: "Startup summits, hackathons, and conclaves."
        }
      ]
    }
  ];

  return (
    <motion.nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-wrapper">



        <div className="utility-row">
          <div className="utility-links">
           
            <Link to="/help-centre">Help Centre</Link>
            <Link to="/about">About Us</Link>

            <Link to="/contactus">ContactUs</Link>
            {/* <Link to="#">Language</Link> */}
          </div>
        </div>

        <div className="navbar-container">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img src="/bodhi1.png" alt="BodhiStreams" />
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
                onClick={() => setActiveMenu(activeMenu === index ? null : index)}
              >
                <span className="nav-link">{item.label}</span>

                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      className="dropdown"
                      onClick={(e) => e.stopPropagation()}

                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="dropdown-content">
                        <div className="dropdown-col-1">
                          <span className="dropdown-badge">{item.label}</span>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>

                        <div className="dropdown-col-2">
                          <h4>FEATURES</h4>
                          <div className="dropdown-links-list">
                            {item.features.map((feature, i) => (
                              <Link
                                key={i}
                                to={feature.path}
                                className="dropdown-clean-link"
                                onClick={() => {
                                  setActiveMenu(null);
                                  setMobileOpen(false);
                                }}
                              >
                                <span className="link-title">{feature.name}</span>
                                <span className="link-arrow">→</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="dropdown-col-3">
                          <div className="image-wrapper1">
                            <img src={item.image} alt="preview" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

         

            <div className="mobile-utility-links">
              <Link to="/help-centre" onClick={() => setMobileOpen(false)}>Help Centre</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link to="/contactus" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;