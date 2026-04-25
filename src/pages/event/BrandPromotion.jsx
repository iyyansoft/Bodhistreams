import { useState, useEffect } from "react";
import "./BrandPromotion.css";

const initialEvents = [
  { title: "Seminars", desc: "Knowledge sharing", icon: "📘", color: "#7C3AED" },
  { title: "Workshops", desc: "Hands-on learning", icon: "💡", color: "#2563EB" },
  { title: "Hackathons", desc: "Build & innovate", icon: "💻", color: "#059669" },
  { title: "Conclaves", desc: "Expert gatherings", icon: "👥", color: "#EA580C" },
  { title: "Conference", desc: "Professional events", icon: "🎤", color: "#DB2777" },
  { title: "Culturals", desc: "Art & performance", icon: "🎵", color: "#7C3AED" },
  { title: "Business", desc: "Networking & trade", icon: "💼", color: "#374151" },
  { title: "Community", desc: "Social causes", icon: "❤️", color: "#DC2626" }
];

function BrandPromotion() {



  const [events, setEvents] = useState(initialEvents);

  // 🔀 shuffle function (best method)
  const shuffleArray = (arr) => {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // 🔄 auto shuffle every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prev => shuffleArray(prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (

    <>
   <section className="events-section">

      <h2 className="title">Brand Promotion & Audience Engagement</h2>

      <div className="events-grid">

        {events.map((item, i) => (
          <div key={i} className="card">

            <div
              className="icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h3 style={{ color: item.color }}>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
    {/* ------------------------------------------------------------------------------------------------------------------------------ */}



    <section className="event-supply">

  <div className="event-container">

    {/* LEFT IMAGE */}
    <div className="event-image">
      <img
        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"
        alt="Live Events"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="event-content">

      <h2>
        Brand Promotion Through <br />
        Live Event Experiences
      </h2>

      <p>
        Amplify your brand presence by leveraging a digital platform designed 
        to promote and showcase events to the right audience. From event 
        publishing to audience engagement, our system helps increase visibility 
        and create impactful connections through curated event experiences.

        With integrated ticketing, participation tracking, and performance 
        insights, businesses can effectively measure reach and enhance their 
        promotional strategies through live and interactive events.
      </p>

      <button className="event-btn">
        Promote Your Brand →
      </button>

    </div>

  </div>

</section>
    {/* ---------------------------------------------------------------------------------------------------- */}

    <div className="bp3-wrapper">

      {/* 🔹 SECTION 1 */}
      <section className="bp3-section">

        <div className="bp3-container">

          {/* LEFT IMAGE */}
          <div className="bp3-image">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200" alt="marketing" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bp3-content">

            <h2>Brand Promotion</h2>

            <p className="bp3-desc">
              Boost your event visibility using targeted strategies, smart audience segmentation,
              and powerful cross-platform reach.
            </p>

            <div className="bp3-features">

              <div className="bp3-item">
                <span>01</span>
                <div>
                  <h4>Targeted Campaigns</h4>
                  <p>Reach the right audience with precision marketing.</p>
                </div>
              </div>

              <div className="bp3-item">
                <span>02</span>
                <div>
                  <h4>Audience Optimization</h4>
                  <p>Maximize engagement with smart segmentation.</p>
                </div>
              </div>

              <div className="bp3-item">
                <span>03</span>
                <div>
                  <h4>Cross-Platform Visibility</h4>
                  <p>Expand your reach across multiple channels.</p>
                </div>
              </div>

            </div>

            <p className="bp3-seo">
              SEO Keywords: event marketing services, brand promotion, digital event marketing
            </p>

          </div>

        </div>

      </section>


      {/* 🔹 SECTION 2 */}
      <section className="bp3-cta">

        <div className="bp3-cta-inner">

          <h2>Without visibility, your event doesn’t exist.</h2>

          <p>
            Create strong brand awareness and ensure your event reaches the right audience effectively.
          </p>

          <button>Promote Your Event →</button>

        </div>

      </section>

    </div>

    {/* ------------------------------------------------------------------------------------------------------------------------------- */}


    <section className="ent-section">

      {/* LEFT IMAGE */}

      <div className="ent-image">

        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600&auto=format&fit=crop"
          alt="Live Event"
        />

      </div>


      {/* RIGHT CONTENT */}

      <div className="ent-content">

        <h1>
          ENTERTAINMENT & <br />
          LIVE EVENT <br />
          SOLUTIONS
        </h1>

        <p>
          Our platform enables seamless discovery,
          promotion and management of entertainment
          and live events including concerts,
          exhibitions, cultural programs, sports
          events and community experiences.
        </p>

        <p>
          With integrated online ticket booking,
          payment processing and secure access
          control, we help organizers manage events
          efficiently while delivering a smarter
          and more engaging experience for audiences.
        </p>

      </div>

    </section>

    </>
  )
}

export default BrandPromotion;