import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Users, Briefcase, Droplet, Settings, Check, ArrowLeft } from "lucide-react";
import { getCar, getRelatedCars, eventLabels, categoryLabels } from "@/lib/data";
import CarCard from "@/components/CarCard";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  
  if (!car) {
    return { title: "Car Not Found" };
  }
  
  return {
    title: `${car.name}`,
    description: car.description,
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getCar(slug);

  if (!car) {
    notFound();
  }

  const relatedCars = getRelatedCars(car, 3);

  return (
    <div className="pt-24 pb-20 bg-sand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-navy-800/60 mb-6">
          <Link href="/fleet" className="hover:text-terracotta-500 transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Fleet
          </Link>
          <ChevronRight size={14} />
          <span className="text-navy-800 font-medium">{car.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content (Images & Info) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery (Simple grid for demo) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src={car.images[0]} 
                  alt={car.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px]">
                <img 
                  src={car.images[1]} 
                  alt={`${car.name} interior`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px]">
                <img 
                  src={car.images[2]} 
                  alt={`${car.name} detail`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title & Description */}
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-terracotta-50 text-terracotta-600 text-sm font-semibold rounded-lg">
                  {categoryLabels[car.category] || car.category}
                </span>
                {car.eventTypes.map(evt => (
                  <span key={evt} className="px-3 py-1 bg-sand-100 text-navy-800 text-sm rounded-lg">
                    {eventLabels[evt] || evt}
                  </span>
                ))}
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-2">
                {car.name}
              </h1>
              <p className="text-navy-800/50 text-lg mb-6">{car.year} · {car.brand}</p>
              
              <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">About this vehicle</h3>
              <p className="text-navy-800/70 leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="font-heading text-xl font-bold text-navy-800 mb-6">Premium Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {car.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-navy-800/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Booking & Specs) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

            {/* Booking Card */}
            <div className="bg-white p-6 rounded-2xl shadow-elevated border-t-4 border-terracotta-500">
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-heading font-bold text-navy-800">{car.pricePerDay}</span>
                <span className="text-navy-800/50 font-medium mb-1">MAD / day</span>
              </div>

              {/* Front-end Date Picker Mockup */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">Pick-up Date</label>
                  <input type="date" className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1.5">Drop-off Date</label>
                  <input type="date" className="w-full px-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400" />
                </div>
              </div>

              <Link 
                href={`/booking?car=${car.slug}`}
                className="flex items-center justify-center w-full py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book This Car
              </Link>
              
              <p className="text-center text-xs text-navy-800/40 mt-4">
                You won't be charged yet. Free cancellation up to 48 hours.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-heading text-lg font-bold text-navy-800 mb-4">Quick Specs</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-sand-100">
                  <div className="flex items-center gap-2 text-navy-800/60">
                    <Users size={16} /> <span>Seats</span>
                  </div>
                  <span className="font-semibold text-navy-800">{car.seats}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-sand-100">
                  <div className="flex items-center gap-2 text-navy-800/60">
                    <Briefcase size={16} /> <span>Luggage</span>
                  </div>
                  <span className="font-semibold text-navy-800">{car.luggage} bags</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-sand-100">
                  <div className="flex items-center gap-2 text-navy-800/60">
                    <Settings size={16} /> <span>Transmission</span>
                  </div>
                  <span className="font-semibold text-navy-800 capitalize">{car.transmission}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-sand-100">
                  <div className="flex items-center gap-2 text-navy-800/60">
                    <Droplet size={16} /> <span>Fuel</span>
                  </div>
                  <span className="font-semibold text-navy-800 capitalize">{car.fuelType}</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2 text-navy-800/60">
                    <Users size={16} /> <span>Chauffeur</span>
                  </div>
                  <span className="font-semibold text-navy-800">
                    {car.chauffeurAvailable ? "Available" : "Self-drive only"}
                  </span>
                </div>
              </div>
            </div>

            </div>
          </div>

        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-2xl font-bold text-navy-800 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCars.map(relatedCar => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
