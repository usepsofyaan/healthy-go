"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Layanan", href: "#services" },
    { label: "Keuntungan", href: "#benefits" },
    { label: "Testimoni", href: "#testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HG</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Healthy-Go</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition">Hubungi Kami</button>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-slate-700 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition font-medium px-2 py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition mt-2">Hubungi Kami</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
