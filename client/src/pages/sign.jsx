// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  //const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    try {
      // Make the POST request to the backend
      const response = await axios.post(`${apiUrl}api/users/signup`, {
        name,
        email,
        password,
      });

      // Check if the token is in the response
      const token = response.data.token;
      if (token) {
        // Save the token in localStorage
        localStorage.setItem("token", token);
        // Redirect to the profile or dashboard page
        //navigate("/profile");
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (err) {
      console.error("Error in signup:", err);
      setError(
        err.response?.data?.message || "Sign up failed. Please try again."
      );
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
