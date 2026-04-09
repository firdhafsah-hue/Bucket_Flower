import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-green-50 font-sans p-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-20 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-lg text-center border border-white/50 z-10 transition-transform duration-500 hover:scale-[1.02]">
        <div className="relative w-24 h-24 bg-gradient-to-tr from-pink-300 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-200/50">
          <span className="text-5xl drop-shadow-sm transition-transform duration-500 hover:rotate-12 hover:scale-110 cursor-default" role="img" aria-label="flower">🌸</span>
        </div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-amber-500 tracking-tight drop-shadow-sm">Bucket Flower</h1>
        <p className="text-gray-600 mt-3 text-lg font-medium">✨ Taman POS Syariah ✨</p>

        <div className="mt-10 space-y-4">
          <Link href="/POSInput" className="group relative block w-full py-4 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-2xl overflow-hidden transition-all shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-xl group-hover:animate-bounce">💐</span> Buka Taman Kasir
            </span>
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/Login" className="block w-full py-3 px-4 bg-white/80 backdrop-blur-md border-2 border-pink-100 text-pink-600 font-semibold rounded-2xl hover:bg-pink-50 hover:border-pink-300 transition-all shadow-sm">
              Masuk
            </Link>
            <Link href="/Register" className="block w-full py-3 px-4 bg-white/80 backdrop-blur-md border-2 border-amber-100 text-amber-600 font-semibold rounded-2xl hover:bg-amber-50 hover:border-amber-300 transition-all shadow-sm">
              Daftar Baru
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
