import React from "react";
import "./MegaEvents.css";

export default function MegaEvents() {


  const data = [
    {
      title: "Startup Summits 🚀",
      content: "Large-scale events connecting founders, investors, and innovators for networking and growth opportunities."
    },
    {
      title: "Innovation Challenges 💡",
      content: "Competitions designed to solve real-world problems through creativity and innovative thinking."
    },
    {
      title: "Hackathons 💻",
      content: "Fast-paced collaborative events focused on building technical solutions within a limited timeframe."
    },
    {
      title: "Conferences 🎤",
      content: "Knowledge-sharing platforms with expert talks, panel discussions, and networking sessions."
    }
  ];

  return (
    <div className="mega-mag">

      {/* 1 HERO */}
<section className="hero-split">

  <div className="hero-left">
    <h1>Mega Events & Conclaves</h1>

    <p>
      Startup summits, hackathons, and innovation events designed to
      create real business impact and collaboration.
    </p>

    <button>Explore Events →</button>
  </div>

  <div className="hero-right">
    <img
      src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/qbvyzfv2qw0gqihpf3ck?_a=BACAGSGT"
      alt="Mega Events"
    />
  </div>

</section>

      {/* 2 ABOUT */}
      <section className="sec-overlay">

  <div className="overlay-wrapper">

    {/* IMAGE */}
    <img
      src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600"
      alt="Events"
    />

    {/* CONTENT CARD */}
    <div className="overlay-card">
      <h2>About Our Events</h2>

      <p>
        We create platforms where ideas meet execution and innovation
        meets opportunity through large-scale events.
      </p>
    </div>

  </div>

</section>
      {/* 3 TYPES */}
<section className="formats-css">

  <h2 className="title">Event Formats</h2>

  <div className="accordion-css">

    <div className="item">
      <input type="checkbox" id="item1" />
      <label htmlFor="item1">
        Startup Summits 🚀 <span>+</span>
      </label>
      <div className="content">
        <p>
          Large-scale events connecting founders, investors, and innovators for networking and growth opportunities.
        </p>
      </div>
    </div>

    <div className="item">
      <input type="checkbox" id="item2" />
      <label htmlFor="item2">
        Innovation Challenges 💡 <span>+</span>
      </label>
      <div className="content">
        <p>
          Competitions designed to solve real-world problems through creativity and innovation.
        </p>
      </div>
    </div>

    <div className="item">
      <input type="checkbox" id="item3" />
      <label htmlFor="item3">
        Hackathons 💻 <span>+</span>
      </label>
      <div className="content">
        <p>
          Fast-paced collaborative events focused on building technical solutions.
        </p>
      </div>
    </div>

    <div className="item">
      <input type="checkbox" id="item4" />
      <label htmlFor="item4">
        Conferences 🎤 <span>+</span>
      </label>
      <div className="content">
        <p>
          Knowledge-sharing platforms with expert talks and networking sessions.
        </p>
      </div>
    </div>

  </div>

</section>


      {/* 4 EXECUTION */}
     <section className="execution-stack">

  <div className="stack-card">

    {/* IMAGE */}
    <div className="stack-image">
      <img
        src="https://skipprichard.com/wp-content/uploads/2017/06/bigstock-Business-Execution-Concept-181358104.jpg"
        alt="Execution Excellence"
      />
    </div>

    {/* CONTENT */}
    <div className="stack-content">
      <h2>Execution Excellence</h2>

      <p>
        We ensure smooth event delivery with planning,
        management, and high-quality engagement.
      </p>

      <button>Explore More →</button>
    </div>

  </div>

</section>

      {/* 5 PROCESS */}
<section className="process-stepper">

  <h2 className="title">Process</h2>

  <div className="stepper">

    <div className="step">
      <div className="circle">1</div>
      <h4>Planning</h4>
      <p>Defining goals and strategy.</p>
    </div>

    <div className="step">
      <div className="circle">2</div>
      <h4>Organizing</h4>
      <p>Managing resources and logistics.</p>
    </div>

    <div className="step">
      <div className="circle">3</div>
      <h4>Execution</h4>
      <p>Delivering the event smoothly.</p>
    </div>

    <div className="step">
      <div className="circle">4</div>
      <h4>Impact</h4>
      <p>Measuring results and outcomes.</p>
    </div>

  </div>

</section>

      {/* 6 VALUE */}
<section className="impact-rows">

  <h2 className="title">Impact Areas</h2>

  <div className="impact-list">

    <div className="impact-item">
      <div className="icon">🎓</div>
      <div className="text">
        <h3>Education</h3>
        <p>
          Empowering students and institutions through knowledge-driven
          events, workshops, and innovation programs.
        </p>
      </div>
    </div>

    <div className="impact-item">
      <div className="icon">🚀</div>
      <div className="text">
        <h3>Startups</h3>
        <p>
          Supporting startup ecosystems with networking, funding
          opportunities, and mentorship platforms.
        </p>
      </div>
    </div>

    <div className="impact-item">
      <div className="icon">🏢</div>
      <div className="text">
        <h3>Corporate</h3>
        <p>
          Enabling organizations to collaborate, innovate, and engage
          through strategic events and conferences.
        </p>
      </div>
    </div>

    <div className="impact-item">
      <div className="icon">🌍</div>
      <div className="text">
        <h3>Community</h3>
        <p>
          Creating meaningful social impact through community-driven
          events and collaborative initiatives.
        </p>
      </div>
    </div>

  </div>

</section>

      {/* 7 BENEFITS */}
<section className="cta-banner">

  <div className="banner-content">

    <h2>Key Benefits</h2>

    <div className="chips">
      <span>⚡ Faster Execution</span>
      <span>🎯 Better Decisions</span>
      <span>🌐 Strong Networking</span>
      <span>📈 Business Growth</span>
    </div>

    <p>
      Deliver high-impact events with expert-driven strategies,
      seamless execution, and meaningful outcomes.
    </p>

    <button>Launch Your Event →</button>

  </div>

</section>

    </div>
  );
}