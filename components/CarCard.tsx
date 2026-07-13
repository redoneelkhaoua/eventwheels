import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, Star } from "lucide-react";
import { Car } from "@/lib/types";
import { categoryLabels, eventLabels } from "@/lib/data";

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

export default function CarCard({ car, featured = false }: CarCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
        featured ? "ring-2 ring-terracotta-400 ring-offset-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-navy-800 text-xs font-semibold rounded-lg shadow-sm">
            {categoryLabels[car.category] || car.category}
          </span>
        </div>
        {/* Chauffeur badge */}
        {car.chauffeurAvailable && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-terracotta-500 text-white text-xs font-semibold rounded-lg shadow-sm">
              + Chauffeur
            </span>
          </div>
        )}
        {/* Event type pills */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {car.eventTypes.slice(0, 2).map((evt) => (
            <span
              key={evt}
              className="px-2 py-0.5 bg-navy-900/70 backdrop-blur-sm text-white text-xs rounded-md"
            >
              {eventLabels[evt] || evt}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-heading font-bold text-navy-800 text-lg leading-tight">
            {car.name}
          </h3>
          <p className="text-navy-800/50 text-sm mt-0.5">{car.year} · {car.model}</p>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-sm text-navy-800/60 mb-4">
          <div className="flex items-center gap-1.5">
            <Users size={14} />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase size={14} />
            <span>{car.luggage} bags</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="capitalize">{car.transmission}</span>
          </div>
        </div>

        {/* Price + CTAs */}
        <div className="flex items-center justify-between pt-3 border-t border-sand-100">
          <div>
            <span className="text-2xl font-heading font-bold text-navy-800">
              {car.pricePerDay}
            </span>
            <span className="text-sm text-navy-800/50"> MAD/day</span>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/fleet/${car.slug}`}
              className="px-3 py-2 text-sm font-medium text-terracotta-500 border border-terracotta-200 rounded-xl hover:bg-terracotta-50 transition-colors"
            >
              Details
            </Link>
            <Link
              href={`/booking?car=${car.slug}`}
              className="px-3 py-2 text-sm font-semibold bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-xl transition-colors"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
