'use client';

import { useState } from 'react';
import { Heart, Leaf, Users, Baby, Zap, Clock } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  content: string[];
}

const tabs: Tab[] = [
  {
    id: 'tips',
    label: 'Tips Kesehatan',
    icon: <Heart className="w-5 h-5" />,
    description: 'Panduan kesehatan harian untuk hidup lebih sehat',
    content: [
      'Minum air putih 8 gelas sehari untuk menjaga hidrasi tubuh',
      'Lakukan olahraga ringan minimal 30 menit setiap hari',
      'Konsumsi makanan bergizi seimbang dari 4 pilar gizi',
      'Istirahat cukup 7-8 jam setiap malam',
      'Kelola stres dengan meditasi atau yoga',
      'Periksa kesehatan secara berkala ke dokter',
    ],
  },
  {
    id: 'tradisional',
    label: 'Pengobatan Tradisional',
    icon: <Leaf className="w-5 h-5" />,
    description: 'Metode pengobatan alami yang telah terbukti efektif',
    content: [
      'Jahe untuk mengatasi mual dan meningkatkan imunitas',
      'Kunyit memiliki khasiat anti-inflamasi yang kuat',
      'Madu murni untuk meredakan batuk dan sakit tenggorokan',
      'Lidah buaya untuk perawatan kulit dan pencernaan',
      'Teh hijau kaya akan antioksidan',
      'Daun peppermint untuk mengatasi masalah pencernaan',
    ],
  },
  {
    id: 'lifestyle',
    label: 'Pola Hidup Sehat',
    icon: <Zap className="w-5 h-5" />,
    description: 'Kebiasaan sehari-hari untuk kesehatan optimal',
    content: [
      'Mulai hari dengan sarapan bergizi dan tidak terburu-buru',
      'Gunakan tangga daripada lift untuk meningkatkan aktivitas',
      'Batasi penggunaan gadget 1-2 jam sebelum tidur',
      'Hindari makanan cepat saji dan minuman tinggi gula',
      'Ciptakan rutinitas tidur yang konsisten',
      'Luangkan waktu untuk aktivitas outdoor dan bersosial',
    ],
  },
  {
    id: 'wanita',
    label: 'Kesehatan Wanita',
    icon: <Users className="w-5 h-5" />,
    description: 'Informasi kesehatan khusus untuk wanita',
    content: [
      'Rajin memeriksakan kesehatan reproduksi ke dokter kandungan',
      'Penuhi kebutuhan zat besi untuk mencegah anemia',
      'Lakukan deteksi dini kanker payudara secara berkala',
      'Kelola gejala PMS dengan olahraga dan asupan nutrisi',
      'Konsultasi tentang metode kontrasepsi yang tepat',
      'Perawatan kesehatan kulit sesuai dengan kondisi hormonal',
    ],
  },
  {
    id: 'pria',
    label: 'Kesehatan Pria',
    icon: <Baby className="w-5 h-5" />,
    description: 'Panduan kesehatan spesifik untuk pria',
    content: [
      'Jaga kesehatan prostat dengan pemeriksaan rutin setelah 40 tahun',
      'Penuhi kebutuhan protein untuk kesehatan otot',
      'Lakukan olahraga rutin untuk kesehatan jantung',
      'Hindari merokok dan konsumsi alkohol berlebihan',
      'Kelola stres untuk kesehatan mental dan fisik',
      'Periksa kesehatan kadar kolesterol dan tekanan darah',
    ],
  },
  {
    id: 'lansia',
    label: 'Kesehatan Lansia',
    icon: <Clock className="w-5 h-5" />,
    description: 'Perawatan kesehatan untuk usia lanjut',
    content: [
      'Pertahankan aktivitas fisik untuk menjaga kekuatan tulang',
      'Konsumsi kalsium dan vitamin D untuk kesehatan tulang',
      'Lakukan tes pendengaran dan penglihatan secara berkala',
      'Pantau tekanan darah dan kadar gula darah',
      'Jaga kesehatan mental dengan aktivitas sosial',
      'Konsultasi obat-obatan dengan dokter secara rutin',
    ],
  },
];

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState('tips');

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Artikel Kesehatan</h1>
          <p className="text-green-100 text-lg">Temukan informasi kesehatan terpercaya untuk gaya hidup yang lebih baik</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b-2 border-green-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-green-600 border-2 border-green-200 hover:border-green-600 hover:shadow-md'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        {currentTab && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-600 animate-fadeIn">
            {/* Tab Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-green-600">{currentTab.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">{currentTab.label}</h2>
              </div>
              <p className="text-gray-600 text-lg">{currentTab.description}</p>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentTab.content.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 hover:shadow-lg hover:border-green-400 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{item}</p>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-10 p-6 bg-green-50 rounded-xl border-l-4 border-green-600">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold text-green-700">💡 Catatan:</span> Informasi ini bersifat edukatif. Untuk masalah kesehatan yang spesifik, selalu konsultasikan dengan profesional medis terpercaya.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
