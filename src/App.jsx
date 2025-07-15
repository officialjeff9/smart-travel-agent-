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
<<<<<<< HEAD
=======
  Users,
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
} from "lucide-react";

const SoloTravelAgent = () => {
  const [currentScreen, setCurrentScreen] = useState("input");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
<<<<<<< HEAD
=======

  // Form state
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    duration: "",
    interests: "",
  });
<<<<<<< HEAD
=======

  // Mock responses (replace with actual API calls)
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
  const [recommendations, setRecommendations] = useState("");
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);

  const handleInputChange = (field, value) => {
<<<<<<< HEAD
    setFormData((prev) => ({ ...prev, [field]: value }));
=======
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
<<<<<<< HEAD
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
=======

    try {
      const response = await fetch(
        "https://2dcda253-620a-4478-bef3-0667799acec9-00-32wx7z9s47pra.spock.replit.dev/recommendation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setRecommendations(data.recommendations);
      setFlights(data.flights);
      setHotels(data.hotels);

      setCurrentScreen("recommendations");
    } catch (err) {
      setError("Failed to get recommendations. Please try again.");
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
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
=======
  const renderInputForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Solo Travel Agent
          </h1>
          <p className="text-purple-200">Your AI-powered travel companion</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-white mb-2">
              <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
              Destination
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => handleInputChange("destination", e.target.value)}
              placeholder="Where would you like to go?"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-white mb-2">
              <DollarSign className="w-4 h-4 mr-2 text-green-300" />
              Budget (USD)
            </label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              placeholder="Your total budget"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-white/60 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-white mb-2">
              <Calendar className="w-4 h-4 mr-2 text-blue-300" />
              Duration
            </label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              placeholder="e.g., 7 days, 1 week"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-white mb-2">
              <Heart className="w-4 h-4 mr-2 text-pink-300" />
              Interests & Preferences
            </label>
            <textarea
              value={formData.interests}
              onChange={(e) => handleInputChange("interests", e.target.value)}
              placeholder="Culture, adventure, food, relaxation, nightlife..."
              rows="3"
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-white/60 backdrop-blur-sm"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-400/50 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading || !formData.destination || !formData.budget}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {loading ? "Creating Your Adventure..." : "Get My Travel Plan"}
          </button>
        </div>
      </div>
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
    </div>
  );

  const renderRecommendations = () => (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentScreen("input")}
            className="mr-4 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-2xl font-bold text-white">
            Your Travel Recommendations
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 mb-6">
          <pre className="whitespace-pre-wrap text-white leading-relaxed font-sans">
            {recommendations}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentScreen("flights")}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl font-semibold"
          >
            <Plane className="w-5 h-5 mr-2" />
            Search Flights
          </button>
          <button
            onClick={() => setCurrentScreen("hotels")}
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-2xl hover:from-pink-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl font-semibold"
          >
            <Hotel className="w-5 h-5 mr-2" />
            Find Hotels
          </button>
        </div>
      </div>
    </div>
  );

  const renderFlights = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentScreen("recommendations")}
            className="mr-4 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-2xl font-bold text-white">Flight Options</h2>
        </div>

        <div className="space-y-4">
          {flights.map((flight, index) => (
            <div
              key={flight.id}
              className={`backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 ${
                index === 0
                  ? "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
                  : index === 1
                    ? "bg-gradient-to-r from-green-400/20 to-emerald-500/20"
                    : "bg-gradient-to-r from-orange-400/20 to-yellow-500/20"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {flight.airline}
                  </h3>
                  <p className="text-white/80">{flight.stops}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-2xl font-bold ${
                      index === 0
                        ? "text-cyan-300"
                        : index === 1
                          ? "text-green-300"
                          : "text-orange-300"
                    }`}
                  >
                    ${flight.price}
                  </p>
                  <p className="text-sm text-white/60">per person</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-white/60 mr-1" />
                    <span className="text-sm text-white/80">
                      {flight.departure}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-white/60 mr-1" />
                    <span className="text-sm text-white/80">
                      {flight.arrival}
                    </span>
                  </div>
                  <div className="text-sm text-white/80">{flight.duration}</div>
                </div>

                <button
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                    index === 0
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600"
                      : index === 1
                        ? "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
                        : "bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600"
                  } text-white`}
                >
                  Select Flight
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHotels = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentScreen("recommendations")}
            className="mr-4 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-2xl font-bold text-white">Hotel Options</h2>
        </div>

        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className={`backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 ${
                index === 0
                  ? "bg-gradient-to-r from-pink-400/20 to-purple-500/20"
                  : index === 1
                    ? "bg-gradient-to-r from-emerald-400/20 to-teal-500/20"
                    : "bg-gradient-to-r from-yellow-400/20 to-orange-500/20"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-white/80">
                      {hotel.rating}
                    </span>
                    <span className="ml-2 text-sm text-white/60">
                      • {hotel.location}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-2xl font-bold ${
                      index === 0
                        ? "text-pink-300"
                        : index === 1
                          ? "text-emerald-300"
                          : "text-yellow-300"
                    }`}
                  >
                    ${hotel.price}
                  </p>
                  <p className="text-sm text-white/60">per night</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.map((amenity, amenityIndex) => (
                  <span
                    key={amenityIndex}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30 backdrop-blur-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <button
                className={`w-full py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                  index === 0
                    ? "bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600"
                    : index === 1
                      ? "bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600"
                      : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                } text-white`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {currentScreen === "input" && renderInputForm()}
      {currentScreen === "recommendations" && renderRecommendations()}
      {currentScreen === "flights" && renderFlights()}
      {currentScreen === "hotels" && renderHotels()}
    </div>
  );
};

export default SoloTravelAgent;
>>>>>>> 48e2b62a977caca8098a7165c781fdb35a4ea0a3
