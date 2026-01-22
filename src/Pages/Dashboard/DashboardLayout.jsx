import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LayoutScene from "../../ThreeJs/LayoutScene";

const links = [
  { path: "profile", label: "Profile" },
  { path: "setting", label: "Setting" },
];

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [generatedLayout, setGeneratedLayout] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [show3D, setShow3D] = useState(false);

  const [formData, setFormData] = useState({
    bedrooms: "",
    bathrooms: "",
    kitchen: "",
    livingRooms: "",
    floors: "",
    garages: "",
    area: "",
    designPreference: "",
    bathroomType: "",
  });

  const designOptions = [
    "Modern",
    "Traditional",
    "Minimalist",
    "Industrial",
    "Luxury",
    "Eco-friendly",
  ];

  // handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    for (const key in formData) {
      if (formData[key] === "") {
        alert("⚠️ Please fill all fields first!");
        return;
      }
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    setGeneratedLayout(null);
    setShow3D(false);
    setRooms([]);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/layout/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bedrooms: Number(formData.bedrooms),
          bathrooms: Number(formData.bathrooms),
          kitchen: Number(formData.kitchen),
          livingRooms: Number(formData.livingRooms),
          floors: Number(formData.floors),
          garages: Number(formData.garages),
          area: Number(formData.area),
          designPreference: formData.designPreference,
          bathroomType: formData.bathroomType,
        }),
      });

      const data = await response.json();
      console.log("AI JSON Layout:", data.layout);

      if (data.success && Array.isArray(data.layout)) {
        setGeneratedLayout(data.layout);
        setRooms(data.layout); // Pass rooms to 3D
        setSuccessMessage("Layout generated successfully!");
      } else {
        setErrorMessage(data.message || "Invalid AI layout format");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Server error, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-emerald-900 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-emerald-950 top-0 left-0 h-full z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 lg:translate-x-0 lg:static lg:w-56`}
      >
        <div className="flex items-center justify-between px-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-xl text-amber-400">
              <MdDashboard />
            </span>
            <h1 className="text-white font-semibold text-xl">Dashboard</h1>
          </div>
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-4 px-4">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white hover:text-amber-400 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main section */}
      <main className="flex-1 flex flex-col">
        {/* <header className="bg-emerald-950 py-4 px-6 flex items-center justify-between shadow-md">
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-2xl text-amber-400 font-bold mx-auto lg:mx-0">
            AutoPlan.AI
          </h1>
        </header> */}

        <div className="p-6 text-white flex-1 overflow-y-auto">
          {/* Alerts */}
          {errorMessage && (
            <div className="bg-red-700 p-3 rounded-lg mb-4 font-medium">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="bg-green-600 p-3 rounded-lg mb-4 font-medium">{successMessage}</div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-emerald-950 p-6 rounded-2xl shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["bedrooms", "bathrooms", "kitchen", "livingRooms", "floors", "garages", "area"].map(
                (field) => (
                  <InputField
                    key={field}
                    label={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                )
              )}

              {/* Bathroom */}
              <div>
                <label className="mb-2 font-semibold block">Bathroom Type</label>
                <div className="flex gap-6">
                  {["attached", "common"].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="bathroomType"
                        value={type}
                        checked={formData.bathroomType === type}
                        onChange={handleChange}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div>
                <label className="mb-2 font-semibold block">Design Preference</label>
                <select
                  name="designPreference"
                  value={formData.designPreference}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-emerald-900 border border-amber-300"
                >
                  <option value="">Select Design</option>
                  {designOptions.map((d, i) => (
                    <option value={d} key={i}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="bg-amber-400 text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500"
            >
              {loading ? "Generating..." : "Generate Layout"}
            </button>
          </form>

          {/* JSON Output */}
          {generatedLayout && (
            <div className="mt-6 bg-emerald-900-900 p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">
                AI Generated Layout:
              </h3>
              <pre className="bg-emerald-900 p-3 rounded text-sm overflow-x-auto">
                {JSON.stringify(generatedLayout, null, 2)}
              </pre>

              <button
                onClick={() => setShow3D(!show3D)}
                className="mt-4 bg-amber-300 px-4 py-2 rounded-lg text-emerald-950 font-medium"
              >
                {show3D ? "Hide 3D Layout" : "View 3D Layout"}
              </button>
            </div>
          )}

          {/* 3D Scene */}
          {show3D && rooms.length > 0 && (
            <div className="mt-8 h-[500px] border border-gray-600 rounded-xl overflow-hidden">
              <LayoutScene rooms={rooms} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Input Component
const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label className="font-semibold mb-2 block">{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-emerald-900 border border-amber-300 rounded"
    />
  </div>
);

export default DashboardLayout;
