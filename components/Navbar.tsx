"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/fleet", label: "Our Fleet" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg =
    isHomepage && !scrolled
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md shadow-soft";

  const linkColor =
    isHomepage && !scrolled
      ? "text-white hover:text-terracotta-300"
      : "text-navy-800 hover:text-terracotta-500";

  const logoColor =
    isHomepage && !scrolled ? "text-white" : "text-navy-800";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 group ${logoColor}`}>
            <div className="w-8 h-8 rounded-lg bg-terracotta-500 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1.5M19 17h2a2 2 0 002-2V9a2 2 0 00-2-2h-1.5"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                />
                <path
                  d="M5 7l2-4h10l2 4M5 17h14M5 7h14v10H5V7z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
                <circle cx="8" cy="17" r="2" fill="currentColor" />
                <circle cx="16" cy="17" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="font-heading font-800 text-lg tracking-tight transition-colors">
              Event<span className="text-terracotta-400">Wheels</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${linkColor} ${
                  pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/booking"
              className="px-5 py-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${linkColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-sand-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-navy-800 font-medium hover:bg-sand-50 hover:text-terracotta-500 transition-colors ${
                pathname === link.href ? "bg-sand-100 text-terracotta-500 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/booking"
              className="block w-full text-center px-5 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
