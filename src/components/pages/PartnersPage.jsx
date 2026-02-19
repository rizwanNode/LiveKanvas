'use client';

import Link from 'next/link';

export default function PartnersPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center pt-20 md:pt-32 overflow-hidden">
        <div className="glow-top-left" />
        <div className="container-lk relative z-10 text-center">
          <p className="text-lk-red font-semibold text-sm uppercase tracking-wider mb-3">
            Live Kanvas Brand Partners
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Where Brands &amp; Creators Connect Through Engaging Content
          </h1>
          <Link href="#contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">About Live Kanvas</h2>
          <p className="text-lg text-lk-white-65 leading-relaxed">
            Live Kanvas is redefining entertainment by empowering creators to share movies, podcasts, documentaries, short films, and more — all while offering brands unique opportunities to connect with highly engaged audiences.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            Brand <span className="text-lk-red">monetization</span> tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {['Access a Unique Engaged Audience', 'Innovative Advertising & Sponsorship Formats', 'Amplify Your Brand'].map((title) => (
              <div key={title} className="red-gradient-card p-8 text-center">
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-lk-white-65 text-sm">Leverage our platform for maximum brand impact.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-lk">
          <div className="red-gradient-card p-10 md:p-16 text-center">
            <p className="text-lk-red font-semibold text-sm uppercase mb-2">Brand Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock the power of partnership
            </h2>
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="container-lk max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Interested in partnering with Live Kanvas?</h2>
          <h3 className="text-2xl font-semibold text-lk-red mb-10">Contact Us</h3>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
              <input type="text" placeholder="Last name" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <input type="text" placeholder="Company" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <textarea placeholder="Inquiry" rows={4} className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red resize-none" />
            <button type="submit" className="btn-primary w-full py-4">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </>
  );
}
