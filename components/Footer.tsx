import Link from "next/link";
import { Camera, Globe, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  "Event Types": [
    { label: "Weddings", href: "/events#wedding" },
    { label: "Corporate", href: "/events#corporate" },
    { label: "Airport Transfers", href: "/events#airport" },
    { label: "Parties", href: "/events#party" },
    { label: "Road Trips", href: "/events#roadtrip" },
  ],
  Fleet: [
    { label: "Luxury Sedans", href: "/fleet?category=sedan" },
    { label: "SUVs", href: "/fleet?category=suv" },
    { label: "Convertibles", href: "/fleet?category=convertible" },
    { label: "Vans & Minibuses", href: "/fleet?category=van" },
    { label: "Economy Cars", href: "/fleet?category=economy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-terracotta-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1.5M19 17h2a2 2 0 002-2V9a2 2 0 00-2-2h-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 7l2-4h10l2 4M5 17h14M5 7h14v10H5V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="17" r="2" fill="currentColor"/>
                  <circle cx="16" cy="17" r="2" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-xl">
                Event<span className="text-terracotta-400">Wheels</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              The right car for every occasion. We specialise in premium event
              car rental across Morocco — from intimate weddings to grand
              corporate affairs.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <a href="tel:+212600000000" className="flex items-center gap-2.5 text-white/60 hover:text-terracotta-400 text-sm transition-colors">
                <Phone size={14} />
                <span>+212 600 000 000</span>
              </a>
              <a href="mailto:hello@eventwheels.ma" className="flex items-center gap-2.5 text-white/60 hover:text-terracotta-400 text-sm transition-colors">
                <Mail size={14} />
                <span>hello@eventwheels.ma</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <MapPin size={14} />
                <span>Casablanca, Morocco</span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Camera, href: "#", label: "Instagram" },
                { icon: Globe, href: "#", label: "Facebook" },
                { icon: MessageCircle, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-terracotta-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} EventWheels. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with care by{" "}
            <a
              href="https://siroccolabs.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-400 hover:text-terracotta-300 transition-colors font-medium"
            >
              Sirocco Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
