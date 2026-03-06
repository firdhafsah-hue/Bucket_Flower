"use client";
import React, { useState } from "react";

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
        if (!formData.storeName) newErrors.storeName = "Nama toko wajib diisi.";
        if (!formData.ownerName) newErrors.ownerName = "Nama pemilik wajib diisi.";
        if (!formData.email) {
            newErrors.email = "Email wajib diisi.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Format email tidak valid.";
        }
        if (!formData.password) {
            newErrors.password = "Password wajib diisi.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password minimal 6 karakter.";
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
            alert("Pendaftaran berhasil!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Daftar Merchant</h2>
                    <p className="text-gray-500 mt-2">Mulai kelola usaha Anda secara syariah</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nama Toko</label>
                        <input
                            type="text"
                            name="storeName"
                            value={formData.storeName}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.storeName ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.storeName && (
                            <p className="text-red-500 text-xs mt-1">{errors.storeName}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nama Pemilik</label>
                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.ownerName ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.ownerName && (
                            <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-colors mt-4 shadow-sm"
                    >
                        Daftar Merchant
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Sudah punya akun? <a href="/login" className="text-emerald-600 hover:underline">Masuk di sini</a>
                </p>
            </div>
        </div>
    );
}
