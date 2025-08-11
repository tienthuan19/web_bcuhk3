import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component con sử dụng Context
function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ fontWeight: "bold" }}>
      Current theme:{" "}
      <span style={{ color: theme === "light" ? "#333" : "#fff" }}>
        {theme}
      </span>
    </p>
  );
}

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: "#2196F3",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      DARK MODE
    </button>
  );
}

// UI
function ThemeApp() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#f5f5f5",
        color: isDark ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>Switch</h3>
      <ThemeDisplay />
      <ThemeToggle />
    </div>
  );
}

// Gộp ThemeProvider và ThemeApp
function ThemeSwitcherApp() {
  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  );
}

export default ThemeSwitcherApp;
