'use client';

import Link from 'next/link';

export default function CreatorsPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-32 overflow-hidden">
        <div className="glow-top-left" />
        <div className="glow-top-right" />
        <div className="container-lk relative z-10">
          <div className="max-w-3xl">
            <Link href="/pre-order" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-lk-red text-white text-sm font-semibold mb-8 hover:bg-lk-red-dark transition-colors">
              Join the Live Kanvas Tribe
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Upload Content, Engage Viewers, Get Paid.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Monetize Your Passion
          </h2>
          <p className="text-lg text-lk-white-65 max-w-4xl mx-auto mb-10 leading-relaxed">
            Live Kanvas is a next-generation social streaming platform designed to be a home for high-quality, story-driven content, including movies, short films, documentaries, podcasts, TV shows and more. We are bridging the gap between talent and global content distribution, empowering creators to turn their passion into careers.
          </p>
          <Link href="/pre-order" className="btn-primary">
            Join the Live Kanvas Tribe
          </Link>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            Why Create on Live Kanvas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '1', title: 'Global Distribution', desc: 'Reach audiences worldwide with our platform.' },
              { num: '2', title: 'Revenue Sharing', desc: 'Competitive monetization for your content.' },
              { num: '3', title: 'Content Ownership', desc: 'You own your content, always.' },
              { num: '4', title: 'Community Building', desc: 'Build and engage your audience directly.' },
              { num: '5', title: 'Analytics & Insights', desc: 'Detailed analytics to grow your channel.' },
            ].map((item) => (
              <div key={item.num} className="red-gradient-card p-8 flex items-start gap-4">
                <span className="text-5xl font-bold text-lk-red/30">{item.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-lk-white-65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <div className="red-gradient-card p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Join Live Kanvas Today!
            </h2>
            <p className="text-lg text-lk-white-65 max-w-2xl mx-auto mb-8">
              Start exploring, creating, and connecting!
            </p>
            <Link href="/pre-order" className="btn-primary">
              Join the Live Kanvas Tribe
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
