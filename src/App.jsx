import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import AuthModal from "./Components/AuthModel";
import { AuthProvider } from "./context/AuthContext";
import LayoutView from "./Pages/LayoutViewr";
import Contact from "./Pages/Contact";
import { style } from "framer-motion/client";
import Services from "./Pages/Services";

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); // to check current route
  return (
    <AuthProvider>
      <div className="bg-[#0C3B2E] h-screen text-white">
        {/* Navbar */}
        <Navbar setShowModal={setShowModal} />

        {/* Auth Modal */}
        {showModal && <AuthModal setShowModal={setShowModal} />}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home setShowModal={setShowModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />
          <Route path="/layout" element={<LayoutView />} />
        </Routes>

        {/* ✅ Footer conditionally render — hide on /dashboard */}
        {location.pathname !== "/dashboard" && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
