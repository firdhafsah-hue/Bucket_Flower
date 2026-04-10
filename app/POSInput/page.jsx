"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link"; // For back to menu

const THEME = {
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', shadow: 'shadow-rose-100 border-rose-100', hover: 'hover:border-rose-400', icon: '🌹', light: 'bg-rose-100', btn: 'bg-rose-200 hover:bg-rose-300 text-rose-800' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', shadow: 'shadow-amber-100 border-amber-100', hover: 'hover:border-amber-400', icon: '🌻', light: 'bg-amber-100', btn: 'bg-amber-200 hover:bg-amber-300 text-amber-800' },
    fuchsia: { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-700', shadow: 'shadow-fuchsia-100 border-fuchsia-100', hover: 'hover:border-fuchsia-400', icon: '🌷', light: 'bg-fuchsia-100', btn: 'bg-fuchsia-200 hover:bg-fuchsia-300 text-fuchsia-800' },
    sky: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700', shadow: 'shadow-sky-100 border-sky-100', hover: 'hover:border-sky-400', icon: '🌼', light: 'bg-sky-100', btn: 'bg-sky-200 hover:bg-sky-300 text-sky-800' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', shadow: 'shadow-emerald-100 border-emerald-100', hover: 'hover:border-emerald-400', icon: '🌿', light: 'bg-emerald-100', btn: 'bg-emerald-200 hover:bg-emerald-300 text-emerald-800' },
};

const DUMMY_PRODUCTS = [
    { id: 1, name: "Buket Mawar Marun", price: 150000, category: "Bunga Segar", theme: "rose" },
    { id: 2, name: "Buket Matahari", price: 75000, category: "Bunga Segar", theme: "amber" },
    { id: 3, name: "Buket Tulip Lembayung", price: 250000, category: "Premium", theme: "fuchsia" },
    { id: 4, name: "Buket Daisy Biru", price: 120000, category: "Bunga Segar", theme: "sky" },
    { id: 5, name: "Lily Pink Bloom", price: 180000, category: "Premium", theme: "rose" },
    { id: 6, name: "Pita Daun Mint Hias", price: 90000, category: "Pelengkap", theme: "emerald" },
];

