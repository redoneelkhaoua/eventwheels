"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield, Clock, Star, Users, CheckCircle, ChevronRight,
  ArrowRight, Phone, Award, Zap, MapPin, Quote
} from "lucide-react";
import CarCard from "@/components/CarCard";
import { cars, testimonials, eventUseCases } from "@/lib/data";

const eventTypeIcons: Record<string, string> = {
  wedding: "💍",
  corporate: "💼",
  airport: "✈️",
  party: "🎉",
  roadtrip: "🗺️",
};

const whyChooseUs = [
  {
    icon: Shield,
    title: "Full Insurance Included",
    desc: "Every rental includes comprehensive insurance so you can enjoy your event with total peace of mind.",
  },
  {
    icon: Users,
    title: "Professional Chauffeurs",
    desc: "Our vetted, uniformed drivers are trained in hospitality — punctual, discreet, and always presentable.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Our team is available around the clock. Whether it's a last-minute booking or a day-of change, we've got you.",
  },
  {
    icon: Zap,
    title: "Flexible Booking",
    desc: "Free cancellation up to 48 hours before. Change dates, swap vehicles — we work around your schedule.",
  },
  {
    icon: Award,
    title: "Verified Fleet",
    desc: "Every vehicle is cleaned, inspected, and maintained to the highest standards before every rental.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    desc: "We deliver and collect across Morocco — Casablanca, Marrakech, Rabat, Agadir, Fès, and beyond.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Event",
    desc: "Tell us what you're celebrating — wedding, corporate gig, airport pickup, or a road trip. We'll narrow down the perfect fleet.",
  },
  {
    step: "02",
    title: "Pick Your Car",
    desc: "Browse our curated fleet, filter by category and price, and select the vehicle that fits your style and group size.",
  },
  {
    step: "03",
    title: "Confirm the Details",
    desc: "Set your dates, location, and whether you'd like a chauffeur. Our team confirms everything within the hour.",
  },
  {
    step: "04",
    title: "Arrive in Style",
    desc: "Your car arrives immaculate and on time. You focus on your event — we handle the rest.",
  },
];

const featuredCars = cars.filter((c) =>
  ["mercedes-e-class", "range-rover-sport", "porsche-911-cabriolet", "mercedes-sprinter"].includes(c.slug)
);

export default function HomePage() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredCars = activeEvent
    ? cars.filter((c) => c.eventTypes.includes(activeEvent as never))
    : featuredCars;

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1C2B4A 0%, #111827 60%, #2d1a0e 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, #C06040 0%, transparent 50%),
                              radial-gradient(ellipse at 80% 20%, #D4785A 0%, transparent 40%),
                              radial-gradient(ellipse at 60% 80%, #A8502E 0%, transparent 40%)`,
          }}
        />

        {/* Hero background car image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover opacity-15 scale-110"
            style={{ filter: "blur(2px)" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8">
            <Star size={14} className="text-gold-400 fill-gold-400" />
            <span>Premium Event Car Rental · Morocco</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            The Right Car{" "}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #D4785A, #F0B429)" }}>
              for Your Event
            </span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From intimate weddings to grand corporate affairs — we match
            every occasion with the perfect vehicle, immaculately presented
            and delivered on time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/fleet"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-elevated hover:shadow-2xl hover:-translate-y-0.5 text-base"
            >
              Explore Our Fleet
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl transition-all duration-200 text-base"
            >
              Get a Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "500+", label: "Events Served" },
              { value: "12", label: "Cars in Fleet" },
              { value: "5★", label: "Average Rating" },
              { value: "24/7", label: "Support" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-heading font-bold text-terracotta-400">{value}</div>
                <div className="text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce">
          <div className="w-px h-8 bg-white/30" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── EVENT TYPE SELECTOR ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-3">
              What&apos;s the occasion?
            </h2>
            <p className="text-navy-800/50 text-base max-w-xl mx-auto">
              Pick your event type and we&apos;ll show you the cars built for it.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {eventUseCases.map((ev) => (
              <button
                key={ev.id}
                id={`event-filter-${ev.id}`}
                onClick={() =>
                  setActiveEvent(activeEvent === ev.id ? null : ev.id)
                }
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer min-w-[110px] ${
                  activeEvent === ev.id
                    ? "border-terracotta-500 bg-terracotta-50 shadow-card"
                    : "border-sand-200 bg-sand-50 hover:border-terracotta-300 hover:bg-white"
                }`}
              >
                <span className="text-3xl">{ev.icon}</span>
                <span
                  className={`font-semibold text-sm ${
                    activeEvent === ev.id ? "text-terracotta-600" : "text-navy-800"
                  }`}
                >
                  {ev.label}
                </span>
              </button>
            ))}
          </div>

          {/* Fleet cards for selected event */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCars.slice(0, 4).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {activeEvent && (
            <div className="text-center mt-8">
              <Link
                href={`/fleet?event=${activeEvent}`}
                className="inline-flex items-center gap-2 text-terracotta-500 hover:text-terracotta-600 font-semibold transition-colors"
              >
                See all {eventUseCases.find((e) => e.id === activeEvent)?.label} cars
                <ChevronRight size={16} />
              </Link>
            </div>
          )}

          {!activeEvent && (
            <div className="text-center mt-8">
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-terracotta-400 text-terracotta-500 hover:bg-terracotta-50 font-semibold rounded-2xl transition-colors"
              >
                View Full Fleet
                <ChevronRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-terracotta-500 font-semibold text-sm uppercase tracking-wider">
              Why EventWheels
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mt-2 mb-4">
              More than a rental. An experience.
            </h2>
            <p className="text-navy-800/50 max-w-xl mx-auto">
              We built EventWheels around one idea: every important moment
              deserves a vehicle worthy of it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-7 bg-white rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-terracotta-50 flex items-center justify-center mb-5 group-hover:bg-terracotta-500 transition-colors duration-300">
                  <Icon size={22} className="text-terracotta-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{title}</h3>
                <p className="text-navy-800/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-terracotta-500 font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mt-2">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-sand-200 z-0" />

            {howItWorks.map(({ step, title, desc }, i) => (
              <div key={step} className="relative text-center z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sand-50 border-4 border-white shadow-soft mb-6">
                  <span className="font-heading text-2xl font-bold text-terracotta-500">{step}</span>
                </div>
                <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{title}</h3>
                <p className="text-navy-800/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-card hover:shadow-elevated hover:-translate-y-0.5"
            >
              Start Booking
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-terracotta-400 font-semibold text-sm uppercase tracking-wider">
              Client Stories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">
              What our clients say
            </h2>
          </div>

          {/* Featured testimonial */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center transition-all duration-500">
              <Quote size={32} className="text-terracotta-400 mx-auto mb-6 opacity-60" />

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full ring-2 ring-terracotta-400 object-cover"
                />
                <div className="text-left">
                  <div className="font-heading font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-white/40 text-sm">
                    {testimonials[currentTestimonial].eventLabel} ·{" "}
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 ml-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonial
                      ? "bg-terracotta-400 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #C06040 0%, #A8502E 60%, #8C3E20 100%)",
        }}
      >
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 50%, #fff 0%, transparent 50%),
                              radial-gradient(circle at 90% 50%, #fff 0%, transparent 50%)`
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            Ready to make your event unforgettable?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Browse our full fleet, pick your car, and book in minutes.
            Our team is ready to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-terracotta-600 font-bold rounded-2xl hover:bg-sand-50 transition-colors text-base shadow-elevated"
            >
              Browse the Fleet
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+212600000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold rounded-2xl transition-colors text-base"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
