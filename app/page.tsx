import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hidup Sehat, <span className="text-green-600">Dimulai Sekarang</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Kami menyediakan solusi kesehatan terpadu untuk membantu Anda mencapai gaya hidup yang lebih sehat dan sejahtera. Bergabunglah dengan ribuan pengguna yang telah merasakan perubahannya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">Mulai Sekarang</button>
              <button className="border-2 border-green-600 text-green-600 dark:text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-slate-700 transition">Pelajari Lebih Lanjut</button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💚</div>
                <p className="text-white text-2xl font-bold">Kesehatan Terdepan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Berbagai pilihan layanan kesehatan untuk kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">🏋️</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Program Fitness</h3>
              <p className="text-gray-600 dark:text-gray-300">Program latihan personal yang disesuaikan dengan kebutuhan dan tujuan fitness Anda.</p>
              <button className="mt-6 text-green-600 dark:text-green-400 font-semibold hover:gap-2 flex items-center gap-1">Selengkapnya →</button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Konsultasi Nutrisi</h3>
              <p className="text-gray-600 dark:text-gray-300">Konsultasi dengan ahli gizi profesional untuk diet yang sehat dan sesuai gaya hidup Anda.</p>
              <button className="mt-6 text-green-600 dark:text-green-400 font-semibold hover:gap-2 flex items-center gap-1">Selengkapnya →</button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Meditasi & Wellness</h3>
              <p className="text-gray-600 dark:text-gray-300">Sesi meditasi dan program wellness untuk keseimbangan mental dan kesehatan emosional.</p>
              <button className="mt-6 text-green-600 dark:text-green-400 font-semibold hover:gap-2 flex items-center gap-1">Selengkapnya →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Mengapa Memilih Healthy-Go?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Keunggulan yang kami tawarkan untuk kesuksesan Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">✓</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tim Profesional</h3>
              <p className="text-gray-600 dark:text-gray-300">Dipandu oleh trainer dan ahli kesehatan bersertifikat dengan pengalaman bertahun-tahun.</p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">✓</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Program Personal</h3>
              <p className="text-gray-600 dark:text-gray-300">Setiap program dirancang khusus sesuai dengan kebutuhan dan tujuan pribadi Anda.</p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">✓</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hasil Nyata</h3>
              <p className="text-gray-600 dark:text-gray-300">Ratusan testimoni positif dari klien yang telah merasakan transformasi kesehatan mereka.</p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">✓</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dukungan 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">Tim support kami siap membantu Anda kapan saja untuk menjawab pertanyaan dan memberikan motivasi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Apa Kata Mereka?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Dengarkan pengalaman langsung dari klien kami yang puas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"Saya sangat puas dengan program yang diberikan. Dalam 3 bulan, berat badan saya turun 15kg dan saya merasa lebih energik!"</p>
              <div className="font-semibold text-gray-900 dark:text-white">Dinda Putri</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Program Fitness</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"Konsultasi nutrisinya sangat membantu. Sekarang saya tahu makanan apa yang baik untuk tubuh saya dan terasa lebih sehat."</p>
              <div className="font-semibold text-gray-900 dark:text-white">Budi Santoso</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Konsultasi Nutrisi</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-xl">
              <div className="flex items-center gap-1 mb-4">
                {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"Program meditasi Healthy-Go benar-benar mengubah cara saya menjalani kehidupan sehari-hari. Lebih tenang dan fokus!"</p>
              <div className="font-semibold text-gray-900 dark:text-white">Siti Nurhaliza</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Meditasi & Wellness</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Memulai Perjalanan Kesehatan Anda?</h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">Jangan tunda lagi. Ambil langkah pertama menuju hidup yang lebih sehat bersama Healthy-Go hari ini.</p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">Mulai Konsultasi Gratis</button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
