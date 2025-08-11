import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]); // effect chỉ chạy lại khi isRunning thay đổi

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Format MM:SS
  const formatTime = (s) => {
    const minutes = String(Math.floor(s / 60)).padStart(2, "0");
    const secs = String(s % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Stopwatch</h2>
      <h1>{formatTime(seconds)}</h1>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleStart} style={btnStyle}>
          Start
        </button>
        <button onClick={handlePause} style={btnStyle}>
          Pause
        </button>
        <button onClick={handleReset} style={btnStyle}>
          Reset
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  margin: "0 5px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#2196F3",
  color: "white",
};

export default Timer;
