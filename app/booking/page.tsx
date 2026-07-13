"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ChevronRight, ArrowLeft } from "lucide-react";
import { cars, eventUseCases } from "@/lib/data";

const steps = [
  "Event & Location",
  "Dates",
  "Vehicle",
  "Details",
];

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedCar = searchParams.get("car");
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const [formData, setFormData] = useState({
    event: "",
    location: "",
    pickupDate: "",
    dropoffDate: "",
    carSlug: preselectedCar || "",
    chauffeur: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const selectedCarDetails = cars.find(c => c.slug === formData.carSlug);

  if (isCompleted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-sand-50 flex items-center justify-center px-4">
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-elevated max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} className="text-green-600" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Request Received!
          </h1>
          <p className="text-navy-800/70 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Thank you, {formData.firstName}. We've received your booking request for the <span className="font-semibold">{selectedCarDetails?.name}</span>. Our team will contact you within the hour to confirm availability and finalize details.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="px-8 py-3.5 bg-sand-100 hover:bg-sand-200 text-navy-800 font-medium rounded-xl transition-colors">
              Back to Home
            </Link>
            <Link href="/fleet" className="px-8 py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-xl transition-colors">
              Browse More Cars
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-sand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Book Your Vehicle
          </h1>
          <p className="text-navy-800/60 max-w-lg mx-auto">
            Complete this simple form to request your vehicle. No payment required until we confirm availability.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-sand-200 -translate-y-1/2 z-0 rounded-full" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-terracotta-500 -translate-y-1/2 z-0 transition-all duration-300 rounded-full" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step, idx) => {
              const stepNum = idx + 1;
              const isActive = stepNum === currentStep;
              const isPast = stepNum < currentStep;
              
              return (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                    isActive ? 'bg-terracotta-500 border-terracotta-500 text-white shadow-md' :
                    isPast ? 'bg-terracotta-500 border-terracotta-500 text-white' :
                    'bg-white border-sand-300 text-sand-400'
                  }`}>
                    {isPast ? <Check size={14} /> : stepNum}
                  </div>
                  <span className={`absolute top-10 text-xs whitespace-nowrap font-medium transition-colors ${
                    isActive ? 'text-navy-800' :
                    isPast ? 'text-navy-800/70' :
                    'text-navy-800/40'
                  }`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-card p-6 md:p-10 border border-sand-100">
          
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy-800">What's the occasion?</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {eventUseCases.map(ev => (
                  <button
                    key={ev.id}
                    onClick={() => setFormData({...formData, event: ev.id})}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.event === ev.id 
                        ? 'border-terracotta-500 bg-terracotta-50' 
                        : 'border-sand-100 hover:border-sand-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{ev.icon}</div>
                    <div className={`font-semibold ${formData.event === ev.id ? 'text-terracotta-600' : 'text-navy-800'}`}>
                      {ev.label}
                    </div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-800 mb-2">Location / City</label>
                <select 
                  className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                >
                  <option value="">Select a city</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Agadir">Agadir</option>
                  <option value="Tangier">Tangier</option>
                  <option value="Fès">Fès</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy-800">When do you need it?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Pick-up Date & Time</label>
                  <input 
                    type="datetime-local" 
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    value={formData.pickupDate}
                    onChange={e => setFormData({...formData, pickupDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Drop-off Date & Time</label>
                  <input 
                    type="datetime-local" 
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    value={formData.dropoffDate}
                    onChange={e => setFormData({...formData, dropoffDate: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy-800">Select your vehicle</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 pb-2">
                {cars.map(car => (
                  <button
                    key={car.id}
                    onClick={() => setFormData({...formData, carSlug: car.slug})}
                    className={`flex items-center gap-4 p-3 rounded-xl border-2 text-left transition-all ${
                      formData.carSlug === car.slug 
                        ? 'border-terracotta-500 bg-terracotta-50' 
                        : 'border-sand-100 hover:border-sand-300'
                    }`}
                  >
                    <div className="w-20 h-16 shrink-0 rounded-lg overflow-hidden bg-sand-200">
                      <img src={car.images[0]} alt={car.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className={`font-bold ${formData.carSlug === car.slug ? 'text-terracotta-700' : 'text-navy-800'}`}>
                        {car.name}
                      </div>
                      <div className="text-sm text-navy-800/60 font-medium">
                        {car.pricePerDay} MAD/day
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {selectedCarDetails?.chauffeurAvailable && (
                <div className="p-4 bg-sand-50 rounded-xl border border-sand-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-navy-800">Add a professional chauffeur?</h4>
                    <p className="text-sm text-navy-800/60">Relax and let our vetted drivers handle the journey.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={formData.chauffeur}
                      onChange={e => setFormData({...formData, chauffeur: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-sand-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-terracotta-500"></div>
                  </label>
                </div>
              )}
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-navy-800">Your details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Karim"
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mansouri"
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="karim@example.com"
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+212 6..."
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-navy-800 mb-2">Additional Notes (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Any special requests or details about your event..."
                    className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-terracotta-400 resize-none"
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </div>

              {/* Order Summary */}
              {selectedCarDetails && (
                <div className="mt-8 p-6 bg-sand-50 rounded-2xl border border-sand-200">
                  <h3 className="font-semibold text-navy-800 mb-4">Request Summary</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={selectedCarDetails.images[0]} alt="" className="w-16 h-12 rounded object-cover" />
                    <div>
                      <div className="font-bold text-navy-800">{selectedCarDetails.name}</div>
                      <div className="text-sm text-navy-800/60">{selectedCarDetails.pricePerDay} MAD/day</div>
                    </div>
                  </div>
                  {formData.chauffeur && (
                    <div className="text-sm font-medium text-terracotta-600 mb-2">+ Chauffeur requested</div>
                  )}
                  <p className="text-xs text-navy-800/50 mt-4 border-t border-sand-200 pt-4">
                    By clicking "Submit Request", you agree to our Terms of Service. A member of our team will contact you to confirm the booking and arrange payment.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="mt-10 pt-6 border-t border-sand-100 flex justify-between">
            <button
              onClick={handlePrev}
              className={`flex items-center gap-2 px-6 py-3 font-medium rounded-xl transition-colors ${
                currentStep === 1 
                  ? 'opacity-0 pointer-events-none' 
                  : 'text-navy-800 hover:bg-sand-50'
              }`}
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              {currentStep === steps.length ? 'Submit Request' : 'Next Step'} 
              {currentStep !== steps.length && <ChevronRight size={18} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-sand-50 pt-32 text-center">Loading booking...</div>}>
      <BookingContent />
    </Suspense>
  );
}
