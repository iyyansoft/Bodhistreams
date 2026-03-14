import React, { useState } from "react";
import "./HelpCenter.css";

const HelpCenter = () => {

  const [search,setSearch] = useState("");
  const [open,setOpen] = useState(null);

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
      q:"How can I request IT services?",
      a:"Click the Get Quote button and submit your requirements."
    },
    {
      q:"Do you supply hardware products?",
      a:"Yes, we supply computers, servers and networking equipment."
    },
    {
      q:"How do I register for events?",
      a:"Browse the event platform and complete the registration form."
    },
    {
      q:"How can I contact support?",
      a:"You can contact support through the contact form below."
    }
  ];

  const filtered = articles.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const highlight = (text) => {

    if(!search) return text;

    const parts = text.split(new RegExp(`(${search})`,"gi"));

    return parts.map((part,i)=>
      part.toLowerCase() === search.toLowerCase()
      ? <span key={i} className="highlight">{part}</span>
      : part
    );

  };

  return (

  <div className="help-page">

  {/* HERO */}

  <section className="help-hero">

  <h1>How can we help?</h1>

  <p>Search help articles or browse categories</p>

  <input
  className="help-search"
  placeholder="Search help articles..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  />

  </section>

  {/* SEARCH RESULTS */}

  {search && (

  <section className="search-results">

  {filtered.length===0 && <p>No results found</p>}

  {filtered.map((item,i)=>(
  <div key={i} className="result-card">
  {highlight(item)}
  </div>
  ))}

  </section>

  )}

  {/* HELP CATEGORIES */}

  {!search && (

  <section className="help-categories">

  <div className="help-card">
  <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="" />
  <h3>IT Services</h3>
  <p>Software development and IT consulting support.</p>
  </div>

  <div className="help-card">
  <img src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png" alt="" />
  <h3>Hardware Support</h3>
  <p>Device installation and hardware troubleshooting.</p>
  </div>

  <div className="help-card">
  <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="" />
  <h3>Event Platform</h3>
  <p>Event discovery and registration help.</p>
  </div>

  <div className="help-card">
  <img src="https://cdn-icons-png.flaticon.com/512/633/633611.png" alt="" />
  <h3>Billing</h3>
  <p>Invoices, payments and quote information.</p>
  </div>

  </section>

  )}

  {/* POPULAR ARTICLES */}

  {!search && (

  <section className="popular-articles">

  <h2>Popular Help Articles</h2>

  <ul>

  {articles.map((item,i)=>(
  <li key={i}>{item}</li>
  ))}

  </ul>

  </section>

  )}

  {/* FAQ */}

  {!search && (

  <section className="faq-section">

  <h2>Frequently Asked Questions</h2>

  {faq.map((item,i)=>(

  <div key={i} className="faq-item">

  <div
  className="faq-question"
  onClick={()=>setOpen(open===i?null:i)}
  >

  {item.q}

  </div>

  {open===i && (
  <div className="faq-answer">
  {item.a}
  </div>
  )}

  </div>

  ))}

  </section>

  )}

  {/* GUIDES */}

  {!search && (

  <section className="help-guides">

  <h2>Guides & Tutorials</h2>

  <div className="guide-grid">

  <div className="guide-card">
  <h4>Getting Started</h4>
  <p>Learn how to start using our services.</p>
  </div>

  <div className="guide-card">
  <h4>Platform Tutorials</h4>
  <p>Step-by-step guides for using our platform.</p>
  </div>

  <div className="guide-card">
  <h4>Technical Documentation</h4>
  <p>Detailed technical resources and documentation.</p>
  </div>

  </div>

  </section>

  )}

  {/* CONTACT SUPPORT */}

  {!search && (

  <section className="help-contact">

  <h2>Still need help?</h2>

  <p>Send us your issue and our support team will respond.</p>

  <input placeholder="Your Name" />
  <input placeholder="Email Address" />
  <textarea placeholder="Describe your issue"></textarea>

  <button>Submit Request</button>

  </section>

  )}

  </div>

  );

};

export default HelpCenter;