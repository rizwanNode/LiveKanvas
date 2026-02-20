'use client';

export default function PreOrderPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-black via-[#140000] to-black pt-48 pb-[550px] md:pb-[400px]">

      {/* Red Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] bg-red-700 blur-[220px] opacity-60 rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">

          {/* LEFT - QR */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-5 rounded-2xl shadow-2xl">
              <img
                src="/qr-code.png"
                alt="QR Code"
                className="w-[170px] h-[170px] object-contain"
              />
            </div>
            <p className="text-white text-xl mt-4 font-bold">
              Download the App
            </p>
          </div>

          {/* RIGHT - Content */}
          <div className="max-w-lg w-full">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-10">
              Be A Part Of Live Kanvas Today!
            </h1>

            <form className="space-y-5">

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />

              {/* Checkbox */}
              <label className="flex items-center gap-3 text-sm text-white/70">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-white/40 bg-transparent accent-red-600 rounded-sm"
                />
                I agree to receive other communications from Live Kanvas.
              </label>

              {/* Button */}
              <button
                type="submit"
                className="mt-4 px-8 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl text-white font-medium shadow-xl hover:shadow-red-700/40"
              >
                Subscribe Now
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}