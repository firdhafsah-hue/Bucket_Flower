"use client";
import React, { useState, useMemo } from "react";

const DUMMY_PRODUCTS = [
    { id: 1, name: "Buket Mawar Merah (Medium)", price: 150000, category: "Bunga Segar" },
    { id: 2, name: "Buket Tulip & Lily (Premium)", price: 250000, category: "Bunga Segar" },
    { id: 3, name: "Buket Bunga Kering (Rustic)", price: 85000, category: "Bunga Kering" },
    { id: 4, name: "Snack & Money Bouquet", price: 350000, category: "Custom" },
];

export default function POSInput() {
    const [cart, setCart] = useState([]);
    const [includeSadaqah, setIncludeSadaqah] = useState(false);
    const [sadaqahAmount, setSadaqahAmount] = useState(0);

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const existing = cart.find(item => item.id === productId);
        if (existing && existing.qty > 1) {
            setCart(cart.map(item => item.id === productId ? { ...item, qty: item.qty - 1 } : item));
        } else {
            setCart(cart.filter(item => item.id !== productId));
        }
    };

    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + (item.price * item.qty), 0);
    }, [cart]);

    // Kalkulator Zakat / Infaq / Sadaqah ringan
    // Misalnya 2.5% kalau mau pembulatan ke atas, atau nominal sukarela. Di sini kita hitung 2.5% otomatis sebagai pilihan
    const computedSadaqah = useMemo(() => {
        return Math.round(subtotal * 0.025);
    }, [subtotal]);

    const total = subtotal + (includeSadaqah ? computedSadaqah : 0);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
    };

    const handleCheckout = () => {
        if (cart.length === 0) return alert("Keranjang kosong!");
        alert(`Transaksi berhasil senilai ${formatRupiah(total)}. Terima kasih!`);
        setCart([]);
        setIncludeSadaqah(false);
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Kiri: Daftar Produk */}
            <div className="w-2/3 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Kasir Utama</h1>
                    {/* Sharia Compliance Badge */}
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold border border-green-200 shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        Sharia Compliance
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {DUMMY_PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => addToCart(product)}
                            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-xl">🛒</span>
                            </div>
                            <h3 className="font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-emerald-600 font-medium mt-1">{formatRupiah(product.price)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kanan: Ringkasan Transaksi */}
            <div className="w-1/3 bg-white p-6 shadow-[-4px_0_15px_-10px_rgba(0,0,0,0.1)] flex flex-col border-l border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">Keranjang</h2>

                <div className="flex-1 overflow-y-auto">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-400 mt-10">Belum ada barang di keranjang</div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{formatRupiah(item.price)} x {item.qty}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold">-</button>
                                    <span className="font-semibold w-4 text-center">{item.qty}</span>
                                    <button onClick={() => addToCart(item)} className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 shadow flex items-center justify-center hover:bg-emerald-200 font-bold">+</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Ringkasan & Kalkulator Zakat */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2 text-gray-600">
                        <span>Subtotal</span>
                        <span>{formatRupiah(subtotal)}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={includeSadaqah}
                                onChange={() => setIncludeSadaqah(!includeSadaqah)}
                                className="w-5 h-5 text-emerald-600 rounded border-emerald-300 focus:ring-emerald-500 cursor-pointer"
                            />
                            <span className="ml-3 font-medium text-emerald-800 text-sm">Tambahkan Infaq/Sedekah (2.5%)</span>
                        </label>
                        <span className="text-emerald-700 text-sm">+{formatRupiah(computedSadaqah)}</span>
                    </div>

                    <div className="flex justify-between mb-6 text-xl font-bold text-gray-800 border-b border-t py-3">
                        <span>Total Bayar</span>
                        <span>{formatRupiah(total)}</span>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                        Bayar Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}
