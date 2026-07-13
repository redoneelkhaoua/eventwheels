import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about EventWheels, Morocco's premier event car rental service.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-sand-50 min-h-screen">
      
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-navy-900 rounded-3xl overflow-hidden shadow-elevated relative">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80" 
              alt="Luxury cars driving" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
          </div>
          <div className="relative z-10 px-8 py-20 md:py-32 lg:px-20 max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              More than a rental. <br className="hidden md:block" />
              <span className="text-terracotta-400">An experience.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
              EventWheels was founded on a simple principle: the vehicle you arrive in is just as important as the event itself. We provide premium, reliable, and impeccably presented cars for Morocco's most important moments.
            </p>
            <Link 
              href="/fleet"
              className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Discover Our Fleet <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">Our Commitment</h2>
          <p className="text-navy-800/60 max-w-2xl mx-auto text-lg">We don't operate like a traditional rental counter. We are a boutique service dedicated to quality and peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-soft text-center">
            <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={28} className="text-terracotta-500" />
            </div>
            <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">Verified Excellence</h3>
            <p className="text-navy-800/70 leading-relaxed">
              Every vehicle in our fleet is rigorously maintained, detailed before delivery, and fully insured. We never compromise on safety or presentation.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-soft text-center border-2 border-terracotta-100 relative -top-4">
            <div className="w-16 h-16 bg-terracotta-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake size={28} className="text-terracotta-500" />
            </div>
            <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">White-Glove Service</h3>
            <p className="text-navy-800/70 leading-relaxed">
              From the moment you book, our team handles the details. Whether you need a professional chauffeur or a specific drop-off location, we adapt to you.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-soft text-center">
            <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={28} className="text-terracotta-500" />
            </div>
            <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">Across Morocco</h3>
            <p className="text-navy-800/70 leading-relaxed">
              Based in Casablanca with coverage spanning Marrakech, Rabat, Agadir, and beyond. We deliver your car exactly where your event takes place.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
