"use client";

import { useState } from "react";
import { Service } from "@/lib/services-data";

interface ServiceDetailModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-6 text-white flex items-start justify-between z-10">
            <div className="flex items-start gap-4">
              <span className="text-5xl">{service.icon}</span>
              <div className="text-left">
                <h2 className="text-3xl font-bold">{service.name}</h2>
                <p className="text-emerald-100 mt-1">{service.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Price Section */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Harga Paket</p>
              <p className="text-3xl font-bold text-emerald-600">{service.priceFrom}</p>
              <p className="text-sm text-gray-600 mt-2">Durasi: {service.duration}</p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span> Manfaat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                    <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable For */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👥</span> Siapa yang Cocok
              </h3>
              <div className="space-y-2">
                {service.suitableFor.map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                    <span className="text-emerald-600 flex-shrink-0">→</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔄</span> Proses Treatment
              </h3>
              <div className="space-y-3">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold">{idx + 1}</div>
                    <div className="flex items-center pt-1">
                      <p className="text-gray-700">{step}</p>
                    </div>
                    {idx < service.process.length - 1 && <div className="absolute left-[18px] top-[120px] w-0.5 h-12 bg-gradient-to-b from-emerald-300 to-transparent" />}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">❓</span> Pertanyaan Umum (FAQ)
              </h3>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:border-emerald-300 transition-colors">
                    <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} className="w-full px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between">
                      <p className="font-semibold text-gray-900 text-left">{faq.question}</p>
                      <span className={`text-emerald-600 flex-shrink-0 transition-transform duration-300 ${expandedFaq === idx ? "rotate-180" : ""}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-4 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Booking */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Siap untuk Memulai?</h4>
              <p className="text-emerald-100 mb-4">Hubungi kami sekarang untuk membuat janji dan mulai perjalanan kesehatan Anda</p>
              <button className="w-full bg-white text-emerald-600 font-bold py-3 rounded-lg hover:bg-emerald-50 transition-colors">📞 Hubungi Kami untuk Booking</button>
              <p className="text-center text-sm text-emerald-100 mt-3">Atau chat dengan tim kami untuk pertanyaan lebih lanjut</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
