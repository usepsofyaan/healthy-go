import { supabase } from "./supabase";
import { Patient, PatientHistory, HealthRecommendation } from "./types";

// ============ PATIENT OPERATIONS ============

export const patientService = {
  // Dapatkan semua pasien
  async getAllPatients(): Promise<Patient[]> {
    const { data, error } = await supabase.from("patients").select("*").eq("status", "active").order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Dapatkan pasien berdasarkan ID
  async getPatientById(id: string): Promise<Patient | null> {
    const { data, error } = await supabase.from("patients").select("*").eq("id", id).single();

    if (error && error.code !== "PGRST116") throw error;
    return data || null;
  },

  // Cari pasien
  async searchPatients(query: string): Promise<Patient[]> {
    const { data, error } = await supabase.from("patients").select("*").or(`name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%`).eq("status", "active");

    if (error) throw error;
    return data || [];
  },

  // Buat pasien baru
  async createPatient(patient: Omit<Patient, "id" | "created_at" | "updated_at">): Promise<Patient> {
    const { data, error } = await supabase
      .from("patients")
      .insert([
        {
          ...patient,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update pasien
  async updatePatient(id: string, updates: Partial<Patient>): Promise<Patient> {
    const { data, error } = await supabase
      .from("patients")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete pasien (soft delete)
  async deletePatient(id: string): Promise<void> {
    const { error } = await supabase.from("patients").update({ status: "archived" }).eq("id", id);

    if (error) throw error;
  },

  // ============ PATIENT HISTORY OPERATIONS ============

  // Dapatkan riwayat pasien
  async getPatientHistory(patientId: string): Promise<PatientHistory[]> {
    const { data, error } = await supabase.from("patient_history").select("*").eq("patient_id", patientId).order("visit_date", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Tambah riwayat pasien
  async addPatientHistory(history: Omit<PatientHistory, "id" | "created_at" | "updated_at">): Promise<PatientHistory> {
    const { data, error } = await supabase
      .from("patient_history")
      .insert([
        {
          ...history,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update riwayat pasien
  async updatePatientHistory(id: string, updates: Partial<PatientHistory>): Promise<PatientHistory> {
    const { data, error } = await supabase
      .from("patient_history")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // ============ HEALTH RECOMMENDATION OPERATIONS ============

  // Dapatkan rekomendasi kesehatan pasien
  async getHealthRecommendations(patientId: string): Promise<HealthRecommendation[]> {
    const { data, error } = await supabase.from("health_recommendations").select("*").eq("patient_id", patientId).order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Generate rekomendasi otomatis berdasarkan data pasien
  async generateRecommendations(patient: Patient, history: PatientHistory[]): Promise<HealthRecommendation[]> {
    const recommendations: HealthRecommendation[] = [];

    // Hitung BMI
    const bmi = patient.weight / (patient.height / 100) ** 2;

    // Rekomendasi berdasarkan BMI
    if (bmi < 18.5) {
      recommendations.push({
        id: "",
        patient_id: patient.id,
        type: "diet",
        title: "Tingkatkan Asupan Kalori",
        description: "BMI Anda kurang dari normal. Perbanyak asupan nutrisi seimbang untuk mencapai berat badan ideal.",
        priority: "medium",
        status: "pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    } else if (bmi > 25) {
      recommendations.push({
        id: "",
        patient_id: patient.id,
        type: "exercise",
        title: "Program Penurunan Berat Badan",
        description: "BMI Anda menunjukkan kelebihan berat badan. Lakukan olahraga teratur 3-5 kali seminggu.",
        priority: "high",
        status: "pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      recommendations.push({
        id: "",
        patient_id: patient.id,
        type: "diet",
        title: "Kurangi Asupan Kalori",
        description: "Batasi konsumsi makanan tinggi lemak dan gula. Fokus pada sayuran dan protein tanpa lemak.",
        priority: "high",
        status: "pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    }

    // Rekomendasi berdasarkan riwayat medis
    if (history.length > 0) {
      const latestHistory = history[0];

      // Jika tekanan darah tinggi
      if (latestHistory.vital_signs.blood_pressure) {
        const [systolic] = latestHistory.vital_signs.blood_pressure.split("/").map(Number);
        if (systolic > 140) {
          recommendations.push({
            id: "",
            patient_id: patient.id,
            type: "lifestyle",
            title: "Kelola Tekanan Darah",
            description: "Tekanan darah Anda tinggi. Kurangi stres, batasi garam, dan konsultasi dengan dokter.",
            priority: "high",
            status: "pending",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        }
      }

      // Jika denyut jantung tinggi
      if (latestHistory.vital_signs.heart_rate > 100) {
        recommendations.push({
          id: "",
          patient_id: patient.id,
          type: "lifestyle",
          title: "Tingkatkan Istirahat",
          description: "Denyut jantung Anda meningkat. Pastikan istirahat cukup 7-8 jam per hari.",
          priority: "medium",
          status: "pending",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }
    }

    // Rekomendasi umum lifestyle
    recommendations.push({
      id: "",
      patient_id: patient.id,
      type: "lifestyle",
      title: "Rutin Pemeriksaan Kesehatan",
      description: "Lakukan pemeriksaan kesehatan berkala 6 bulan sekali untuk monitoring kesehatan Anda.",
      priority: "medium",
      status: "pending",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    return recommendations;
  },

  // Simpan rekomendasi
  async saveRecommendations(recommendations: HealthRecommendation[]): Promise<HealthRecommendation[]> {
    // Filter rekomendasi tanpa id
    const newRecommendations = recommendations.filter((r) => !r.id);

    if (newRecommendations.length === 0) {
      return recommendations;
    }

    const { data, error } = await supabase.from("health_recommendations").insert(newRecommendations).select();

    if (error) throw error;
    return data || [];
  },

  // Update status rekomendasi
  async updateRecommendationStatus(id: string, status: "pending" | "accepted" | "declined"): Promise<HealthRecommendation> {
    const { data, error } = await supabase
      .from("health_recommendations")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
