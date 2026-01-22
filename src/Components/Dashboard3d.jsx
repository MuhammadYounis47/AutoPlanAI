import React, { useState } from "react";
import LayoutScene from "./three/LayoutScene";
import { parseLayoutText } from "../utils/parseLayoutText";

const Dashboard3D = () => {
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

  const [generatedText, setGeneratedText] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMessage("");
    setGeneratedText("");
    setRooms([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill all fields!");
        return;
      }
    }

    setLoading(true);
    setErrorMessage("");
    setGeneratedText("");
    setRooms([]);

    try {
      const res = await fetch("http://localhost:5000/api/layout/generate", {
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

      const data = await res.json();

      if (data.success) {
        setGeneratedText(data.layout);

        const parsedRooms = parseLayoutText(data.layout);
        if (parsedRooms.length === 0) {
          setErrorMessage("Parsing layout failed.");
        } else {
          setRooms(parsedRooms);
        }
      } else {
        setErrorMessage(data.message || "Failed to generate layout.");
      }
    } catch (err) {
      setErrorMessage("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-950 text-white">
      <div className="md:w-1/3 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">AutoPlan.AI 3D Layout Generator</h1>

        <form onSubmit={handleSubmit} className="space-y-4 bg-blue-900 p-6 rounded-xl">
          {/* Form Inputs */}
          {Object.entries(formData).map(([key, value]) => {
            if (key === "designPreference") {
              return (
                <select
                  key={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-blue-800 border border-gray-500 text-white"
                  required
                >
                  <option value="">Select Design Preference</option>
                  <option value="Modern">Modern</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Minimalist">Minimalist</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Eco-friendly">Eco-friendly</option>
                </select>
              );
            } else if (key === "bathroomType") {
              return (
                <div key={key} className="flex gap-4 items-center">
                  <label className="font-semibold">Bathroom Type:</label>
                  <label>
                    <input
                      type="radio"
                      name="bathroomType"
                      value="attached"
                      checked={value === "attached"}
                      onChange={handleChange}
                      required
                    />
                    Attached
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="bathroomType"
                      value="common"
                      checked={value === "common"}
                      onChange={handleChange}
                      required
                    />
                    Common
                  </label>
                </div>
              );
            } else {
              return (
                <input
                  key={key}
                  type="number"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="w-full p-3 rounded-lg bg-blue-800 border border-gray-500 text-white"
                  required
                />
              );
            }
          })}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-blue-900 py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            {loading ? "Generating..." : "Generate Layout"}
          </button>

          {errorMessage && <div className="mt-4 text-red-400 font-semibold">{errorMessage}</div>}
        </form>
      </div>

      <div className="md:w-2/3 h-full">
        {rooms.length > 0 ? (
          <LayoutScene rooms={rooms} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            3D Layout will appear here after generation.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard3D;
