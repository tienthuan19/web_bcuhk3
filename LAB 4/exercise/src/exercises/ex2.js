import React from "react";

function GreetingCard({ name }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "10px auto",
    maxWidth: "300px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}! Welcome to React.</h2>
    </div>
  );
}

export default GreetingCard;
