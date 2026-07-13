"use client";

import { useState, useMemo } from "react";
import { Filter, Search } from "lucide-react";
import CarCard from "@/components/CarCard";
import { cars, categoryLabels, eventLabels } from "@/lib/data";

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeEvent, setActiveEvent] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchCategory =
        activeCategory === "all" || car.category === activeCategory;
      const matchEvent =
        activeEvent === "all" || car.eventTypes.includes(activeEvent as any);
      const matchSearch =
        searchQuery === "" ||
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchEvent && matchSearch;
    });
  }, [activeCategory, activeEvent, searchQuery]);

  return (
    <div className="pt-24 pb-20 bg-sand-50 min-h-screen">
      {/* Header */}
      <div className="bg-navy-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Premium Fleet
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            From elegant sedans to spacious luxury vans. Find the perfect vehicle
            for your next event, business trip, or weekend getaway in Morocco.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-center gap-2 mb-6 text-navy-800 font-heading font-semibold">
                <Filter size={18} className="text-terracotta-500" />
                <h2>Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400 transition-shadow"
                />
                <Search size={16} className="absolute left-3.5 top-3 text-navy-800/40" />
              </div>

              {/* Event Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-navy-800 uppercase tracking-wider mb-3">
                  Event Type
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveEvent("all")}
                    className={`block text-sm text-left w-full px-3 py-1.5 rounded-lg transition-colors ${
                      activeEvent === "all"
                        ? "bg-terracotta-50 text-terracotta-600 font-medium"
                        : "text-navy-800/70 hover:bg-sand-50"
                    }`}
                  >
                    All Events
                  </button>
                  {Object.entries(eventLabels).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveEvent(key)}
                      className={`block text-sm text-left w-full px-3 py-1.5 rounded-lg transition-colors ${
                        activeEvent === key
                          ? "bg-terracotta-50 text-terracotta-600 font-medium"
                          : "text-navy-800/70 hover:bg-sand-50"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-navy-800 uppercase tracking-wider mb-3">
                  Car Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`block text-sm text-left w-full px-3 py-1.5 rounded-lg transition-colors ${
                      activeCategory === "all"
                        ? "bg-terracotta-50 text-terracotta-600 font-medium"
                        : "text-navy-800/70 hover:bg-sand-50"
                    }`}
                  >
                    All Categories
                  </button>
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`block text-sm text-left w-full px-3 py-1.5 rounded-lg transition-colors ${
                        activeCategory === key
                          ? "bg-terracotta-50 text-terracotta-600 font-medium"
                          : "text-navy-800/70 hover:bg-sand-50"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-end">
              <p className="text-navy-800/60 text-sm font-medium">
                Showing {filteredCars.length} cars
              </p>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl text-center shadow-soft">
                <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-navy-800/40" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-navy-800 mb-2">
                  No cars found
                </h3>
                <p className="text-navy-800/60 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setActiveEvent("all");
                    setSearchQuery("");
                  }}
                  className="px-6 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-xl transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
