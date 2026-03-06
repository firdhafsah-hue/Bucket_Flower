import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg text-center border border-gray-100">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl" role="img" aria-label="flower">🌸</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Bucket Flower</h1>
        <p className="text-gray-500 mt-4 text-lg">Sistem POS Syariah (Point of Sales)</p>

        <div className="mt-8 space-y-4">
          <Link href="/POSInput" className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Buka Kasir (POS)
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/Login" className="block w-full py-3 px-4 bg-white border-2 border-emerald-600 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              Login
            </Link>
            <Link href="/Register" className="block w-full py-3 px-4 bg-white border-2 border-emerald-600 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
