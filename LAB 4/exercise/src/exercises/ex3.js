import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Current Count: {count}</h2>

      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#2196F3", color: "white" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
