'use client';

export default function PreOrderPage() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-32 overflow-hidden">
      <div className="glow-top-left" />
      <div className="glow-top-right" />
      <div className="container-lk relative z-10 max-w-2xl mx-auto text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Be A Part Of Live Kanvas Today!
        </h1>
        <div className="flex items-start gap-4 justify-center mb-8">
          <div className="w-[120px] h-[120px] bg-white rounded-xl flex items-center justify-center">
            <span className="text-lk-dark text-xs font-bold">QR Code</span>
          </div>
          <p className="text-lk-white-65 text-sm text-left">Download the App</p>
        </div>
        <form className="space-y-4 mb-8">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
          <label className="flex items-center gap-2 text-sm text-lk-white-65">
            <input type="checkbox" className="rounded border-lk-gray-25" />
            I agree to receive other communications from Live Kanvas.
          </label>
          <button type="submit" className="btn-primary w-full py-4">Subscribe Now</button>
        </form>
        <p className="text-sm text-lk-white-40">
          <a href="/privacy" className="underline hover:text-white">Privacy Statement</a>
        </p>
      </div>
    </section>
  );
}
