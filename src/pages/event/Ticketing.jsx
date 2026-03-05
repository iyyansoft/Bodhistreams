import "./Ticketing.css";

const Ticketing = () => {
  return (
    <>
    <section className="ticket-hero">

      {/* LEFT IMAGE */}
      <div className="ticket-image">
        <img
          src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop"
          alt="Event Ticketing"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="ticket-content">

        <h1 className="ticket-title">
          CAPTURE THE <br /> MOMENT!
        </h1>

        <p>
          Our platform provides secure online ticket booking for
          concerts, exhibitions, trade fairs, sports events and
          conferences. Users can purchase tickets instantly and
          receive digital confirmations through automated systems.
        </p>

        <button className="ticket-btn">
          Book Tickets
        </button>

      </div>

    </section>


    {/* ----------------------------------------------------------------------------------------------------- */}






        <section className="ticket-info-section">

      {/* LEFT IMAGE */}
      <div className="ticket-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
          alt="Event illustration"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="ticket-center">

        <h2>Online Ticketing Platform</h2>

        <p>
          Our platform provides secure online ticket booking for
          concerts, exhibitions, trade fairs, sports events and
          conferences. Users can purchase tickets instantly and
          receive digital confirmations through automated systems.
        </p>

        <button className="ticket-btn">
          Book Tickets
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="ticket-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="Ticket illustration"
        />
      </div>

    </section>


    </>
  );
};

export default Ticketing;