"use client";
import React, { useState } from "react";
import Link from "next/link"; // For back to menu

export default function Register() {
    const [formData, setFormData] = useState({
        storeName: "",
        ownerName: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.storeName) newErrors.storeName = "Nama toko wajib disiram (diisi).";
        if (!formData.ownerName) newErrors.ownerName = "Nama pemilik taman wajib diisi.";
        if (!formData.email) {
            newErrors.email = "Email wajib diisi.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Format email ngga valid nih.";
        }
        if (!formData.password) {
            newErrors.password = "Password wajib diisi.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password minimal 6 karakter ya!";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Hapus error saat mengetik
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log("Registering...", formData);
            alert("Pendaftaran berhasil! Lahan taman barumu sudah siap ditanami!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-emerald-50 relative overflow-hidden py-12 px-4">
            {/* Decorative Blur Elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="relative max-w-lg w-full bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 z-10 transition-transform hover:shadow-amber-100/50">
                <Link href="/" className="absolute top-5 left-5 text-gray-400 hover:text-amber-500 transition-colors">
                    <span className="text-xl">←</span>
                </Link>

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200 transform hover:scale-110 transition-transform">
                        <span className="text-3xl drop-shadow-sm">🌻</span>
                    </div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-500">Daftar Merchant</h2>
                    <p className="text-gray-500 mt-2 font-medium">Buka lahan syariah baru untuk bisnismu</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-bold text-gray-700 mb-1">Nama Toko</label>
                            <input
                                type="text"
                                name="storeName"
                                placeholder="Cth: Taman Bunga Indah"
                                value={formData.storeName}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-5 py-3 bg-white/50 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all focus:bg-white shadow-sm ${errors.storeName ? "border-red-400" : "border-gray-200"}`}
                            />
                            {errors.storeName && <p className="text-red-500 text-xs mt-1.5 font-medium px-1 flex items-center gap-1"><span>❌</span> {errors.storeName}</p>}
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-bold text-gray-700 mb-1">Nama Pemilik</label>
                            <input
                                type="text"
                                name="ownerName"
                                placeholder="Cth: Firdha"
                                value={formData.ownerName}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-5 py-3 bg-white/50 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all focus:bg-white shadow-sm ${errors.ownerName ? "border-red-400" : "border-gray-200"}`}
                            />
                            {errors.ownerName && <p className="text-red-500 text-xs mt-1.5 font-medium px-1 flex items-center gap-1"><span>❌</span> {errors.ownerName}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="nama@tamanbunga.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-5 py-3 bg-white/50 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all focus:bg-white shadow-sm ${errors.email ? "border-red-400" : "border-gray-200"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium px-1 flex items-center gap-1"><span>❌</span> {errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-5 py-3 bg-white/50 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all focus:bg-white shadow-sm ${errors.password ? "border-red-400" : "border-gray-200"}`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium px-1 flex items-center gap-1"><span>❌</span> {errors.password}</p>}
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
                        >
                            Daftarkan Taman
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500 font-medium">
                    Sudah punya lahan? <Link href="/Login" className="text-amber-600 hover:text-amber-700 font-bold hover:underline transition-colors">Gerbang Masuk di sini</Link>
                </p>
            </div>
        </div>
    );
}

