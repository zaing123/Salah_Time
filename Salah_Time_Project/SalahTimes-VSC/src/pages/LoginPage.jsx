import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css"; // Background image will now be handled in CSS

const LoginPage = () => {
  const [formData, setFormData] = useState({ Email: "", PasswordHash: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://localhost:7162/api/UsersApi", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("Login info submitted successfully!");
      setFormData({ Email: "", PasswordHash: "" });
    } catch (error) {
      console.error("Error details:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-card">
        <h2>🔐 Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            className="login-input"
          />
          <input
            type="password"
            name="PasswordHash"
            placeholder="Password"
            value={formData.PasswordHash}
            onChange={handleChange}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
