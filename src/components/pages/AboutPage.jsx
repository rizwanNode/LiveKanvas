'use client';

import Link from 'next/link';

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative bg-[#0c0c0c] min-h-screen">
      {/* ── Fixed Background Gradients (Faithful to Mockup) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top center red glow */}
        <div
          className="absolute w-[1000px] h-[800px] rounded-full blur-[150px]"
          style={{
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(226,40,63,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Glow behind "The World on Your Kanvas" */}
        <div
          className="absolute w-[1200px] h-[800px] rounded-full blur-[160px]"
          style={{
            top: '45%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(226,40,63,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Bottom glow for signup area */}
        <div
          className="absolute w-[1000px] h-[800px] rounded-full blur-[150px]"
          style={{
            bottom: '-10%',
            left: '40%',
            background: 'radial-gradient(circle, rgba(226,40,63,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 md:pt-48 pb-20 z-10">
        <div className="container-lk text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-[52px] lg:leading-[1.1] font-bold text-white max-w-[1000px] mx-auto tracking-tight">
            We&apos;re restoring the joy of content with community-driven
            experiences, top-tier quality, and creator recognition.
          </h1>
        </div>
      </section>

      {/* ── About Us ── */}
      <section className="relative z-10 py-10">
        <div className="container-lk max-w-[1100px] mx-auto px-4">
          <h2 className="text-[#e2283f] text-center text-lg md:text-xl font-bold mb-6 tracking-wide">
            About Us
          </h2>
          <div className="bg-[#1a1a1a]/70 backdrop-blur-xl rounded-[35px] border border-white/10 p-10 md:p-16 shadow-2xl">
            <p className="text-white/90 text-center text-lg md:text-2xl lg:text-[32px] lg:leading-[1.4] font-medium italic">
              Live Kanvas is a revolutionary social streaming platform offering
              authentic, diverse entertainment from underrepresented global
              talent. By combining user-generated content with interactive
              features, it redefines how users consume and co-create
              entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="relative z-10 py-10">
        <div className="container-lk max-w-[1100px] mx-auto px-4">
          <h2 className="text-[#e2283f] text-center text-lg md:text-xl font-bold mb-6 tracking-wide">
            What Sets Us Apart
          </h2>
          <div className="bg-[#1a1a1a]/70 backdrop-blur-xl rounded-[35px] border border-white/10 p-10 md:p-16 shadow-2xl">
            <p className="text-white/90 text-center text-lg md:text-2xl lg:text-[32px] lg:leading-[1.4] font-medium">
              We are a creator-led platform dedicated to prioritizing the needs
              of hardworking creators. We recognize the value of content
              ownership, access to diverse audiences, robust content management
              and analytics, community building, and income generation. Live
              Kanvas was built to &ldquo;Give creators back control of their
              content.&rdquo; With our user-friendly platform, Live Kanvas aims
              to become a driving force in discovering tomorrow&apos;s leading
              talent.
            </p>
          </div>
        </div>
      </section>

      {/* ── Massive Text Overlay ── */}
      <section className="relative z-10 py-20 overflow-hidden">
        <div className="container-lk text-center">
          <h2
            className="text-6xl md:text-8xl lg:text-[140px] font-black italic uppercase leading-none select-none tracking-tighter"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(255,255,255,0.2)',
              textShadow: '0 0 40px rgba(226,40,63,0.3)',
            }}
          >
            The World on Your Kanvas.
          </h2>
        </div>
      </section>

      {/* ── Our Vision ── */}
      <section className="relative z-10 py-10">
        <div className="container-lk max-w-[1100px] mx-auto px-4">
          <h2 className="text-[#e2283f] text-center text-lg md:text-xl font-bold mb-6 tracking-wide">
            Our Vision
          </h2>
          <div className="bg-[#1a1a1a]/70 backdrop-blur-xl rounded-[35px] border border-white/10 p-10 md:p-16 shadow-2xl">
            <p className="text-white/90 text-center text-lg md:text-2xl lg:text-[32px] lg:leading-[1.4] font-medium">
              Our mission is to provide authentic representation, diverse
              stories, and entertainment from today&apos;s top undervalued
              talent around the globe. We prioritize community building by
              fostering unique and diverse storytelling, promoting interactivity
              through live streaming and social features like likes and
              comments, and empowering creators with control over their revenue
              earnings through a competitive monetization model.
            </p>
          </div>
        </div>
      </section>

      {/* ── Get Started Today! (Refined Red Box) ── */}
      <section className="relative z-10 py-20 px-4">
        <div className="container-lk">
          <div className="bg-gradient-to-r from-[#e2283f] to-[#aa1d2f] rounded-[45px] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
            <div className="flex-1 text-left relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Get Started Today!
              </h2>
              <p className="text-xl md:text-3xl text-white font-medium mb-12 max-w-md">
                A social streaming experience right at your fingertips.
              </p>
              <Link
                href="/pre-order"
                className="inline-block bg-[#e2283f] border-2 border-white text-white px-10 py-4 rounded-[20px] text-xl font-bold hover:bg-white hover:text-[#e2283f] transition-all"
              >
                Download the App
              </Link>
            </div>
            
            <div className="relative z-10 flex-shrink-0">
              <img
                src="/images/kanvas/iPhone%2012%20Mockup%20Perspective%20Right.png"
                alt="Live Kanvas App"
                className="w-[280px] md:w-[350px] lg:w-[420px] drop-shadow-[0_50px_60px_rgba(0,0,0,0.6)] transform rotate-[-4deg] group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Signup Section (Refined) ── */}
      <section className="relative z-10 py-20 pb-32">
        <div className="container-lk max-w-[900px] px-6">
          <div className="relative mb-12">
            {/* Glow behind title */}
            <div className="absolute -inset-10 bg-[#e2283f]/10 blur-[60px] rounded-full -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Start exploring, creating, and connecting!
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-normal">
              Experience the next evolution of content creation and live streaming.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl text-white font-semibold">
              Sign up now for special updates!
            </h3>
            <div className="flex flex-col gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[600px] px-8 py-5 bg-[#252525] rounded-[25px] text-white text-xl placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e2283f] transition-all border border-white/5"
              />
              <label className="flex items-center gap-4 text-white/60 text-lg cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-md border-white/20 bg-transparent accent-[#e2283f]"
                />
                I agree to receive other communications from Live Kanvas.
              </label>
              <button className="bg-[#e2283f] text-white px-10 py-4 rounded-[20px] text-xl font-bold hover:bg-[#c41e32] transition-colors shadow-2xl shadow-[#e2283f]/40 w-fit mt-2">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
