"use client";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here
    console.log("Logging in with", email, password);
    alert("Login berhasil (Simulasi)");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Sharia POS</h2>
          <p className="text-gray-500 mt-2">Selamat Datang Kembali</p>
        </div>

        {/* Islamic Ethics Reminder */}
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg mb-6 text-sm italic text-center">
          <p className="font-semibold mb-1">Pengingat Etika Bisnis (Shiddiq):</p>
          "Hendaklah kamu selalu jujur, karena kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga."
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email / Username</label>
            <input
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Masuk
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-500">
          Belum punya akun merchant? <a href="/register" className="text-emerald-600 hover:underline">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
}
