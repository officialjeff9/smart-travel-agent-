import React, { useState } from "react";
import {
  MapPin,
  DollarSign,
  Calendar,
  Heart,
  Plane,
  Hotel,
  ArrowLeft,
  Loader2,
  Send,
  Star,
  Clock,
} from "lucide-react";

const SoloTravelAgent = () => {
  const [currentScreen, setCurrentScreen] = useState("input");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    duration: "",
    interests: "",
  });
  const [recommendations, setRecommendations] = useState("");
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setRecommendations(`🌟 Perfect Solo Adventure for ${formData.destination}!
Budget: $${formData.budget}
Duration: ${formData.duration}
Interests: ${formData.interests}`);

      setFlights([
        { id: 1, airline: "SkyWings", departure: "08:30", arrival: "14:45", price: 450, stops: "Direct", duration: "6h 15m" },
        { id: 2, airline: "CloudJet", departure: "11:20", arrival: "19:35", price: 320, stops: "1 Stop", duration: "8h 15m" },
      ]);

      setHotels([
        { id: 1, name: "Solo Haven", rating: 4.8, price: 89, location: "City Center", amenities: ["Free WiFi", "Breakfast"] },
        { id: 2, name: "Nomad's Nest", rating: 4.5, price: 65, location: "Old Town", amenities: ["Co-working", "Luggage Storage"] },
      ]);

      setCurrentScreen("recommendations");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderInput = () => (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-3xl mb-4">Solo Travel Agent</h1>
      <input
        type="text"
        placeholder="Destination"
        value={formData.destination}
        onChange={(e) => handleInputChange("destination", e.target.value)}
        className="block mb-3 p-2 bg-gray-800 rounded w-full"
      />
      <input
        type="number"
        placeholder="Budget"
        value={formData.budget}
        onChange={(e) => handleInputChange("budget", e.target.value)}
        className="block mb-3 p-2 bg-gray-800 rounded w-full"
      />
      <input
        type="text"
        placeholder="Duration"
        value={formData.duration}
        onChange={(e) => handleInputChange("duration", e.target.value)}
        className="block mb-3 p-2 bg-gray-800 rounded w-full"
      />
      <textarea
        placeholder="Interests"
        value={formData.interests}
        onChange={(e) => handleInputChange("interests", e.target.value)}
        className="block mb-3 p-2 bg-gray-800 rounded w-full"
      />
      {error && <p className="text-red-400">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-purple-600 px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? <Loader2 className="animate-spin inline-block w-5 h-5" /> : "Plan My Trip"}
      </button>
    </div>
  );

  const renderRecommendations = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-6">
      <button onClick={() => setCurrentScreen("input")} className="mb-4 bg-white/20 px-3 py-1 rounded">
        <ArrowLeft className="inline w-4 h-4" /> Back
      </button>
      <h2 className="text-2xl mb-4">Your Recommendations</h2>
      <pre className="mb-4">{recommendations}</pre>

      <h3 className="text-xl mb-2">Flights</h3>
      {flights.map((f) => (
        <div key={f.id} className="mb-2 bg-white/10 p-3 rounded">
          {f.airline} - {f.departure} → {f.arrival} | {f.stops} | ${f.price}
        </div>
      ))}

      <h3 className="text-xl mt-4 mb-2">Hotels</h3>
      {hotels.map((h) => (
        <div key={h.id} className="mb-2 bg-white/10 p-3 rounded">
          {h.name} - {h.location} | ${h.price} | {h.rating}⭐
        </div>
      ))}
    </div>
  );

  return currentScreen === "input" ? renderInput() : renderRecommendations();
};

export default function App() {
  return <SoloTravelAgent />;
}
