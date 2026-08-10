// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { useState } from "react";
import { hospitalsData } from "@/data/hospitals";

export default function ClienterPage() {
  const [filter, setFilter] = useState("All");

  const filteredHospitals =
    filter === "All"
      ? hospitalsData
      : hospitalsData.filter((h) => h.country === filter);

  return (
    <>
      {/* <Navbar /> */}

      <div className="pt-24">
        {/* HERO */}
        <section className="relative py-28 text-center overflow-hidden bg-gradient-to-br from-[#050e1f] via-[#0a1f44] to-[#020617]">

  {/* Glow Effects */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full"></div>

  <div className="relative z-10 px-4">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
      Our <span className="text-blue-400">Hospital Partners</span>
    </h1>

    <p className="text-white/70 max-w-2xl mx-auto text-lg">
      Helping Indian Nurses build global careers with top hospitals worldwide 🌍
    </p>
  </div>
</section>

        {/* FILTER BUTTONS */}
        <section className="py-10 bg-white">
  <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
    {[
      "All","France","Germany","Switzerland",
      "Netherlands","Belgium","Canada","Australia","UK"
    ].map((country) => (
      <button
        key={country}
        onClick={() => setFilter(country)}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
        ${
          filter === country
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
            : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        }`}
      >
        {country}
      </button>
    ))}
  </div>
</section>

        {/* HOSPITAL CARDS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow hover:shadow-xl transition-all overflow-hidden"
              >
                <img
                  src={hospital.image}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold">{hospital.name}</h2>
                  <p className="text-gray-500 text-sm">
                    {hospital.city}, {hospital.country}
                  </p>
                  <p className="text-gray-600 text-sm mt-3">
                    {hospital.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* <Footer /> */}
    </>
  );
}