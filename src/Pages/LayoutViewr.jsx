import React, { useState } from "react";
import LayoutScene from "../ThreeJs/LayoutScene";

const LayoutView = () => {
  const [form, setForm] = useState({
    bedrooms: "",
    bathrooms: "",
    kitchen: "",
    commonRoom: "",
    plotSize: "",
  });

  const [layout, setLayout] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateLayout = async () => {
    setLoading(true);
    setError("");
    setLayout(null);

    try {
      const prompt = `Create a detailed home layout for a plot size of ${form.plotSize}.
      It should include ${form.bedrooms} bedrooms, ${form.bathrooms} bathrooms,
      ${form.kitchen} kitchen, and ${form.commonRoom} common rooms.`;

      const res = await fetch("http://localhost:5000/api/layout/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.success) {
        setLayout(data.layout); // AI ka output
      } else {
        setError(data.message || "Failed to generate layout");
      }
    } catch (err) {
      console.error(err);
      setError("Server error: unable to fetch layout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          🏠 AutoPlan.AI Layout Generator
        </h1>

        {/* Form */}
        <div className="space-y-4">
          <input
            name="plotSize"
            type="text"
            placeholder="Plot Size (e.g. 30x40 ft)"
            value={form.plotSize}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="bedrooms"
            type="number"
            placeholder="Number of Bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="bathrooms"
            type="number"
            placeholder="Number of Bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="kitchen"
            type="number"
            placeholder="Number of Kitchens"
            value={form.kitchen}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="commonRoom"
            type="number"
            placeholder="Number of Common Rooms"
            value={form.commonRoom}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={generateLayout}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Generating..." : "Generate Layout"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-500 text-center font-medium mt-4">
            ⚠️ {error}
          </div>
        )}

        {/* 3D Scene */}
        {layout && (
          <div className="mt-6 border rounded-lg shadow">
            <LayoutScene layoutData={layout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutView;
