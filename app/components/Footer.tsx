"use client";

import { useState } from "react";

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const footerSections = [
    {
      id: "company",
      title: "Perusahaan",
      links: [
        { label: "Tentang Kami", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Karir", href: "#" },
      ],
    },
    {
      id: "services",
      title: "Layanan",
      links: [
        { label: "Program Fitness", href: "#" },
        { label: "Konsultasi Nutrisi", href: "#" },
        { label: "Meditasi & Wellness", href: "#" },
      ],
    },
    {
      id: "support",
      title: "Dukungan",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Hubungi Kami", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HG</span>
              </div>
              <span className="font-bold text-white">Healthy-Go</span>
            </div>
            <p className="text-sm leading-relaxed">Solusi kesehatan terpadu untuk hidup yang lebih baik dan sejahtera.</p>
          </div>

          {/* Footer Sections - Desktop */}
          {footerSections.map((section) => (
            <div key={section.id}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-green-400 transition duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden mb-8">
          {/* Brand Section */}
          <div className="mb-6 pb-6 border-b border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HG</span>
              </div>
              <span className="font-bold text-white">Healthy-Go</span>
            </div>
            <p className="text-sm leading-relaxed">Solusi kesehatan terpadu untuk hidup yang lebih baik dan sejahtera.</p>
          </div>

          {/* Accordion Sections - Mobile */}
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-700">
              <button onClick={() => toggleSection(section.id)} className="w-full flex items-center justify-between py-4 text-white font-bold hover:text-green-400 transition">
                <span>{section.title}</span>
                <span className={`transform transition-transform duration-200 ${expandedSection === section.id ? "rotate-180" : ""}`}>▼</span>
              </button>
              {expandedSection === section.id && (
                <ul className="pb-4 space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-green-400 transition duration-200">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h5 className="font-semibold text-white mb-2">📧 Email</h5>
              <p className="text-sm">
                <a href="mailto:info@healthygo.com" className="hover:text-green-400 transition">
                  info@healthygo.com
                </a>
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">📱 Telepon</h5>
              <p className="text-sm">
                <a href="tel:+6281234567890" className="hover:text-green-400 transition">
                  +62 812-3456-7890
                </a>
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">📍 Alamat</h5>
              <p className="text-sm">Jakarta, Indonesia</p>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">&copy; 2026 Healthy-Go. Semua hak dilindungi.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition" aria-label="Facebook">
                f
              </a>
              <a href="#" className="hover:text-green-400 transition" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="hover:text-green-400 transition" aria-label="Twitter">
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
