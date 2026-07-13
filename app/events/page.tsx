import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventUseCases, getCar } from "@/lib/data";
import CarCard from "@/components/CarCard";

export const metadata = {
  title: "Events",
  description: "Discover the perfect luxury car for your wedding, corporate event, party, or road trip in Morocco.",
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20 bg-sand-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-navy-900 text-white py-20 mb-16 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Tailored to Your Occasion
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          We don't just rent cars; we provide the perfect automotive complement to your most important moments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {eventUseCases.map((ev, index) => {
          const recommendedCarsData = ev.recommendedCars
            .map(slug => getCar(slug))
            .filter(Boolean) as any[];

          const isEven = index % 2 === 0;

          return (
            <div key={ev.id} id={ev.id} className="scroll-mt-32">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-12`}>
                
                {/* Event Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden aspect-video shadow-elevated">
                    {/* Map event ID to an appropriate Unsplash image for the demo */}
                    <img 
                      src={
                        ev.id === 'wedding' ? '/cars/event-wedding.png' :
                        ev.id === 'corporate' ? '/cars/event-corporate.png' :
                        ev.id === 'airport' ? '/cars/event-airport.png' :
                        ev.id === 'party' ? '/cars/event-party.png' :
                        '/cars/event-roadtrip.png' // roadtrip
                      }
                      alt={ev.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-5xl">
                      {ev.icon}
                    </div>
                  </div>
                </div>

                {/* Event Text */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                    {ev.label}
                  </h2>
                  <p className="text-terracotta-500 font-semibold text-lg mb-6">
                    "{ev.tagline}"
                  </p>
                  <p className="text-navy-800/70 text-lg leading-relaxed mb-8">
                    {ev.description}
                  </p>
                  <Link 
                    href={`/fleet?event=${ev.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-xl transition-colors"
                  >
                    View Fleet for {ev.label} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Recommended Cars */}
              <div>
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-terracotta-400 rounded-full"></span>
                  Recommended for {ev.label}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedCarsData.slice(0, 3).map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
