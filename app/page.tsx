import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Latar Belakang Animasi Gelembung */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-50 to-green-50 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Kartu Konten Utama (Glassmorphism) */}
      <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center relative overflow-hidden group hover:shadow-pink-200/50 transition-shadow duration-500">

        {/* Ikon Bunga Dekoratif di atas judul */}
        <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-pink-300 to-amber-200 rounded-full shadow-lg flex items-center justify-center text-4xl mb-6 transform group-hover:rotate-12 transition-transform duration-500">
          🌸
        </div>

        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-amber-500 mb-4 tracking-tight">
          Selamat Datang di
          <br />
          Taman Bunga
        </h1>

        <p className="text-gray-600 text-lg mb-8 font-medium">
          Aplikasi pelayanan penjualan syariah yang dirancang khusus untuk mewarnai harimu!
        </p>

        {/* Tombol Aksi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/POSInput"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-pink-400/50 transform hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>💐</span> Buka Kasir
          </Link>

          <Link
            href="/Login"
            className="w-full bg-white/80 text-rose-500 border border-rose-200 font-bold py-3 px-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-rose-50 transform hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Masuk / Login
          </Link>
        </div>
      </div>
    </div>
  );
}
