import { useState, useEffect } from "react";
import "./LiveEvents.css";

const slides = [
  {
    title: "Music Concerts",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Comedy Shows",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "DJ Nights",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Live Festivals",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Stage Shows",
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop"
  },
    {
    title: "DJ Nights",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop"
  }
  
];

function LiveEvents() {

  const [index,setIndex] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex((prev)=>(prev+1)%slides.length);
    },4000);

    return ()=>clearInterval(timer);
  },[]);

  return (

    <>
    <section className="live-section">

      <h2>Entertainment & Live Event Solutions</h2>

      <div className="carousel">

        {slides.map((slide,i)=>{

          const position = (i-index+slides.length)%slides.length;

          return(
            <div
              key={i}
              className={`card pos-${position}`}
              style={{backgroundImage:`url(${slide.img})`}}
            >
              <div className="overlay">
                <h3>{slide.title}</h3>
              </div>
            </div>
          )

        })}

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
            Entertainment & Live <br />
            Event Solutions
          </h2>

          <p>
            We provide a complete digital platform for discovering,
            promoting and managing entertainment and live events.
            Our solutions support concerts, comedy shows, DJ nights,
            cultural festivals and large-scale entertainment
            experiences with seamless ticket booking and event
            management tools.
          </p>

          <button className="event-btn">
            Explore Events →
          </button>

        </div>

      </div>

    </section>

    {/* ---------------------------------------------------------------------------------------------------- */}


        <section className="hardware-section">

      <div className="hardware-container">

        {/* LEFT CONTENT */}

        <div className="hardware-content">

          <p className="hardware-tag">
            IT HARDWARE TRADING & DISTRIBUTION
          </p>

          <h1>
            Comprehensive IT Hardware
            Supply & Service Solutions
          </h1>

          <p className="hardware-text">
            To carry on the business of wholesale and retail trading and to
            import, export, buy, sell, distribute, supply, stock and market
            computers, desktops, laptops, servers, storage devices,
            networking equipment, communication devices, electronic
            hardware, IT accessories, computer peripherals and all types
            of digital and electronic products.
          </p>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hardware-image">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="IT Hardware Infrastructure"
          />

        </div>

      </div>

    </section>

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

export default LiveEvents;