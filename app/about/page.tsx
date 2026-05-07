import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-50 border-b border-green-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600">healthy-go</h1>
          <Link 
            href="/" 
            className="text-green-600 hover:text-green-700 font-medium transition"
          >
            Kembali ke Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-green-600">healthy-go</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Platform kesehatan terpadu untuk gaya hidup yang lebih sehat dan berkualitas
          </p>
          <div className="inline-block bg-green-600 h-1 w-24 rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        {/* Misi Visi */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Visi */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 rounded-lg w-12 h-12 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-green-700">Visi Kami</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menciptakan ekosistem kesehatan digital yang memberdayakan setiap individu untuk mencapai kehidupan yang lebih sehat, bahagia, dan bermakna.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 rounded-lg w-12 h-12 flex items-center justify-center">
                <span className="text-white text-2xl">💚</span>
              </div>
              <h3 className="text-2xl font-bold text-green-700">Misi Kami</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menyediakan layanan kesehatan yang inovatif, terjangkau, dan mudah diakses untuk membantu jutaan orang menjalani gaya hidup sehat.
            </p>
          </div>
        </div>

        {/* Tentang healthy-go */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Apa itu <span className="text-green-600">healthy-go</span>?
          </h2>
          <div className="bg-white border-2 border-green-200 rounded-2xl p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              healthy-go adalah platform kesehatan digital terdepan yang dirancang untuk membantu Anda mencapai tujuan kesehatan dan kebugaran. Kami menyediakan solusi komprehensif yang menggabungkan teknologi canggih dengan panduan ahli kesehatan profesional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan jangkauan yang luas dan komitmen terhadap kualitas, healthy-go hadir untuk menjadi mitra terpercaya Anda dalam perjalanan menuju hidup yang lebih sehat.
            </p>
          </div>
        </div>

        {/* Keunggulan Kami */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Keunggulan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teknologi Terkini</h3>
              <p className="text-gray-600">
                Platform berbasis AI yang memberikan rekomendasi personal dan real-time.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ahli Bersertifikat</h3>
              <p className="text-gray-600">
                Tim profesional kesehatan berpengalaman siap membantu perjalanan Anda.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jangkauan Global</h3>
              <p className="text-gray-600">
                Melayani jutaan pengguna di seluruh dunia dengan dukungan multi-bahasa.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keamanan Data</h3>
              <p className="text-gray-600">
                Enkripsi tingkat enterprise untuk melindungi privasi dan data Anda.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Program Holistik</h3>
              <p className="text-gray-600">
                Kombinasi sempurna antara nutrisi, olahraga, dan kesehatan mental.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tracking Progres</h3>
              <p className="text-gray-600">
                Dashboard interaktif untuk memantau perjalanan kesehatan Anda secara real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Nilai-Nilai Kami */}
        <div className="mb-20 bg-green-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-12 text-center">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white bg-opacity-20 rounded-lg w-10 h-10 flex items-center justify-center">
                  <span>✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kepercayaan</h3>
                <p className="opacity-90">Transparansi dan integritas dalam setiap layanan yang kami berikan.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white bg-opacity-20 rounded-lg w-10 h-10 flex items-center justify-center">
                  <span>✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inovasi</h3>
                <p className="opacity-90">Terus berinovasi untuk memberikan solusi terbaik dan terdepan.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white bg-opacity-20 rounded-lg w-10 h-10 flex items-center justify-center">
                  <span>✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Aksesibilitas</h3>
                <p className="opacity-90">Menjangkau semua kalangan dengan harga yang terjangkau dan inklusif.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white bg-opacity-20 rounded-lg w-10 h-10 flex items-center justify-center">
                  <span>✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Keberlanjutan</h3>
                <p className="opacity-90">Komitmen terhadap lingkungan dan kesejahteraan masyarakat jangka panjang.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Pencapaian Kami
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-300">
              <div className="text-5xl font-bold text-green-600 mb-2">5M+</div>
              <p className="text-gray-700 font-medium">Pengguna Aktif</p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-300">
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-700 font-medium">Negara</p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-300">
              <div className="text-5xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-700 font-medium">Ahli Kesehatan</p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-300">
              <div className="text-5xl font-bold text-green-600 mb-2">10+</div>
              <p className="text-gray-700 font-medium">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Kesehatan Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Bergabunglah dengan jutaan pengguna yang telah mengubah hidup mereka bersama healthy-go
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition shadow-lg"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">healthy-go</h3>
          <p className="text-gray-400 mb-4">
            Platform kesehatan digital terpadu untuk hidup yang lebih sehat
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 healthy-go. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
