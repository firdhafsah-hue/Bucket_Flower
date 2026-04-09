"use client";
import React, { useState } from "react";
import Link from "next/link"; // For back to menu

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative w-full max-w-md bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 z-10 transition-transform hover:shadow-pink-100/50">
        <Link href="/" className="absolute top-5 left-5 text-gray-400 hover:text-pink-500 transition-colors">
          <span className="text-xl">←</span>
        </Link>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-pink-400 to-amber-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-200 transform rotate-3 hover:rotate-6 transition-transform">
            <span className="text-3xl drop-shadow-sm">🌷</span>
          </div>
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-emerald-600">Sharia POS</h2>
          <p className="text-gray-500 mt-2 font-medium">✨ Selamat Datang Kembali ✨</p>
        </div>

        {/* Islamic Ethics Reminder */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/50 text-emerald-800 p-4 rounded-xl mb-8 text-sm italic text-center shadow-inner relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400 group-hover:bg-emerald-500 transition-colors"></div>
          <p className="font-bold mb-1 flex items-center justify-center gap-1"><span>💎</span> Etika Bisnis (Shiddiq)</p>
          "Hendaklah kamu selalu jujur, karena kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga."
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email / Username</label>
            <input
              type="text"
              required
              className="mt-1 block w-full px-5 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all focus:bg-white shadow-sm"
              placeholder="nama@tamanbunga.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="mt-1 block w-full px-5 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all focus:bg-white shadow-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5"
            >
              Masuk Taman
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500 font-medium">
          Belum punya lahan jualan? <Link href="/Register" className="text-pink-600 hover:text-pink-700 font-bold hover:underline transition-colors">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
}
