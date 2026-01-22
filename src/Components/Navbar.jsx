import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ setShowModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-emerald-950 w-full shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-6">
          {/* Logo */}
          <Link to="/">
            <img src="logo.png" alt="logo" className="object-cover w-20 h-20" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-6 text-white font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative group ${
                    location.pathname === link.path ? "text-amber-400" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-amber-400 transition-all duration-500 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-xl cursor-pointer select-none border-2 border-amber-400"
                >
                  {user.email.charAt(0).toUpperCase()}
                </div>

                {/* Profile Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg py-2 text-gray-700 animate-fade-in">
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        navigate("/");
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="bg-amber-400 text-emerald-950 px-4 py-2 rounded hover:bg-amber-500 font-semibold cursor-pointer"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-emerald-950 text-white flex flex-col px-6 py-4 space-y-4 z-[60] shadow-lg">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}

            {user ? (
              <>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/dashboard");
                  }}
                  className="text-left hover:text-amber-400"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                    navigate("/");
                  }}
                  className="text-left text-red-400 hover:text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setShowModal(true);
                  setMenuOpen(false);
                }}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 font-semibold"
              >
                Login
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
