// Database types (optional, untuk type-safety)

export interface AdminUser {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  category: "fitness" | "nutrition" | "mental" | "sleep";
  duration_weeks: number;
  difficulty: "easy" | "medium" | "hard";
  price: number;
  created_at: string;
  updated_at: string;
}

export interface UserSubscription {
  id: string;
  user_id: string;
  program_id: string;
  status: "active" | "completed" | "cancelled";
  progress_percentage: number;
  start_date: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
}

export interface ActivityLog {
  id: string;
  user_id: string;
  action: string;
  details?: Record<string, any>;
  ip_address?: string;
  created_at: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: "male" | "female" | "other";
  height: number; // cm
  weight: number; // kg
  blood_type: string;
  medical_conditions?: string[];
  allergies?: string[];
  emergency_contact: string;
  emergency_contact_phone: string;
  status: "active" | "inactive" | "archived";
  created_at: string;
  updated_at: string;
}

export interface PatientHistory {
  id: string;
  patient_id: string;
  visit_date: string;
  symptoms: string;
  diagnosis: string;
  treatment: string;
  doctor_notes?: string;
  vital_signs: {
    blood_pressure: string; // e.g., "120/80"
    heart_rate: number;
    temperature: number;
    weight: number;
  };
  medications: Array<{
    name: string;
    dosage: string;
    frequency: string;
  }>;
  follow_up_date?: string;
  created_at: string;
  updated_at: string;
}

export interface HealthRecommendation {
  id: string;
  patient_id: string;
  type: "diet" | "exercise" | "lifestyle" | "medical";
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "accepted" | "declined";
  created_at: string;
  updated_at: string;
}
