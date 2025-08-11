import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={toggle}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isVisible ? "#f44336" : "#4CAF50",
          color: "white",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && (
        <p style={{ maxWidth: "400px", margin: "auto" }}>
          Hello! This is some content that can be toggled on and off. Click the
          button above to hide or show this text. You can use this feature to
          display additional information, instructions, or any other content
          that you want to keep hidden until needed.
        </p>
      )}
    </div>
  );
}

export default ToggleVisibility;
