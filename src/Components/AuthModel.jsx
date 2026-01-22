import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthModal = ({ setShowModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Signup function
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password)
      return alert("Please fill all fields");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
        setIsLogin(true);
        setFormData({ name: "", email: "", password: "" });
      } else alert(data.message || "Signup failed");
    } catch (error) {
      alert("Server error");
    }
  };

  // Login function
  const handleLogin = async (e) => {
  e.preventDefault();
  if (!formData.email || !formData.password)
    return alert("Please fill all fields");

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      //Context ke login function se token aur user set kar rahe hain
      login(data.token, { email: formData.email });

      alert("Login successful!");
      setShowModal(false);
      navigate("/dashboard");
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    alert("Server error");
  }
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-emerald-900/50 backdrop-blur-sm z-50">
      <div className="relative w-96 bg-gradient-to-b bg-purple-500to-blue-950 border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-amber-400 hover:text-amber-300 text-2xl font-bold"
        >
          ✕
        </button>

        {/* Header */}
        
        <div className="text-center py-6 border-b border-amber-400/20">
          <h2 className="text-3xl font-extrabold text-amber-400">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            {isLogin
              ? "Login to continue your journey"
              : "Signup to start creating your AI plans"}
          </p>
        </div>

        {/* Form */}
        <form
          className="px-8 py-6 space-y-4"
          onSubmit={isLogin ? handleLogin : handleSignup}
        >
          {!isLogin && (
            <div>
              <label className="text-gray-300 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 rounded-lg bg-emerald-950 text-white  border border-blue-700 focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="John Doe"
              />
            </div>
          )}
          <div>
            <label className="text-gray-300 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-emerald-950 text-white  border border-blue-700 focus:ring-2 focus:ring-amber-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-emerald-950 text-white  border border-blue-700 focus:ring-2 focus:ring-amber-400 outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-lg transition-all duration-300 shadow-md"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          {/* Switch text */}
          <p className="text-center text-gray-300 text-sm mt-3">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-amber-400 cursor-pointer hover:underline font-semibold"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </form>

        {/* Footer glow line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default AuthModal;
