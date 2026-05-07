"use client";

import { useState } from "react";
import { Service } from "@/lib/services-data";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-left group-hover:text-emerald-700 transition-colors">{service.name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 text-left mb-4 line-clamp-2 group-hover:text-gray-700">{service.description}</p>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
            <p className="text-lg font-bold text-emerald-600">{service.priceFrom}</p>
          </div>

          {/* Arrow */}
          <div className="text-emerald-600 group-hover:translate-x-1 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* Hover effect - show explore text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-5 rounded-lg transition-all duration-300 pointer-events-none">
          <span className="text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Pelajari Lebih Lanjut →</span>
        </div>
      </button>

      <ServiceDetailModal service={service} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
