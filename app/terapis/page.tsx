"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Therapist {
  id: number;
  name: string;
  image: string;
  specialization: string[];
  experience: string;
  schedule: string[];
  certification: string[];
  bio: string;
}

const therapists: Therapist[] = [
  {
    id: 1,
    name: "Dr. Siti Nurhaliza",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop",
    specialization: ["Psikologi Klinis", "Terapi Kognitif Perilaku"],
    experience: "12 tahun",
    schedule: ["Senin - Jumat: 09:00 - 17:00", "Sabtu: 10:00 - 14:00"],
    certification: ["S2 Psikologi Klinis", "Sertifikat CBT Internasional", "Registered Psychologist HAPI"],
    bio: "Spesialis dalam penanganan kecemasan dan depresi dengan pendekatan evidence-based.",
  },
  {
    id: 2,
    name: "Ibu Dewi Mulyani",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    specialization: ["Terapi Keluarga", "Konseling Perkawinan"],
    experience: "10 tahun",
    schedule: ["Selasa - Kamis: 13:00 - 19:00", "Sabtu: 09:00 - 13:00"],
    certification: ["S2 Konseling Keluarga", "Certified Family Therapist", "Lisensi KKPP"],
    bio: "Berpengalaman dalam membantu pasangan dan keluarga mengatasi konflik komunikasi.",
  },
  {
    id: 3,
    name: "Dr. Budi Santoso",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
    specialization: ["Terapi Stres", "Coaching Performa"],
    experience: "15 tahun",
    schedule: ["Senin, Rabu, Jumat: 08:00 - 16:00", "Sabtu: 10:00 - 15:00"],
    certification: ["PhD Psikologi Positif", "Performance Coach Bersertifikat", "Mindfulness Trainer"],
    bio: "Ahli dalam mengelola stres dan meningkatkan produktivitas melalui teknik mindfulness.",
  },
  {
    id: 4,
    name: "Nur Azizah, M.Psi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop",
    specialization: ["Psikologi Anak", "Konseling Sekolah"],
    experience: "8 tahun",
    schedule: ["Senin - Jumat: 15:00 - 19:00", "Minggu: 10:00 - 14:00"],
    certification: ["M.Psi Psikologi Perkembangan", "Certified Child Psychologist", "Play Therapy Specialist"],
    bio: "Terapis yang hangat dan sabar dalam membantu anak mengatasi kesulitan emosional dan pembelajaran.",
  },
  {
    id: 5,
    name: "Dr. Rino Hartanto",
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=600&fit=crop",
    specialization: ["Neuropsikologi", "Terapi Trauma"],
    experience: "14 tahun",
    schedule: ["Selasa, Kamis: 09:00 - 17:00", "Sabtu: 10:00 - 15:00"],
    certification: ["Dr. Psikologi Klinis", "Certified Trauma Therapist", "EMDR Specialist"],
    bio: "Spesialis dalam trauma recovery dan terapi untuk kondisi neurologis yang kompleks.",
  },
  {
    id: 6,
    name: "Intan Wijaya, M.Psi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop",
    specialization: ["Terapi Kecanduan", "Perilaku Adiktif"],
    experience: "11 tahun",
    schedule: ["Senin - Jumat: 14:00 - 20:00", "Sabtu: 09:00 - 13:00"],
    certification: ["M.Psi Psikologi Kesehatan", "Addiction Counselor", "Motivational Interviewing Specialist"],
    bio: "Ahli dalam membantu individu mengatasi berbagai bentuk kecanduan dan perilaku maladaptif.",
  },
];

export default function TerapisPage() {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTherapist(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
            <span className="text-sm font-semibold">← Kembali</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Tim Terapis Profesional Kami</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">Temui terapis bersertifikat kami yang siap membantu perjalanan kesehatan mental Anda dengan pendekatan yang hangat dan profesional.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Therapist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-200 to-emerald-100 overflow-hidden">
                <img src={therapist.image} alt={therapist.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{therapist.experience}</div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-2xl font-bold text-emerald-800 mb-1">{therapist.name}</h3>
                <p className="text-sm text-emerald-600 font-semibold mb-3">{therapist.bio}</p>

                {/* Specialization */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Spesialisasi</p>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialization.map((spec, idx) => (
                      <span key={idx} className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-emerald-200 my-4"></div>

                {/* Quick Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">📅</span>
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase">Jadwal Praktik</p>
                      <p className="text-sm text-gray-700">{therapist.schedule[0]}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">🏆</span>
                    <div>
                      <p className="text-xs font-bold text-gray-600 uppercase">Sertifikasi</p>
                      <p className="text-sm text-gray-700">{therapist.certification[0]}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openModal(therapist)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Booking dengan Terapis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      {isModalOpen && selectedTherapist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedTherapist.name}</h2>
              <button onClick={closeModal} className="text-white hover:bg-emerald-700 rounded-full p-2 transition-colors">
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Profile Section */}
              <div className="flex gap-6">
                <img src={selectedTherapist.image} alt={selectedTherapist.name} className="w-40 h-40 rounded-xl object-cover border-4 border-emerald-200" />
                <div className="flex-1">
                  <p className="text-emerald-600 font-bold mb-2">Pengalaman: {selectedTherapist.experience}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{selectedTherapist.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTherapist.specialization.map((spec, idx) => (
                      <span key={idx} className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specialization Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-emerald-800 mb-3 text-lg">Spesialisasi</h3>
                <ul className="space-y-2">
                  {selectedTherapist.specialization.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-emerald-600">✓</span> {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-emerald-800 mb-3 text-lg">Pengalaman Kerja</h3>
                <p className="text-gray-700 text-lg font-semibold">{selectedTherapist.experience}</p>
              </div>

              {/* Schedule Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-emerald-800 mb-3 text-lg">Jadwal Praktik</h3>
                <ul className="space-y-2">
                  {selectedTherapist.schedule.map((time, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                      <span className="text-emerald-600">🕐</span> {time}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certification Section */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-bold text-emerald-800 mb-3 text-lg">Sertifikasi & Kredensial</h3>
                <ul className="space-y-2">
                  {selectedTherapist.certification.map((cert, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                      <span className="text-emerald-600">🏅</span> {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-4 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                  Booking dengan {selectedTherapist.name.split(" ")[0]}
                </button>
                <button onClick={closeModal} className="w-full border-2 border-emerald-600 text-emerald-600 font-bold py-3 rounded-lg hover:bg-emerald-50 transition-colors">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="border-t border-emerald-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Belum menemukan terapis yang tepat?</h2>
          <p className="text-gray-600 mb-6">Hubungi tim kami untuk konsultasi atau rekomendasi personal</p>
          <button className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">Hubungi Kami</button>
        </div>
      </div>
    </div>
  );
}
