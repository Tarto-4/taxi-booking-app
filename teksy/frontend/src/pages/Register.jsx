import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock register logic
    alert("Registered successfully!");
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
