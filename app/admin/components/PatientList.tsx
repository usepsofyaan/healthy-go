"use client";

import { useState } from "react";
import Link from "next/link";
import { Patient } from "@/lib/types";

interface PatientListProps {
  patients: Patient[];
  onSelectPatient?: (patient: Patient) => void;
}

export default function PatientList({ patients, onSelectPatient }: PatientListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || patient.email.toLowerCase().includes(searchTerm.toLowerCase()) || patient.phone.includes(searchTerm));

  const calculateBMI = (weight: number, height: number) => {
    return (weight / (height / 100) ** 2).toFixed(1);
  };

  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { label: "Kurang", color: "bg-blue-100 text-blue-800" };
    if (bmi < 25) return { label: "Normal", color: "bg-green-100 text-green-800" };
    if (bmi < 30) return { label: "Overweight", color: "bg-yellow-100 text-yellow-800" };
    return { label: "Obese", color: "bg-red-100 text-red-800" };
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Search Bar */}
      <div className="p-6 border-b border-gray-200">
        <input
          type="text"
          placeholder="Cari pasien berdasarkan nama, email, atau nomor telepon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nama</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Telepon</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Gender</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">BMI</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tgl Daftar</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                  Tidak ada pasien yang ditemukan
                </td>
              </tr>
            ) : (
              filteredPatients.map((patient) => {
                const bmi = calculateBMI(patient.weight, patient.height);
                const bmiStatus = getBMIStatus(parseFloat(bmi));

                return (
                  <tr key={patient.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{patient.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{patient.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{patient.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{patient.gender === "male" ? "Laki-laki" : patient.gender === "female" ? "Perempuan" : "Lainnya"}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bmiStatus.color}`}>
                        {bmi} ({bmiStatus.label})
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{new Date(patient.created_at).toLocaleDateString("id-ID")}</td>
                    <td className="px-6 py-4 text-center">
                      <Link href={`/admin/patients/${patient.id}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-semibold transition">
                        Lihat Detail
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      {filteredPatients.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Menampilkan <span className="font-semibold">{filteredPatients.length}</span> dari <span className="font-semibold">{patients.length}</span> pasien
          </p>
        </div>
      )}
    </div>
  );
}
