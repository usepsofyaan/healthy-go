"use client";

import { useEffect, useState } from "react";
import { Patient, PatientHistory, HealthRecommendation } from "@/lib/types";
import { patientService } from "@/lib/patient-service";

interface PatientDetailProps {
  patient: Patient;
}

export default function PatientDetail({ patient }: PatientDetailProps) {
  const [history, setHistory] = useState<PatientHistory[]>([]);
  const [recommendations, setRecommendations] = useState<HealthRecommendation[]>([]);
  const [activeTab, setActiveTab] = useState<"info" | "history" | "recommendations">("info");
  const [loading, setLoading] = useState(false);
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  useEffect(() => {
    loadPatientData();
  }, [patient.id]);

  const loadPatientData = async () => {
    setLoading(true);
    try {
      const [historyData, recommendationsData] = await Promise.all([patientService.getPatientHistory(patient.id), patientService.getHealthRecommendations(patient.id)]);
      setHistory(historyData);
      setRecommendations(recommendationsData);
    } catch (error) {
      console.error("Error loading patient data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateRecommendations = async () => {
    try {
      const newRecommendations = await patientService.generateRecommendations(patient, history);
      await patientService.saveRecommendations(newRecommendations);
      await loadPatientData();
      setShowGenerateModal(false);
    } catch (error) {
      console.error("Error generating recommendations:", error);
    }
  };

  const handleUpdateRecommendationStatus = async (id: string, status: "pending" | "accepted" | "declined") => {
    try {
      await patientService.updateRecommendationStatus(id, status);
      await loadPatientData();
    } catch (error) {
      console.error("Error updating recommendation:", error);
    }
  };

  const calculateBMI = (weight: number, height: number) => {
    return (weight / (height / 100) ** 2).toFixed(1);
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const bmi = calculateBMI(patient.weight, patient.height);
  const age = calculateAge(patient.date_of_birth);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{patient.name}</h2>
          <p className="text-gray-600 mt-1">{patient.email}</p>
        </div>
        <div className="text-right">
          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">{patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex border-b border-gray-200">
          {(["info", "history", "recommendations"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 px-6 py-4 font-semibold transition ${activeTab === tab ? "border-b-2 border-green-600 text-green-600" : "text-gray-600 hover:text-gray-900"}`}>
              {tab === "info" ? "📋 Info Dasar" : tab === "history" ? "📜 Riwayat Medis" : "💡 Rekomendasi"}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* INFO TAB */}
          {activeTab === "info" && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Pribadi</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <span className="font-semibold text-gray-900">Umur:</span> {age} tahun
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Gender:</span> {patient.gender === "male" ? "Laki-laki" : patient.gender === "female" ? "Perempuan" : "Lainnya"}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Golongan Darah:</span> {patient.blood_type}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Nomor Telepon:</span> {patient.phone}
                  </div>
                </div>
              </div>

              {/* Health Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Metrik Kesehatan</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Tinggi Badan</p>
                    <p className="text-2xl font-bold text-blue-900">{patient.height} cm</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Berat Badan</p>
                    <p className="text-2xl font-bold text-green-900">{patient.weight} kg</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">BMI (Body Mass Index)</p>
                    <p className="text-2xl font-bold text-purple-900">{bmi}</p>
                  </div>
                </div>
              </div>

              {/* Medical Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Riwayat Medis</h3>
                <div className="space-y-2 text-gray-600">
                  <div>
                    <span className="font-semibold text-gray-900">Kondisi Medis:</span>
                    {patient.medical_conditions && patient.medical_conditions.length > 0 ? (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {patient.medical_conditions.map((condition, idx) => (
                          <span key={idx} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                            {condition}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm">Tidak ada</p>
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Alergi:</span>
                    {patient.allergies && patient.allergies.length > 0 ? (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {patient.allergies.map((allergy, idx) => (
                          <span key={idx} className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                            {allergy}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm">Tidak ada</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontak Darurat</h3>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-900">{patient.emergency_contact}</p>
                  <p className="text-gray-600 text-sm">{patient.emergency_contact_phone}</p>
                </div>
              </div>
            </div>
          )}

          {/* HISTORY TAB */}
          {activeTab === "history" && (
            <div className="space-y-4">
              {loading ? (
                <p className="text-gray-500">Loading...</p>
              ) : history.length === 0 ? (
                <p className="text-gray-500">Belum ada riwayat medis untuk pasien ini.</p>
              ) : (
                history.map((record) => (
                  <div key={record.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {new Date(record.visit_date).toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Kunjungan</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Gejala</p>
                        <p className="font-semibold text-gray-900">{record.symptoms}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Diagnosa</p>
                        <p className="font-semibold text-gray-900">{record.diagnosis}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Pengobatan</p>
                        <p className="font-semibold text-gray-900">{record.treatment}</p>
                      </div>
                      {record.follow_up_date && (
                        <div>
                          <p className="text-sm text-gray-600">Follow Up</p>
                          <p className="font-semibold text-gray-900">{new Date(record.follow_up_date).toLocaleDateString("id-ID")}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Tanda Vital</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="border-l-2 border-green-500 pl-3">
                          <p className="text-gray-600">TD</p>
                          <p className="font-semibold">{record.vital_signs.blood_pressure}</p>
                        </div>
                        <div className="border-l-2 border-red-500 pl-3">
                          <p className="text-gray-600">Denyut</p>
                          <p className="font-semibold">{record.vital_signs.heart_rate} bpm</p>
                        </div>
                        <div className="border-l-2 border-orange-500 pl-3">
                          <p className="text-gray-600">Suhu</p>
                          <p className="font-semibold">{record.vital_signs.temperature}°C</p>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-3">
                          <p className="text-gray-600">Berat</p>
                          <p className="font-semibold">{record.vital_signs.weight} kg</p>
                        </div>
                      </div>
                    </div>

                    {record.medications.length > 0 && (
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Obat yang Diberikan</p>
                        <div className="space-y-2">
                          {record.medications.map((med, idx) => (
                            <div key={idx} className="text-sm text-gray-600">
                              • <span className="font-semibold">{med.name}</span> - {med.dosage} ({med.frequency})
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {record.doctor_notes && (
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-2 border-yellow-500 mt-4">
                        <p className="text-sm font-semibold text-yellow-900 mb-1">Catatan Dokter</p>
                        <p className="text-sm text-yellow-800">{record.doctor_notes}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* RECOMMENDATIONS TAB */}
          {activeTab === "recommendations" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Rekomendasi Kesehatan</h3>
                <button onClick={() => setShowGenerateModal(true)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                  🤖 Generate Rekomendasi
                </button>
              </div>

              {loading ? (
                <p className="text-gray-500">Loading...</p>
              ) : recommendations.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500 mb-4">Belum ada rekomendasi untuk pasien ini.</p>
                  <button onClick={() => setShowGenerateModal(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition">
                    Buat Rekomendasi
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className={`rounded-lg p-4 border-l-4 ${rec.status === "accepted" ? "bg-green-50 border-green-600" : rec.status === "declined" ? "bg-red-50 border-red-600" : "bg-blue-50 border-blue-600"}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                rec.type === "diet" ? "bg-orange-100 text-orange-800" : rec.type === "exercise" ? "bg-yellow-100 text-yellow-800" : rec.type === "lifestyle" ? "bg-purple-100 text-purple-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {rec.type === "diet" ? "🍎 Diet" : rec.type === "exercise" ? "🏋️ Olahraga" : rec.type === "lifestyle" ? "🧘 Lifestyle" : "⚕️ Medis"}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${rec.priority === "high" ? "bg-red-100 text-red-800" : rec.priority === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                            >
                              {rec.priority === "high" ? "🔴 Prioritas Tinggi" : rec.priority === "medium" ? "🟡 Sedang" : "🟢 Rendah"}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{rec.title}</h4>
                          <p className="text-gray-600">{rec.description}</p>
                        </div>
                      </div>

                      {rec.status === "pending" && (
                        <div className="flex gap-2 mt-4">
                          <button onClick={() => handleUpdateRecommendationStatus(rec.id, "accepted")} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                            ✓ Terima
                          </button>
                          <button onClick={() => handleUpdateRecommendationStatus(rec.id, "declined")} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                            ✗ Tolak
                          </button>
                        </div>
                      )}

                      {rec.status !== "pending" && (
                        <div className="mt-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${rec.status === "accepted" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                            {rec.status === "accepted" ? "✓ Diterima" : "✗ Ditolak"}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Generate Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Generate Rekomendasi</h3>
            <p className="text-gray-600 mb-6">Sistem akan menganalisis data kesehatan pasien dan menghasilkan rekomendasi yang dipersonalisasi berdasarkan:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
              <li>Metrik kesehatan (BMI, tinggi, berat)</li>
              <li>Riwayat medis terkini</li>
              <li>Tanda vital terakhir</li>
              <li>Best practices kesehatan</li>
            </ul>
            <div className="flex gap-3">
              <button onClick={() => setShowGenerateModal(false)} className="flex-1 border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
                Batal
              </button>
              <button onClick={handleGenerateRecommendations} className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
