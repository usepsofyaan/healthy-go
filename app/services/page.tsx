import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/lib/services-data";

export const metadata = {
  title: "Layanan Kesehatan - Healthy Go",
  description: "Jelajahi berbagai layanan kesehatan holistik kami yang dirancang untuk kesejahteraan Anda",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Layanan Kesehatan Kami</h1>
          <p className="text-xl text-emerald-100 mb-2">Solusi kesehatan holistik yang komprehensif untuk gaya hidup lebih sehat</p>
          <p className="text-emerald-100">Dari pengobatan tradisional hingga perawatan modern, kami siap mendampingi perjalanan kesehatan Anda</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-emerald-600">
            <div className="text-4xl font-bold text-emerald-600 mb-2">{servicesData.length}</div>
            <p className="text-gray-700 font-semibold">Layanan Tersedia</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-teal-600">
            <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
            <p className="text-gray-700 font-semibold">Profesional Bersertifikat</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-emerald-500">
            <div className="text-4xl font-bold text-emerald-500 mb-2">24/7</div>
            <p className="text-gray-700 font-semibold">Layanan Tersedia</p>
          </div>
        </div>

        {/* Services Cards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Jelajahi Semua Layanan</h2>
          <p className="text-center text-gray-600 mb-12">Klik pada layanan untuk melihat detail lengkap, FAQ, dan cara booking</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 pt-16 border-t-2 border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Pengalaman Bertahun-tahun",
                description: "Tim profesional dengan pengalaman lebih dari 15 tahun di bidang kesehatan",
              },
              {
                icon: "👨‍⚕️",
                title: "Dokter Bersertifikat",
                description: "Semua praktisi tersertifikasi dan terakreditasi oleh badan kesehatan resmi",
              },
              {
                icon: "❤️",
                title: "Pendekatan Holistik",
                description: "Menggabungkan pengobatan tradisional dan modern untuk hasil optimal",
              },
              {
                icon: "💰",
                title: "Harga Terjangkau",
                description: "Paket kesehatan berkualitas dengan harga yang kompetitif",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Perjalanan Kesehatan Anda?</h2>
          <p className="text-lg text-emerald-100 mb-8">Hubungi kami sekarang untuk konsultasi gratis dan temukan layanan yang tepat untuk Anda</p>
          <button className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg hover:bg-emerald-50 transition-colors text-lg">📞 Hubungi Kami Sekarang</button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Jam Layanan</h3>
            <p className="text-gray-400">Senin - Jumat: 08:00 - 17:00</p>
            <p className="text-gray-400">Sabtu: 09:00 - 15:00</p>
            <p className="text-gray-400">Minggu & Libur: Tutup</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Hubungi Kami</h3>
            <p className="text-gray-400">📞 (021) 1234-5678</p>
            <p className="text-gray-400">💬 WhatsApp: 0812-3456-7890</p>
            <p className="text-gray-400">📧 info@healthygo.com</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Lokasi</h3>
            <p className="text-gray-400">Jl. Kesehatan No. 123</p>
            <p className="text-gray-400">Jakarta Selatan, 12345</p>
            <p className="text-gray-400">Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
