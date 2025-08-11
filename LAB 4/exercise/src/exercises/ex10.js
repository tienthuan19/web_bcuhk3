import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setEmailError('Email must contain "@"');
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      setSubmitted(true);
    }
  };

  const isFormValid = !emailError && !passwordError && email && password;

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ width: "100%", padding: "8px", marginBottom: "4px" }}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{ width: "100%", padding: "8px", marginBottom: "4px" }}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: isFormValid ? "#4CAF50" : "#ccc",
            color: "white",
            border: "none",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          Login
        </button>
      </form>

      {/* Success message */}
      {submitted && (
        <p style={{ color: "green", marginTop: "10px" }}>Login successful!</p>
      )}
    </div>
  );
}

export default LoginForm;
