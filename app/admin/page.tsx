"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

export default function AdminDashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !loading && !user) {
      router.push("/login");
    }
  }, [user, loading, isMounted, router]);

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  if (loading || !isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-600">💚 Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.email}</span>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8 border-l-4 border-green-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat datang, {user.email}!</h2>
          <p className="text-gray-600">Anda telah berhasil login ke dashboard admin Healthy Go.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Active Sessions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">456</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-yellow-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Program Aktif</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <div className="text-4xl">🏋️</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">Rp 50M</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/patients" className="bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-lg font-semibold transition text-center">
              📋 Management Pasien
            </Link>
            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-4 rounded-lg font-semibold transition text-center">📱 Kelola Users</button>
            <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 p-4 rounded-lg font-semibold transition text-center">🏋️ Kelola Program</button>
            <button className="bg-orange-50 hover:bg-orange-100 text-orange-700 p-4 rounded-lg font-semibold transition text-center">⚙️ Settings</button>
          </div>
        </div>

        {/* User Info Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Info Akun</h3>
          <div className="space-y-3 text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">Email:</span> {user.email}
            </div>
            <div>
              <span className="font-semibold text-gray-900">User ID:</span> {user.id}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Terakhir Login:</span> {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString("id-ID") : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
