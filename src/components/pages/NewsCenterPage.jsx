'use client';

export default function NewsCenterPage() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-lk relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">News Center</h1>
            <p className="text-lk-white-65">Latest News</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-lk-gray-15 hover:border-lk-red/40 transition-all cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-lk-red/20 to-lk-dark" />
              <div className="p-5">
                <p className="text-sm text-lk-white-40 mb-2">February {i * 3}, 2025</p>
                <h3 className="text-lg font-bold text-white">News Article Title {i}</h3>
                <p className="text-sm text-lk-white-65 mt-2">Latest updates and news from Live Kanvas.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
