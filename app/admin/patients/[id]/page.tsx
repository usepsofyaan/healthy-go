"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Patient } from "@/lib/types";
import PatientDetail from "@/app/admin/components/PatientDetail";
import { useEffect, useState } from "react";

// Mock patient data untuk testing
const mockPatient: Patient = {
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
};

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    // Load patient data (mock untuk sekarang)
    setPatient(mockPatient);
  }, [params.id]);

  if (authLoading || !patient) {
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
          <Link href="/admin" className="text-2xl font-bold text-green-600 hover:text-green-700">
            💚 Admin Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.email}</span>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/admin" className="text-green-600 hover:underline">
            Dashboard
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/admin/patients" className="text-green-600 hover:underline">
            Management Pasien
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{patient.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <PatientDetail patient={patient} />
      </div>
    </div>
  );
}
