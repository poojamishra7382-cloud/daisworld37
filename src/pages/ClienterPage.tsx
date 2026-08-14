import { useState } from "react";
import { partnersData } from "@/data/partners";

export default function ClienterPage() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Healthcare",
    "Hospitality",
    "Construction",
    "Oil & Gas",
  ];

  const filteredPartners =
    filter === "All"
      ? partnersData
      : partnersData.filter(
          (partner) => partner.category === filter
        );

  return (
    <div className="pt-24">

     {/* ================= HERO ================= */}
<section
  className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 md:py-28"
  style={{
    backgroundImage: "url('/download4.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#020b20]/60" />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      Global Network
    </p>

    <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Global{" "}
      <span className="text-blue-400">
        Industry Leaders
      </span>
    </h1>

    <p className="mx-auto max-w-3xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
      Explore leading organizations across healthcare,
      hospitality, construction and oil & gas industries.
    </p>

  </div>
</section>
      {/* ================= FILTER ================= */}
      <section className="bg-white py-8 md:py-10">

        <div className="mx-auto max-w-6xl px-4">

          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "border-gray-200 bg-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* ================= COMPANY CARDS ================= */}
      <section className="bg-gray-50 py-14 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Industry Showcase
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Leading Organizations
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Explore renowned organizations from different industries
              around the world.
            </p>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredPartners.map((partner) => (

              <div
                key={partner.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Category */}
                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-md">
                    {partner.category}
                  </span>

                </div>


                {/* ================= INFORMATION ================= */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-900">
                    {partner.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {partner.city}, {partner.country}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {partner.description}
                  </p>

                  <div className="mt-5 border-t border-gray-100 pt-4">

                    <div className="flex items-center justify-between">

                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Industry
                      </span>

                      <span className="text-sm font-semibold text-blue-600">
                        {partner.category}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Empty */}
          {filteredPartners.length === 0 && (
            <div className="py-16 text-center">

              <p className="text-gray-500">
                No organizations found.
              </p>

            </div>
          )}

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#050e1f] py-16 md:py-20">

        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Explore Global Opportunities
          </h2>

          <p className="mt-4 leading-7 text-white/60">
            Discover opportunities across healthcare, hospitality,
            construction and oil & gas industries.
          </p>

        </div>

      </section>

    </div>
  );
}