import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false); // ✅ toggle between login/register

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isRegister 
        ? "http://localhost:5000/api/register" 
        : "http://localhost:5000/api/login";

      const response = await axios.post(endpoint, { email, password });

      if (response.data.success) {
        alert(isRegister ? "Registration successful 🎉" : "Login successful 🎉");
        console.log("User data:", response.data.user);
      } else {
        alert(response.data.message || "Invalid credentials ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4 mt-4">
        {isRegister ? "Register" : "Login"}
      </h2>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <div className="text-center mt-3">
        <button 
          className="btn btn-link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Already have an account? Login" : "New user? Register"}
        </button>
      </div>
    </div>
  );
}

export default Login;
