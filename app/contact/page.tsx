"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-sand-50 min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-navy-800/60 max-w-2xl mx-auto text-lg">
          Have a question about our fleet? Need a custom quote for a large event? Our team is here to help 24/7.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <div className="bg-navy-900 rounded-3xl p-10 text-white shadow-elevated h-full">
              <h2 className="font-heading text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-terracotta-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/60 text-sm mb-1 uppercase tracking-wider">Phone</h3>
                    <p className="text-xl font-medium">+212 600 000 000</p>
                    <p className="text-sm text-white/50 mt-1">Available 24/7 for urgent bookings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-terracotta-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/60 text-sm mb-1 uppercase tracking-wider">Email</h3>
                    <p className="text-xl font-medium">hello@eventwheels.ma</p>
                    <p className="text-sm text-white/50 mt-1">We aim to reply within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-terracotta-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white/60 text-sm mb-1 uppercase tracking-wider">Headquarters</h3>
                    <p className="text-xl font-medium">Boulevard d'Anfa</p>
                    <p className="text-sm text-white/50 mt-1">Casablanca, Morocco<br/>(Meetings by appointment only)</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-48 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582298538104-fe2e74cb30f8?w=800&q=80" 
                  alt="Casablanca map" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute flex flex-col items-center">
                  <MapPin className="text-terracotta-500 mb-2" size={32} />
                  <span className="font-semibold text-sm">Casablanca</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} className="text-green-600 ml-1" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-800">Message Sent!</h3>
                <p className="text-navy-800/60 max-w-sm">
                  Thanks for reaching out. A member of our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 text-terracotta-600 font-medium hover:bg-terracotta-50 rounded-lg transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-2xl font-bold text-navy-800 mb-6">Send a Message</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Subject</label>
                  <select required className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400">
                    <option value="">Select a topic</option>
                    <option value="booking">General Booking Inquiry</option>
                    <option value="corporate">Corporate Account</option>
                    <option value="wedding">Wedding Fleet Coordination</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-sand-50 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-400 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