export default function POSInput() {
    const [cart, setCart] = useState([]);
    const [includeSadaqah, setIncludeSadaqah] = useState(false);

    // --- State untuk Jam Digital ---
    const [time, setTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = mounted ? time.toLocaleTimeString('id-ID', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) : "00:00:00";
    const formattedDate = mounted ? time.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "Memuat Hari...";
    // -------------------------------

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

    const computedSadaqah = useMemo(() => {
        return Math.round(subtotal * 0.025);
    }, [subtotal]);

    const total = subtotal + (includeSadaqah ? computedSadaqah : 0);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
    };

    const handleCheckout = () => {
        if (cart.length === 0) return alert("Keranjang masih kosong kak! 🌱");
        alert(`Transaksi Taman Bunga berhasil!\nTotal: ${formatRupiah(total)}.\nTerima kasih! ✨`);
        setCart([]);
        setIncludeSadaqah(false);
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-pink-100 to-sky-100 font-sans overflow-hidden flex-nowrap relative">
            {/* Elemen Dekoratif Tambahan (Abstract Shapes) dari Skema CSS barumu */}
            <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-[#a3e1f7]/50 rounded-full blur-[60px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[20px] right-[20px] w-[200px] h-[200px] bg-[#ff477e]/40 rounded-full blur-[60px] pointer-events-none z-0"></div>

            {/* Kiri: Daftar Produk (Taman) */}
            <div className="w-2/3 p-8 overflow-y-auto custom-scrollbar relative z-10">

                <div className="flex justify-between items-center mb-8 bg-white/85 p-5 rounded-3xl backdrop-blur-xl border border-white/40 shadow-[0_10px_30px_rgba(255,71,126,0.15)] relative z-10">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:scale-105 transition-transform text-gray-600">
                            🏠
                        </Link>
                        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">
                            Taman Bunga Kasir
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Widget Jam Digital & Tanggal Murni dari Kode HTML Kamu */}
                        <div className="text-right border-r border-white/50 pr-6">
                            <div className="text-2xl font-black text-pink-500 leading-tight mb-1">{formattedTime}</div>
                            <div className="text-[13px] font-semibold text-gray-500">{formattedDate}</div>
                        </div>

                        {/* Sharia Compliance Badge */}
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-200 shadow-md transform hover:scale-105 transition-transform cursor-default">
                            <span className="animate-pulse">✨</span> Sharia Certified
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {DUMMY_PRODUCTS.map((product) => {
                        const style = THEME[product.theme];
                        return (
                            <div
                                key={product.id}
                                onClick={() => addToCart(product)}
                                className={`group relative p-6 rounded-3xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white/70 backdrop-blur-sm border-2 ${style.shadow} ${style.hover}`}
                            >
                                <div className={`w-20 h-20 mx-auto rounded-full flex justify-center items-center text-4xl shadow-inner transition-transform duration-500 group-hover:scale-110 mb-5 ${style.light}`}>
                                    {style.icon}
                                </div>
                                <h3 className="font-bold text-gray-800 text-center text-lg leading-tight mb-2">{product.name}</h3>
                                <p className={`text-center font-extrabold ${style.text} bg-white/60 py-1 px-3 rounded-full inline-block mx-auto w-fit block`}>
                                    {formatRupiah(product.price)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Kanan: Ringkasan Transaksi (Keranjang) */}
            <div className="w-1/3 bg-white/80 backdrop-blur-xl shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)] flex flex-col border-l border-white overflow-hidden relative">
                <div className="p-6 bg-gradient-to-r from-pink-50 to-amber-50 border-b border-pink-100">
                    <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                        🧺 Keranjang Bunga
                    </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-400 mt-20 flex flex-col items-center">
                            <span className="text-6xl mb-4 opacity-50">🍃</span>
                            <p className="font-medium">Belum ada bunga yang dipetik</p>
                        </div>
                    ) : (
                        cart.map((item) => {
                            const style = THEME[item.theme];
                            return (
                                <div key={item.id} className={`flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border-l-4 ${style.border} hover:shadow-md transition-shadow`}>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span>{style.icon}</span>
                                            <h4 className="font-bold text-gray-800 text-sm leading-tight">{item.name}</h4>
                                        </div>
                                        <p className={`text-sm font-semibold ${style.text}`}>{formatRupiah(item.price)}</p>
                                    </div>
                                    <div className="flex items-center gap-2 ml-2 bg-gray-50 p-1 rounded-full border border-gray-100">
                                        <button onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }} className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-red-500 font-bold hover:scale-110 transition-transform">-</button>
                                        <span className="font-bold w-4 text-center text-sm text-gray-700">{item.qty}</span>
                                        <button onClick={(e) => { e.stopPropagation(); addToCart(item); }} className={`w-7 h-7 rounded-full shadow-sm flex items-center justify-center font-bold hover:scale-110 transition-transform ${style.btn}`}>+</button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Ringkasan & Kalkulator Zakat */}
                <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-between mb-3 text-gray-500 font-medium">
                        <span>Subtotal Keranjang</span>
                        <span>{formatRupiah(subtotal)}</span>
                    </div>

                    <div className="flex items-center justify-between mb-5 bg-gradient-to-r from-emerald-50 to-green-50 p-3 rounded-xl border border-emerald-100 shadow-sm cursor-pointer hover:shadow-md transition-all group" onClick={() => setIncludeSadaqah(!includeSadaqah)}>
                        <label className="flex items-center cursor-pointer pointer-events-none">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-colors ${includeSadaqah ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-emerald-300'}`}>
                                {includeSadaqah && <span className="text-white text-xs">✓</span>}
                            </div>
                            <span className="font-bold text-emerald-800 text-sm group-hover:text-emerald-600 transition-colors">Infaq / Sedekah (2.5%)</span>
                        </label>
                        <span className="text-emerald-600 font-bold text-sm">+{formatRupiah(computedSadaqah)}</span>
                    </div>

                    <div className="flex justify-between mb-6 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-amber-600">
                        <span>Total Bayar</span>
                        <span>{formatRupiah(total)}</span>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full bg-gradient-to-tr from-rose-500 to-pink-400 text-white py-4 rounded-[15px] font-bold text-[1rem] hover:opacity-90 transition-opacity shadow-[0_5px_15px_rgba(255,71,126,0.3)] transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                    >
                        <span>Cetak Struk Pembayaran</span> <span className="text-xl">🖨️</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

