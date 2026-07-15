import React, { useState } from "react";
import "./HelpCenter.css";
import PageWrapper from "../components/PageWrapper";
import AnimatedSection from "../components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);

  const articles = [
    "How to request IT services",
    "How to purchase hardware equipment",
    "How to register for events",
    "How to contact technical support",
    "How to manage event tickets",
    "Hardware installation guide",
    "Payment and billing information"
  ];

  const faq = [
    {
      q: "How can I request IT services?",
      a: "Click the Get Quote button on our IT Services pages, or submit a request directly through the contact support form below."
    },
    {
      q: "Do you supply hardware products?",
      a: "Yes, we source and supply enterprise-grade servers, desktops, firewalls, and networking switches along with comprehensive installation services."
    },
    {
      q: "How do I register for events?",
      a: "Search for public, corporate, or academic events on our Event Platform page, select your tickets, and complete the instant checkout process."
    },
    {
      q: "How can I contact support?",
      a: "Our customer support team is available 24/7. Submit your request through the form below, or reach out to us at support@bodhistreams.net."
    }
  ];

  const filtered = articles.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const highlight = (text) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={i} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <PageWrapper>
      <div className="help-page">
        {/* HERO */}
        <section className="help-hero">
          <div className="help-hero-overlay"></div>
          <div className="help-hero-container">
            <AnimatedSection type="slideDown" duration={0.6}>
              <span className="help-badge">SUPPORT CENTER</span>
              <h1>How can we help you today?</h1>
              <p>Search our knowledge base, guides, or frequently asked questions.</p>
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  className="help-search"
                  placeholder="Search help articles, topics, guides..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SEARCH RESULTS */}
        <AnimatePresence>
          {search && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="search-results-section"
            >
              <div className="section-container">
                <h2>Search Results</h2>
                <div className="results-grid">
                  {filtered.length === 0 ? (
                    <div className="no-results">
                      <p>No articles found for "{search}". Try searching for other terms like "billing", "hardware", or "events".</p>
                    </div>
                  ) : (
                    filtered.map((item, i) => (
                      <div key={i} className="result-card">
                        <span className="result-icon">📄</span>
                        <div className="result-text">{highlight(item)}</div>
                        <span className="result-arrow">→</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* HELP CATEGORIES */}
        {!search && (
          <section className="help-categories-section">
            <div className="section-container">
              <div className="section-header">
                <h2>Browse by Topic</h2>
                <p>Select a category to find specialized solutions and documentation.</p>
              </div>
              <div className="help-categories">
                <AnimatedSection type="scale" delay={0.05} className="help-card">
                  <div className="category-icon-wrapper blue">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <h3>IT Services</h3>
                  <p>Software development frameworks, IT consulting, and custom enterprise tools.</p>
                  <span className="card-link">View Articles →</span>
                </AnimatedSection>

                <AnimatedSection type="scale" delay={0.1} className="help-card">
                  <div className="category-icon-wrapper green">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <h3>Hardware Support</h3>
                  <p>Device installation protocols, troubleshooting, and network topologies.</p>
                  <span className="card-link">View Articles →</span>
                </AnimatedSection>

                <AnimatedSection type="scale" delay={0.15} className="help-card">
                  <div className="category-icon-wrapper purple">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <h3>Event Platform</h3>
                  <p>Event organization dashboards, ticket purchases, and feedback analysis.</p>
                  <span className="card-link">View Articles →</span>
                </AnimatedSection>

                <AnimatedSection type="scale" delay={0.2} className="help-card">
                  <div className="category-icon-wrapper orange">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <line x1="12" y1="10" x2="12" y2="10" />
                      <path d="M8 14h8" />
                    </svg>
                  </div>
                  <h3>Billing & Quotes</h3>
                  <p>Request quotes, verify invoice statements, and setup secure payments.</p>
                  <span className="card-link">View Articles →</span>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* POPULAR ARTICLES & FAQS SPLIT */}
        {!search && (
          <section className="faq-and-articles-section">
            <div className="section-container split-layout">
              <AnimatedSection type="slideRight" className="articles-column">
                <div className="section-header-left">
                  <h2>Popular Help Articles</h2>
                  <p>Most frequently accessed articles by our network.</p>
                </div>
                <ul className="articles-list">
                  {articles.map((item, i) => (
                    <li key={i} className="popular-article-item">
                      <span className="article-icon">📄</span>
                      <span className="article-title">{item}</span>
                      <span className="article-arrow">→</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection type="slideLeft" className="faq-column">
                <div className="section-header-left">
                  <h2>Frequently Asked Questions</h2>
                  <p>Quick answers to basic operational inquiries.</p>
                </div>
                <div className="faq-accordion">
                  {faq.map((item, i) => (
                    <div key={i} className={`faq-item-card ${open === i ? "active" : ""}`}>
                      <div className="faq-question-row" onClick={() => setOpen(open === i ? null : i)}>
                        <h3>{item.q}</h3>
                        <span className="faq-toggle-btn">{open === i ? "−" : "+"}</span>
                      </div>
                      <AnimatePresence>
                        {open === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="faq-answer-row"
                          >
                            <p>{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* GUIDES */}
        {!search && (
          <section className="help-guides-section">
            <div className="section-container">
              <div className="section-header">
                <h2>Documentation & Guides</h2>
                <p>Read step-by-step documentation for building, deploying, and tracking.</p>
              </div>
              <div className="guide-grid">
                <AnimatedSection type="slideUp" delay={0.05} className="guide-card-premium">
                  <span className="guide-tag green">START</span>
                  <h4>Getting Started Guide</h4>
                  <p>Learn how to register profiles, explore projects, and select event listings.</p>
                  <span className="guide-btn">Read Guide →</span>
                </AnimatedSection>

                <AnimatedSection type="slideUp" delay={0.1} className="guide-card-premium">
                  <span className="guide-tag blue">TUTORIAL</span>
                  <h4>Platform Workflows</h4>
                  <p>Step-by-step guides for custom setups, lab configurations, and vendor systems.</p>
                  <span className="guide-btn">Read Guide →</span>
                </AnimatedSection>

                <AnimatedSection type="slideUp" delay={0.15} className="guide-card-premium">
                  <span className="guide-tag purple">DEVELOPER</span>
                  <h4>Technical Docs</h4>
                  <p>Detailed technical documentation, API integrations, and code configurations.</p>
                  <span className="guide-btn">Read Docs →</span>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        {/* CONTACT SUPPORT */}
        {!search && (
          <section className="help-contact-section">
            <div className="section-container">
              <AnimatedSection type="scale" className="help-contact-card">
                <h2>Still need assistance?</h2>
                <p>Can't find what you are looking for? Send us a ticket and our support team will respond shortly.</p>
                <form className="support-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input placeholder="Jane Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="jane@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>How can we help?</label>
                    <textarea placeholder="Describe your issue or question in detail..." required></textarea>
                  </div>
                  <button type="submit" className="submit-support-btn">Submit Support Request</button>
                </form>
              </AnimatedSection>
            </div>
          </section>
        )}
      </div>
    </PageWrapper>
  );
};

export default HelpCenter;