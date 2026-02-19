'use client';

export default function HelpCenterPage() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-lk relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support</h1>
        <p className="text-lk-white-65 text-lg mb-8 leading-relaxed">
          Have questions, feedback, or ideas? We are here to help. Whether you&apos;re a content creator, a potential partner, or just curious about what we do, don&apos;t hesitate to reach out.
        </p>
        <div className="relative mb-12">
          <input type="text" placeholder="Search" className="w-full px-5 py-4 bg-lk-gray-15 border border-lk-gray-25 rounded-xl text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red pr-12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
            {['Account', 'Manage your Podcast', 'Content Set up'].map((item) => (
              <div key={item} className="p-4 border-b border-lk-gray-15 text-lk-white-65 hover:text-white transition-colors cursor-pointer">
                {item}
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Topics</h2>
            {['Getting Started', 'Live Streaming', 'Monetization', 'Account Settings'].map((item) => (
              <div key={item} className="p-4 border-b border-lk-gray-15 text-lk-white-65 hover:text-white transition-colors cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">News</h2>
          <div className="p-4 border-b border-lk-gray-15 text-lk-white-48 text-sm">
            January 27, 2025
          </div>
        </div>
      </div>
    </section>
  );
}
