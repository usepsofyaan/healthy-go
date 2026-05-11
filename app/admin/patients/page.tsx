"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { patientService } from "@/lib/patient-service";
import { Patient } from "@/lib/types";
import PatientList from "@/app/admin/components/PatientList";

export default function PatientsManagement() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "male" as "male" | "female",
    height: "",
    weight: "",
    blood_type: "",
    emergency_contact: "",
    emergency_contact_phone: "",
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    setLoading(true);
    try {
      const data = await patientService.getAllPatients();
      // Gunakan mock data jika service belum connected ke database
      if (data.length === 0) {
        setPatients(mockPatients);
      } else {
        setPatients(data);
      }
    } catch (err) {
      console.log("Database tidak terkoneksi, menggunakan mock data");
      setPatients(mockPatients);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newPatient = await patientService.createPatient({
        ...formData,
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        status: "active",
        medical_conditions: [],
        allergies: [],
      });

      setPatients([newPatient, ...patients]);
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        gender: "male",
        height: "",
        weight: "",
        blood_type: "",
        emergency_contact: "",
        emergency_contact_phone: "",
      });
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menambah pasien");
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link href="/admin" className="text-2xl font-bold text-green-600 hover:text-green-700">
              💚 Admin Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.email}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">📋 Management Pasien</h1>
            <p className="text-gray-600 mt-2">Kelola data pasien dan lihat riwayat medis mereka</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            + Tambah Pasien Baru
          </button>
        </div>

        {/* Patient List */}
        <PatientList patients={patients} />

        {/* Modal Tambah Pasien */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Tambah Pasien Baru</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ✕
                </button>
              </div>

              <div className="p-6">
                {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Nama */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Telepon */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor Telepon</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Tanggal Lahir */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Tanggal Lahir</label>
                      <input
                        type="date"
                        value={formData.date_of_birth}
                        onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as "male" | "female" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                      </select>
                    </div>

                    {/* Golongan Darah */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Golongan Darah</label>
                      <select
                        value={formData.blood_type}
                        onChange={(e) => setFormData({ ...formData, blood_type: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Pilih Golongan Darah</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                      </select>
                    </div>

                    {/* Tinggi */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Tinggi Badan (cm)</label>
                      <input
                        type="number"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Berat */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Berat Badan (kg)</label>
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Kontak Darurat */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Kontak Darurat</label>
                      <input
                        type="text"
                        value={formData.emergency_contact}
                        onChange={(e) => setFormData({ ...formData, emergency_contact: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>

                    {/* Telepon Darurat */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Telepon Kontak Darurat</label>
                      <input
                        type="tel"
                        value={formData.emergency_contact_phone}
                        onChange={(e) => setFormData({ ...formData, emergency_contact_phone: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
                      Batal
                    </button>
                    <button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                      Tambah Pasien
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Mock data untuk testing
const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@example.com",
    phone: "08123456789",
    date_of_birth: "1990-05-15",
    gender: "male",
    height: 175,
    weight: 85,
    blood_type: "O",
    medical_conditions: ["Diabetes", "Hipertensi"],
    allergies: ["Penisilin"],
    emergency_contact: "Siti Santoso",
    emergency_contact_phone: "08987654321",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Ani Wijaya",
    email: "ani@example.com",
    phone: "08234567890",
    date_of_birth: "1995-08-22",
    gender: "female",
    height: 162,
    weight: 58,
    blood_type: "A",
    medical_conditions: [],
    allergies: [],
    emergency_contact: "Hendra Wijaya",
    emergency_contact_phone: "08876543210",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Citra Dewi",
    email: "citra@example.com",
    phone: "08345678901",
    date_of_birth: "1988-03-10",
    gender: "female",
    height: 168,
    weight: 72,
    blood_type: "B",
    medical_conditions: ["Asma"],
    allergies: ["Telur"],
    emergency_contact: "Rendra Dewi",
    emergency_contact_phone: "08765432109",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
