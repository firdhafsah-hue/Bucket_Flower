"use client";
import React from 'react';
import Link from 'next/link';

// Data Produk Dummy menggunakan foto bunga potret dari Unsplash yang nyata dan rapi.
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Red Romance Rose",
    category: "Ulang Tahun",
    price: 350000,
    imageUrl: "https://images.unsplash.com/photo-1563241527-3004b7be6ffd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sunny Graduation",
    category: "Bunga Wisuda",
    price: 275000,
    imageUrl: "https://images.unsplash.com/photo-1597826365998-2b8109bf4346?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pure White Elegance",
    category: "Kelahiran",
    price: 420000,
    imageUrl: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Pink Carnation Box",
    category: "Kotak Bunga",
    price: 550000,
    imageUrl: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop",
  }
];

const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* 1. TOP HEADER (Green Strip) */}
      <div className="bg-[#8bc34a] text-white text-xs px-8 py-2 flex justify-between items-center hidden md:flex">
        <span>BUNGA LOKAL DAN IMPOR SEGAR YANG BERKUALITAS TINGGI</span>
        <div className="flex gap-4">
          <span>WhatsApp: +62 812-3456-7890</span>
          <span>Bantuan</span>
        </div>
      </div>

      {/* 2. MAIN NAVBAR & LOGO */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center relative">
          {/* Kiri: Button / Link Kunjungan */}
          <div className="w-1/3">
            <button className="bg-[#8bc34a] text-white px-6 py-2 text-sm font-bold tracking-wide rounded-sm hover:-translate-y-0.5 transition-transform shadow-sm">
              KUNJUNGI BLOG
            </button>
          </div>

          {/* Tengah: Logo Utama */}
          <div className="w-1/3 flex justify-center">
            <div className="text-center">
              {/* Dummy Logo (Bisa diganti SVG nantinya) */}
              <div className="text-5xl mb-1">🪴</div>
              <h1 className="text-2xl font-serif text-gray-800 tracking-widest font-black uppercase">
                Bucket Flower
              </h1>
              <p className="text-[10px] tracking-[0.3em] font-medium text-gray-400">FLORIST</p>
            </div>
          </div>

          {/* Kanan: Cart, Login & Currency */}
          <div className="w-1/3 flex justify-end items-center gap-6 text-sm font-bold text-gray-600">
            <span className="cursor-pointer hover:text-[#8bc34a]">IDR ▼</span>
            <span className="cursor-pointer hover:text-[#8bc34a]">ID ▼</span>
            <Link href="/Login" className="text-[#8bc34a] hover:underline">AKUN SAYA ▼</Link>
            <span className="cursor-pointer hover:text-rose-500">♡ Wishlist</span>
            <div className="flex items-center gap-2 text-[#8bc34a]">
              <span>🛒</span> <span className="font-bold">0</span>
            </div>
          </div>
        </div>

        {/* 3. MENU KATEGORI BAWAH */}
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center md:gap-14 gap-6 text-xs font-bold text-gray-700 tracking-wider">
            <li className="hover:text-[#8bc34a] cursor-pointer">HAND BOUQUET</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">BUNGA MEJA</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">KOTAK BUNGA</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">BUNGA BERDIRI</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">BUNGA PAPAN</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">BUNGA PENGANTIN</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">GIFT</li>
            <li className="hover:text-[#8bc34a] cursor-pointer">BERDASARKAN ACARA ▼</li>
            <li className="hover:text-[#8bc34a] cursor-pointer ml-auto">🔍</li>
          </ul>
        </nav>
      </header>

      {/* 4. HERO BANNER */}
      <section className="w-full relative h-[600px] bg-slate-100 flex items-center justify-center overflow-hidden">
        {/* Gambar banner besar */}
        <img
          src="https://images.unsplash.com/photo-1561181286-d3fee7d55ef3?q=80&w=2000&auto=format&fit=crop"
          alt="Banner Toko Bunga"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {/* Overlay tipis agar teks lebih terbaca jika ada */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Teks Promosi Overlay (Opsional) */}
        <div className="relative z-10 text-center bg-white/80 backdrop-blur-md p-10 rounded-sm shadow-xl max-w-xl mx-4">
          <h2 className="text-3xl font-serif text-gray-800 font-bold mb-4">Rangkaian Bunga Eksklusif</h2>
          <p className="text-gray-600 mb-6 font-medium">Ungkapkan perasaanmu melalui bunga berkualitas premium dari Bucket Flower Florist.</p>
          <button className="bg-[#8bc34a] text-white px-8 py-3 font-bold tracking-widest text-sm hover:bg-[#7cb342] transition-colors">
            PESAN SEKARANG
          </button>
        </div>
      </section>

      {/* 5. GRID KATALOG (Produk Baru) */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif text-center mb-10 text-gray-800 uppercase tracking-widest">Koleksi Terpopuler</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DUMMY_PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="text-[#8bc34a] font-bold text-xs tracking-wider mb-2 uppercase">{product.category}</p>
                <h3 className="text-gray-800 font-medium text-lg mb-1 group-hover:text-[#8bc34a] transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-4">{formatRupiah(product.price)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/POSInput" className="inline-block border-2 border-gray-300 text-gray-600 px-8 py-3 text-sm font-bold tracking-widest hover:border-[#8bc34a] hover:text-[#8bc34a] transition-all">
            LIHAT SEMUA KOLEKSI / BUKA KASIR TESTER
          </Link>
        </div>
      </section>

      {/* 6. SERVICE - JAMINAN KAMI PADA ANDA */}
      <section className="bg-gray-50 py-16 border-t border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 relative flex items-center justify-center">
            <div className="h-px bg-gray-300 flex-1 max-w-[200px]"></div>
            <h2 className="text-xl font-bold text-[#8bc34a] tracking-[0.2em] px-6">SERVICE</h2>
            <div className="h-px bg-gray-300 flex-1 max-w-[200px]"></div>
          </div>
          <p className="text-center text-sm tracking-[0.2em] text-gray-500 mb-12">JAMINAN KAMI PADA ANDA</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#8bc34a] flex items-center justify-center text-4xl mb-6 text-[#8bc34a]">
                🚚
              </div>
              <h4 className="text-gray-700 font-bold tracking-wider mb-2">Kirim di Hari yang Sama</h4>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#8bc34a] flex items-center justify-center text-4xl mb-6 text-[#8bc34a]">
                🛡️
              </div>
              <h4 className="text-gray-700 font-bold tracking-wider mb-2">Pembayaran Aman</h4>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#8bc34a] flex items-center justify-center text-4xl mb-6 text-[#8bc34a]">
                💐
              </div>
              <h4 className="text-gray-700 font-bold tracking-wider mb-2">Pilihan Bunga Variatif</h4>
            </div>
          </div>

          <h3 className="text-center font-bold tracking-[0.2em] mt-16 text-gray-800 text-lg">BUNGA LOKAL DAN IMPOR SEGAR YANG BERKUALITAS TINGGI</h3>
        </div>
      </section>

      {/* 7. DESKRIPSI SINGKAT DARI TOKO KITA */}
      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <h3 className="text-2xl font-bold text-[#8bc34a] mb-6 italic font-serif">Bucket Florist Jakarta dan Sekitarnya</h3>
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          Sejak tahun ini, Bucket Florist telah dikenal sebagai toko bunga florist yang menyediakan berbagai rangkaian bunga segar berkualitas untuk bunga buket, bunga papan, bunga meja, dan berbagai bentuk rangkaian bunga lainnya untuk berbagai momen spesial Anda khususnya bagi Anda yang bertempat di Kotamu.
        </p>
        <button className="border border-[#8bc34a] text-[#8bc34a] px-6 py-2 text-xs font-bold tracking-widest hover:bg-[#8bc34a] hover:text-white transition-colors">
          ABOUT US
        </button>
      </section>

      {/* 8. FOOTER GELAP */}
      <footer className="bg-[#2c2c2c] text-white pt-16 pb-8 border-t-[8px] border-[#8bc34a]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-sm">
          {/* Kolom 1 */}
          <div>
            <h4 className="text-[#8bc34a] font-bold tracking-widest mb-6 text-xs">BUCKET FLORIST</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#8bc34a] cursor-pointer">Order & Delivery</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Our Service</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">About Us</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Kontak Kami</li>
            </ul>
          </div>

          {/* Kolom 2 */}
          <div>
            <h4 className="text-[#8bc34a] font-bold tracking-widest mb-6 text-xs">KATEGORI</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Hand Bouquet</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Bunga Meja</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Kotak Bunga</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Bunga Berdiri</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Bunga Papan</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Bunga Pengantin</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">GIFT</li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h4 className="text-[#8bc34a] font-bold tracking-widest mb-6 text-xs">BUNGA</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#8bc34a] cursor-pointer">Agapanthus</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Alstroemeria</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Anggrek</li>
              <li className="hover:text-[#8bc34a] cursor-pointer inline-flex items-center gap-2">Aster <span className="bg-[#8bc34a] text-white text-[9px] px-1 rounded">HOT</span></li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Baby Breath</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Mawar</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Tulip</li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h4 className="text-[#8bc34a] font-bold tracking-widest mb-6 text-xs">ACARA</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Produk Baru</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Kasih Sayang</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Dukacita</li>
              <li className="hover:text-[#8bc34a] cursor-pointer">Ulang Tahun</li>
              <li className="hover:text-[#8bc34a] cursor-pointer text-white">Bunga Wisuda</li>
            </ul>
          </div>

          {/* Kolom 5 */}
          <div>
            <h4 className="text-[#8bc34a] font-bold tracking-widest mb-6 text-xs">LET'S GET IN TOUCH!</h4>
            <div className="flex border-b border-gray-600 pb-2 mb-6">
              <input type="text" placeholder="Tulis email Anda" className="bg-transparent border-none outline-none text-white w-full text-sm" />
              <button className="bg-[#8bc34a] text-white px-4 py-1 text-xs">BERLANGGANAN</button>
            </div>

            <div className="flex gap-4 opacity-50 flex-wrap">
              <span>💳 PayPal</span>
              <span>💳 VISA</span>
              <span>💳 Mastercard</span>
              <span>🏦 BCA</span>
              <span>🏦 Mandiri</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 border-t border-gray-700 pt-8 flex justify-between items-center text-xs text-gray-500">
          <div className="flex gap-4 text-gray-400 text-lg">
            <span className="hover:text-white cursor-pointer">𝕏</span>
            <span className="hover:text-white cursor-pointer">📷</span>
            <span className="hover:text-white cursor-pointer">📰</span>
          </div>
          <p>© 2026 Bucket Florist. Toko Bunga Online Seluruh Indonesia. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="#" className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex justify-center items-center text-3xl shadow-2xl hover:scale-110 transition-transform hover:bg-green-600 z-50">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-8 h-8" />
      </a>

    </div>
  );
}
