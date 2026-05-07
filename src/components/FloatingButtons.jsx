import React from "react";

const FloatingButtons = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <a
        href="https://wa.me/919884595762?text=Welcome%20to%20Bodhi%20Streams!%20How%20can%20we%20assist%20you%20today?"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
          alt="WhatsApp"
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      </a>
    </div>
  );
};

export default FloatingButtons;