# 💚 Healthy Go - Platform Kesehatan Terpadu

Platform kesehatan modern untuk mengelola kesehatan pasien dengan dashboard admin yang komprehensif.

## ✨ Fitur Utama

### 🔐 Authentication

- ✅ Login dengan email & password
- ✅ Register akun baru
- ✅ Protected routes (hanya bisa diakses saat login)
- ✅ Powered by Supabase Auth

### 📊 Admin Dashboard

- ✅ Overview stats (Total Users, Active Sessions, Programs, Revenue)
- ✅ Quick actions untuk management
- ✅ User profile information

### 📋 Patient Management (NEW!)

- ✅ Daftar semua pasien dengan info lengkap
- ✅ Search pasien real-time (nama, email, phone)
- ✅ Tambah pasien baru via modal form
- ✅ BMI status tracking
- ✅ Detail pasien dengan 3 tabs:
  - **Info Dasar**: Profil & metrik kesehatan
  - **Riwayat Medis**: Timeline kunjungan medis dengan tanda vital
  - **Rekomendasi**: AI-powered health recommendations

### 🤖 AI Recommendations

- ✅ Auto-generate rekomendasi berdasarkan:
  - BMI & metrik kesehatan
  - Tanda vital (tekanan darah, denyut jantung)
  - Riwayat medis pasien
- ✅ Recommendation priority (Low, Medium, High)
- ✅ Accept/Decline recommendations

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Supabase (untuk production)

- Buat akun di [supabase.com](https://supabase.com)
- Buat project baru
- Copy URL dan Anon Key ke `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 📁 Folder Structure

```
app/
├── page.tsx                     # Landing page
├── layout.tsx                   # Root layout
├── login/page.tsx              # Login page
├── register/page.tsx           # Register page
└── admin/
    ├── page.tsx                # Dashboard
    ├── patients/               # NEW: Patient management
    │   ├── page.tsx           # Daftar pasien
    │   └── [id]/page.tsx      # Detail pasien
    └── components/
        ├── PatientList.tsx     # NEW: Tabel pasien
        ├── PatientDetail.tsx   # NEW: Detail view
        ├── Navbar.tsx
        └── Footer.tsx

lib/
├── supabase.ts                 # Supabase client
├── auth-context.tsx            # Auth context & hooks
├── patient-service.ts          # NEW: Patient operations
└── types.ts                    # TypeScript types
```

---

## 🔐 Authentication Flow

```
User → Register/Login → Supabase Auth → AuthContext → Protected Routes (/admin)
```

---

## 📋 Patient Management Features

- **Daftar Pasien**: Lihat semua pasien dengan BMI status
- **Search**: Real-time cari berdasarkan nama, email, atau phone
- **Tambah Pasien**: Modal form untuk input data pasien baru
- **Detail Pasien**: 3 tab view:
  - Info Dasar (profil, metrik kesehatan)
  - Riwayat Medis (timeline kunjungan + vital signs)
  - Rekomendasi (AI recommendations)
- **AI Recommendations**: Auto-generate rekomendasi berdasarkan data pasien

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL (optional)
- **Linting**: ESLint

---

## 📚 Documentation

- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Panduan setup Supabase Auth
- **[PATIENT_MANAGEMENT.md](./PATIENT_MANAGEMENT.md)** - Dokumentasi lengkap fitur patient management
- **[QUICKSTART_PATIENT.md](./QUICKSTART_PATIENT.md)** - Quick reference guide

---

## 🧪 Testing dengan Mock Data

Aplikasi sudah dilengkapi mock data untuk testing tanpa database:

```
Pasien 1: Budi Santoso (BMI: Overweight, Kondisi: Diabetes, Hipertensi)
Pasien 2: Ani Wijaya (BMI: Normal, Kondisi: Baik)
Pasien 3: Citra Dewi (BMI: Overweight, Kondisi: Asma)
```

---

## 🚀 Deployment

Deploy ke Vercel dengan satu klik:

1. Push ke GitHub
2. Connect repository ke Vercel
3. Deploy!

---

## 📊 Recommended Next Steps

1. **Setup Database**: Connect ke Supabase PostgreSQL (lihat PATIENT_MANAGEMENT.md)
2. **Add More Features**: Export data, SMS notifications, analytics dashboard
3. **Mobile App**: Build mobile app untuk pasien
4. **Telemedicine**: Integrasi konsultasi online dengan dokter

---

## 📞 Need Help?

Baca dokumentasi di root folder project:

- SUPABASE_SETUP.md
- PATIENT_MANAGEMENT.md
- QUICKSTART_PATIENT.md
