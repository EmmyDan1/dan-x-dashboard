import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logoImgg.png";

import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    login(username, email);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center h-screen bg-[#002121] text-white">
      <div className="w-1/2 hidden md:flex flex-col justify-center items-center px-10">
        <img src={Logo} alt="Logo" className="w-full max-w-md h-auto mb-4 opacity-60" />
      </div>
      <div className="h-[400px] w-px bg-gray-300"></div>
      <div className="w-full md:w-1/2 flex items-center justify-center px-">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-[#011c1c] p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Welcome</h2>
          <p className="text-sm text-center text-gray-400 mb-6">
            Please login to Admin Dashboard.
          </p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {error && <p className="text-red mb-4">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-6 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {error && <p className="text-red mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white py-2 rounded-md font-semibold"
          >
            Login
          </button>

          <p className="text-center mt-4 text-sm text-gray-400">
            Forgotten your password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
