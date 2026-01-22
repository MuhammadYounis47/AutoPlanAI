import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Auto-load user safely
  useEffect(() => {
    if (token) {
      const rawUser = localStorage.getItem("user");

      // Prevent JSON.parse errors
      if (rawUser && rawUser !== "undefined" && rawUser !== "null") {
        try {
          const parsedUser = JSON.parse(rawUser);
          setUser(parsedUser);
        } catch (err) {
          console.error("Invalid user JSON:", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    }
  }, [token]);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
