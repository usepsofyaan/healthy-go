export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  process: string[];
  duration: string;
  priceFrom: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const servicesData: Service[] = [
  {
    id: "pengobatan-tradisional-cina",
    name: "Pengobatan Tradisional Cina",
    icon: "🏯",
    description: "Pengobatan holistik menggunakan prinsip keseimbangan energi Qi dan harmoni tubuh",
    benefits: ["Menyeimbangkan energi tubuh", "Meningkatkan sirkulasi darah", "Mengurangi peradangan", "Meningkatkan daya tahan tubuh", "Mengatasi gangguan pencernaan"],
    suitableFor: ["Orang dengan keluhan kronis", "Mereka yang mencari pencegahan penyakit", "Individu yang ingin pendekatan holistik", "Pasien dengan kondisi yang tidak merespons pengobatan konvensional"],
    process: ["Konsultasi awal dengan dokter TCM", "Pemeriksaan lidah dan nadi", "Diagnosis berdasarkan 4 pemeriksaan TCM", "Merancang paket pengobatan yang dipersonalisasi", "Melakukan terapi sesuai rencana"],
    duration: "3-6 bulan (tergantung kondisi)",
    priceFrom: "Rp 150.000 per sesi",
    faqs: [
      {
        question: "Apa saja efek samping dari Pengobatan Tradisional Cina?",
        answer: "Pengobatan TCM umumnya aman dengan efek samping minimal. Beberapa pasien mungkin mengalami reaksi detoksifikasi ringan seperti kelelahan atau perubahan buang air besar.",
      },
      {
        question: "Berapa lama biasanya membutuhkan perawatan?",
        answer: "Durasi tergantung pada kondisi dan riwayat kesehatan. Rata-rata 3-6 bulan, namun beberapa kondisi memerlukan waktu lebih lama.",
      },
      {
        question: "Apakah bisa dikombinasikan dengan pengobatan modern?",
        answer: "Ya, pengobatan TCM dapat dikombinasikan dengan pengobatan modern. Kami selalu berkomunikasi dengan dokter Anda untuk keamanan optimal.",
      },
    ],
  },
  {
    id: "akupuntur",
    name: "Akupuntur",
    icon: "🪡",
    description: "Terapi dengan menusuk titik-titik tertentu untuk merangsang penyembuhan alami tubuh",
    benefits: ["Mengurangi nyeri kronis", "Meningkatkan relaksasi dan kualitas tidur", "Mengurangi stres dan kecemasan", "Meningkatkan energi", "Mempercepat penyembuhan luka"],
    suitableFor: ["Orang dengan nyeri kronis atau akut", "Pasien insomnia", "Individu yang stres tinggi", "Mereka dengan kondisi inflamasi"],
    process: ["Konsultasi untuk memahami keluhan", "Palpasi dan pemeriksaan titik akupuntur", "Insersi jarum steril pada titik akupuntur", "Retensi jarum selama 20-30 menit", "Pelepasan jarum dan edukasi perawatan"],
    duration: "20-30 menit per sesi, 2-3x per minggu",
    priceFrom: "Rp 200.000 per sesi",
    faqs: [
      {
        question: "Apakah akupuntur terasa sakit?",
        answer: "Akupuntur menggunakan jarum sangat halus. Mungkin ada sensasi tusukan kecil, tapi umumnya tidak terasa nyeri. Banyak pasien merasa relaksasi selama terapi.",
      },
      {
        question: "Berapa sesi yang dibutuhkan untuk hasil terlihat?",
        answer: "Hasil bisa terasa mulai dari sesi pertama. Untuk hasil optimal, disarankan minimal 6-10 sesi tergantung kondisi.",
      },
      {
        question: "Apakah ada efek samping?",
        answer: "Efek samping sangat minimal. Mungkin ada sedikit memar atau nyeri tekan pada titik akupuntur, namun cepat hilang.",
      },
    ],
  },
  {
    id: "bekam",
    name: "Bekam",
    icon: "🫖",
    description: "Terapi tradisional dengan menggunakan cangkir untuk melepas racun dan meningkatkan aliran darah",
    benefits: ["Menghilangkan toksin dari tubuh", "Meningkatkan sirkulasi darah lokal", "Mengurangi nyeri otot dan kaku", "Meningkatkan sistem imun", "Meredakan peradangan"],
    suitableFor: ["Orang dengan nyeri bahu dan punggung", "Pasien dengan ketegangan otot", "Individu yang ingin detoksifikasi", "Mereka dengan masalah peredaran darah"],
    process: ["Pemeriksaan awal dan penentuan area bekam", "Pembersihan dan persiapan kulit", "Pemasangan cangkir dan pemencetan udara", "Retensi cangkir selama 5-15 menit", "Pelepasan cangkir dan pembalutan area"],
    duration: "30-45 menit per sesi",
    priceFrom: "Rp 175.000 per sesi",
    faqs: [
      {
        question: "Mengapa bekam meninggalkan bekas merah/ungu?",
        answer: "Bekam bekerja dengan mengeluarkan darah kotor dan meningkatkan aliran darah. Bekas ini normal dan akan hilang dalam 1-2 minggu.",
      },
      {
        question: "Apakah bekam terasa sakit?",
        answer: "Sensasi bekam terasa seperti sedotan yang kuat namun dapat ditoleransi. Banyak pasien merasa nyaman selama terapi.",
      },
      {
        question: "Kapan sebaiknya tidak melakukan bekam?",
        answer: "Hindari bekam jika kulit terluka, sedang demam tinggi, atau sedang hamil. Konsultasi dengan terapis terlebih dahulu.",
      },
    ],
  },
  {
    id: "herbal",
    name: "Herbal",
    icon: "🌿",
    description: "Pengobatan menggunakan ramuan herbal alami yang diformulasikan khusus untuk setiap pasien",
    benefits: ["Memperkuat sistem imun", "Meningkatkan energi dan stamina", "Mempercepat penyembuhan", "Mencegah penyakit kronis", "Aman dengan efek samping minimal"],
    suitableFor: ["Semua usia (dengan dosis yang disesuaikan)", "Orang yang ingin pencegahan penyakit", "Pasien dengan kondisi kronis", "Individu yang mencari alternatif alami"],
    process: ["Konsultasi mendalam tentang keluhan dan riwayat kesehatan", "Diagnosis dan penentu paket herbal", "Persiapan ramuan herbal yang dikustomisasi", "Edukasi cara konsumsi dan penyimpanan", "Follow-up dan penyesuaian formula"],
    duration: "Konsultasi 30-45 menit, konsumsi sesuai resep",
    priceFrom: "Rp 250.000 per paket herbal",
    faqs: [
      {
        question: "Apakah herbal aman dikonsumsi jangka panjang?",
        answer: "Herbal berkualitas tinggi yang diformulasikan dengan benar aman untuk jangka panjang. Kami menggunakan bahan berkualitas premium.",
      },
      {
        question: "Bagaimana cara menyimpan herbal?",
        answer: "Simpan herbal di tempat sejuk, gelap, dan kering. Jauhkan dari anak-anak dan benda panas.",
      },
      {
        question: "Berapa lama sebelum merasakan manfaatnya?",
        answer: "Beberapa orang merasakan manfaat dalam 1-2 minggu, sementara lainnya memerlukan 4-6 minggu tergantung kondisi.",
      },
    ],
  },
  {
    id: "konsultasi-kesehatan",
    name: "Konsultasi Kesehatan",
    icon: "💬",
    description: "Konsultasi komprehensif dengan profesional kesehatan untuk merancang strategi kesehatan optimal Anda",
    benefits: ["Mendapat diagnosis akurat", "Rencana perawatan yang dipersonalisasi", "Edukasi kesehatan mendalam", "Pencegahan penyakit di masa depan", "Dukungan kesehatan berkelanjutan"],
    suitableFor: ["Siapa pun yang ingin meningkatkan kesehatan", "Orang dengan keluhan kesehatan yang bingung", "Pasien yang ingin second opinion", "Individu dalam perjalanan wellness"],
    process: ["Intake form dan pemeriksaan awal", "Diskusi riwayat kesehatan dan gaya hidup", "Pemeriksaan fisik dasar", "Analisis dan rekomendasi", "Penyusunan rencana aksi kesehatan"],
    duration: "60 menit per sesi",
    priceFrom: "Rp 300.000 per sesi",
    faqs: [
      {
        question: "Apakah perlu persiapan sebelum konsultasi?",
        answer: "Siapkan hasil pemeriksaan medis terakhir Anda dan catat keluhan yang ingin didiskusikan. Datang dalam kondisi istirahat cukup.",
      },
      {
        question: "Apakah bisa follow-up konsultasi?",
        answer: "Ya, kami merekomendasikan follow-up 2-4 minggu setelah konsultasi pertama untuk memonitor progress.",
      },
      {
        question: "Apakah hasil konsultasi tersimpan aman?",
        answer: "Ya, semua data konsultasi Anda dijaga kerahasiaannya sesuai standar medis internasional.",
      },
    ],
  },
  {
    id: "terapi-nyeri",
    name: "Terapi Nyeri",
    icon: "🎯",
    description: "Terapi khusus untuk mengatasi nyeri akut maupun kronis dengan berbagai metode efektif",
    benefits: ["Mengurangi intensitas nyeri secara signifikan", "Meningkatkan mobilitas dan fleksibilitas", "Mempercepat penyembuhan cedera", "Mengurangi ketergantungan obat nyeri", "Meningkatkan kualitas hidup"],
    suitableFor: ["Orang dengan nyeri akut atau kronis", "Pasien cedera olahraga", "Individu dengan osteoarthritis", "Mereka yang ingin alternatif dari obat kimia"],
    process: ["Assessmen nyeri dan lokasi masalah", "Identifikasi penyebab nyeri", "Penentuan metode terapi yang tepat", "Pelaksanaan terapi (kombinasi teknik)", "Latihan dan edukasi untuk pencegahan kambuh"],
    duration: "45-60 menit per sesi, 2x per minggu awalnya",
    priceFrom: "Rp 225.000 per sesi",
    faqs: [
      {
        question: "Berapa lama untuk nyeri hilang sepenuhnya?",
        answer: "Tergantung tingkat keparahan. Nyeri akut biasanya 2-4 minggu, nyeri kronis 6-12 minggu dengan konsistensi terapi.",
      },
      {
        question: "Apakah perlu terapi berkelanjutan?",
        answer: "Setelah nyeri hilang, kami rekomendasikan maintenance terapi 1x sebulan untuk mencegah kambuh.",
      },
      {
        question: "Apa saja metode terapi yang digunakan?",
        answer: "Kami menggunakan kombinasi akupuntur, massage terapi, tuina, dan latihan fisik yang disesuaikan dengan kondisi Anda.",
      },
    ],
  },
  {
    id: "home-care",
    name: "Home Care",
    icon: "🏥",
    description: "Layanan perawatan kesehatan profesional di rumah Anda dengan kenyamanan dan privasi maksimal",
    benefits: ["Perawatan di rumah sendiri dengan nyaman", "Mengurangi risiko infeksi rumah sakit", "Konsistensi perawatan personal", "Lebih terjangkau dari rawat inap", "Dukungan keluarga yang lebih baik"],
    suitableFor: ["Lansia yang memerlukan perawatan", "Pasien post-operasi", "Individu dengan kondisi kronis", "Orang yang pulih dari sakit dan butuh monitoring"],
    process: ["Assess kebutuhan perawatan di rumah", "Penyusunan paket perawatan", "Penugasan perawat profesional", "Kunjungan rutin sesuai jadwal", "Monitoring dan laporan kemajuan"],
    duration: "Disesuaikan dengan kebutuhan, 1-2 jam per kunjungan",
    priceFrom: "Rp 400.000 per kunjungan",
    faqs: [
      {
        question: "Layanan apa saja yang termasuk home care?",
        answer: "Termasuk monitoring vital sign, perawatan luka, terapi fisik, edukasi pasien, dan koordinasi dengan dokter.",
      },
      {
        question: "Apakah perawat tersedia 24/7?",
        answer: "Kami menyediakan layanan regular dan emergency 24/7. Hubungi kami untuk paket yang sesuai kebutuhan.",
      },
      {
        question: "Bagaimana jika ada kondisi darurat?",
        answer: "Hubungi kami segera. Perawat akan melakukan first aid dan koordinasi dengan rumah sakit jika diperlukan.",
      },
    ],
  },
  {
    id: "medical-checkup",
    name: "Medical Checkup",
    icon: "🏥",
    description: "Pemeriksaan kesehatan menyeluruh untuk deteksi dini penyakit dan perencanaan kesehatan preventif",
    benefits: ["Deteksi dini penyakit", "Baseline data kesehatan yang akurat", "Rekomendasi pencegahan penyakit", "Monitor perkembangan kesehatan", "Dokumentasi hasil yang terstruktur"],
    suitableFor: ["Siapa pun yang ingin tahu kondisi kesehatan aktual", "Pekerja untuk screening perusahaan", "Orang dengan riwayat penyakit keluarga", "Individu usia 40+ untuk screening rutin"],
    process: ["Pendaftaran dan pengisian medical history", "Pemeriksaan fisik menyeluruh", "Tes laboratorium (sesuai paket)", "Pemeriksaan radiologi jika diperlukan", "Konsultasi hasil dan rekomendasi"],
    duration: "2-3 jam untuk medical checkup lengkap",
    priceFrom: "Rp 500.000 per paket (basic)",
    faqs: [
      {
        question: "Apa saja paket medical checkup yang tersedia?",
        answer: "Kami memiliki paket Basic, Standard, dan Comprehensive. Setiap paket mencakup pemeriksaan yang berbeda.",
      },
      {
        question: "Apakah perlu puasa sebelum medical checkup?",
        answer: "Untuk tes darah dan laboratorium lainnya, disarankan puasa 8-10 jam sebelumnya.",
      },
      {
        question: "Kapan hasil pemeriksaan siap?",
        answer: "Hasil biasanya siap dalam 3-5 hari kerja dan akan dikomunikasikan langsung kepada Anda.",
      },
    ],
  },
];
